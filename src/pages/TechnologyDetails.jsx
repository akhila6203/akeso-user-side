import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Cpu,
  HeartPulse,
  Bone,
  Brain,
  ShieldPlus,
  Stethoscope,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

import {
  getTechnologyBySlug,
} from "../data/technologyData";


/* =========================================
   IMAGE WITH FALLBACK
========================================= */

function TechnologyImage({
  src,
  alt,
  className = "",
}) {
  const [failed, setFailed] =
    useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (!src || failed) {
    return (
      <div
        className={`
          flex
          min-h-[250px]
          w-full
          items-center
          justify-center
          bg-[#EEF6F5]
          px-6
          ${className}
        `}
      >
        <div className="text-center">
          <Cpu
            size={42}
            strokeWidth={1.4}
            className="
              mx-auto
              text-[#C8942E]
            "
          />

          <p
            className="
              mt-4
              text-[14px]
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
   SECTION HEADING
========================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}) {
  return (
    <div
      className="
        mx-auto
        max-w-[820px]
        text-center
      "
    >
      {eyebrow && (
        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#C8942E]
          "
        >
          {eyebrow}
        </p>
      )}

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
        {title}
      </h2>

      {description && (
        <p
          className="
            mx-auto
            mt-4
            max-w-[740px]
            text-[14px]
            leading-7
            text-[#080808]

            sm:text-[15px]
            sm:leading-8
          "
        >
          {description}
        </p>
      )}

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
  );
}


/* =========================================
   POINT LIST
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
        (point, index) => (
          <div
            key={`${point}-${index}`}
            className="
              flex
              items-start
              gap-3
            "
          >
            <CheckCircle2
              size={17}
              strokeWidth={1.8}
              className="
                mt-1
                shrink-0
                text-[#C8942E]
              "
            />

            <p
              className="
                text-[15px]
                leading-6
                text-[#2f2f2f]

                sm:text-[16px]
                sm:leading-7
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
   REUSABLE CLICK TABS

   Mobile = horizontal scroll
   Tablet/Desktop = centered buttons
========================================= */

function TechnologyTabs({
  items = [],
}) {
  const [active, setActive] =
    useState(0);

  useEffect(() => {
    setActive(0);
  }, [items]);

  if (!items.length) {
    return null;
  }

  const current =
    items[active] ||
    items[0];

  return (
    <>
      {/* TAB BUTTONS */}

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
        {items.map(
          (item, index) => {
            const selected =
              active === index;

            return (
              <button
                key={`${item.label}-${index}`}
                type="button"
                onClick={() =>
                  setActive(index)
                }
                className={`
                  inline-flex
                  min-h-[46px]
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

                  sm:min-h-[48px]
                  sm:px-5
                  sm:text-[13px]

                  lg:px-6
                  lg:text-[14px]

                  ${
                    selected
                      ? `
                        border-[#064B50]
                        bg-[#064B50]
                        text-white
                        shadow-[0_8px_22px_rgba(6,75,80,0.14)]
                      `
                      : `
                        border-[#DCE8E7]
                        bg-white
                        text-[#536466]
                        hover:border-[#C8942E]
                        hover:text-[#064B50]
                      `
                  }
                `}
              >
                {item.label}
              </button>
            );
          }
        )}
      </div>


      {/* ACTIVE CONTENT */}

      <div
        className="
          mx-auto
          mt-8
          grid
          max-w-[1120px]
          gap-8

          md:grid-cols-2
          md:items-center
          md:gap-10

          lg:mt-10
          lg:gap-14
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
            {current.label}
          </p>

          <h3
            className="
              mt-2
              text-[23px]
              font-semibold
              leading-tight
              text-[#064B50]

              sm:text-[27px]
            "
          >
            {current.title}
          </h3>

          <p
            className="
              mt-4
              text-[16px]
              leading-7
              text-[#040404]

              sm:text-[17px]
              sm:leading-8
            "
          >
            {current.description}
          </p>

          <PointList
            points={
              current.points
            }
          />
        </div>


        {/* IMAGE */}

        <div
          className="
            overflow-hidden
            rounded-[20px]
            border
            border-[#DCECEB]
            bg-[#EEF6F5]
          "
        >
          <TechnologyImage
            src={current.image}
            alt={current.title}
            className="
              h-[250px]

              sm:h-[300px]
              md:h-[330px]
              lg:h-[360px]
            "
          />
        </div>
      </div>
    </>
  );
}


/* =========================================
   DEPARTMENT ICON
========================================= */

function DepartmentIcon({
  type,
}) {
  const map = {
    heart: HeartPulse,
    bone: Bone,
    brain: Brain,
    shield: ShieldPlus,
    medical: Stethoscope,
  };

  const Icon =
    map[type] ||
    Stethoscope;

  return (
    <Icon
      size={24}
      strokeWidth={1.7}
    />
  );
}


/* =========================================
   PAGE
========================================= */

export default function TechnologyDetails() {
  const { slug } =
    useParams();

  const technology =
    getTechnologyBySlug(
      slug
    );


  if (!technology) {
    return (
      <Navigate
        to="/technologies"
        replace
      />
    );
  }


  return (
    <main className="bg-white">
      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <Breadcrumb
        items={[
          {
            label:
              "Health Library",
            to:
              "/health-library",
          },
          {
            label:
              "Technologies",
            to:
              "/technologies",
          },
          {
            label:
              technology.name,
          },
        ]}
        title={technology.name}
        description={
          technology.description
        }
      />


      {/* =====================================
          WHAT IS TECHNOLOGY
      ===================================== */}

      <section
        className="
          border-b
          border-[#E4ECEB]
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
          <SectionHeading
            eyebrow="Technology Overview"
            title={
              technology.about
                .title
            }
          />


          <div
            className="
              mt-9
              grid
              gap-8

              md:grid-cols-2
              md:items-center
              md:gap-10

              lg:mt-11
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
              "
            >
              <TechnologyImage
                src={
                  technology.about
                    .image
                }
                alt={
                  technology.name
                }
                className="
                  h-[260px]
                  sm:h-[330px]
                  md:h-[360px]
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
                About the
                Technology
              </p>

              <h3
                className="
                  mt-3
                  text-[25px]
                  font-semibold
                  leading-tight
                  text-[#064B50]

                  sm:text-[29px]
                "
              >
                {technology.name}
              </h3>

              <p
                className="
                  mt-5
                  text-[15px]
                  leading-7
                  text-[#0f0f0f]

                  sm:text-[16px]
                  sm:leading-8
                "
              >
                {
                  technology.about
                    .description
                }
              </p>


              <div
                className="
                  mt-6
                  rounded-[14px]
                  border
                  border-[#DCECEB]
                  bg-[#F7FBFA]
                  p-4
                "
              >
                <div
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  <Cpu
                    size={20}
                    className="
                      mt-0.5
                      shrink-0
                      text-[#C8942E]
                    "
                  />

                  <p
                    className="
                      text-[14px]
                      leading-6
                      text-[#1b1c1c]

                      sm:text-[15px]
                    "
                  >
                    Availability and
                    suitability depend
                    on the hospital,
                    clinical
                    indication and
                    specialist
                    evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================
          HOW DOES IT HELP?
      ===================================== */}

      <section
        className="
          border-b
          border-[#E4ECEB]
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
          <SectionHeading
            eyebrow="Clinical Support"
            title={
              technology.help
                .title
            }
            description={
              technology.help
                .description
            }
          />

          <TechnologyTabs
            items={
              technology.help
                .tabs
            }
          />
        </div>
      </section>


      {/* =====================================
          HOW IS IT DONE?
      ===================================== */}

      <section
        className="
          border-b
          border-[#E4ECEB]
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
          <SectionHeading
            eyebrow="Procedure"
            title={
              technology
                .procedure
                .title
            }
            description={
              technology
                .procedure
                .description
            }
          />

          <TechnologyTabs
            items={
              technology
                .procedure
                .tabs
            }
          />
        </div>
      </section>


      {/* =====================================
          BENEFITS & RISKS
      ===================================== */}

      <section
        className="
          border-b
          border-[#E4ECEB]
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
          <SectionHeading
            eyebrow="Benefits & Safety"
            title={
              technology
                .benefitsRisks
                .title
            }
            description={
              technology
                .benefitsRisks
                .description
            }
          />

          <TechnologyTabs
            items={
              technology
                .benefitsRisks
                .tabs
            }
          />
        </div>
      </section>


      {/* =====================================
          WHAT MAKES IT UNIQUE?
      ===================================== */}

      <section
        className="
          border-b
          border-[#E4ECEB]
          bg-white
          py-14

          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            gap-8
            px-5

            sm:px-7

            md:grid-cols-2
            md:items-center
            md:gap-10

            lg:gap-14
            lg:px-10
          "
        >
          {/* IMAGE LEFT */}

          <div
            className="
              overflow-hidden
              rounded-[22px]
              border
              border-[#DCECEB]
              bg-[#EEF6F5]
            "
          >
            <TechnologyImage
              src={
                technology.unique
                  .image
              }
              alt={
                technology.unique
                  .title
              }
              className="
                h-[280px]
                sm:h-[340px]
                lg:h-[400px]
              "
            />
          </div>


          {/* CONTENT RIGHT */}

          <div>
            <p
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C8942E]
              "
            >
              {
                technology.unique
                  .eyebrow
              }
            </p>

            <h2
              className="
                mt-3
                text-[27px]
                font-semibold
                leading-tight
                tracking-[-0.02em]
                text-[#064B50]

                sm:text-[31px]
                lg:text-[35px]
              "
            >
              {
                technology.unique
                  .title
              }
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                leading-7
                text-[#1c1c1c]

                sm:text-[16px]
                sm:leading-8
              "
            >
              {
                technology.unique
                  .description
              }
            </p>

            <PointList
              points={
                technology.unique
                  .points
              }
            />
          </div>
        </div>
      </section>


      {/* =====================================
          DEPARTMENTS
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
          <SectionHeading
            eyebrow="Specialised Care"
            title="Get Treated In Our Specialised Institutes & Departments"
            description={`Explore specialist departments related to ${technology.name}.`}
          />


          <div
            className="
              mt-10
              grid
              gap-5

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {technology.departments?.map(
              (department) => (
                <Link
                  key={
                    department.name
                  }
                  to={
                    department.to ||
                    "/specialities"
                  }
                  className="
                    group
                    rounded-[18px]
                    border
                    border-[#DCE8E7]
                    bg-white
                    p-6
                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#C8942E]
                    hover:shadow-[0_14px_35px_rgba(6,75,80,0.09)]
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#EEF6F5]
                      text-[#C8942E]
                    "
                  >
                    <DepartmentIcon
                      type={
                        department.icon
                      }
                    />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-[18px]
                      font-semibold
                      leading-snug
                      text-[#064B50]
                    "
                  >
                    {
                      department.name
                    }
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[15px]
                      leading-6
                      text-[#272728]
                    "
                  >
                    {
                      department.description
                    }
                  </p>

                  <div
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-1
                      text-[13px]
                      font-semibold
                      text-[#064B50]
                      transition
                      group-hover:text-[#C8942E]
                    "
                  >
                    Know More

                    <ChevronRight
                      size={16}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </div>
                </Link>
              )
            )}
          </div>


          {/* BACK BUTTON */}

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
              <ArrowLeft
                size={17}
              />

              All Technologies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}