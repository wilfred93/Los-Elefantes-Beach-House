// Type declaration for Deno runtime in Netlify Edge Functions
declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
};

export async function handleContactForm(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const { name, email, message } = await request.json();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Los Elefantes Beach House <no-reply@transactional.loselefantesbeachouse.com>",
      to: "wilfred.lazaro@gmail.com",
      subject: `Los Elefantes Beach House - Contact Form`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    }),
  });

  if (!response.ok) {
    return new Response("Failed to send email", { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
