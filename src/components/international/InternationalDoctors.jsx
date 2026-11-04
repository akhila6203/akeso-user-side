
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

import { isLoggedIn } from "../../utils/auth";
import { getDoctors } from "../../api/doctorsApi";
import { mapDoctor } from "../../utils/doctorMapper";
import { getAppointmentLink } from "../../data/doctorsData";



export default function InternationalDoctors({
  onOpenAuth,
}) {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);
const [loading, setLoading] = useState(true);
const [loadError, setLoadError] = useState("");



  const [visibleCount, setVisibleCount] =
    useState(3);

  const [currentIndex, setCurrentIndex] =
    useState(0);

    /* ==========================================
   LOAD DOCTORS FROM BACKEND API
========================================== */

useEffect(() => {
  let cancelled = false;

  async function loadDoctors() {
    try {
      setLoading(true);
      setLoadError("");

      const response = await getDoctors();

      // Supports direct API response and Axios response
      const result = response?.data ?? response;

const rows = Array.isArray(result)
  ? result
  : Array.isArray(result?.rows)
  ? result.rows
  : Array.isArray(result?.data)
  ? result.data
  : Array.isArray(result?.data?.rows)
  ? result.data.rows
  : Array.isArray(result?.doctors)
  ? result.doctors
  : [];

      const mappedDoctors = rows.map(mapDoctor);

      if (!cancelled) {
        setDoctors(mappedDoctors);
      }
    } catch (error) {
      if (!cancelled) {
        setLoadError(
          error.message || "Unable to load doctors."
        );
      }
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  }

  loadDoctors();

  return () => {
    cancelled = true;
  };
}, []);

  /* ==========================================
     RESPONSIVE CARD COUNT

     Mobile  = 1
     Tablet  = 2
     Desktop = 3
  ========================================== */

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1200) {
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

  /* ==========================================
     RESET SLIDER ON SCREEN SIZE CHANGE
  ========================================== */

  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount, doctors.length]);
  /* ==========================================
     NEXT SLIDE
  ========================================== */

  const nextSlide = () => {
    if (!doctors.length) return;

    setCurrentIndex(
      (previousIndex) =>
        (previousIndex + 1) % doctors.length
    );
  };

  /* ==========================================
     PREVIOUS SLIDE
  ========================================== */

  const prevSlide = () => {
    if (!doctors.length) return;

    setCurrentIndex(
      (previousIndex) =>
        (previousIndex - 1 + doctors.length) %
        doctors.length
    );
  };

  /* ==========================================
     AUTO PLAY - EVERY 4 SECONDS
  ========================================== */

  useEffect(() => {
    if (doctors.length <= visibleCount) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(
        (previousIndex) =>
          (previousIndex + 1) % doctors.length
      );
    }, 4000);

    return () => clearInterval(timer);
 }, [visibleCount, doctors.length]);

  /* ==========================================
     INFINITE VISIBLE DOCTORS
  ========================================== */

  const visibleDoctors = doctors.length
    ? Array.from(
        {
          length: Math.min(
            visibleCount,
            doctors.length
          ),
        },
        (_, index) =>
          doctors[
            (currentIndex + index) %
              doctors.length
          ]
      )
    : [];

  /* ==========================================
     MEET THE DOCTOR

     Logged in:
       Open doctor details page.

     Not logged in:
       Open existing login drawer.
  ========================================== */

  const handleMeetDoctor = (doctor) => {
    const doctorPath = `/doctors/${doctor.id}`;

    if (isLoggedIn()) {
      navigate(doctorPath);
      return;
    }

    onOpenAuth?.("login", doctorPath);
  };

  /* ==========================================
     VIEW ALL DOCTORS
  ========================================== */

  const handleViewAllDoctors = () => {
    const doctorsPath = "/doctors";

    if (isLoggedIn()) {
      navigate(doctorsPath);
      return;
    }

    onOpenAuth?.("login", doctorsPath);
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mx-auto max-w-[780px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C8942E]">
            Specialist Network
          </p>

          <h2 className="mt-3 text-[30px] font-semibold text-[#064B50] md:text-[40px]">
            Meet Our Doctors
          </h2>

          <p className="mt-4 text-[15px] leading-7 text-[#262727] md:text-[16px]">
            Connect with suitable specialists from
            our healthcare network based on your
            diagnosis, medical requirements and
            treatment plan.
          </p>
        </div>


        {/* DOCTORS SLIDER */}

{/* DOCTORS SLIDER */}
<div className="relative mt-12">

  {loading && (
    <div className="py-12 text-center text-[15px] text-[#52696A]">
      Loading doctors...
    </div>
  )}

  {!loading && loadError && (
    <div className="py-12 text-center text-[15px] text-[#52696A]">
      {loadError}
    </div>
  )}

  {!loading && !loadError && doctors.length === 0 && (
    <div className="py-12 text-center text-[15px] text-[#52696A]">
      No doctors available at the moment.
    </div>
  )}

  {!loading && !loadError && doctors.length > 0 && (
    <>
      {/* LEFT ARROW */}
      {doctors.length > visibleCount && (
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous doctors"
          className="absolute left-[-12px] top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#C8942E] bg-white text-[#064B50] shadow-[0_8px_25px_rgba(6,75,80,0.12)] transition-all duration-300 hover:bg-[#064B50] hover:text-white md:left-[-18px]"
        >
          <ArrowLeft size={19} />
        </button>
      )}

      {/* DOCTOR CARDS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleDoctors.map((doctor, position) => (
          <DoctorCard
            key={`${doctor.id}-${position}`}
            doctor={doctor}
            onMeetDoctor={() => handleMeetDoctor(doctor)}
          />
        ))}
      </div>

      {/* RIGHT ARROW */}
      {doctors.length > visibleCount && (
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next doctors"
          className="absolute right-[-12px] top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#C8942E] bg-[#064B50] text-white shadow-[0_8px_25px_rgba(6,75,80,0.14)] transition-all duration-300 hover:bg-[#C8942E] md:right-[-18px]"
        >
          <ArrowRight size={19} />
        </button>
      )}

      {/* SLIDER DOTS */}
      {doctors.length > visibleCount && (
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {doctors.map((doctor, index) => (
            <button
              key={doctor.id}
              type="button"
              aria-label={`Go to doctor slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-[#C8942E]"
                  : "w-2 bg-[#c6dddd] hover:bg-[#064B50]"
              }`}
            />
          ))}
        </div>
      )}
    </>
  )}
</div>

{/* VIEW ALL DOCTORS */}
<div className="mt-9 text-center">
  <button
    type="button"
    onClick={handleViewAllDoctors}
    className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#064B50] px-6 py-3 text-[14px] font-semibold text-white transition-all duration-300 hover:bg-[#0B6268] hover:shadow-[0_10px_25px_rgba(6,75,80,0.18)]"
  >
    View All Doctors

    <ArrowRight
      size={16}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </button>
</div>

      </div>
    </section>
    
  );
}

/* ==========================================
   DOCTOR CARD
========================================== */

function DoctorCard({
  doctor,
  onMeetDoctor,
}) {
  return (
    <article className="group flex h-full min-h-[535px] flex-col overflow-hidden rounded-[20px] border border-[#dfe9e8] bg-white shadow-[0_8px_30px_rgba(6,75,80,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C8942E]/50 hover:shadow-[0_18px_42px_rgba(6,75,80,0.11)]">

      {/* DOCTOR TOP */}
      <div className="flex items-center gap-4 border-b border-[#e5eceb] bg-[#f7fbfa] p-5">

        {/* DOCTOR IMAGE */}
        <div className="h-[92px] w-[92px] shrink-0 overflow-hidden rounded-2xl border-[3px] border-white bg-[#eef6f5] shadow-sm">
          <img
            src={doctor.image}
            alt={`Illustration for ${doctor.name}`}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* DOCTOR BASIC DETAILS */}
        <div className="min-w-0">
          <span className="inline-flex rounded-full bg-[#fff7e8] px-3 py-1 text-[11px] font-semibold text-[#A9781F]">
            {doctor.speciality}
          </span>

          <h3 className="mt-2 text-[18px] font-semibold leading-6 text-[#064B50] sm:text-[19px]">
            {doctor.name}
          </h3>

          {/* <p className="mt-1 text-[15px] leading-5 text-[#303232]">
            {doctor.designation ||
              doctor.speciality}
          </p> */}
          <p className="mt-1 text-[14px] leading-5 text-[#303232]">
  Registration: {doctor.registrationNumber || "Not available"}
</p>
        </div>
      </div>

      {/* DOCTOR INFORMATION */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* QUALIFICATIONS */}
        <DoctorInfo
          icon={GraduationCap}
          title="Qualification"
          items={doctor.qualifications}
        />

        <div className="my-5 h-px bg-[#e7eeee]" />

        {/* EXPERTISE */}
        <DoctorInfo
          icon={Stethoscope}
          title="Specialization & Expertise"
          items={doctor.expertise}
        />

        {/* MEET THE DOCTOR */}
        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={onMeetDoctor}
            className="group/btn flex w-full items-center justify-center gap-2 rounded-lg border border-[#064B50] bg-[#064B50] px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:border-[#C8942E] hover:bg-[#C8942E]"
          >
            Meet the Doctor

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </button>
        </div>
      </div>
    </article>
  );
}

/* ==========================================
   DOCTOR INFO
========================================== */

function DoctorInfo({
  icon: Icon,
  title,
  items = [],
}) {
  const safeItems = Array.isArray(items)
    ? items
    : [];

  return (
    <div>
      {/* TITLE */}
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#eef6f5]">
          <Icon
            size={17}
            className="text-[#C8942E]"
          />
        </div>

        <h4 className="text-[14px] font-semibold text-[#064B50]">
          {title}
        </h4>
      </div>

      {/* ITEMS */}
      <div className="mt-3 space-y-2">
        {safeItems.length ? (
          safeItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-start gap-2 text-[15px] leading-5 text-[#303232]"
            >
              <BadgeCheck
                size={14}
                className="mt-[3px] shrink-0 text-[#C8942E]"
              />

              {/* <span>{item}</span> */}
              <span
  className="line-clamp-2"
  title={item}
>
  {item}
</span>
            </div>
          ))
        ) : (
          <p className="text-[14px] text-[#52696A]">
            Details pending verification.
          </p>
        )}
      </div>
    </div>
  );
}



