// import {
//   ArrowLeft,
//   Stethoscope,
// } from "lucide-react";

// import {
//   Link,
//   useParams,
// } from "react-router-dom";

// import Breadcrumb from "../components/Breadcrumb";
// import SectionHeading from "../components/speciality/SectionHeading";

// import {
//   specialties,
// } from "../data/navigation";

// import {
//   getSpecialityDetails,
// } from "../data/specialityDetails";

// export default function SpecialityTreatments() {
//   const { slug } = useParams();

//   const navigationItem =
//     specialties.find(
//       (item) => item[1] === slug
//     );

//   if (!navigationItem) return null;

//   const data = getSpecialityDetails(
//     slug,
//     navigationItem
//   );

//   return (
//     <main className="bg-white">
//       <Breadcrumb
//         items={[
//           {
//             label: "Specialities",
//             to: "/specialities",
//           },
//           {
//             label: data.title,
//             to: `/speciality/${slug}`,
//           },
//           {
//             label: "Treatments",
//           },
//         ]}
//         title={`${data.title} Treatments`}
//         description={`Explore treatment options commonly associated with ${data.title}. Treatment recommendations depend on specialist medical evaluation.`}
//       />

//       <section className="py-16 md:py-20">
//         <div className="mx-auto max-w-[1300px] px-5 sm:px-7 lg:px-10">
//           <SectionHeading
//             eyebrow="Care Options"
//             title="All Treatments"
//             description="Treatment selection is individualised based on diagnosis, medical evaluation and specialist recommendations."
//           />

//           <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
//             {(data.treatments || []).map(
//               (item, index) => {
//                 const title =
//                   typeof item === "string"
//                     ? item
//                     : item.title ||
//                       item.name;

//                 const description =
//                   typeof item === "object"
//                     ? item.description ||
//                       item.text
//                     : "";

//                 return (
//                   <article
//                     key={`${title}-${index}`}
//                     className="group rounded-[20px] border border-[#D7E6E4] bg-white p-7 shadow-[0_10px_30px_rgba(6,75,80,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#C8942E]/60 hover:shadow-[0_16px_40px_rgba(6,75,80,0.10)]"
//                   >
//                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF6F5] text-[#C8942E] transition group-hover:bg-[#064B50] group-hover:text-white">
//                       <Stethoscope size={21} />
//                     </div>

//                     <h3 className="mt-5 text-[18px] font-semibold text-[#064B50]">
//                       {title}
//                     </h3>

//                     {description && (
//                       <p className="mt-3 text-[15px] leading-7 text-[#323434]">
//                         {description}
//                       </p>
//                     )}
//                   </article>
//                 );
//               }
//             )}
//           </div>

//           <div className="mt-10 text-center">
//             <Link
//               to={`/speciality/${slug}`}
//               className="inline-flex items-center gap-2 rounded-xl border border-[#064B50] px-7 py-3.5 text-[14px] font-semibold text-[#064B50] transition hover:bg-[#064B50] hover:text-white"
//             >
//               <ArrowLeft size={17} />
//               Back to {data.title}
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }