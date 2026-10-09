import {
  Activity,
  AlertCircle,
  ChevronRight,
  HeartPulse,
  ImageOff,
  ShieldCheck,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  Navigate,
  useParams,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

import {
  getAilmentDetails,
} from "../data/ailmentDetails";


/* =========================================
   TABS
========================================= */

const tabs = [
  {
    id:
      "symptoms",

    label:
      "Symptoms",

    icon:
      Activity,
  },

  {
    id:
      "causes",

    label:
      "Causes",

    icon:
      HeartPulse,
  },

  {
    id:
      "risks",

    label:
      "Risks",

    icon:
      AlertCircle,
  },

  {
    id:
      "prevention",

    label:
      "Prevention",

    icon:
      ShieldCheck,
  },
];


/* =========================================
   IMAGE COMPONENT
========================================= */

function AilmentImage({
  src,
  alt,
  className = "",
}) {
  const [
    failed,
    setFailed,
  ] = useState(false);


  useEffect(() => {
    setFailed(false);
  }, [src]);


  if (!src || failed) {
    return (
      <div
        className={`
          flex
          w-full
          items-center
          justify-center
          bg-[#EEF6F5]
          ${className}
        `}
      >
        <div
          className="
            px-6
            text-center
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
              rounded-2xl
              bg-white
              text-[#C8942E]
            "
          >
            <ImageOff
              size={25}
            />
          </div>

          <p
            className="
              mt-3
              text-[13px]
              font-semibold
              text-[#064B50]
            "
          >
            {alt}
          </p>
        </div>
      </div>
    );
  }


  return (
    <img
      src={src}
      alt={alt}
      onError={() =>
        setFailed(true)
      }
      className={`
        block
        w-full
        object-cover
        ${className}
      `}
    />
  );
}


/* =========================================
   POINTS
========================================= */

function PointList({
  points = [],
}) {
  if (!points.length) {
    return null;
  }


  return (
    <div
      className="
        mt-6
        space-y-3
      "
    >
      {points.map(
        (
          point,
          index
        ) => (
          <div
            key={`${point}-${index}`}
            className="
              flex
              items-start
              gap-3
            "
          >
            <div
              className="
                mt-[9px]
                h-[7px]
                w-[7px]
                shrink-0
                rounded-full
                bg-[#C8942E]
              "
            />

            <p
              className="
                text-[14px]
                leading-7
                text-[#5F7072]

                sm:text-[15px]
              "
            >
              {point}
            </p>
          </div>
        )
      )}
    </div>
  );
}


/* =========================================
   PAGE
========================================= */

export default function AilmentDetails() {
  const {
    slug,
  } = useParams();


  const ailment =
    getAilmentDetails(
      slug
    );


  const [
    activeTab,
    setActiveTab,
  ] = useState(
    "symptoms"
  );


  useEffect(() => {
    setActiveTab(
      "symptoms"
    );

    window.scrollTo({
      top: 0,
      behavior:
        "smooth",
    });
  }, [slug]);


  if (!ailment) {
    return (
      <Navigate
        to="/ailments"
        replace
      />
    );
  }


  const activeSection =
    ailment.sections?.[
      activeTab
    ];


  if (!activeSection) {
    return null;
  }


  return (
    <main className="bg-white">

      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <Breadcrumb
        title={
          ailment.title
        }
        description={`Learn about ${ailment.title}, including general information, symptoms, possible causes, risk factors and prevention.`}
        items={[
          {
            label:
              "Health Library",

            to:
              "/health-library",
          },

          {
            label:
              "Ailments",

            to:
              "/ailments",
          },

          {
            label:
              ailment.title,
          },
        ]}
      />


      {/* =====================================
          WHAT IS AILMENT
      ===================================== */}

      <section
        className="
          border-b
          border-[#E3ECEB]
          bg-white
          py-14

          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1200px]
            px-5

            sm:px-7
            lg:px-10
          "
        >
          {/* HEADING */}

          <div
            className="
              mx-auto
              max-w-[850px]
              text-center
            "
          >
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C8942E]

                sm:text-[12px]
              "
            >
              About The Ailment
            </p>

            <h1
              className="
                mt-3
                text-[28px]
                font-semibold
                leading-tight
                tracking-[-0.02em]
                text-[#064B50]

                sm:text-[34px]
                lg:text-[40px]
              "
            >
              What is{" "}
              {ailment.title}?
            </h1>

            <div
              className="
                mx-auto
                mt-5
                h-[2px]
                w-12
                rounded-full
                bg-[#C8942E]
              "
            />
          </div>


          {/* IMAGE + CONTENT */}

          <div
            className="
              mt-10
              grid
              gap-8

              md:grid-cols-[0.9fr_1.1fr]
              md:items-center
              md:gap-10

              lg:mt-12
              lg:gap-14
            "
          >
            {/* LEFT IMAGE */}

            <div
              className="
                overflow-hidden
                rounded-[22px]
                border
                border-[#DCECEB]
                bg-[#EEF6F5]
                shadow-[0_12px_35px_rgba(6,75,80,0.06)]
              "
            >
              <AilmentImage
                src={
                  ailment.image
                }
                alt={
                  ailment.title
                }
                className="
                  h-[260px]

                  sm:h-[330px]
                  md:h-[350px]
                  lg:h-[390px]
                "
              />
            </div>


            {/* RIGHT CONTENT */}

            <div>
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#C8942E]
                "
              >
                Condition
                Information
              </p>

              <h2
                className="
                  mt-3
                  text-[24px]
                  font-semibold
                  leading-tight
                  text-[#064B50]

                  sm:text-[28px]
                  lg:text-[31px]
                "
              >
                Understanding{" "}
                {ailment.title}
              </h2>

              <p
                className="
                  mt-5
                  text-[15px]
                  leading-7
                  text-[#2e2f2f]

                  sm:text-[15px]
                  sm:leading-8
                "
              >
                {ailment.about}
              </p>


              {/* SPECIALITY */}

              {ailment.specialityName && (
                <div
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#EEF6F5]
                    px-4
                    py-2
                    text-[12px]
                    font-semibold
                    text-[#064B50]
                  "
                >
                  <HeartPulse
                    size={16}
                    className="
                      text-[#C8942E]
                    "
                  />

                  {
                    ailment.specialityName
                  }
                </div>
              )}


              {/* NOTICE */}

              <div
                className="
                  mt-6
                  rounded-[15px]
                  border
                  border-[#DCECEB]
                  bg-[#F8FBFA]
                  p-4

                  sm:p-5
                "
              >
                <p
                  className="
                    text-[15px]
                    leading-6
                    text-[#262727]

                    sm:text-[13px]
                  "
                >
                  Information is
                  intended for general
                  health education.
                  Symptoms and treatment
                  requirements can vary
                  between patients, so
                  individual medical
                  assessment may be
                  required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================
          SYMPTOMS / CAUSES / RISKS /
          PREVENTION
      ===================================== */}

      <section
        className="
          bg-[#F8FBFA]
          py-14

          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1200px]
            px-5

            sm:px-7
            lg:px-10
          "
        >
          {/* SECTION HEADING */}

          <div
            className="
              mx-auto
              max-w-[780px]
              text-center
            "
          >
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C8942E]
              "
            >
              Health Information
            </p>

            <h2
              className="
                mt-3
                text-[27px]
                font-semibold
                leading-tight
                tracking-[-0.02em]
                text-[#064B50]

                sm:text-[32px]
                lg:text-[36px]
              "
            >
              {ailment.title}
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[680px]
                text-[16px]
                leading-7
                text-[#353636]

                sm:text-[15px]
              "
            >
              Select a section to
              explore symptoms,
              possible causes, risk
              factors and prevention
              information.
            </p>
          </div>


          {/* =================================
              BUTTON TABS

              NOT LEFT-SIDE VERTICAL TABS.
              Mobile also side-by-side.
          ================================= */}

          <div
            className="
              mx-auto
              mt-9
              flex
              max-w-max
              items-center
              gap-2
              overflow-x-auto
              pb-2

              sm:gap-3

              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {tabs.map(
              (tab) => {
                const Icon =
                  tab.icon;

                const active =
                  activeTab ===
                  tab.id;

                return (
                  <button
                    key={
                      tab.id
                    }
                    type="button"
                    onClick={() =>
                      setActiveTab(
                        tab.id
                      )
                    }
                    className={`
                      inline-flex
                      min-h-[48px]
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      px-4
                      py-2.5
                      text-[12px]
                      font-semibold
                      transition-all
                      duration-300

                      sm:min-w-[145px]
                      sm:px-5
                      sm:text-[13px]

                      lg:min-w-[170px]
                      lg:text-[14px]

                      ${
                        active
                          ? `
                            border-[#064B50]
                            bg-[#064B50]
                            text-white
                            shadow-[0_8px_24px_rgba(6,75,80,0.15)]
                          `
                          : `
                            border-[#D7E5E3]
                            bg-white
                            text-[#536466]
                            hover:border-[#C8942E]
                            hover:text-[#064B50]
                          `
                      }
                    `}
                  >
                    <Icon
                      size={17}
                      strokeWidth={
                        1.8
                      }
                      className={
                        active
                          ? "text-[#E6B956]"
                          : "text-[#C8942E]"
                      }
                    />

                    {tab.label}
                  </button>
                );
              }
            )}
          </div>


          {/* =================================
              ACTIVE TAB CONTENT
          ================================= */}

          <div
            className="
              mx-auto
              mt-8
              max-w-[1120px]

              sm:mt-10
            "
          >
            <div
              className="
                grid
                gap-8
                rounded-[22px]
                border
                border-[#DCE8E7]
                bg-white
                p-5

                sm:p-7

                md:grid-cols-[1.05fr_0.95fr]
                md:items-center
                md:gap-10

                lg:gap-14
                lg:p-9
              "
            >
              {/* CONTENT */}

              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#C8942E]
                  "
                >
                  {
                    activeSection.title
                  }
                </p>

                <h3
                  className="
                    mt-3
                    text-[24px]
                    font-semibold
                    leading-tight
                    text-[#064B50]

                    sm:text-[28px]
                    lg:text-[31px]
                  "
                >
                  {
                    activeSection.title
                  }{" "}
                  of{" "}
                  {ailment.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-[16px]
                    leading-7
                    text-[#262727]

                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  {
                    activeSection.content
                  }
                </p>

                <PointList
                  points={
                    activeSection.points
                  }
                />
              </div>


              {/* IMAGE */}

              <div
                className="
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#DCECEB]
                  bg-[#EEF6F5]
                "
              >
                <AilmentImage
                  src={
                    activeSection.image
                  }
                  alt={`${activeSection.title} - ${ailment.title}`}
                  className="
                    h-[240px]

                    sm:h-[300px]
                    md:h-[330px]
                    lg:h-[360px]
                  "
                />
              </div>
            </div>
          </div>


          {/* =================================
              BACK
          ================================= */}

          <div
            className="
              mt-10
              text-center
            "
          >
            <a
              href="/ailments"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-[#064B50]
                bg-white
                px-6
                py-3
                text-[13px]
                font-semibold
                text-[#064B50]
                transition

                hover:bg-[#064B50]
                hover:text-white
              "
            >
              View All Ailments

              <ChevronRight
                size={16}
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}