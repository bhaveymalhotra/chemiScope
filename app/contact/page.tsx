import { InquiryForm } from '@/components/inquiry-form';

export default function ContactPage() {
  return <main className="container-x py-16"><h1 className="h2">Contact / Request Quote</h1><p className="mt-3 text-steel">Tell us your use-case, volume, site type, and timeline. We will recommend suitable solutions and supply model.</p><div className="mt-6 max-w-2xl"><InquiryForm /></div></main>;
}
