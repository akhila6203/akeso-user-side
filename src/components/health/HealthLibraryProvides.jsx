import {
  Activity,
  ArrowRight,
  ClipboardPlus,
  HeartPulse,
  Settings,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";


const icons = {
  activity: Activity,
  clipboard: ClipboardPlus,
  settings: Settings,
  heart: HeartPulse,
};


export default function HealthLibraryProvides({
  items = [],
}) {
  return (
    <section
      className="
        bg-[#FAF8F2]
        py-14
        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1350px]
          px-5
          sm:px-7
          lg:px-10
        "
      >
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
            Explore More
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
            Health Library Provides
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[720px]
              text-[15px]
              leading-7
              text-[#1f2020]
              sm:text-[16px]
            "
          >
            Explore conditions,
            treatments, ailments and
            healthcare technologies
            through dedicated sections.
          </p>
        </div>


        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {items.map((item) => {
            const Icon =
              icons[item.icon] ||
              Activity;

            return (
              <Link
                key={item.title}
                to={item.path}
                className="
                  group
                  flex
                  min-h-[270px]
                  flex-col
                  rounded-[20px]
                  border
                  border-[#DCECEB]
                  bg-white
                  p-7
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#C8942E]/50
                  hover:shadow-[0_16px_40px_rgba(6,75,80,0.09)]
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#EEF6F5]
                    text-[#C8942E]
                  "
                >
                  <Icon size={26} />
                </div>

                <h3
                  className="
                    mt-5
                    text-[19px]
                    font-semibold
                    text-[#064B50]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[16px]
                    leading-7
                    text-[#303030]
                  "
                >
                  {item.description}
                </p>

                <span
                  className="
                    mt-auto
                    inline-flex
                    items-center
                    gap-2
                    pt-5
                    text-[14px]
                    font-semibold
                    text-[#064B50]
                    transition
                    group-hover:text-[#C8942E]
                  "
                >
                  Know More

                  <ArrowRight
                    size={17}
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

