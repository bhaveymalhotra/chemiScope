import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());
  console.log('New inquiry:', payload);
  return NextResponse.json({ ok: true });
}
