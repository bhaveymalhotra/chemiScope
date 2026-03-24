import Link from 'next/link';

export default function NotFound() {
  return <main className="container-x py-24 text-center"><h1 className="h2">404</h1><p className="mt-3 text-steel">The page you are looking for is not available.</p><Link href="/" className="mt-5 inline-block rounded-xl border px-4 py-2">Back to Home</Link></main>;
}
