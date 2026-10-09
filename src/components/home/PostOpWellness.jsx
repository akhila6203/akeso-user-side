import {
  Activity,
  HeartPulse,
  Salad,
  Sparkles,
} from "lucide-react";

const wellness = [
  {
    icon: Activity,
    title: "Physiotherapy",
    text: "Structured rehabilitation support designed around your recovery journey.",
  },
  {
    icon: Sparkles,
    title: "Yoga",
    text: "Gentle guided practices to support mobility, balance and overall wellbeing.",
  },
  {
    icon: HeartPulse,
    title: "Mind Wellness",
    text: "Mindfulness and emotional wellbeing support throughout recovery.",
  },
  {
    icon: Salad,
    title: "Nutrition",
    text: "Practical nutritional guidance to complement recovery and rehabilitation.",
  },
];

export default function PostOpWellness() {
  return (
    <section className="bg-[#faf8f2] py-16 md:py-20">
      <div className="mx-auto max-w-[1350px] px-5 sm:px-7 lg:px-10">

        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#B78124]">
            Healing Beyond Surgery
          </p>

          <h2 className="mt-3 text-[31px] font-semibold text-[#064B50] md:text-[40px]">
            Post-Operative Care & Wellness
          </h2>

          <p className="mt-4 text-[16px] leading-7 text-[#1c1c1c]">
            Recovery support that goes beyond the
            procedure, helping patients transition
            comfortably through rehabilitation and
            wellbeing.
          </p>
        </div>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {wellness.map(
            ({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="
                  rounded-2xl
                  border
                  border-[#e5e2d8]
                  bg-white
                  p-6
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C8942E]/50
                  hover:shadow-[0_14px_32px_rgba(6,75,80,0.08)]
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#eef6f5]
                    text-[#B78124]
                  "
                >
                  <Icon size={25} />
                </div>

                <h3 className="mt-5 text-[18px] font-semibold text-[#064B50]">
                  {title}
                </h3>

                <p className="mt-3 text-[15px] leading-6 text-[#262727]">
                  {text}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}