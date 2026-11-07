
import {
  getCurrentUser,
  logoutUser,
} from "../services/authService";

/* =========================================
   CHECK LOGIN SESSION
========================================= */
export async function isLoggedIn() {
  try {
    const response = await getCurrentUser();

    return Boolean(response?.user);
  } catch (error) {
    return false;
  }
}

/* =========================================
   GET CURRENT USER
========================================= */
export async function getUser() {
  try {
    const response = await getCurrentUser();

    return response?.user || null;
  } catch (error) {
    return null;
  }
}

/* =========================================
   LOGOUT
========================================= */
export async function logout() {
  try {
    await logoutUser();
  } catch (error) {
    console.error("Logout failed:", error);
  }

  window.dispatchEvent(
    new Event("akeso-auth-change")
  );
}





// export const TOKEN_KEY =
//   "akeso_token";

// export const USER_KEY =
//   "akeso_user";

// // export function isLoggedIn() {
// //   return Boolean(
// //     localStorage.getItem(TOKEN_KEY)
// //   );
// // }
// export function isLoggedIn() {
//   const token = localStorage.getItem(TOKEN_KEY);
//   const user = getUser();

//   return Boolean(token && user);
// }

// export function getUser() {
//   try {
//     const user =
//       localStorage.getItem(USER_KEY);

//     return user
//       ? JSON.parse(user)
//       : null;
//   } catch {
//     return null;
//   }
// }


// export function saveLogin(
//   token,
//   user
// ) {
//   localStorage.setItem(
//     TOKEN_KEY,
//     token
//   );

//   localStorage.setItem(
//     USER_KEY,
//     JSON.stringify(user)
//   );

//   window.dispatchEvent(
//     new Event("akeso-auth-change")
//   );
// }

// export function logout() {
//   localStorage.removeItem(
//     TOKEN_KEY
//   );

//   localStorage.removeItem(
//     USER_KEY
//   );

//   window.dispatchEvent(
//     new Event("akeso-auth-change")
//   );
// }