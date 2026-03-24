import Link from 'next/link';

export function StickyCta() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2">
      <Link href="https://wa.me/919999999999" className="rounded-full bg-emerald-600 px-4 py-2 text-white text-sm">WhatsApp</Link>
      <Link href="/contact" className="rounded-full bg-accent px-4 py-2 text-white text-sm">Request Quote</Link>
    </div>
  );
}
