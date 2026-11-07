
import axiosClient from "../api/axiosClient";

/* =========================================
   REGISTER
========================================= */
export async function registerUser({
  name,
  email,
  phone,
}) {
  const response = await axiosClient.post(
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
  const response = await axiosClient.post(
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
  const response = await axiosClient.post(
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
export async function forgotPassword(email) {
  const response = await axiosClient.post(
    "/customer-auth/forgot-password",
    { email }
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
  const response = await axiosClient.post(
    "/customer-auth/reset-password",
    {
      token,
      password,
    }
  );

  return response.data;
}


export async function validateActivationToken(token) {
  const response = await axiosClient.post(
    "/customer-auth/validate-activation-token",
    { token }
  );

  return response.data;
}

export async function validateResetToken(token) {
  const response = await axiosClient.post(
    "/customer-auth/validate-reset-token",
    { token }
  );

  return response.data;
}

/* =========================================
   CHECK LOGIN SESSION
========================================= */
export async function getCurrentUser() {
  const response = await axiosClient.get(
    "/customer-auth/session"
  );

  return response.data;
}

/* =========================================
   LOGOUT
========================================= */
export async function logoutUser() {
  const response = await axiosClient.post(
    "/customer-auth/logout"
  );

  return response.data;
}




