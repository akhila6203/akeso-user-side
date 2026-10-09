import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Get in Touch",
    text: "Contact Akeso to express your interest in joining the partner program.",
  },
  {
    number: "02",
    title: "Refer a Patient",
    text: "Introduce eligible self-pay international patients seeking medical care in India.",
  },
  {
    number: "03",
    title: "We Coordinate",
    text: "Akeso supports report review, specialist consultations, treatment planning, travel and stay.",
  },
  {
    number: "04",
    title: "Referral Completion",
    text: "Eligible referrals are processed according to the applicable partner-program terms.",
  },
];

export default function BecomePartnerPage() {
  return (
    <main>
      <section className="bg-[#064B50] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 text-center">

          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#E6B956]">
            Partner Program
          </p>

          <h1 className="mt-4 text-[36px] font-semibold text-white md:text-[50px]">
            Partner With Akeso
          </h1>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-white/75">
            Join a healthcare network focused on
            helping international patients access
            coordinated medical care in India.
          </p>

        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">

          <div className="mx-auto max-w-[700px] text-center">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#B78124]">
              Getting Started
            </p>

            <h2 className="mt-3 text-[31px] font-semibold text-[#064B50]">
              How to Become a Partner
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  rounded-2xl
                  border
                  border-[#dce7e6]
                  bg-[#f8fbfa]
                  p-6
                "
              >
                <span className="text-[13px] font-bold text-[#B78124]">
                  {step.number}
                </span>

                <h3 className="mt-3 text-[19px] font-semibold text-[#064B50]">
                  {step.title}
                </h3>

                <p className="mt-3 text-[15px] leading-6 text-[#303030]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-[#eef6f5] p-7 md:p-9">
            <h3 className="text-[21px] font-semibold text-[#064B50]">
              Who Can Partner?
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Healthcare professionals",
                "Nurses and advanced practice professionals",
                "Medical students",
                "Trusted international networks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[14px] text-[#536466]"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#B78124]"
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:akesoglobalhealth@gmail.com"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-[#064B50]
                px-7
                py-3
                text-[14px]
                font-semibold
                text-white
                hover:bg-[#0B6268]
              "
            >
              Contact Akeso

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}