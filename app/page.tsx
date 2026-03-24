import Link from 'next/link';
import { company } from '@/data/company';
import { products } from '@/data/products';
import { industries } from '@/data/industries';

export default function HomePage() {
  return (
    <main>
      <section className="container-x py-16 md:py-24">
        <p className="text-accent font-medium">Industrial & Institutional Chemical Solutions</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl">Quote-first cleaning chemistry built for operations, procurement, and performance.</h1>
        <p className="mt-5 max-w-3xl text-steel">{company.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-xl bg-accent px-5 py-3 text-white">Request Quote</Link>
          <Link href="/products" className="rounded-xl border px-5 py-3">Explore Products</Link>
          <Link href="/technical-support" className="rounded-xl border px-5 py-3">Talk to Expert</Link>
        </div>
      </section>

      <section className="container-x py-10">
        <h2 className="h2">Why buyers choose Chemiscope</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {company.trustPoints.map((item) => <div className="card p-5" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="container-x py-10">
        <h2 className="h2">Industries we serve</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">{industries.map((i) => <div key={i.slug} className="card p-5"><h3 className="font-semibold">{i.name}</h3><p className="mt-2 text-sm text-steel">{i.painPoints[0]}</p></div>)}</div>
      </section>

      <section className="container-x py-10">
        <h2 className="h2">Featured products</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">{products.slice(0, 4).map((p) => <Link key={p.slug} href={`/products/${p.slug}`} className="card p-5 block"><h3 className="font-semibold">{p.productName}</h3><p className="text-sm text-steel mt-2">{p.shortDescription}</p></Link>)}</div>
      </section>
    </main>
  );
}
