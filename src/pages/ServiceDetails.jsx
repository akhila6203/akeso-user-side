import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheck,
  ShieldCheck,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

import {
  getServiceBySlug,
} from "../data/servicesData";


export default function ServiceDetails() {
  const { slug } =
    useParams();

  const service =
    getServiceBySlug(slug);


  if (!service) {
    return (
      <main className="
        flex
        min-h-[60vh]
        items-center
        justify-center
        bg-white
        px-5
      ">
        <div className="text-center">
          <h1 className="
            text-[30px]
            font-semibold
            text-[#064B50]
          ">
            Service Not Found
          </h1>

          <Link
            to="/services"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-[#064B50]
              px-6
              py-3.5
              text-[14px]
              font-semibold
              text-white
            "
          >
            <ArrowLeft size={17} />
            View All Services
          </Link>
        </div>
      </main>
    );
  }


  const ServiceIcon =
    service.icon;


  return (
    <main className="bg-white">

      {/* ===================================================
          BREADCRUMB
      =================================================== */}

      <Breadcrumb
        title={service.name}
        description={
          service.heroDescription
        }
        items={[
          {
            label: "Services",
            to: "/services",
          },
          {
            label: service.name,
          },
        ]}
      />


      {/* ===================================================
          ABOUT + HIGHLIGHT
      =================================================== */}

      <section className="
        py-14
        sm:py-16
        lg:py-20
      ">
        <div className="
          mx-auto
          grid
          max-w-[1280px]
          overflow-hidden
          rounded-[26px]
          border
          border-[#D7E6E4]
          lg:grid-cols-2
        ">

          {/* LEFT */}

          <div className="
            bg-[#F3F8F7]
            p-6
            sm:p-9
            lg:p-12
          ">
            <p className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#C88416]
            ">
              {service.eyebrow}
            </p>

            <h2 className="
              mt-4
              text-[29px]
              font-semibold
              leading-tight
              text-[#064B50]
              sm:text-[36px]
              lg:text-[42px]
            ">
              {service.name}
            </h2>

            <h3 className="
              mt-7
              text-[20px]
              font-semibold
              text-[#064B50]
              sm:text-[22px]
            ">
              {service.aboutTitle}
            </h3>

            <p className="
              mt-4
              text-[15px]
              leading-8
              text-[#353636]
              sm:text-[16px]
            ">
              {service.about}
            </p>


            {/* BUTTONS */}

            <div className="
              mt-8
              flex
              flex-col
              gap-3
              sm:flex-row
            ">
              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#064B50]
                  px-6
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0B6268]
                "
              >
                Contact Us
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/request-estimate"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-[#C8942E]
                  bg-white
                  px-6
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-[#064B50]
                  transition
                  hover:bg-[#FAF6EC]
                "
              >
                Request an Estimate
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>


          {/* RIGHT */}

          <div className="
            relative
            flex
            min-h-[340px]
            items-center
            justify-center
            overflow-hidden
            bg-[#07575C]
            p-7
            text-white
            sm:min-h-[420px]
            sm:p-10
          ">
           
            <div className="
              relative
              max-w-[500px]
              text-center
            ">
              <div className="
                mx-auto
                flex
                h-[92px]
                w-[92px]
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-[#E3B04B]
              ">
                <ServiceIcon
                  size={38}
                  strokeWidth={1.7}
                />
              </div>

              <h3 className="
                mt-8
                text-[25px]
                font-semibold
                sm:text-[30px]
              ">
                {service.introTitle}
              </h3>

              <p className="
                mt-4
                text-[15px]
                leading-8
                text-white/85
                sm:text-[16px]
              ">
                {service.introText}
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* ===================================================
          HOW WE HELP
      =================================================== */}

      <section className="
        bg-[#F7FAF9]
        py-14
        sm:py-16
        lg:py-20
      ">
        <div className="
          mx-auto
          max-w-[1300px]
          px-5
          sm:px-7
          lg:px-10
        ">
          <SectionTitle
            eyebrow="Service Support"
            title="How We Can Help"
            description={`Explore the key support available through our ${service.name} service.`}
          />

          <FeatureGrid
            items={service.features}
          />
        </div>
      </section>


      {/* ===================================================
          LAB: WHY AKESO
      =================================================== */}

      {service.whyItems?.length > 0 && (
        <section className="
          bg-white
          py-14
          sm:py-16
          lg:py-20
        ">
          <div className="
            mx-auto
            max-w-[1350px]
            px-5
            sm:px-7
            lg:px-10
          ">
            <SectionTitle
              eyebrow="Diagnostic Coordination"
              title={
                service.whyTitle
              }
              description="A coordinated approach helps patients organise prescribed investigations as part of their overall medical journey."
            />

            <div className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            ">
              {service.whyItems.map(
                (item) => (
                  <InfoCard
                    key={item.title}
                    item={item}
                    centered
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}


      {/* ===================================================
          LAB: FREQUENTLY PRESCRIBED TESTS
      =================================================== */}

      {service.tests?.length > 0 && (
        <section className="
          bg-[#F7FAF9]
          py-14
          sm:py-16
          lg:py-20
        ">
          <div className="
            mx-auto
            max-w-[1300px]
            px-5
            sm:px-7
            lg:px-10
          ">
            <SectionTitle
              eyebrow="Laboratory Testing"
              title={
                service.testsTitle
              }
              description="Common investigations may be prescribed according to symptoms, medical history and the treating clinician's assessment."
            />

            <div className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            ">
              {service.tests.map(
                (item) => (
                  <InfoCard
                    key={item.title}
                    item={item}
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}


      {/* ===================================================
          HOMECARE / POST-OP SPECIAL SECTION
      =================================================== */}

      {service.careItems?.length > 0 && (
        <section className="
          bg-[#FAF8F2]
          py-14
          sm:py-16
          lg:py-20
        ">
          <div className="
            mx-auto
            max-w-[1350px]
            px-5
            sm:px-7
            lg:px-10
          ">
            <SectionTitle
              eyebrow={
                service.slug ===
                "post-op-care"
                  ? "Healing Beyond Surgery"
                  : "Continued Care"
              }
              title={
                service.careTitle
              }
              description={
                service.slug ===
                "post-op-care"
                  ? "Recovery support that goes beyond the procedure, helping patients transition through rehabilitation and wellbeing."
                  : "Support can be tailored around the patient's medical recommendations and recovery requirements."
              }
            />

            <div className="
              mt-10
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
            ">
              {service.careItems.map(
                (item) => (
                  <InfoCard
                    key={item.title}
                    item={item}
                    centered
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}


      {/* ===================================================
          HIGHLIGHT
      =================================================== */}

      {service.highlightTitle && (
        <section className="
          bg-[#07575C]
          py-12
          sm:py-14
        ">
          <div className="
            mx-auto
            max-w-[1050px]
            px-5
            text-center
            sm:px-7
          ">
            <ServiceIcon
              size={36}
              className="
                mx-auto
                text-[#E2AE46]
              "
            />

            <h2 className="
              mt-5
              text-[27px]
              font-semibold
              text-white
              sm:text-[34px]
            ">
              {service.highlightTitle}
            </h2>

            <p className="
              mx-auto
              mt-4
              max-w-[780px]
              text-[16px]
              leading-8
              text-white/80
              sm:text-[16px]
            ">
              {service.highlightText}
            </p>
          </div>
        </section>
      )}


      {/* ===================================================
          PROCESS
      =================================================== */}

      <section className="
        bg-white
        py-14
        sm:py-16
        lg:py-20
      ">
        <div className="
          mx-auto
          max-w-[1150px]
          px-5
          sm:px-7
          lg:px-10
        ">
          <SectionTitle
            eyebrow="Step By Step"
            title={
              service.processTitle
            }
            description="A simple coordinated approach designed to help patients understand the next stage of their care journey."
          />


          <div className="
            mt-11
            space-y-4
          ">
            {service.process.map(
              (step, index) => (
                <div
                  key={step.title}
                  className="
                    group
                    flex
                    gap-4
                    rounded-[20px]
                    border
                    border-[#D9E7E5]
                    bg-white
                    p-5
                    transition
                    hover:border-[#C8942E]/60
                    hover:shadow-[0_12px_35px_rgba(6,75,80,0.07)]
                    sm:gap-6
                    sm:p-6
                  "
                >
                  <div className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#064B50]
                    text-[13px]
                    font-bold
                    text-white
                  ">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="
                      text-[17px]
                      font-semibold
                      text-[#064B50]
                      sm:text-[18px]
                    ">
                      {step.title}
                    </h3>

                    <p className="
                      mt-2
                      text-[15px]
                      leading-7
                      text-[#404041]
                      sm:text-[15px]
                    ">
                      {step.text}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>


      {/* ===================================================
          BENEFITS
      =================================================== */}

      {service.benefits?.length > 0 && (
        <section className="
          bg-[#F3F8F7]
          py-14
          sm:py-16
          lg:py-20
        ">
          <div className="
            mx-auto
            max-w-[1150px]
            px-5
            sm:px-7
            lg:px-10
          ">
            <SectionTitle
              eyebrow="Patient Support"
              title={
                service.benefitsTitle
              }
            />

            <div className="
              mt-9
              grid
              gap-4
              md:grid-cols-2
            ">
              {service.benefits.map(
                (item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-3
                      rounded-[16px]
                      border
                      border-[#D9E7E5]
                      bg-white
                      p-5
                    "
                  >
                    <CircleCheck
                      size={20}
                      className="
                        mt-0.5
                        shrink-0
                        text-[#C8942E]
                      "
                    />

                    <p className="
                      text-[15px]
                      leading-7
                      text-[#373737]
                    ">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}


      {/* ===================================================
          MEDICAL NOTE
      =================================================== */}

      <section className="
        bg-white
        py-12
        sm:py-14
      ">
        <div className="
          mx-auto
          max-w-[1100px]
          px-5
          sm:px-7
        ">
          <div className="
            flex
            items-start
            gap-4
            rounded-[20px]
            border
            border-[#E6D7B6]
            bg-[#FAF8F2]
            p-5
            sm:p-6
          ">
            <ShieldCheck
              size={22}
              className="
                mt-0.5
                shrink-0
                text-[#C8942E]
              "
            />

            <div>
              <h3 className="
                text-[16px]
                font-semibold
                text-[#064B50]
              ">
                Important Care Information
              </h3>

              <p className="
                mt-2
                text-[15px]
                leading-7
                text-[#333435]
              ">
                {service.note}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================
          CTA
      =================================================== */}

      <section className="
        bg-[#064B50]
        py-14
        sm:py-16
      ">
        <div className="
          mx-auto
          max-w-[900px]
          px-5
          text-center
          sm:px-7
        ">
          <p className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#E2AE46]
          ">
            Akeso Global Medical Services
          </p>

          <h2 className="
            mt-3
            text-[28px]
            font-semibold
            text-white
            sm:text-[35px]
          ">
            Need Help Planning Your Care?
          </h2>

          <p className="
            mx-auto
            mt-4
            max-w-[680px]
            text-[15px]
            leading-8
            text-white/80
          ">
            Contact our team for service
            information, or request an
            estimate when you are ready
            to begin planning your
            medical journey.
          </p>


          <div className="
            mt-7
            flex
            flex-col
            justify-center
            gap-3
            sm:flex-row
          ">
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-white
                px-7
                py-3.5
                text-[14px]
                font-semibold
                text-[#064B50]
                transition
                hover:bg-[#F3F8F7]
              "
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/request-estimate"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-[#E2AE46]
                px-7
                py-3.5
                text-[14px]
                font-semibold
                text-white
                transition
                hover:bg-[#E2AE46]
                hover:text-[#064B50]
              "
            >
              Request an Estimate
              <ArrowRight size={17} />
            </Link>
          </div>


          <Link
            to="/services"
            className="
              mt-7
              inline-flex
              items-center
              gap-2
              text-[13px]
              font-semibold
              text-white/75
              transition
              hover:text-white
            "
          >
            <ArrowLeft size={16} />
            Back to All Services
          </Link>
        </div>
      </section>

    </main>
  );
}


/* =========================================================
   SECTION TITLE
========================================================= */

function SectionTitle({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="
      mx-auto
      max-w-[800px]
      text-center
    ">
      {eyebrow && (
        <p className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#C88416]
          sm:text-[12px]
        ">
          {eyebrow}
        </p>
      )}

      <h2 className="
        mt-3
        text-[27px]
        font-semibold
        leading-tight
        text-[#064B50]
        sm:text-[33px]
        lg:text-[38px]
      ">
        {title}
      </h2>

      {description && (
        <p className="
          mx-auto
          mt-4
          max-w-[700px]
          text-[15px]
          leading-7
          text-[#444545]
          sm:text-[15px]
          sm:leading-8
        ">
          {description}
        </p>
      )}
    </div>
  );
}


/* =========================================================
   FEATURE GRID
========================================================= */

function FeatureGrid({
  items = [],
}) {
  return (
    <div className="
      mt-10
      grid
      gap-5
      sm:grid-cols-2
      lg:grid-cols-3
    ">
      {items.map(
        (item) => (
          <InfoCard
            key={item.title}
            item={item}
          />
        )
      )}
    </div>
  );
}


/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  item,
  centered = false,
}) {
  const Icon =
    item.icon;

  return (
    <article
      className={`
        min-w-0
        rounded-[20px]
        border
        border-[#D9E7E5]
        bg-white
        p-6
        transition
        duration-300
        hover:-translate-y-1
        hover:border-[#C8942E]/60
        hover:shadow-[0_16px_38px_rgba(6,75,80,0.08)]
        ${centered
          ? "text-center"
          : ""}
      `}
    >
      <div
        className={`
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#EEF6F5]
          text-[#C8942E]
          ${centered
            ? "mx-auto"
            : ""}
        `}
      >
        <Icon
          size={22}
          strokeWidth={1.7}
        />
      </div>

      <h3 className="
        mt-5
        break-words
        text-[17px]
        font-semibold
        leading-6
        text-[#064B50]
      ">
        {item.title}
      </h3>

      <p className="
        mt-3
        break-words
        text-[15px]
        leading-7
        text-[#363738]
      ">
        {item.text}
      </p>
    </article>
  );
}