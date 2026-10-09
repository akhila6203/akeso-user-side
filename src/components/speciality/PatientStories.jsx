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

// import {
//   specialityPatientStories,
// } from "../../data/technologyData";

import SectionHeading from "./SectionHeading";

function getYouTubeEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();

    let videoId = "";

    if (
      host === "youtu.be" ||
      host === "www.youtu.be"
    ) {
      videoId = parsed.pathname.split("/")[1];
    } else if (
      [
        "youtube.com",
        "www.youtube.com",
        "m.youtube.com",
        "www.youtube-nocookie.com",
        "youtube-nocookie.com",
      ].includes(host)
    ) {
      videoId =
        parsed.searchParams.get("v") ||
        parsed.pathname.match(
          /^\/(?:embed|shorts|live)\/([^/]+)/
        )?.[1] ||
        "";
    }

    if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      return "";
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch {
    return "";
  }
}

function getVideoThumbnail(url) {
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!embedUrl) return "";

  const videoId = embedUrl.split("/embed/")[1];

  if (!videoId) return "";

  // return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// export default function PatientStories({
//   stories = specialityPatientStories,
// }) {
export default function PatientStories({
  stories = [],
}) {
  // const safeStories =
  //   stories?.length
  //     ? stories
  //     : specialityPatientStories;
  const safeStories = Array.isArray(stories)
  ? stories
  : [];

  const [index, setIndex] =
    useState(0);

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(3);

  const [
    activeStory,
    setActiveStory,
  ] = useState(null);

  /* =========================================
     RESPONSIVE
  ========================================== */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (
        window.innerWidth < 1100
      ) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    update();

    window.addEventListener(
      "resize",
      update
    );

    return () =>
      window.removeEventListener(
        "resize",
        update
      );
  }, []);

  /* =========================================
     SLIDER
  ========================================== */

  const next = () => {
    if (!safeStories.length) {
      return;
    }

    setIndex(
      (prev) =>
        (prev + 1) %
        safeStories.length
    );
  };

  const previous = () => {
    if (!safeStories.length) {
      return;
    }

    setIndex(
      (prev) =>
        (prev -
          1 +
          safeStories.length) %
        safeStories.length
    );
  };

  /* =========================================
     AUTO PLAY
  ========================================== */

  useEffect(() => {
    if (safeStories.length <= 1) {
      return;
    }

    const timer = setInterval(
      next,
      5000
    );

    return () =>
      clearInterval(timer);
  }, [safeStories.length]);

  /* =========================================
     ESC CLOSE
  ========================================== */

  useEffect(() => {
    const closeModal = (
      event
    ) => {
      if (
        event.key === "Escape"
      ) {
        setActiveStory(null);
      }
    };

    window.addEventListener(
      "keydown",
      closeModal
    );

    return () =>
      window.removeEventListener(
        "keydown",
        closeModal
      );
  }, []);

  if (!safeStories.length) {
    return null;
  }

  /* =========================================
     TRUE LOOP
  ========================================== */

  const visibleStories =
    Array.from(
      {
        length: Math.min(
          visibleCount,
          safeStories.length
        ),
      },
      (_, position) =>
        safeStories[
          (index + position) %
            safeStories.length
        ]
    );

  return (
    <>
      <section className="overflow-hidden bg-white py-16 md:py-20">

        <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

          <SectionHeading
            eyebrow="Patient Experiences"
            title="Patient Stories"
            description="Explore patient journeys and experiences from consultation and treatment through recovery and follow-up."
          />

          {/* =====================================
              SLIDER AREA
          ====================================== */}
          <div className="relative mt-12 px-0 sm:px-12 lg:px-14">

            {/* LEFT ARROW */}
            {safeStories.length >
              1 && (
              <button
                type="button"
                onClick={previous}
                aria-label="Previous patient story"
                className="
                  absolute
                  left-0
                  top-1/2
                  z-30
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#BCD3D1]
                  bg-white
                  text-[#064B50]
                  shadow-[0_8px_25px_rgba(6,75,80,0.12)]
                  transition
                  hover:border-[#064B50]
                  hover:bg-[#064B50]
                  hover:text-white

                  max-sm:left-2
                "
              >
                <ArrowLeft
                  size={19}
                />
              </button>
            )}

            {/* STORIES */}
            <div
              className={`
                grid gap-6

                ${
                  visibleCount ===
                  1
                    ? "grid-cols-1"
                    : visibleCount ===
                      2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }
              `}
            >

              {visibleStories.map(
                (
                  story,
                  position
                ) => (
                  <button
                    type="button"
                    key={`${story.id}-${position}`}
                    onClick={() =>
                      setActiveStory(
                        story
                      )
                    }
                    className="
                      group
                      relative
                      h-[360px]
                      overflow-hidden
                      rounded-[22px]
                      bg-[#E7F1F0]
                      text-left
                      shadow-[0_14px_35px_rgba(6,75,80,0.10)]

                      sm:h-[390px]
                    "
                  >

                    {/* IMAGE */}
                    {/* <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    /> */}
                    <div className="relative h-full w-full overflow-hidden">
  {(() => {
    const videoUrl =
      story.videoUrl ||
      story.video ||
      "";

    const thumbnailUrl =
      getVideoThumbnail(videoUrl);

    return thumbnailUrl ? (
      <img
        src={thumbnailUrl}
        alt={story.title}
        loading="lazy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    ) : (
      <div className="absolute inset-0 bg-gradient-to-b from-[#DDEBE9] to-[#064B50]" />
    );
  })()}
</div>

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#022F33]/95 via-[#022F33]/25 to-transparent" />

                    {/* PLAY */}
                    <div className="absolute inset-0 flex items-center justify-center">

                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-white group-hover:text-[#064B50]">

                        <Play
                          size={21}
                          fill="currentColor"
                        />

                      </span>

                    </div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">

                      <h3 className="text-[18px] font-semibold text-white md:text-[19px]">
                        {story.title}
                      </h3>

                      <p className="mt-2 text-[14px] leading-6 text-white/80">
                        {story.subtitle}
                      </p>

                    </div>

                  </button>
                )
              )}

            </div>

            {/* RIGHT ARROW */}
            {safeStories.length >
              1 && (
              <button
                type="button"
                onClick={next}
                aria-label="Next patient story"
                className="
                  absolute
                  right-0
                  top-1/2
                  z-30
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-[#064B50]
                  text-white
                  shadow-[0_8px_25px_rgba(6,75,80,0.15)]
                  transition
                  hover:bg-[#0B6268]

                  max-sm:right-2
                "
              >
                <ArrowRight
                  size={19}
                />
              </button>
            )}

          </div>

        </div>
      </section>

      {/* =========================================
          VIDEO POPUP
      ========================================== */}
      {activeStory && (
        <div
          onClick={() =>
            setActiveStory(null)
          }
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#021F22]/80 p-4 backdrop-blur-sm"
        >

          <div
            onClick={(event) =>
              event.stopPropagation()
            }
            className="relative w-full max-w-[900px] overflow-hidden rounded-[22px] bg-white shadow-2xl"
          >

            {/* CLOSE */}
            <button
              type="button"
              onClick={() =>
                setActiveStory(null)
              }
              aria-label="Close patient story"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#064B50] shadow-lg transition hover:bg-[#064B50] hover:text-white"
            >
              <X size={20} />
            </button>

            {/* YOUTUBE */}
            {/* VIDEO PLAYER */}

{(() => {
  const videoUrl =
    activeStory.videoUrl ||
    activeStory.video ||
    "";

  const embedUrl =
    getYouTubeEmbedUrl(videoUrl) ||
    (activeStory.videoId
      ? getYouTubeEmbedUrl(
          `https://www.youtube.com/watch?v=${activeStory.videoId}`
        )
      : "");

  const isDirectVideo =
    /\.(mp4|webm|ogg)(?:[?#]|$)/i.test(videoUrl);

  if (embedUrl) {
    return (
      <div className="aspect-video bg-black">
        <iframe
          key={embedUrl}
          src={`${embedUrl}?autoplay=1`}
          title={activeStory.title || "Patient Story"}
          className="h-full w-full"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  if (isDirectVideo) {
    return (
      <div className="aspect-video bg-black">
        <video
          key={videoUrl}
          src={videoUrl}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="px-6 py-16 text-center sm:p-14">
      <h3 className="text-[24px] font-semibold text-[#064B50]">
        {activeStory.title}
      </h3>

      <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-7 text-[#252525]">
        A valid video URL is not available for this
        patient story. Please add a YouTube link or
        direct video URL in the admin panel.
      </p>
    </div>
  );
})()}
            {/* {activeStory.videoId ? (
              <div className="aspect-video">

                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${activeStory.videoId}?autoplay=1`}
                  title={
                    activeStory.title
                  }
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />

              </div>
            ) : (
              <div className="px-6 py-16 text-center sm:p-14">

                <h3 className="text-[24px] font-semibold text-[#064B50]">
                  {activeStory.title}
                </h3>

                <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-7 text-[#252525]">
                  Add the approved
                  YouTube video ID in
                  technologyData.js to
                  play this patient
                  story.
                </p>

              </div>
            )} */}

          </div>

        </div>
      )}
    </>
  );
}