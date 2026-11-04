import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Award,
  BookOpen,
  CalendarDays,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";

import Breadcrumb from "../components/Breadcrumb";
import { getDoctors, getDoctorById } from "../api/doctorsApi";
import { mapDoctor } from "../utils/doctorMapper";
import { getAppointmentLink } from "../data/doctorsData";

export default function DoctorDetails() {
  const { id } = useParams();

  const [doctor, setDoctor] = useState(null);
  const [relatedDoctors, setRelatedDoctors] = useState([]);
  const [activeTab, setActiveTab] = useState("expertise");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadDoctor() {
      try {
        setLoading(true);
        setLoadError("");

        const [doctorResponse, doctorsResponse] = await Promise.all([
          getDoctorById(id),
          getDoctors(),
        ]);

       const doctorResult = doctorResponse?.data ?? doctorResponse;
const doctorsResult = doctorsResponse?.data ?? doctorsResponse;

const currentDoctor =
  doctorResult?.data ?? doctorResult?.doctor ?? doctorResult;

if (!currentDoctor || !currentDoctor.id) {
  throw new Error("Doctor not found");
}

const mappedDoctor = mapDoctor(currentDoctor);

const doctorRows = Array.isArray(doctorsResult?.rows)
  ? doctorsResult.rows
  : Array.isArray(doctorsResult?.data?.rows)
  ? doctorsResult.data.rows
  : [];

const allDoctors = doctorRows.map(mapDoctor);

        if (!cancelled) {
          setDoctor(mappedDoctor);

          setRelatedDoctors(
            allDoctors
              .filter(
                (item) =>
                  item.id !== mappedDoctor.id &&
                  item.speciality === mappedDoctor.speciality
              )
              .slice(0, 3)
          );
        }
      } catch (error) {
        if (!cancelled) {
          setLoadError(error.message || "Unable to load doctor details");
          setDoctor(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadDoctor();

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center text-[15px] text-[#52696A]">
        Loading doctor details...
      </main>
    );
  }

  if (loadError || !doctor) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-[28px] font-semibold text-[#064B50]">
          {loadError || "Doctor Not Found"}
        </h1>

        <Link
          to="/doctors"
          className="mt-6 rounded-lg bg-[#064B50] px-6 py-3 text-white"
        >
          Back to Doctors
        </Link>
      </main>
    );
  }

  if (!doctor) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
        <h1 className="text-[28px] font-semibold text-[#064B50]">
          Doctor Not Found
        </h1>

        <Link
          to="/doctors"
          className="mt-6 rounded-lg bg-[#064B50] px-6 py-3 text-white"
        >
          Back to Doctors
        </Link>
      </main>
    );
  }

  const tabs = [
    {
      id: "expertise",
      title: "Areas of Expertise",
      icon: Stethoscope,
    },
    {
      id: "qualifications",
      title: "Qualifications",
      icon: GraduationCap,
    },
    {
      id: "experience",
      title: "Experience",
      icon: UserRound,
    },
    {
      id: "achievements",
      title: "Academic Achievements",
      icon: Award,
    },
  ];



  const renderTabContent = () => {
    if (activeTab === "expertise") {
      return (
        <InfoList
          items={doctor.expertise}
        />
      );
    }

    if (activeTab === "qualifications") {
      return (
        <InfoList
          items={doctor.qualifications}
        />
      );
    }

    if (activeTab === "experience") {
      return (
        <p className="text-[18px] leading-8 text-[#52696A]">
          {doctor.experience ||
            "Experience details pending verification."}
        </p>
      );
    }

    // return (
    //   <InfoList
    //     items={doctor.academicAchievements}
    //   />
    // );
    return doctor.academicAchievements ? (
  <div
    className="doctor-rich-content text-[16px] leading-8 text-[#52696A]"
    dangerouslySetInnerHTML={{
      __html: doctor.academicAchievements,
    }}
  />
) : (
  <p className="text-[16px] text-[#52696A]">
    Information pending verification.
  </p>
);
  };

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb
        title={doctor.name}
        description={doctor.speciality}
        items={[
          {
            label: "Our Doctors",
            to: "/doctors",
          },
          {
            label: doctor.name,
          },
        ]}
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-10">

          <Link
            to="/doctors"
            className="mb-7 inline-flex items-center gap-2 text-[16px] font-semibold text-[#064B50] hover:text-[#C8942E]"
          >
            <ArrowLeft size={17} />
            Back to Doctors
          </Link>

          {/* DOCTOR PROFILE */}
          {/* <div className="grid overflow-hidden rounded-[24px] border border-[#DCE8E6] bg-white shadow-[0_12px_40px_rgba(6,75,80,0.06)] md:grid-cols-[0.85fr_1.15fr]"> */}
          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">

           
            <div className="relative min-h-[350px] overflow-hidden rounded-xl bg-[#EEF6F5] sm:min-h-[450px] md:min-h-[520px]">
              <img
                src={doctor.image}
                alt={`Illustration for ${doctor.name}`}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>

            {/* <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12"> */}
            <div className="flex flex-col justify-center py-2 md:py-6">

              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#EEF6F5] px-4 py-2 text-[12px] font-semibold text-[#064B50]">
                <Stethoscope size={15} />
                Medical Specialist
              </span>

              <h1 className="text-[27px] font-semibold leading-tight text-[#064B50] sm:text-[34px]">
                {doctor.name}
              </h1>

              <p className="mt-3 text-[17px] font-medium text-[#C8942E]">
                {doctor.speciality}
              </p>

              {doctor.about && (
                <div
                  className="doctor-rich-content mt-5 text-[16px] leading-8 text-[#52696A]"
                  dangerouslySetInnerHTML={{ __html: doctor.about }}
                />
              )}

              <div className="mt-7 space-y-3">

                {doctor.experience && (
                  <DetailLine
                    icon={UserRound}
                    label="Experience"
                    value={doctor.experience}
                  />
                )}

                {doctor.location && (
                  <DetailLine
                    icon={MapPin}
                    label="Location"
                    value={doctor.location}
                  />
                )}

                {doctor.registrationNumber && (
                  <DetailLine
                    icon={ShieldCheck}
                    label="Registration"
                    value={`${doctor.registrationNumber} ${doctor.registrationCouncil || ""}`}
                  />
                )}

                {/* {doctor.qualifications?.length > 0 && (
                  <DetailLine
                    icon={GraduationCap}
                    label="Qualifications"
                    value={doctor.qualifications.join(", ")}
                  />
                )} */}
              </div>

              {/* PROFILE BUTTONS */}
              <div className="mt-8 flex w-full gap-2">

                <Link
                  to="/doctors"
                  className="flex min-h-[48px] min-w-0 flex-[1_1_25%] items-center justify-center rounded-xl border border-[#064B50] px-1 text-center text-[11px] font-semibold text-[#064B50] hover:bg-[#EEF6F5]"
                >
                  All Doctors
                </Link>

                <a
                  href={getAppointmentLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[48px] min-w-0 flex-[3_1_75%] items-center justify-center gap-2 rounded-xl bg-[#C8942E] px-2 text-center text-[13px] font-semibold text-white hover:bg-[#A9781F]"
                >
                  <CalendarDays size={16} />
                  Book Appointment
                </a>

              </div>
            </div>
          </div>

          {/* INFORMATION TABS */}
          <div className="mt-12 overflow-hidden rounded-[22px] border border-[#DCE8E6] bg-white sm:mt-16">

            <div className="flex flex-wrap gap-2 border-b border-[#DCE8E6] bg-[#F7FAF9] p-4 sm:p-5">
              {tabs.map((tab) => {
                const Icon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setActiveTab(tab.id)
                    }
                    className={`inline-flex items-center gap-2 rounded-lg px-4 py-3 text-[12px] font-semibold transition sm:text-[16px] ${
                      activeTab === tab.id
                        ? "bg-[#064B50] text-white"
                        : "bg-white text-[#064B50] hover:bg-[#E6F1EF]"
                    }`}
                  >
                    <Icon size={16} />
                    {tab.title}
                  </button>
                );
              })}
            </div>

            <div className="min-h-[180px] p-6 text-[16px] leading-8 text-[#52696A] sm:p-8">
              {renderTabContent()}
            </div>

          </div>

          {/* RELATED DOCTORS */}
          {relatedDoctors.length > 0 && (
            <section className="mt-14 sm:mt-20">

              <h2 className="text-[25px] font-semibold text-[#064B50] sm:text-[30px]">
                Related Doctors
              </h2>

              <p className="mt-2 text-[16px] text-[#52696A]">
                Explore other doctors in the same speciality.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {relatedDoctors.map((item) => (
                  <article
                    key={item.id}
                    className="flex flex-col overflow-hidden rounded-[20px] border border-[#DCE8E6] bg-white"
                  >

                   <img
                      src={item.image}
                      alt={`Illustration for ${item.name}`}
                      className="h-[220px] w-full bg-[#EEF6F5] object-cover object-center"
                    />
                    <div className="flex flex-1 flex-col p-5">

                      <h3 className="text-[18px] font-semibold text-[#064B50]">
                        {item.name}
                      </h3>

                      <p className="mt-2 text-[16px] text-[#52696A]">
                        {item.speciality}
                      </p>

                      <div className="mt-auto flex gap-2 pt-5">

                        <Link
                          to={`/doctors/${item.id}`}
                          className="flex min-h-[44px] min-w-0 flex-[1_1_25%] items-center justify-center rounded-lg bg-[#064B50] px-1 text-center text-[14px] font-semibold text-white"
                        >
                          Know More
                        </Link>

                        <a
                          href={getAppointmentLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[44px] min-w-0 flex-[3_1_75%] items-center justify-center gap-1 rounded-lg bg-[#C8942E] px-2 text-center text-[14px] font-semibold text-white"
                        >
                          <CalendarDays size={14} />
                          Book Appointment
                        </a>

                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

        </div>
      </section>
    </main>
  );
}

/* ==========================================
   DETAIL ROW
========================================== */

function DetailLine({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="flex items-start gap-3 text-[16px] text-[#52696A]">
      <Icon
        size={18}
        className="mt-1 shrink-0 text-[#C8942E]"
      />

      <p>
        <span className="font-semibold text-[#064B50]">
          {label}:
        </span>{" "}
        {value}
      </p>
    </div>
  );
}

/* ==========================================
   INFORMATION LIST
========================================== */

function InfoList({ items = [] }) {
  if (!items.length) {
    return (
      <p className="text-[16px] text-[#52696A]">
        Information pending verification.
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3"
        >
          <BookOpen
            size={17}
            className="mt-1.5 shrink-0 text-[#C8942E]"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}



