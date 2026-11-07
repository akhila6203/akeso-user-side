
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { languages } from "../i18n";

const GOOGLE_CODES = {
  "en-GB": "en",
  zh: "zh-CN",
};

const COOKIE = "googtrans";

function setCookie(value) {
  const hostname = window.location.hostname;

  document.cookie =
    `${COOKIE}=${value};path=/;SameSite=Lax`;

  if (
    hostname.includes(".") &&
    hostname !== "localhost"
  ) {
    document.cookie =
      `${COOKIE}=${value};path=/;domain=.${hostname};SameSite=Lax`;
  }
}

export default function LanguageSwitcher() {
  const [selected, setSelected] = useState(
    () => localStorage.getItem("akeso-language") || "en"
  );

  const current = languages.find(
    (item) => item.code === selected
  );

  const handleChange = (event) => {
    const language = event.target.value;

    setSelected(language);

    localStorage.setItem(
      "akeso-language",
      language
    );

    const googleCode =
      GOOGLE_CODES[language] || language;

    const cookieValue =
      language === "en" || language === "en-GB"
        ? "/en/en"
        : `/en/${googleCode}`;

    setCookie(cookieValue);

    window.location.reload();
  };

  return (
    <div className="relative flex h-9 w-[58px] shrink-0 items-center justify-center">
      <span
        aria-hidden="true"
        className="pointer-events-none flex items-center gap-1 text-[12px] font-semibold text-[#253B40] sm:text-[13px]"
      >
        {current?.short || "EN"}
        <ChevronDown size={14} />
      </span>

      <select
        aria-label="Select website language"
        value={selected}
        onChange={handleChange}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      >
        {languages.map((item) => (
          <option
            key={item.code}
            value={item.code}
          >
            {item.short} - {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}







// AKESO GLOBAL TRANSLATE — FRONTEND-ONLY EXPERIMENTAL PATCH

// Replace src/main.jsx and src/components/LanguageSwitcher.jsx.
// Add src/components/GlobalTranslate.jsx.
// Keep existing src/i18n.js, Header.jsx, App.jsx, API and pages unchanged.
// Run npm run dev. Select a language in the header and allow the page to reload.

// IMPORTANT: This uses Google's legacy website translation element. Google may not serve it to your site, it may fail with React-rendered text, and its availability is not guaranteed. This is NOT a production-reliable or reviewed medical translation. English UK uses English (not localized UK spelling). Never rely on machine translation for clinical instructions. For production, use reviewed i18next translations or a supported translation API with a secure serverless endpoint.

// import { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";
// import { languages } from "../i18n";
// import i18n from "../i18n";

// export default function LanguageSwitcher() {
//   const [selected, setSelected] = useState(
//     () => localStorage.getItem("akeso-language") || "en"
//   );

//   useEffect(() => {
//     const handleLanguageChange = (language) => {
//       setSelected(language);
//     };

//     i18n.on("languageChanged", handleLanguageChange);

//     return () => {
//       i18n.off("languageChanged", handleLanguageChange);
//     };
//   }, []);

//   const current = languages.find(
//     (item) => item.code === selected
//   );

//   const handleChange = async (event) => {
//     const language = event.target.value;

//     setSelected(language);

//     localStorage.setItem("akeso-language", language);
//     localStorage.setItem("akeso-language-manual", "true");

//     await i18n.changeLanguage(language);
//   };

//   return (
//     <div className="relative flex h-9 w-[58px] shrink-0 items-center justify-center">
//       <span
//         aria-hidden="true"
//         className="pointer-events-none flex items-center gap-1 text-[12px] font-semibold text-[#253B40] sm:text-[13px]"
//       >
//         {current?.short || "EN"}
//         <ChevronDown size={14} />
//       </span>

//       <select
//         aria-label="Select website language"
//         value={selected}
//         onChange={handleChange}
//         className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
//       >
//         {languages.map((item) => (
//           <option key={item.code} value={item.code}>
//             {item.short} - {item.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }


