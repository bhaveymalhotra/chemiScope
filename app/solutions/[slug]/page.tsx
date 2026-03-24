import { solutions } from '@/data/solutions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() { return solutions.map((s) => ({ slug: s.slug })); }

export default function SolutionDetail({ params }: { params: { slug: string } }) {
  const solution = solutions.find((s) => s.slug === params.slug);
  if (!solution) return notFound();
  return <main className="container-x py-16"><h1 className="h2">{solution.title}</h1><p className="mt-4 text-steel">{solution.summary}</p><Link href="/contact" className="mt-6 inline-block rounded-xl bg-accent px-4 py-2 text-white">Get Technical Support</Link></main>;
}
