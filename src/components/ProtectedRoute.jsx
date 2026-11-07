import {
  Navigate,
  useLocation,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
}) {
  const location = useLocation();

  const {
    user,
    loading,
  } = useAuth();

  // Wait for backend session verification
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-[#064B50]">
          Loading...
        </p>
      </div>
    );
  }

  // Redirect if no valid cookie session
  if (!user) {
    const redirect =
      location.pathname + location.search;

    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(
          redirect
        )}`}
        replace
      />
    );
  }

  return children;
}







// import {
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// import { isLoggedIn } from "../utils/auth";

// export default function ProtectedRoute({
//   children,
// }) {
//   const location = useLocation();

//   if (!isLoggedIn()) {
//     const redirect =
//       location.pathname +
//       location.search;

//     return (
//       <Navigate
//         to={`/login?redirect=${encodeURIComponent(
//           redirect
//         )}`}
//         replace
//       />
//     );
//   }

//   return children;
// }