import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Mail,
  MapPin,
  Phone,
  Play,
  Upload,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";
import useOurStories from "../hooks/useOurStories";


/* =========================================================
   PATIENT STORIES
   ---------------------------------------------------------
   youtubeId lo YouTube video ID pettandi.

   Example:
   https://www.youtube.com/watch?v=ABC123XYZ

   youtubeId = "ABC123XYZ"
========================================================= */

// const patientStories = [
//   {
//     id: 1,

//     youtubeId: "YOUR_VIDEO_ID_1",

//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",

//     title:
//       "Healthcare Journey in India",

//     text:
//       "An international healthcare experience from initial consultation through treatment and recovery.",
//   },

//   {
//     id: 2,

//     youtubeId: "YOUR_VIDEO_ID_2",

//     image:
//       "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80",

//     title:
//       "Surgery & Recovery Experience",

//     text:
//       "A patient journey through specialist consultation, planned treatment and coordinated recovery.",
//   },

//   {
//     id: 3,

//     youtubeId: "YOUR_VIDEO_ID_3",

//     image:
//       "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=80",

//     title:
//       "International Care Experience",

//     text:
//       "A patient shares their experience of receiving coordinated healthcare assistance during their visit to India.",
//   },

//   {
//     id: 4,

//     youtubeId: "YOUR_VIDEO_ID_4",

//     image:
//       "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1000&q=80",

//     title:
//       "Treatment Support Experience",

//     text:
//       "A coordinated medical journey with hospital support, treatment guidance and recovery assistance.",
//   },

//   {
//     id: 5,

//     youtubeId: "YOUR_VIDEO_ID_5",

//     image:
//       "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=1000&q=80",

//     title:
//       "Recovery & Follow-Up Journey",

//     text:
//       "Support throughout treatment, recovery planning and follow-up care for an international patient.",
//   },
// ];


/* =========================================================
   MAIN PAGE
========================================================= */

export default function RequestEstimate() {
  return (
    <main className="bg-[#F7FAF9]">

      <RequestEstimateBanner />

      <EstimateForm />

      <PatientStoriesSlider />

      <GetInTouch />

    </main>
  );
}


/* =========================================================
   PAGE BANNER
========================================================= */

function RequestEstimateBanner() {
  return (
    <section
      className="
        bg-[#064B50]

        px-5
        py-12

        text-center

        sm:px-7
        md:py-14
        lg:py-16
      "
    >

      {/* BREADCRUMB */}

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
            text-white
            transition-colors
            duration-300
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
            text-white
            transition-colors
            duration-300
            hover:text-[#E6B956]
          "
        >
          International Patients
        </Link>

        <ChevronRight
          size={15}
          className="text-[#E6B956]"
        />

        <span
          className="
            font-semibold
            text-white
          "
        >
          Request An Estimate
        </span>
      </div>


      {/* HEADING */}

      <h1
        className="
          mt-7

          text-[32px]
          font-semibold
          leading-tight

          text-white

          sm:text-[38px]
          md:text-[46px]
          lg:text-[50px]
        "
      >
        Request An Estimate
      </h1>


      {/* DESCRIPTION */}

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
        Share your medical requirements with
        our team and receive coordinated
        guidance for your treatment journey
        in India.
      </p>

    </section>
  );
}


/* =========================================================
   ESTIMATE FORM
========================================================= */

function EstimateForm() {

  const handleSubmit = (event) => {
    event.preventDefault();

    // Backend/API can be connected later.
  };


  return (
    <section
      className="
        bg-[#F7FAF9]

        py-16
        md:py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-[1250px]

          px-5
          sm:px-7
          lg:px-10
        "
      >

        {/* ===============================================
            HEADING
        =============================================== */}

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
            Personalised Estimate
          </p>


          <h2
            className="
              mt-3

              text-[30px]
              font-semibold
              leading-tight

              text-[#064B50]

              md:text-[40px]
            "
          >
            Fill Out The Form To Get An Estimate
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
            Share your medical details and
            requirements with us. Our team will
            review your information and help
            coordinate an appropriate treatment
            estimate and next steps.
          </p>
        </div>


        {/* ===============================================
            FORM CARD
        =============================================== */}

        <form
          onSubmit={handleSubmit}

          className="
            mt-10

            rounded-[24px]

            border
            border-[#D7E5E3]

            bg-white

            p-6

            shadow-[0_12px_35px_rgba(6,75,80,0.07)]

            sm:p-8
            md:p-9
            lg:p-11
          "
        >

          {/* FORM GRID */}

          <div
            className="
              grid
              grid-cols-1

              gap-x-7
              gap-y-6

              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            <FormField
              label="First Name"
              required
            >
              <input
                type="text"
                required
                placeholder="Enter your first name"
                className={inputClasses}
              />
            </FormField>


            <FormField
              label="Last Name"
              required
            >
              <input
                type="text"
                required
                placeholder="Enter your last name"
                className={inputClasses}
              />
            </FormField>


            <FormField
              label="Email"
              required
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className={inputClasses}
              />
            </FormField>


            <FormField
              label="Mobile Number"
              required
            >
              <input
                type="tel"
                required
                placeholder="Enter your mobile number"
                className={inputClasses}
              />
            </FormField>


            <FormField label="Country">
              <select
                defaultValue=""
                className={inputClasses}
              >
                <option
                  value=""
                  disabled
                >
                  Select Country
                </option>

                <option value="United States">
                  United States
                </option>

                <option value="United Kingdom">
                  United Kingdom
                </option>

                <option value="UAE">
                  United Arab Emirates
                </option>

                <option value="Nigeria">
                  Nigeria
                </option>

                <option value="Kenya">
                  Kenya
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </FormField>


            <FormField
              label="Department / Speciality"
            >
              <select
                defaultValue=""
                className={inputClasses}
              >
                <option
                  value=""
                  disabled
                >
                  Select Speciality
                </option>

                <option value="Orthopaedics">
                  Orthopaedics
                </option>

                <option value="Cancer Care">
                  Cancer Care
                </option>

                <option value="Neurosciences">
                  Neurosciences
                </option>

                <option value="Weight Loss Programs">
                  Weight Loss Programs
                </option>

                <option value="Cardiac Care">
                  Cardiac Care
                </option>

                <option value="Gastrosciences">
                  Gastrosciences
                </option>

                <option value="Other">
                  Other
                </option>
              </select>
            </FormField>

          </div>


          {/* =============================================
              MESSAGE
          ============================================= */}

          <div className="mt-7">

            <label
              className="
                mb-2
                block

                text-[14px]
                font-semibold

                text-[#064B50]

                md:text-[15px]
              "
            >
              Message
            </label>


            <textarea
              rows={5}

              placeholder="Enter your message here"

              className="
                w-full

                resize-none

                rounded-xl

                border
                border-[#C7DAD8]

                bg-[#F7FAF9]

                px-4
                py-3

                text-[14px]
                text-[#263F41]

                outline-none

                transition-all
                duration-300

                placeholder:text-[#7A8989]

                hover:border-[#A9C7C4]

                focus:border-[#C8942E]
                focus:bg-white

                focus:ring-4
                focus:ring-[#C8942E]/10

                md:text-[15px]
              "
            />

          </div>


          {/* =============================================
              MEDICAL REPORTS
          ============================================= */}

          <div className="mt-7">

            <label
              className="
                mb-2
                block

                text-[14px]
                font-semibold

                text-[#064B50]

                md:text-[15px]
              "
            >
              Attach Medical Reports

              <span className="text-[#C8942E]">
                *
              </span>
            </label>


            <label
              className="
                flex

                min-h-[88px]

                cursor-pointer

                items-center
                gap-4

                rounded-xl

                border
                border-dashed
                border-[#AFCBC8]

                bg-[#F7FAF9]

                px-5
                py-4

                transition-all
                duration-300

                hover:border-[#C8942E]
                hover:bg-[#FAF8F2]
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

                  border
                  border-[#D4E5E3]

                  bg-white

                  text-[#C8942E]
                "
              >
                <Upload size={21} />
              </div>


              <div>
                <p
                  className="
                    text-[14px]
                    font-semibold

                    text-[#064B50]
                  "
                >
                  Upload your medical reports
                </p>

                <p
                  className="
                    mt-1

                    text-[13px]

                    text-[#263F41]
                  "
                >
                  PDF, DOC or DOCX files
                </p>
              </div>


              <input
                type="file"

                accept=".pdf,.doc,.docx"

                required

                className="hidden"
              />

            </label>
          </div>


          {/* =============================================
              SUBMIT
          ============================================= */}

          <div
            className="
              mt-8

              flex
              justify-center
            "
          >
            <button
              type="submit"

              className="
                inline-flex

                min-w-[190px]

                items-center
                justify-center
                gap-2

                rounded-xl

                bg-[#064B50]

                px-7
                py-3.5

                text-[14px]
                font-semibold

                text-white

                shadow-[0_8px_22px_rgba(6,75,80,0.16)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#C8942E]
              "
            >
              <FileText size={17} />

              Submit Request
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}


/* =========================================================
   INPUT TAILWIND CLASSES
========================================================= */

const inputClasses = `
  w-full
  min-h-[48px]

  rounded-xl

  border
  border-[#C7DAD8]

  bg-[#F7FAF9]

  px-4

  text-[14px]
  text-[#263F41]

  outline-none

  transition-all
  duration-300

  placeholder:text-[#7A8989]

  hover:border-[#A9C7C4]

  focus:border-[#C8942E]
  focus:bg-white

  focus:ring-4
  focus:ring-[#C8942E]/10

  md:text-[15px]
`;


/* =========================================================
   FORM FIELD
========================================================= */

function FormField({
  label,
  required = false,
  children,
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block

          text-[14px]
          font-semibold

          text-[#064B50]

          md:text-[15px]
        "
      >
        {label}

        {required && (
          <span className="text-[#C8942E]">
            *
          </span>
        )}
      </label>

      {children}
    </div>
  );
}


/* =========================================================
   PATIENT STORIES SLIDER
========================================================= */

function PatientStoriesSlider() {

  const {
    stories: patientStories = [],
    loading: storiesLoading,
    error: storiesError,
  } = useOurStories();
  const [visibleCount, setVisibleCount] =
    useState(3);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [selectedStory, setSelectedStory] =
    useState(null);


  /* =====================================================
     RESPONSIVE

     Mobile  = 1
     Tablet  = 2
     Desktop = 3
  ===================================================== */

  useEffect(() => {

    const updateVisibleCount = () => {

      const width =
        window.innerWidth;


      if (width < 768) {

        setVisibleCount(1);

      } else if (width < 1200) {

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


    return () => {

      window.removeEventListener(
        "resize",
        updateVisibleCount
      );

    };

  }, []);


  /* =====================================================
     RESET INDEX
  ===================================================== */

  // useEffect(() => {
  //   setCurrentIndex(0);
  // }, [visibleCount]);
  useEffect(() => {
  setCurrentIndex(0);
}, [visibleCount, patientStories.length]);


  const shouldSlide =
    patientStories.length >
    visibleCount;


  /* =====================================================
     NEXT
  ===================================================== */

  const nextSlide = () => {

    if (!shouldSlide) return;


    setCurrentIndex(
      (previousIndex) =>
        (
          previousIndex + 1
        ) %
        patientStories.length
    );

  };


  /* =====================================================
     PREVIOUS
  ===================================================== */

  const previousSlide = () => {

    if (!shouldSlide) return;


    setCurrentIndex(
      (previousIndex) =>
        (
          previousIndex -
          1 +
          patientStories.length
        ) %
        patientStories.length
    );

  };


  /* =====================================================
     AUTOPLAY

     Modal open unte autoplay stop.
  ===================================================== */

  useEffect(() => {

    if (
      !shouldSlide ||
      selectedStory
    ) {
      return;
    }


    const timer =
      setInterval(() => {

        setCurrentIndex(
          (previousIndex) =>
            (
              previousIndex + 1
            ) %
            patientStories.length
        );

      }, 4500);


    return () => {
      clearInterval(timer);
    };

  }, [
    shouldSlide,
    selectedStory,
    patientStories.length,
  ]);


  /* =====================================================
     ESC CLOSE MODAL
  ===================================================== */

  useEffect(() => {

    if (!selectedStory) {
      return;
    }


    const handleEscape = (event) => {

      if (event.key === "Escape") {

        setSelectedStory(null);

      }

    };


    document.addEventListener(
      "keydown",
      handleEscape
    );


    document.body.style.overflow =
      "hidden";


    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );


      document.body.style.overflow =
        "";

    };

  }, [selectedStory]);


  /* =====================================================
     CIRCULAR ITEMS
  ===================================================== */

  const numberOfCards =
    Math.min(
      visibleCount,
      patientStories.length
    );


  const visibleStories =
    shouldSlide

      ? Array.from(
          {
            length: numberOfCards,
          },

          (_, index) =>
            patientStories[
              (
                currentIndex +
                index
              ) %
              patientStories.length
            ]
        )

      : patientStories;


  return (
    <>
      <section
        className="
          bg-[#F7FAF9]

          py-16
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1450px]

            px-5
            sm:px-7
            lg:px-10
          "
        >

          {/* =============================================
              HEADING
          ============================================= */}

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
              Real Experiences
            </p>


            <h2
              className="
                mt-3

                text-[30px]
                font-semibold

                text-[#064B50]

                md:text-[40px]
              "
            >
              Patient Stories
            </h2>


            <p
              className="
                mx-auto
                mt-4

                max-w-[720px]

                text-[14px]
                leading-7

                text-[#263F41]

                md:text-[16px]
              "
            >
              Hear from patients about their
              healthcare journey, treatment
              experience and recovery with
              coordinated medical support.
            </p>

          </div>


          {/* =============================================
              SLIDER
          ============================================= */}

          <div
            className="
              relative
              mt-11
            "
          >

            {/* LEFT ARROW */}

            {shouldSlide && (
              <button
                type="button"

                onClick={previousSlide}

                aria-label="Previous patient stories"

                className="
                  absolute

                  left-[-10px]
                  top-1/2
                  z-30

                  flex
                  h-12
                  w-12

                  -translate-y-1/2

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#C8942E]

                  bg-white

                  text-[#064B50]

                  shadow-[0_8px_22px_rgba(6,75,80,0.12)]

                  transition-all
                  duration-300

                  hover:bg-[#064B50]
                  hover:text-white

                  md:left-[-18px]
                "
              >
                <ChevronLeft size={21} />
              </button>
            )}


            {/* CARDS */}

            <div
              className={`
                grid
                grid-cols-1
                gap-6

                ${
                  visibleCount >= 2
                    ? "md:grid-cols-2"
                    : ""
                }

                ${
                  visibleCount >= 3
                    ? "xl:grid-cols-3"
                    : ""
                }
              `}
            >
              {/* {visibleStories.map(
                (
                  story,
                  position
                ) => (
                  <PatientStoryCard

                    key={`${story.id}-${position}`}

                    story={story}

                    onWatch={() =>
                      setSelectedStory(
                        story
                      )
                    }
                  />
                )
              )} */}
              {storiesLoading ? (
  <p className="col-span-full py-12 text-center text-[#263F41]">
    Loading patient stories...
  </p>
) : storiesError ? (
  <p className="col-span-full py-12 text-center text-red-600">
    {String(storiesError?.message || storiesError)}
  </p>
) : visibleStories.length === 0 ? (
  <p className="col-span-full py-12 text-center text-[#263F41]">
    No patient stories available.
  </p>
) : (
  visibleStories.map((story, position) => (
    <PatientStoryCard
      key={`${story.id}-${position}`}
      story={story}
      onWatch={() => setSelectedStory(story)}
    />
  ))
)}
            </div>


            {/* RIGHT ARROW */}

            {shouldSlide && (
              <button
                type="button"

                onClick={nextSlide}

                aria-label="Next patient stories"

                className="
                  absolute

                  right-[-10px]
                  top-1/2
                  z-30

                  flex
                  h-12
                  w-12

                  -translate-y-1/2

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#C8942E]

                  bg-[#064B50]

                  text-white

                  shadow-[0_8px_22px_rgba(6,75,80,0.15)]

                  transition-all
                  duration-300

                  hover:bg-[#C8942E]

                  md:right-[-18px]
                "
              >
                <ChevronRight size={21} />
              </button>
            )}

          </div>


          {/* =============================================
              DOTS
          ============================================= */}

          {shouldSlide && (
            <div
              className="
                mt-7

                flex
                items-center
                justify-center
                gap-2
              "
            >
              {patientStories.map(
                (
                  story,
                  index
                ) => (
                  <button
                    key={story.id}

                    type="button"

                    onClick={() =>
                      setCurrentIndex(
                        index
                      )
                    }

                    aria-label={`Patient story ${
                      index + 1
                    }`}

                    className={`
                      h-2

                      rounded-full

                      transition-all
                      duration-300

                      ${
                        currentIndex ===
                        index

                          ? "w-8 bg-[#C8942E]"

                          : "w-2 bg-[#D3E3E2] hover:bg-[#064B50]"
                      }
                    `}
                  />
                )
              )}
            </div>
          )}

        </div>
      </section>


      {/* =================================================
          YOUTUBE VIDEO POPUP
      ================================================= */}

      {selectedStory && (

        <VideoModal

          story={selectedStory}

          onClose={() =>
            setSelectedStory(null)
          }

        />

      )}
    </>
  );
}


/* =========================================================
   PATIENT STORY CARD
========================================================= */

function PatientStoryCard({
  story,
  onWatch,
}) {

  return (
    <article
      onClick={onWatch}

      className="
        group

        cursor-pointer

        overflow-hidden

        rounded-[20px]

        border
        border-[#DCE8E7]

        bg-white

        shadow-[0_10px_30px_rgba(6,75,80,0.06)]

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-[#C8942E]/50

        hover:shadow-[0_16px_38px_rgba(6,75,80,0.10)]
      "
    >

      {/* IMAGE */}

      <div
        className="
          relative

          h-[245px]

          overflow-hidden

          sm:h-[260px]
        "
      >

        <img
          // src={story.image}
          src={story.image || story.thumbnail}
          alt={story.title}

          className="
            h-full
            w-full

            object-cover

            transition-transform
            duration-500

            group-hover:scale-105
          "
        />


        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-[#043F43]/75
            via-[#043F43]/10
            to-transparent
          "
        />


        {/* LABEL */}

        <div
          className="
            absolute
            left-4
            top-4

            rounded-full

            bg-white/95

            px-4
            py-2

            text-[10px]
            font-semibold
            uppercase
            tracking-[0.12em]

            text-[#064B50]
          "
        >
          Patient Experience
        </div>


        {/* PLAY */}

        <button
          type="button"

          onClick={(event) => {

            event.stopPropagation();

            onWatch();

          }}

          aria-label="Watch patient story"

          className="
            absolute
            left-1/2
            top-1/2

            flex
            h-14
            w-14

            -translate-x-1/2
            -translate-y-1/2

            items-center
            justify-center

            rounded-full

            border
            border-white/70

            bg-white/20

            text-white

            backdrop-blur-sm

            transition-all
            duration-300

            hover:scale-110
            hover:bg-[#C8942E]
          "
        >
          <Play
            size={21}
            fill="currentColor"
          />
        </button>

      </div>


      {/* CONTENT */}

      <div className="p-6">
  <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#C8942E]">
    {story.category || "Our Stories"}
  </p>
        <h3
          className="
            text-[16px]
            font-semibold
            leading-6

            text-[#064B50]
          "
        >
          {story.title}
        </h3>


        <p
          className="
            mt-3

            text-[14px]
            leading-6

            text-[#263F41]

            md:text-[16px]
            md:leading-7
          "
        >
          {/* {story.text} */}
          {story.description || story.text || ""}
        </p>


        <button
          type="button"

          onClick={(event) => {

            event.stopPropagation();

            onWatch();

          }}

          className="
            mt-4

            inline-flex
            items-center
            gap-2

            text-[13px]
            font-semibold

            text-[#C8942E]

            transition-colors
            duration-300

            hover:text-[#064B50]
          "
        >
          <Play
            size={14}
            fill="currentColor"
          />

          Watch Story
        </button>

      </div>

    </article>
  );
}


/* =========================================================
   YOUTUBE VIDEO MODAL
========================================================= */

function VideoModal({
  story,
  onClose,
}) {

  return (
    <div
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

      onClick={onClose}
    >

      {/* MODAL */}

      <div
        className="
          relative

          w-full
          max-w-[950px]

          overflow-hidden

          rounded-[20px]

          border
          border-white/10

          bg-[#043F43]

          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "

        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* CLOSE */}

        <button
          type="button"

          onClick={onClose}

          aria-label="Close video"

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

            transition-all
            duration-300

            hover:bg-[#C8942E]
            hover:text-white
          "
        >
          <X size={20} />
        </button>


        {/* VIDEO */}

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


        {/* VIDEO TITLE */}

        <div
          className="
            bg-white

            px-5
            py-4

            sm:px-6
          "
        >
          <h3
            className="
              pr-10

              text-[16px]
              font-semibold

              text-[#064B50]

              md:text-[18px]
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
        relative

        overflow-hidden

        bg-[#064B50]
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          absolute
          inset-0
        "
      >
        <img
          src="/images/contact/contact-support.jpg"

          alt="Patient support"

          className="
            h-full
            w-full

            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-[#043F43]/85
          "
        />
      </div>


      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1100px]

          px-5
          py-16

          text-center

          sm:px-7
          md:py-20
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
          We're Here To Help
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

            max-w-[680px]

            text-[14px]
            leading-7

            text-white/90

            md:text-[16px]
          "
        >
          Connect with our patient support
          team for assistance with treatment
          planning, hospital coordination and
          your medical journey in India.
        </p>


        <div
          className="
            mx-auto
            mt-9

            grid
            max-w-[900px]

            grid-cols-1
            gap-4

            md:grid-cols-3
          "
        >

          <ContactItem
            icon={Phone}
            title="Call Us"
            value="+91-9885106619"
            href="tel:+919885106619"
          />


          <ContactItem
            icon={Mail}
            title="Email Us"
            value="Contact Our Team"
            href="/contact"
          />


          <ContactItem
            icon={MapPin}
            title="Medical Support"
            value="India"
          />

        </div>
      </div>
    </section>
  );
}


/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}) {

  const content = (
    <div
      className="
        flex
        h-full

        items-center
        justify-center
        gap-3

        rounded-2xl

        border
        border-white/20

        bg-white/10

        px-5
        py-5

        backdrop-blur-sm

        transition-all
        duration-300

        hover:border-[#E6B956]/70
        hover:bg-white/15
      "
    >

      <div
        className="
          flex
          h-11
          w-11

          shrink-0

          items-center
          justify-center

          rounded-full

          bg-white

          text-[#C8942E]
        "
      >
        <Icon size={19} />
      </div>


      <div className="text-left">

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

            md:text-[15px]
          "
        >
          {value}
        </p>

      </div>
    </div>
  );


  if (!href) {
    return content;
  }


  if (href.startsWith("/")) {

    return (
      <Link to={href}>
        {content}
      </Link>
    );

  }


  return (
    <a href={href}>
      {content}
    </a>
  );
}