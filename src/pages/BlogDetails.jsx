import EditorialDetails from '../components/knowledge/EditorialDetails';
export default function BlogDetails() {
  return <EditorialDetails kind="blogs" />;
}




// import { useParams, Navigate } from "react-router-dom";

// import {
//   CalendarDays,
//   UserRound,
// } from "lucide-react";

// import Breadcrumb from "../components/Breadcrumb";
// import SafeImage from "../components/SafeImage";
// import KnowledgeSlider from "../components/knowledge/KnowledgeSlider";

// import {
//   blogData,
//   getBlogBySlug,
// } from "../data/knowledgeCenterData";

// export default function BlogDetails() {
//   const { slug } = useParams();

//   const blog = getBlogBySlug(slug);

//   if (!blog) {
//     return (
//       <Navigate
//         to="/health-library/blogs"
//         replace
//       />
//     );
//   }

//   const recentBlogs = blogData.filter(
//     (item) => item.slug !== blog.slug
//   );

//   return (
//     <>
//       <Breadcrumb
//         title={blog.title}
//         items={[
//           {
//             label: "Health Library",
//             to: "/health-library",
//           },
//           {
//             label: "Blogs",
//             to: "/health-library/blogs",
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
//             items-center
//             gap-4
//             text-sm
//             text-[#323232]
//           ">
//             <span className="
//               rounded-full
//               bg-[#EEF6F5]
//               px-4
//               py-2
//               font-semibold
//               text-[#064B50]
//             ">
//               {blog.category}
//             </span>

//             <span className="
//               flex items-center gap-2
//             ">
//               <CalendarDays size={16} />
//               {blog.date}
//             </span>

//             <span className="
//               flex items-center gap-2
//             ">
//               <UserRound size={16} />
//               {blog.author}
//             </span>
//           </div>

//           <h1 className="
//             max-w-[950px]
//             text-[30px]
//             md:text-[40px]
//             lg:text-[46px]
//             font-bold
//             leading-[1.2]
//             text-[#263F41]
//           ">
//             {blog.title}
//           </h1>

//           <SafeImage
//             src={blog.image}
//             alt={blog.title}
//             className="
//               mt-8
//               h-[260px]
//               sm:h-[360px]
//               md:h-[470px]
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
//             {blog.excerpt}
//           </p>

//           <div className="
//             mt-9
//             space-y-10
//           ">
//             {blog.content.map(
//               (section, index) => (
//                 <section
//                   key={`${section.heading}-${index}`}
//                 >
//                   <h2 className="
//                     mb-4
//                     text-[24px]
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
//                         paragraphIndex
//                       ) => (
//                         <p
//                           key={
//                             paragraphIndex
//                           }
//                         >
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
//             text-[#353636]
//           ">
//             This content is for general
//             educational purposes and does not
//             replace individual medical advice,
//             diagnosis or treatment.
//           </div>
//         </div>
//       </article>

//       {/* RECENT BLOGS */}
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
//           <div className="mb-8 text-center">
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
//               Recent Blogs
//             </h2>
//           </div>

//           <KnowledgeSlider
//             items={recentBlogs}
//             type="blogs"
//           />
//         </div>
//       </section>
//     </>
//   );
// }