import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  useSpecialities,
} from "../../context/SpecialitiesContext";

import {
  getSpecialityIcon,
} from "../../utils/specialityIcon";


export default function HomeSpecialities() {

  /* =========================================
     SAME SPECIALITIES DATA

     API malli call cheyyadam ledu.
     Context lo already loaded data use chestham.
  ========================================= */

  const {
    specialities,
    loading,
    error,
  } = useSpecialities();


  /* =========================================
     HOME = FIRST 8 ONLY

     Desktop:
     4 columns x 2 rows = 8 cards
  ========================================= */

  const homeSpecialities =
    specialities.slice(0, 8);


  return (
    <section className="bg-[#f4f8f7] py-16 md:py-20">

      <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">

        {/* =====================================
            HEADING
        ====================================== */}

        <div className="mx-auto mb-10 max-w-[720px] text-center">

          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#B78124]
            "
          >
            Centres of Excellence
          </p>


          <h2
            className="
              mt-2
              text-[30px]
              font-semibold
              text-[#064B50]
              md:text-[38px]
            "
          >
            Our Specialities
          </h2>


          <p
            className="
              mt-4
              text-[15px]
              leading-7
              text-[#484949]
              md:text-[15px]
            "
          >
            Expert care across medical
            specialities, combining clinical
            excellence, advanced technology
            and compassionate patient support.
          </p>

        </div>


        {/* =====================================
            LOADING
        ====================================== */}

        {loading && (
          <div className="py-12 text-center">

            <div
              className="
                mx-auto
                h-9
                w-9
                animate-spin
                rounded-full
                border-4
                border-[#DCE8E7]
                border-t-[#064B50]
              "
            />

            <p className="mt-4 text-[14px] text-[#5A6F70]">
              Loading specialities...
            </p>

          </div>
        )}


        {/* =====================================
            ERROR
        ====================================== */}

        {!loading &&
          error && (

          <div className="py-12 text-center">

            <p className="text-[14px] text-red-600">
              {error}
            </p>

          </div>
        )}


        {/* =====================================
            SPECIALITY CARDS
        ====================================== */}

        {!loading &&
          !error &&
          homeSpecialities.length > 0 && (

          <div
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-4
              md:gap-6
            "
          >

            {homeSpecialities.map(
              (speciality) => {

                /*
                  API gives:
                  speciality.id
                  speciality.name
                  speciality.slug

                  Icon:
                  Name based automatic resolver
                */

                const Icon =
                  getSpecialityIcon(
                    speciality.name
                  );


                return (

                  <Link
                    key={speciality.id}

                    to={`/speciality/${speciality.slug}`}

                    className="
                      group
                      relative
                      flex
                      min-h-[220px]
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[#dfe9e8]
                      bg-white
                      px-5
                      py-6
                      text-center
                      shadow-[0_8px_26px_rgba(6,75,80,0.06)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#C8942E]/55
                      hover:shadow-[0_16px_36px_rgba(6,75,80,0.12)]
                    "
                  >

                    {/* DOTTED BACKGROUND */}

                    <div
                      className="
                        absolute
                        inset-0
                        opacity-[0.12]
                      "
                      style={{
                        backgroundImage:
                          "radial-gradient(#C8942E 1px, transparent 1px)",

                        backgroundSize:
                          "18px 18px",
                      }}
                    />


                    {/* ICON */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        bg-[#e8f3f2]
                        transition-all
                        duration-300
                        group-hover:bg-[#064B50]
                      "
                    >

                      <Icon
                        size={33}
                        strokeWidth={1.4}
                        className="
                          text-[#B78124]
                          transition-colors
                          group-hover:text-white
                        "
                      />

                    </div>


                    {/* NAME */}

                    <h3
                      className="
                        relative
                        z-10
                        mt-4
                        flex
                        min-h-[44px]
                        items-center
                        justify-center
                        text-[16px]
                        font-semibold
                        leading-[21px]
                        text-[#263F41]
                        group-hover:text-[#064B50]
                      "
                    >
                      {speciality.name}
                    </h3>


                    {/* KNOW MORE */}

                    <div
                      className="
                        relative
                        z-10
                        mt-4
                        inline-flex
                        items-center
                        justify-center
                        gap-1
                        rounded-lg
                        border
                        border-[#d6e6e4]
                        bg-[#edf6f5]
                        px-4
                        py-2
                        text-[13px]
                        font-semibold
                        text-[#064B50]
                        transition-all
                        duration-300
                        group-hover:border-[#C8942E]
                        group-hover:bg-[#064B50]
                        group-hover:text-white
                      "
                    >

                      Know More

                      <ChevronRight
                        size={15}
                        strokeWidth={2}
                        className="
                          transition-transform
                          group-hover:translate-x-1
                        "
                      />

                    </div>

                  </Link>
                );
              }
            )}

          </div>
        )}


        {/* =====================================
            VIEW ALL SPECIALITIES
        ====================================== */}

        {!loading &&
          !error &&
          specialities.length > 0 && (

          <div className="mt-10 flex justify-center">

            <Link
              to="/specialities"

              className="
                group
                inline-flex
                min-h-[48px]
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-[#064B50]
                bg-[#064B50]
                px-7
                text-[14px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-[#C8942E]
                hover:bg-[#0B6268]
                hover:shadow-lg
              "
            >

              View All Specialities

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />

            </Link>

          </div>
        )}

      </div>

    </section>
  );
}

