import Link from 'next/link';

export default function TechnicalSupportPage() {
  return <main className="container-x py-16"><h1 className="h2">Technical Support, Site Audit & Consulting</h1><div className="mt-5 grid gap-4 md:grid-cols-3"><div className="card p-5"><h2 className="font-semibold">Site Assessment</h2><p className="text-sm mt-2 text-steel">Evaluate cleaning load, critical zones, and process constraints.</p></div><div className="card p-5"><h2 className="font-semibold">Pilot & Trial</h2><p className="text-sm mt-2 text-steel">Pilot recommendations before full deployment.</p></div><div className="card p-5"><h2 className="font-semibold">Training & Optimization</h2><p className="text-sm mt-2 text-steel">Team onboarding, SOP support, and dilution optimization.</p></div></div><Link href="/contact" className="mt-6 inline-block rounded-xl bg-accent px-4 py-2 text-white">Book a Site Assessment</Link></main>;
}
