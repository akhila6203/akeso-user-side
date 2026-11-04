import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  CalendarDays,
  Search,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";

import Breadcrumb from "../components/Breadcrumb";
import { getDoctors } from "../api/doctorsApi";
import { mapDoctor } from "../utils/doctorMapper";
import { getAppointmentLink } from "../data/doctorsData";


export default function Doctors() {
  const [search, setSearch] = useState("");
  const [speciality, setSpeciality] = useState("All");

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadDoctors() {
      try {
        setLoading(true);
        setLoadError("");

       const response = await getDoctors();

// Supports both Axios response and direct API response
const result = response?.data ?? response;

const rows = Array.isArray(result?.rows)
  ? result.rows
  : Array.isArray(result?.data?.rows)
  ? result.data.rows
  : [];

if (!cancelled) {
  setDoctors(rows.map(mapDoctor));
}
      } catch (error) {
        if (!cancelled) {
          setLoadError(
            error.message || "Unable to load doctors. Please try again."
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

  const specialities = useMemo(() => {
    return [
      "All",
      ...Array.from(
        new Set(
          doctors
            .map((doctor) => doctor.speciality)
            .filter(Boolean)
        )
      ).sort(),
    ];
  }, [doctors]);

 const filteredDoctors = useMemo(() => {
  const keyword = search.trim().toLowerCase();

  return doctors.filter((doctor) => {
    const name = String(doctor.name || "").toLowerCase();
    const specialityName = String(doctor.speciality || "").toLowerCase();

    const matchesSearch =
      name.includes(keyword) ||
      specialityName.includes(keyword);

    const matchesSpeciality =
      speciality === "All" ||
      doctor.speciality === speciality;

    return matchesSearch && matchesSpeciality;
  });
}, [doctors, search, speciality]);

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb
        title="Our Doctors"
        description="Explore our doctors and connect with our team for consultation and appointment assistance."
        items={[{ label: "Our Doctors" }]}
      />

      <section className="bg-white py-6 sm:py-10 lg:py-14">
        <div className="mx-auto max-w-[1350px] px-4 sm:px-6 lg:px-10">

          {/* PAGE HEADING */}
          <div className="mx-auto max-w-[800px] text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF6F5] px-4 py-2 text-[12px] font-semibold text-[#064B50]">
              <Stethoscope size={16} />
              Medical Specialists
            </span>

            <h1 className="mt-3 text-[29px] font-semibold text-[#064B50] sm:text-[36px] lg:text-[42px]">
              Meet Our Doctors
            </h1>

            <p className="mt-2 text-[15px] leading-8 text-[#52696A] sm:text-[16px]">
              Explore medical specialists across different
              areas of healthcare. View doctor profiles and
              connect with our team for appointment support.
            </p>
          </div>

          {/* SEARCH AND FILTER */}
          <div className="mt-4 grid gap-4  p-3 sm:grid-cols-[1fr_250px] sm:p-4">

            <div className="relative">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78908E]"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search doctor or speciality..."
                className="h-12 w-full rounded-xl border border-[#D8E5E3] bg-white pl-11 pr-10 text-[14px] text-[#064B50] outline-none focus:border-[#C8942E]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#52696A]"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            <select
              value={speciality}
              onChange={(event) =>
                setSpeciality(event.target.value)
              }
              className="h-12 w-full rounded-xl border border-[#D8E5E3] bg-white px-4 text-[14px] text-[#064B50] outline-none focus:border-[#C8942E]"
            >
              {specialities.map((item) => (
                <option key={item} value={item}>
                  {item === "All"
                    ? "All Specialities"
                    : item}
                </option>
              ))}
            </select>
          </div>

{loading && (
  <div className="mt-10 py-12 text-center text-[15px] text-[#52696A]">
    Loading doctors...
  </div>
)}

{!loading && loadError && (
  <div className="mt-8 rounded-[20px] border border-[#DCE8E6] bg-[#F7FAF9] px-5 py-12 text-center">
    <p className="text-[15px] text-[#52696A]">
      {loadError}
    </p>

    <button
      type="button"
      onClick={() => window.location.reload()}
      className="mt-4 rounded-lg bg-[#064B50] px-5 py-2 text-[14px] font-semibold text-white"
    >
      Retry
    </button>
  </div>
)}

                    {/* RESULTS */}
          <div className="mt-6 flex items-center justify-between gap-3">
            <p className="text-[14px] text-[#52696A]">
              Showing{" "}
              <span className="font-semibold text-[#064B50]">
                {filteredDoctors.length}
              </span>{" "}
              doctors
            </p>

            {(search || speciality !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSpeciality("All");
                }}
                className="text-[13px] font-semibold text-[#A9781F]"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* DOCTORS GRID */}
          {!loading && !loadError && (
            filteredDoctors.length > 0 ? (
              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredDoctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-[20px] border border-[#DCE8E6] bg-[#F7FAF9] px-5 py-16 text-center">
                <UserRound
                  size={42}
                  className="mx-auto text-[#A5BCB9]"
                />

                <h3 className="mt-4 text-[20px] font-semibold text-[#064B50]">
                  No doctors found
                </h3>

                <p className="mt-2 text-[14px] text-[#52696A]">
                  Try searching with another name or speciality.
                </p>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

/* ==========================================
   DOCTOR CARD
========================================== */

function DoctorCard({ doctor }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#DCE8E6] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C8942E]/50 hover:shadow-[0_16px_38px_rgba(6,75,80,0.10)]">

      <div className="h-[245px] w-full overflow-hidden bg-[#EEF6F5] sm:h-[260px] lg:h-[270px]">
  <img
    src={doctor.image}
    alt={`Illustration for ${doctor.name}`}
    loading="lazy"
    className="block h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
  />
</div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h2 className="min-h-[52px] text-[18px] font-semibold leading-[1.5] text-[#064B50] sm:text-[19px]">
          {doctor.name}
        </h2>

        <div className="mt-1 flex items-start gap-2 text-[15px] leading-6 text-[#232525] sm:text-[16px]">
          <Stethoscope
            size={16}
            className="mt-1 shrink-0 text-[#C8942E]"
          />
          <span>{doctor.speciality}</span>
        </div>

        <div className="mt-auto pt-6">
          <div className="h-px bg-[#E5EFED]" />

          <div className="mt-4 flex w-full gap-2">
            <Link
              to={`/doctors/${doctor.id}`}
              title="Know More"
              className="flex min-h-[40px] min-w-0 flex-[34_1_0%] items-center justify-center rounded-lg bg-[#064B50] px-1 py-2 text-center text-[10px] font-semibold leading-tight text-white transition hover:bg-[#0B6268] sm:text-[13px]"
            >
              Know More
            </Link>

            <a
              href={getAppointmentLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[40px] min-w-0 flex-[66_1_0%] items-center justify-center gap-2 rounded-lg bg-[#C8942E] px-2 py-2 text-center text-[12px] font-semibold leading-tight text-white transition hover:bg-[#A9781F] sm:text-[13px]"
            >
              <CalendarDays size={15} className="shrink-0" />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
