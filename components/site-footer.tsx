import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-x grid gap-8 py-12 md:grid-cols-4 text-sm">
        <div>
          <p className="font-semibold">Chemiscope</p>
          <p className="mt-2 text-steel">B2B chemical solutions interface for institutional and industrial hygiene programs.</p>
        </div>
        <div>
          <p className="font-semibold">Explore</p>
          <div className="mt-2 space-y-1 text-steel">
            <Link href="/products" className="block">Products</Link>
            <Link href="/industries" className="block">Industries</Link>
            <Link href="/solutions" className="block">Solutions</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Support</p>
          <div className="mt-2 space-y-1 text-steel">
            <Link href="/technical-support" className="block">Technical Support</Link>
            <Link href="/downloads" className="block">Downloads</Link>
            <Link href="/contact" className="block">Request Callback</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Legal</p>
          <div className="mt-2 space-y-1 text-steel">
            <Link href="/privacy-policy" className="block">Privacy Policy</Link>
            <Link href="/terms" className="block">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
