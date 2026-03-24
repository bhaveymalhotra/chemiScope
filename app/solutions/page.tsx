import { solutions } from '@/data/solutions';

export default function SolutionsPage() {
  return <main className="container-x py-16"><h1 className="h2">Solutions by Application</h1><div className="mt-6 grid gap-4 md:grid-cols-2">{solutions.map((s)=><div key={s.slug} className="card p-5"><h2 className="font-semibold">{s.title}</h2><p className="mt-2 text-steel text-sm">{s.summary}</p></div>)}</div></main>;
}
