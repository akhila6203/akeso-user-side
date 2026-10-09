import {
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";


export default function ServicesGrid({
  services = [],
}) {
  return (
    <div className="
      grid
      gap-5
      sm:grid-cols-2
      lg:grid-cols-3
    ">
      {services.map(
        (service) => {
          const Icon =
            service.icon;

          return (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="
                group
                flex
                min-h-[280px]
                flex-col
                rounded-[22px]
                border
                border-[#D8E7E5]
                bg-white
                p-6
                transition
                duration-300
                hover:-translate-y-1
                hover:border-[#C8942E]/60
                hover:shadow-[0_18px_45px_rgba(6,75,80,0.10)]
                sm:p-7
              "
            >
              <div className="
                flex
                h-13
                w-13
                items-center
                justify-center
                rounded-[15px]
                bg-[#EEF6F5]
                text-[#C8942E]
                transition
                group-hover:bg-[#064B50]
                group-hover:text-white
              ">
                <Icon
                  size={23}
                  strokeWidth={1.7}
                />
              </div>

              <p className="
                mt-6
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#C8942E]
              ">
                {service.eyebrow}
              </p>

              <h3 className="
                mt-2
                text-[21px]
                font-semibold
                text-[#064B50]
              ">
                {service.name}
              </h3>

              <p className="
                mt-3
                text-[15px]
                leading-7
                text-[#52696A]
              ">
                {service.shortDescription}
              </p>

              <span className="
                mt-auto
                inline-flex
                items-center
                gap-2
                pt-6
                text-[14px]
                font-semibold
                text-[#064B50]
              ">
                Explore Service

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </span>
            </Link>
          );
        }
      )}
    </div>
  );
}