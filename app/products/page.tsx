'use client';
import { products } from '@/data/products';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function ProductsPage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const categories = ['All', ...new Set(products.map((p) => p.category))];
  const filtered = useMemo(() => products.filter((p) => (cat === 'All' || p.category === cat) && `${p.productName} ${p.shortDescription}`.toLowerCase().includes(q.toLowerCase())), [q, cat]);
  return (
    <main className="container-x py-16">
      <h1 className="h2">Products</h1>
      <div className="mt-4 flex flex-wrap gap-3">
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search products" className="rounded-lg border p-2" />
        <select value={cat} onChange={(e)=>setCat(e.target.value)} className="rounded-lg border p-2">{categories.map(c=><option key={c}>{c}</option>)}</select>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{filtered.map((p)=><Link href={`/products/${p.slug}`} key={p.slug} className="card p-5 block"><h2 className="font-semibold">{p.productName}</h2><p className="text-sm text-steel mt-2">{p.shortDescription}</p><span className="mt-3 inline-block text-xs rounded bg-slate-100 px-2 py-1">{p.rtuStatus}</span></Link>)}</div>
    </main>
  );
}
