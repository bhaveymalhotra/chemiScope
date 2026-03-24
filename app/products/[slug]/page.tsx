import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="container-x py-16">
      <p className="text-sm text-steel">{product.category}</p>
      <h1 className="h2 mt-2">{product.productName}</h1>
      <p className="mt-3 max-w-3xl text-steel">{product.fullDescription}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="card p-5"><h2 className="font-semibold">Key Highlights</h2><ul className="mt-3 list-disc pl-5 text-sm space-y-1">{product.keyHighlights.map((k)=><li key={k}>{k}</li>)}</ul></div>
        <div className="card p-5"><h2 className="font-semibold">Benefits</h2><ul className="mt-3 list-disc pl-5 text-sm space-y-1">{product.benefits.map((k)=><li key={k}>{k}</li>)}</ul></div>
      </div>
      <div className="mt-4 card p-5"><h2 className="font-semibold">Usage & Dilution</h2><p className="text-sm mt-2">{product.usageInstructions}</p><p className="text-sm mt-1">{product.dilution}</p></div>
      <div className="mt-4 card p-5"><h2 className="font-semibold">Packaging</h2><p className="text-sm mt-2">{product.packaging.join(', ')}</p></div>
      <div className="mt-6 flex gap-3"><Link href="/contact" className="rounded-xl bg-accent px-4 py-2 text-white">Enquire for Bulk Supply</Link><Link href="https://wa.me/919999999999" className="rounded-xl border px-4 py-2">WhatsApp</Link></div>
    </main>
  );
}
