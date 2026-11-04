import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./i18n";
import GlobalTranslate from "./components/GlobalTranslate";
import { SpecialitiesProvider } from "./context/SpecialitiesContext";



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    
      <GlobalTranslate />
       <SpecialitiesProvider>
      <App />
    </SpecialitiesProvider>
  </BrowserRouter>
);


// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css";
// import "./i18n";
// import GlobalTranslate from "./components/GlobalTranslate";



// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
    
//       <GlobalTranslate />
//       <App />
//   </BrowserRouter>
// );


