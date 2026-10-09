import {
  Activity,
  Building2,
  CalendarDays,
  Clock3,
  HeartPulse,
  Mail,
  Phone,
  Pill,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { getUser } from "../utils/auth";

/* =========================================================
   HARDCODED MEDICAL HISTORY
   UI TESTING PURPOSE ONLY
========================================================= */

const medicalHistory = [
  {
    id: 1,
    date: "18 Sep 2026",
    doctor: "Dr. Arjun Reddy",
    speciality: "Cardiology",
    hospital: "Akeso Partner Hospital, Hyderabad",
    condition: "Hypertension",
    treatment:
      "Medication management and lifestyle modification.",
    medicines:
      "Amlodipine 5 mg – once daily",
    status: "Follow-up",
    nextVisit: "18 Dec 2026",
  },

  {
    id: 2,
    date: "06 Jul 2026",
    doctor: "Dr. Sneha Kapoor",
    speciality: "Orthopaedics",
    hospital: "Akeso Partner Hospital, Hyderabad",
    condition: "Lower Back Pain",
    treatment:
      "Physiotherapy and pain management.",
    medicines:
      "Supportive medication as advised",
    status: "Completed",
    nextVisit: "As Required",
  },

  {
    id: 3,
    date: "22 Mar 2026",
    doctor: "Dr. Vikram Rao",
    speciality: "General Medicine",
    hospital: "Akeso Partner Hospital, Hyderabad",
    condition: "Vitamin D Deficiency",
    treatment:
      "Vitamin supplementation and dietary advice.",
    medicines:
      "Vitamin D3 supplements",
    status: "Completed",
    nextVisit: "Completed",
  },

  {
    id: 4,
    date: "10 Jan 2026",
    doctor: "Dr. Arjun Reddy",
    speciality: "Cardiology",
    hospital: "Akeso Partner Hospital, Hyderabad",
    condition: "Routine Cardiac Evaluation",
    treatment:
      "ECG, blood pressure evaluation and specialist consultation.",
    medicines:
      "No new medication",
    status: "Completed",
    nextVisit: "Completed",
  },

  {
    id: 5,
    date: "18 Nov 2025",
    doctor: "Dr. Meera Sharma",
    speciality: "General Medicine",
    hospital: "Akeso Partner Hospital, Hyderabad",
    condition: "General Health Checkup",
    treatment:
      "Routine health evaluation and preventive care advice.",
    medicines:
      "No medication prescribed",
    status: "Completed",
    nextVisit: "As Required",
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function PatientProfileDemo() {
  /* =======================================================
     LOGGED-IN USER DETAILS
  ======================================================= */

  const user = getUser();

  const userName =
    user?.name ||
    user?.full_name ||
    user?.fullName ||
    "User";

  const userEmail =
    user?.email ||
    "akesho@gmail.com";

  const userMobile =
    user?.mobile ||
    user?.phone ||
    user?.phone_number ||
    "9999999999";

  return (
    <main className="min-h-screen bg-[#F5F8F8]">

      {/* =====================================================
          MAIN RESPONSIVE LAYOUT

          MOBILE  : One column
          TABLET  : One column
          DESKTOP : Sticky left + history right
      ====================================================== */}

      <section
        className="
          mx-auto
          grid
          w-full
          max-w-[1400px]
          grid-cols-1
          gap-4
          px-3
          py-5

          sm:gap-5
          sm:px-5
          sm:py-7

          md:px-6

          lg:grid-cols-[310px_minmax(0,1fr)]
          lg:items-start
          lg:gap-6
          lg:px-8
          lg:py-9

          xl:grid-cols-[360px_minmax(0,1fr)]
          xl:px-10
          xl:py-10
        "
      >

        {/* ===================================================
            LEFT SIDE
            PATIENT PROFILE

            Mobile/Tablet = normal
            Desktop = sticky
        =================================================== */}

        <aside
          className="
            w-full
            min-w-0

            lg:sticky
            lg:top-[110px]
            lg:self-start
          "
        >
          <div
            className="
              overflow-hidden
              rounded-[18px]
              border
              border-[#DCE8E7]
              bg-white
              shadow-[0_8px_30px_rgba(6,75,80,0.05)]

              sm:rounded-[20px]

              lg:rounded-[22px]
            "
          >

            {/* ===============================================
                PROFILE HEADER
            =============================================== */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#064B50]
                px-4
                py-5
                text-center

                sm:px-5
                sm:py-6

                md:flex
                md:items-center
                md:gap-5
                md:px-6
                md:text-left

                lg:block
                lg:px-5
                lg:py-7
                lg:text-center
              "
            >


              {/* USER ICON */}

              <div
                className="
                  relative
                  mx-auto
                  flex
                  h-[68px]
                  w-[68px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border-[3px]
                  border-[#C8942E]
                  bg-white
                  text-[#064B50]
                  shadow-lg

                  sm:h-[76px]
                  sm:w-[76px]

                  md:mx-0

                  lg:mx-auto
                  lg:h-[82px]
                  lg:w-[82px]
                "
              >
                <UserRound
                  size={34}
                  strokeWidth={1.6}
                />
              </div>

              {/* USER NAME */}

              <div
                className="
                  relative
                  mt-3
                  min-w-0

                  md:mt-0

                  lg:mt-4
                "
              >
                <h2
                  className="
                    break-words
                    text-[19px]
                    font-semibold
                    leading-tight
                    text-white

                    sm:text-[21px]

                    lg:text-[22px]
                  "
                >
                  {userName}
                </h2>

                <p
                  className="
                    mt-1
                    text-[12px]
                    text-white/70
                  "
                >
                  Patient Profile
                </p>
              </div>

            </div>

            {/* ===============================================
                PERSONAL INFORMATION
            =============================================== */}

            <div
              className="
                p-4

                sm:p-5

                md:p-6

                lg:p-5

                xl:p-6
              "
            >

              {/* HEADING */}

              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <div
                  className="
                    h-[3px]
                    w-6
                    rounded-full
                    bg-[#C8942E]
                  "
                />

                <h3
                  className="
                    text-[14px]
                    font-semibold
                    text-[#064B50]
                  "
                >
                  Personal Information
                </h3>
              </div>

              {/* DETAILS

                  Mobile = 1 column
                  Tablet = 3 columns
                  Desktop sidebar = 1 column
              */}

              <div
                className="
                  mt-5
                  grid
                  grid-cols-1
                  gap-5

                  sm:grid-cols-2

                  md:grid-cols-3

                  lg:grid-cols-1
                "
              >

                <ProfileInfo
                  icon={UserRound}
                  label="Full Name"
                  value={userName}
                />

                <ProfileInfo
                  icon={Mail}
                  label="Email Address"
                  value={userEmail}
                />

                <ProfileInfo
                  icon={Phone}
                  label="Mobile Number"
                  value={userMobile}
                />

              </div>

            </div>
          </div>
        </aside>

        {/* ===================================================
            RIGHT SIDE
            MEDICAL HISTORY
        =================================================== */}

        <div className="min-w-0 w-full">

          {/* =================================================
              SUMMARY CARDS

              Mobile  = 2 columns
              Tablet  = 4 columns
              Laptop  = 2 columns because sidebar present
              Desktop = 4 columns
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-2.5

              sm:gap-3

              md:grid-cols-4

              lg:grid-cols-2

              xl:grid-cols-4
            "
          >

            <SummaryCard
              icon={Stethoscope}
              value="05"
              label="Consultations"
            />

            <SummaryCard
              icon={UserRound}
              value="04"
              label="Doctors Consulted"
            />

            <SummaryCard
              icon={HeartPulse}
              value="03"
              label="Conditions"
            />

            <SummaryCard
              icon={Pill}
              value="04"
              label="Treatments"
            />

          </div>

          {/* =================================================
              HISTORY HEADING
          ================================================= */}

          <div
            className="
              mt-5
              rounded-[16px]
              border
              border-[#DCE8E7]
              bg-white
              p-4

              sm:mt-6
              sm:rounded-[20px]
              sm:p-5

              md:p-6
            "
          >
            <div
              className="
                flex
                items-start
                gap-3

                sm:gap-4
              "
            >

              {/* ICON */}

              <div
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#EEF6F5]
                  text-[#064B50]

                  sm:h-11
                  sm:w-11
                  sm:rounded-xl
                "
              >
                <Activity size={19} />
              </div>

              {/* TITLE */}

              <div className="min-w-0">

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#C8942E]

                    sm:text-[10px]
                    sm:tracking-[0.18em]
                  "
                >
                  Medical History
                </p>

                <h1
                  className="
                    mt-1
                    break-words
                    text-[18px]
                    font-semibold
                    leading-6
                    text-[#064B50]

                    sm:text-[21px]
                    sm:leading-7

                    md:text-[24px]
                  "
                >
                  Consultation & Treatment History
                </h1>

                <p
                  className="
                    mt-2
                    max-w-[700px]
                    text-[12px]
                    leading-5
                    text-[#66797A]

                    sm:text-[13px]
                    sm:leading-6

                    md:text-[14px]
                  "
                >
                  Previous doctor consultations,
                  medical conditions, treatments,
                  medications and follow-up history.
                </p>

              </div>
            </div>
          </div>

          {/* =================================================
              HISTORY CARDS
          ================================================= */}

          <div
            className="
              mt-4
              space-y-4

              sm:mt-5
              sm:space-y-5
            "
          >
            {medicalHistory.map(
              (record, index) => (
                <HistoryCard
                  key={record.id}
                  record={record}
                  index={index}
                />
              )
            )}
          </div>

          {/* =================================================
              DEMO NOTE
          ================================================= */}

          <div
            className="
              mt-5
              flex
              items-start
              gap-3
              rounded-[16px]
              border
              border-[#D6E5E3]
              bg-[#EEF6F5]
              p-4

              sm:mt-6
              sm:rounded-[18px]
              sm:p-5
            "
          >
            <ShieldCheck
              size={19}
              className="
                mt-0.5
                shrink-0
                text-[#064B50]
              "
            />

            <div className="min-w-0">

              <p
                className="
                  text-[13px]
                  font-semibold
                  text-[#064B50]

                  sm:text-[14px]
                "
              >
                Demo Medical History
              </p>

              <p
                className="
                  mt-1
                  text-[12px]
                  leading-5
                  text-[#607576]

                  sm:text-[13px]
                  sm:leading-6
                "
              >
                Name, email and mobile number are
                taken from the logged-in user.
                Medical history is currently
                hardcoded for UI testing.
              </p>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

/* =========================================================
   PROFILE INFO
========================================================= */

function ProfileInfo({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div
      className="
        flex
        min-w-0
        items-start
        gap-3
      "
    >

      {/* ICON */}

      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          bg-[#EEF6F5]
          text-[#C8942E]

          sm:h-10
          sm:w-10
        "
      >
        <Icon size={16} />
      </div>

      {/* CONTENT */}

      <div className="min-w-0 flex-1">

        <p
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-[#8A9899]

            sm:text-[10px]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            break-all
            text-[12px]
            font-medium
            leading-5
            text-[#344F51]

            sm:break-words
            sm:text-[13px]
          "
        >
          {value}
        </p>

      </div>
    </div>
  );
}

/* =========================================================
   SUMMARY CARD
========================================================= */

function SummaryCard({
  icon: Icon,
  value,
  label,
}) {
  return (
    <article
      className="
        min-w-0
        rounded-[14px]
        border
        border-[#DCE8E7]
        bg-white
        p-3
        transition-all
        duration-300

        sm:rounded-[16px]
        sm:p-4

        hover:-translate-y-1
        hover:border-[#C8942E]/40
        hover:shadow-[0_10px_25px_rgba(6,75,80,0.06)]
      "
    >

      {/* ICON */}

      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-lg
          bg-[#EEF6F5]
          text-[#064B50]

          sm:h-9
          sm:w-9
        "
      >
        <Icon size={16} />
      </div>

      {/* VALUE */}

      <p
        className="
          mt-3
          text-[21px]
          font-semibold
          leading-none
          text-[#064B50]

          sm:text-[24px]
        "
      >
        {value}
      </p>

      {/* LABEL */}

      <p
        className="
          mt-1.5
          break-words
          text-[10px]
          leading-4
          text-[#708283]

          sm:mt-2
          sm:text-[12px]
          sm:leading-5
        "
      >
        {label}
      </p>

    </article>
  );
}

/* =========================================================
   HISTORY CARD
========================================================= */

function HistoryCard({
  record,
  index,
}) {
  const isCompleted =
    record.status === "Completed";

  return (
    <article
      className="
        min-w-0
        overflow-hidden
        rounded-[16px]
        border
        border-[#DCE8E7]
        bg-white
        transition-all
        duration-300

        sm:rounded-[20px]

        hover:border-[#C8942E]/40
        hover:shadow-[0_12px_35px_rgba(6,75,80,0.07)]
      "
    >

      {/* =====================================================
          DOCTOR HEADER
      ====================================================== */}

      <div
        className="
          border-b
          border-[#E5EEEE]
          bg-[#F8FAFA]
          px-3.5
          py-3.5

          sm:px-5
          sm:py-4
        "
      >
        <div
          className="
            flex
            flex-col
            gap-3

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          {/* DOCTOR */}

          <div
            className="
              flex
              min-w-0
              items-center
              gap-3
            "
          >

            {/* NUMBER */}

            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#064B50]
                text-[11px]
                font-bold
                text-white

                sm:h-11
                sm:w-11
                sm:text-[12px]
              "
            >
              {String(index + 1).padStart(
                2,
                "0"
              )}
            </div>

            {/* DOCTOR INFO */}

            <div className="min-w-0">

              <h3
                className="
                  break-words
                  text-[15px]
                  font-semibold
                  leading-5
                  text-[#064B50]

                  sm:text-[17px]
                  sm:leading-6
                "
              >
                {record.doctor}
              </h3>

              <p
                className="
                  mt-0.5
                  text-[11px]
                  font-medium
                  text-[#C8942E]

                  sm:text-[13px]
                "
              >
                {record.speciality}
              </p>

            </div>
          </div>

          {/* DATE */}

          <div
            className="
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-[#DCE8E7]
              bg-white
              px-3
              py-1.5
              text-[11px]
              font-medium
              text-[#607576]

              sm:text-[12px]
            "
          >
            <CalendarDays size={13} />

            {record.date}
          </div>

        </div>
      </div>

      {/* =====================================================
          HISTORY CONTENT
      ====================================================== */}

      <div
        className="
          p-3.5

          sm:p-5
        "
      >

        {/* ===================================================
            HOSPITAL
        =================================================== */}

        <div
          className="
            flex
            min-w-0
            items-start
            gap-2.5
            rounded-[12px]
            bg-[#F7FAFA]
            p-3

            sm:gap-3
            sm:rounded-[13px]
            sm:p-3.5
          "
        >
          <Building2
            size={17}
            className="
              mt-0.5
              shrink-0
              text-[#C8942E]
            "
          />

          <div className="min-w-0">

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#879596]

                sm:text-[10px]
              "
            >
              Hospital
            </p>

            <p
              className="
                mt-1
                break-words
                text-[12px]
                font-medium
                leading-5
                text-[#344F51]

                sm:text-[14px]
              "
            >
              {record.hospital}
            </p>

          </div>
        </div>

        {/* ===================================================
            HISTORY DETAILS

            Mobile = 1 column
            Tablet = 2 columns
            Desktop = 2 columns
            Large desktop = 3 columns
        =================================================== */}

        <div
          className="
            mt-4
            grid
            grid-cols-1
            gap-x-5
            gap-y-4

            sm:mt-5
            sm:grid-cols-2
            sm:gap-y-5

            lg:grid-cols-2

            2xl:grid-cols-3
          "
        >

          {/* CONDITION */}

          <HistoryItem
            icon={HeartPulse}
            label="Disease / Condition"
            value={record.condition}
          />

          {/* TREATMENT */}

          <HistoryItem
            icon={Stethoscope}
            label="Treatment"
            value={record.treatment}
          />

          {/* MEDICATION */}

          <HistoryItem
            icon={Pill}
            label="Medication"
            value={record.medicines}
          />

          {/* CONSULTATION DATE */}

          <HistoryItem
            icon={CalendarDays}
            label="Consultation Date"
            value={record.date}
          />

          {/* NEXT VISIT */}

          <HistoryItem
            icon={Clock3}
            label="Next Visit"
            value={record.nextVisit}
          />

          {/* STATUS */}

          <div className="min-w-0">

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#879596]

                sm:text-[10px]
              "
            >
              Status
            </p>

            <span
              className={`
                mt-2
                inline-flex
                rounded-full
                px-3
                py-1.5
                text-[10px]
                font-semibold

                sm:text-[11px]

                ${
                  isCompleted
                    ? "bg-[#EAF6EF] text-[#287548]"
                    : "bg-[#FFF4E1] text-[#A56A0B]"
                }
              `}
            >
              {record.status}
            </span>

          </div>

        </div>

      </div>
    </article>
  );
}

/* =========================================================
   HISTORY ITEM
========================================================= */

function HistoryItem({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="min-w-0">

      {/* LABEL */}

      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <Icon
          size={13}
          className="
            shrink-0
            text-[#C8942E]

            sm:h-[14px]
            sm:w-[14px]
          "
        />

        <p
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.07em]
            text-[#879596]

            sm:text-[10px]
            sm:tracking-[0.08em]
          "
        >
          {label}
        </p>

      </div>

      {/* VALUE */}

      <p
        className="
          mt-1.5
          break-words
          text-[12px]
          font-medium
          leading-5
          text-[#344F51]

          sm:mt-2
          sm:text-[14px]
          sm:leading-6
        "
      >
        {value}
      </p>

    </div>
  );
}