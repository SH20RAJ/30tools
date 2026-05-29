"use client";

import { Component, type ReactNode } from "react";

interface Props {
	children: ReactNode;
	fallback: ReactNode;
}

// Minimal client-side error boundary. Renders `fallback` if the subtree throws
// during render or hydration instead of letting the error bubble to the root
// global-error page (which blanks the entire app).
export class ErrorBoundary extends Component<Props, { hasError: boolean }> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		return this.state.hasError ? this.props.fallback : this.props.children;
	}
}
