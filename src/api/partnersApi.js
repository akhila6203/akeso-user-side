import axiosClient from "./axiosClient";

export const getPartners = async () => {
  const response = await axiosClient.get("/partners");

  const result = response.data;

  console.log("PARTNERS API RESPONSE:", result);

  // Your backend controller response:
  // { success: true, data: [...] }

  const partners = Array.isArray(result)
    ? result
    : Array.isArray(result?.data)
    ? result.data
    : Array.isArray(result?.data?.items)
    ? result.data.items
    : [];

  console.log("PARTNERS LIST:", partners);

  return partners;
};

const partnersApi = {
  list: getPartners,
};

export default partnersApi;