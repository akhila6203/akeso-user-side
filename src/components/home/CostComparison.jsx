import {
  ArrowRight,
  BadgeDollarSign,
} from "lucide-react";

import { Link } from "react-router-dom";

const treatments = [
  {
    name: "Knee Replacement",
    usa: "$47,500",
    india: "$40,000+",
    saving: "≈79% less",
  },
  {
    name: "Hip Replacement",
    usa: "$42,500+",
    india: "$45,000+",
    saving: "≈75% less",
  },
];

export default function CostComparison() {
  return (
    <section className="bg-[#064B50] py-16 md:py-20">
      <div className="mx-auto max-w-[1300px] px-5 sm:px-7 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">

          <div>
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-white/10
                text-[#E6B956]
              "
            >
              <BadgeDollarSign size={25} />
            </div>

            <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E6B956]">
              The Cost Difference
            </p>

            <h2 className="mt-3 max-w-[500px] text-[31px] font-semibold leading-tight text-white md:text-[42px]">
              Quality Care Without the
              International Price Tag
            </h2>

            <p className="mt-5 max-w-[550px] text-[18px] leading-7 text-white">
              Explore indicative treatment cost
              comparisons and request a personalised,
              itemised quote based on your medical
              requirements.
            </p>

            <Link
              to="/contact"
              className="
                group
                mt-7
                inline-flex
                min-h-[46px]
                items-center
                gap-2
                rounded-lg
                bg-[#C8942E]
                px-6
                text-[14px]
                font-semibold
                text-white
                hover:bg-[#A9781F]
              "
            >
              Request an Estimate

              <ArrowRight
                size={16}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {treatments.map((item) => (
              <div
                key={item.name}
                className="
                  rounded-2xl
                  border
                  border-white/15
                  bg-white
                  p-6
                  shadow-xl
                "
              >
                <h3 className="text-[19px] font-semibold text-[#064B50]">
                  {item.name}
                </h3>

                <div className="mt-6 border-b border-[#e2e9e8] pb-4">
                  <p className="text-[14px] uppercase tracking-wider text-[#444545]">
                    United States
                  </p>

                  <p className="mt-1 text-[25px] font-semibold text-[#4b5f60]">
                    {item.usa}
                  </p>
                </div>

                <div className="pt-4">
                  <p className="text-[14px] uppercase tracking-wider text-[#353637]">
                    Akeso, India
                  </p>

                  <p className="mt-1 text-[29px] font-bold text-[#064B50]">
                    {item.india}
                    {/* {item.saving} */}
                  </p>

                  <span
                    className="
                      mt-3
                      inline-flex
                      rounded-full
                      bg-[#eef6f5]
                      px-3
                      py-1
                      text-[12px]
                      font-semibold
                      text-[#A9781F]
                    "
                  >
                    {item.saving}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-[15px] leading-7 text-white/80">
          Indicative comparison figures from the Akeso
          company portfolio. Final pricing depends on
          medical evaluation, implant selection, hospital
          and room category.<br/>
           Travel, visa and additional
          accommodation costs may apply.
        </p>
      </div>
    </section>
  );
}