import {
  BedDouble,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  FileCheck2,
  FileText,
  Globe2,
  HeartHandshake,
  Hotel,
  Languages,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  Plane,
  Play,
  ShieldCheck,
  Stethoscope,
  Utensils,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";
import useOurStories from "../hooks/useOurStories";
import useFaqs from "../hooks/useFaqs";

/* =========================================================
   TRIP PLANNING
========================================================= */

const tripPlanning = [
  {
    number: "01",
    icon: FileCheck2,
    title: "Medical Reports Review",
    text:
      "Share your recent medical reports, scans and treatment history before travelling so the medical team can review your case.",
  },
  {
    number: "02",
    icon: Plane,
    title: "Visa & Travel Planning",
    text:
      "Receive guidance for medical visa documentation and travel planning. Flight tickets are not included in treatment estimates.",
  },
  {
    number: "03",
    icon: Hotel,
    title: "Stay Arrangements",
    text:
      "Get assistance with accommodation options near the selected hospital based on your stay duration, needs and preferences.",
  },
  {
    number: "04",
    icon: Utensils,
    title: "Food & Daily Needs",
    text:
      "Receive practical guidance for meals, dietary requirements and everyday needs during treatment and recovery in India.",
  },
  {
    number: "05",
    icon: Languages,
    title: "Language Assistance",
    text:
      "Our coordination team can help reduce communication difficulties and support interactions during your medical journey.",
  },
];


/* =========================================================
   PATIENT SERVICES
========================================================= */

const patientServices = [
  {
    icon: HeartHandshake,
    title: "Dedicated Patient Coordinator",
    text:
      "A point of contact to help coordinate your journey from medical review through treatment and follow-up.",
  },
  {
    icon: Plane,
    title: "Airport & Local Coordination",
    text:
      "Assistance with airport pickup and local transportation planning for a smoother arrival and hospital journey.",
  },
  {
    icon: Stethoscope,
    title: "Hospital & Specialist Coordination",
    text:
      "Support in connecting with suitable hospitals and specialists according to your medical requirements.",
  },
  {
    icon: Hotel,
    title: "Accommodation Assistance",
    text:
      "Guidance in identifying suitable stay options for patients and accompanying family members.",
  },
  {
    icon: Languages,
    title: "Communication Assistance",
    text:
      "Practical communication support to help international patients navigate consultations and hospital processes.",
  },
  {
    icon: CircleDollarSign,
    title: "Treatment Estimate Support",
    text:
      "Coordination of available treatment information and estimates before you make your travel arrangements.",
  },
];


/* =========================================================
   REQUIRED DOCUMENTS
========================================================= */

const documents = [
  {
    icon: FileText,
    title: "Medical Records",
    items: [
      "Recent consultation notes and diagnosis reports.",
      "Blood tests, pathology reports and other relevant investigations.",
      "Previous treatment, surgery and medication information.",
    ],
  },
  {
    icon: FileCheck2,
    title: "Scans & Investigation Reports",
    items: [
      "Relevant MRI, CT, X-ray or other imaging reports.",
      "Digital copies of scans where available.",
      "Any specialist reports related to your current condition.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Passport & Medical Visa",
    items: [
      "A valid passport for the patient and accompanying attendant.",
      "Appropriate visa documentation based on applicable travel requirements.",
      "Keep digital and printed copies of important travel documents.",
    ],
  },
  {
    icon: Plane,
    title: "Travel Information",
    items: [
      "Confirmed travel dates once your medical plan is finalised.",
      "Arrival details when airport pickup or local coordination is required.",
      "Accommodation details if arrangements have already been made.",
    ],
  },
];


/* =========================================================
   MAIN PAGE
========================================================= */

export default function PlanYourTrip() {
  return (
    <main className="bg-white">
      <PageBanner />

      <TripPlanning />

      <PatientServices />
 
      <RequiredDocuments />

      <FaqSection />

      <PatientStories />

      <GetInTouch />
    </main>
  );
}


/* =========================================================
   BREADCRUMB / HERO
========================================================= */

function PageBanner() {
  return (
    <section className="bg-[#064B50]">
      <div
        className="
          mx-auto
          max-w-[1450px]
          px-5
          py-6
          text-center
          sm:px-7
          md:py-8
          lg:px-10
          lg:py-10
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            text-[13px]
            md:text-[14px]
          "
        >
          <Link
            to="/"
            className="
              text-white/90
              transition-colors
              hover:text-[#E6B956]
            "
          >
            Home
          </Link>

          <ChevronRight
            size={15}
            className="text-[#E6B956]"
          />

          <Link
            to="/international-patients"
            className="
              text-white/90
              transition-colors
              hover:text-[#E6B956]
            "
          >
            International Patients
          </Link>

          <ChevronRight
            size={15}
            className="text-[#E6B956]"
          />

          <span className="font-semibold text-white">
            Plan Your Trip
          </span>
        </div>

        <p
          className="
            mt-7
            text-[12px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#E6B956]
          "
        >
          International Patient Support
        </p>

        <h1
          className="
            mt-3
            text-[32px]
            font-semibold
            leading-tight
            text-white
            sm:text-[38px]
            md:text-[46px]
          "
        >
          Plan Your Trip
        </h1>

        <p
          className="
            mx-auto
            mt-5
            max-w-[760px]
            text-[14px]
            leading-7
            text-white/90
            md:text-[16px]
          "
        >
          Prepare for your medical journey to India
          with practical guidance for reports,
          travel, stay, treatment coordination and
          recovery support.
        </p>
      </div>
    </section>
  );
}


/* =========================================================
   TRIP PLANNING
========================================================= */

function TripPlanning() {
  return (
    <section className="bg-[#F7FAF9] py-16 md:py-20">
      <div
        className="
          mx-auto
          max-w-[1450px]
          px-5
          sm:px-7
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow="Prepare For Your Visit"
          title="Begin Your Journey: Trip Planning Essentials"
          text="A few important preparations can help make your healthcare journey smoother, from sharing your medical information to planning your arrival and stay in India."
        />

        <div
          className="
            relative
            mt-12
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            xl:grid-cols-5
          "
        >
          {/* Desktop connecting line */}

          <div
            className="
              absolute
              left-[8%]
              right-[8%]
              top-[27px]
              hidden
              border-t
              border-dashed
              border-[#C8942E]/40
              xl:block
            "
          />

          {tripPlanning.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="
                  relative
                  z-10
                  flex
                  flex-col
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-[54px]
                    w-[54px]
                    items-center
                    justify-center
                    rounded-full
                    border-[5px]
                    border-[#F7FAF9]
                    bg-[#C8942E]
                    text-[16px]
                    font-semibold
                    text-white
                    shadow-sm
                  "
                >
                  {item.number}
                </div>

                <div
                  className="
                    mt-4
                    flex
                    flex-1
                    flex-col
                    rounded-[20px]
                    border
                    border-[#DCE8E7]
                    bg-white
                    p-6
                    shadow-[0_8px_25px_rgba(6,75,80,0.06)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C8942E]/50
                    hover:shadow-[0_14px_32px_rgba(6,75,80,0.09)]
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
                    <Icon size={22} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-[16px]
                      font-semibold
                      leading-6
                      text-[#064B50]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[15px]
                      leading-6
                      text-[#263F41]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   PATIENT SERVICES SLIDER
========================================================= */

function PatientServices() {
  const [visibleCount, setVisibleCount] =
    useState(4);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1100) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    update();

    window.addEventListener("resize", update);

    return () =>
      window.removeEventListener(
        "resize",
        update
      );
  }, []);

  const shouldSlide =
    patientServices.length > visibleCount;

  const next = () => {
    if (!shouldSlide) return;

    setCurrentIndex(
      (current) =>
        (current + 1) %
        patientServices.length
    );
  };

  const previous = () => {
    if (!shouldSlide) return;

    setCurrentIndex(
      (current) =>
        (current -
          1 +
          patientServices.length) %
        patientServices.length
    );
  };

  useEffect(() => {
    if (!shouldSlide) return;

    const timer = setInterval(
      next,
      4500
    );

    return () => clearInterval(timer);
  }, [shouldSlide]);

  const visibleItems =
    shouldSlide
      ? Array.from(
          { length: visibleCount },
          (_, index) =>
            patientServices[
              (currentIndex + index) %
                patientServices.length
            ]
        )
      : patientServices;

  return (
    <section className="bg-white py-16 md:py-20">
      <div
        className="
          mx-auto
          max-w-[1450px]
          px-5
          sm:px-7
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow="Support Throughout Your Stay"
          title="Patient Services"
          text="Our international patient support is designed to make your healthcare journey easier to navigate, with practical assistance before arrival, during treatment and through recovery."
        />

        <div className="relative mt-11">
          {shouldSlide && (
            <SliderButton
              direction="left"
              onClick={previous}
            />
          )}

          <div
            className={`
              grid
              grid-cols-1
              gap-5
              ${
                visibleCount >= 2
                  ? "md:grid-cols-2"
                  : ""
              }
              ${
                visibleCount >= 4
                  ? "xl:grid-cols-4"
                  : ""
              }
            `}
          >
            {visibleItems.map(
              (item, position) => {
                const Icon = item.icon;

                return (
                  <article
                    key={`${item.title}-${position}`}
                    className="
                      group
                      min-h-[275px]
                      rounded-[20px]
                      border
                      border-[#DCE8E7]
                      bg-[#F7FAF9]
                      p-7
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#C8942E]/50
                      hover:shadow-[0_14px_32px_rgba(6,75,80,0.09)]
                    "
                  >
                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white
                        text-[#C8942E]
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:bg-[#064B50]
                        group-hover:text-white
                      "
                    >
                      <Icon size={24} />
                    </div>

                    <h3
                      className="
                        mt-6
                        text-[16px]
                        font-semibold
                        leading-6
                        text-[#064B50]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-[15px]
                        leading-6
                        text-[#263F41]
                      "
                    >
                      {item.text}
                    </p>
                  </article>
                );
              }
            )}
          </div>

          {shouldSlide && (
            <SliderButton
              direction="right"
              onClick={next}
            />
          )}
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   REQUIRED DOCUMENTS
========================================================= */

function RequiredDocuments() {
  return (
    <section className="bg-[#F7FAF9] py-16 md:py-20">
      <div
        className="
          mx-auto
          max-w-[1350px]
          px-5
          sm:px-7
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow="Prepare Before You Travel"
          title="Required Documents"
          text="Keeping your medical and travel information organised can help make your consultation, admission and treatment coordination smoother."
        />

        <div
          className="
            mt-11
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-2
          "
        >
          {documents.map((document) => {
            const Icon = document.icon;

            return (
              <article
                key={document.title}
                className="
                  rounded-[20px]
                  border
                  border-[#DCE8E7]
                  bg-white
                  p-6
                  shadow-[0_8px_25px_rgba(6,75,80,0.05)]
                  sm:p-7
                "
              >
                <div className="flex gap-4">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#EEF6F5]
                      text-[#C8942E]
                    "
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3
                      className="
                        text-[16px]
                        font-semibold
                        text-[#064B50]
                      "
                    >
                      {document.title}
                    </h3>

                    <div className="mt-4 space-y-3">
                      {document.items.map(
                        (item) => (
                          <div
                            key={item}
                            className="
                              flex
                              items-start
                              gap-3
                            "
                          >
                            <div
                              className="
                                mt-[3px]
                                flex
                                h-5
                                w-5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-[#EEF6F5]
                                text-[#C8942E]
                              "
                            >
                              <Check size={12} />
                            </div>

                            <p
                              className="
                                text-[15px]
                                leading-6
                                text-[#263F41]
                              "
                            >
                              {item}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="
            mt-6
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-[#C8942E]/30
            bg-[#FAF8F2]
            p-5
          "
        >
          <Globe2
            size={21}
            className="
              mt-0.5
              shrink-0
              text-[#C8942E]
            "
          />

          <p
            className="
              text-[15px]
              leading-6
              text-[#263F41]
            "
          >
            Document and visa requirements can
            vary depending on nationality,
            treatment and current regulations.
            Confirm applicable requirements
            before finalising your travel.
          </p>
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   FAQ
========================================================= */
function TripFaqItem({ faq, open, onClick }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#DCE8E7] bg-[#F7FAF9]">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-[14px] font-semibold leading-6 text-[#064B50] md:text-[15px]">
          {faq.question}
        </span>

        <ChevronDown
          size={18}
          className={`shrink-0 text-[#C8942E] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-[#DCE8E7] px-5 py-4">
          <p className="text-[15px] leading-6 text-[#263F41]">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}
// function FaqSection() {
//   const [openIndex, setOpenIndex] =
//     useState(0);
function FaqSection() {
  const {
    faqs,
    loading,
    error,
  } = useFaqs();

  const [openIndex, setOpenIndex] = useState(null);

  const leftFaqs = faqs.filter(
    (_, index) => index % 2 === 0
  );

  const rightFaqs = faqs.filter(
    (_, index) => index % 2 !== 0
  );


  return (
    <section className="bg-white py-16 md:py-20">
      <div
        className="
          mx-auto
          max-w-[1250px]
          px-5
          sm:px-7
          lg:px-10
        "
      >
        <SectionHeading
          eyebrow="Helpful Information"
          title="FAQ’s"
          text="Answers to common questions international patients may have while preparing for their medical journey."
        />

        {loading && (
  <p className="mt-10 text-center text-[#263F41]">
    Loading FAQs...
  </p>
)}

{error && (
  <p className="mt-10 text-center text-red-600">
    {error}
  </p>
)}

{!loading && !error && faqs.length === 0 && (
  <p className="mt-10 text-center text-[#263F41]">
    No published FAQs available.
  </p>
)}

<div className="mt-10 grid grid-cols-1 items-start gap-3 lg:grid-cols-2 lg:gap-8">

  <div className="space-y-3">
    {leftFaqs.map((faq) => {
      const index = faqs.indexOf(faq);
      const open = openIndex === index;

      return (
        <TripFaqItem
          key={faq.id}
          faq={faq}
          open={open}
          onClick={() =>
            setOpenIndex(open ? null : index)
          }
        />
      );
    })}
  </div>

  <div className="space-y-3">
    {rightFaqs.map((faq) => {
      const index = faqs.indexOf(faq);
      const open = openIndex === index;

      return (
        <TripFaqItem
          key={faq.id}
          faq={faq}
          open={open}
          onClick={() =>
            setOpenIndex(open ? null : index)
          }
        />
      );
    })}
  </div>

</div>
        {/* <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-x-8
            gap-y-3
            lg:grid-cols-2
          "
        >
          {faqs.map((faq, index) => {
            const open =
              openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#DCE8E7]
                  bg-[#F7FAF9]
                "
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      open ? -1 : index
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-4
                    text-left
                  "
                >
                  <span
                    className="
                      text-[14px]
                      font-semibold
                      leading-6
                      text-[#064B50]
                      md:text-[15px]
                    "
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`
                      shrink-0
                      text-[#C8942E]
                      transition-transform
                      duration-300
                      ${
                        open
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {open && (
                  <div
                    className="
                      border-t
                      border-[#DCE8E7]
                      px-5
                      py-4
                    "
                  >
                    <p
                      className="
                        text-[15px]
                        leading-6
                        text-[#263F41]
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}


/* =========================================================
   PATIENT STORIES
========================================================= */

function PatientStories() {
  const {
    stories: patientStories = [],
    loading: storiesLoading,
    error: storiesError,
  } = useOurStories();

  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);

  // Responsive cards count
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1200) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const shouldSlide = patientStories.length > visibleCount;

  const next = () => {
    if (!shouldSlide) return;

    setCurrentIndex((current) =>
      (current + 1) % patientStories.length
    );
  };

  const previous = () => {
    if (!shouldSlide) return;

    setCurrentIndex((current) =>
      (current - 1 + patientStories.length) %
      patientStories.length
    );
  };

  // Reset slider when API count changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [patientStories.length]);

  // Automatic sliding
  useEffect(() => {
    if (!shouldSlide || selectedStory) return;

    const timer = setInterval(() => {
      setCurrentIndex((current) =>
        (current + 1) % patientStories.length
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [shouldSlide, selectedStory, patientStories.length]);

  // Escape key and background scroll
  useEffect(() => {
    if (!selectedStory) return;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedStory(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedStory]);

  const visibleStories = patientStories.length
    ? Array.from(
        {
          length: Math.min(
            visibleCount,
            patientStories.length
          ),
        },
        (_, index) =>
          patientStories[
            (currentIndex + index) % patientStories.length
          ]
      )
    : [];

  return (
    <>
      <section className="bg-[#F7FAF9] py-16 md:py-20">
        <div className="mx-auto max-w-[1450px] px-5 sm:px-7 lg:px-10">
          <SectionHeading
            eyebrow="Real Experiences"
            title="Patient Stories"
            text="Hear about healthcare journeys involving consultation, treatment and recovery support."
          />

          <div className="relative mt-11">
            {shouldSlide && (
              <SliderButton
                direction="left"
                onClick={previous}
              />
            )}

            <div
              className={`
                grid grid-cols-1 gap-6
                ${visibleCount >= 2 ? "md:grid-cols-2" : ""}
                ${visibleCount >= 3 ? "xl:grid-cols-3" : ""}
              `}
            >
              {storiesLoading ? (
                <p className="col-span-full py-12 text-center text-[#263F41]">
                  Loading patient stories...
                </p>
              ) : storiesError ? (
                <p className="col-span-full py-12 text-center text-red-600">
                  {storiesError}
                </p>
              ) : visibleStories.length === 0 ? (
                <p className="col-span-full py-12 text-center text-[#263F41]">
                  No patient stories available.
                </p>
              ) : (
                visibleStories.map((story, position) => (
                  <button
                    key={`${story.id}-${position}`}
                    type="button"
                    onClick={() => setSelectedStory(story)}
                    className="
                      group overflow-hidden rounded-[20px]
                      border border-[#DCE8E7] bg-white
                      text-left
                      shadow-[0_8px_25px_rgba(6,75,80,0.05)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-[#C8942E]/50
                    "
                  >
                    {/* VIDEO THUMBNAIL */}
                    <div className="relative h-[240px] overflow-hidden">
                      <img
                        src={story.image || story.thumbnail}
                        alt={story.title}
                        className="
                          h-full w-full object-cover
                          transition-transform duration-500
                          group-hover:scale-105
                        "
                      />

                      <div
                        className="
                          absolute inset-0
                          bg-gradient-to-t
                          from-[#043F43]/80
                          via-[#043F43]/10
                          to-transparent
                        "
                      />

                      <div
                        className="
                          absolute left-1/2 top-1/2
                          flex h-14 w-14
                          -translate-x-1/2 -translate-y-1/2
                          items-center justify-center
                          rounded-full border border-white/70
                          bg-white/20 text-white
                          backdrop-blur-sm
                        "
                      >
                        <Play size={20} fill="currentColor" />
                      </div>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="p-6">
                      {/* SPECIALITY */}
                      <p
                        className="
                          mb-3 text-[13px] font-bold
                          uppercase tracking-[0.08em]
                          text-[#C8942E]
                        "
                      >
                        {story.category || "Our Stories"}
                      </p>

                      {/* TITLE */}
                      <h3
                        className="
                          text-[16px] font-semibold
                          leading-6 text-[#064B50]
                        "
                      >
                        {story.title}
                      </h3>

                      {/* DESCRIPTION */}
                      {(story.description || story.text) && (
                        <p className="mt-3 text-[15px] leading-6 text-[#263F41]">
                          {story.description || story.text}
                        </p>
                      )}

                      {/* WATCH STORY */}
                      <span
                        className="
                          mt-4 inline-flex items-center gap-2
                          text-[13px] font-semibold
                          text-[#229885]
                        "
                      >
                        <Play size={13} fill="currentColor" />
                        Watch Story
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>

            {shouldSlide && (
              <SliderButton
                direction="right"
                onClick={next}
              />
            )}
          </div>

          {/* PAGINATION DOTS */}
          {!storiesLoading &&
            !storiesError &&
            shouldSlide && (
              <div className="mt-7 flex justify-center gap-2">
                {patientStories.map((story, index) => (
                  <button
                    key={story.id ?? index}
                    type="button"
                    aria-label={`Go to story ${index + 1}`}
                    onClick={() => setCurrentIndex(index)}
                    className={`
                      h-2 rounded-full transition-all
                      ${
                        currentIndex === index
                          ? "w-8 bg-[#C8942E]"
                          : "w-2 bg-[#D3E3E2]"
                      }
                    `}
                  />
                ))}
              </div>
            )}
        </div>
      </section>

      {/* EXISTING VIDEO POPUP */}
      {selectedStory && (
        <VideoModal
          story={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </>
  );
}

// function PatientStories() {
//   const [visibleCount, setVisibleCount] =
//     useState(3);

//   const [currentIndex, setCurrentIndex] =
//     useState(0);

//   const [selectedStory, setSelectedStory] =
//     useState(null);

//   useEffect(() => {
//     const update = () => {
//       if (window.innerWidth < 768) {
//         setVisibleCount(1);
//       } else if (window.innerWidth < 1200) {
//         setVisibleCount(2);
//       } else {
//         setVisibleCount(3);
//       }
//     };

//     update();

//     window.addEventListener("resize", update);

//     return () =>
//       window.removeEventListener(
//         "resize",
//         update
//       );
//   }, []);

//   const next = () =>
//     setCurrentIndex(
//       (current) =>
//         (current + 1) %
//         patientStories.length
//     );

//   const previous = () =>
//     setCurrentIndex(
//       (current) =>
//         (current -
//           1 +
//           patientStories.length) %
//         patientStories.length
//     );

//   useEffect(() => {
//     if (selectedStory) return;

//     const timer = setInterval(
//       next,
//       4500
//     );

//     return () => clearInterval(timer);
//   }, [selectedStory]);

//   useEffect(() => {
//     if (!selectedStory) return;

//     const closeOnEscape = (event) => {
//       if (event.key === "Escape") {
//         setSelectedStory(null);
//       }
//     };

//     document.addEventListener(
//       "keydown",
//       closeOnEscape
//     );

//     document.body.style.overflow =
//       "hidden";

//     return () => {
//       document.removeEventListener(
//         "keydown",
//         closeOnEscape
//       );

//       document.body.style.overflow =
//         "";
//     };
//   }, [selectedStory]);

//   const visibleStories =
//     Array.from(
//       { length: visibleCount },
//       (_, index) =>
//         patientStories[
//           (currentIndex + index) %
//             patientStories.length
//         ]
//     );

//   return (
//     <>
//       <section className="bg-[#F7FAF9] py-16 md:py-20">
//         <div
//           className="
//             mx-auto
//             max-w-[1450px]
//             px-5
//             sm:px-7
//             lg:px-10
//           "
//         >
//           <SectionHeading
//             eyebrow="Real Experiences"
//             title="Patient Stories"
//             text="Hear about healthcare journeys involving consultation, treatment and recovery support."
//           />

//           <div className="relative mt-11">
//             <SliderButton
//               direction="left"
//               onClick={previous}
//             />

//             <div
//               className={`
//                 grid
//                 grid-cols-1
//                 gap-6
//                 ${
//                   visibleCount >= 2
//                     ? "md:grid-cols-2"
//                     : ""
//                 }
//                 ${
//                   visibleCount >= 3
//                     ? "xl:grid-cols-3"
//                     : ""
//                 }
//               `}
//             >
//               {visibleStories.map(
//                 (story, position) => (
//                   <button
//                     key={`${story.id}-${position}`}
//                     type="button"
//                     onClick={() =>
//                       setSelectedStory(
//                         story
//                       )
//                     }
//                     className="
//                       group
//                       overflow-hidden
//                       rounded-[20px]
//                       border
//                       border-[#DCE8E7]
//                       bg-white
//                       text-left
//                       shadow-[0_8px_25px_rgba(6,75,80,0.05)]
//                       transition-all
//                       duration-300
//                       hover:-translate-y-1
//                       hover:border-[#C8942E]/50
//                     "
//                   >
//                     <div
//                       className="
//                         relative
//                         h-[240px]
//                         overflow-hidden
//                       "
//                     >
//                       <img
//                         src={story.image}
//                         alt={story.title}
//                         className="
//                           h-full
//                           w-full
//                           object-cover
//                           transition-transform
//                           duration-500
//                           group-hover:scale-105
//                         "
//                       />

//                       <div
//                         className="
//                           absolute
//                           inset-0
//                           bg-gradient-to-t
//                           from-[#043F43]/80
//                           via-[#043F43]/10
//                           to-transparent
//                         "
//                       />

//                       <div
//                         className="
//                           absolute
//                           left-1/2
//                           top-1/2
//                           flex
//                           h-14
//                           w-14
//                           -translate-x-1/2
//                           -translate-y-1/2
//                           items-center
//                           justify-center
//                           rounded-full
//                           border
//                           border-white/70
//                           bg-white/20
//                           text-white
//                           backdrop-blur-sm
//                         "
//                       >
//                         <Play
//                           size={20}
//                           fill="currentColor"
//                         />
//                       </div>
//                     </div>

//                     <div className="p-6">
//                       <h3
//                         className="
//                           text-[16px]
//                           font-semibold
//                           leading-6
//                           text-[#064B50]
//                         "
//                       >
//                         {story.title}
//                       </h3>

//                       <p
//                         className="
//                           mt-3
//                           text-[15px]
//                           leading-6
//                           text-[#263F41]
//                         "
//                       >
//                         {story.text}
//                       </p>

//                       <span
//                         className="
//                           mt-4
//                           inline-flex
//                           items-center
//                           gap-2
//                           text-[13px]
//                           font-semibold
//                           text-[#C8942E]
//                         "
//                       >
//                         <Play
//                           size={13}
//                           fill="currentColor"
//                         />

//                         Watch Story
//                       </span>
//                     </div>
//                   </button>
//                 )
//               )}
//             </div>

//             <SliderButton
//               direction="right"
//               onClick={next}
//             />
//           </div>

//           <div
//             className="
//               mt-7
//               flex
//               justify-center
//               gap-2
//             "
//           >
//             {patientStories.map(
//               (story, index) => (
//                 <button
//                   key={story.id}
//                   type="button"
//                   onClick={() =>
//                     setCurrentIndex(index)
//                   }
//                   className={`
//                     h-2
//                     rounded-full
//                     transition-all
//                     ${
//                       currentIndex === index
//                         ? "w-8 bg-[#C8942E]"
//                         : "w-2 bg-[#D3E3E2]"
//                     }
//                   `}
//                 />
//               )
//             )}
//           </div>
//         </div>
//       </section>

//       {selectedStory && (
//         <VideoModal
//           story={selectedStory}
//           onClose={() =>
//             setSelectedStory(null)
//           }
//         />
//       )}
//     </>
//   );
// }


/* =========================================================
   VIDEO MODAL
========================================================= */

function VideoModal({
  story,
  onClose,
}) {
  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-black/75
        px-4
        py-8
        backdrop-blur-[3px]
      "
    >
      <div
        onClick={(event) =>
          event.stopPropagation()
        }
        className="
          relative
          w-full
          max-w-[950px]
          overflow-hidden
          rounded-[20px]
          bg-white
          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-3
            top-3
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#064B50]
            shadow-lg
            transition-colors
            hover:bg-[#C8942E]
            hover:text-white
          "
        >
          <X size={20} />
        </button>

        <div
          className="
            relative
            aspect-video
            w-full
            bg-black
          "
        >
          <iframe
            // src={`https://www.youtube.com/embed/${story.youtubeId}?autoplay=1&rel=0`}
            src={`https://www.youtube.com/embed/${
              story.youtubeId || story.videoId
            }?autoplay=1&rel=0`}
            title={story.title}
            className="
              absolute
              inset-0
              h-full
              w-full
            "
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share
            "
            allowFullScreen
          />
        </div>

        <div className="px-5 py-4">
          <h3
            className="
              text-[16px]
              font-semibold
              text-[#064B50]
            "
          >
            {story.title}
          </h3>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   GET IN TOUCH
========================================================= */

function GetInTouch() {
  return (
    <section
      className="
        bg-[#064B50]
        py-16
        md:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1200px]
          px-5
          text-center
          sm:px-7
          lg:px-10
        "
      >
        <p
          className="
            text-[12px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#E6B956]
          "
        >
          Need Assistance?
        </p>

        <h2
          className="
            mt-3
            text-[30px]
            font-semibold
            text-white
            md:text-[40px]
          "
        >
          Get In Touch With Us
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-[700px]
            text-[14px]
            leading-7
            text-white/90
            md:text-[16px]
          "
        >
          Our international patient support
          team can help you understand the next
          steps for medical review, treatment
          coordination and travel planning.
        </p>

        <div
          className="
            mx-auto
            mt-9
            grid
            max-w-[1000px]
            grid-cols-1
            gap-4
            md:grid-cols-3
          "
        >
          <ContactCard
            icon={Phone}
            title="Call Us"
            text="+91-9885106619"
            href="tel:+919885106619"
          />

          <ContactCard
            icon={Mail}
            title="Send An Enquiry"
            text="Contact Our Team"
            href="/contact"
          />

          <ContactCard
            icon={MessageCircleMore}
            title="Patient Support"
            text="Plan Your Medical Journey"
            href="/contact"
          />
        </div>
      </div>
    </section>
  );
}


function ContactCard({
  icon: Icon,
  title,
  text,
  href,
}) {
  const card = (
    <div
      className="
        flex
        h-full
        items-center
        gap-4
        rounded-2xl
        border
        border-white/20
        bg-white/10
        p-5
        text-left
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-[#E6B956]/60
        hover:bg-white/15
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-white
          text-[#C8942E]
        "
      >
        <Icon size={20} />
      </div>

      <div>
        <p
          className="
            text-[13px]
            font-medium
            text-[#E6B956]
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            text-[14px]
            font-semibold
            text-white
          "
        >
          {text}
        </p>
      </div>
    </div>
  );

  if (href.startsWith("/")) {
    return <Link to={href}>{card}</Link>;
  }

  return <a href={href}>{card}</a>;
}


/* =========================================================
   COMMON HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  text,
}) {
  return (
    <div
      className="
        mx-auto
        max-w-[820px]
        text-center
      "
    >
      <p
        className="
          text-[12px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-[#C8942E]
        "
      >
        {eyebrow}
      </p>

      <h2
        className="
          mt-3
          text-[28px]
          font-semibold
          leading-tight
          text-[#064B50]
          sm:text-[32px]
          md:text-[40px]
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-4
          max-w-[760px]
          text-[14px]
          leading-7
          text-[#263F41]
          md:text-[16px]
        "
      >
        {text}
      </p>
    </div>
  );
}


/* =========================================================
   COMMON SLIDER BUTTON
========================================================= */

function SliderButton({
  direction,
  onClick,
}) {
  const left =
    direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        left
          ? "Previous"
          : "Next"
      }
      className={`
        absolute
        top-1/2
        z-30
        flex
        h-11
        w-11
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-[#C8942E]
        shadow-[0_8px_22px_rgba(6,75,80,0.12)]
        transition-all
        duration-300

        ${
          left
            ? `
              -left-3
              bg-white
              text-[#064B50]
              hover:bg-[#064B50]
              hover:text-white
              md:-left-5
            `
            : `
              -right-3
              bg-[#064B50]
              text-white
              hover:bg-[#C8942E]
              md:-right-5
            `
        }
      `}
    >
      {left ? (
        <ChevronLeft size={20} />
      ) : (
        <ChevronRight size={20} />
      )}
    </button>
  );
}