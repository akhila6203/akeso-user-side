
// import { useCallback, useEffect, useState } from "react";
// import i18n from "../i18n";

// const COUNTRY_CONFIG = {
//   US: { slug: "us", language: "en", name: "United States" },
//   GB: { slug: "uk", language: "en-GB", name: "United Kingdom" },
//   IN: { slug: "in", language: "en", name: "India" },
//   JP: { slug: "jp", language: "ja", name: "Japan" },
//   FR: { slug: "fr", language: "fr", name: "France" },
//   DE: { slug: "de", language: "de", name: "Germany" },
//   AE: { slug: "ae", language: "ar", name: "United Arab Emirates" },
//   CN: { slug: "cn", language: "zh", name: "China" },
//   ES: { slug: "es", language: "es", name: "Spain" },
//   KR: { slug: "kr", language: "ko", name: "South Korea" },
//   BR: { slug: "br", language: "pt", name: "Brazil" },
//   RU: { slug: "ru", language: "ru", name: "Russia" },
//   CA: { slug: "ca", language: "en", name: "Canada" },
//   AU: { slug: "au", language: "en", name: "Australia" },
//   NZ: { slug: "nz", language: "en", name: "New Zealand" },
// };

// const COUNTRY_SLUGS = Object.values(COUNTRY_CONFIG).map(
//   (country) => country.slug
// );

// function applyGoogleLanguage(language) {
//   const googleLanguage =
//     language === "zh" ? "zh-CN" : language;

//   let attempts = 0;

//   const interval = setInterval(() => {
//     const select = document.querySelector(".goog-te-combo");

//     if (select) {
//       select.value = googleLanguage;
//       select.dispatchEvent(new Event("change"));
//       clearInterval(interval);
//     }

//     attempts++;

//     if (attempts >= 40) {
//       clearInterval(interval);
//     }
//   }, 500);
// }

// function getIndiaLanguage(regionCode = "") {
//   const region = regionCode.toUpperCase().replace(/\s+/g, "_");

//   const regionLanguages = {
//     TS: "te",
//     TG: "te",
//     TELANGANA: "te",
//     AP: "te",
//     ANDHRA_PRADESH: "te",
//     TN: "ta",
//     TAMIL_NADU: "ta",
//     WB: "bn",
//     WEST_BENGAL: "bn",
//     PB: "pa",
//     PUNJAB: "pa",
//     MH: "mr",
//     MAHARASHTRA: "mr",
//     UP: "hi",
//     UTTAR_PRADESH: "hi",
//     MP: "hi",
//     MADHYA_PRADESH: "hi",
//     BR: "hi",
//     BIHAR: "hi",
//     RJ: "hi",
//     RAJASTHAN: "hi",
//     HR: "hi",
//     HARYANA: "hi",
//     DL: "hi",
//     DELHI: "hi",
//     JH: "hi",
//     JHARKHAND: "hi",
//     CG: "hi",
//     CHHATTISGARH: "hi",
//   };

//   return regionLanguages[region] || "en";
// }

// function getPathWithoutCountry(pathname) {
//   const segments = pathname.split("/");
//   const firstSegment = segments[1]?.toLowerCase();

//   if (COUNTRY_SLUGS.includes(firstSegment)) {
//     segments.splice(1, 1);
//   }

//   const path = segments.join("/");
//   return path.startsWith("/") ? path : `/${path}`;
// }

// function getCountryFromPath() {
//   const firstSegment = window.location.pathname
//     .split("/")[1]
//     ?.toLowerCase();

//   return COUNTRY_SLUGS.includes(firstSegment)
//     ? firstSegment
//     : null;
// }

// export default function CountryLocationPrompt() {
//   const [visitor, setVisitor] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const detectCountry = useCallback(async () => {
//     try {
//       setLoading(true);

//       const response = await fetch("https://ipapi.co/json/");

//       if (!response.ok) {
//         throw new Error("Country lookup failed");
//       }

//       const data = await response.json();

//       if (!data.country_code) return;

//       const countryCode = data.country_code.toUpperCase();
//       const config = COUNTRY_CONFIG[countryCode];

//       if (!config) return;

//       const language =
//         countryCode === "IN"
//           ? getIndiaLanguage(data.region_code || data.region)
//           : config.language;

//       const detectedVisitor = {
//         ...config,
//         language,
//         countryCode,
//       };

//       const currentSlug = getCountryFromPath();

//       const savedCountry = localStorage.getItem(
//         "akeso-country-slug"
//       );

//       const globalChoiceCountry = sessionStorage.getItem(
//         "akeso-global-country"
//       );

//       // Visitor selected Stay on Global Site for this country
// // Keep the global site for the current browser session.
// if (globalChoiceCountry === countryCode) {
//   setVisitor(null);

//   if (currentSlug) {
//     const globalPath = getPathWithoutCountry(
//       window.location.pathname
//     );

//     window.location.replace(
//       globalPath +
//         window.location.search +
//         window.location.hash
//     );
//   }

//   return;
// }

// // Country changed since the previous global selection.
// if (globalChoiceCountry && globalChoiceCountry !== countryCode) {
//   sessionStorage.removeItem("akeso-global-country");
// }

// // Already visiting the correct country URL.
// // Apply the language associated with that country.
// if (currentSlug === config.slug) {
//   setVisitor(null);

//   localStorage.setItem("akeso-country-slug", config.slug);
//   localStorage.setItem("akeso-language", language);

//   await i18n.changeLanguage(language);

//   // Apply Google Translate after country page loads.
//   applyGoogleLanguage(language);

//   return;
// }

// // Visitor previously clicked Continue for this country.
// // Redirect from global URL to the country URL automatically.
// if (!currentSlug && savedCountry === config.slug) {
//   localStorage.setItem("akeso-language", language);

//   await i18n.changeLanguage(language);

//   const globalPath = getPathWithoutCountry(
//     window.location.pathname
//   );

//   window.location.replace(
//     `/${config.slug}${globalPath === "/" ? "/" : globalPath}` +
//       window.location.search +
//       window.location.hash
//   );

//   return;
// }
//       // New country or a different country from the current URL.
//       setVisitor(detectedVisitor);
//     } catch (error) {
//       console.warn("Country detection failed:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     detectCountry();

//     // Check again when the visitor returns to the browser tab.
//     const handleFocus = () => {
//       detectCountry();
//     };

//     const handleVisibility = () => {
//       if (document.visibilityState === "visible") {
//         detectCountry();
//       }
//     };

//     window.addEventListener("focus", handleFocus);
//     document.addEventListener("visibilitychange", handleVisibility);

//     return () => {
//       window.removeEventListener("focus", handleFocus);
//       document.removeEventListener(
//         "visibilitychange",
//         handleVisibility
//       );
//     };
//   }, [detectCountry]);

// async function handleContinue() {
//   if (!visitor) return;

//   localStorage.setItem("akeso-country-slug", visitor.slug);
//   localStorage.setItem("akeso-language", visitor.language);

//   localStorage.removeItem("akeso-language-manual");
//   sessionStorage.removeItem("akeso-global-country");

//   const globalPath = getPathWithoutCountry(
//     window.location.pathname
//   );

//   window.location.replace(
//     `/${visitor.slug}${globalPath === "/" ? "/" : globalPath}` +
//       window.location.search +
//       window.location.hash
//   );
// }


// function handleStayGlobal() {
//   if (!visitor) return;

//   sessionStorage.setItem(
//     "akeso-global-country",
//     visitor.countryCode
//   );

//   localStorage.removeItem("akeso-country-slug");

//   localStorage.setItem("akeso-language", "en");

//   i18n.changeLanguage("en");

//   // Keep global website in English.
//   applyGoogleLanguage("en");

//   setVisitor(null);

//   const globalPath = getPathWithoutCountry(
//     window.location.pathname
//   );

//   if (getCountryFromPath()) {
//     window.location.replace(
//       globalPath +
//         window.location.search +
//         window.location.hash
//     );
//   }
// }




//   if (loading || !visitor) return null;

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4">
//       <div className="w-full max-w-[430px] rounded-2xl bg-white p-6 shadow-2xl">
//         <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E8F4F1] text-2xl">
//           🌍
//         </div>

//         <h2 className="text-xl font-semibold text-[#064B50]">
//           Welcome to Akeso Global
//         </h2>

//         <p className="mt-3 text-sm leading-6 text-[#536466]">
//           It looks like you are visiting from{" "}
//           <strong>{visitor.name}</strong>.
//           Would you like to continue to the{" "}
//           {visitor.name} website experience?
//         </p>

//         <div className="mt-6 flex flex-col gap-3 sm:flex-row">
//           <button
//             type="button"
//             onClick={handleContinue}
//             className="flex-1 rounded-lg bg-[#064B50] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#053D41]"
//           >
//             Continue
//           </button>

//           <button
//             type="button"
//             onClick={handleStayGlobal}
//             className="flex-1 rounded-lg border border-[#D8E2E0] px-5 py-3 text-sm font-semibold text-[#536466] transition hover:bg-[#F5F8F7]"
//           >
//             Stay on global site
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
