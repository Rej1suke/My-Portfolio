import { NextResponse } from 'next/server'


export async function POST(request: Request) {
try {
const body = await request.json();
console.log('Contact form received:', body);
// NOTE: For production, integrate with an email service (SendGrid, Mailgun) or Zapier.
return NextResponse.json({ success: true, message: 'Message received. Thank you!' });
} catch (err) {
console.error(err);
return NextResponse.json({ success: false }, { status: 500 });
}
}