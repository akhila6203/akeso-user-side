import {
  Globe2,
  Hospital,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

const patientSupport = [
  {
    icon: Globe2,
    title: "International Patient Support",
    text: "Dedicated assistance for patients travelling to India for medical consultation and treatment.",
  },

  {
    icon: Hospital,
    title: "Trusted Hospital Network",
    text: "Access to suitable partner hospitals based on your condition and treatment requirements.",
  },

  {
    icon: Stethoscope,
    title: "Specialist Consultation",
    text: "Connect with experienced specialists for medical review, consultation and treatment planning.",
  },

  {
    icon: HeartHandshake,
    title: "End-to-End Coordination",
    text: "Support from report review and travel planning through treatment, recovery and follow-up.",
  },
];

export default function InternationalStats() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div
        className="
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-7
          lg:px-10
        "
      >
        <div
          className="
            max-w-[780px]
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
            International Patient Care
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
            Care Beyond Borders
          </h2>

          <p
            className="
              mt-4
              text-[16px]
              md:text-[15px]
              leading-7
               text-[#000000]
            "
          >
            Akeso helps international patients navigate
            their medical journey in India with
            coordinated support, trusted healthcare
            connections and personalised assistance.
          </p>
        </div>

        <div
          className="
            mt-11
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
          "
        >
          {patientSupport.map(
            ({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#dfe9e8]
                  bg-[#fbfcfc]
                  p-6
                  text-center

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#C8942E]/50
                  hover:shadow-[0_14px_35px_rgba(6,75,80,0.10)]
                "
              >
                {/* dotted design */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-[0.08]
                    pointer-events-none
                  "
                  style={{
                    backgroundImage:
                      "radial-gradient(#C8942E 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#e8f3f2]
                      text-[#C8942E]

                      transition-all
                      duration-300

                      group-hover:bg-[#064B50]
                      group-hover:text-white
                      group-hover:scale-105
                    "
                  >
                    <Icon size={25} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-[17px]
                      font-semibold
                      text-[#064B50]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-3
                       text-[15px]
                       md:text-[16px]
                      leading-6
                      text-[#4e5050]
                    "
                  >
                    {text}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}