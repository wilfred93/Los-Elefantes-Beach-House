import { api } from "./client";
import { CONTACT_FORM } from "./endpoints";

export const sendContactMessage = async (data: any) => {
  const response = await api.post(CONTACT_FORM, data);
  return response.data;
};
