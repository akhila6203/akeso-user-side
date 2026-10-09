
import { Quote } from "lucide-react";

import founderImage from "../../assets/home/founder.png";

export default function FounderWords() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1350px] px-5 sm:px-7">

        <div
          className="
            grid
            overflow-hidden
            rounded-[24px]
            border
            border-[#dce7e6]
            bg-[#064B50]
            md:grid-cols-[0.85fr_1.15fr]
          "
        >

          {/* LEFT SIDE - FOUNDER IMAGE */}
          <div
            className="
              relative
              min-h-[320px]
              bg-[#E8F3F2]
              sm:min-h-[400px]
              md:min-h-full
            "
          >
            <img
              src={founderImage}
              alt="Prasad - Founder and Managing Director, Akeso Global Medical Services"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-top
              "
            />

            {/* SUBTLE IMAGE OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#064B50]/20
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* RIGHT SIDE - FOUNDER CONTENT */}
          <div
            className="
              flex
              flex-col
              justify-center
              px-7
              py-10
              text-left
              sm:px-10
              md:px-12
              md:py-14
            "
          >
            <Quote
              size={43}
              className="text-[#C8942E] opacity-90"
            />

            <p
              className="
                mt-5
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#E6B956]
              "
            >
              Words from the Founder
            </p>

            <h2
              className="
                mt-5
                text-[22px]
                font-medium
                leading-[1.6]
                text-white
                md:text-[27px]
              "
            >
              At Akeso Global, our mission is simple;
              to make quality healthcare more accessible,
              transparent, and patient-focused.
            </h2>

            <p
              className="
                mt-5
                text-[16px]
                leading-8
                text-white/85
                md:text-[17px]
              "
            >
              We connect patients with trusted medical
              expertise in India while supporting them
              throughout their healthcare journey,
              from consultation to recovery.
            </p>

            <div className="mt-7 h-[2px] w-14 bg-[#C8942E]" />

            <p className="mt-5 text-[19px] font-semibold text-white">
              Prasad
            </p>

            <p className="mt-1 text-[15px] text-white/70">
              Founder &amp; Managing Director
            </p>

            <p className="mt-1 text-[15px] text-white/70">
              Akeso Global Medical Services
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}












// import {
//   Quote,
// } from "lucide-react";

// export default function FounderWords() {
//   return (
//     <section className="bg-white py-16 md:py-20">
//       <div className="mx-auto max-w-[1100px] px-5 sm:px-7">

//         <div
//           className="
//             relative
//             overflow-hidden
//             rounded-[24px]
//             border
//             border-[#dce7e6]
//             bg-[#064B50]
//             px-7
//             py-10
//             text-center
//             sm:px-12
//             md:py-14
//           "
//         >
//           <Quote
//             size={45}
//             className="
//               mx-auto
//               text-[#C8942E]
//               opacity-90
//             "
//           />

//           <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E6B956]">
//             Words From Our Founder
//           </p>

//           <h2
//             className="
//               mx-auto
//               mt-5
//               max-w-[800px]
//               text-[23px]
//               font-medium
//               leading-[1.6]
//               text-white
//               md:text-[29px]
//             "
//           >
//             Founder message will be added here once
//             the final approved content is provided.
//           </h2>

//           <div className="mx-auto mt-7 h-[2px] w-14 bg-[#C8942E]" />

//           <p className="mt-4 text-[18px] font-semibold text-white">
//             Founder Name
//           </p>

//           <p className="mt-1 text-[15px] text-white/60">
//             Founder, Akeso Global Health
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }