import {
  useMemo,
  useState,
} from "react";

import Breadcrumb from "../components/Breadcrumb";

import WebStoryCard from "../components/webstories/WebStoryCard";

import WebStoryModal from "../components/webstories/WebStoryModal";

import {
  webStories,
} from "../data/webStoriesData";


export default function WebStories() {
  const [
    selectedStory,
    setSelectedStory,
  ] = useState(null);


  const [
    visibleCount,
    setVisibleCount,
  ] = useState(8);


  const visibleStories =
    useMemo(
      () =>
        webStories.slice(
          0,
          visibleCount
        ),
      [visibleCount]
    );


  const hasMore =
    visibleCount <
    webStories.length;


  return (
    <main className="bg-white">

      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <Breadcrumb
        title="Web Stories"
        description="Explore short, visual health stories designed to make useful healthcare information easier to understand."
        items={[
          {
            label:
              "Health Library",

            to:
              "/health-library",
          },

          {
            label:
              "Web Stories",
          },
        ]}
      />


      {/* =====================================
          STORIES
      ===================================== */}

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
            px-4

            sm:px-6
            lg:px-10
          "
        >
          {/* HEADING */}

          <div
            className="
              mx-auto
              max-w-[760px]
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
              Explore & Learn
            </p>

            <h1
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
              Web Stories
            </h1>

            <p
              className="
                mx-auto
                mt-3
                max-w-[680px]
                text-[16px]
                leading-7
                text-[#1e1f1f]

                sm:text-[15px]
              "
            >
              Browse visual health
              stories and open any
              card to explore its
              slides.
            </p>
          </div>


          {/* GRID */}

          <div
            className="
              mt-10
              grid
              grid-cols-1
              gap-6

              sm:grid-cols-2

              lg:mt-12
              lg:grid-cols-3

              xl:grid-cols-4
            "
          >
            {visibleStories.map(
              (story) => (
                <WebStoryCard
                  key={
                    story.id
                  }
                  story={
                    story
                  }
                  onOpen={
                    setSelectedStory
                  }
                />
              )
            )}
          </div>


          {/* LOAD MORE STORIES */}

          {hasMore && (
            <div
              className="
                mt-10
                text-center
              "
            >
              <button
                type="button"
                onClick={() =>
                  setVisibleCount(
                    (current) =>
                      current + 4
                  )
                }
                className="
                  rounded-xl
                  bg-[#064B50]
                  px-7
                  py-3
                  text-[14px]
                  font-semibold
                  text-white
                  shadow-[0_8px_22px_rgba(6,75,80,0.14)]
                  transition

                  hover:bg-[#0B6268]
                "
              >
                Load More Stories
              </button>
            </div>
          )}
        </div>
      </section>


      {/* =====================================
          STORY MODAL
      ===================================== */}

      {selectedStory && (
        <WebStoryModal
          story={
            selectedStory
          }
          onClose={() =>
            setSelectedStory(
              null
            )
          }
        />
      )}
    </main>
  );
}