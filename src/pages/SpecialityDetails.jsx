import {
  ArrowRight,
  Check,
  MapPin,
  Quote,
  Stethoscope,
  Users,
} from "lucide-react";
import {
  useEffect,
  useState,
} from "react";
import {
  Link,
  useParams,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

import SectionHeading from "../components/speciality/SectionHeading";

import TechnologySlider from "../components/speciality/TechnologySlider";

import PatientStories from "../components/speciality/PatientStories";



import {
  getSpecialityDetails,
} from "../data/specialityDetails";

import {
  slugify,
} from "../data/subSpecialityDetails";

import {
  getSpecialityBySlug,
} from "../api/specialitiesApi";

const API_URL =
  import.meta.env.VITE_API_URL || "";

const SERVER_URL =
  API_URL.replace(/\/api\/?$/, "");


function mediaUrl(path) {
  if (!path) return "";

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `${SERVER_URL}${
    path.startsWith("/")
      ? path
      : `/${path}`
  }`;
}

export default function SpecialityDetails() {
  const { slug } = useParams();

  const [data, setData] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [notFound, setNotFound] =
    useState(false);


  useEffect(() => {
    let mounted = true;

    async function loadSpecialityDetails() {
      try {
        setLoading(true);
        setNotFound(false);


        /* =====================================
           EXISTING HARDCODED DATA

           Admin lo currently leni sections
           preserve cheyyadaniki.
        ===================================== */

        const hardcodedData =
          getSpecialityDetails(slug) || {};


        /* =====================================
           BACKEND API

           GET:
           /api/specialities/slug/:slug
        ===================================== */

        const response =
          await getSpecialityBySlug(slug);

        if (!mounted) return;


        const apiData =
          response?.data;

        if (!apiData) {
          setNotFound(true);
          return;
        }


        /* =====================================
           OUR STORIES

           Same speciality related stories only.
        ===================================== */

        const apiStories =
          Array.isArray(
            apiData.patient_stories
          )
            ? apiData.patient_stories.map(
                (story) => ({
                  id: story.id,

                  name:
                    story.patient_name ||
                    story.title,

                  patientName:
                    story.patient_name ||
                    story.title,

                  title:
                    story.title ||
                    story.patient_name,

                  videoUrl:
                    story.video_url ||
                    "",

                  video:
                    story.video_url ||
                    "",

                  slug:
                    story.slug ||
                    "",
                })
              )
            : [];


        /* =====================================
           MERGE

           ADMIN DATA:
           - name
           - about
           - about image
           - highlights
           - sub-specialities
           - ailments
           - stories

           REMAINING:
           existing hardcoded data
        ===================================== */

        const mergedData = {
          ...hardcodedData,


          /* SPECIALITY */

          id:
            apiData.id,

          slug:
            apiData.slug,

          title:
            apiData.name ||
            hardcodedData.title ||
            "",


          /* INTRO

             No admin short description currently
             available -> preserve hardcoded.
          */

          intro:
            hardcodedData.intro ||
            "",


          /* ABOUT */

          about:
            apiData.about_content ||
            hardcodedData.about ||
            hardcodedData.intro ||
            "",

          aboutImage:
            apiData.about_image
              ? mediaUrl(
                  apiData.about_image
                )
              : hardcodedData.aboutImage,


          /* HIGHLIGHTS */

          highlights:
            Array.isArray(
              apiData.highlights
            ) &&
            apiData.highlights.length
              ? apiData.highlights
              : hardcodedData.highlights ||
                [],


          /* SUB SPECIALITIES */

          subSpecialities:
            Array.isArray(
              apiData.subspecialities
            ) &&
            apiData.subspecialities.length
              ? apiData.subspecialities
              : hardcodedData
                  .subSpecialities ||
                [],


          /* AILMENTS */

          ailments:
            Array.isArray(
              apiData.ailments
            ) &&
            apiData.ailments.length
              ? apiData.ailments
              : hardcodedData.ailments ||
                [],


          /* =================================
             REMAINING HARDCODED

             Don't remove.
          ================================= */

          chairman:
            hardcodedData.chairman,

          team:
            hardcodedData.team,

          treatments:
            hardcodedData.treatments ||
            [],

          technologies:
            hardcodedData.technologies ||
            [],


          /* OUR STORIES */

          patientStories: apiStories,
          // patientStories:
          //   apiStories.length
          //     ? apiStories
          //     : hardcodedData
          //         .patientStories ||
          //       [],
        };


        setData(mergedData);

      } catch (error) {
        console.error(
          "Speciality details API error:",
          error
        );

        if (!mounted) return;

        setNotFound(true);

      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }


    loadSpecialityDetails();


    return () => {
      mounted = false;
    };
  }, [slug]);


  /* =========================================
     LOADING
  ========================================= */

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-white">

        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#DCE8E7] border-t-[#064B50]" />

          <p className="mt-4 text-[14px] text-[#52696A]">
            Loading speciality...
          </p>

        </div>

      </main>
    );
  }


  /* =========================================
     NOT FOUND
  ========================================= */

  if (
    notFound ||
    !data
  ) {
    return <NotFound />;
  }

  return (
    <main className="bg-white">

      {/* BREADCRUMB */}
      <Breadcrumb
  title={data.title}
  description={
    data.intro ||
    `Explore specialist care, treatments and coordinated medical support available within ${data.title}.`
  }
  items={[
    {
      label: "Specialities",
      to: "/specialities",
    },
    {
      label: data.title,
    },
  ]}
/>

      {/* ABOUT */}
      <AboutSection
        data={data}
      />

      {/* HIGHLIGHTS */}
      <HighlightsSection
        data={data}
      />

      {/* SUB SPECIALITIES */}
      <SubSpecialitiesSection
        data={data}
        slug={slug}
      />

      {/* CHAIRMAN */}
      <ChairmanSection
        data={data}
      />

      {/* TEAM */}
      <TeamSection
        data={data}
      />

      {/* TREATMENTS */}
      <CardsSection
        eyebrow="Care Options"
        title="Treatments"
        description={`Explore commonly coordinated treatment options related to ${data.title}. Final recommendations depend on specialist medical evaluation.`}
        items={
          data.treatments
        }
        viewMore={`/speciality/${slug}/treatments`}
      />

      {/* AILMENTS */}
      <CardsSection
        eyebrow="Conditions We Support"
        title="Ailments"
        description={`Explore conditions commonly associated with ${data.title} that may require specialist medical evaluation.`}
        items={
          data.ailments
        }
        viewMore={`/speciality/${slug}/ailments`}
        alternate
      />

      {/* TECHNOLOGY */}
      <TechnologySlider
        items={
          data.technologies
        }
      />

      {/* STORIES */}
      <PatientStories
        stories={
          data.patientStories
        }
      />

    </main>
  );
}

/* =========================================================
   NOT FOUND
========================================================= */

function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-5">
      <div className="text-center">

        <h1 className="text-[28px] font-semibold text-[#064B50] sm:text-[34px]">
          Speciality Not Found
        </h1>

        <Link
          to="/specialities"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#064B50] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#0B6268]"
        >
          View Specialities

          <ArrowRight
            size={17}
          />
        </Link>

      </div>
    </main>
  );
}

/* =========================================================
   ABOUT
========================================================= */

function AboutSection({
  data,
}) {
  const image =
    data.aboutImage ||
    data.team?.cards?.[0]
      ?.image ||
    data.chairman?.image;

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">

      <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow="Specialist Care"
          title={`About ${data.title}`}
          description={`Learn more about our coordinated approach to ${data.title}.`}
        />

        <div
          className="
            mt-8
            grid
            items-center
            gap-8

            md:mt-10
            lg:grid-cols-2
            lg:gap-14
          "
        >

          {/* CONTENT */}
          <div>
            <p
              className="
                text-[15px]
                leading-7
                text-[#1d1d1d]

                sm:text-[16px]
                sm:leading-8

                md:text-[17px]
                md:leading-9
              "
            >
              {data.about ||
                data.intro}
            </p>

            {/* <div className="mt-6 h-[3px] w-[65px] rounded-full bg-[#C8942E]" /> */}
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[20px] bg-[#EEF6F5] shadow-[0_15px_40px_rgba(6,75,80,0.08)] sm:rounded-[24px]">

            {image ? (
              <img
                src={image}
                alt={data.title}
                className="
                  h-[240px]
                  w-full
                  object-cover

                  sm:h-[320px]
                  md:h-[360px]
                  lg:h-[390px]
                "
              />
            ) : (
              <div className="flex h-[260px] items-center justify-center sm:h-[340px]">

                <Stethoscope
                  size={80}
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

function HighlightsSection({
  data,
}) {
  if (
    !data.highlights?.length
  ) {
    return null;
  }

  return (
    <section className="bg-[#F4F8F7] py-12 sm:py-14 md:py-16 lg:py-20">

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow="Key Highlights"
          title={`${data.title} Highlights`}
          description={`Key areas of specialist support available within ${data.title}.`}
        />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">

          {data.highlights.map(
            (
              highlight,
              index
            ) => {
              const text =
                typeof highlight ===
                "string"
                  ? highlight
                  : highlight.title ||
                    highlight.text;

              return (
                <article
                  key={`${text}-${index}`}
                  className="flex min-h-[105px] gap-4 rounded-[18px] border border-[#D8E7E5] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)] sm:min-h-[120px] sm:p-6"
                >

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF6F5] text-[#C8942E]">

                    <Check
                      size={17}
                    />

                  </span>

                  {/* <p className="text-[14px] font-medium leading-7 text-[#263F41] sm:text-[15px]">
                    {text}
                  </p> */}
                  <p className="min-w-0 flex-1 break-words [overflow-wrap:anywhere] text-[15px] font-medium leading-7 text-[#263F41] sm:text-[16px]">
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
   SUB SPECIALITIES
========================================================= */

function SubSpecialitiesSection({
  data,
  slug,
}) {
  if (
    !data.subSpecialities
      ?.length
  ) {
    return null;
  }

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow="Focused Expertise"
          title="Sub-specialities"
          description={`Explore specialised areas within ${data.title}.`}
        />

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">

         {data.subSpecialities.map(
  (item, index) => {
    const name =
      typeof item === "string"
        ? item
        : item.name;

    const subSlug =
      typeof item === "string"
        ? slugify(item)
        : item.slug ||
          slugify(item.name);

    return (
      <Link
        key={
          typeof item === "object"
            ? item.id || subSlug
            : name
        }
        to={`/speciality/${slug}/sub-speciality/${subSlug}`}
        className="group flex min-h-[90px] min-w-0 items-center justify-between overflow-hidden rounded-[18px] border border-[#D7E6E4] bg-[#F9FBFB] p-5 transition hover:-translate-y-1 hover:border-[#C8942E] hover:bg-white hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)] sm:min-h-[105px] sm:p-6"
        // className="group flex min-h-[90px] items-center justify-between rounded-[18px] border border-[#D7E6E4] bg-[#F9FBFB] p-5 transition hover:-translate-y-1 hover:border-[#C8942E] hover:bg-white hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)] sm:min-h-[105px] sm:p-6"
      >

        {/* <div className="flex items-center gap-3 sm:gap-4"> */}
        <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">

          <span className="text-[12px] font-bold text-[#C8942E]">
            {String(
              index + 1
            ).padStart(
              2,
              "0"
            )}
          </span>

          {/* <span className="text-[15px] font-semibold text-[#064B50] sm:text-[16px]">
            {name}
          </span> */}
          <span className="min-w-0 flex-1 break-words [overflow-wrap:anywhere] text-[16px] font-semibold leading-6 text-[#064B50] sm:text-[17px] sm:leading-7">
            {name}
          </span>

        </div>


        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF6F5] text-[#064B50] transition group-hover:bg-[#064B50] group-hover:text-white sm:h-9 sm:w-9">

          <ArrowRight
            size={15}
          />

        </span>

      </Link>
    );
  }
)}

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CHAIRMAN
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
    <section className="bg-[#F4F8F7] py-12 sm:py-14 md:py-16 lg:py-20">

      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow="Leadership"
          title="Our Chairman Message"
          description={`A patient-focused approach to coordinated ${data.title} care.`}
        />

        <div className="mt-8 overflow-hidden rounded-[22px] border border-[#D6E6E4] bg-white shadow-[0_15px_40px_rgba(6,75,80,0.08)] sm:mt-10 sm:rounded-[26px]">

          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT IMAGE */}
            <div
              className="
                relative
                flex
                min-h-[300px]
                items-end
                justify-center
                overflow-hidden
                bg-[#E7F1F0]
                px-5
                pt-7

                sm:min-h-[370px]
                md:min-h-[400px]
              "
            >

              {chairman.image ? (
                <img
                  src={
                    chairman.image
                  }
                  alt={
                    chairman.name ||
                    "Chairman"
                  }
                  className="relative z-10 max-h-[400px] max-w-full object-contain"
                />
              ) : (
                <Users
                  size={110}
                  className="mb-16 text-[#ABCBC8]"
                  strokeWidth={1}
                />
              )}

            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">

              <Quote
                size={40}
                className="text-[#C8942E]/40"
              />

              <p className="mt-4 text-[15px] leading-7 text-[#2d2e2e] sm:text-[16px] sm:leading-8 md:text-[17px] md:leading-9">
                {
                  chairman.message
                }
              </p>

              <div className="mt-7 border-l-[3px] border-[#C8942E] pl-4 sm:pl-5">

                <h3 className="text-[19px] font-semibold text-[#064B50] sm:text-[21px]">
                  {chairman.name}
                </h3>

                {chairman.designation && (
                  <p className="mt-1 text-[15px] font-semibold text-[#C8942E] sm:text-[16px]">
                    {
                      chairman.designation
                    }
                  </p>
                )}

                {(chairman.location ||
                  data.location) && (
                  <div className="mt-3 flex items-center gap-2 text-[14px] text-[#313333] sm:text-[15px]">

                    <MapPin
                      size={15}
                    />

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
   TEAM
========================================================= */

function TeamSection({
  data,
}) {
  if (!data.team) {
    return null;
  }

  const cards =
    Array.isArray(data.team)
      ? data.team
      : data.team.cards ||
        [];

  if (!cards.length) {
    return null;
  }

  return (
    <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow="Multidisciplinary Care"
          title={
            data.team.title ||
            `${data.title} Team`
          }
          description={
            data.team.description ||
            `Coordinated specialist support for ${data.title}.`
          }
        />

        <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">

          {cards.map(
            (card, index) => (
              <article
                key={`${card.title}-${index}`}
                className="overflow-hidden rounded-[20px] border border-[#DCE8E7] bg-[#F9FBFB] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(6,75,80,0.09)]"
              >

                {card.image && (
                  <img
                    src={
                      card.image
                    }
                    alt={
                      card.title
                    }
                    className="h-[210px] w-full object-cover sm:h-[235px]"
                  />
                )}

                <div className="p-5 sm:p-6">

                  {/* <div className="mb-4 h-[3px] w-[42px] rounded-full bg-[#C8942E]" /> */}

                  <h3 className="text-[17px] font-semibold text-[#064B50] sm:text-[19px]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-[#282828] sm:text-[16px]">
                    {card.description ||
                      card.text}
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

function CardsSection({
  eyebrow,
  title,
  description,
  items = [],
  viewMore,
  alternate = false,
}) {
  if (!items.length) {
    return null;
  }

  return (
    <section
      className={`py-12 sm:py-14 md:py-16 lg:py-20 ${
        alternate
          ? "bg-[#F4F8F7]"
          : "bg-white"
      }`}
    >

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={
            description
          }
        />

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">

          {items
            .slice(0, 6)
            .map(
              (
                current,
                index
              ) => {
                const name =
                  typeof current ===
                  "string"
                    ? current
                    : current.title ||
                      current.name;

                const content =
                  typeof current ===
                  "object"
                    ? current.description ||
                      current.text
                    : "";

                return (
                  // <article
                  //   key={`${name}-${index}`}
                  //   className="min-h-[160px] rounded-[18px] border border-[#D5E4E2] bg-white p-5 transition hover:-translate-y-1 hover:border-[#C8942E]/70 hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)] sm:min-h-[185px] sm:p-6"
                  // >
                  <article
  key={`${name}-${index}`}
  className="min-h-[160px] min-w-0 overflow-hidden rounded-[18px] border border-[#D5E4E2] bg-white p-5 transition hover:-translate-y-1 hover:border-[#C8942E]/70 hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)] sm:min-h-[185px] sm:p-6"
>

                    <span className="text-[12px] font-bold tracking-[0.12em] text-[#C8942E] sm:text-[13px]">
                      {String(
                        index + 1
                      ).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    {/* <h3 className="mt-4 text-[17px] font-semibold text-[#064B50] sm:mt-5 sm:text-[18px]">
                      {name}
                    </h3> */}
                    <h3 className="mt-4 break-words [overflow-wrap:anywhere] text-[17px] font-semibold leading-7 text-[#064B50] sm:mt-5 sm:text-[18px]">
                      {name}
                    </h3>

                    {content && (
                      <p className="mt-3 text-[15px] leading-7 text-[#303131] sm:text-[16px]">
                        {content}
                      </p>
                    )}

                  </article>
                );
              }
            )}

        </div>

        {viewMore && (
          <div className="mt-8 text-center sm:mt-10">

            <Link
              to={viewMore}
              className="inline-flex items-center gap-2 rounded-xl bg-[#064B50] px-6 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#0B6268] sm:px-7"
            >
              View More

              <ArrowRight
                size={17}
              />

            </Link>

          </div>
        )}

      </div>
    </section>
  );
}











// import {
//   ArrowRight,
//   Check,
//   MapPin,
//   Quote,
//   Stethoscope,
//   Users,
// } from "lucide-react";

// import {
//   Link,
//   useParams,
// } from "react-router-dom";

// import Breadcrumb from "../components/Breadcrumb";

// import SectionHeading from "../components/speciality/SectionHeading";

// import TechnologySlider from "../components/speciality/TechnologySlider";

// import PatientStories from "../components/speciality/PatientStories";

// import {
//   specialties,
// } from "../data/navigation";

// import {
//   getSpecialityDetails,
// } from "../data/specialityDetails";

// import {
//   slugify,
// } from "../data/subSpecialityDetails";

// export default function SpecialityDetails() {
//   const { slug } =
//     useParams();

//   const navigationItem =
//     specialties.find(
//       (item) =>
//         item[1] === slug
//     );

//   if (!navigationItem) {
//     return <NotFound />;
//   }

//   const data =
//     getSpecialityDetails(
//       slug,
//       navigationItem
//     );

//   if (!data) {
//     return <NotFound />;
//   }

//   return (
//     <main className="bg-white">

//       {/* BREADCRUMB */}
//       <Breadcrumb
//   title={data.title}
//   description={
//     data.intro ||
//     `Explore specialist care, treatments and coordinated medical support available within ${data.title}.`
//   }
//   items={[
//     {
//       label: "Specialities",
//       to: "/specialities",
//     },
//     {
//       label: data.title,
//     },
//   ]}
// />

//       {/* ABOUT */}
//       <AboutSection
//         data={data}
//       />

//       {/* HIGHLIGHTS */}
//       <HighlightsSection
//         data={data}
//       />

//       {/* SUB SPECIALITIES */}
//       <SubSpecialitiesSection
//         data={data}
//         slug={slug}
//       />

//       {/* CHAIRMAN */}
//       <ChairmanSection
//         data={data}
//       />

//       {/* TEAM */}
//       <TeamSection
//         data={data}
//       />

//       {/* TREATMENTS */}
//       <CardsSection
//         eyebrow="Care Options"
//         title="Treatments"
//         description={`Explore commonly coordinated treatment options related to ${data.title}. Final recommendations depend on specialist medical evaluation.`}
//         items={
//           data.treatments
//         }
//         viewMore={`/speciality/${slug}/treatments`}
//       />

//       {/* AILMENTS */}
//       <CardsSection
//         eyebrow="Conditions We Support"
//         title="Ailments"
//         description={`Explore conditions commonly associated with ${data.title} that may require specialist medical evaluation.`}
//         items={
//           data.ailments
//         }
//         viewMore={`/speciality/${slug}/ailments`}
//         alternate
//       />

//       {/* TECHNOLOGY */}
//       <TechnologySlider
//         items={
//           data.technologies
//         }
//       />

//       {/* STORIES */}
//       <PatientStories
//         stories={
//           data.patientStories
//         }
//       />

//     </main>
//   );
// }

// /* =========================================================
//    NOT FOUND
// ========================================================= */

// function NotFound() {
//   return (
//     <main className="flex min-h-[60vh] items-center justify-center px-5">
//       <div className="text-center">

//         <h1 className="text-[28px] font-semibold text-[#064B50] sm:text-[34px]">
//           Speciality Not Found
//         </h1>

//         <Link
//           to="/specialities"
//           className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#064B50] px-6 py-3.5 text-[14px] font-semibold text-white hover:bg-[#0B6268]"
//         >
//           View Specialities

//           <ArrowRight
//             size={17}
//           />
//         </Link>

//       </div>
//     </main>
//   );
// }

// /* =========================================================
//    ABOUT
// ========================================================= */

// function AboutSection({
//   data,
// }) {
//   const image =
//     data.aboutImage ||
//     data.team?.cards?.[0]
//       ?.image ||
//     data.chairman?.image;

//   return (
//     <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">

//       <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-10">

//         <SectionHeading
//           eyebrow="Specialist Care"
//           title={`About ${data.title}`}
//           description={`Learn more about our coordinated approach to ${data.title}.`}
//         />

//         <div
//           className="
//             mt-8
//             grid
//             items-center
//             gap-8

//             md:mt-10
//             lg:grid-cols-2
//             lg:gap-14
//           "
//         >

//           {/* CONTENT */}
//           <div>
//             <p
//               className="
//                 text-[15px]
//                 leading-7
//                 text-[#52696A]

//                 sm:text-[16px]
//                 sm:leading-8

//                 md:text-[17px]
//                 md:leading-9
//               "
//             >
//               {data.about ||
//                 data.intro}
//             </p>

//             <div className="mt-6 h-[3px] w-[65px] rounded-full bg-[#C8942E]" />
//           </div>

//           {/* IMAGE */}
//           <div className="overflow-hidden rounded-[20px] bg-[#EEF6F5] shadow-[0_15px_40px_rgba(6,75,80,0.08)] sm:rounded-[24px]">

//             {image ? (
//               <img
//                 src={image}
//                 alt={data.title}
//                 className="
//                   h-[240px]
//                   w-full
//                   object-cover

//                   sm:h-[320px]
//                   md:h-[360px]
//                   lg:h-[390px]
//                 "
//               />
//             ) : (
//               <div className="flex h-[260px] items-center justify-center sm:h-[340px]">

//                 <Stethoscope
//                   size={80}
//                   strokeWidth={1.2}
//                   className="text-[#C8942E]"
//                 />

//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================================
//    HIGHLIGHTS
// ========================================================= */

// function HighlightsSection({
//   data,
// }) {
//   if (
//     !data.highlights?.length
//   ) {
//     return null;
//   }

//   return (
//     <section className="bg-[#F4F8F7] py-12 sm:py-14 md:py-16 lg:py-20">

//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

//         <SectionHeading
//           eyebrow="Key Highlights"
//           title={`${data.title} Highlights`}
//           description={`Key areas of specialist support available within ${data.title}.`}
//         />

//         <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">

//           {data.highlights.map(
//             (
//               highlight,
//               index
//             ) => {
//               const text =
//                 typeof highlight ===
//                 "string"
//                   ? highlight
//                   : highlight.title ||
//                     highlight.text;

//               return (
//                 <article
//                   key={`${text}-${index}`}
//                   className="flex min-h-[105px] gap-4 rounded-[18px] border border-[#D8E7E5] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)] sm:min-h-[120px] sm:p-6"
//                 >

//                   <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF6F5] text-[#C8942E]">

//                     <Check
//                       size={17}
//                     />

//                   </span>

//                   <p className="text-[14px] font-medium leading-7 text-[#263F41] sm:text-[15px]">
//                     {text}
//                   </p>

//                 </article>
//               );
//             }
//           )}

//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================================
//    SUB SPECIALITIES
// ========================================================= */

// function SubSpecialitiesSection({
//   data,
//   slug,
// }) {
//   if (
//     !data.subSpecialities
//       ?.length
//   ) {
//     return null;
//   }

//   return (
//     <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">

//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

//         <SectionHeading
//           eyebrow="Focused Expertise"
//           title="Sub-specialities"
//           description={`Explore specialised areas within ${data.title}.`}
//         />

//         <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">

//           {data.subSpecialities.map(
//             (name, index) => (
//               <Link
//                 key={name}
//                 to={`/speciality/${slug}/sub-speciality/${slugify(
//                   name
//                 )}`}
//                 className="group flex min-h-[90px] items-center justify-between rounded-[18px] border border-[#D7E6E4] bg-[#F9FBFB] p-5 transition hover:-translate-y-1 hover:border-[#C8942E] hover:bg-white hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)] sm:min-h-[105px] sm:p-6"
//               >

//                 <div className="flex items-center gap-3 sm:gap-4">

//                   <span className="text-[12px] font-bold text-[#C8942E]">
//                     {String(
//                       index + 1
//                     ).padStart(
//                       2,
//                       "0"
//                     )}
//                   </span>

//                   <span className="text-[15px] font-semibold text-[#064B50] sm:text-[16px]">
//                     {name}
//                   </span>

//                 </div>

//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF6F5] text-[#064B50] transition group-hover:bg-[#064B50] group-hover:text-white sm:h-9 sm:w-9">

//                   <ArrowRight
//                     size={15}
//                   />

//                 </span>

//               </Link>
//             )
//           )}

//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================================
//    CHAIRMAN
// ========================================================= */

// function ChairmanSection({
//   data,
// }) {
//   if (!data.chairman) {
//     return null;
//   }

//   const chairman =
//     data.chairman;

//   return (
//     <section className="bg-[#F4F8F7] py-12 sm:py-14 md:py-16 lg:py-20">

//       <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-10">

//         <SectionHeading
//           eyebrow="Leadership"
//           title="Our Chairman Message"
//           description={`A patient-focused approach to coordinated ${data.title} care.`}
//         />

//         <div className="mt-8 overflow-hidden rounded-[22px] border border-[#D6E6E4] bg-white shadow-[0_15px_40px_rgba(6,75,80,0.08)] sm:mt-10 sm:rounded-[26px]">

//           <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

//             {/* LEFT IMAGE */}
//             <div
//               className="
//                 relative
//                 flex
//                 min-h-[300px]
//                 items-end
//                 justify-center
//                 overflow-hidden
//                 bg-[#E7F1F0]
//                 px-5
//                 pt-7

//                 sm:min-h-[370px]
//                 md:min-h-[400px]
//               "
//             >

//               {chairman.image ? (
//                 <img
//                   src={
//                     chairman.image
//                   }
//                   alt={
//                     chairman.name ||
//                     "Chairman"
//                   }
//                   className="relative z-10 max-h-[400px] max-w-full object-contain"
//                 />
//               ) : (
//                 <Users
//                   size={110}
//                   className="mb-16 text-[#ABCBC8]"
//                   strokeWidth={1}
//                 />
//               )}

//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">

//               <Quote
//                 size={40}
//                 className="text-[#C8942E]/40"
//               />

//               <p className="mt-4 text-[15px] leading-7 text-[#52696A] sm:text-[16px] sm:leading-8 md:text-[17px] md:leading-9">
//                 {
//                   chairman.message
//                 }
//               </p>

//               <div className="mt-7 border-l-[3px] border-[#C8942E] pl-4 sm:pl-5">

//                 <h3 className="text-[19px] font-semibold text-[#064B50] sm:text-[21px]">
//                   {chairman.name}
//                 </h3>

//                 {chairman.designation && (
//                   <p className="mt-1 text-[13px] font-semibold text-[#C8942E] sm:text-[14px]">
//                     {
//                       chairman.designation
//                     }
//                   </p>
//                 )}

//                 {(chairman.location ||
//                   data.location) && (
//                   <div className="mt-3 flex items-center gap-2 text-[13px] text-[#667576] sm:text-[14px]">

//                     <MapPin
//                       size={15}
//                     />

//                     {chairman.location ||
//                       data.location}

//                   </div>
//                 )}

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================================
//    TEAM
// ========================================================= */

// function TeamSection({
//   data,
// }) {
//   if (!data.team) {
//     return null;
//   }

//   const cards =
//     Array.isArray(data.team)
//       ? data.team
//       : data.team.cards ||
//         [];

//   if (!cards.length) {
//     return null;
//   }

//   return (
//     <section className="bg-white py-12 sm:py-14 md:py-16 lg:py-20">

//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

//         <SectionHeading
//           eyebrow="Multidisciplinary Care"
//           title={
//             data.team.title ||
//             `${data.title} Team`
//           }
//           description={
//             data.team.description ||
//             `Coordinated specialist support for ${data.title}.`
//           }
//         />

//         <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">

//           {cards.map(
//             (card, index) => (
//               <article
//                 key={`${card.title}-${index}`}
//                 className="overflow-hidden rounded-[20px] border border-[#DCE8E7] bg-[#F9FBFB] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(6,75,80,0.09)]"
//               >

//                 {card.image && (
//                   <img
//                     src={
//                       card.image
//                     }
//                     alt={
//                       card.title
//                     }
//                     className="h-[210px] w-full object-cover sm:h-[235px]"
//                   />
//                 )}

//                 <div className="p-5 sm:p-6">

//                   <div className="mb-4 h-[3px] w-[42px] rounded-full bg-[#C8942E]" />

//                   <h3 className="text-[17px] font-semibold text-[#064B50] sm:text-[19px]">
//                     {card.title}
//                   </h3>

//                   <p className="mt-3 text-[14px] leading-7 text-[#667576] sm:text-[15px]">
//                     {card.description ||
//                       card.text}
//                   </p>

//                 </div>
//               </article>
//             )
//           )}

//         </div>
//       </div>
//     </section>
//   );
// }

// /* =========================================================
//    TREATMENTS / AILMENTS
// ========================================================= */

// function CardsSection({
//   eyebrow,
//   title,
//   description,
//   items = [],
//   viewMore,
//   alternate = false,
// }) {
//   if (!items.length) {
//     return null;
//   }

//   return (
//     <section
//       className={`py-12 sm:py-14 md:py-16 lg:py-20 ${
//         alternate
//           ? "bg-[#F4F8F7]"
//           : "bg-white"
//       }`}
//     >

//       <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">

//         <SectionHeading
//           eyebrow={eyebrow}
//           title={title}
//           description={
//             description
//           }
//         />

//         <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-3">

//           {items
//             .slice(0, 6)
//             .map(
//               (
//                 current,
//                 index
//               ) => {
//                 const name =
//                   typeof current ===
//                   "string"
//                     ? current
//                     : current.title ||
//                       current.name;

//                 const content =
//                   typeof current ===
//                   "object"
//                     ? current.description ||
//                       current.text
//                     : "";

//                 return (
//                   <article
//                     key={`${name}-${index}`}
//                     className="min-h-[160px] rounded-[18px] border border-[#D5E4E2] bg-white p-5 transition hover:-translate-y-1 hover:border-[#C8942E]/70 hover:shadow-[0_12px_30px_rgba(6,75,80,0.08)] sm:min-h-[185px] sm:p-6"
//                   >

//                     <span className="text-[12px] font-bold tracking-[0.12em] text-[#C8942E] sm:text-[13px]">
//                       {String(
//                         index + 1
//                       ).padStart(
//                         2,
//                         "0"
//                       )}
//                     </span>

//                     <h3 className="mt-4 text-[17px] font-semibold text-[#064B50] sm:mt-5 sm:text-[18px]">
//                       {name}
//                     </h3>

//                     {content && (
//                       <p className="mt-3 text-[14px] leading-7 text-[#667576] sm:text-[15px]">
//                         {content}
//                       </p>
//                     )}

//                   </article>
//                 );
//               }
//             )}

//         </div>

//         {viewMore && (
//           <div className="mt-8 text-center sm:mt-10">

//             <Link
//               to={viewMore}
//               className="inline-flex items-center gap-2 rounded-xl bg-[#064B50] px-6 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#0B6268] sm:px-7"
//             >
//               View More

//               <ArrowRight
//                 size={17}
//               />

//             </Link>

//           </div>
//         )}

//       </div>
//     </section>
//   );
// }