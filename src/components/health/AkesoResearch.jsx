import {
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";


export default function AkesoResearch() {
  return (
    <section
      className="
        bg-white
        py-14

        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1300px]
          px-5

          sm:px-7
          lg:px-10
        "
      >

        {/* HEADING */}

        <div className="text-center">
          <span
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#C8942E]
            "
          >
            Knowledge & Innovation
          </span>

          <h2
            className="
              mt-3
              text-[30px]
              font-semibold
              text-[#064B50]

              sm:text-[36px]
              lg:text-[40px]
            "
          >
            Akeso Research
          </h2>
        </div>


        {/* CONTENT */}

        <div
          className="
            mt-10
            grid
            overflow-hidden
            rounded-[24px]
            border
            border-[#DCECEB]
            bg-[#FAFDFC]

            lg:grid-cols-2
          "
        >

          {/* IMAGE */}

          <div
            className="
              min-h-[280px]

              sm:min-h-[340px]
            "
          >
            <img
              src="/images/health-library/research.jpg"
              alt="Akeso Research"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>


          {/* MATTER */}

          <div
            className="
              flex
              flex-col
              justify-center
              p-7

              sm:p-10
              lg:p-12
            "
          >
            <h3
              className="
                text-[25px]
                font-semibold
                leading-tight
                text-[#064B50]

                sm:text-[30px]
              "
            >
              Research, Knowledge &
              Healthcare Information
            </h3>

            <p
              className="
                mt-5
                text-[16px]
                leading-8
                text-black
              "
            >
              Explore healthcare
              knowledge and educational
              information designed to
              support a better
              understanding of medical
              care, treatment pathways
              and healthcare
              technologies.
            </p>

            <Link
              to="/research"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-[14px]
                font-semibold
                text-[#064B50]
                transition

                hover:text-[#C8942E]
              "
            >
              Know More

              <ArrowRight
                size={18}
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}