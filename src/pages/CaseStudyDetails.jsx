import EditorialDetails from '../components/knowledge/EditorialDetails';
export default function CaseStudyDetails() {
  return <EditorialDetails kind="cases" />;
}






// import {
//   Navigate,
//   useParams,
// } from "react-router-dom";

// import {
//   CalendarDays,
//   UserRound,
// } from "lucide-react";

// import Breadcrumb from "../components/Breadcrumb";
// import SafeImage from "../components/SafeImage";
// import KnowledgeSlider from "../components/knowledge/KnowledgeSlider";

// import {
//   caseStudyData,
//   getCaseStudyBySlug,
// } from "../data/knowledgeCenterData";

// export default function CaseStudyDetails() {
//   const { slug } = useParams();

//   const study =
//     getCaseStudyBySlug(slug);

//   if (!study) {
//     return (
//       <Navigate
//         to="/health-library/case-studies"
//         replace
//       />
//     );
//   }

//   const related = caseStudyData.filter(
//     (item) => item.slug !== study.slug
//   );

//   return (
//     <>
//       <Breadcrumb
//         title={study.title}
//         items={[
//           {
//             label: "Health Library",
//             to: "/health-library",
//           },
//           {
//             label: "Case Studies",
//             to: "/health-library/case-studies",
//           },
//         ]}
//       />

//       <article className="
//         bg-white
//         py-12
//         md:py-16
//       ">
//         <div className="
//           mx-auto
//           max-w-[1150px]
//           px-4
//           sm:px-6
//           lg:px-8
//         ">
//           <div className="
//             mb-5
//             flex
//             flex-wrap
//             gap-4
//             text-sm
//             text-[#373838]
//           ">
//             <span className="
//               rounded-full
//               bg-[#EEF6F5]
//               px-4
//               py-2
//               font-semibold
//               text-[#064B50]
//             ">
//               {study.category}
//             </span>

//             <span className="
//               flex items-center gap-2
//             ">
//               <CalendarDays size={16} />
//               {study.date}
//             </span>

//             <span className="
//               flex items-center gap-2
//             ">
//               <UserRound size={16} />
//               {study.author}
//             </span>
//           </div>

//           <h1 className="
//             text-[30px]
//             md:text-[40px]
//             lg:text-[46px]
//             font-bold
//             leading-[1.2]
//             text-[#263F41]
//           ">
//             {study.title}
//           </h1>

//           <SafeImage
//             src={study.image}
//             alt={study.title}
//             className="
//               mt-8
//               h-[280px]
//               md:h-[500px]
//               w-full
//               rounded-[24px]
//               object-cover
//             "
//           />

//           <p className="
//             mt-8
//             text-[17px]
//             leading-8
//             text-[#526566]
//           ">
//             {study.excerpt}
//           </p>

//           <div className="
//             mt-10
//             space-y-10
//           ">
//             {study.content.map(
//               (section, index) => (
//                 <section key={index}>
//                   <h2 className="
//                     mb-4
//                     text-[25px]
//                     md:text-[30px]
//                     font-bold
//                     text-[#263F41]
//                   ">
//                     {section.heading}
//                   </h2>

//                   <div className="
//                     space-y-4
//                     text-[16px]
//                     leading-8
//                     text-[#526566]
//                   ">
//                     {section.paragraphs.map(
//                       (
//                         paragraph,
//                         pIndex
//                       ) => (
//                         <p key={pIndex}>
//                           {paragraph}
//                         </p>
//                       )
//                     )}
//                   </div>
//                 </section>
//               )
//             )}
//           </div>

//           <div className="
//             mt-10
//             rounded-[18px]
//             border
//             border-[#E6D7AE]
//             bg-[#FAF8F2]
//             p-5
//             text-sm
//             leading-6
//             text-[#333434]
//           ">
//             Case-study information should be
//             de-identified and clinically reviewed
//             before publication.
//           </div>
//         </div>
//       </article>

//       <section className="
//         bg-[#EEF6F5]
//         py-14
//         md:py-16
//       ">
//         <div className="
//           mx-auto
//           max-w-[1450px]
//           px-4
//           sm:px-6
//           lg:px-8
//         ">
//           <div className="
//             mb-8
//             text-center
//           ">
//             <span className="
//               text-xs
//               font-bold
//               uppercase
//               tracking-[0.15em]
//               text-[#C8942E]
//             ">
//               Explore More
//             </span>

//             <h2 className="
//               mt-2
//               text-[28px]
//               md:text-[36px]
//               font-bold
//               text-[#263F41]
//             ">
//               Related Case Studies
//             </h2>
//           </div>

//           <KnowledgeSlider
//             items={related}
//             type="case-studies"
//           />
//         </div>
//       </section>
//     </>
//   );
// }