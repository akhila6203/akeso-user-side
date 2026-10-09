
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "bn", name: "Bengali" },
  { code: "pa", name: "Punjabi" },
  { code: "ru", name: "Russian" },
  { code: "ar", name: "Arabic" },
  { code: "mr", name: "Marathi" },
  { code: "te", name: "Telugu" },
  { code: "fr", name: "French" },
];

const resources = {
  en: {
    translation: {
      home: "Home",
      speciality: "Speciality",
      healthLibrary: "Health Library",
      doctors: "Our Doctors",
      services: "Services",
      internationalPatients: "International Patients",
      contact: "Contact Us",
      requestCallback: "Request Call Back",
      language: "Select Language",
    },
  },
  te: {
    translation: {
      home: "హోమ్",
      speciality: "వైద్య ప్రత్యేకతలు",
      healthLibrary: "ఆరోగ్య సమాచార కేంద్రం",
      doctors: "మా వైద్యులు",
      services: "సేవలు",
      internationalPatients: "అంతర్జాతీయ రోగులు",
      contact: "మమ్మల్ని సంప్రదించండి",
      requestCallback: "తిరిగి కాల్ చేయమని కోరండి",
      language: "భాషను ఎంచుకోండి",
    },
  },
  hi: {
    translation: {
      home: "होम",
      speciality: "चिकित्सा विशेषज्ञताएँ",
      healthLibrary: "स्वास्थ्य पुस्तकालय",
      doctors: "हमारे डॉक्टर",
      services: "सेवाएँ",
      internationalPatients: "अंतरराष्ट्रीय मरीज",
      contact: "संपर्क करें",
      requestCallback: "कॉल बैक का अनुरोध करें",
      language: "भाषा चुनें",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("akeso-language") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18n.on("languageChanged", (language) => {
  localStorage.setItem("akeso-language", language);

  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";
});

export default i18n;
