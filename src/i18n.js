

// before editing the language setings based on location

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const languages = [
  { code: "en", short: "EN", name: "English (USA)" },
  { code: "en-GB", short: "EN", name: "English (UK)" },
  { code: "hi", short: "HI", name: "Hindi (India)" },
  { code: "te", short: "TE", name: "Telugu (India)" },
  { code: "bn", short: "BN", name: "Bengali (India)" },
  { code: "pa", short: "PA", name: "Punjabi (India)" },
  { code: "mr", short: "MR", name: "Marathi (India)" },
  { code: "ta", short: "TA", name: "Tamil (India)" },
  { code: "ja", short: "JA", name: "Japanese (Japan)" },
  { code: "ru", short: "RU", name: "Russian (Russia)" },
  { code: "fr", short: "FR", name: "French (France)" },
  { code: "de", short: "DE", name: "German (Germany)" },
  { code: "ar", short: "AR", name: "Arabic (UAE)" },
  { code: "zh", short: "ZH", name: "Chinese (China)" },
  { code: "es", short: "ES", name: "Spanish (Spain)" },
  { code: "ko", short: "KO", name: "Korean (South Korea)" },
  { code: "pt", short: "PT", name: "Portuguese (Brazil)" },
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
  lng: languages.some((item) => item.code === localStorage.getItem("akeso-language"))
    ? localStorage.getItem("akeso-language")
    : "en",
  fallbackLng: "en",
  supportedLngs: languages.map((item) => item.code),
  load: "currentOnly",
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








// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// export const languages = [
//   { code: "en", short: "EN", name: "English (USA)" },
//   { code: "en-GB", short: "EN", name: "English (UK)" },
//   { code: "hi", short: "HI", name: "Hindi (India)" },
//   { code: "te", short: "TE", name: "Telugu (India)" },
//   { code: "bn", short: "BN", name: "Bengali (India)" },
//   { code: "pa", short: "PA", name: "Punjabi (India)" },
//   { code: "mr", short: "MR", name: "Marathi (India)" },
//   { code: "ta", short: "TA", name: "Tamil (India)" },
//   { code: "ja", short: "JA", name: "Japanese (Japan)" },
//   { code: "ru", short: "RU", name: "Russian (Russia)" },
//   { code: "fr", short: "FR", name: "French (France)" },
//   { code: "de", short: "DE", name: "German (Germany)" },
//   { code: "ar", short: "AR", name: "Arabic (UAE)" },
//   { code: "zh", short: "ZH", name: "Chinese (China)" },
//   { code: "es", short: "ES", name: "Spanish (Spain)" },
//   { code: "ko", short: "KO", name: "Korean (South Korea)" },
//   { code: "pt", short: "PT", name: "Portuguese (Brazil)" },
// ];

// const resources = {
//   en: {
//     translation: {
//       home: "Home",
//       speciality: "Speciality",
//       healthLibrary: "Health Library",
//       doctors: "Our Doctors",
//       services: "Services",
//       internationalPatients: "International Patients",
//       contact: "Contact Us",
//       requestCallback: "Request Call Back",
//       language: "Select Language",
//     },
//   },

//   "en-GB": {
//     translation: {
//       home: "Home",
//       speciality: "Speciality",
//       healthLibrary: "Health Library",
//       doctors: "Our Doctors",
//       services: "Services",
//       internationalPatients: "International Patients",
//       contact: "Contact Us",
//       requestCallback: "Request a Call Back",
//       language: "Select Language",
//     },
//   },

//   te: {
//     translation: {
//       home: "హోమ్",
//       speciality: "వైద్య ప్రత్యేకతలు",
//       healthLibrary: "ఆరోగ్య సమాచార కేంద్రం",
//       doctors: "మా వైద్యులు",
//       services: "సేవలు",
//       internationalPatients: "అంతర్జాతీయ రోగులు",
//       contact: "మమ్మల్ని సంప్రదించండి",
//       requestCallback: "తిరిగి కాల్ చేయమని కోరండి",
//       language: "భాషను ఎంచుకోండి",
//     },
//   },

//   hi: {
//     translation: {
//       home: "होम",
//       speciality: "चिकित्सा विशेषज्ञताएँ",
//       healthLibrary: "स्वास्थ्य पुस्तकालय",
//       doctors: "हमारे डॉक्टर",
//       services: "सेवाएँ",
//       internationalPatients: "अंतरराष्ट्रीय मरीज",
//       contact: "संपर्क करें",
//       requestCallback: "कॉल बैक का अनुरोध करें",
//       language: "भाषा चुनें",
//     },
//   },

//   de: {
//     translation: {
//       home: "Startseite",
//       speciality: "Fachbereiche",
//       healthLibrary: "Gesundheitsbibliothek",
//       doctors: "Unsere Ärzte",
//       services: "Leistungen",
//       internationalPatients: "Internationale Patienten",
//       contact: "Kontakt",
//       requestCallback: "Rückruf anfordern",
//       language: "Sprache auswählen",
//     },
//   },

//   fr: {
//     translation: {
//       home: "Accueil",
//       speciality: "Spécialités",
//       healthLibrary: "Bibliothèque santé",
//       doctors: "Nos médecins",
//       services: "Services",
//       internationalPatients: "Patients internationaux",
//       contact: "Contactez-nous",
//       requestCallback: "Demander un rappel",
//       language: "Choisir la langue",
//     },
//   },

//   ja: {
//     translation: {
//       home: "ホーム",
//       speciality: "診療科",
//       healthLibrary: "健康ライブラリ",
//       doctors: "医師紹介",
//       services: "サービス",
//       internationalPatients: "海外からの患者様",
//       contact: "お問い合わせ",
//       requestCallback: "折り返し電話を依頼",
//       language: "言語を選択",
//     },
//   },

//   es: {
//     translation: {
//       home: "Inicio",
//       speciality: "Especialidades",
//       healthLibrary: "Biblioteca de salud",
//       doctors: "Nuestros médicos",
//       services: "Servicios",
//       internationalPatients: "Pacientes internacionales",
//       contact: "Contáctenos",
//       requestCallback: "Solicitar una llamada",
//       language: "Seleccionar idioma",
//     },
//   },

//   pt: {
//     translation: {
//       home: "Início",
//       speciality: "Especialidades",
//       healthLibrary: "Biblioteca de saúde",
//       doctors: "Nossos médicos",
//       services: "Serviços",
//       internationalPatients: "Pacientes internacionais",
//       contact: "Fale conosco",
//       requestCallback: "Solicitar retorno de chamada",
//       language: "Selecionar idioma",
//     },
//   },

//   zh: {
//     translation: {
//       home: "首页",
//       speciality: "专科",
//       healthLibrary: "健康资料库",
//       doctors: "我们的医生",
//       services: "服务",
//       internationalPatients: "国际患者",
//       contact: "联系我们",
//       requestCallback: "请求回电",
//       language: "选择语言",
//     },
//   },

//   ko: {
//     translation: {
//       home: "홈",
//       speciality: "진료과",
//       healthLibrary: "건강 정보",
//       doctors: "의료진",
//       services: "서비스",
//       internationalPatients: "해외 환자",
//       contact: "문의하기",
//       requestCallback: "전화 상담 요청",
//       language: "언어 선택",
//     },
//   },

//   ru: {
//     translation: {
//       home: "Главная",
//       speciality: "Специализации",
//       healthLibrary: "Библиотека здоровья",
//       doctors: "Наши врачи",
//       services: "Услуги",
//       internationalPatients: "Иностранные пациенты",
//       contact: "Связаться с нами",
//       requestCallback: "Заказать обратный звонок",
//       language: "Выбрать язык",
//     },
//   },

//   ar: {
//     translation: {
//       home: "الرئيسية",
//       speciality: "التخصصات",
//       healthLibrary: "المكتبة الصحية",
//       doctors: "أطباؤنا",
//       services: "الخدمات",
//       internationalPatients: "المرضى الدوليون",
//       contact: "اتصل بنا",
//       requestCallback: "طلب معاودة الاتصال",
//       language: "اختر اللغة",
//     },
//   },

//   bn: {
//     translation: {
//       home: "হোম",
//       speciality: "বিশেষত্ব",
//       healthLibrary: "স্বাস্থ্য গ্রন্থাগার",
//       doctors: "আমাদের চিকিৎসক",
//       services: "পরিষেবা",
//       internationalPatients: "আন্তর্জাতিক রোগী",
//       contact: "যোগাযোগ করুন",
//       requestCallback: "কল ব্যাকের অনুরোধ",
//       language: "ভাষা নির্বাচন করুন",
//     },
//   },

//   pa: {
//     translation: {
//       home: "ਮੁੱਖ ਪੰਨਾ",
//       speciality: "ਮਾਹਿਰ ਵਿਭਾਗ",
//       healthLibrary: "ਸਿਹਤ ਲਾਇਬ੍ਰੇਰੀ",
//       doctors: "ਸਾਡੇ ਡਾਕਟਰ",
//       services: "ਸੇਵਾਵਾਂ",
//       internationalPatients: "ਅੰਤਰਰਾਸ਼ਟਰੀ ਮਰੀਜ਼",
//       contact: "ਸੰਪਰਕ ਕਰੋ",
//       requestCallback: "ਵਾਪਸੀ ਕਾਲ ਦੀ ਬੇਨਤੀ",
//       language: "ਭਾਸ਼ਾ ਚੁਣੋ",
//     },
//   },

//   mr: {
//     translation: {
//       home: "मुख्यपृष्ठ",
//       speciality: "वैद्यकीय विशेषता",
//       healthLibrary: "आरोग्य माहिती",
//       doctors: "आमचे डॉक्टर",
//       services: "सेवा",
//       internationalPatients: "आंतरराष्ट्रीय रुग्ण",
//       contact: "संपर्क करा",
//       requestCallback: "परत कॉल करण्याची विनंती",
//       language: "भाषा निवडा",
//     },
//   },

//   ta: {
//     translation: {
//       home: "முகப்பு",
//       speciality: "சிறப்புப் பிரிவுகள்",
//       healthLibrary: "சுகாதார நூலகம்",
//       doctors: "எங்கள் மருத்துவர்கள்",
//       services: "சேவைகள்",
//       internationalPatients: "சர்வதேச நோயாளிகள்",
//       contact: "தொடர்பு கொள்ள",
//       requestCallback: "மீண்டும் அழைக்க கோரிக்கை",
//       language: "மொழியைத் தேர்ந்தெடுக்கவும்",
//     },
//   },
// };

// const savedLanguage = localStorage.getItem("akeso-language");

// i18n.use(initReactI18next).init({
//   resources,
//   lng: languages.some((item) => item.code === savedLanguage)
//     ? savedLanguage
//     : "en",
//   fallbackLng: "en",
//   supportedLngs: languages.map((item) => item.code),
//   load: "currentOnly",
//   interpolation: {
//     escapeValue: false,
//   },
//   react: {
//     useSuspense: false,
//   },
// });

// i18n.on("languageChanged", (language) => {
//   localStorage.setItem("akeso-language", language);
//   document.documentElement.lang = language;
//   document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
// });

// export default i18n;








