const docs = [
  'SATOL AF PDS', 'SATOL S1 PDS', 'SATOL S2 PDS', 'SATOL S3 PDS', 'SATOL S4 PDS', 'SATOL S5 PDS', 'SATOL S6 PDS', 'SATOL S7 PDS', 'SATOL S8 PDS', 'SATOL S9 PDS', 'SATOL SANIFOAM PDS', 'SATOL SS CLEANER PDS', 'SATOL FLOOR GLOSS PDS', 'SATOL FLOOR STRIPPER PDS'
];

export default function DownloadsPage() {
  return <main className="container-x py-16"><h1 className="h2">Downloads & Product Documents</h1><p className="mt-3 text-steel">Use this center to request product sheets and technical documents used in institutional evaluation.</p><div className="mt-6 grid gap-3">{docs.map((d)=><div className="card p-4 flex items-center justify-between" key={d}><span>{d}</span><a href="/contact" className="text-accent">Request document</a></div>)}</div></main>;
}
