import axiosClient from
  "../api/axiosClient";


/* =========================================
   REGISTER
========================================= */

export async function registerUser({
  name,
  email,
  phone,
}) {

  const response =
    await axiosClient.post(
      "/customer-auth/register",
      {
        name,
        email,
        phone,
      }
    );

  return response.data;
}


/* =========================================
   SET PASSWORD
========================================= */

export async function setPassword({
  token,
  password,
}) {

  const response =
    await axiosClient.post(
      "/customer-auth/set-password",
      {
        token,
        password,
      }
    );

  return response.data;
}


/* =========================================
   LOGIN
========================================= */

export async function loginUser({
  email,
  password,
}) {

  const response =
    await axiosClient.post(
      "/customer-auth/login",
      {
        email,
        password,
      }
    );

  return response.data;
}


/* =========================================
   FORGOT PASSWORD
========================================= */

export async function forgotPassword(
  email
) {

  const response =
    await axiosClient.post(
      "/customer-auth/forgot-password",
      {
        email,
      }
    );

  return response.data;
}


/* =========================================
   RESET PASSWORD
========================================= */

export async function resetPassword({
  token,
  password,
}) {

  const response =
    await axiosClient.post(
      "/customer-auth/reset-password",
      {
        token,
        password,
      }
    );

  return response.data;
}