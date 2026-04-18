import { NextRequest, NextResponse } from "next/server";

function isBlockedHostname(hostname: string): boolean {
	const h = hostname.toLowerCase();
	if (h === "localhost" || h === "0.0.0.0") return true;
	if (h.endsWith(".localhost") || h.endsWith(".local")) return true;
	if (h.endsWith(".internal")) return true;

	const m = h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
	if (m) {
		const a = Number(m[1]);
		const b = Number(m[2]);
		if (a === 10) return true;
		if (a === 127) return true;
		if (a === 0) return true;
		if (a === 169 && b === 254) return true;
		if (a === 192 && b === 168) return true;
		if (a === 172 && b >= 16 && b <= 31) return true;
		if (a === 100 && b >= 64 && b <= 127) return true;
	}
	return false;
}

function assertSafeUrl(raw: string): URL {
	let u: URL;
	try {
		u = new URL(raw.trim());
	} catch {
		throw new Error("Invalid URL");
	}
	if (u.protocol !== "http:" && u.protocol !== "https:") {
		throw new Error("Only http(s) URLs are allowed");
	}
	if (isBlockedHostname(u.hostname)) {
		throw new Error("That host is not allowed");
	}
	return u;
}

export async function POST(req: NextRequest) {
	try {
		const body = (await req.json()) as {
			url?: string;
			mode?: "headChain" | "getText" | "getHeaders";
			maxBytes?: number;
		};
		const urlStr = typeof body?.url === "string" ? body.url : "";
		const mode =
			body?.mode === "getText"
				? "getText"
				: body?.mode === "getHeaders"
					? "getHeaders"
					: "headChain";
		const maxBytes = Math.min(
			Math.max(Number(body?.maxBytes) || 200_000, 10_000),
			500_000,
		);

		const first = assertSafeUrl(urlStr);
		const chain: { url: string; status: number; location?: string }[] = [];

		if (mode === "getHeaders") {
			const res = await fetch(first.toString(), {
				method: "HEAD",
				redirect: "follow",
				headers: {
					"User-Agent": "30tools-header-fetch/1.0",
					Accept: "*/*",
				},
				signal: AbortSignal.timeout(12_000),
			});
			const headers: Record<string, string> = {};
			res.headers.forEach((value, key) => {
				headers[key] = value;
			});
			return NextResponse.json({
				finalUrl: res.url,
				status: res.status,
				headers,
			});
		}

		if (mode === "getText") {
			const res = await fetch(first.toString(), {
				method: "GET",
				redirect: "follow",
				headers: {
					"User-Agent": "30tools-meta-fetch/1.0",
					Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
				},
				signal: AbortSignal.timeout(15_000),
			});
			const reader = res.body?.getReader();
			if (!reader) {
				return NextResponse.json(
					{ error: "No response body" },
					{ status: 502 },
				);
			}
			const chunks: Uint8Array[] = [];
			let total = 0;
			for (;;) {
				const { done, value } = await reader.read();
				if (done) break;
				if (value) {
					total += value.byteLength;
					chunks.push(value);
					if (total >= maxBytes) break;
				}
			}
			const decoder = new TextDecoder("utf-8");
			let text = "";
			for (const c of chunks) {
				text += decoder.decode(c, { stream: true });
				if (text.length >= maxBytes) break;
			}
			text = text.slice(0, maxBytes);
			return NextResponse.json({
				finalUrl: res.url,
				status: res.status,
				text,
			});
		}

		let current = first.toString();
		for (let i = 0; i < 12; i++) {
			const u = new URL(current);
			if (isBlockedHostname(u.hostname)) {
				return NextResponse.json(
					{ error: "Redirect left allowed network range" },
					{ status: 400 },
				);
			}
			const res = await fetch(current, {
				method: "HEAD",
				redirect: "manual",
				headers: { "User-Agent": "30tools-head-check/1.0" },
				signal: AbortSignal.timeout(12_000),
			});
			const loc = res.headers.get("location") || undefined;
			chain.push({ url: current, status: res.status, location: loc });
			if (res.status >= 300 && res.status < 400 && loc) {
				current = new URL(loc, current).toString();
				continue;
			}
			break;
		}

		return NextResponse.json({ chain });
	} catch (e) {
		const msg = e instanceof Error ? e.message : "Request failed";
		return NextResponse.json({ error: msg }, { status: 400 });
	}
}
