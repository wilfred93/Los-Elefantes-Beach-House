import { handleContactForm } from "../../core/contactHandler.ts";
export const config = { path: "/contact-form" };

export default async (request) => {
  const authHeader = request.headers.get("authorization");
  const expectedToken = `Bearer ${Deno.env.get("EDGE_FUNCTION_SECRET")}`;

  if (authHeader !== expectedToken) {
    return new Response("Unauthorized", { status: 401 });
  }
  return await handleContactForm(request);
};
