import Link from 'next/link';

export default function ThankYouPage() {
  return <main className="container-x py-20 text-center"><h1 className="h2">Thank you for your enquiry</h1><p className="mt-3 text-steel">Our team will contact you shortly for requirement validation and next steps.</p><Link href="/products" className="mt-6 inline-block rounded-xl border px-5 py-3">Continue browsing products</Link></main>;
}
