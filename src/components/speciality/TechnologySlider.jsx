import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  technologies,
} from "../../data/technologyData";

import SectionHeading from "./SectionHeading";

export default function TechnologySlider({
  items = technologies,
}) {
  const navigate = useNavigate();

  const [index, setIndex] =
    useState(0);

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(3);

  const safeItems =
    items?.length
      ? items
      : technologies;

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (
        window.innerWidth < 1100
      ) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener(
      "resize",
      updateVisibleCount
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateVisibleCount
      );
  }, []);

  const next = () => {
    if (!safeItems.length) return;

    setIndex(
      (prev) =>
        (prev + 1) %
        safeItems.length
    );
  };

  const previous = () => {
    if (!safeItems.length) return;

    setIndex(
      (prev) =>
        (prev -
          1 +
          safeItems.length) %
        safeItems.length
    );
  };

  useEffect(() => {
    if (safeItems.length <= 1) {
      return;
    }

    const timer = setInterval(
      next,
      4500
    );

    return () =>
      clearInterval(timer);
  }, [safeItems.length]);

  if (!safeItems.length) {
    return null;
  }

  const visibleItems =
    Array.from(
      {
        length: Math.min(
          visibleCount,
          safeItems.length
        ),
      },
      (_, position) =>
        safeItems[
          (index + position) %
            safeItems.length
        ]
    );

  return (
    <section className="overflow-hidden bg-[#F4F8F7] py-16 md:py-20">

      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

        <SectionHeading
          eyebrow="Advanced Care"
          title="Technology"
          description="Explore modern medical technologies that may support diagnosis, treatment planning and selected procedures."
        />

        {/* ==========================================
            SLIDER
        =========================================== */}
        <div className="relative mt-12 px-0 sm:px-12 lg:px-14">

          {/* LEFT ARROW */}
          {safeItems.length > 1 && (
            <button
              type="button"
              onClick={previous}
              aria-label="Previous technology"
              className="
                absolute
                left-0
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#BCD3D1]
                bg-white
                text-[#064B50]
                shadow-[0_8px_25px_rgba(6,75,80,0.10)]
                transition
                hover:border-[#064B50]
                hover:bg-[#064B50]
                hover:text-white

                max-sm:left-2
              "
            >
              <ArrowLeft size={19} />
            </button>
          )}

          {/* CARDS */}
          <div
            className={`
              grid gap-6

              ${
                visibleCount === 1
                  ? "grid-cols-1"
                  : visibleCount === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }
            `}
          >

            {visibleItems.map(
              (
                technology,
                position
              ) => (
                <article
                  key={`${technology.id}-${position}`}
                  className="
                    group
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-[#DCE8E7]
                    bg-white
                    shadow-[0_12px_35px_rgba(6,75,80,0.07)]
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_18px_45px_rgba(6,75,80,0.12)]
                  "
                >

                  {/* IMAGE */}
                  <div className="h-[220px] overflow-hidden bg-[#E7F1F0] sm:h-[230px]">

                    <img
                      src={
                        technology.image
                      }
                      alt={
                        technology.name
                      }
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <h3 className="text-[19px] font-semibold text-[#064B50]">
                      {technology.name}
                    </h3>

                    <p className="mt-3 text-[16px] leading-7 text-[#2c2d2d]">
                      {
                        technology.description
                      }
                    </p>

                  </div>

                </article>
              )
            )}

          </div>

          {/* RIGHT ARROW */}
          {safeItems.length > 1 && (
            <button
              type="button"
              onClick={next}
              aria-label="Next technology"
              className="
                absolute
                right-0
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                bg-[#064B50]
                text-white
                shadow-[0_8px_25px_rgba(6,75,80,0.14)]
                transition
                hover:bg-[#0B6268]

                max-sm:right-2
              "
            >
              <ArrowRight size={19} />
            </button>
          )}

        </div>

        {/* VIEW ALL */}
        <div className="mt-10 text-center">

          <button
            type="button"
            onClick={() =>
              navigate(
                "/technologies"
              )
            }
            className="inline-flex items-center gap-2 rounded-xl bg-[#064B50] px-7 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#0B6268]"
          >
            View All Technologies

            <ArrowRight
              size={17}
            />
          </button>

        </div>

      </div>
    </section>
  );
}