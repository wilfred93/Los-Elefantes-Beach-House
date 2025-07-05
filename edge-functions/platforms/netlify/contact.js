import { handleContactForm } from "../../core/contactHandler.ts";
export const config = { path: "/contact-form" };

export default async (request) => {
  console.log("contact api request - auth func");
  const authHeader = request.headers.get("authorization");
  const expectedToken = `Bearer ${Deno.env.get("EDGE_FUNCTION_SECRET")}`;

  if (authHeader !== expectedToken) {
    console.log("Auth correct");
    return new Response("Unauthorized", { status: 401 });
  }
  return await handleContactForm(request);
};
