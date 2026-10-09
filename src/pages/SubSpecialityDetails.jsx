import {
  ArrowRight,
  Check,
  MapPin,
  Quote,
  Stethoscope,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

import SectionHeading from "../components/speciality/SectionHeading";

import TechnologySlider from "../components/speciality/TechnologySlider";

import PatientStories from "../components/speciality/PatientStories";

import {
  getSubSpecialityDetails,
  slugify,
} from "../data/subSpecialityDetails";

export default function SubSpecialityDetails() {
  const {
    slug,
    subSpecialitySlug,
  } = useParams();

  const data =
    getSubSpecialityDetails(
      slug,
      subSpecialitySlug
    );

  if (!data) {
    return (
      <main
        className="
          flex
          min-h-[60vh]
          items-center
          justify-center
          px-5
        "
      >
        <div className="text-center">
          <h1
            className="
              text-[28px]
              font-semibold
              text-[#064B50]

              sm:text-[34px]
            "
          >
            Sub-speciality Not Found
          </h1>

          <Link
            to={`/speciality/${slug}`}
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
              transition
              hover:bg-[#0B6268]
            "
          >
            Back to Speciality

            <ArrowRight size={17} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">

      {/* =====================================================
          BREADCRUMB HERO
      ====================================================== */}

      <Breadcrumb
        title={data.title}
        description={
          data.intro ||
          `Explore specialist evaluation, treatment and coordinated care available within ${data.title}.`
        }
        items={[
          {
            label: "Specialities",
            to: "/specialities",
          },

          {
            label: data.parentTitle,
            to: `/speciality/${data.parentSlug}`,
          },

          {
            label: data.title,
          },
        ]}
      />

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <SubAbout data={data} />

      {/* =====================================================
          HIGHLIGHTS
      ====================================================== */}

      <Highlights data={data} />

      {/* =====================================================
          CHILD SUB-SPECIALITIES
      ====================================================== */}

      {data.subSpecialities?.length > 0 && (
        <ChildSubSpecialities
          data={data}
        />
      )}

      {/* =====================================================
          MEET OUR CHAIRMAN
      ====================================================== */}

      <ChairmanSection
        data={data}
      />

      {/* =====================================================
          SPECIALIST TEAM - WITH IMAGES
      ====================================================== */}

      <SubTeam data={data} />

      {/* =====================================================
          TREATMENTS
      ====================================================== */}

      <SubCards
        eyebrow="Care Options"
        title={`${data.title} Treatments`}
        description={`Explore treatment approaches commonly considered within ${data.title}. Final recommendations depend on specialist medical evaluation.`}
        items={data.treatments}
      />

      {/* =====================================================
          AILMENTS
      ====================================================== */}

      <SubCards
        eyebrow="Conditions We Support"
        title={`${data.title} Ailments`}
        description={`Explore conditions commonly evaluated and treated within ${data.title}.`}
        items={data.ailments}
        alternate
      />

      {/* =====================================================
          TECHNOLOGIES
      ====================================================== */}

      {data.technologies?.length > 0 && (
        <TechnologySlider
          items={data.technologies}
        />
      )}

      {/* =====================================================
          PATIENT STORIES
      ====================================================== */}

      <PatientStories
        stories={
          data.patientStories || []
        }
      />
    </main>
  );
}


/* =========================================================
   ABOUT
========================================================= */

function SubAbout({
  data,
}) {
  return (
    <section
      className="
        bg-white
        py-12

        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1350px]
          px-4

          sm:px-6
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow="Focused Expertise"
          title={`About ${data.title}`}
          description={`Specialist evaluation and coordinated medical care within ${data.title}.`}
        />

        <div
          className="
            mt-8
            grid
            items-center
            gap-8

            sm:mt-10

            lg:grid-cols-2
            lg:gap-14
          "
        >
          {/* CONTENT */}

          <div>
            <p
              className="
                text-[16px]
                leading-7
                text-[#2a2b2b]

                sm:text-[16px]
                sm:leading-8

                md:text-[17px]
                md:leading-9
              "
            >
              {data.about}
            </p>

          
          </div>

          {/* IMAGE */}

          <div
            className="
              overflow-hidden
              rounded-[20px]
              bg-[#EEF6F5]
              shadow-[0_15px_40px_rgba(6,75,80,0.08)]

              sm:rounded-[24px]
            "
          >
            {data.aboutImage ? (
              <img
                src={data.aboutImage}
                alt={data.title}
                className="
                  h-[230px]
                  w-full
                  object-cover

                  sm:h-[300px]
                  md:h-[350px]
                  lg:h-[390px]
                "
              />
            ) : (
              <div
                className="
                  flex
                  h-[250px]
                  items-center
                  justify-center

                  sm:h-[330px]
                  lg:h-[390px]
                "
              >
                <Stethoscope
                  size={78}
                  strokeWidth={1.2}
                  className="text-[#C8942E]"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   HIGHLIGHTS
========================================================= */

function Highlights({
  data,
}) {
  if (!data.highlights?.length) {
    return null;
  }

  return (
    <section
      className="
        bg-[#F4F8F7]
        py-12

        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1400px]
          px-4

          sm:px-6
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow="Key Highlights"
          title={`${data.title} Highlights`}
          description={`Key areas of specialist support available within ${data.title}.`}
        />

        <div
          className="
            mt-8
            grid
            gap-4

            sm:grid-cols-2
            md:mt-10
            lg:grid-cols-3
          "
        >
          {data.highlights.map(
            (highlight, index) => {
              const text =
                typeof highlight === "string"
                  ? highlight
                  : highlight.title ||
                    highlight.text;

              return (
                <article
                  key={`${text}-${index}`}
                  className="
                    flex
                    min-h-[105px]
                    gap-4
                    rounded-[18px]
                    border
                    border-[#D8E7E5]
                    bg-white
                    p-5
                    transition

                    hover:-translate-y-1
                    hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)]

                    sm:min-h-[120px]
                    sm:p-6
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#EEF6F5]
                      text-[#C8942E]
                    "
                  >
                    <Check size={17} />
                  </span>

                  <p
                    className="
                      text-[15px]
                      font-medium
                      leading-7
                      text-[#263F41]

                      sm:text-[16px]
                    "
                  >
                    {text}
                  </p>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   CHILD SUB-SPECIALITIES
========================================================= */

function ChildSubSpecialities({
  data,
}) {
  return (
    <section
      className="
        bg-white
        py-12

        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1400px]
          px-4

          sm:px-6
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow="Focused Areas"
          title="Sub-specialities"
          description={`Explore additional focused areas within ${data.title}.`}
        />

        <div
          className="
            mt-8
            grid
            gap-4

            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {data.subSpecialities.map(
            (name, index) => (
              <Link
                key={name}
                to={`/speciality/${data.parentSlug}/sub-speciality/${slugify(
                  name
                )}`}
                className="
                  group
                  flex
                  min-h-[90px]
                  items-center
                  justify-between
                  rounded-[18px]
                  border
                  border-[#D7E6E4]
                  bg-[#F9FBFB]
                  p-5
                  transition

                  hover:-translate-y-1
                  hover:border-[#C8942E]
                  hover:bg-white
                  hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)]

                  sm:min-h-[105px]
                  sm:p-6
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      text-[12px]
                      font-bold
                      text-[#C8942E]
                    "
                  >
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <span
                    className="
                      text-[16px]
                      font-semibold
                      text-[#064B50]

                      sm:text-[17px]
                    "
                  >
                    {name}
                  </span>
                </div>

                <ArrowRight
                  size={17}
                  className="text-[#064B50]"
                />
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   MEET OUR CHAIRMAN
   SAME CONCEPT AS SPECIALITY DETAILS PAGE
========================================================= */

function ChairmanSection({
  data,
}) {
  if (!data.chairman) {
    return null;
  }

  const chairman =
    data.chairman;

  return (
    <section
      className="
        bg-[#F4F8F7]
        py-12

        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1250px]
          px-4

          sm:px-6
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow="Leadership"
          title="Meet Our Chairman"
          description={`Leadership supporting coordinated specialist care within ${data.title}.`}
        />

        <div
          className="
            mt-8
            overflow-hidden
            rounded-[22px]
            border
            border-[#D6E6E4]
            bg-white
            shadow-[0_15px_40px_rgba(6,75,80,0.08)]

            sm:mt-10
            sm:rounded-[26px]
          "
        >
          <div
            className="
              grid

              lg:grid-cols-[0.85fr_1.15fr]
            "
          >
            {/* IMAGE */}

            <div
              className="
                relative
                flex
                min-h-[280px]
                items-end
                justify-center
                overflow-hidden
                bg-[#E7F1F0]
                px-5
                pt-7

                sm:min-h-[350px]
                md:min-h-[390px]
              "
            >
              {chairman.image ? (
                <img
                  src={chairman.image}
                  alt={
                    chairman.name ||
                    "Chairman"
                  }
                  className="
                    relative
                    z-10
                    max-h-[410px]
                    max-w-full
                    object-contain
                  "
                />
              ) : (
                <Stethoscope
                  size={95}
                  strokeWidth={1}
                  className="
                    mb-16
                    text-[#ABCBC8]
                  "
                />
              )}
            </div>

            {/* CONTENT */}

            <div
              className="
                flex
                flex-col
                justify-center
                p-6

                sm:p-8
                md:p-10
                lg:p-12
              "
            >
              <Quote
                size={40}
                className="text-[#C8942E]/40"
              />

              <p
                className="
                  mt-4
                  text-[15px]
                  leading-7
                  text-[#343535]

                  sm:text-[16px]
                  sm:leading-8

                  md:text-[17px]
                  md:leading-9
                "
              >
                {chairman.message}
              </p>

              <div
                className="
                  mt-7
                  border-l-[3px]
                  border-[#C8942E]
                  pl-4

                  sm:pl-5
                "
              >
                <h3
                  className="
                    text-[19px]
                    font-semibold
                    text-[#064B50]

                    sm:text-[21px]
                  "
                >
                  {chairman.name}
                </h3>

                {chairman.designation && (
                  <p
                    className="
                      mt-1
                      text-[13px]
                      font-semibold
                      text-[#C8942E]

                      sm:text-[14px]
                    "
                  >
                    {chairman.designation}
                  </p>
                )}

                {(chairman.location ||
                  data.location) && (
                  <div
                    className="
                      mt-3
                      flex
                      items-center
                      gap-2
                      text-[15px]
                      text-[#1e1e1e]

                      sm:text-[16px]
                    "
                  >
                    <MapPin size={15} />

                    {chairman.location ||
                      data.location}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   SPECIALIST TEAM
   IMAGES ADDED
========================================================= */

function SubTeam({
  data,
}) {
  if (!data.team) {
    return null;
  }

  const cards =
    data.team.cards || [];

  if (!cards.length) {
    return null;
  }

  return (
    <section
      className="
        bg-white
        py-12

        sm:py-14
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1400px]
          px-4

          sm:px-6
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow="Specialist Team"
          title={
            data.team.title ||
            `${data.title} Team`
          }
          description={
            data.team.description ||
            `Coordinated specialist care for ${data.title}.`
          }
        />

        <div
          className="
            mt-8
            grid
            gap-5

            sm:mt-10
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {cards.map(
            (card, index) => (
              <article
                key={`${card.title}-${index}`}
                className="
                  group
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#DCE8E7]
                  bg-white
                  transition

                  hover:-translate-y-1
                  hover:shadow-[0_15px_40px_rgba(6,75,80,0.10)]
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-[210px]
                    overflow-hidden
                    bg-[#EEF6F5]

                    sm:h-[230px]
                    md:h-[240px]
                  "
                >
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500

                        group-hover:scale-[1.03]
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        items-center
                        justify-center
                      "
                    >
                      <Stethoscope
                        size={60}
                        strokeWidth={1.2}
                        className="text-[#C8942E]"
                      />
                    </div>
                  )}
                </div>

                {/* CONTENT */}

                <div
                  className="
                    p-5

                    sm:p-6
                  "
                >
                 

                  <h3
                    className="
                      text-[17px]
                      font-semibold
                      leading-7
                      text-[#064B50]

                      sm:text-[18px]
                    "
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[15px]
                      leading-7
                      text-[#262727]

                      sm:text-[16px]
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   TREATMENTS / AILMENTS
========================================================= */

function SubCards({
  eyebrow,
  title,
  description,
  items = [],
  alternate = false,
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section
      className={`
        py-12
        sm:py-14
        md:py-16
        lg:py-20

        ${
          alternate
            ? "bg-[#F4F8F7]"
            : "bg-white"
        }
      `}
    >
      <div
        className="
          mx-auto
          max-w-[1400px]
          px-4

          sm:px-6
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div
          className="
            mt-8
            grid
            gap-4

            sm:mt-10
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {items.map(
            (current, index) => {
              const title =
                typeof current === "string"
                  ? current
                  : current.title;

              const description =
                typeof current === "object"
                  ? current.description
                  : "";

              return (
                <article
                  key={`${title}-${index}`}
                  className="
                    min-h-[160px]
                    rounded-[18px]
                    border
                    border-[#D5E4E2]
                    bg-white
                    p-5
                    transition

                    hover:-translate-y-1
                    hover:border-[#C8942E]/70
                    hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)]

                    sm:min-h-[185px]
                    sm:p-6
                  "
                >
                  <span
                    className="
                      text-[12px]
                      font-bold
                      tracking-[0.12em]
                      text-[#C8942E]

                      sm:text-[13px]
                    "
                  >
                    {String(
                      index + 1
                    ).padStart(2, "0")}
                  </span>

                  <h3
                    className="
                      mt-4
                      text-[17px]
                      font-semibold
                      text-[#064B50]

                      sm:mt-5
                      sm:text-[18px]
                    "
                  >
                    {title}
                  </h3>

                  {description && (
                    <p
                      className="
                        mt-3
                        text-[15px]
                        leading-7
                        text-[#333434]

                        sm:text-[16px]
                      "
                    >
                      {description}
                    </p>
                  )}
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}