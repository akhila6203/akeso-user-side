import {
  BedDouble,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  CreditCard,
  Headphones,
  Hospital,
  Mail,
  MessageCircleQuestion,
  Phone,
  Play,
  Stethoscope,
  UsersRound,
  X,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import useOurStories from "../hooks/useOurStories";
import useFaqs from "../hooks/useFaqs";


/* =========================================================
   HELP DESK DATA
========================================================= */

const helpDeskSections = [
  {
    id: "getting-to-hospital",
    title: "Getting To The Hospital",
    icon: Hospital,

    description:
      "Travel, arrival and hospital coordination support for international patients.",

    faqs: [
      {
        question:
          "How will I know which hospital I need to visit?",

        answer:
          "After your medical reports are reviewed and your treatment plan is coordinated, our team will share the relevant hospital details, consultation information and available guidance for your planned visit.",
      },

      {
        question:
          "Can Akeso assist with airport pickup and local transportation?",

        answer:
          "Airport pickup and local transportation coordination can be arranged based on your confirmed travel schedule and treatment plan. Availability and applicable charges, if any, will be communicated before your arrival.",
      },

      {
        question:
          "Can I get support with medical visa documentation and travel planning?",

        answer:
          "Our coordination team can guide you through the medical travel process and help with relevant supporting information or documentation where applicable. Visa approval remains subject to the respective authorities.",
      },

      {
        question:
          "What information should I share before travelling?",

        answer:
          "Please share your recent medical reports, scans, prescriptions, treatment history and tentative travel dates. Additional information may be requested depending on your treatment plan.",
      },
    ],
  },

  {
    id: "meeting-doctors",
    title: "Meeting Doctors",
    icon: Stethoscope,

    description:
      "Doctor consultation, medical opinion and appointment coordination for your planned treatment journey.",

    faqs: [
      {
        question:
          "How can I schedule a consultation with a suitable specialist?",

        answer:
          "Share your available medical reports with Akeso. Based on the information provided, our coordination team can assist with connecting you to an appropriate specialist and scheduling the consultation.",
      },

      {
        question:
          "Can I have an online medical consultation before travelling?",

        answer:
          "Where an online consultation is available with the selected specialist or hospital, our team can assist with coordinating it before your travel.",
      },

      {
        question:
          "What medical documents should I keep ready for my consultation?",

        answer:
          "Keep your recent medical reports, diagnostic scans, prescriptions, previous treatment summaries, medication details and relevant discharge summaries ready.",
      },

      {
        question:
          "Will someone assist me during hospital coordination?",

        answer:
          "Akeso provides coordination support throughout the planned medical journey. The exact support available may vary depending on the hospital, location and treatment requirements.",
      },

      {
        question:
          "Can language assistance be coordinated during consultations?",

        answer:
          "Language assistance may be coordinated where required and available. Please share your preferred language with the coordination team before your consultation.",
      },
    ],
  },

  {
    id: "getting-admitted",
    title: "Getting Admitted",
    icon: BedDouble,

    description:
      "Admission preparation, documentation and hospital stay coordination for international patients.",

    faqs: [
      {
        question:
          "What is the general admission process for international patients?",

        answer:
          "The process generally includes medical review, treatment planning, confirmation of the hospital and specialist, completion of required documentation and hospital admission formalities.",
      },

      {
        question:
          "What documents should I carry for hospital admission?",

        answer:
          "Patients should generally carry their passport and visa documents where applicable, medical records, investigation reports, prescriptions, treatment correspondence and other documents requested by the hospital.",
      },

      {
        question:
          "Can Akeso help coordinate my admission date?",

        answer:
          "Once your treatment plan and travel schedule are confirmed, our team can coordinate with the relevant hospital regarding the planned admission date and share available instructions with you.",
      },

      {
        question:
          "What types of hospital rooms may be available?",

        answer:
          "Room categories differ by hospital and may include shared rooms, private rooms and higher-category rooms. Available options and applicable charges should be confirmed before admission.",
      },

      {
        question:
          "What happens if additional tests are required before treatment?",

        answer:
          "The treating medical team may recommend additional investigations after evaluation. These tests may help the clinical team confirm or refine the treatment plan.",
      },
    ],
  },

  {
    id: "billing-support",
    title: "Billing & Financial Support",
    icon: CreditCard,

    description:
      "Treatment estimates, payment information and financial coordination throughout the medical journey.",

    faqs: [
      {
        question:
          "Can I receive a treatment estimate before travelling?",

        answer:
          "Where sufficient medical information is available, an indicative treatment estimate can be coordinated before travel. Final costs may change following clinical evaluation or changes in the treatment plan.",
      },

      {
        question:
          "What information is generally included in a treatment estimate?",

        answer:
          "The inclusions depend on the hospital and procedure. Please review the specific estimate carefully because travel, visa, accommodation outside the hospital and other personal expenses may be separate.",
      },

      {
        question:
          "How are treatment payments handled?",

        answer:
          "Payment methods and schedules are determined by the selected hospital or service provider. Akeso can help communicate available payment instructions during coordination.",
      },

      {
        question:
          "Can treatment costs change after I reach the hospital?",

        answer:
          "Yes. An initial estimate is based on information available before treatment. Costs may change if further investigations, additional hospital stay, implants, medicines or other clinical requirements become necessary.",
      },
    ],
  },

  {
    id: "visitors",
    title: "Visitors & Attendants",
    icon: UsersRound,

    description:
      "Useful guidance for family members, attendants and visitors accompanying an international patient.",

    faqs: [
      {
        question:
          "Can a family member or attendant accompany the patient?",

        answer:
          "In many cases a family member or attendant can accompany the patient, subject to hospital rules, room category and applicable policies.",
      },

      {
        question:
          "Can Akeso help with accommodation for an attendant?",

        answer:
          "Our team can assist with information and coordination for suitable accommodation options near the hospital based on availability, duration of stay and individual preferences.",
      },

      {
        question:
          "Are visitors allowed inside the hospital?",

        answer:
          "Visitor access and visiting hours are determined by each hospital and may vary by department, patient condition and hospital policy.",
      },

      {
        question:
          "Can attendants receive help with local transportation?",

        answer:
          "Local transportation coordination may be available depending on the patient's travel plan and location. Please discuss your requirements with the coordination team in advance.",
      },
    ],
  },

  {
    id: "after-treatment",
    title: "After Your Treatment",
    icon: ClipboardList,

    description:
      "Discharge, follow-up and post-treatment coordination for a smoother transition after care.",

    faqs: [
      {
        question:
          "Will I receive guidance after discharge?",

        answer:
          "The treating hospital or medical team should provide relevant discharge instructions, medication guidance and follow-up recommendations. Akeso can assist with coordination related to the planned medical journey.",
      },

      {
        question:
          "Can follow-up consultations be coordinated after I return home?",

        answer:
          "Where the treating specialist offers remote follow-up, Akeso can help coordinate an online consultation.",
      },

      {
        question:
          "How will I receive my medical reports and discharge documents?",

        answer:
          "Medical records and discharge documents are issued according to the selected hospital's process. Our team can help guide you regarding the appropriate hospital contact or available collection process.",
      },

      {
        question:
          "Can Akeso assist with departure and airport transportation?",

        answer:
          "Where requested and available, local transportation and airport transfer coordination can be arranged according to the patient's discharge and travel schedule.",
      },

      {
        question:
          "Who can I contact if I need coordination support after treatment?",

        answer:
          "You can contact the Akeso coordination team for assistance related to your medical journey. For urgent medical symptoms or emergencies, contact an appropriate local healthcare or emergency service immediately.",
      },
    ],
  },
];


/* =========================================================
   HELP DESK ACCORDION
========================================================= */

function HelpAccordion({
  item,
  isOpen,
  onClick,
}) {
  return (
    <div
      className="
        border-b
        border-[#D7E5E4]
      "
    >
      <button
        type="button"
        onClick={onClick}
        className="
          flex
          w-full
          items-start
          justify-between
          gap-5
          py-5
          text-left
        "
      >
        <span
          className="
            text-[16px]
            font-semibold
            leading-7
            text-[#263F41]
            sm:text-[17px]
            lg:text-[18px]
          "
        >
          {item.question}
        </span>

        <span
          className={`
            mt-1
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            transition-all
            duration-300

            ${
              isOpen
                ? "border-[#064B50] bg-[#064B50] text-white"
                : "border-[#CFE0DF] bg-white text-[#064B50]"
            }
          `}
        >
          <ChevronDown
            size={18}
            className={`
              transition-transform
              duration-300

              ${
                isOpen
                  ? "rotate-180"
                  : ""
              }
            `}
          />
        </span>
      </button>

      <div
        className={`
          grid
          transition-all
          duration-300

          ${
            isOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          <p
            className="
              max-w-[1000px]
              pb-6
              pr-8
              text-[16px]
              leading-7
              text-[#242424]
              md:text-[16px]
              md:leading-8
            "
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   GENERAL FAQ ITEM

   IMPORTANT:
   Each item has its OWN natural height.
   No grid row stretching.
========================================================= */

function GeneralFaqItem({
  faq,
  index,
  openIndex,
  setOpenIndex,
}) {
  const isOpen =
    openIndex === index;

  return (
    <div
      className={`
        overflow-hidden
        rounded-[14px]
        border
        transition-all
        duration-300

        ${
          isOpen
            ? `
              border-[#BCD7D5]
              bg-white
              shadow-[0_8px_24px_rgba(6,75,80,0.06)]
            `
            : `
              border-[#D5E4E3]
              bg-[#F8FBFA]
            `
        }
      `}
    >
      <button
        type="button"
        onClick={() =>
          setOpenIndex(
            isOpen
              ? null
              : index
          )
        }
        className="
          flex
          w-full
          items-center
          justify-between
          gap-5
          px-5
          py-[18px]
          text-left
          sm:px-6
        "
      >
        <span
          className="
            text-[15px]
            font-semibold
            leading-6
            text-[#064B50]
            sm:text-[16px]
          "
        >
          {faq.question}
        </span>

        <ChevronDown
          size={18}
          strokeWidth={2}
          className={`
            shrink-0
            text-[#C8942E]
            transition-transform
            duration-300

            ${
              isOpen
                ? "rotate-180"
                : ""
            }
          `}
        />
      </button>

      <div
        className={`
          grid
          transition-all
          duration-300

          ${
            isOpen
              ? "grid-rows-[1fr]"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          <div
            className="
              border-t
              border-[#DDE9E8]
              px-5
              pb-5
              pt-4
              sm:px-6
            "
          >
            <p
              className="
                text-[15px]
                leading-7
                text-[#526566]
                md:text-[16px]
                md:leading-8
              "
            >
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   PATIENT STORY CARD
========================================================= */

function PatientStoryCard({
  story,
  onPlay,
}) {
  const [
    imageFailed,
    setImageFailed,
  ] = useState(false);

  /*
    If your local thumbnail is unavailable,
    YouTube thumbnail automatically displays.
  */

  const youtubeThumbnail =
    `https://img.youtube.com/vi/${story.youtubeId}/hqdefault.jpg`;

  const imageSrc =
    imageFailed
      ? youtubeThumbnail
      : story.thumbnail;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-[20px]
        border
        border-[#D6E4E3]
        bg-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_16px_38px_rgba(6,75,80,0.10)]
      "
    >
      {/* VIDEO IMAGE */}

      <button
        type="button"
        onClick={() =>
          onPlay(story)
        }
        className="
          relative
          block
          h-[225px]
          w-full
          overflow-hidden
          bg-[#DCECEB]
          sm:h-[245px]
        "
        aria-label={`Play ${story.title}`}
      >
        <img
          src={imageSrc}
          alt={story.title}
          onError={() =>
            setImageFailed(true)
          }
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.04]
          "
        />

        {/* TEAL OVERLAY */}

        <span
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#043F43]/65
            via-[#064B50]/10
            to-transparent
          "
        />

        {/* PLAY BUTTON */}

        <span
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-16
            w-16
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/70
            bg-white/25
            text-white
            shadow-lg
            backdrop-blur-sm
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-[#C8942E]
          "
        >
          <Play
            size={25}
            fill="currentColor"
            className="ml-1"
          />
        </span>
      </button>


      {/* CONTENT */}

      <div className="p-6">
        {/* SPECIALITY NAME */}
      <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#C8942E]">
        {story.category || "Our Stories"}
      </p>
        <h3
          className="
            text-[18px]
            font-bold
            leading-5
            text-[#064B50]
          "
        >
          {story.title}
        </h3>

        <p
          className="
            mt-3
            text-[16px]
            leading-7
            text-[#2d2e2e]
          "
        >
          {story.description}
        </p>

        <button
          type="button"
          onClick={() =>
            onPlay(story)
          }
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-[14px]
            font-bold
            
            text-[#67a79f]
            transition
            hover:text-[#A9781F]
          "
        >
          <Play
            size={15}
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
  useEffect(() => {
    if (!story) return;

    const handleKeyDown = (
      event
    ) => {
      if (
        event.key === "Escape"
      ) {
        onClose();
      }
    };

    document.body.style.overflow =
      "hidden";

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow =
        "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [story, onClose]);


  if (!story) {
    return null;
  }


  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#021F21]/85
        p-4
        backdrop-blur-[3px]
      "
      onMouseDown={(
        event
      ) => {
        if (
          event.target ===
          event.currentTarget
        ) {
          onClose();
        }
      }}
    >
      <div
        className="
          relative
          w-full
          max-w-[1000px]
          overflow-hidden
          rounded-[20px]
          bg-white
          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
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
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#064B50]
            shadow-lg
            transition
            hover:bg-[#064B50]
            hover:text-white
          "
        >
          <X size={22} />
        </button>


        {/* VIDEO */}

        <div
          className="
            aspect-video
            w-full
            bg-black
          "
        >
          <iframe
            className="
              h-full
              w-full
            "
            src={`https://www.youtube.com/embed/${story.youtubeId}?autoplay=1&rel=0`}
            title={story.title}
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


        {/* TITLE */}

        <div
          className="
            px-5
            py-5
            sm:px-7
          "
        >
          <h3
            className="
              pr-10
              text-[19px]
              font-bold
              text-[#263F41]
              sm:text-[22px]
            "
          >
            {story.title}
          </h3>

          <p
            className="
              mt-2
              text-[15px]
              leading-7
              text-[#2f3030]
            "
          >
            {story.description}
          </p>
        </div>
      </div>
    </div>
  );
}


/* =========================================================
   MAIN PAGE
========================================================= */

export default function PatientHelpDesk() {
  //   const {
  //   stories: patientStories,
  //   loading: storiesLoading,
  //   error: storiesError,
  // } = useOurStories();
  const {
  stories: patientStories = [],
  loading: storiesLoading,
  error: storiesError,
} = useOurStories();

  const {
    faqs: generalFaqs,
    loading: faqsLoading,
    error: faqsError,
  } = useFaqs();

  const [
    activeSectionId,
    setActiveSectionId,
  ] = useState(
    helpDeskSections[0].id
  );

  const [
    openHelpFaq,
    setOpenHelpFaq,
  ] = useState(0);

  const [
    generalOpenIndex,
    setGeneralOpenIndex,
  ] = useState(null);

  const [
    storyStart,
    setStoryStart,
  ] = useState(0);

  const [
    visibleStories,
    setVisibleStories,
  ] = useState(3);

  const [
    selectedStory,
    setSelectedStory,
  ] = useState(null);


  /* =======================================================
     RESPONSIVE STORY COUNT
  ======================================================= */

  useEffect(() => {
    const updateCount = () => {
      const width =
        window.innerWidth;

      if (width < 768) {
        setVisibleStories(1);
      } else if (
        width < 1100
      ) {
        setVisibleStories(2);
      } else {
        setVisibleStories(3);
      }
    };

    updateCount();

    window.addEventListener(
      "resize",
      updateCount
    );

    return () =>
      window.removeEventListener(
        "resize",
        updateCount
      );
  }, []);


  /* =======================================================
     ACTIVE HELP SECTION
  ======================================================= */

  const activeSection =
    helpDeskSections.find(
      (section) =>
        section.id ===
        activeSectionId
    ) || helpDeskSections[0];


  /* =======================================================
     CHANGE HELP TAB
  ======================================================= */

  const changeSection = (
    sectionId
  ) => {
    setActiveSectionId(
      sectionId
    );

    setOpenHelpFaq(0);
  };


  /* =======================================================
     CIRCULAR STORIES
  ======================================================= */
const visibleStoryItems = useMemo(() => {
  if (!Array.isArray(patientStories) || patientStories.length === 0) {
    return [];
  }

  return Array.from({
    length: Math.min(visibleStories, patientStories.length),
  }).map((_, offset) => {
    const index =
      (storyStart + offset) % patientStories.length;

    return patientStories[index];
  });
}, [patientStories, storyStart, visibleStories]);

const previousStory = () => {
  if (!patientStories?.length) return;

  setStoryStart((current) =>
    (current - 1 + patientStories.length) %
    patientStories.length
  );
};

const nextStory = () => {
  if (!patientStories?.length) return;

  setStoryStart((current) =>
    (current + 1) % patientStories.length
  );
};

useEffect(() => {
  setStoryStart(0);
}, [patientStories?.length]);
  // const visibleStoryItems =
  //   useMemo(() => {
  //     return Array.from({
  //       length: Math.min(
  //         visibleStories,
  //         patientStories.length
  //       ),
  //     }).map(
  //       (_, offset) =>
  //         patientStories[
  //           (
  //             storyStart +
  //             offset
  //           ) %
  //             patientStories.length
  //         ]
  //     );
  //   }, [
  //     storyStart,
  //     visibleStories,
  //   ]);


  // const previousStory = () => {
  //   setStoryStart(
  //     (current) =>
  //       (
  //         current -
  //         1 +
  //         patientStories.length
  //       ) %
  //       patientStories.length
  //   );
  // };


  // const nextStory = () => {
  //   setStoryStart(
  //     (current) =>
  //       (
  //         current +
  //         1
  //       ) %
  //       patientStories.length
  //   );
  // };


  /* =======================================================
     FAQ SPLIT

     Very important:
     Separate LEFT and RIGHT containers.

     Because of this:
     opening left FAQ DOES NOT increase
     height of right FAQ.
  ======================================================= */

  const leftFaqs =
    generalFaqs.filter(
      (_, index) =>
        index % 2 === 0
    );

  const rightFaqs =
    generalFaqs.filter(
      (_, index) =>
        index % 2 !== 0
    );


  return (
    <main className="bg-white">

      {/* ===================================================
          BREADCRUMB
      =================================================== */}

      <Breadcrumb
        title="Patient Help Desk"
        description="Information and coordination guidance for international patients throughout their medical journey."
        items={[
          {
            label:
              "International Patients",
            to:
              "/international-patients",
          },

          {
            label:
              "Patient Help Desk",
          },
        ]}
      />


      {/* ===================================================
          HELP DESK SECTION
      =================================================== */}

      <section
        className="
          bg-[#F7FAF9]
          py-14
          md:py-16
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1450px]
            px-4
            sm:px-6
            lg:px-8
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
            <span
              className="
                text-[13px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-[#C8942E]
              "
            >
              International Patient Support
            </span>

            <h2
              className="
                mt-3
                text-[30px]
                font-bold
                leading-tight
                text-[#263F41]
                sm:text-[36px]
                md:text-[42px]
              "
            >
              How Can We Help You?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[800px]
                text-[15px]
                leading-7
                text-[#292a2a]
                md:text-[16px]
                md:leading-8
              "
            >
              Select a topic to view
              commonly requested information
              about consultations, admission,
              financial coordination,
              visitors and post-treatment
              support.
            </p>
          </div>


          {/* =================================================
              MOBILE / TABLET TABS
          ================================================= */}

          <div
            className="
              mt-9
              flex
              gap-3
              overflow-x-auto
              pb-2
              lg:hidden
            "
          >
            {helpDeskSections.map(
              (section) => {
                const Icon =
                  section.icon;

                const active =
                  activeSectionId ===
                  section.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() =>
                      changeSection(
                        section.id
                      )
                    }
                    className={`
                      flex
                      shrink-0
                      items-center
                      gap-2
                      rounded-full
                      border
                      px-4
                      py-3
                      text-[14px]
                      font-semibold

                      ${
                        active
                          ? "border-[#064B50] bg-[#064B50] text-white"
                          : "border-[#D7E5E4] bg-white text-[#263F41]"
                      }
                    `}
                  >
                    <Icon size={18} />

                    {section.title}
                  </button>
                );
              }
            )}
          </div>


          {/* =================================================
              HELP DESK LAYOUT
          ================================================= */}

          <div
            className="
              mt-10
              grid
              gap-8
              lg:grid-cols-[340px_minmax(0,1fr)]
              xl:grid-cols-[370px_minmax(0,1fr)]
              xl:gap-12
            "
          >

            {/* LEFT TABS */}

            <aside
              className="
                hidden
                lg:block
              "
            >
              <div
                className="
                  sticky
                  top-[110px]
                  rounded-[20px]
                  border
                  border-[#DCE9E8]
                  bg-white
                  p-3
                  shadow-[0_12px_35px_rgba(6,75,80,0.06)]
                "
              >
                {helpDeskSections.map(
                  (section) => {
                    const Icon =
                      section.icon;

                    const active =
                      activeSectionId ===
                      section.id;

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() =>
                          changeSection(
                            section.id
                          )
                        }
                        className={`
                          mb-2
                          flex
                          w-full
                          items-center
                          gap-4
                          rounded-[14px]
                          px-4
                          py-[18px]
                          text-left
                          transition-all
                          last:mb-0

                          ${
                            active
                              ? "bg-[#064B50] text-white"
                              : "bg-white text-[#263F41] hover:bg-[#EEF6F5]"
                          }
                        `}
                      >
                        <span
                          className={`
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-[12px]
                            border

                            ${
                              active
                                ? "border-white/20 bg-white/10 text-[#E6B956]"
                                : "border-[#D7E5E4] bg-[#F7FAF9] text-[#064B50]"
                            }
                          `}
                        >
                          <Icon
                            size={21}
                          />
                        </span>

                        <span
                          className="
                            text-[15px]
                            font-bold
                            xl:text-[16px]
                          "
                        >
                          {section.title}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </aside>


            {/* RIGHT CONTENT */}

            <div>
              <div
                className="
                  border-b
                  border-[#D7E5E4]
                  pb-6
                "
              >
                <span
                  className="
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#C8942E]
                  "
                >
                  Patient Information
                </span>

                <h3
                  className="
                    mt-2
                    text-[28px]
                    font-bold
                    text-[#263F41]
                    sm:text-[32px]
                    md:text-[35px]
                  "
                >
                  {activeSection.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[15px]
                    leading-7
                    text-[#272828]
                    md:text-[16px]
                    md:leading-8
                  "
                >
                  {activeSection.description}
                </p>
              </div>


              <div className="mt-3">
                {activeSection.faqs.map(
                  (faq, index) => (
                    <HelpAccordion
                      key={`${activeSection.id}-${index}`}
                      item={faq}
                      isOpen={
                        openHelpFaq ===
                        index
                      }
                      onClick={() =>
                        setOpenHelpFaq(
                          (current) =>
                            current ===
                            index
                              ? null
                              : index
                        )
                      }
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================
          PATIENT STORIES
      =================================================== */}

      <section
        className="
          bg-[#F2F8F7]
          py-16
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1450px]
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="text-center">
            <span
              className="
                text-[13px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-[#C8942E]
              "
            >
              Real Experiences
            </span>

            <h2
              className="
                mt-3
                text-[31px]
                font-bold
                text-[#064B50]
                sm:text-[36px]
                md:text-[42px]
              "
            >
              Patient Stories
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[750px]
                text-[15px]
                leading-7
                text-[#526566]
                md:text-[16px]
              "
            >
              Hear about healthcare journeys
              involving consultation,
              treatment and recovery support.
            </p>
          </div>


          {/* SLIDER */}

          <div
            className="
              relative
              mt-11
              md:px-8
            "
          >
            {/* LEFT ARROW */}

            <button
              type="button"
              onClick={previousStory}
              aria-label="Previous patient story"
              className="
                absolute
                -left-1
                top-[42%]
                z-20
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
                shadow-md
                transition
                hover:bg-[#064B50]
                hover:text-white
                md:left-1
              "
            >
              <ChevronLeft size={22} />
            </button>


            <div
              className={`
                grid
                gap-5

                ${
                  visibleStories === 1
                    ? "grid-cols-1"
                    : visibleStories === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }
              `}
            >
              {/* {visibleStoryItems.map(
                (story, index) => (
                  <PatientStoryCard
                    key={`${story.id}-${index}`}
                    story={story}
                    onPlay={
                      setSelectedStory
                    }
                  />
                )
              )} */}
              {storiesLoading ? (
  <div className="col-span-full py-14 text-center text-[#526566]">
    Loading patient stories...
  </div>
) : storiesError ? (
  <div className="col-span-full py-14 text-center text-red-600">
    {storiesError}
  </div>
) : visibleStoryItems.length === 0 ? (
  <div className="col-span-full py-14 text-center text-[#526566]">
    No patient stories available.
  </div>
) : (
  visibleStoryItems.map((story, index) => (
    <PatientStoryCard
      key={`${story.id}-${index}`}
      story={story}
      onPlay={setSelectedStory}
    />
  ))
)}
            </div>


            {/* RIGHT ARROW */}

            <button
              type="button"
              onClick={nextStory}
              aria-label="Next patient story"
              className="
                absolute
                -right-1
                top-[42%]
                z-20
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
                shadow-md
                transition
                hover:bg-[#043F43]
                md:right-1
              "
            >
              <ChevronRight size={22} />
            </button>
          </div>


          {/* DOTS */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {/* {patientStories.map(
              (_, index) => ( */}
              {!storiesLoading &&
                !storiesError &&
                patientStories.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() =>
                    setStoryStart(index)
                  }
                  aria-label={`Go to patient story ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all

                    ${
                      storyStart ===
                      index
                        ? "w-8 bg-[#C8942E]"
                        : "w-2 bg-[#C9DEDC]"
                    }
                  `}
                />
              )
            )}
          </div>
        </div>
      </section>


      {/* ===================================================
          FAQ SECTION
      =================================================== */}

      <section
        className="
          bg-white
          py-16
          md:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1450px]
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="text-center">
            <span
              className="
                text-[13px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-[#C8942E]
              "
            >
              Patient Information
            </span>

            <h2
              className="
                mt-3
                text-[31px]
                font-bold
                text-[#064B50]
                sm:text-[36px]
                md:text-[42px]
              "
            >
              FAQ’s
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[780px]
                text-[15px]
                leading-7
                text-[#526566]
                md:text-[16px]
              "
            >
              Answers to common questions
              international patients may have
              while preparing for their
              medical journey.
            </p>
          </div>


          {/* =================================================
              IMPORTANT FIX

              NOT:
              one big CSS grid with FAQ items.

              Instead:
              left column + right column independently.

              So one open FAQ will NOT create
              empty height in the beside FAQ.
          ================================================= */}

{faqsLoading && (
  <p className="mt-10 text-center text-[#526566]">
    Loading FAQs...
  </p>
)}

{faqsError && (
  <p className="mt-10 text-center text-red-600">
    {faqsError}
  </p>
)}

          {/* <div
            className="
              mt-11
              grid
              items-start
              gap-4
              lg:grid-cols-2
              lg:gap-8
            "
          > */}
          {!faqsLoading && !faqsError && generalFaqs.length > 0 && (
  <div
    className="
      mt-11
      grid
      items-start
      gap-4
      lg:grid-cols-2
      lg:gap-8
    "
  >
            {/* LEFT COLUMN */}

            <div className="space-y-3">
              {leftFaqs.map(
                (faq) => {
                  const actualIndex =
                    generalFaqs.indexOf(
                      faq
                    );

                  return (
                    <GeneralFaqItem
                      key={
                        actualIndex
                      }
                      faq={faq}
                      index={
                        actualIndex
                      }
                      openIndex={
                        generalOpenIndex
                      }
                      setOpenIndex={
                        setGeneralOpenIndex
                      }
                    />
                  );
                }
              )}
            </div>


            {/* RIGHT COLUMN */}

            <div className="space-y-3">
              {rightFaqs.map(
                (faq) => {
                  const actualIndex =
                    generalFaqs.indexOf(
                      faq
                    );

                  return (
                    <GeneralFaqItem
                      key={
                        actualIndex
                      }
                      faq={faq}
                      index={
                        actualIndex
                      }
                      openIndex={
                        generalOpenIndex
                      }
                      setOpenIndex={
                        setGeneralOpenIndex
                      }
                    />
                  );
                }
              )}
            </div>
          </div>
          )}
        </div>
      </section>


      {/* ===================================================
          GET IN TOUCH

          NO TOP-RIGHT CIRCLE
          NO BOTTOM-LEFT CIRCLE
      =================================================== */}

      <section
        className="
          bg-white
          px-4
          pb-20
          pt-8
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            mx-auto
            max-w-[1400px]
            overflow-hidden
            rounded-[26px]
            bg-[#064B50]
            px-6
            py-12
            text-center
            shadow-[0_18px_45px_rgba(6,75,80,0.15)]
            sm:px-10
            md:py-14
            lg:px-16
          "
        >
          {/*
            Decorative circles intentionally removed.
          */}

          <div>
            <span
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-[#E6B956]
              "
            >
              <Headphones size={23} />
            </span>

            <p
              className="
                mt-5
                text-[13px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#E6B956]
              "
            >
              International Patient Support
            </p>

            <h2
              className="
                mt-3
                text-[30px]
                font-bold
                text-white
                sm:text-[36px]
                md:text-[42px]
              "
            >
              Get In Touch With Us
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-[800px]
                text-[15px]
                leading-7
                text-white/80
                md:text-[16px]
                md:leading-8
              "
            >
              Have questions about medical
              consultation, treatment planning
              or your international patient
              journey? Connect with the Akeso
              team for coordination support.
            </p>


            {/* BUTTONS */}

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >
              <Link
                to="/contact"
                className="
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#C8942E]
                  px-7
                  text-[15px]
                  font-bold
                  text-white
                  transition
                  hover:bg-[#A9781F]
                "
              >
                <MessageCircleQuestion
                  size={18}
                />

                Contact Our Team
              </Link>

              <Link
                to="/international/request-an-estimate"
                className="
                  inline-flex
                  min-h-[48px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/25
                  bg-white/10
                  px-7
                  text-[15px]
                  font-bold
                  text-white
                  transition
                  hover:bg-white
                  hover:text-[#064B50]
                "
              >
                <ClipboardList
                  size={18}
                />

                Request An Estimate
              </Link>
            </div>


            {/* CONTACT INFO */}

            <div
              className="
                mx-auto
                mt-8
                flex
                max-w-[700px]
                flex-col
                items-center
                justify-center
                gap-3
                border-t
                border-white/15
                pt-7
                text-white/80
                sm:flex-row
                sm:gap-7
              "
            >
              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-[14px]
                  font-semibold
                "
              >
                <Phone
                  size={17}
                  className="text-[#E6B956]"
                />

                International Patient Support
              </span>

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-white/20
                  sm:block
                "
              />

              <span
                className="
                  flex
                  items-center
                  gap-2
                  text-[14px]
                  font-semibold
                "
              >
                <Mail
                  size={17}
                  className="text-[#E6B956]"
                />

                Contact Akeso
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================
          YOUTUBE POPUP
      =================================================== */}

      <VideoModal
        story={selectedStory}
        onClose={() =>
          setSelectedStory(null)
        }
      />
    </main>
  );
}