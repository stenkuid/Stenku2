import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const data = await request.json();
    const { name, email, company = '', message } = data;

    // Simple validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Please fill in all required fields (Name, Email, and Message).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Access the D1 Database from the Cloudflare runtime locals binding
    const db = (locals as any).runtime?.env?.DB;

    if (!db) {
      console.error('Cloudflare D1 binding "DB" was not found in locals.runtime.env');
      return new Response(
        JSON.stringify({ error: 'Internal Server Error: Database binding not found.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Run the SQL prepare statement to insert the data
    await db.prepare(
      'INSERT INTO inquiries (name, email, company, message) VALUES (?, ?, ?, ?)'
    ).bind(name, email, company, message).run();

    return new Response(
      JSON.stringify({ success: true, message: 'Your inquiry has been successfully sent!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (e: any) {
    console.error('Error submitting inquiry to D1:', e);
    return new Response(
      JSON.stringify({ error: e.message || 'An unexpected error occurred. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
