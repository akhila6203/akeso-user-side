import axiosClient from "./axiosClient";


/* =========================================
   GET ALL ACTIVE SPECIALITIES
========================================= */

export const getSpecialities = async (
  params = {}
) => {
  const response =
    await axiosClient.get(
      "/specialities",
      {
        params: {
          is_active: 1,
          limit: 100,
          ...params,
        },
      }
    );

  return response.data;
};


/* =========================================
   GET SINGLE SPECIALITY BY SLUG
========================================= */

export const getSpecialityBySlug =
  async (slug) => {
    const response =
      await axiosClient.get(
        `/specialities/slug/${slug}`
      );

    return response.data;
  };