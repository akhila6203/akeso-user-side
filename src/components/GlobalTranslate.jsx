import { useEffect } from "react";

// Google website translation is a legacy, third-party service.
// It may be unavailable or incomplete on dynamic React pages.
export default function GlobalTranslate() {
  useEffect(() => {
    if (document.getElementById("akeso-google-translate-script")) return;
    window.akesoGoogleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) return;
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false, includedLanguages: "hi,te,bn,pa,mr,ta,ja,ru,fr,de,ar,zh-CN,es,ko,pt,en" },
        "akeso-google-translate-root"
      );
    };
    const script = document.createElement("script");
    script.id = "akeso-google-translate-script";
    script.src = "https://translate.google.com/translate_a/element.js?cb=akesoGoogleTranslateInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);
  return <div id="akeso-google-translate-root" style={{ position: "absolute", left: "-9999px", top: 0 }} aria-hidden="true" />;
}









// import { useEffect } from "react";

// export default function GlobalTranslate() {
//   useEffect(() => {
//     if (document.getElementById("akeso-google-translate-script")) {
//       return;
//     }

//     window.akesoGoogleTranslateInit = () => {
//       if (!window.google?.translate?.TranslateElement) return;

//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           autoDisplay: false,
//           includedLanguages:
//             "hi,te,bn,pa,mr,ta,ja,ru,fr,de,ar,zh-CN,es,ko,pt,en",
//         },
//         "akeso-google-translate-root"
//       );
//     };

//     const script = document.createElement("script");

//     script.id = "akeso-google-translate-script";
//     script.src =
//       "https://translate.google.com/translate_a/element.js?cb=akesoGoogleTranslateInit";
//     script.async = true;

//     document.head.appendChild(script);
//   }, []);

//   return (
//     <div
//       id="akeso-google-translate-root"
//       style={{
//         position: "absolute",
//         left: "-9999px",
//         top: 0,
//       }}
//       aria-hidden="true"
//     />
//   );
// }




