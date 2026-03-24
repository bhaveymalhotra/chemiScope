import Link from 'next/link';

const links = [
  ['About', '/about'],
  ['Industries', '/industries'],
  ['Solutions', '/solutions'],
  ['Products', '/products'],
  ['Downloads', '/downloads'],
  ['Contact', '/contact']
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-lg">CHEMISCOPE</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-steel">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-ink transition-colors">{label}</Link>
          ))}
          <Link href="/contact" className="rounded-xl bg-accent px-4 py-2 text-white">Request Quote</Link>
        </nav>
      </div>
    </header>
  );
}
