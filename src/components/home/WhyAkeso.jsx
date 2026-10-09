
import {
  BadgeDollarSign,
  Stethoscope,
  Hospital,
  ShieldCheck,
  Headphones,
  Plane,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Significant Cost Savings",
    text: "Explore quality medical treatment options in India at costs that may be lower than comparable care in many international markets.",
  },
  {
    icon: Stethoscope,
    title: "Experienced Specialists",
    text: "Connect with experienced medical specialists and surgical teams suited to your individual healthcare requirements.",
  },
  {
    icon: Hospital,
    title: "Trusted Hospitals",
    text: "Explore established hospitals offering specialised clinical services and patient-focused medical care.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Technology",
    text: "Access modern healthcare facilities with advanced diagnostic services and medical technologies.",
  },
  {
    icon: Headphones,
    title: "End-to-End Support",
    text: "Receive coordination support from your initial medical enquiry through treatment planning and follow-up care.",
  },
  {
    icon: Plane,
    title: "Travel Assistance",
    text: "Get assistance with medical travel preparation, hospital visits, local arrangements and stay planning.",
  },
];

/* =========================================
   REUSABLE BENEFIT CARD
========================================= */

function BenefitCard({ icon: Icon, title, text }) {
  return (
    <article
      className="
        group
        rounded-2xl
        border border-[#DFE9E8]
        bg-[#FBFCFC]
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#C8942E]/50
        hover:shadow-[0_14px_35px_rgba(6,75,80,0.10)]
      "
    >
      <div
        className="
          flex h-12 w-12
          items-center justify-center
          rounded-xl
          bg-[#E8F3F2]
          text-[#B78124]
        "
      >
        <Icon size={24} strokeWidth={1.8} />
      </div>

      <h3 className="mt-5 text-[18px] font-semibold text-[#064B50]">
        {title}
      </h3>

      <p className="mt-3 text-[16px] leading-7 text-[#344849]">
        {text}
      </p>
    </article>
  );
}

/* =========================================
   WHY INDIA SECTION
========================================= */

export default function WhyAkeso() {
  return (
    <section
      id="why-india-medical-care"
      className="bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

        {/* UPDATED HEADING */}

        <div className="mx-auto mb-10 max-w-[850px] text-center">
          <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#B78124]">
            Healthcare in India
          </p>

          <h2 className="mt-3 text-[31px] font-semibold leading-tight text-[#064B50] md:text-[40px]">
            Why India for Medical Care?
          </h2>

          <p className="mt-4 text-[16px] leading-8 text-[#344849]">
            Where ancient healing heritage meets modern
            medical excellence. Discover experienced
            specialists, trusted hospitals, advanced
            technology and coordinated healthcare
            support for international patients.
          </p>
        </div>

        {/* EXISTING SIX BENEFIT CARDS */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <BenefitCard
              key={reason.title}
              {...reason}
            />
          ))}
        </div>

      </div>
    </section>
  );
}




// import {
//   BadgeDollarSign,
//   Stethoscope,
//   Hospital,
//   ShieldCheck,
//   Headphones,
//   Plane,
// } from "lucide-react";

// const reasons = [
//   {
//     icon: BadgeDollarSign,
//     title: "Significant Cost Savings",
//     text: "Access high-quality treatment in India at substantially lower costs compared with many international markets.",
//   },
//   {
//     icon: Stethoscope,
//     title: "Experienced Specialists",
//     text: "Connect with experienced surgeons and medical teams matched to your individual medical requirements.",
//   },
//   {
//     icon: Hospital,
//     title: "Trusted Hospitals",
//     text: "Care through leading hospitals following recognised clinical and patient-safety standards.",
//   },
//   {
//     icon: ShieldCheck,
//     title: "Quality & Technology",
//     text: "Internationally certified implants and advanced medical technology for modern patient care.",
//   },
//   {
//     icon: Headphones,
//     title: "End-to-End Support",
//     text: "A dedicated coordinator supports your journey from consultation through treatment and recovery.",
//   },
//   {
//     icon: Plane,
//     title: "Travel Assistance",
//     text: "Support with visa documentation, airport transfers, local coordination and stay planning.",
//   },
// ];

// export default function WhyAkeso() {
//   return (
//     <section className="bg-white py-12 md:py-16">
//       <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

//         <div className="mx-auto mb-10 max-w-[760px] text-center">
//           <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#B78124]">
//             The Akeso Difference
//           </p>

//           <h2 className="mt-3 text-[31px] font-semibold text-[#064B50] md:text-[40px]">
//             Why Choose Akeso?
//           </h2>

//           <p className="mt-4 text-[16px] leading-7 text-black">
//             Making international healthcare more
//             accessible, coordinated and patient-focused
//             from your first consultation through recovery.
//           </p>
//         </div>

//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {reasons.map(
//             ({ icon: Icon, title, text }) => (
//               <div
//                 key={title}
//                 className="
//                   rounded-2xl
//                   border
//                   border-[#dfe9e8]
//                   bg-[#fbfcfc]
//                   p-6
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-[#C8942E]/50
//                   hover:shadow-[0_14px_35px_rgba(6,75,80,0.10)]
//                 "
//               >
//                 <div
//                   className="
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     rounded-xl
//                     bg-[#e8f3f2]
//                     text-[#B78124]
//                   "
//                 >
//                   <Icon size={24} />
//                 </div>

//                 <h3 className="mt-5 text-[18px] font-semibold text-[#064B50]">
//                   {title}
//                 </h3>

//                 <p className="mt-3 text-[16px] leading-6 text-black">
//                   {text}
//                 </p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }