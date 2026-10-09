import {
  ArrowRight,
  ImageOff,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";


function StoryThumbnail({
  src,
  alt,
}) {
  const [
    failed,
    setFailed,
  ] = useState(false);


  useEffect(() => {
    setFailed(false);
  }, [src]);


  if (!src || failed) {
    return (
      <div
        className="
          flex
          h-full
          w-full
          items-center
          justify-center
          bg-[#EEF6F5]
        "
      >
        <div className="text-center">
          <div
            className="
              mx-auto
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-white
              text-[#C8942E]
            "
          >
            <ImageOff
              size={22}
            />
          </div>

          <p
            className="
              mt-3
              px-4
              text-[12px]
              font-semibold
              text-[#064B50]
            "
          >
            {alt}
          </p>
        </div>
      </div>
    );
  }


  return (
    <img
      src={src}
      alt={alt}
      onError={() =>
        setFailed(true)
      }
      className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-500
        group-hover:scale-[1.04]
      "
    />
  );
}


export default function WebStoryCard({
  story,
  onOpen,
}) {
  return (
    <article
      onClick={() =>
        onOpen(story)
      }
      className="
        group
        flex
        h-full
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-[18px]
        border
        border-[#DFE9E8]
        bg-white
        shadow-[0_8px_28px_rgba(6,75,80,0.07)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#C8942E]/50
        hover:shadow-[0_16px_36px_rgba(6,75,80,0.11)]
      "
    >
      {/* IMAGE */}

      <div
        className="
          relative
          h-[250px]
          overflow-hidden

          sm:h-[270px]
          lg:h-[285px]
        "
      >
        <StoryThumbnail
          src={story.thumbnail}
          alt={story.title}
        />

        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-[#064B50]/95
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-white
          "
        >
          Web Story
        </div>

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-20
            bg-gradient-to-t
            from-black/30
            to-transparent
          "
        />
      </div>


      {/* CONTENT */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-5

          sm:p-6
        "
      >
        <h2
          className="
            text-[18px]
            font-semibold
            leading-[1.4]
            text-[#263F41]

            sm:text-[19px]
          "
        >
          {story.title}
        </h2>

        <p
          className="
            mt-3
            line-clamp-2
            text-[15px]
            leading-6
            text-[#151515]

            sm:text-[16px]
          "
        >
          {story.description}
        </p>


        <button
          type="button"
          className="
            mt-6
            inline-flex
            w-max
            items-center
            gap-2
            text-[14px]
            font-semibold
            text-[#064B50]
          "
        >
          Know More

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-[#C8942E]
              text-white
              transition
              group-hover:bg-[#064B50]
            "
          >
            <ArrowRight
              size={15}
            />
          </span>
        </button>
      </div>
    </article>
  );
}