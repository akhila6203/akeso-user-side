
import { ArrowRight, CalendarDays, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function PolicyLayout({
  title,
  content,
  fallbackText,
  email,
  address,
  updatedAt,
}) {
  const formattedDate = updatedAt
    ? new Date(updatedAt).toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-white">
      {/* POLICY HEADER */}
      <section className="bg-[#064B50] px-5 py-8 text-white sm:py-10 md:py-12">
        <div className="mx-auto w-full max-w-[1150px] text-center">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center justify-center gap-2 text-[13px] font-medium"
          >
            <Link
              to="/"
              className="text-white/75 transition-colors hover:text-[#E6B956]"
            >
              Home
            </Link>

            <ArrowRight size={13} className="text-[#E6B956]" />

            <span aria-current="page">{title}</span>
          </nav>

          <h1 className="mt-5 text-[32px] font-semibold leading-tight sm:text-[40px] md:text-[48px]">
            {title}
          </h1>

          {formattedDate && (
            <p className="mt-4 flex items-center justify-center gap-2 text-[13px] text-white/80 sm:text-[14px]">
              <CalendarDays size={15} className="text-[#E6B956]" />
              Last Updated: {formattedDate}
            </p>
          )}
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="w-full overflow-x-hidden px-5 py-10 sm:px-7 sm:py-14 lg:px-10 lg:py-16">
        <article className="mx-auto w-full min-w-0 max-w-[1000px]">
          {content ? (
            <div
              className="policy-content w-full min-w-0 text-[15px] leading-8 text-[#394D4D] sm:text-[16px]"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <p className="text-[15px] leading-8 text-[#394D4D]">
              {fallbackText}
            </p>
          )}

          {/* CONTACT AKESO */}
          <div className="mt-12 rounded-xl border border-[#DCE9E7] bg-[#F7FAF9] p-5 sm:p-7">
            <h2 className="text-lg font-semibold text-[#064B50]">
              Contact Akeso Global Medical Services
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#394D4D]">
              For questions about these policies, please contact our team.
            </p>

            {email && (
              <a
                href={`mailto:${email}`}
                className="mt-3 flex items-center gap-2 break-all text-sm text-[#064B50] hover:underline"
              >
                <Mail size={17} className="shrink-0" />
                {email}
              </a>
            )}

            {address && (
              <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[#394D4D]">
                <MapPin size={17} className="mt-1 shrink-0" />
                <span className="whitespace-pre-line">{address}</span>
              </p>
            )}

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#064B50] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B6268]"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </section>

      {/* PREVENT CONTENT OVERFLOW WITHOUT REMOVING ADMIN FORMATTING */}
      <style>{`
        .policy-content,
        .policy-content * {
          box-sizing: border-box;
          max-width: 100% !important;
          overflow-wrap: anywhere !important;
        }

        .policy-content {
          width: 100%;
          min-width: 0;
          white-space: normal !important;
        }

        .policy-content p,
        .policy-content h1,
        .policy-content h2,
        .policy-content h3,
        .policy-content h4,
        .policy-content li,
        .policy-content span,
        .policy-content div {
          white-space: normal !important;
        }

        .policy-content img,
        .policy-content video,
        .policy-content iframe {
          max-width: 100% !important;
          height: auto;
        }

        .policy-content table {
          display: block;
          width: 100% !important;
          max-width: 100% !important;
          overflow-x: auto;
          border-collapse: collapse;
        }

        .policy-content pre {
          max-width: 100% !important;
          white-space: pre-wrap !important;
          overflow-wrap: anywhere !important;
        }

        .policy-content ul,
        .policy-content ol {
          padding-left: 1.5rem;
        }
      `}</style>
    </main>
  );
}






// import { ArrowRight, CalendarDays, Mail, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PolicyLayout({ title, intro, sections = [] }) {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* Same centered breadcrumb style as the Contact page */}
//       <section className="bg-[#064B50] px-5 py-8 text-white sm:py-10 md:py-12">
//         <div className="mx-auto max-w-[1150px] text-center">
//           <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-center gap-2 text-[13px] font-medium">
//             <Link to="/" className="text-white/75 transition-colors hover:text-[#E6B956]">Home</Link>
//             <ArrowRight size={13} className="text-[#E6B956]" />
//             <span aria-current="page" className="text-white">{title}</span>
//           </nav>
//           <h1 className="mt-5 text-[32px] font-semibold leading-tight sm:text-[40px] md:text-[48px]">{title}</h1>
//           <p className="mt-4 flex items-center justify-center gap-2 text-[13px] text-white/80 sm:text-[14px]">
//             <CalendarDays size={15} className="text-[#E6B956]" /> Last Updated: October 2026
//           </p>
//         </div>
//       </section>

//       {/* One centered column; no left sidebar, no separate section cards */}
//       <section className="px-5 py-10 sm:px-7 sm:py-14 lg:px-10 lg:py-16">
//         <article className="mx-auto max-w-[1000px]">
//           <p className="mb-8 text-[15px] leading-8 text-[#394D4D] sm:text-[16px]">{intro}</p>

//           <div className="space-y-8 sm:space-y-10">
//             {sections.map((section, index) => (
//               <section key={section.title} aria-labelledby={`policy-heading-${index}`}>
//                 <h2 id={`policy-heading-${index}`} className="mb-3  pl-4 text-[19px] font-semibold leading-7 text-[#064B50] sm:text-[21px]">
//                   {index + 1}. {section.title}
//                 </h2>
//                 <div className="space-y-3 pl-0 text-[15px] leading-8 text-[#394D4D] sm:pl-[19px] sm:text-[16px]">
//                   {section.paragraphs?.map((paragraph, i) => (
//                     <p key={i} className="whitespace-pre-line">{paragraph}</p>
//                   ))}
//                   {section.bullets?.length > 0 && (
//                     <ul className="list-disc space-y-2 pl-5 marker:text-[#C8942E]">
//                       {section.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
//                     </ul>
//                   )}
//                 </div>
//               </section>
//             ))}
//           </div>

//           <div className="mt-12 rounded-xl border border-[#DCE9E7] bg-[#F7FAF9] p-5 sm:p-7">
//             <h2 className="text-lg font-semibold text-[#064B50]">Contact Akeso Global Medical Services</h2>
//             <p className="mt-2 text-sm leading-7 text-[#394D4D]">For questions about these policies, please contact our team.</p>
//             <a href="mailto:akesoglobalhealth@gmail.com" className="mt-3 flex items-center gap-2 break-all text-sm text-[#064B50] hover:underline"><Mail size={17} /> akesoglobalhealth@gmail.com</a>
//             <p className="mt-2 flex items-center gap-2 text-sm text-[#394D4D]"><MapPin size={17} /> Hyderabad, Telangana, India</p>
//             <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#064B50] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0B6268]">Contact Us <ArrowRight size={16} /></Link>
//           </div>
//         </article>
//       </section>
//     </main>
//   );
// }
