import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-700">
        The page you are looking for does not exist.
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Link back to Home
      </Link>
    </div>
  );
}