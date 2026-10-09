import {
  useEffect,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";


function getVisibleCount() {
  if (
    typeof window ===
    "undefined"
  ) {
    return 4;
  }

  if (
    window.innerWidth <
    768
  ) {
    return 1;
  }

  if (
    window.innerWidth <
    1200
  ) {
    return 2;
  }

  return 4;
}


export default function HealthTechnologySlider({
  technologies = [],
}) {
  const [
    startIndex,
    setStartIndex,
  ] = useState(0);

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(
    getVisibleCount()
  );


  useEffect(() => {
    const handleResize =
      () => {
        setVisibleCount(
          getVisibleCount()
        );
      };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);


  const move = (
    direction
  ) => {
    if (
      technologies.length ===
      0
    ) {
      return;
    }

    setStartIndex(
      (current) =>
        (
          current +
          direction +
          technologies.length
        ) %
        technologies.length
    );
  };


  const count =
    Math.min(
      visibleCount,
      technologies.length
    );


  const visibleItems =
    Array.from(
      { length: count },
      (_, offset) =>
        technologies[
          (
            startIndex +
            offset
          ) %
            technologies.length
        ]
    );


  if (
    technologies.length ===
    0
  ) {
    return null;
  }


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
          max-w-[1400px]
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
            Advanced Care
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
            Technology
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[700px]
              text-[15px]
              leading-7
              text-[#525252]
              sm:text-[16px]
            "
          >
            Explore selected medical
            technologies used across
            different areas of
            healthcare.
          </p>
        </div>


        {/* SLIDER */}

        <div
          className="
            relative
            mt-10
          "
        >

          {/* PREVIOUS */}

          {technologies.length >
            count && (
            <button
              type="button"
              onClick={() =>
                move(-1)
              }
              aria-label="Previous technologies"
              className="
                absolute
                left-0
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-x-2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#DCECEB]
                bg-white
                text-[#064B50]
                shadow-lg
                transition
                hover:bg-[#064B50]
                hover:text-white
                lg:-translate-x-1/2
              "
            >
              <ArrowLeft
                size={18}
              />
            </button>
          )}


          {/* CARDS */}

          <div
            className={`
              grid
              gap-5

              ${
                count === 1
                  ? "grid-cols-1"
                  : ""
              }

              ${
                count >= 2
                  ? "md:grid-cols-2"
                  : ""
              }

              ${
                count >= 4
                  ? "xl:grid-cols-4"
                  : ""
              }
            `}
          >
            {visibleItems.map(
              (technology) => (
                <article
                  key={
                    technology.id
                  }
                  className="
                    group
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[#DCECEB]
                    bg-white
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C8942E]/50
                    hover:shadow-[0_16px_40px_rgba(6,75,80,0.09)]
                  "
                >

                  {/* IMAGE */}

                  <div
                    className="
                      h-[210px]
                      overflow-hidden
                      bg-[#EEF6F5]
                    "
                  >
                    <img
                      src={
                        technology.image
                      }
                      alt={
                        technology.name
                      }
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>


                  {/* CONTENT */}

                  <div
                    className="
                      flex
                      min-h-[245px]
                      flex-col
                      p-6
                    "
                  >
                    <h3
                      className="
                        text-[19px]
                        font-semibold
                        text-[#064B50]
                      "
                    >
                      {
                        technology.name
                      }
                    </h3>

                    <p
                      className="
                        mt-3
                        line-clamp-4
                        text-[16px]
                        leading-7
                        text-[#3d3d3d]
                      "
                    >
                      {
                        technology.description
                      }
                    </p>

                    <Link
                      to={`/technologies/${technology.slug}`}
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
                    </Link>
                  </div>
                </article>
              )
            )}
          </div>


          {/* NEXT */}

          {technologies.length >
            count && (
            <button
              type="button"
              onClick={() =>
                move(1)
              }
              aria-label="Next technologies"
              className="
                absolute
                right-0
                top-1/2
                z-20
                flex
                h-11
                w-11
                translate-x-2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#DCECEB]
                bg-white
                text-[#064B50]
                shadow-lg
                transition
                hover:bg-[#064B50]
                hover:text-white
                lg:translate-x-1/2
              "
            >
              <ArrowRight
                size={18}
              />
            </button>
          )}
        </div>


        {/* VIEW ALL */}

        <div
          className="
            mt-10
            text-center
          "
        >
          <Link
            to="/technologies"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#064B50]
              px-7
              py-3.5
              text-[14px]
              font-semibold
              text-white
              transition
              hover:bg-[#0B6268]
            "
          >
            View All Technologies

            <ArrowRight
              size={17}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}