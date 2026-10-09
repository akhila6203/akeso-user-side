import {
  ArrowDown,
  ArrowUp,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";

import {
  useSpecialities,
} from "../context/SpecialitiesContext";

import {
  getSpecialityIcon,
} from "../utils/specialityIcon";

const INITIAL_VISIBLE = 16;
const LOAD_MORE_COUNT = 8;

export default function Specialities() {
  /* =========================================
     SHARED SPECIALITIES DATA
  ========================================= */

  const {
    specialities,
    loading,
    error,
  } = useSpecialities();

  /* =========================================
     VIEW MORE
  ========================================= */

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(INITIAL_VISIBLE);

  /* =========================================
     VISIBLE SPECIALITIES
  ========================================= */

  const visibleSpecialities =
    specialities.slice(
      0,
      visibleCount
    );

  const allVisible =
    visibleCount >=
    specialities.length;

  /* =========================================
     VIEW MORE / VIEW LESS
  ========================================= */

  const handleViewMore = () => {
    if (allVisible) {
      setVisibleCount(
        INITIAL_VISIBLE
      );

      setTimeout(() => {
        document
          .getElementById(
            "all-specialities"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);

      return;
    }

    setVisibleCount(
      (current) =>
        Math.min(
          current +
            LOAD_MORE_COUNT,
          specialities.length
        )
    );
  };

  return (
    <main className="bg-white">

      {/* =====================================
          HERO / BREADCRUMB
      ====================================== */}

      <Breadcrumb
        title="Our Specialities"
        description="Explore specialist healthcare services and coordinated medical support for patients seeking treatment in India."
        items={[
          {
            label: "Specialities",
          },
        ]}
      />

      {/* =====================================
          SPECIALITIES
      ====================================== */}

      <section
        id="all-specialities"
        className="
          scroll-mt-[100px]
          bg-white
          py-14
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

          {/* HEADING */}

          <div
            className="
              mx-auto
              mb-10
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
              Medical Expertise
            </p>

            <h2
              className="
                mt-2
                text-[28px]
                font-semibold
                text-[#064B50]
                md:text-[36px]
              "
            >
              Find The Right Speciality
            </h2>

            <p
              className="
                mt-3
                text-[16px]
                leading-7
                text-[#3a3b3b]
                md:text-[15px]
              "
            >
              Select a speciality to explore
              highlights, sub-specialities,
              care teams, treatments and
              related conditions.
            </p>
          </div>

          {/* =====================================
              LOADING
          ====================================== */}

          {loading && (
            <div
              className="
                py-16
                text-center
              "
            >
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

              <p
                className="
                  mt-4
                  text-[14px]
                  text-[#5A6F70]
                "
              >
                Loading specialities...
              </p>
            </div>
          )}

          {/* =====================================
              ERROR
          ====================================== */}

          {!loading && error && (
            <div
              className="
                py-14
                text-center
              "
            >
              <p
                className="
                  text-[14px]
                  text-red-600
                "
              >
                {error}
              </p>
            </div>
          )}

          {/* =====================================
              EMPTY
          ====================================== */}

          {!loading &&
            !error &&
            specialities.length === 0 && (
              <div
                className="
                  py-14
                  text-center
                "
              >
                <p
                  className="
                    text-[14px]
                    text-[#5A6F70]
                  "
                >
                  No specialities available.
                </p>
              </div>
            )}

          {/* =====================================
              CARDS
          ====================================== */}

          {!loading &&
            !error &&
            specialities.length > 0 && (
              <div
                className="
                  grid
                  grid-cols-1
                  gap-5
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >
                {visibleSpecialities.map(
                  (speciality) => {
                    const Icon =
                      getSpecialityIcon(
                        speciality.name
                      );

                    return (
                      <Link
                        key={
                          speciality.id
                        }
                        to={`/speciality/${speciality.slug}`}
                        className="
                          group
                          flex
                          min-h-[230px]
                          flex-col
                          items-center
                          justify-center
                          rounded-[20px]
                          border
                          border-[#DCE8E7]
                          bg-[#F8FBFA]
                          p-6
                          text-center
                          shadow-[0_7px_24px_rgba(6,75,80,0.05)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#C8942E]/60
                          hover:bg-white
                          hover:shadow-[0_15px_35px_rgba(6,75,80,0.11)]
                        "
                      >

                        {/* ICON */}

                        <div
                          className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#E5F1F0]
                            text-[#C8942E]
                            transition-all
                            duration-300
                            group-hover:bg-[#064B50]
                            group-hover:text-white
                          "
                        >
                          <Icon
                            size={30}
                            strokeWidth={
                              1.5
                            }
                          />
                        </div>

                        {/* NAME */}

                        <h3
                          className="
                            mt-5
                            min-h-[48px]
                            text-[16px]
                            font-semibold
                            leading-6
                            text-[#263F41]
                            transition-colors
                            group-hover:text-[#064B50]
                          "
                        >
                          {
                            speciality.name
                          }
                        </h3>

                        {/* KNOW MORE */}

                        <span
                          className="
                            mt-4
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-[#D6E6E4]
                            bg-[#EDF6F5]
                            px-4
                            py-2
                            text-[13px]
                            font-semibold
                            text-[#064B50]
                            transition-all
                            group-hover:border-[#064B50]
                            group-hover:bg-[#064B50]
                            group-hover:text-white
                          "
                        >
                          Know More

                          <ChevronRight
                            size={15}
                            className="
                              transition-transform
                              group-hover:translate-x-1
                            "
                          />
                        </span>

                      </Link>
                    );
                  }
                )}
              </div>
            )}

          {/* =====================================
              VIEW MORE / VIEW LESS
          ====================================== */}

          {!loading &&
            !error &&
            specialities.length >
              INITIAL_VISIBLE && (
              <div
                className="
                  mt-11
                  flex
                  flex-col
                  items-center
                "
              >
                <p
                  className="
                    mb-3
                    text-[12px]
                    text-[#2a2a2a]
                  "
                >
                  Showing{" "}
                  {Math.min(
                    visibleCount,
                    specialities.length
                  )}{" "}
                  of{" "}
                  {
                    specialities.length
                  }{" "}
                  specialities
                </p>

                <button
                  type="button"
                  onClick={
                    handleViewMore
                  }
                  className="
                    inline-flex
                    min-h-[46px]
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-[#064B50]
                    px-7
                    text-[14px]
                    font-semibold
                    text-white
                    transition-all
                    hover:bg-[#0B6268]
                  "
                >
                  {allVisible
                    ? "View Less"
                    : "View More"}

                  {allVisible ? (
                    <ArrowUp
                      size={16}
                    />
                  ) : (
                    <ArrowDown
                      size={16}
                    />
                  )}
                </button>
              </div>
            )}
        </div>
      </section>
    </main>
  );
}





// import {
//   ArrowDown,
//   ArrowUp,
//   ChevronRight,
//   Stethoscope,
// } from "lucide-react";

// import { useState } from "react";
// import { Link } from "react-router-dom";

// import {
//   specialties,
// } from "../data/navigation";
// import Breadcrumb from "../components/Breadcrumb";

// const INITIAL_VISIBLE = 16;
// const LOAD_MORE_COUNT = 8;

// export default function Specialities() {
//   const [visibleCount, setVisibleCount] =
//     useState(INITIAL_VISIBLE);

//   const visibleSpecialities =
//     specialties.slice(0, visibleCount);

//   const allVisible =
//     visibleCount >= specialties.length;

//   const handleViewMore = () => {
//     if (allVisible) {
//       setVisibleCount(INITIAL_VISIBLE);

//       setTimeout(() => {
//         document
//           .getElementById(
//             "all-specialities"
//           )
//           ?.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//       }, 100);

//       return;
//     }

//     setVisibleCount((current) =>
//       Math.min(
//         current + LOAD_MORE_COUNT,
//         specialties.length
//       )
//     );
//   };

//   return (
//     <main className="bg-white">
//       {/* HERO */}

//       <Breadcrumb
//         title="Our Specialities"
//         description="Explore specialist healthcare services and coordinated medical support for patients seeking treatment in India."
//         items={[
//           {
//             label: "Specialities",
//           },
//         ]}
//       />

//       {/* CARDS */}

//       <section
//         id="all-specialities"
//         className="
//           scroll-mt-[100px]
//           bg-white
//           py-14
//           md:py-20
//         "
//       >
//         <div
//           className="
//             mx-auto
//             max-w-[1450px]
//             px-4
//             sm:px-6
//             lg:px-8
//           "
//         >
//           <div
//             className="
//               mx-auto
//               mb-10
//               max-w-[760px]
//               text-center
//             "
//           >
//             <p
//               className="
//                 text-[12px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.18em]
//                 text-[#C8942E]
//               "
//             >
//               Medical Expertise
//             </p>

//             <h2
//               className="
//                 mt-2
//                 text-[28px]
//                 font-semibold
//                 text-[#064B50]
//                 md:text-[36px]
//               "
//             >
//               Find The Right Speciality
//             </h2>

//             <p
//               className="
//                 mt-3
//                 text-[14px]
//                 leading-7
//                 text-[#5A6F70]
//                 md:text-[15px]
//               "
//             >
//               Select a speciality to explore
//               highlights, sub-specialities,
//               care teams, treatments and
//               related conditions.
//             </p>
//           </div>

//           <div
//             className="
//               grid
//               grid-cols-1
//               gap-5
//               sm:grid-cols-2
//               lg:grid-cols-3
//               xl:grid-cols-4
//             "
//           >
//             {visibleSpecialities.map(
//               ([name, slug, Icon]) => (
//                 <Link
//                   key={slug}
//                   to={`/speciality/${slug}`}
//                   className="
//                     group
//                     flex
//                     min-h-[230px]
//                     flex-col
//                     items-center
//                     justify-center
//                     rounded-[20px]
//                     border
//                     border-[#DCE8E7]
//                     bg-[#F8FBFA]
//                     p-6
//                     text-center
//                     shadow-[0_7px_24px_rgba(6,75,80,0.05)]
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1
//                     hover:border-[#C8942E]/60
//                     hover:bg-white
//                     hover:shadow-[0_15px_35px_rgba(6,75,80,0.11)]
//                   "
//                 >
//                   <div
//                     className="
//                       flex
//                       h-16
//                       w-16
//                       items-center
//                       justify-center
//                       rounded-2xl
//                       bg-[#E5F1F0]
//                       text-[#C8942E]
//                       transition-all
//                       duration-300
//                       group-hover:bg-[#064B50]
//                       group-hover:text-white
//                     "
//                   >
//                     {Icon && (
//                       <Icon
//                         size={30}
//                         strokeWidth={1.5}
//                       />
//                     )}
//                   </div>

//                   <h3
//                     className="
//                       mt-5
//                       min-h-[48px]
//                       text-[16px]
//                       font-semibold
//                       leading-6
//                       text-[#263F41]
//                       transition-colors
//                       group-hover:text-[#064B50]
//                     "
//                   >
//                     {name}
//                   </h3>

//                   {/* Same style as Home */}

//                   <span
//                     className="
//                       mt-4
//                       inline-flex
//                       items-center
//                       gap-2
//                       rounded-lg
//                       border
//                       border-[#D6E6E4]
//                       bg-[#EDF6F5]
//                       px-4
//                       py-2
//                       text-[13px]
//                       font-semibold
//                       text-[#064B50]
//                       transition-all
//                       group-hover:border-[#064B50]
//                       group-hover:bg-[#064B50]
//                       group-hover:text-white
//                     "
//                   >
//                     Know More

//                     <ChevronRight
//                       size={15}
//                       className="
//                         transition-transform
//                         group-hover:translate-x-1
//                       "
//                     />
//                   </span>
//                 </Link>
//               )
//             )}
//           </div>

//           {specialties.length >
//             INITIAL_VISIBLE && (
//             <div
//               className="
//                 mt-11
//                 flex
//                 flex-col
//                 items-center
//               "
//             >
//               <p
//                 className="
//                   mb-3
//                   text-[12px]
//                   text-[#667576]
//                 "
//               >
//                 Showing{" "}
//                 {Math.min(
//                   visibleCount,
//                   specialties.length
//                 )}{" "}
//                 of {specialties.length}{" "}
//                 specialities
//               </p>

//               <button
//                 type="button"
//                 onClick={handleViewMore}
//                 className="
//                   inline-flex
//                   min-h-[46px]
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-lg
//                   bg-[#064B50]
//                   px-7
//                   text-[14px]
//                   font-semibold
//                   text-white
//                   transition-all
//                   hover:bg-[#0B6268]
//                 "
//               >
//                 {allVisible
//                   ? "View Less"
//                   : "View More"}

//                 {allVisible ? (
//                   <ArrowUp size={16} />
//                 ) : (
//                   <ArrowDown size={16} />
//                 )}
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </main>
//   );
// }