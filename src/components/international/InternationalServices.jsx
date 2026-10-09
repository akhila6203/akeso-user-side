import {
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  international,
} from "../../data/navigation";

/*
  Images are mapped only for presentation.

  Navigation name, slug and icon come directly
  from your existing navigation.js file.
*/

const serviceImages = {
  "patient-help-desk":
    "/images/international/patient-help-desk.jpg",

  "plan-your-trip":
    "/images/international/plan-your-trip.jpg",

  "request-an-estimate":
    "/images/international/request-estimate.jpg",
};

const serviceDescriptions = {
  "patient-help-desk":
    "Get dedicated assistance for your medical queries, hospital coordination and international patient support.",

  "plan-your-trip":
    "Receive guidance for medical travel, visa documentation, airport coordination and stay planning.",

  "request-an-estimate":
    "Share your medical reports and receive guidance on treatment planning and an estimated care package.",
};

export default function InternationalServices() {
  return (
    <section
      className="
        bg-[#f7faf9]
        py-16
        md:py-20
      "
    >
      <div
        className="
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-7
          lg:px-10
        "
      >
        {/* heading */}

        <div
          className="
            max-w-[760px]
            mx-auto
            text-center
          "
        >
          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#C8942E]
            "
          >
            Patient Assistance
          </p>

          <h2
            className="
              mt-3
              text-[30px]
              md:text-[40px]
              font-semibold
              text-[#064B50]
            "
          >
            International Patient Services
          </h2>

          <p
            className="
              mt-4
              text-[16px]
              md:text-[15px]
              leading-7
              text-[#2b2d2d]
            "
          >
            Everything you need to plan and coordinate
            your medical journey to India with greater
            clarity and confidence.
          </p>
        </div>

        {/* cards */}

        <div
          className="
            mt-11
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {international.map(
            ([name, slug, Icon]) => (
              <Link
                key={slug}
                to={`/international/${slug}`}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  border
                  border-[#dfe9e8]

                  transition-all
                  duration-300

                  hover:-translate-y-1.5
                  hover:border-[#C8942E]/50
                  hover:shadow-[0_18px_42px_rgba(6,75,80,0.12)]
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-[220px]
                    overflow-hidden
                    bg-[#edf7f6]
                  "
                >
                  <img
                    src={serviceImages[slug]}
                    alt={name}
                    className="
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-500

                      group-hover:scale-[1.06]
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#043F43]/50
                      via-transparent
                      to-transparent
                    "
                  />

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4

                      w-12
                      h-12

                      flex
                      items-center
                      justify-center

                      rounded-xl
                      bg-white

                      shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                    "
                  >
                    {Icon && (
                      <Icon
                        size={22}
                        className="text-[#C8942E]"
                      />
                    )}
                  </div>
                </div>

                {/* CONTENT */}

                <div className="p-6">
                  <h3
                    className="
                      text-[19px]
                      font-semibold
                      text-[#064B50]
                    "
                  >
                    {name}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[16px]
                      leading-6
                      text-[#2f3030]
                    "
                  >
                    {serviceDescriptions[slug]}
                  </p>

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2

                      rounded-lg

                      border
                      border-[#d6e6e4]

                      bg-[#edf6f5]

                      px-4
                      py-2.5

                      text-[13px]
                      font-semibold
                      text-[#064B50]

                      transition-all
                      duration-300

                      group-hover:bg-[#064B50]
                      group-hover:border-[#C8942E]
                      group-hover:text-white
                    "
                  >
                    Know More

                    <ArrowRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}