export default async function Loading({ searchParams }) {
	const params = await searchParams;
	const lang = params.lang || "en";
	// Stack uses React Suspense, which will render this page while user data is being fetched.
	// See: https://nextjs.org/docs/app/api-reference/file-conventions/loading
	return <></>;
}
