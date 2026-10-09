import {
  useEffect,
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import KnowledgeCard from "./KnowledgeCard";
import VideoCard from "./VideoCard";

// function getVisibleCount() {
//   if (typeof window === "undefined") return 3;

//   if (window.innerWidth < 768) return 1;
//   if (window.innerWidth < 1100) return 2;

//   return 3;
// }
function getVisibleCount() {
  if (typeof window === "undefined") return 3;

  if (window.innerWidth < 768) return 1;
  if (window.innerWidth < 1024) return 2;

  return 3;
}

export default function KnowledgeSlider({
  items = [],
  type,
  onPlay,
}) {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] =
    useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
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

  // useEffect(() => {
  //   setIndex(0);
  // }, [type]);
  useEffect(() => {
    setIndex(0);
  }, [type, visibleCount, items.length]);

  if (!items.length) return null;

  // const visibleItems = Array.from(
  //   {
  //     length: Math.min(
  //       visibleCount,
  //       items.length
  //     ),
  //   },
  //   (_, position) =>
  //     items[(index + position) % items.length]
  // );
  const shouldSlide = items.length > visibleCount;

const visibleItems = shouldSlide
  ? Array.from(
      { length: visibleCount },
      (_, position) =>
        items[(index + position) % items.length]
    )
  : items;

  const previous = () => {
    setIndex(
      (current) =>
        (current - 1 + items.length) %
        items.length
    );
  };

  const next = () => {
    setIndex(
      (current) =>
        (current + 1) % items.length
    );
  };

  return (
    <div className="relative">
      {/* {items.length > 1 && ( */}
        {/* <> */}
        {shouldSlide && (
         <>
          <button
            type="button"
            onClick={previous}
            aria-label="Previous"
            className="
              absolute
              left-[-12px]
              md:left-[-22px]
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
              border-[#DCECEB]
              bg-white
              text-[#064B50]
              shadow-lg
              transition
              hover:border-[#C8942E]
              hover:bg-[#064B50]
              hover:text-white
            "
          >
            <ChevronLeft size={21} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="
              absolute
              right-[-12px]
              md:right-[-22px]
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
              border-[#DCECEB]
              bg-white
              text-[#064B50]
              shadow-lg
              transition
              hover:border-[#C8942E]
              hover:bg-[#064B50]
              hover:text-white
            "
          >
            <ChevronRight size={21} />
          </button>
        </>
      )}

      {/* <div
        className={`
          grid gap-5 md:gap-6
          ${
            visibleItems.length === 1
              ? "grid-cols-1"
              : visibleItems.length === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          }
        `}
      > */}
<div
  className="
    grid
    grid-cols-1
    gap-5
    md:grid-cols-2
    md:gap-6
    lg:grid-cols-3
  "
>
        {visibleItems.map((item) =>
          type === "videos" ? (
            <VideoCard
              key={`${item.id}-${index}`}
              item={item}
              onPlay={onPlay}
            />
          ) : (
            <KnowledgeCard
              key={`${item.id}-${index}`}
              item={item}
              type={
                type === "blogs"
                  ? "blog"
                  : "case-study"
              }
            />
          )
        )}
      </div>
    </div>
  );
}