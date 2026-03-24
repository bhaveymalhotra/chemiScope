import { industries } from '@/data/industries';
import Link from 'next/link';

export default function IndustriesPage() {
  return <main className="container-x py-16"><h1 className="h2">Industries We Serve</h1><div className="mt-6 grid gap-4 md:grid-cols-2">{industries.map((i)=><div key={i.slug} className="card p-5"><h2 className="font-semibold text-xl">{i.name}</h2><p className="mt-3 text-sm text-steel">Pain points: {i.painPoints.join(' • ')}</p><p className="mt-2 text-sm">Solutions: {i.solutions.join(' • ')}</p><Link href="/contact" className="mt-4 inline-block text-accent">Discuss requirements →</Link></div>)}</div></main>;
}
