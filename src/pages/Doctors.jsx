import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Award,
  BriefcaseMedical,
  GraduationCap,
  LoaderCircle,
  MapPin,
  Search,
  Stethoscope,
  UserRound,
} from "lucide-react";

import Breadcrumb from
  "../components/Breadcrumb";

import {
  getDoctors,
} from "../api/doctorsApi";


/* =========================================
   BACKEND SERVER URL
   Used only for uploaded images.
   API URL itself still comes through
   axiosClient.
========================================= */

const API_URL =
  import.meta.env.VITE_API_URL || "";

const SERVER_URL =
  API_URL.replace(/\/api\/?$/, "");


/* =========================================
   IMAGE URL
========================================= */

function getDoctorImage(photo) {
  if (!photo) {
    return "";
  }

  if (
    photo.startsWith("http://") ||
    photo.startsWith("https://")
  ) {
    return photo;
  }

  return `${SERVER_URL}${photo}`;
}


/* =========================================
   QUALIFICATIONS
========================================= */

function getQualifications(doctor) {
  if (
    Array.isArray(
      doctor.qualifications
    )
  ) {
    return doctor.qualifications;
  }

  if (
    doctor.qualifications_text
  ) {
    return doctor.qualifications_text
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}


/* =========================================
   DOCTORS PAGE
========================================= */

export default function Doctors() {
  const [doctors, setDoctors] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");


  /* =======================================
     FETCH DOCTORS FROM BACKEND
  ======================================= */

  useEffect(() => {
    let active = true;

    const loadDoctors = async () => {
      try {
        setLoading(true);
        setError("");

        const data =
          await getDoctors();

        if (!active) return;

        setDoctors(
          Array.isArray(data?.rows)
            ? data.rows
            : []
        );
      } catch (err) {
  if (!active) return;

  setError(
    err.message ||
    "Unable to load doctors."
  );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadDoctors();

    return () => {
      active = false;
    };
  }, []);


  /* =======================================
     FRONTEND SEARCH
  ======================================= */

  const filteredDoctors =
    useMemo(() => {
      const keyword =
        search
          .trim()
          .toLowerCase();

      if (!keyword) {
        return doctors;
      }

      return doctors.filter(
        (doctor) => {
          const values = [
            doctor.name,
            doctor.designation,
            doctor.speciality_name,
            doctor.hospital_location,
            doctor.license_number,
            doctor.qualifications_text,
          ];

          return values.some(
            (value) =>
              String(value || "")
                .toLowerCase()
                .includes(keyword)
          );
        }
      );
    }, [doctors, search]);


  return (
    <main className="bg-white">

      {/* =====================================
          BREADCRUMB
      ====================================== */}

      <Breadcrumb
        title="Our Doctors"
        description="Meet experienced medical specialists committed to providing coordinated, patient-focused care and trusted medical guidance."
        items={[
          {
            label: "Our Doctors",
          },
        ]}
      />


      {/* =====================================
          DOCTORS SECTION
      ====================================== */}

      <section
        className="
          bg-[#F8FBFA]
          py-12

          sm:py-14

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

          {/* =================================
              SECTION HEADING
          ================================== */}

          <div
            className="
              mx-auto
              max-w-[760px]
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
              Our Medical Experts
            </p>

            <h2
              className="
                mt-2
                text-[27px]
                font-semibold
                leading-tight
                text-[#064B50]

                sm:text-[30px]

                md:text-[36px]
              "
            >
              Find The Right Doctor
              For Your Care
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[680px]

                text-[14px]
                leading-7
                text-[#5A6F70]

                md:text-[15px]
              "
            >
              Explore our medical
              specialists and find the
              right doctor based on
              speciality, experience and
              location.
            </p>
          </div>


          {/* =================================
              SEARCH
          ================================== */}

          {!loading &&
            !error &&
            doctors.length > 0 && (
              <div
                className="
                  mx-auto
                  mt-9
                  max-w-[620px]

                  md:mt-10
                "
              >
                <div
                  className="
                    flex
                    h-[54px]
                    items-center
                    gap-3

                    rounded-[14px]
                    border
                    border-[#D9E6E5]

                    bg-white
                    px-4

                    shadow-[0_8px_25px_rgba(6,75,80,0.05)]

                    transition

                    focus-within:border-[#C8942E]
                    focus-within:shadow-[0_10px_30px_rgba(6,75,80,0.08)]
                  "
                >
                  <Search
                    size={20}
                    className="
                      shrink-0
                      text-[#C8942E]
                    "
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) =>
                      setSearch(
                        e.target.value
                      )
                    }
                    placeholder="Search doctor, speciality or location"
                    className="
                      h-full
                      w-full
                      border-0
                      bg-transparent

                      text-[14px]
                      text-[#263F41]

                      outline-none

                      placeholder:text-[#89999A]
                    "
                  />
                </div>
              </div>
            )}


          {/* =================================
              LOADING
          ================================== */}

          {loading && (
            <div
              className="
                flex
                min-h-[280px]
                flex-col
                items-center
                justify-center
                gap-3
              "
            >
              <LoaderCircle
                size={34}
                className="
                  animate-spin
                  text-[#C8942E]
                "
              />

              <p
                className="
                  text-[14px]
                  text-[#657879]
                "
              >
                Loading doctors...
              </p>
            </div>
          )}


          {/* =================================
              ERROR
          ================================== */}

          {!loading && error && (
            <div
              className="
                mx-auto
                mt-10
                max-w-[700px]

                rounded-[16px]
                border
                border-red-200

                bg-red-50
                p-6

                text-center
              "
            >
              <p
                className="
                  text-[14px]
                  font-medium
                  text-red-600
                "
              >
                {error}
              </p>
            </div>
          )}


          {/* =================================
              EMPTY
          ================================== */}

          {!loading &&
            !error &&
            doctors.length === 0 && (
              <div
                className="
                  mx-auto
                  mt-12
                  max-w-[700px]

                  rounded-[20px]
                  border
                  border-[#DCE8E7]

                  bg-white
                  px-5
                  py-12

                  text-center
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center

                    rounded-2xl
                    bg-[#E8F3F2]

                    text-[#064B50]
                  "
                >
                  <Stethoscope
                    size={30}
                  />
                </div>

                <h3
                  className="
                    mt-5
                    text-[20px]
                    font-semibold
                    text-[#064B50]
                  "
                >
                  No doctors available
                </h3>

                <p
                  className="
                    mt-2
                    text-[14px]
                    leading-6
                    text-[#6A7C7D]
                  "
                >
                  Doctor profiles will
                  appear here when they
                  are added from the
                  admin panel.
                </p>
              </div>
            )}


          {/* =================================
              NO SEARCH RESULT
          ================================== */}

          {!loading &&
            !error &&
            doctors.length > 0 &&
            filteredDoctors.length ===
              0 && (
              <div
                className="
                  mx-auto
                  mt-12
                  max-w-[650px]

                  rounded-[18px]
                  border
                  border-[#DCE8E7]

                  bg-white
                  p-8

                  text-center
                "
              >
                <Search
                  size={30}
                  className="
                    mx-auto
                    text-[#C8942E]
                  "
                />

                <h3
                  className="
                    mt-4
                    text-[19px]
                    font-semibold
                    text-[#064B50]
                  "
                >
                  No matching doctors
                </h3>

                <p
                  className="
                    mt-2
                    text-[14px]
                    text-[#6A7C7D]
                  "
                >
                  Try another doctor,
                  speciality or location.
                </p>
              </div>
            )}


          {/* =================================
              DOCTOR CARDS
          ================================== */}

          {!loading &&
            !error &&
            filteredDoctors.length >
              0 && (
              <div
                className="
                  mt-10

                  grid
                  grid-cols-1
                  gap-6

                  sm:grid-cols-2

                  lg:grid-cols-3

                  xl:gap-7
                "
              >
                {filteredDoctors.map(
                  (doctor) => {
                    const qualifications =
                      getQualifications(
                        doctor
                      );

                    const photo =
                      getDoctorImage(
                        doctor.photo
                      );

                    return (
                      <article
                        key={doctor.id}
                        className="
                          group
                          overflow-hidden

                          rounded-[22px]
                          border
                          border-[#DCE8E7]

                          bg-white

                          shadow-[0_8px_28px_rgba(6,75,80,0.06)]

                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:border-[#C8942E]/50
                          hover:shadow-[0_18px_45px_rgba(6,75,80,0.12)]
                        "
                      >

                        {/* =====================
                            IMAGE
                        ====================== */}

                        <div
                          className="
                            relative
                            h-[300px]
                            overflow-hidden
                            bg-[#EAF3F2]

                            sm:h-[310px]

                            lg:h-[320px]
                          "
                        >
                          {photo ? (
                            <img
                              src={photo}
                              alt={
                                doctor.name ||
                                "Doctor"
                              }
                              className="
                                h-full
                                w-full
                                object-cover
                                object-top

                                transition-transform
                                duration-500

                                group-hover:scale-[1.03]
                              "
                              onError={(
                                event
                              ) => {
                                event.currentTarget.style.display =
                                  "none";
                              }}
                            />
                          ) : (
                            <div
                              className="
                                flex
                                h-full
                                w-full
                                items-center
                                justify-center
                              "
                            >
                              <UserRound
                                size={80}
                                strokeWidth={
                                  1.1
                                }
                                className="
                                  text-[#8CB0AE]
                                "
                              />
                            </div>
                          )}

                          {doctor.speciality_name && (
                            <div
                              className="
                                absolute
                                bottom-4
                                left-4
                                right-4
                              "
                            >
                              <span
                                className="
                                  inline-flex
                                  max-w-full
                                  items-center
                                  gap-2

                                  rounded-full

                                  bg-[#064B50]/95

                                  px-4
                                  py-2

                                  text-[12px]
                                  font-semibold
                                  text-white

                                  shadow-lg
                                "
                              >
                                <Stethoscope
                                  size={14}
                                />

                                <span
                                  className="
                                    truncate
                                  "
                                >
                                  {
                                    doctor.speciality_name
                                  }
                                </span>
                              </span>
                            </div>
                          )}
                        </div>


                        {/* =====================
                            CONTENT
                        ====================== */}

                        <div
                          className="
                            p-5

                            sm:p-6
                          "
                        >
                          <h3
                            className="
                              text-[21px]
                              font-semibold
                              leading-[1.3]
                              text-[#064B50]

                              md:text-[22px]
                            "
                          >
                            {doctor.name}
                          </h3>


                          {doctor.designation && (
                            <p
                              className="
                                mt-1.5
                                text-[13px]
                                font-medium
                                leading-6
                                text-[#C8942E]

                                sm:text-[14px]
                              "
                            >
                              {
                                doctor.designation
                              }
                            </p>
                          )}


                          {/* INFO */}

                          <div
                            className="
                              mt-5
                              space-y-3
                            "
                          >
                            {doctor.experience_years !==
                              null &&
                              doctor.experience_years !==
                                undefined &&
                              doctor.experience_years !==
                                "" && (
                                <div
                                  className="
                                    flex
                                    items-start
                                    gap-3
                                  "
                                >
                                  <div
                                    className="
                                      mt-[1px]
                                      flex
                                      h-8
                                      w-8
                                      shrink-0
                                      items-center
                                      justify-center

                                      rounded-lg
                                      bg-[#EDF6F5]

                                      text-[#064B50]
                                    "
                                  >
                                    <BriefcaseMedical
                                      size={
                                        16
                                      }
                                    />
                                  </div>

                                  <div>
                                    <p
                                      className="
                                        text-[11px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.08em]
                                        text-[#89999A]
                                      "
                                    >
                                      Experience
                                    </p>

                                    <p
                                      className="
                                        mt-0.5
                                        text-[13px]
                                        font-medium
                                        text-[#344E50]
                                      "
                                    >
                                      {
                                        doctor.experience_years
                                      }{" "}
                                      Years
                                    </p>
                                  </div>
                                </div>
                              )}


                            {doctor.hospital_location && (
                              <div
                                className="
                                  flex
                                  items-start
                                  gap-3
                                "
                              >
                                <div
                                  className="
                                    mt-[1px]
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-lg
                                    bg-[#EDF6F5]

                                    text-[#064B50]
                                  "
                                >
                                  <MapPin
                                    size={
                                      16
                                    }
                                  />
                                </div>

                                <div
                                  className="
                                    min-w-0
                                  "
                                >
                                  <p
                                    className="
                                      text-[11px]
                                      font-semibold
                                      uppercase
                                      tracking-[0.08em]
                                      text-[#89999A]
                                    "
                                  >
                                    Hospital /
                                    Location
                                  </p>

                                  <p
                                    className="
                                      mt-0.5
                                      text-[13px]
                                      leading-5
                                      text-[#344E50]
                                    "
                                  >
                                    {
                                      doctor.hospital_location
                                    }
                                  </p>
                                </div>
                              </div>
                            )}


                            {qualifications.length >
                              0 && (
                              <div
                                className="
                                  flex
                                  items-start
                                  gap-3
                                "
                              >
                                <div
                                  className="
                                    mt-[1px]
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-lg
                                    bg-[#EDF6F5]

                                    text-[#064B50]
                                  "
                                >
                                  <GraduationCap
                                    size={
                                      17
                                    }
                                  />
                                </div>

                                <div
                                  className="
                                    min-w-0
                                  "
                                >
                                  <p
                                    className="
                                      text-[11px]
                                      font-semibold
                                      uppercase
                                      tracking-[0.08em]
                                      text-[#89999A]
                                    "
                                  >
                                    Qualification
                                  </p>

                                  <p
                                    className="
                                      mt-0.5
                                      line-clamp-2
                                      text-[13px]
                                      leading-5
                                      text-[#344E50]
                                    "
                                  >
                                    {qualifications.join(
                                      ", "
                                    )}
                                  </p>
                                </div>
                              </div>
                            )}


                            {doctor.license_number && (
                              <div
                                className="
                                  flex
                                  items-start
                                  gap-3
                                "
                              >
                                <div
                                  className="
                                    mt-[1px]
                                    flex
                                    h-8
                                    w-8
                                    shrink-0
                                    items-center
                                    justify-center

                                    rounded-lg
                                    bg-[#EDF6F5]

                                    text-[#064B50]
                                  "
                                >
                                  <Award
                                    size={
                                      16
                                    }
                                  />
                                </div>

                                <div>
                                  <p
                                    className="
                                      text-[11px]
                                      font-semibold
                                      uppercase
                                      tracking-[0.08em]
                                      text-[#89999A]
                                    "
                                  >
                                    License No.
                                  </p>

                                  <p
                                    className="
                                      mt-0.5
                                      text-[13px]
                                      text-[#344E50]
                                    "
                                  >
                                    {
                                      doctor.license_number
                                    }
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>


                          {/* BIO */}

                          {doctor.short_bio && (
                            <p
                              className="
                                mt-5
                                line-clamp-3

                                border-t
                                border-[#E5ECEB]

                                pt-4

                                text-[13px]
                                leading-6
                                text-[#667879]
                              "
                            >
                              {
                                doctor.short_bio
                              }
                            </p>
                          )}
                        </div>
                      </article>
                    );
                  }
                )}
              </div>
            )}
        </div>
      </section>
    </main>
  );
}