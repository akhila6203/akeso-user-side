import axiosClient from "./axiosClient";


export const getDoctors = async (params = {}) => {
  const response = await axiosClient.get(
    "/doctors",
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


export const getDoctorById = async (id) => {
  const response = await axiosClient.get(
    `/doctors/${id}`
  );

  return response.data;
};