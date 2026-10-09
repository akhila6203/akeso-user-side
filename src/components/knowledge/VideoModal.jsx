
import { useEffect } from "react";
import { X } from "lucide-react";

/* =========================================
   GET YOUTUBE VIDEO ID FROM URL
========================================= */

const getYouTubeId = (url) => {
  if (!url || typeof url !== "string") {
    return "";
  }

  try {
    const parsed = new URL(url.trim());

    const hostname = parsed.hostname
      .replace(/^www\./, "")
      .replace(/^m\./, "");

    if (hostname === "youtu.be") {
      return parsed.pathname.split("/")[1] || "";
    }

    if (
      hostname === "youtube.com" ||
      hostname === "youtube-nocookie.com"
    ) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v") || "";
      }

      const parts = parsed.pathname.split("/");

      if (
        ["shorts", "embed", "live"].includes(parts[1])
      ) {
        return parts[2] || "";
      }
    }

    return "";
  } catch {
    return "";
  }
};

/* =========================================
   VIDEO MODAL
========================================= */

export default function VideoModal({
  video,
  onClose,
}) {
  useEffect(() => {
    if (!video) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [video, onClose]);

  if (!video) return null;

  /* =========================================
     GET VIDEO URL FROM BACKEND DATA
  ========================================= */

  const originalUrl =
    video.videoUrl ||
    video.video_url ||
    video.youtube_url ||
    video.video ||
    video.url ||
    "";

  const youtubeId =
    video.youtubeId ||
    video.videoId ||
    getYouTubeId(originalUrl);

  const validYoutubeId =
    /^[a-zA-Z0-9_-]{11}$/.test(youtubeId);

  const embedUrl = validYoutubeId
    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`
    : "";

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black/70
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-[1000px]
          overflow-hidden
          rounded-[20px]
          bg-white
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            right-3
            top-3
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#064B50]
            shadow-lg
          "
          aria-label="Close video"
        >
          <X size={21} />
        </button>

        {/* VIDEO PLAYER */}

        <div className="aspect-video bg-black">
          {embedUrl ? (
            <iframe
              key={embedUrl}
              className="h-full w-full"
              src={embedUrl}
              title={video.title || "Hospital Video"}
              allow="
                accelerometer;
                autoplay;
                clipboard-write;
                encrypted-media;
                gyroscope;
                picture-in-picture;
                web-share
              "
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full items-center justify-center px-5 text-center text-white">
              Unable to play this video. Please check
              the YouTube URL.
            </div>
          )}
        </div>

        {/* VIDEO INFORMATION */}

        <div className="p-4 md:p-5">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-[#C8942E]
            "
          >
            {video.category}
          </p>

          <h3
            className="
              mt-1
              text-lg
              md:text-xl
              font-semibold
              text-[#263F41]
            "
          >
            {video.title}
          </h3>
        </div>
      </div>
    </div>
  );
}




// import { useEffect } from "react";
// import { X } from "lucide-react";

// export default function VideoModal({
//   video,
//   onClose,
// }) {
//   useEffect(() => {
//     if (!video) return;

//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         onClose();
//       }
//     };

//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener(
//         "keydown",
//         handleEscape
//       );
//     };
//   }, [video, onClose]);

//   if (!video) return null;

//   return (
//     <div
//       className="
//         fixed inset-0 z-[9999]
//         flex items-center justify-center
//         bg-black/70
//         p-4
//       "
//       onClick={onClose}
//     >
//       <div
//         className="
//           relative
//           w-full
//           max-w-[1000px]
//           overflow-hidden
//           rounded-[20px]
//           bg-white
//           shadow-2xl
//         "
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           type="button"
//           onClick={onClose}
//           className="
//             absolute
//             right-3
//             top-3
//             z-20
//             flex
//             h-10
//             w-10
//             items-center
//             justify-center
//             rounded-full
//             bg-white
//             text-[#064B50]
//             shadow-lg
//           "
//           aria-label="Close video"
//         >
//           <X size={21} />
//         </button>

//         <div className="aspect-video bg-black">
//           <iframe
//             className="h-full w-full"
//             src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
//             title={video.title}
//             allow="
//               accelerometer;
//               autoplay;
//               clipboard-write;
//               encrypted-media;
//               gyroscope;
//               picture-in-picture
//             "
//             allowFullScreen
//           />
//         </div>

//         <div className="p-4 md:p-5">
//           <p className="
//             text-xs
//             font-semibold
//             uppercase
//             tracking-wider
//             text-[#C8942E]
//           ">
//             {video.category}
//           </p>

//           <h3 className="
//             mt-1
//             text-lg
//             md:text-xl
//             font-semibold
//             text-[#263F41]
//           ">
//             {video.title}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }