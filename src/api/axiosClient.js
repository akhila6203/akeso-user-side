import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://api.akesoglobal.com/api",
    // "http://localhost:5000/api",

  withCredentials: true,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

  timeout: 15000,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong. Please try again.";

    return Promise.reject(new Error(message));
  }
);

export default axiosClient;





// import axios from "axios";

// const axiosClient =
//   axios.create({
//     baseURL:
//       import.meta.env.VITE_API_URL,

//     headers: {
//       "Content-Type":
//         "application/json",

//       Accept:
//         "application/json",
//     },

//     timeout: 15000,
//   });


// axiosClient.interceptors.response.use(
//   (response) => response,

//   (error) => {

//     const message =
//       error.response?.data
//         ?.message ||
//       error.message ||
//       "Something went wrong. Please try again.";

//     return Promise.reject(
//       new Error(message)
//     );
//   }
// );


// export default axiosClient;