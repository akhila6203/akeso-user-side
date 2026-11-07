
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import "./i18n";

import GlobalTranslate from "./components/GlobalTranslate";
import { SpecialitiesProvider } from "./context/SpecialitiesContext";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <GlobalTranslate />

      <SpecialitiesProvider>
        <App />
      </SpecialitiesProvider>
    </AuthProvider>
  </BrowserRouter>
);

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";
// import "./i18n";
// import { SpecialitiesProvider } from "./context/SpecialitiesContext";

// const COUNTRY_PREFIXES = [
//   "us", "uk", "in", "jp", "fr", "de",
//   "ae", "cn", "es", "kr", "br", "ru",
//   "ca", "au", "nz",
// ];

// const firstPathSegment =
//   window.location.pathname.split("/")[1]?.toLowerCase();

// const routerBasename = COUNTRY_PREFIXES.includes(firstPathSegment)
//   ? `/${firstPathSegment}`
//   : "/";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter basename={routerBasename}>
//     <SpecialitiesProvider>
//       <App />
//     </SpecialitiesProvider>
//   </BrowserRouter>
// );



// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";
// import "./i18n";
// import GlobalTranslate from "./components/GlobalTranslate";
// import { SpecialitiesProvider } from "./context/SpecialitiesContext";



// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
    
//       <GlobalTranslate />
//        <SpecialitiesProvider>
//       <App />
//     </SpecialitiesProvider>
//   </BrowserRouter>
// );






