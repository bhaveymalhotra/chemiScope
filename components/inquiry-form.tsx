'use client';

import { useState } from 'react';

export function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');

  async function onSubmit(formData: FormData) {
    setStatus('loading');
    const res = await fetch('/api/inquiry', { method: 'POST', body: formData });
    setStatus(res.ok ? 'done' : 'error');
    if (res.ok) window.location.href = '/thank-you';
  }

  return (
    <form action={onSubmit} className="card p-6 space-y-4">
      <h3 className="text-xl font-semibold">Request Quote / Technical Consultation</h3>
      <input name="name" required placeholder="Full Name" className="w-full rounded-lg border p-3" />
      <input name="company" required placeholder="Company Name" className="w-full rounded-lg border p-3" />
      <input name="phone" required placeholder="Phone" className="w-full rounded-lg border p-3" />
      <input name="email" type="email" required placeholder="Work Email" className="w-full rounded-lg border p-3" />
      <textarea name="requirement" required placeholder="Tell us your requirement" className="w-full rounded-lg border p-3 min-h-24" />
      <button disabled={status === 'loading'} className="rounded-xl bg-accent px-5 py-3 text-white">
        {status === 'loading' ? 'Submitting...' : 'Submit Enquiry'}
      </button>
      {status === 'error' && <p className="text-red-600 text-sm">Submission failed. Please call us directly.</p>}
    </form>
  );
}
