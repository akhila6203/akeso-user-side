import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  ArrowLeft,
  ArrowRight,
  HeartPulse,
  Search,
  Stethoscope,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import Breadcrumb from "../Breadcrumb";


const ITEMS_PER_PAGE = 12;


export default function MedicalDirectoryPage({
  type,
  items = [],
  speciality = null,
  specialitySlug = null,
}) {
  const [search, setSearch] =
    useState("");

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

const isSpecialityPage =
  Boolean(
    specialitySlug &&
    speciality
  );

  const isTreatment =
    type === "treatments";


  const title =
    isTreatment
      ? "Treatments & Procedures"
      : "Ailments & Conditions";


  const description =
    isTreatment
      ? "Explore treatment and procedure information across our specialist care areas."
      : "Explore ailments and conditions across our specialist care areas.";


  const Icon =
    isTreatment
      ? Stethoscope
      : HeartPulse;


  const filtered =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      if (!query) {
        return items;
      }

      return items.filter(
        (item) =>
          item.name
            ?.toLowerCase()
            .includes(query) ||
          item.specialityName
            ?.toLowerCase()
            .includes(query) ||
          item.description
            ?.toLowerCase()
            .includes(query)
      );
    }, [items, search]);


  useEffect(() => {
    setCurrentPage(1);
  }, [search]);


  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filtered.length /
          ITEMS_PER_PAGE
      )
    );


  const startIndex =
    (currentPage - 1) *
    ITEMS_PER_PAGE;


  const currentItems =
    filtered.slice(
      startIndex,
      startIndex +
        ITEMS_PER_PAGE
    );


  const goToPage = (page) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

const getItemPath = (item) => {
  if (isTreatment) {
    return `/treatments/${item.slug}`;
  }

  return `/ailments/${item.slug}`;
};

  const getPageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from(
        {
          length: totalPages,
        },
        (_, index) =>
          index + 1
      );
    }

    let start =
      Math.max(
        1,
        currentPage - 2
      );

    let end =
      Math.min(
        totalPages,
        start + 4
      );

    if (end - start < 4) {
      start =
        Math.max(
          1,
          end - 4
        );
    }

    return Array.from(
      {
        length:
          end - start + 1,
      },
      (_, index) =>
        start + index
    );
  };


  return (
    <main className="bg-white">
      {/* =========================
          BREADCRUMB
      ========================== */}

      {/* <Breadcrumb
        title={title}
        description={description}
        items={[
          {
            label: title,
          },
        ]}
      /> */}
      <Breadcrumb
        items={
          isSpecialityPage
            ? [
                {
                  label: "Specialities",
                  to: "/specialities",
                },
                {
                  label:
                    speciality.name,
                  to:
                    `/speciality/${specialitySlug}`,
                },
                {
                  label: "Ailments",
                },
              ]
            : [
                {
                  label:
                    "Health Library",
                  to:
                    "/health-library",
                },
                {
                  label:
                    "Ailments",
                },
              ]
        }

        title={
          isSpecialityPage
            ? `${speciality.name} Ailments`
            : "Ailments"
        }

        description={
          isSpecialityPage
            ? `Explore medical conditions commonly associated with ${speciality.name} that may require specialist evaluation.`
            : "Explore medical conditions, symptoms, causes and general health information."
        }
      />


      {/* =========================
          DIRECTORY
      ========================== */}

      <section
        className="
          bg-white
          py-14
          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1350px]
            px-5
            sm:px-7
            lg:px-10
          "
        >
          {/* HEADING */}

          <div
            className="
              mx-auto
              max-w-[800px]
              text-center
            "
          >
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#C8942E]
                sm:text-[12px]
              "
            >
              {isTreatment
                ? "Treatment Directory"
                : "Health Conditions"}
            </p>

            <h2
              className="
                mt-3
                text-[28px]
                font-semibold
                leading-tight
                tracking-[-0.02em]
                text-[#064B50]
                sm:text-[34px]
                lg:text-[40px]
              "
            >
              {isTreatment
                ? "All Treatments"
                : "All Ailments"}
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[700px]
                text-[16px]
                leading-7
                text-[#3c3d3d]
                sm:text-[15px]
              "
            >
              {isTreatment
                ? "Browse treatments and procedures. Select Know More to explore related treatment information."
                : "Browse ailments and conditions from our available specialist care sections."}
            </p>
          </div>


          {/* SEARCH */}

          <div
            className="
              relative
              mx-auto
              mt-9
              max-w-[650px]
            "
          >
            <Search
              size={19}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-[#C8942E]
              "
            />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder={
                isTreatment
                  ? "Search treatments..."
                  : "Search ailments..."
              }
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-[#DCECEB]
                bg-white
                pl-14
                pr-5
                text-[14px]
                text-[#263F41]
                outline-none
                transition
                placeholder:text-[#8A9899]
                focus:border-[#064B50]
                focus:shadow-[0_0_0_3px_rgba(6,75,80,0.06)]
              "
            />
          </div>


          {/* =========================
              COUNT + PAGE

              Mobile, tablet, desktop:
              same row.
          ========================== */}

          {filtered.length > 0 && (
            <div
              className="
                mx-auto
                mt-7
                flex
                max-w-[1180px]
                items-center
                justify-between
                gap-4
                text-left
              "
            >
              <p
                className="
                  text-[15px]
                  leading-5
                  text-[#353636]
                  sm:text-[13px]
                "
              >
                Showing{" "}
                <span
                  className="
                    font-semibold
                    text-[#064B50]
                  "
                >
                  {startIndex + 1}
                </span>
                {" - "}
                <span
                  className="
                    font-semibold
                    text-[#064B50]
                  "
                >
                  {Math.min(
                    startIndex +
                      ITEMS_PER_PAGE,
                    filtered.length
                  )}
                </span>
                {" of "}
                <span
                  className="
                    font-semibold
                    text-[#064B50]
                  "
                >
                  {filtered.length}
                </span>
              </p>

              <p
                className="
                  shrink-0
                  text-right
                  text-[15px]
                  leading-5
                  text-[#3a3b3b]
                  sm:text-[13px]
                "
              >
                Page{" "}
                <span
                  className="
                    font-semibold
                    text-[#064B50]
                  "
                >
                  {currentPage}
                </span>
                {" of "}
                <span
                  className="
                    font-semibold
                    text-[#064B50]
                  "
                >
                  {totalPages}
                </span>
              </p>
            </div>
          )}


          {/* =========================
              CARDS

              Desktop:
              3 columns × 4 rows

              Tablet:
              2 columns

              Mobile:
              1 column
          ========================== */}

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-[1180px]
              grid-cols-1
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {currentItems.map(
              (item) => (
                <article
                  key={item.id}
                  className="
                    group
                    flex
                    min-h-[230px]
                    flex-col
                    rounded-[20px]
                    border
                    border-[#DCECEB]
                    bg-white
                    p-6
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C8942E]/60
                    hover:shadow-[0_16px_38px_rgba(6,75,80,0.09)]
                    sm:p-7
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#EEF6F5]
                      text-[#C8942E]
                      transition
                      duration-300
                      group-hover:bg-[#064B50]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                    />
                  </div>


                  {item.specialityName && (
                    <p
                      className="
                        mt-5
                        text-[14px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#C8942E]
                        sm:text-[14px]
                      "
                    >
                      {
                        item.specialityName
                      }
                    </p>
                  )}


                  <h3
                    className="
                      mt-2
                      text-[18px]
                      font-semibold
                      leading-7
                      text-[#064B50]
                    "
                  >
                    {item.name}
                  </h3>


                  {item.description && (
                      <p
                        className="
                          mt-3
                          line-clamp-3
                          text-[16px]
                          leading-7
                          text-black
                        "
                      >
                        {item.description}
                      </p>
                    )}


                  <Link
                    to={getItemPath(
                      item
                    )}
                    className="
                      mt-auto
                      inline-flex
                      items-center
                      gap-2
                      pt-5
                      text-[14px]
                      font-semibold
                      text-[#064B50]
                      transition
                      hover:text-[#C8942E]
                    "
                  >
                    Know More

                    <ArrowRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>
                </article>
              )
            )}
          </div>


          {/* NO RESULT */}

          {filtered.length === 0 && (
            <div
              className="
                mx-auto
                mt-10
                max-w-[700px]
                rounded-[20px]
                border
                border-[#DCECEB]
                bg-[#FAF8F2]
                px-6
                py-12
                text-center
              "
            >
              <p
                className="
                  text-[16px]
                  text-[#212222]
                "
              >
                No results found.
              </p>
            </div>
          )}


{isSpecialityPage && (
  <div className="mt-10 text-center">
    <Link
      to={`/speciality/${specialitySlug}`}
      className="inline-flex items-center gap-2 rounded-xl border border-[#064B50] px-7 py-3.5 text-[14px] font-semibold text-[#064B50] transition hover:bg-[#064B50] hover:text-white"
    >
      <ArrowLeft size={17} />

      Back to {speciality.name}
    </Link>
  </div>
)}
          {/* =========================
              PAGINATION
          ========================== */}

          {filtered.length > 0 &&
            totalPages > 1 && (
              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  items-center
                  justify-center
                  gap-2
                "
              >
                <button
                  type="button"
                  disabled={
                    currentPage === 1
                  }
                  onClick={() =>
                    goToPage(
                      currentPage - 1
                    )
                  }
                  className="
                    inline-flex
                    h-10
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#DCECEB]
                    bg-white
                    px-3
                    text-[12px]
                    font-semibold
                    text-[#064B50]
                    transition
                    hover:border-[#064B50]
                    hover:bg-[#EEF6F5]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    sm:h-11
                    sm:px-4
                    sm:text-[13px]
                  "
                >
                  <ArrowLeft
                    size={15}
                  />

                  <span
                    className="
                      hidden
                      sm:inline
                    "
                  >
                    Previous
                  </span>
                </button>


                {getPageNumbers().map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() =>
                        goToPage(page)
                      }
                      className={`
                        flex
                        h-10
                        min-w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        px-2
                        text-[12px]
                        font-semibold
                        transition

                        sm:h-11
                        sm:min-w-11
                        sm:text-[13px]

                        ${
                          currentPage ===
                          page
                            ? `
                              border-[#064B50]
                              bg-[#064B50]
                              text-white
                              shadow-[0_7px_18px_rgba(6,75,80,0.16)]
                            `
                            : `
                              border-[#DCECEB]
                              bg-white
                              text-[#064B50]
                              hover:border-[#C8942E]
                              hover:text-[#C8942E]
                            `
                        }
                      `}
                    >
                      {page}
                    </button>
                  )
                )}


                <button
                  type="button"
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  onClick={() =>
                    goToPage(
                      currentPage + 1
                    )
                  }
                  className="
                    inline-flex
                    h-10
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-[#DCECEB]
                    bg-white
                    px-3
                    text-[12px]
                    font-semibold
                    text-[#064B50]
                    transition
                    hover:border-[#064B50]
                    hover:bg-[#EEF6F5]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                    sm:h-11
                    sm:px-4
                    sm:text-[13px]
                  "
                >
                  <span
                    className="
                      hidden
                      sm:inline
                    "
                  >
                    Next
                  </span>

                  <ArrowRight
                    size={15}
                  />
                </button>
              </div>
            )}
        </div>
      </section>
    </main>
  );
}




















// import {
//   useEffect,
//   useMemo,
//   useState,
// } from "react";

// import {
//   ArrowLeft,
//   ArrowRight,
//   HeartPulse,
//   Search,
//   Stethoscope,
// } from "lucide-react";

// import {
//   Link,
// } from "react-router-dom";

// import Breadcrumb from "../Breadcrumb";


// const ITEMS_PER_PAGE = 12;


// export default function MedicalDirectoryPage({
//   type,
//   items = [],
// }) {
//   const [search, setSearch] =
//     useState("");

//   const [
//     currentPage,
//     setCurrentPage,
//   ] = useState(1);


//   const isTreatment =
//     type === "treatments";


//   const title =
//     isTreatment
//       ? "Treatments & Procedures"
//       : "Ailments & Conditions";


//   const description =
//     isTreatment
//       ? "Explore treatment and procedure information across our specialist care areas."
//       : "Explore ailments and conditions across our specialist care areas.";


//   const Icon =
//     isTreatment
//       ? Stethoscope
//       : HeartPulse;


//   const filtered =
//     useMemo(() => {
//       const query =
//         search
//           .trim()
//           .toLowerCase();

//       if (!query) {
//         return items;
//       }

//       return items.filter(
//         (item) =>
//           item.name
//             ?.toLowerCase()
//             .includes(query) ||
//           item.specialityName
//             ?.toLowerCase()
//             .includes(query) ||
//           item.description
//             ?.toLowerCase()
//             .includes(query)
//       );
//     }, [items, search]);


//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search]);


//   const totalPages =
//     Math.max(
//       1,
//       Math.ceil(
//         filtered.length /
//           ITEMS_PER_PAGE
//       )
//     );


//   const startIndex =
//     (currentPage - 1) *
//     ITEMS_PER_PAGE;


//   const currentItems =
//     filtered.slice(
//       startIndex,
//       startIndex +
//         ITEMS_PER_PAGE
//     );


//   const goToPage = (page) => {
//     if (
//       page < 1 ||
//       page > totalPages
//     ) {
//       return;
//     }

//     setCurrentPage(page);

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

// const getItemPath = (item) => {
//   if (isTreatment) {
//     return `/treatments/${item.slug}`;
//   }

//   return `/ailments/${item.slug}`;
// };

//   const getPageNumbers = () => {
//     if (totalPages <= 5) {
//       return Array.from(
//         {
//           length: totalPages,
//         },
//         (_, index) =>
//           index + 1
//       );
//     }

//     let start =
//       Math.max(
//         1,
//         currentPage - 2
//       );

//     let end =
//       Math.min(
//         totalPages,
//         start + 4
//       );

//     if (end - start < 4) {
//       start =
//         Math.max(
//           1,
//           end - 4
//         );
//     }

//     return Array.from(
//       {
//         length:
//           end - start + 1,
//       },
//       (_, index) =>
//         start + index
//     );
//   };


//   return (
//     <main className="bg-white">
//       {/* =========================
//           BREADCRUMB
//       ========================== */}

//       <Breadcrumb
//         title={title}
//         description={description}
//         items={[
//           {
//             label: title,
//           },
//         ]}
//       />


//       {/* =========================
//           DIRECTORY
//       ========================== */}

//       <section
//         className="
//           bg-white
//           py-14
//           sm:py-16
//           lg:py-20
//         "
//       >
//         <div
//           className="
//             mx-auto
//             max-w-[1350px]
//             px-5
//             sm:px-7
//             lg:px-10
//           "
//         >
//           {/* HEADING */}

//           <div
//             className="
//               mx-auto
//               max-w-[800px]
//               text-center
//             "
//           >
//             <p
//               className="
//                 text-[11px]
//                 font-bold
//                 uppercase
//                 tracking-[0.2em]
//                 text-[#C8942E]
//                 sm:text-[12px]
//               "
//             >
//               {isTreatment
//                 ? "Treatment Directory"
//                 : "Health Conditions"}
//             </p>

//             <h2
//               className="
//                 mt-3
//                 text-[28px]
//                 font-semibold
//                 leading-tight
//                 tracking-[-0.02em]
//                 text-[#064B50]
//                 sm:text-[34px]
//                 lg:text-[40px]
//               "
//             >
//               {isTreatment
//                 ? "All Treatments"
//                 : "All Ailments"}
//             </h2>

//             <p
//               className="
//                 mx-auto
//                 mt-4
//                 max-w-[700px]
//                 text-[14px]
//                 leading-7
//                 text-[#667576]
//                 sm:text-[15px]
//               "
//             >
//               {isTreatment
//                 ? "Browse treatments and procedures. Select Know More to explore related treatment information."
//                 : "Browse ailments and conditions from our available specialist care sections."}
//             </p>
//           </div>


//           {/* SEARCH */}

//           <div
//             className="
//               relative
//               mx-auto
//               mt-9
//               max-w-[650px]
//             "
//           >
//             <Search
//               size={19}
//               className="
//                 absolute
//                 left-5
//                 top-1/2
//                 -translate-y-1/2
//                 text-[#C8942E]
//               "
//             />

//             <input
//               type="text"
//               value={search}
//               onChange={(event) =>
//                 setSearch(
//                   event.target.value
//                 )
//               }
//               placeholder={
//                 isTreatment
//                   ? "Search treatments..."
//                   : "Search ailments..."
//               }
//               className="
//                 h-14
//                 w-full
//                 rounded-2xl
//                 border
//                 border-[#DCECEB]
//                 bg-white
//                 pl-14
//                 pr-5
//                 text-[14px]
//                 text-[#263F41]
//                 outline-none
//                 transition
//                 placeholder:text-[#8A9899]
//                 focus:border-[#064B50]
//                 focus:shadow-[0_0_0_3px_rgba(6,75,80,0.06)]
//               "
//             />
//           </div>


//           {/* =========================
//               COUNT + PAGE

//               Mobile, tablet, desktop:
//               same row.
//           ========================== */}

//           {filtered.length > 0 && (
//             <div
//               className="
//                 mx-auto
//                 mt-7
//                 flex
//                 max-w-[1180px]
//                 items-center
//                 justify-between
//                 gap-4
//                 text-left
//               "
//             >
//               <p
//                 className="
//                   text-[11px]
//                   leading-5
//                   text-[#667576]
//                   sm:text-[13px]
//                 "
//               >
//                 Showing{" "}
//                 <span
//                   className="
//                     font-semibold
//                     text-[#064B50]
//                   "
//                 >
//                   {startIndex + 1}
//                 </span>
//                 {" - "}
//                 <span
//                   className="
//                     font-semibold
//                     text-[#064B50]
//                   "
//                 >
//                   {Math.min(
//                     startIndex +
//                       ITEMS_PER_PAGE,
//                     filtered.length
//                   )}
//                 </span>
//                 {" of "}
//                 <span
//                   className="
//                     font-semibold
//                     text-[#064B50]
//                   "
//                 >
//                   {filtered.length}
//                 </span>
//               </p>

//               <p
//                 className="
//                   shrink-0
//                   text-right
//                   text-[11px]
//                   leading-5
//                   text-[#667576]
//                   sm:text-[13px]
//                 "
//               >
//                 Page{" "}
//                 <span
//                   className="
//                     font-semibold
//                     text-[#064B50]
//                   "
//                 >
//                   {currentPage}
//                 </span>
//                 {" of "}
//                 <span
//                   className="
//                     font-semibold
//                     text-[#064B50]
//                   "
//                 >
//                   {totalPages}
//                 </span>
//               </p>
//             </div>
//           )}


//           {/* =========================
//               CARDS

//               Desktop:
//               3 columns × 4 rows

//               Tablet:
//               2 columns

//               Mobile:
//               1 column
//           ========================== */}

//           <div
//             className="
//               mx-auto
//               mt-8
//               grid
//               max-w-[1180px]
//               grid-cols-1
//               gap-5
//               sm:grid-cols-2
//               lg:grid-cols-3
//             "
//           >
//             {currentItems.map(
//               (item) => (
//                 <article
//                   key={item.id}
//                   className="
//                     group
//                     flex
//                     min-h-[230px]
//                     flex-col
//                     rounded-[20px]
//                     border
//                     border-[#DCECEB]
//                     bg-white
//                     p-6
//                     transition
//                     duration-300
//                     hover:-translate-y-1
//                     hover:border-[#C8942E]/60
//                     hover:shadow-[0_16px_38px_rgba(6,75,80,0.09)]
//                     sm:p-7
//                   "
//                 >
//                   <div
//                     className="
//                       flex
//                       h-12
//                       w-12
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-[#EEF6F5]
//                       text-[#C8942E]
//                       transition
//                       duration-300
//                       group-hover:bg-[#064B50]
//                       group-hover:text-white
//                     "
//                   >
//                     <Icon
//                       size={21}
//                       strokeWidth={1.7}
//                     />
//                   </div>


//                   {item.specialityName && (
//                     <p
//                       className="
//                         mt-5
//                         text-[10px]
//                         font-bold
//                         uppercase
//                         tracking-[0.14em]
//                         text-[#C8942E]
//                         sm:text-[11px]
//                       "
//                     >
//                       {
//                         item.specialityName
//                       }
//                     </p>
//                   )}


//                   <h3
//                     className="
//                       mt-2
//                       text-[18px]
//                       font-semibold
//                       leading-7
//                       text-[#064B50]
//                     "
//                   >
//                     {item.name}
//                   </h3>


//                   {item.description && (
//                     <p
//                       className="
//                         mt-3
//                         line-clamp-3
//                         text-[13px]
//                         leading-6
//                         text-[#667576]
//                         sm:text-[14px]
//                         sm:leading-7
//                       "
//                     >
//                       {
//                         item.description
//                       }
//                     </p>
//                   )}


//                   <Link
//                     to={getItemPath(
//                       item
//                     )}
//                     className="
//                       mt-auto
//                       inline-flex
//                       items-center
//                       gap-2
//                       pt-5
//                       text-[14px]
//                       font-semibold
//                       text-[#064B50]
//                       transition
//                       hover:text-[#C8942E]
//                     "
//                   >
//                     Know More

//                     <ArrowRight
//                       size={17}
//                       className="
//                         transition-transform
//                         duration-300
//                         group-hover:translate-x-1
//                       "
//                     />
//                   </Link>
//                 </article>
//               )
//             )}
//           </div>


//           {/* NO RESULT */}

//           {filtered.length === 0 && (
//             <div
//               className="
//                 mx-auto
//                 mt-10
//                 max-w-[700px]
//                 rounded-[20px]
//                 border
//                 border-[#DCECEB]
//                 bg-[#FAF8F2]
//                 px-6
//                 py-12
//                 text-center
//               "
//             >
//               <p
//                 className="
//                   text-[15px]
//                   text-[#667576]
//                 "
//               >
//                 No results found.
//               </p>
//             </div>
//           )}


//           {/* =========================
//               PAGINATION
//           ========================== */}

//           {filtered.length > 0 &&
//             totalPages > 1 && (
//               <div
//                 className="
//                   mt-12
//                   flex
//                   flex-wrap
//                   items-center
//                   justify-center
//                   gap-2
//                 "
//               >
//                 <button
//                   type="button"
//                   disabled={
//                     currentPage === 1
//                   }
//                   onClick={() =>
//                     goToPage(
//                       currentPage - 1
//                     )
//                   }
//                   className="
//                     inline-flex
//                     h-10
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-xl
//                     border
//                     border-[#DCECEB]
//                     bg-white
//                     px-3
//                     text-[12px]
//                     font-semibold
//                     text-[#064B50]
//                     transition
//                     hover:border-[#064B50]
//                     hover:bg-[#EEF6F5]
//                     disabled:cursor-not-allowed
//                     disabled:opacity-40
//                     sm:h-11
//                     sm:px-4
//                     sm:text-[13px]
//                   "
//                 >
//                   <ArrowLeft
//                     size={15}
//                   />

//                   <span
//                     className="
//                       hidden
//                       sm:inline
//                     "
//                   >
//                     Previous
//                   </span>
//                 </button>


//                 {getPageNumbers().map(
//                   (page) => (
//                     <button
//                       key={page}
//                       type="button"
//                       onClick={() =>
//                         goToPage(page)
//                       }
//                       className={`
//                         flex
//                         h-10
//                         min-w-10
//                         items-center
//                         justify-center
//                         rounded-xl
//                         border
//                         px-2
//                         text-[12px]
//                         font-semibold
//                         transition

//                         sm:h-11
//                         sm:min-w-11
//                         sm:text-[13px]

//                         ${
//                           currentPage ===
//                           page
//                             ? `
//                               border-[#064B50]
//                               bg-[#064B50]
//                               text-white
//                               shadow-[0_7px_18px_rgba(6,75,80,0.16)]
//                             `
//                             : `
//                               border-[#DCECEB]
//                               bg-white
//                               text-[#064B50]
//                               hover:border-[#C8942E]
//                               hover:text-[#C8942E]
//                             `
//                         }
//                       `}
//                     >
//                       {page}
//                     </button>
//                   )
//                 )}


//                 <button
//                   type="button"
//                   disabled={
//                     currentPage ===
//                     totalPages
//                   }
//                   onClick={() =>
//                     goToPage(
//                       currentPage + 1
//                     )
//                   }
//                   className="
//                     inline-flex
//                     h-10
//                     items-center
//                     justify-center
//                     gap-2
//                     rounded-xl
//                     border
//                     border-[#DCECEB]
//                     bg-white
//                     px-3
//                     text-[12px]
//                     font-semibold
//                     text-[#064B50]
//                     transition
//                     hover:border-[#064B50]
//                     hover:bg-[#EEF6F5]
//                     disabled:cursor-not-allowed
//                     disabled:opacity-40
//                     sm:h-11
//                     sm:px-4
//                     sm:text-[13px]
//                   "
//                 >
//                   <span
//                     className="
//                       hidden
//                       sm:inline
//                     "
//                   >
//                     Next
//                   </span>

//                   <ArrowRight
//                     size={15}
//                   />
//                 </button>
//               </div>
//             )}
//         </div>
//       </section>
//     </main>
//   );
// }