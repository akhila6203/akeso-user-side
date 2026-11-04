import doctorImage from "../assets/doctor.jpg";
import DOMPurify from "dompurify";

const API_BASE = import.meta.env.VITE_API_URL || "";

/* ==========================================
   IMAGE URL
========================================== */

function getImageUrl(photo) {
  if (!photo) return doctorImage;

  if (/^https?:\/\//i.test(photo)) {
    return photo;
  }

  const base = API_BASE.replace(/\/api\/?$/, "").replace(/\/$/, "");
  const imagePath = String(photo).replace(/^\//, "");

  return `${base}/${imagePath}`;
}

/* ==========================================
   CONVERT API VALUE TO ARRAY
   Supports arrays, JSON strings and text
========================================== */

function normalizeList(value) {
  if (!value) return [];

  // Already an array
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === "string") return item.trim();

        if (typeof item === "object" && item !== null) {
          return (
            item.name ||
            item.title ||
            item.qualification ||
            item.expertise ||
            ""
          );
        }

        return String(item);
      })
      .filter(Boolean);
  }

  // String value
  if (typeof value === "string") {
    const trimmed = value.trim();

    if (!trimmed) return [];

    // Try parsing JSON string
    try {
      const parsed = JSON.parse(trimmed);

      if (Array.isArray(parsed)) {
        return normalizeList(parsed);
      }

      if (typeof parsed === "string") {
        return normalizeList(parsed);
      }
    } catch {
      // Not JSON; continue as normal text
    }

    // Split plain text by new lines, commas or semicolons
    return trimmed
      .split(/\r?\n|[,;]+/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

/* ==========================================
   RICH TEXT
========================================== */

function cleanRichText(value) {
  if (!value) return "";
  return DOMPurify.sanitize(value);
}

/* ==========================================
   MAP DOCTOR
========================================== */

export function mapDoctor(doctor) {
  return {
    id: String(doctor.id),
    name: doctor.name || "",

    speciality:
      doctor.speciality_name ||
      doctor.designation ||
      doctor.speciality ||
      "Medical Specialist",

    image: getImageUrl(doctor.photo),

    about: cleanRichText(doctor.about),

    // Qualifications: supports multiple possible API field names
    qualifications: normalizeList(
      doctor.qualifications ??
      doctor.qualification ??
      doctor.qualifications_text ??
      doctor.qualification_text ??
      doctor.education
    ),

    // Expertise: supports multiple possible API field names
    expertise: normalizeList(
      doctor.expertise ??
      doctor.expertise_text ??
      doctor.specialization ??
      doctor.specializations ??
      doctor.speciality_name
    ),

    experience:
      doctor.experience_years !== null &&
      doctor.experience_years !== undefined &&
      doctor.experience_years !== ""
        ? `${doctor.experience_years} years`
        : "",

    academicAchievements: cleanRichText(
      doctor.academics_achievements
    ),

    location: doctor.hospital_location || "",

    registrationNumber: doctor.license_number || "",

    registrationCouncil: "",
    languages: [],
    featured: Boolean(doctor.is_featured),
  };
}