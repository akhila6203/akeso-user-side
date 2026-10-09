
import { useEffect, useState } from "react";

import KnowledgeListingPage from "../components/knowledge/KnowledgeListingPage";

import { getPublicStories } from "../api/storiesApi";

/* =========================================
   GET YOUTUBE VIDEO ID

   Supported formats:
   youtube.com/watch?v=VIDEO_ID
   youtube.com/shorts/VIDEO_ID
   youtu.be/VIDEO_ID
   youtube.com/embed/VIDEO_ID
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
   MAP BACKEND OUR STORIES DATA
   TO USER SIDE VIDEO CARDS
========================================= */

const mapStoryToVideo = (story) => {
  const videoUrl =
    story.video_url ||
    story.video_link ||
    story.videoUrl ||
    story.youtube_url ||
    story.youtube_link ||
    story.youtubeUrl ||
    story.video ||
    story.url ||
    "";

  const videoId = getYouTubeId(videoUrl);

  const thumbnail =
    story.thumbnail ||
    story.thumbnail_url ||
    story.image ||
    story.image_url ||
    (videoId
      ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
      : "");

  const category =
    story.speciality_name ||
    story.speciality?.name ||
    (typeof story.speciality === "string"
      ? story.speciality
      : "") ||
    "Our Stories";

  return {
    ...story,

    id: story.id,

    title:
      story.name ||
      story.title ||
      "Hospital Video",

    category,

    videoUrl,
    video_url: videoUrl,
    video: videoUrl,
    url: videoUrl,

    videoId,

    thumbnail,
    image: thumbnail,

    description:
      story.description ||
      story.content ||
      "",

    date:
      story.created_at ||
      story.date ||
      "",
  };
};

/* =========================================
   VIDEOS PAGE
========================================= */

export default function Videos() {
  const [videos, setVideos] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [retry, setRetry] = useState(0);

  /* =========================================
     FETCH OUR STORIES FROM BACKEND
  ========================================= */

  useEffect(() => {
    let active = true;

    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError("");

        const stories = await getPublicStories();

        if (!active) return;

        // console.log(
        //   "OUR STORIES API DATA:",
        //   stories
        // );

        if (!Array.isArray(stories)) {
          throw new Error(
            "Invalid Our Stories API response"
          );
        }

        const formattedVideos =
          stories.map(mapStoryToVideo);

        // console.log(
        //   "FORMATTED VIDEOS:",
        //   formattedVideos
        // );

        setVideos(formattedVideos);
      } catch (err) {
        if (!active) return;

        // console.error(
        //   "VIDEOS API ERROR:",
        //   err
        // );

        setError(
          err.message ||
            "Unable to load videos. Please try again."
        );

        setVideos([]);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchVideos();

    return () => {
      active = false;
    };
  }, [retry]);

  /* =========================================
     EXISTING VIDEOS UI
  ========================================= */

  return (
    <KnowledgeListingPage
      title="Videos"
      description="Watch educational healthcare videos and medical discussions."
      items={videos}
      type="videos"
      loading={loading}
      error={error}
      onRetry={() =>
        setRetry((current) => current + 1)
      }
    />
  );
}




// import KnowledgeListingPage from "../components/knowledge/KnowledgeListingPage";
// import { videoData } from "../data/knowledgeCenterData";

// export default function Videos() {
//   return (
//     <KnowledgeListingPage
//       title="Videos"
//       description="Watch educational healthcare videos and medical discussions."
//       items={videoData}
//       type="videos"
//     />
//   );
// }