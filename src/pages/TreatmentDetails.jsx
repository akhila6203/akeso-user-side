import {
  useMemo,
  useState,
} from "react";

import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Info,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

import TreatmentInfoTabs from "../components/medical/TreatmentInfoTabs";

import {
  getTreatmentBySlug,
} from "../utils/medicalDirectory";

import {
  getTreatmentDetail,
} from "../data/treatmentDetails";


/* =========================================
   IMAGE WITH FALLBACK
========================================= */

function TreatmentImage({
  src,
  alt,
  compact = false,
}) {
  const [failed, setFailed] =
    useState(false);

  if (!src || failed) {
    return (
      <div
        className={`
          flex
          w-full
          items-center
          justify-center
          bg-[#EEF6F5]
          px-6
          text-[#064B50]

          ${
            compact
              ? `
                min-h-[240px]
                sm:min-h-[280px]
                md:min-h-[310px]
              `
              : `
                min-h-[280px]
                sm:min-h-[340px]
                lg:min-h-[390px]
              `
          }
        `}
      >
        <div className="text-center">
          <Stethoscope
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
      className={
        compact
          ? `
            h-[240px]
            w-full
            object-cover

            sm:h-[280px]
            md:h-[310px]
          `
          : `
            h-[290px]
            w-full
            object-cover

            sm:h-[350px]
            lg:h-[410px]
          `
      }
    />
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
        mt-7
        space-y-4
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
            <span
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
                text-[15px]
                leading-6
                text-[#070707]
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
   PAGE
========================================= */

export default function TreatmentDetails() {
  const { slug } =
    useParams();


  const treatment =
    useMemo(
      () =>
        getTreatmentBySlug(
          slug
        ),
      [slug]
    );


  const data =
    useMemo(
      () =>
        getTreatmentDetail(
          treatment
        ),
      [treatment]
    );


  const [
    procedureTab,
    setProcedureTab,
  ] = useState(0);


  const [
    considerationTab,
    setConsiderationTab,
  ] = useState(0);


  if (!data) {
    return (
      <main className="bg-white">
        <Breadcrumb
          title="Treatment Not Found"
          items={[
            {
              label:
                "Treatments",
              to: "/treatments",
            },
            {
              label:
                "Not Found",
            },
          ]}
        />

        <section
          className="
            px-5
            py-20
            text-center
          "
        >
          <h2
            className="
              text-[28px]
              font-semibold
              text-[#064B50]
            "
          >
            Treatment not found
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[600px]
              text-[16px]
              leading-7
              text-[#0a0a0a]
            "
          >
            The requested treatment
            information is not
            available.
          </p>

          <Link
            to="/treatments"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#064B50]
              px-6
              py-3
              text-[14px]
              font-semibold
              text-white
              transition
              hover:bg-[#043F43]
            "
          >
            <ArrowLeft
              size={17}
            />

            Back to Treatments
          </Link>
        </section>
      </main>
    );
  }


  /* =====================================
     PROCEDURE TABS
  ===================================== */

  const procedureItems = [
    {
      key: "preparation",
      label: "Preparation",
      icon: ClipboardCheck,
      ...data.preparation,
    },

    {
      key: "procedure",
      label:
        "Treatment Procedure",
      icon: Stethoscope,
      ...data.procedure,
    },

    {
      key: "postTreatment",
      label:
        "Post Treatment",
      icon: FileCheck2,
      ...data.postTreatment,
    },
  ];


  /* =====================================
     BENEFIT TABS
  ===================================== */

  const considerationItems = [
    {
      key: "benefits",
      label: "Benefits",
      icon: CheckCircle2,
      ...data.benefits,
    },

    {
      key: "risks",
      label: "Risks",
      icon: AlertTriangle,
      ...data.risks,
    },

    {
      key: "limitations",
      label: "Limitations",
      icon: Info,
      ...data.limitations,
    },
  ];


  const activeProcedure =
    procedureItems[
      procedureTab
    ];


  const activeConsideration =
    considerationItems[
      considerationTab
    ];


  const ConsiderationIcon =
    activeConsideration.icon;


  return (
    <main className="bg-white">
      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <Breadcrumb
        title={data.name}
        description="Explore treatment information, preparation, procedure, recovery and important considerations."
        items={[
          {
            label:
              "Treatments",
            to: "/treatments",
          },
          {
            label:
              data.name,
          },
        ]}
      />


      {/* =====================================
          ABOUT
      ===================================== */}

     {/* =====================================
    ABOUT THE TREATMENT
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
    {/* =========================
        CENTER HEADING
    ========================== */}

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
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#C8942E]

          sm:text-[12px]
        "
      >
        About the Treatment
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
          md:text-[35px]
          lg:text-[38px]
        "
      >
        {data.name}
      </h2>

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


    {/* =========================
        IMAGE + CONTENT
    ========================== */}

    <div
      className="
        mx-auto
        mt-9
        grid
        max-w-[1100px]
        gap-7

        md:grid-cols-[0.9fr_1.1fr]
        md:items-center
        md:gap-9

        lg:mt-11
        lg:grid-cols-[0.95fr_1.05fr]
        lg:gap-12
      "
    >
      {/* LEFT IMAGE */}

      <div
        className="
          overflow-hidden
          rounded-[20px]
          border
          border-[#DCECEB]
          bg-[#EEF6F5]
        "
      >
        <TreatmentImage
          src={
            data.aboutImage ||
            data.image ||
            data.preparation?.image
          }
          alt={data.name}
          compact
        />
      </div>


      {/* RIGHT CONTENT */}

      <div>
        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.17em]
            text-[#C8942E]
          "
        >
          Treatment Overview
        </p>

        <h3
          className="
            mt-2
            text-[21px]
            font-semibold
            leading-[1.35]
            text-[#064B50]

            sm:text-[23px]
            lg:text-[25px]
          "
        >
          About {data.name}
        </h3>


        {/* SPECIALITY */}

        {data.specialityName && (
          <div
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#EEF6F5]
              px-3.5
              py-2
              text-[11px]
              font-semibold
              text-[#064B50]

              sm:text-[12px]
            "
          >
            <Stethoscope
              size={15}
              strokeWidth={1.8}
              className="
                text-[#C8942E]
              "
            />

            {data.specialityName}
          </div>
        )}


        {/* DESCRIPTION */}

        <p
          className="
            mt-5
            text-[16px]
            leading-7
            text-[#151515]

            sm:text-[17px]
            sm:leading-8
          "
        >
          {data.about}
        </p>


        {/* INFORMATION NOTE */}

        <div
          className="
            mt-6
            flex
            items-start
            gap-3
            rounded-[14px]
            border
            border-[#DCECEB]
            bg-[#F7FBFA]
            p-4

            sm:p-5
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-[10px]
              bg-white
              text-[#C8942E]
            "
          >
            <ShieldCheck
              size={19}
              strokeWidth={1.8}
            />
          </div>

          <p
            className="
              text-[125x]
              leading-6
              text-[#090909]

              sm:text-[16px]
              sm:leading-6
            "
          >
            Treatment suitability,
            procedure choice and expected
            outcomes can vary between
            patients. Specialist medical
            evaluation is required before
            making treatment decisions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* =====================================
          HOW TREATMENT IS DONE
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
            max-w-[1350px]
            px-5
            sm:px-7
            lg:px-10
          "
        >
          <div
            className="
              mx-auto
              max-w-[820px]
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
              Treatment Journey
            </p>

            <h2
              className="
                mt-3
                text-[27px]
                font-semibold
                leading-tight
                tracking-[-0.02em]
                text-[#064B50]
                sm:text-[33px]
                lg:text-[38px]
              "
            >
              How is {data.name} Done?
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[680px]
                text-[14px]
                leading-7
                text-[#383838]
                sm:text-[15px]
              "
            >
              Explore the general
              stages of treatment.
              Individual treatment
              plans can vary according
              to clinical assessment.
            </p>
          </div>


          {/* TOP TABS */}

          <div
            className="
              mt-9
              sm:mt-10
            "
          >
            <TreatmentInfoTabs
              items={
                procedureItems
              }
              activeIndex={
                procedureTab
              }
              onChange={
                setProcedureTab
              }
            />
          </div>


          {/* ACTIVE CONTENT */}

          <div
            className="
              mx-auto
              mt-10
              grid
              max-w-[1180px]
              gap-8
              lg:grid-cols-2
              lg:items-center
              lg:gap-14
            "
          >
            {/* CONTENT */}

            <div
              className="
                order-2
                lg:order-1
              "
            >
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
                  activeProcedure.label
                }
              </p>

              <h3
                className="
                  mt-3
                  text-[24px]
                  font-semibold
                  leading-tight
                  text-[#064B50]
                  sm:text-[29px]
                "
              >
                {
                  activeProcedure.title
                }
              </h3>

              <p
                className="
                  mt-5
                  text-[16px]
                  leading-7
                  text-[#0f1010]
                  sm:text-[17px]
                  sm:leading-8
                "
              >
                {
                  activeProcedure.description
                }
              </p>

              <PointList
                points={
                  activeProcedure.points
                }
              />

              <div
                className="
                  mt-7
                  rounded-[14px]
                  border
                  border-[#DCECEB]
                  bg-white
                  px-4
                  py-3
                "
              >
                <p
                  className="
                    text-[15px]
                    leading-6
                    text-[#2c2d2d]
                  "
                >
                  The exact treatment
                  steps can vary
                  depending on diagnosis,
                  clinical condition and
                  specialist assessment.
                </p>
              </div>
            </div>


            {/* IMAGE */}

            <div
              className="
                order-1
                overflow-hidden
                rounded-[22px]
                border
                border-[#DCECEB]
                bg-[#EEF6F5]
                lg:order-2
              "
            >
              <TreatmentImage
                src={
                  activeProcedure.image
                }
                alt={
                  activeProcedure.label
                }
              />
            </div>
          </div>
        </div>
      </section>


      {/* =====================================
          BENEFITS / RISKS / LIMITATIONS
      ===================================== */}

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
            max-w-[1350px]
            px-5
            sm:px-7
            lg:px-10
          "
        >
          <div
            className="
              mx-auto
              max-w-[820px]
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
              Important Information
            </p>

            <h2
              className="
                mt-3
                text-[27px]
                font-semibold
                leading-tight
                tracking-[-0.02em]
                text-[#064B50]
                sm:text-[33px]
                lg:text-[38px]
              "
            >
              Benefits, Risks &
              Limitations
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[700px]
                text-[14px]
                leading-7
                text-[#393a3a]
                sm:text-[15px]
              "
            >
              Review potential benefits
              and important
              considerations before
              discussing treatment
              options with a specialist.
            </p>
          </div>


          {/* TOP TABS */}

          <div
            className="
              mt-9
              sm:mt-10
            "
          >
            <TreatmentInfoTabs
              items={
                considerationItems
              }
              activeIndex={
                considerationTab
              }
              onChange={
                setConsiderationTab
              }
            />
          </div>


          {/* ACTIVE CONTENT */}

          <div
            className="
              mx-auto
              mt-10
              grid
              max-w-[1180px]
              gap-8
              lg:grid-cols-2
              lg:items-center
              lg:gap-14
            "
          >
            {/* IMAGE */}

            <div
              className="
                overflow-hidden
                rounded-[22px]
                border
                border-[#DCECEB]
                bg-[#EEF6F5]
              "
            >
              <TreatmentImage
                src={
                  activeConsideration.image
                }
                alt={
                  activeConsideration.label
                }
              />
            </div>


            {/* CONTENT */}

            <div>
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#EEF6F5]
                  text-[#C8942E]
                "
              >
                <ConsiderationIcon
                  size={20}
                  strokeWidth={1.8}
                />
              </div>

              <p
                className="
                  mt-5
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#C8942E]
                "
              >
                {
                  activeConsideration.label
                }
              </p>

              <h3
                className="
                  mt-2
                  text-[24px]
                  font-semibold
                  leading-tight
                  text-[#064B50]
                  sm:text-[29px]
                "
              >
                {
                  activeConsideration.title
                }
              </h3>

              <p
                className="
                  mt-5
                  text-[15px]
                  leading-7
                  text-[#1a1a1a]
                  sm:text-[17px]
                  sm:leading-8
                "
              >
                {
                  activeConsideration.description
                }
              </p>

              <PointList
                points={
                  activeConsideration.points
                }
              />

              <div
                className="
                  mt-7
                  rounded-[14px]
                  border
                  border-[#DCECEB]
                  bg-[#FAF8F2]
                  p-4
                "
              >
                <p
                  className="
                    text-[15px]
                    leading-6
                    text-[#252525]
                  "
                >
                  Benefits, risks and
                  limitations can differ
                  between patients.
                  Discuss your individual
                  circumstances with the
                  treating specialist.
                </p>
              </div>
            </div>
          </div>


          {/* BACK BUTTON */}

          <div
            className="
              mt-12
              text-center
            "
          >
            <Link
              to="/treatments"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#064B50]
                bg-white
                px-6
                py-3.5
                text-[14px]
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

              Back to All Treatments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}