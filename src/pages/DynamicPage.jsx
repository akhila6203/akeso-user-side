// import { useParams } from "react-router-dom";

// const nice = (value = "") =>
//   value
//     .split("-")
//     .map((word) =>
//       word
//         ? word.charAt(0).toUpperCase() + word.slice(1)
//         : ""
//     )
//     .join(" ");

// export default function DynamicPage({ fixedTitle }) {
//   const { slug } = useParams();

//   const title = fixedTitle || nice(slug);

//   return (
//     <main className="min-h-[65vh] bg-[#f8fbfa]">
//       {/* BREADCRUMB / HERO */}

//       <section className="bg-[#edf7f6] border-b border-[#e4eceb]">
//         <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
//           <p className="text-[12px] md:text-[13px] uppercase tracking-[0.18em] font-semibold text-[#C8942E]">
//             Akeso Global Medical Services
//           </p>

//           <h1 className="mt-3 text-[32px] md:text-[44px] font-semibold text-[#064B50]">
//             {title}
//           </h1>

//           <p className="mt-4 max-w-[650px] mx-auto text-[14px] md:text-[15px] leading-7 text-[#303232]">
//             Premium healthcare information and support for {title}.
//           </p>
//         </div>
//       </section>

//       {/* CONTENT */}

//       <section className="py-14 md:py-20">
//         <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
//           <div className="bg-white border border-[#e6eceb] rounded-2xl p-6 md:p-10 shadow-[0_12px_35px_rgba(6,75,80,0.07)]">
//             <h2 className="text-[24px] md:text-[28px] font-semibold text-[#064B50]">
//               {title}
//             </h2>

//             <p className="mt-4 text-[16px] text-[#2a2b2b] leading-7">
//               This page is ready for your final content and future
//               admin/API integration.
//             </p>

//             <div className="mt-7 rounded-xl bg-[#edf7f6] border-l-4 border-[#C8942E] p-5">
//               <strong className="text-[#064B50]">
//                 Akeso Global Medical Services
//               </strong>

//               <p className="mt-1 text-[#2c2e2e]">
//                 Healing Beyond Borders.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }