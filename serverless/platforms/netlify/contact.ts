import type { Context, Config } from "@netlify/functions";
import { handleContactForm } from "../../core/contactHandler";

export default async (req: Request, context: Context) => {
  return await handleContactForm(req);
};
export const config: Config = {
  path: "/contact-form",
};
