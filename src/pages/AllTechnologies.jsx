import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb";
import SectionHeading from "../components/speciality/SectionHeading";

import {
  technologies,
} from "../data/technologyData";


function getItemsPerPage() {
  if (
    typeof window ===
    "undefined"
  ) {
    return 12;
  }

  if (
    window.innerWidth <
    640
  ) {
    return 3;
  }

  if (
    window.innerWidth <
    1280
  ) {
    return 6;
  }

  return 12;
}


export default function AllTechnologies() {
  const [search, setSearch] =
    useState("");

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  const [
    itemsPerPage,
    setItemsPerPage,
  ] = useState(
    getItemsPerPage()
  );


  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(
        getItemsPerPage()
      );

      setCurrentPage(1);
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


  const filtered =
    useMemo(() => {
      const query =
        search
          .toLowerCase()
          .trim();

      if (!query) {
        return technologies;
      }

      return technologies.filter(
        (item) =>
          item.name
            .toLowerCase()
            .includes(query) ||
          item.description
            .toLowerCase()
            .includes(query) ||
          item.source
            ?.toLowerCase()
            .includes(query)
      );
    }, [search]);


  useEffect(() => {
    setCurrentPage(1);
  }, [search]);


  const totalPages =
    Math.max(
      1,
      Math.ceil(
        filtered.length /
          itemsPerPage
      )
    );


  const safePage =
    Math.min(
      currentPage,
      totalPages
    );


  const startIndex =
    (safePage - 1) *
    itemsPerPage;


  const visibleItems =
    filtered.slice(
      startIndex,
      startIndex +
        itemsPerPage
    );


  const changePage = (
    page
  ) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <main className="bg-white">
      <Breadcrumb
        items={[
          {
            label:
              "Health Library",
            to:
              "/health-library",
          },
          {
            label:
              "Technologies",
          },
        ]}
        title="Medical Technologies"
        description="Explore medical technologies used across different areas of specialist healthcare."
      />


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
            max-w-[1400px]
            px-5
            sm:px-7
            lg:px-10
          "
        >
          <SectionHeading
            eyebrow="Advanced Care"
            title="All Technologies"
            description="Browse technologies available across the different areas of healthcare represented on the website."
          />


          {/* SEARCH */}

          <div
            className="
              relative
              mx-auto
              mt-9
              max-w-[620px]
            "
          >
            <Search
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-[#C8942E]
              "
            />

            <input
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
              placeholder="Search technology..."
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-[#D7E5E3]
                bg-white
                pl-14
                pr-5
                text-[14px]
                text-[#263F41]
                outline-none
                transition
                focus:border-[#064B50]
              "
            />
          </div>


          {/* RESULT COUNT */}

          {filtered.length >
            0 && (
            <p
              className="
                mt-5
                text-center
                text-[13px]
                text-[#141414]
              "
            >
              Showing{" "}
              <span
                className="
                  font-semibold
                  text-[#064B50]
                "
              >
                {startIndex +
                  1}
                {" - "}
                {Math.min(
                  startIndex +
                    itemsPerPage,
                  filtered.length
                )}
              </span>{" "}
              of{" "}
              <span
                className="
                  font-semibold
                  text-[#064B50]
                "
              >
                {
                  filtered.length
                }
              </span>{" "}
              technologies
            </p>
          )}


          {/* CARDS */}

          <div
            className="
              mt-11
              grid
              gap-6
              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {visibleItems.map(
              (technology) => (
                <article
                  key={
                    technology.id
                  }
                  className="
                    group
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[#DCE8E7]
                    bg-white
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C8942E]
                    hover:shadow-[0_16px_40px_rgba(6,75,80,0.09)]
                  "
                >
                  <div
                    className="
                      h-[210px]
                      overflow-hidden
                      bg-[#EEF6F5]
                    "
                  >
                    <img
                      src={
                        technology.image
                      }
                      alt={
                        technology.name
                      }
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div
                    className="
                      flex
                      min-h-[245px]
                      flex-col
                      p-6
                    "
                  >
                    <h2
                      className="
                        text-[19px]
                        font-semibold
                        text-[#064B50]
                      "
                    >
                      {
                        technology.name
                      }
                    </h2>

                    <p
                      className="
                        mt-3
                        line-clamp-4
                        text-[15px]
                        leading-7
                        text-[#282828]
                      "
                    >
                      {
                        technology.description
                      }
                    </p>

                    <Link
                      to={`/technologies/${technology.slug}`}
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
                        group-hover:text-[#C8942E]
                      "
                    >
                      Know More

                      <ArrowRight
                        size={17}
                      />
                    </Link>
                  </div>
                </article>
              )
            )}
          </div>


          {/* NO RESULTS */}

          {filtered.length ===
            0 && (
            <p
              className="
                mt-12
                text-center
                text-[16px]
                text-[#242424]
              "
            >
              No technologies found.
            </p>
          )}


          {/* PAGINATION */}

          {filtered.length >
            0 &&
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
                  safePage === 1
                }
                onClick={() =>
                  changePage(
                    safePage - 1
                  )
                }
                className="
                  inline-flex
                  h-11
                  items-center
                  gap-1
                  rounded-xl
                  border
                  border-[#D7E5E3]
                  bg-white
                  px-4
                  text-[13px]
                  font-semibold
                  text-[#064B50]
                  transition
                  hover:border-[#C8942E]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <ChevronLeft
                  size={17}
                />

                Previous
              </button>


              {Array.from(
                {
                  length:
                    totalPages,
                },
                (_, index) =>
                  index + 1
              ).map(
                (pageNumber) => (
                  <button
                    key={
                      pageNumber
                    }
                    type="button"
                    onClick={() =>
                      changePage(
                        pageNumber
                      )
                    }
                    className={`
                      h-11
                      min-w-11
                      rounded-xl
                      border
                      px-3
                      text-[13px]
                      font-semibold
                      transition

                      ${
                        safePage ===
                        pageNumber
                          ? `
                            border-[#064B50]
                            bg-[#064B50]
                            text-white
                          `
                          : `
                            border-[#D7E5E3]
                            bg-white
                            text-[#064B50]
                            hover:border-[#C8942E]
                            hover:text-[#C8942E]
                          `
                      }
                    `}
                  >
                    {pageNumber}
                  </button>
                )
              )}


              <button
                type="button"
                disabled={
                  safePage ===
                  totalPages
                }
                onClick={() =>
                  changePage(
                    safePage + 1
                  )
                }
                className="
                  inline-flex
                  h-11
                  items-center
                  gap-1
                  rounded-xl
                  border
                  border-[#D7E5E3]
                  bg-white
                  px-4
                  text-[13px]
                  font-semibold
                  text-[#064B50]
                  transition
                  hover:border-[#C8942E]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                Next

                <ChevronRight
                  size={17}
                />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}