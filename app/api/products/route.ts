/* app/api/products/route.ts */
import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://deisishop.pythonanywhere.com/products', {
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}