import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  isLoggedIn,
} from "../../utils/auth";

/* =====================================================
   DUMMY DOCTOR DATA

   Frontend UI testing purpose only.
   Later approved / real partner doctors data tho
   replace cheyyandi.
===================================================== */

const doctors = [
  {
    id: 1,

    name: "Dr. Arjun Mehta",

    speciality: "Orthopaedics",

    designation:
      "Senior Consultant - Orthopaedics",

    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",

    qualifications: [
      "MBBS",
      "MS - Orthopaedics",
      "Fellowship in Joint Replacement",
    ],

    expertise: [
      "Knee Replacement",
      "Hip Replacement",
      "Joint Reconstruction",
      "Sports Injury Management",
    ],
  },

  {
    id: 2,

    name: "Dr. Priya Sharma",

    speciality: "Cancer Care",

    designation:
      "Senior Consultant - Medical Oncology",

    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",

    qualifications: [
      "MBBS",
      "MD - Internal Medicine",
      "DM - Medical Oncology",
    ],

    expertise: [
      "Medical Oncology",
      "Chemotherapy",
      "Cancer Treatment Planning",
      "Supportive Cancer Care",
    ],
  },

  {
    id: 3,

    name: "Dr. Rahul Verma",

    speciality: "Neurosciences",

    designation:
      "Senior Consultant - Neurosurgery",

    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",

    qualifications: [
      "MBBS",
      "MS - General Surgery",
      "MCh - Neurosurgery",
    ],

    expertise: [
      "Brain Surgery",
      "Spine Surgery",
      "Neuro Trauma",
      "Minimally Invasive Neurosurgery",
    ],
  },

  {
    id: 4,

    name: "Dr. Ananya Rao",

    speciality: "Cardiac Care",

    designation:
      "Senior Consultant - Cardiology",

    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=600&q=80",

    qualifications: [
      "MBBS",
      "MD - General Medicine",
      "DM - Cardiology",
    ],

    expertise: [
      "Interventional Cardiology",
      "Heart Disease Management",
      "Cardiac Evaluation",
      "Preventive Cardiology",
    ],
  },

  {
    id: 5,

    name: "Dr. Vikram Singh",

    speciality: "Gastrosciences",

    designation:
      "Senior Consultant - Gastroenterology",

    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80",

    qualifications: [
      "MBBS",
      "MD - Internal Medicine",
      "DM - Gastroenterology",
    ],

    expertise: [
      "Digestive Disorders",
      "Endoscopy",
      "Liver Disease Management",
      "Gastrointestinal Care",
    ],
  },
];

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function InternationalDoctors({
  onOpenAuth,
}) {
  const navigate = useNavigate();

  const [visibleCount, setVisibleCount] =
    useState(3);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  /* =====================================================
     RESPONSIVE CARD COUNT

     Mobile  = 1
     Tablet  = 2
     Desktop = 3
  ===================================================== */

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (
        window.innerWidth < 1200
      ) {
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
     RESET SLIDER WHEN SCREEN SIZE CHANGES
  ===================================================== */

  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount]);

  /* =====================================================
     NEXT SLIDE
  ===================================================== */

  const nextSlide = () => {
    setCurrentIndex(
      (previousIndex) =>
        (previousIndex + 1) %
        doctors.length
    );
  };

  /* =====================================================
     PREVIOUS SLIDE
  ===================================================== */

  const prevSlide = () => {
    setCurrentIndex(
      (previousIndex) =>
        (
          previousIndex -
          1 +
          doctors.length
        ) % doctors.length
    );
  };

  /* =====================================================
     AUTO PLAY
  ===================================================== */

  useEffect(() => {
    if (
      doctors.length <= visibleCount
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(
        (previousIndex) =>
          (previousIndex + 1) %
          doctors.length
      );
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [visibleCount]);

  /* =====================================================
     INFINITE VISIBLE DOCTORS

     Desktop example:

     1 2 3
     2 3 4
     3 4 5
     4 5 1
     5 1 2
     1 2 3
  ===================================================== */

  const visibleDoctors =
    Array.from(
      {
        length: Math.min(
          visibleCount,
          doctors.length
        ),
      },

      (_, index) =>
        doctors[
          (
            currentIndex +
            index
          ) % doctors.length
        ]
    );

  /* =====================================================
     MEET THE DOCTOR

     NOT LOGGED IN:
     Same International Patients page lo
     login drawer open avuthundi.

     LOGGED IN:
     Doctor profile route ki velthundi.
  ===================================================== */

  const handleMeetDoctor = (
    doctor
  ) => {
    const doctorPath =
      `/doctors/${doctor.id}`;

    if (isLoggedIn()) {
      navigate(doctorPath);
      return;
    }

    /*
      IMPORTANT:

      navigate() ikkada use cheyyakudadhu.

      Login lekapothe current page lone
      undi existing login drawer open avvali.
    */

    onOpenAuth?.(
      "login",
      doctorPath
    );
  };

  /* =====================================================
     VIEW ALL DOCTORS

     NOT LOGGED IN:
     Current International Patients page lone
     login drawer open avuthundi.

     LOGGED IN:
     /doctors page ki velthundi.
  ===================================================== */

  const handleViewAllDoctors = () => {
    const doctorsPath = "/doctors";

    if (isLoggedIn()) {
      navigate(doctorsPath);
      return;
    }

    /*
      Direct navigate cheyyadam ledu.

      Current page paina login form
      open cheyyadaniki onOpenAuth use chesthunnam.
    */

    onOpenAuth?.(
      "login",
      doctorsPath
    );
  };

  return (
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
          max-w-[1400px]

          px-5
          sm:px-7
          lg:px-10
        "
      >
        {/* =================================
            SECTION HEADING
        ================================== */}

        <div
          className="
            mx-auto
            max-w-[780px]
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
            Specialist Network
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
            Meet Our Doctors
          </h2>

          <p
            className="
              mt-4

              text-[16px]
              leading-7
              text-[#404041]

              md:text-[15px]
            "
          >
            Connect with suitable
            specialists from our healthcare
            network based on your diagnosis,
            medical requirements and
            treatment plan.
          </p>
        </div>

        {/* =================================
            DOCTORS SLIDER
        ================================== */}

        <div
          className="
            relative
            mt-12
          "
        >
          {/* =================================
              LEFT ARROW
          ================================== */}

          {doctors.length >
            visibleCount && (
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous doctors"
              className="
                absolute
                left-[-12px]
                top-1/2
                z-20

                flex
                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-[#C8942E]

                bg-white

                text-[#064B50]

                shadow-[0_8px_25px_rgba(6,75,80,0.12)]

                transition-all
                duration-300

                hover:bg-[#064B50]
                hover:text-white

                md:left-[-18px]
              "
            >
              <ArrowLeft
                size={19}
              />
            </button>
          )}

          {/* =================================
              DOCTOR CARDS
          ================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-6

              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {visibleDoctors.map(
              (
                doctor,
                position
              ) => (
                <DoctorCard
                  key={`${doctor.id}-${position}`}
                  doctor={doctor}
                  onMeetDoctor={() =>
                    handleMeetDoctor(
                      doctor
                    )
                  }
                />
              )
            )}
          </div>

          {/* =================================
              RIGHT ARROW
          ================================== */}

          {doctors.length >
            visibleCount && (
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next doctors"
              className="
                absolute
                right-[-12px]
                top-1/2
                z-20

                flex
                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-[#C8942E]

                bg-[#064B50]

                text-white

                shadow-[0_8px_25px_rgba(6,75,80,0.14)]

                transition-all
                duration-300

                hover:bg-[#C8942E]

                md:right-[-18px]
              "
            >
              <ArrowRight
                size={19}
              />
            </button>
          )}
        </div>

        {/* =================================
            SLIDER DOTS
        ================================== */}

        {doctors.length >
          visibleCount && (
          <div
            className="
              mt-7

              flex
              justify-center
              gap-2
            "
          >
            {doctors.map(
              (
                doctor,
                index
              ) => (
                <button
                  key={doctor.id}
                  type="button"
                  aria-label={`Go to doctor slide ${
                    index + 1
                  }`}
                  onClick={() =>
                    setCurrentIndex(
                      index
                    )
                  }
                  className={`
                    h-2

                    rounded-full

                    transition-all
                    duration-300

                    ${
                      currentIndex ===
                      index
                        ? "w-8 bg-[#C8942E]"
                        : "w-2 bg-[#c6dddd] hover:bg-[#064B50]"
                    }
                  `}
                />
              )
            )}
          </div>
        )}

        {/* =================================
            VIEW ALL DOCTORS

            IMPORTANT:
            Link use cheyyakudadhu.
            Button use chesthunnam because
            first login check cheyyali.
        ================================== */}

        <div
          className="
            mt-9
            text-center
          "
        >
          <button
            type="button"
            onClick={
              handleViewAllDoctors
            }
            className="
              group

              inline-flex
              items-center
              justify-center
              gap-2

              rounded-lg

              bg-[#064B50]

              px-6
              py-3

              text-[14px]
              font-semibold
              text-white

              transition-all
              duration-300

              hover:bg-[#0B6268]

              hover:shadow-[0_10px_25px_rgba(6,75,80,0.18)]
            "
          >
            View All Doctors

            <ArrowRight
              size={16}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   DOCTOR CARD
===================================================== */

function DoctorCard({
  doctor,
  onMeetDoctor,
}) {
  return (
    <article
      className="
        group

        flex
        h-full
        min-h-[535px]
        flex-col

        overflow-hidden

        rounded-[20px]

        border
        border-[#dfe9e8]

        bg-white

        shadow-[0_8px_30px_rgba(6,75,80,0.05)]

        transition-all
        duration-300

        hover:-translate-y-1

        hover:border-[#C8942E]/50

        hover:shadow-[0_18px_42px_rgba(6,75,80,0.11)]
      "
    >
      {/* =================================
          DOCTOR TOP
      ================================== */}

      <div
        className="
          flex
          items-center
          gap-4

          border-b
          border-[#e5eceb]

          bg-[#f7fbfa]

          p-5
        "
      >
        {/* DOCTOR IMAGE */}

        <div
          className="
            h-[92px]
            w-[92px]
            shrink-0

            overflow-hidden

            rounded-2xl

            border-[3px]
            border-white

            bg-[#eef6f5]

            shadow-sm
          "
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            className="
              h-full
              w-full

              object-cover
              object-top

              transition-transform
              duration-500

              group-hover:scale-105
            "
          />
        </div>

        {/* DOCTOR BASIC DETAILS */}

        <div className="min-w-0">
          <span
            className="
              inline-flex

              rounded-full

              bg-[#fff7e8]

              px-3
              py-1

              text-[11px]
              font-semibold
              text-[#A9781F]
            "
          >
            {doctor.speciality}
          </span>

          <h3
            className="
              mt-2

              text-[18px]
              font-semibold
              leading-6
              text-[#064B50]

              sm:text-[19px]
            "
          >
            {doctor.name}
          </h3>

          <p
            className="
              mt-1

              text-[15px]
              leading-5
              text-[#323434]
            "
          >
            {doctor.designation}
          </p>
        </div>
      </div>

      {/* =================================
          DOCTOR INFORMATION
      ================================== */}

      <div
        className="
          flex
          flex-1
          flex-col

          p-5
          sm:p-6
        "
      >
        {/* QUALIFICATION */}

        <DoctorInfo
          icon={GraduationCap}
          title="Qualification"
          items={
            doctor.qualifications
          }
        />

        <div
          className="
            my-5
            h-px
            bg-[#e7eeee]
          "
        />

        {/* SPECIALIZATION */}

        <DoctorInfo
          icon={Stethoscope}
          title="Specialization & Expertise"
          items={
            doctor.expertise
          }
        />

        {/* =================================
            MEET THE DOCTOR BUTTON

            Login check handleMeetDoctor lo
            jaruguthundi.
        ================================== */}

        <div
          className="
            mt-auto
            pt-6
          "
        >
          <button
            type="button"
            onClick={
              onMeetDoctor
            }
            className="
              group/btn

              flex
              w-full

              items-center
              justify-center
              gap-2

              rounded-lg

              border
              border-[#064B50]

              bg-[#064B50]

              px-5
              py-3

              text-[13px]
              font-semibold
              text-white

              transition-all
              duration-300

              hover:border-[#C8942E]
              hover:bg-[#C8942E]
            "
          >
            Meet the Doctor

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300

                group-hover/btn:translate-x-1
              "
            />
          </button>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   DOCTOR INFO
===================================================== */

function DoctorInfo({
  icon: Icon,
  title,
  items = [],
}) {
  return (
    <div>
      {/* TITLE */}

      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <div
          className="
            flex
            h-8
            w-8
            shrink-0

            items-center
            justify-center

            rounded-lg

            bg-[#eef6f5]
          "
        >
          <Icon
            size={17}
            className="
              text-[#C8942E]
            "
          />
        </div>

        <h4
          className="
            text-[14px]
            font-semibold
            text-[#064B50]
          "
        >
          {title}
        </h4>
      </div>

      {/* ITEMS */}

      <div
        className="
          mt-3
          space-y-2
        "
      >
        {items.map(
          (item) => (
            <div
              key={item}
              className="
                flex
                items-start
                gap-2

                text-[15px]
                leading-5
                text-[#424343]
              "
            >
              <BadgeCheck
                size={14}
                className="
                  mt-[3px]
                  shrink-0
                  text-[#C8942E]
                "
              />

              <span>
                {item}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}