
import axiosClient from "./axiosClient";

export const getPublicStories = async () => {
  const response = await axiosClient.get(
    "/public/our-stories"
  );

  const result = response.data;

//   console.log("OUR STORIES API RESPONSE:", result);

  if (Array.isArray(result)) return result;

  if (Array.isArray(result?.data)) {
    return result.data;
  }

  if (Array.isArray(result?.items)) {
    return result.items;
  }

  if (Array.isArray(result?.stories)) {
    return result.stories;
  }

  if (Array.isArray(result?.rows)) {
    return result.rows;
  }

  if (Array.isArray(result?.data?.items)) {
    return result.data.items;
  }

  if (Array.isArray(result?.data?.rows)) {
    return result.data.rows;
  }

  if (Array.isArray(result?.data?.stories)) {
    return result.data.stories;
  }

  return [];
};
