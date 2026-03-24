import { industries } from '@/data/industries';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() { return industries.map((i) => ({ slug: i.slug })); }

export default function IndustryDetail({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) return notFound();
  return <main className="container-x py-16"><h1 className="h2">{industry.name}</h1><p className="mt-4 text-steel">Pain points: {industry.painPoints.join(' • ')}</p><p className="mt-2 text-steel">Solution clusters: {industry.solutions.join(' • ')}</p><Link href="/contact" className="mt-6 inline-block rounded-xl bg-accent px-4 py-2 text-white">Discuss Requirements</Link></main>;
}
