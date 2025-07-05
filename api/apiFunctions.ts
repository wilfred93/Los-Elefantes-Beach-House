import { api } from "./client";
import { CONTACT_FORM } from "./endpoints";

export const sendContactMessage = async (data: any) => {
  const response = await api.post(CONTACT_FORM, data, {
    headers: {
      Authorization: `Bearer ${Deno.env.get("EDGE_FUNCTION_SECRET")}`,
    },
  });
  return response.data;
};
