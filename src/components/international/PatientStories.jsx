import {
  ArrowLeft,
  ArrowRight,
  Play,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import useOurStories from "../../hooks/useOurStories";

/* =====================================================
   DUMMY PATIENT STORIES

   UI testing purpose only.
   Later approved patient videos tho replace cheyyandi.
===================================================== */

// const stories = [
//   {
//     id: 1,

//     title:
//       "International Patient Treatment Journey",

//     description:
//       "A patient shares their experience of consultation, treatment and coordinated healthcare support.",

//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",

//     youtubeId: "ysz5S6PUM-U",
//   },

//   {
//     id: 2,

//     title:
//       "Recovery & Post-Treatment Experience",

//     description:
//       "A healthcare journey covering treatment planning, recovery and post-treatment support.",

//     image:
//       "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80",

//     youtubeId: "ysz5S6PUM-U",
//   },

//   {
//     id: 3,

//     title:
//       "Healthcare Journey in India",

//     description:
//       "An international healthcare experience from initial consultation through treatment and recovery.",

//     image:
//       "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=900&q=80",

//     youtubeId: "ysz5S6PUM-U",
//   },

//   {
//     id: 4,

//     title:
//       "Surgery & Recovery Experience",

//     description:
//       "A patient journey through specialist consultation, planned treatment and coordinated recovery.",

//     image:
//       "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=900&q=80",

//     youtubeId: "ysz5S6PUM-U",
//   },

//   {
//     id: 5,

//     title:
//       "International Care Experience",

//     description:
//       "A patient shares their experience of receiving coordinated healthcare assistance during their visit to India.",

//     image:
//       "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=900&q=80",

//     youtubeId: "ysz5S6PUM-U",
//   },
// ];

export default function PatientStories() {
    const {
    stories = [],
    loading,
    error,
  } = useOurStories();
  const [
    activeStory,
    setActiveStory,
  ] = useState(null);

  const [visibleCount, setVisibleCount] =
    useState(3);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  /* =====================================================
     RESPONSIVE
  ===================================================== */

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

  // useEffect(() => {
  //   setCurrentIndex(0);
  // }, [visibleCount]);
  useEffect(() => {
    setCurrentIndex(0);
  }, [visibleCount, stories.length]);

  /* =====================================================
     SLIDER
  ===================================================== */
const shouldSlide = stories.length > visibleCount;

const nextSlide = () => {
  if (!shouldSlide) return;

  setCurrentIndex(
    (prev) => (prev + 1) % stories.length
  );
};

const prevSlide = () => {
  if (!shouldSlide) return;

  setCurrentIndex(
    (prev) =>
      (prev - 1 + stories.length) % stories.length
  );
};
  // const nextSlide = () => {
  //   setCurrentIndex(
  //     (prev) =>
  //       (prev + 1) % stories.length
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex(
  //     (prev) =>
  //       (prev - 1 + stories.length) %
  //       stories.length
  //   );
  // };

  /* AUTO PLAY */

  useEffect(() => {
    if (
      activeStory ||
      stories.length <= visibleCount
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(
        (prev) =>
          (prev + 1) % stories.length
      );
    }, 4000);

    return () => clearInterval(timer);
  // }, [
  //   activeStory,
  //   visibleCount,
  // ]);
  }, [activeStory, visibleCount, stories.length]);

  /* =====================================================
     INFINITE VISIBLE ITEMS

     Example:
     1 2 3
     2 3 4
     3 4 5
     4 5 1
     5 1 2
     1 2 3...
  ===================================================== */

  // const visibleStories =
  //   Array.from(
  //     {
  //       length: Math.min(
  //         visibleCount,
  //         stories.length
  //       ),
  //     },
  //     (_, index) =>
  //       stories[
  //         (currentIndex + index) %
  //           stories.length
  //       ]
  //   );
  const visibleStories = stories.length
  ? Array.from(
      {
        length: Math.min(visibleCount, stories.length),
      },
      (_, index) =>
        stories[(currentIndex + index) % stories.length]
    )
  : [];

  /* =====================================================
     VIDEO POPUP
  ===================================================== */

  useEffect(() => {
    if (!activeStory) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveStory(null);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.body.style.overflow =
        "";
    };
  }, [activeStory]);

  return (
    <>
      <section
        className="
          bg-[#f7faf9]
          py-16
          md:py-20
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
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#C8942E]
              "
            >
              Real Experiences
            </p>

            <h2
              className="
                mt-3

                text-[30px]
                font-semibold
                text-[#064B50]

                md:text-[40px]
              "
            >
              Patient Stories
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-[680px]

                text-[15px]
                leading-7
                text-[#363737]

                md:text-[15px]
              "
            >
              Hear from patients about their
              healthcare journey, treatment
              experience and recovery with
              coordinated medical support.
            </p>
          </div>

          {/* SLIDER */}

          <div className="relative mt-11">
            {/* LEFT */}

            {stories.length > visibleCount && (
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous patient stories"
                className="
                  absolute
                  left-[-12px]
                  top-1/2
                  z-20

                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#C8942E]

                  bg-white

                  text-[#064B50]

                  shadow-[0_8px_25px_rgba(6,75,80,0.13)]

                  transition-all
                  duration-300

                  hover:bg-[#064B50]
                  hover:text-white

                  md:left-[-18px]
                "
              >
                <ArrowLeft size={19} />
              </button>
            )}

            {/* CARDS */}

            <div
              className="
                grid
                grid-cols-1
                gap-6

                md:grid-cols-2
                xl:grid-cols-3
              "
            >
              {/* {visibleStories.map(
                (story, position) => (
                  <StoryCard
                    key={`${story.id}-${position}`}
                    story={story}
                    onClick={() =>
                      setActiveStory(story)
                    }
                  />
                )
              )} */}
              {loading ? (
  <p className="col-span-full py-12 text-center text-[#064B50]">
    Loading patient stories...
  </p>
) : error ? (
  <p className="col-span-full py-12 text-center text-red-600">
    {String(error?.message || error)}
  </p>
) : visibleStories.length === 0 ? (
  <p className="col-span-full py-12 text-center text-[#064B50]">
    No patient stories available.
  </p>
) : (
  visibleStories.map((story, position) => (
    <StoryCard
      key={`${story.id}-${position}`}
      story={story}
      onClick={() => setActiveStory(story)}
    />
  ))
)}
            </div>

            {/* RIGHT */}

            {stories.length > visibleCount && (
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next patient stories"
                className="
                  absolute
                  right-[-12px]
                  top-1/2
                  z-20

                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#C8942E]

                  bg-[#064B50]

                  text-white

                  shadow-[0_8px_25px_rgba(6,75,80,0.14)]

                  transition-all
                  duration-300

                  hover:bg-[#C8942E]

                  md:right-[-18px]
                "
              >
                <ArrowRight size={19} />
              </button>
            )}
          </div>

          {/* DOTS */}

          {stories.length > visibleCount && (
            <div
              className="
                mt-7
                flex
                justify-center
                gap-2
              "
            >
              {stories.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to story ${
                    index + 1
                  }`}
                  onClick={() =>
                    setCurrentIndex(index)
                  }
                  className={`
                    h-2
                    rounded-full

                    transition-all
                    duration-300

                    ${
                      currentIndex === index
                        ? "w-8 bg-[#C8942E]"
                        : "w-2 bg-[#c6dddd] hover:bg-[#064B50]"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {activeStory && (
        <VideoPopup
          story={activeStory}
          onClose={() =>
            setActiveStory(null)
          }
        />
      )}
    </>
  );
}

/* =====================================================
   STORY CARD
===================================================== */

function StoryCard({
  story,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group

        h-full

        overflow-hidden

        rounded-[20px]

        border
        border-[#dfe9e8]

        bg-white

        text-left

        shadow-[0_8px_28px_rgba(6,75,80,0.05)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#C8942E]/50
        hover:shadow-[0_16px_38px_rgba(6,75,80,0.11)]
      "
    >
      <div
        className="
          relative

          h-[220px]
          overflow-hidden

          sm:h-[235px]
        "
      >
        <img
          // src={story.image}
          src={story.image || story.thumbnail}
          alt={story.title}
          className="
            h-full
            w-full

            object-cover

            transition-transform
            duration-500

            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t
            from-[#043F43]/90
            via-[#043F43]/15
            to-transparent
          "
        />

        {/* PLAY */}

        <div
          className="
            absolute
            inset-0

            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-full

              border
              border-white/60

              bg-white/20

              text-white

              backdrop-blur-sm

              transition-all
              duration-300

              group-hover:scale-110
              group-hover:border-[#C8942E]
              group-hover:bg-[#C8942E]
            "
          >
            <Play
              size={23}
              fill="currentColor"
              className="ml-1"
            />
          </div>
        </div>

        <span
          className="
            absolute
            left-4
            top-4

            rounded-full

            bg-white/95

            px-3
            py-1.5

            text-[10px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-[#064B50]
          "
        >
          {/* Patient Experience */}
          {story.category || "Patient Experience"}
        </span>
      </div>

      {/* CONTENT */}

      <div className="p-5">
        <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-[#C8942E]">
          {story.category || "Our Stories"}
        </p>
        <h3
          className="
            text-[17px]
            font-semibold
            leading-6
            text-[#064B50]
          "
        >
          {story.title}
        </h3>

        <p
          className="
            mt-2

            text-[15px]
            leading-6
            text-[#2f3030]
          "
        >
          {/* {story.description} */}
          {story.description || story.text || ""}
        </p>

        <div
          className="
            mt-4

            inline-flex
            items-center
            gap-2

            text-[12px]
            font-semibold
            text-[#39b8b0]
          "
        >
          <Play
            size={14}
            fill="currentColor"
          />

          Watch Story
        </div>
      </div>
    </button>
  );
}

/* =====================================================
   VIDEO POPUP
===================================================== */

function VideoPopup({
  story,
  onClose,
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-[#021f21]/90

        p-4
        sm:p-6

        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="
          relative

          w-full
          max-w-[1100px]

          overflow-hidden

          rounded-[20px]

          bg-black

          shadow-[0_30px_90px_rgba(0,0,0,0.45)]
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="
            absolute
            right-3
            top-3
            z-20

            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            bg-white

            text-[#064B50]

            shadow-lg

            transition-all
            duration-300

            hover:rotate-90
            hover:bg-[#C8942E]
            hover:text-white
          "
        >
          <X size={22} />
        </button>

        <div className="aspect-video">
          <iframe
            // src={`https://www.youtube.com/embed/${story.youtubeId}?autoplay=1&rel=0`}
            src={`https://www.youtube.com/embed/${
  story.youtubeId || story.videoId
}?autoplay=1&rel=0`}
            title={story.title}
            className="h-full w-full"
            allow="
              autoplay;
              encrypted-media;
              picture-in-picture
            "
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}