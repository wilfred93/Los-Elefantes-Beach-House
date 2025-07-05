import { api } from "./client";
import { CONTACT_FORM } from "./endpoints";

export const sendContactMessage = async (data: any) => {
  const config = useRuntimeConfig();
  const response = await api.post(CONTACT_FORM, data, {
    headers: {
      Authorization: `Bearer ${config.public.edgeFunctionSecret}`,
    },
  });
  return response.data;
};
