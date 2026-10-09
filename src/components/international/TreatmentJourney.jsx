import {
  ChevronLeft,
  ChevronRight,
  FileSearch,
  FlaskConical,
  HeartHandshake,
  Info,
  Plane,
  Stamp,
  Stethoscope,
  Video,
} from "lucide-react";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

/* =========================================================
   TREATMENT JOURNEY DATA
========================================================= */

const journeySteps = [
  {
    number: "01",
    icon: FileSearch,
    title: "Online Review of Your Medical Reports",
    text:
      "Share your scans, medical reports and treatment history with our team for an initial case review.",
  },

  {
    number: "02",
    icon: Video,
    title: "Meet Suitable Specialists",
    text:
      "Connect online with suitable doctors, discuss your condition and understand the available treatment options.",
  },

  {
    number: "03",
    icon: Stamp,
    title: "Medical Visa Assistance",
    text:
      "Our team assists with medical travel documentation and visa-related coordination for your journey to India.",
  },

  {
    number: "04",
    icon: Plane,
    title: "Arrival, Airport Pickup & Stay",
    text:
      "We coordinate your arrival, airport assistance, local travel and stay so your treatment journey is easier to manage.",
  },

  {
    number: "05",
    icon: FlaskConical,
    title: "Pre-Surgery Imaging & Tests",
    text:
      "Complete the necessary laboratory tests, imaging and medical evaluations before your planned procedure.",
  },

  {
    number: "06",
    icon: Stethoscope,
    title: "Treatment & Surgery",
    text:
      "Receive your planned treatment or surgery with the selected specialist and partner hospital.",
  },

  {
    number: "07",
    icon: HeartHandshake,
    title: "Post-Op Care & Wellbeing",
    text:
      "Continue your recovery with coordinated physiotherapy, yoga, nutrition, mindfulness and post-treatment support.",
  },
];

/* =========================================================
   RESPONSIVE VISIBLE CARD COUNT

   Desktop = 3
   Tablet  = 2
   Mobile  = 1
========================================================= */

function getVisibleCards() {
  if (typeof window === "undefined") {
    return 3;
  }

  if (window.innerWidth >= 1024) {
    return 3;
  }

  if (window.innerWidth >= 640) {
    return 2;
  }

  return 1;
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TreatmentJourney() {
  const total = journeySteps.length;

  const [visibleCards, setVisibleCards] =
    useState(getVisibleCards);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  const [animationKey, setAnimationKey] =
    useState(0);

  /* =======================================================
     RESPONSIVE CARD COUNT
  ======================================================= */

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(
        getVisibleCards()
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =======================================================
     NEXT SLIDE

     01 → 02 → 03 → ... → 07 → 01 → 02...
  ======================================================= */

  const nextSlide = useCallback(() => {
    setCurrentIndex((previous) => {
      return (
        previous + 1
      ) % total;
    });

    setAnimationKey(
      (previous) => previous + 1
    );
  }, [total]);

  /* =======================================================
     PREVIOUS SLIDE

     01 ← 07 ← 06 ...
  ======================================================= */

  const previousSlide =
    useCallback(() => {
      setCurrentIndex((previous) => {
        return (
          previous - 1 + total
        ) % total;
      });

      setAnimationKey(
        (previous) => previous + 1
      );
    }, [total]);

  /* =======================================================
     AUTO PLAY
  ======================================================= */

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [
    isPaused,
    nextSlide,
  ]);

  /* =======================================================
     VISIBLE CARDS

     Example Desktop:

     01 02 03
     02 03 04
     03 04 05
     ...
     06 07 01
     07 01 02
     01 02 03

     No empty slide / no blank gap.
  ======================================================= */

  const visibleSteps =
    Array.from(
      {
        length: visibleCards,
      },
      (_, offset) => {
        return journeySteps[
          (
            currentIndex +
            offset
          ) %
            total
        ];
      }
    );

  /* =======================================================
     ACTIVE DOT
  ======================================================= */

  const activeIndex =
    currentIndex % total;

  /* =======================================================
     DOT CLICK
  ======================================================= */

  const goToSlide = (index) => {
    setCurrentIndex(index);

    setAnimationKey(
      (previous) => previous + 1
    );
  };

  return (
    <section
      className="
        overflow-hidden
        bg-[#FAF8F2]
        py-16
        md:py-20
        lg:py-24
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
        {/* =========================================
            SECTION HEADING
        ========================================== */}

        <div
          className="
            mx-auto
            max-w-[800px]
            text-center
          "
        >
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#C8942E]
              sm:text-[12px]
            "
          >
            How It Works
          </p>

          <h2
            className="
              mt-4
              text-[29px]
              font-semibold
              leading-tight
              tracking-[-0.02em]
              text-[#064B50]
              sm:text-[35px]
              lg:text-[40px]
            "
          >
            Your Treatment Journey
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[720px]
              text-[16px]
              leading-7
              text-[#222323]
              sm:text-[15px]
            "
          >
            Your health journey, our commitment.
            Coordinated support at every important
            stage of your treatment in India.
          </p>
        </div>

        {/* =========================================
            SLIDER AREA
        ========================================== */}

        <div
          className="
            relative
            mt-10
            sm:mt-12
            lg:mt-14
          "
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
        >
          {/* =====================================
              CARDS VIEWPORT
          ====================================== */}

          <div
            className="
              overflow-hidden
              px-1
              py-5
              sm:px-2
              lg:px-3
            "
          >
            <div
              key={animationKey}
              className={`
                grid
                items-stretch
                gap-4
                sm:gap-5
                lg:gap-6

                ${
                  visibleCards === 1
                    ? "grid-cols-1"
                    : visibleCards === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }
              `}
              style={{
                animation:
                  "journeyCardFade 0.5s ease-out",
              }}
            >
              {visibleSteps.map(
                (
                  step,
                  index
                ) => (
                  <JourneyCard
                    key={`${step.number}-${index}`}
                    step={step}
                  />
                )
              )}
            </div>
          </div>

          {/* =====================================
              LEFT ARROW
          ====================================== */}

          <button
            type="button"
            onClick={
              previousSlide
            }
            aria-label="Previous treatment step"
            className="
              absolute
              left-0
              top-1/2
              z-20

              flex
              h-11
              w-11

              -translate-x-[15%]
              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              border
              border-[#d5e5e3]

              bg-white

              text-[#064B50]

              shadow-[0_8px_24px_rgba(6,75,80,0.13)]

              transition-all
              duration-300

              hover:border-[#C8942E]
              hover:bg-[#064B50]
              hover:text-white

              sm:h-12
              sm:w-12
              sm:-translate-x-[35%]

              lg:-translate-x-[45%]
            "
          >
            <ChevronLeft
              size={21}
              strokeWidth={2}
            />
          </button>

          {/* =====================================
              RIGHT ARROW
          ====================================== */}

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next treatment step"
            className="
              absolute
              right-0
              top-1/2
              z-20

              flex
              h-11
              w-11

              translate-x-[15%]
              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              border
              border-[#064B50]

              bg-[#064B50]

              text-white

              shadow-[0_8px_24px_rgba(6,75,80,0.16)]

              transition-all
              duration-300

              hover:border-[#C8942E]
              hover:bg-[#C8942E]

              sm:h-12
              sm:w-12
              sm:translate-x-[35%]

              lg:translate-x-[45%]
            "
          >
            <ChevronRight
              size={21}
              strokeWidth={2}
            />
          </button>
        </div>

        {/* =========================================
            SLIDER DOTS
        ========================================== */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
          "
        >
          {journeySteps.map(
            (
              step,
              index
            ) => (
              <button
                key={
                  step.number
                }
                type="button"
                onClick={() =>
                  goToSlide(
                    index
                  )
                }
                aria-label={`Go to treatment step ${
                  index + 1
                }`}
                className={`
                  h-[7px]
                  rounded-full

                  transition-all
                  duration-300

                  ${
                    activeIndex ===
                    index
                      ? "w-7 bg-[#C8942E]"
                      : "w-[7px] bg-[#bfd5d3] hover:bg-[#064B50]"
                  }
                `}
              />
            )
          )}
        </div>

        {/* =========================================
            IMPORTANT INFORMATION
        ========================================== */}

        <div
          className="
            mx-auto
            mt-10
            max-w-[1050px]

            overflow-hidden

            rounded-2xl

            border
            border-[#C8942E]/25

            bg-white

            shadow-[0_8px_28px_rgba(6,75,80,0.07)]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4

              px-5
              py-5

              sm:flex-row
              sm:items-center
              sm:px-7
              sm:py-6
            "
          >
            {/* ICON */}

            <div
              className="
                flex
                h-12
                w-12
                shrink-0

                items-center
                justify-center

                rounded-xl

                bg-[#064B50]

                text-[#E6B956]

                shadow-[0_7px_18px_rgba(6,75,80,0.15)]
              "
            >
              <Info
                size={22}
                strokeWidth={2}
              />
            </div>

            {/* CONTENT */}

            <div
              className="
                min-w-0
                flex-1
              "
            >
              <h4
                className="
                  text-[14px]
                  font-semibold
                  text-[#064B50]

                  sm:text-[15px]
                "
              >
                Important Travel
                Information
              </h4>

              <p
                className="
                  mt-1.5

                  text-[15px]
                  leading-6
                  text-[#2f3030]

                  sm:text-[13px]
                "
              >
                Our team supports
                international patients
                with treatment
                coordination, medical
                visa guidance, airport
                assistance, local
                travel, hospital
                coordination and
                recovery support.
                Flight fares are not
                included in the care
                package.
              </p>
            </div>

            {/* BADGE */}

            <div
              className="
                hidden
                shrink-0

                rounded-full

                border
                border-[#C8942E]/20

                bg-[#FAF8F2]

                px-4
                py-2

                text-[10px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-[#C8942E]

                md:block
              "
            >
              International Patients
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          LOCAL ANIMATION
      ========================================== */}

      <style>
        {`
          @keyframes journeyCardFade {
            from {
              opacity: 0;
              transform: translateX(16px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .journey-motion {
              animation: none !important;
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}

/* =========================================================
   REUSABLE JOURNEY CARD
========================================================= */

function JourneyCard({
  step,
}) {
  const Icon = step.icon;

  return (
    <article
      className="
        group

        flex
        h-full
        min-h-[300px]
        flex-col

        rounded-[20px]

        border
        border-[#dce8e6]

        bg-white

        p-6

        shadow-[0_8px_26px_rgba(6,75,80,0.055)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#C8942E]/55

        hover:shadow-[0_15px_36px_rgba(6,75,80,0.10)]

        sm:min-h-[315px]
        sm:p-7

        lg:min-h-[325px]
      "
    >
      {/* =====================================
          ICON + NUMBER
      ====================================== */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >
        {/* ICON */}

        <div
          className="
            flex
            h-12
            w-12

            items-center
            justify-center

            rounded-xl

            bg-[#edf6f5]

            text-[#C8942E]

            transition-all
            duration-300

            group-hover:bg-[#064B50]
            group-hover:text-white
          "
        >
          <Icon
            size={23}
            strokeWidth={1.7}
          />
        </div>

        {/* NUMBER */}

        <div
          className="
            flex
            h-10
            min-w-10

            items-center
            justify-center

            rounded-full

            border
            border-[#C8942E]/15

            bg-[#FAF8F2]

            px-3

            text-[12px]
            font-semibold

            text-[#C8942E]
          "
        >
          {step.number}
        </div>
      </div>

      {/* =====================================
          CARD CONTENT
      ====================================== */}

      <div className="mt-7">
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#C8942E]
          "
        >
          Step {step.number}
        </p>

        <h3
          className="
            mt-2.5

            text-[18px]
            font-semibold
            leading-[1.45]

            text-[#064B50]

            sm:text-[19px]
          "
        >
          {step.title}
        </h3>

        <p
          className="
            mt-3

            text-[16px]
            leading-6

            text-[#383a3a]

            sm:text-[14px]
          "
        >
          {step.text}
        </p>
      </div>

      {/* =====================================
          CARD FOOTER
      ====================================== */}

      <div
        className="
          mt-auto
          pt-7
        "
      >
        <div
          className="
            h-px
            w-full
            bg-[#e7efee]
          "
        />

        <div
          className="
            mt-4
            flex
            items-center
            gap-2
          "
        >
          <span
            className="
              flex
              h-6
              w-6

              items-center
              justify-center

              rounded-full

              bg-[#edf6f5]

              text-[10px]
              font-semibold
              text-[#064B50]
            "
          >
            {step.number}
          </span>

          <span
            className="
              text-[15px]
              font-medium
              text-[#212222]
            "
          >
            Coordinated by Akeso
          </span>
        </div>
      </div>
    </article>
  );
}