import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  loginUser,
  getCurrentUser,
  logoutUser,
} from "../services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /* =========================================
     CHECK BACKEND COOKIE SESSION
  ========================================= */
  const checkSession = async () => {
    try {
      const response = await getCurrentUser();

      setUser(response?.user || null);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  /* =========================================
     INITIAL SESSION CHECK
  ========================================= */
  useEffect(() => {
    checkSession();

    const syncAuth = () => {
      checkSession();
    };

    window.addEventListener(
      "akeso-auth-change",
      syncAuth
    );

    return () => {
      window.removeEventListener(
        "akeso-auth-change",
        syncAuth
      );
    };
  }, []);

  /* =========================================
     LOGIN
  ========================================= */
  const login = async ({ email, password }) => {
    // Backend sets the HttpOnly cookie.
    await loginUser({
      email,
      password,
    });

    // Fetch the authenticated user from the cookie session.
    const response = await getCurrentUser();

    if (!response?.user) {
      throw new Error("Unable to verify login session.");
    }

    setUser(response.user);

    window.dispatchEvent(
      new Event("akeso-auth-change")
    );

    return response.user;
  };

  /* =========================================
     LOGOUT
  ========================================= */
  const logout = async () => {
    try {
      await logoutUser();
    } finally {
      setUser(null);

      window.dispatchEvent(
        new Event("akeso-auth-change")
      );
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: Boolean(user),
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/* =========================================
   CUSTOM AUTH HOOK
========================================= */
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}





// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// import { loginUser } from "../services/authService";

// import {
//   getUser,
//   isLoggedIn as checkLogin,
//   saveLogin,
//   logout as clearLogin,
// } from "../utils/auth";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(() =>
//     checkLogin() ? getUser() : null
//   );

//   useEffect(() => {
//     const syncAuth = () => {
//       setUser(checkLogin() ? getUser() : null);
//     };

//     window.addEventListener(
//       "akeso-auth-change",
//       syncAuth
//     );

//     window.addEventListener("storage", syncAuth);

//     return () => {
//       window.removeEventListener(
//         "akeso-auth-change",
//         syncAuth
//       );

//       window.removeEventListener(
//         "storage",
//         syncAuth
//       );
//     };
//   }, []);

//   const login = async ({ email, password }) => {
//     const data = await loginUser({
//       email,
//       password,
//     });

//     if (!data?.token || !data?.user) {
//       throw new Error("Invalid login response.");
//     }

//     saveLogin(data.token, data.user);

//     return data.user;
//   };

//   const logout = () => {
//     clearLogin();
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isLoggedIn: Boolean(user),
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error(
//       "useAuth must be used inside AuthProvider"
//     );
//   }

//   return context;
// }
