
import { useEffect, useState } from "react";
import { getPublicStories } from "../api/storiesApi";

const getYouTubeId = (url) => {
  if (!url || typeof url !== "string") return "";

  try {
    const parsed = new URL(url.trim());
    const host = parsed.hostname
      .replace(/^www\./, "")
      .replace(/^m\./, "");

    if (host === "youtu.be") {
      return parsed.pathname.split("/")[1] || "";
    }

    if (
      host === "youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v") || "";
      }

      const parts = parsed.pathname.split("/");

      if (["shorts", "embed", "live"].includes(parts[1])) {
        return parts[2] || "";
      }
    }
  } catch {
    return "";
  }

  return "";
};

const mapStory = (story) => {
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

  return {
    ...story,
    id: story.id,
    title: story.name || story.title || "Patient Story",
    category:
      story.speciality_name ||
      story.speciality?.name ||
      (typeof story.speciality === "string"
        ? story.speciality
        : "") ||
      "Patient Experience",
    description: story.description || story.content || "",
    image: thumbnail,
    thumbnail,
    videoUrl,
    videoId,
    youtubeId: videoId,
  };
};

export default function useOurStories() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadStories = async () => {
      try {
        const data = await getPublicStories();

        if (!active) return;

        setStories(
          (Array.isArray(data) ? data : [])
            .map(mapStory)
            .filter((story) => story.videoId)
        );
      } catch (err) {
        if (active) {
          setError(err.message || "Unable to load stories");
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadStories();

    return () => {
      active = false;
    };
  }, []);

  return { stories, loading, error };
}
