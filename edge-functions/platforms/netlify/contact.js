import { handleContactForm } from "../../core/contactHandler.ts";
export const config = { path: "/contact-form" };

export default async (request) => {
  return await handleContactForm(request);
};
