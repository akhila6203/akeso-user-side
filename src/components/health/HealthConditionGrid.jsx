import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Activity,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

import { Link } from "react-router-dom";


function getColumns() {
  if (typeof window === "undefined") {
    return 4;
  }

  if (window.innerWidth < 640) {
    return 1;
  }

  if (window.innerWidth < 1024) {
    return 2;
  }

  return 4;
}


export default function HealthConditionGrid({
  conditions = [],
}) {
  const [search, setSearch] =
    useState("");

  const [columns, setColumns] =
    useState(getColumns());

  const [currentPage, setCurrentPage] =
    useState(1);


  /* =========================================
     RESPONSIVE COLUMN COUNT
  ========================================== */

  useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns());
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);


  /* =========================================
     RESET PAGE
  ========================================== */

  useEffect(() => {
    setCurrentPage(1);
  }, [search, columns]);


  /* =========================================
     SEARCH
  ========================================== */

  const filteredConditions =
    useMemo(() => {
      const query =
        search
          .trim()
          .toLowerCase();

      if (!query) {
        return conditions;
      }

      return conditions.filter(
        (condition) =>
          condition.name
            .toLowerCase()
            .includes(query) ||
          condition.category
            ?.toLowerCase()
            .includes(query)
      );
    }, [conditions, search]);


  /*
    Requirement:
    each page = 4 rows.

    Desktop:
    4 columns × 4 rows = 16

    Tablet:
    2 columns × 4 rows = 8

    Mobile:
    1 column × 4 rows = 4
  */

  const itemsPerPage =
    columns * 4;

  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filteredConditions.length /
          itemsPerPage
      )
    );


  useEffect(() => {
    if (
      currentPage > totalPages
    ) {
      setCurrentPage(totalPages);
    }
  }, [
    currentPage,
    totalPages,
  ]);


  const startIndex =
    (currentPage - 1) *
    itemsPerPage;

  const visibleConditions =
    filteredConditions.slice(
      startIndex,
      startIndex +
        itemsPerPage
    );


  const changePage = (
    page
  ) => {
    if (
      page < 1 ||
      page > totalPages
    ) {
      return;
    }

    setCurrentPage(page);

    const section =
      document.getElementById(
        "health-conditions"
      );

    if (section) {
      const top =
        section.getBoundingClientRect()
          .top +
        window.scrollY -
        100;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };


  const pageNumbers =
    getPageNumbers(
      currentPage,
      totalPages
    );


  return (
    <section
      id="health-conditions"
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

        {/* =====================================
            HEADING
        ====================================== */}

        <div className="text-center">
          <span
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#C8942E]
            "
          >
            Health Information
          </span>

          <h2
            className="
              mt-3
              text-[30px]
              font-semibold
              text-[#064B50]
              sm:text-[36px]
              lg:text-[40px]
            "
          >
            Diseases & Conditions
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[720px]
              text-[16px]
              leading-7
              text-black
              sm:text-[15px]
            "
          >
            Browse health conditions and
            explore general information
            about symptoms, causes, risks
            and prevention.
          </p>
        </div>


        {/* =====================================
            SEARCH
        ====================================== */}

        <div
          className="
            relative
            mx-auto
            mt-9
            max-w-[720px]
          "
        >
          <Search
            size={20}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-[#064B50]
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
            placeholder="Search for diseases & conditions"
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
              focus:border-[#C8942E]
              sm:h-16
              sm:text-[15px]
            "
          />
        </div>


        {/* =====================================
            GRID
        ====================================== */}

        {visibleConditions.length >
        0 ? (
          <>
            <div
              className="
                mt-11
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {visibleConditions.map(
                (condition) => (
                  <article
                    key={
                      condition.slug
                    }
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
                      hover:shadow-[0_16px_40px_rgba(6,75,80,0.09)]
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
                      "
                    >
                      <Activity
                        size={22}
                      />
                    </div>

                    <p
                      className="
                        mt-5
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.12em]
                        text-[#C8942E]
                      "
                    >
                      {condition.category}
                    </p>

                    <h3
                      className="
                        mt-2
                        text-[18px]
                        font-semibold
                        leading-6
                        text-[#064B50]
                      "
                    >
                      {condition.name}
                    </h3>

                    <Link
                      to={`/health-library/${condition.slug}`}
                      className="
                        mt-auto
                        inline-flex
                        items-center
                        gap-2
                        pt-6
                        text-[14px]
                        font-semibold
                        text-[#064B50]
                        transition
                        group-hover:text-[#C8942E]
                      "
                    >
                      Know More

                      <ArrowRight
                        size={17}
                      />
                    </Link>
                  </article>
                )
              )}
            </div>


            {/* =================================
                PAGINATION
            ================================== */}

            {totalPages > 1 && (
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

                {/* PREVIOUS */}

                <button
                  type="button"
                  disabled={
                    currentPage === 1
                  }
                  onClick={() =>
                    changePage(
                      currentPage - 1
                    )
                  }
                  className="
                    inline-flex
                    h-11
                    items-center
                    gap-1
                    rounded-xl
                    border
                    border-[#DCECEB]
                    bg-white
                    px-4
                    text-[13px]
                    font-semibold
                    text-[#064B50]
                    transition
                    hover:border-[#064B50]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >
                  <ChevronLeft
                    size={17}
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


                {/* PAGE NUMBERS */}

                {pageNumbers.map(
                  (
                    page,
                    index
                  ) => {
                    if (
                      page === "..."
                    ) {
                      return (
                        <span
                          key={`dots-${index}`}
                          className="
                            flex
                            h-11
                            min-w-9
                            items-center
                            justify-center
                            text-black
                          "
                        >
                          ...
                        </span>
                      );
                    }

                    const active =
                      page ===
                      currentPage;

                    return (
                      <button
                        key={page}
                        type="button"
                        onClick={() =>
                          changePage(
                            page
                          )
                        }
                        className={`
                          flex
                          h-11
                          min-w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          px-3
                          text-[13px]
                          font-semibold
                          transition

                          ${
                            active
                              ? "border-[#064B50] bg-[#064B50] text-white"
                              : "border-[#DCECEB] bg-white text-[#064B50] hover:border-[#C8942E] hover:text-[#C8942E]"
                          }
                        `}
                      >
                        {page}
                      </button>
                    );
                  }
                )}


                {/* NEXT */}

                <button
                  type="button"
                  disabled={
                    currentPage ===
                    totalPages
                  }
                  onClick={() =>
                    changePage(
                      currentPage + 1
                    )
                  }
                  className="
                    inline-flex
                    h-11
                    items-center
                    gap-1
                    rounded-xl
                    border
                    border-[#DCECEB]
                    bg-white
                    px-4
                    text-[13px]
                    font-semibold
                    text-[#064B50]
                    transition
                    hover:border-[#064B50]
                    disabled:cursor-not-allowed
                    disabled:opacity-40
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

                  <ChevronRight
                    size={17}
                  />
                </button>
              </div>
            )}
          </>
        ) : (
          <div
            className="
              mt-12
              rounded-[18px]
              border
              border-[#DCECEB]
              bg-white
              px-5
              py-12
              text-center
            "
          >
            <p
              className="
                text-[16px]
                text-black
              "
            >
              No diseases or conditions
              found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}


function getPageNumbers(
  currentPage,
  totalPages
) {
  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, index) =>
        index + 1
    );
  }

  if (currentPage <= 4) {
    return [
      1,
      2,
      3,
      4,
      5,
      "...",
      totalPages,
    ];
  }

  if (
    currentPage >=
    totalPages - 3
  ) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}