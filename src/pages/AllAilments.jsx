import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import MedicalDirectoryPage from "../components/medical/MedicalDirectoryPage";

import {
  getSpecialities,
  getSpecialityBySlug,
} from "../api/specialitiesApi";


/* =========================================
   CREATE SLUG
========================================= */

function createSlug(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getApiData(response) {
  let data = response;

  // Handle Axios response and backend { success, data } response
  for (let i = 0; i < 4; i += 1) {
    if (data?.data !== undefined) {
      data = data.data;
    } else {
      break;
    }
  }

  return data;
}
/* =========================================
   REMOVE HTML TAGS FROM CONTENT
========================================= */

function cleanText(value = "") {
  const element = document.createElement("div");

  element.innerHTML = String(value);

  return (element.textContent || element.innerText || "")
    .replace(/\s+/g, " ")
    .trim();
}

/* =========================================
   NORMALIZE ONE AILMENT
========================================= */

function createAilment(
  name,
  speciality,
  index
) {
  // const cleanName =
  //   String(name || "").trim();
  const cleanName = cleanText(name);

  if (!cleanName) {
    return null;
  }

  return {
    id:
      `ailment-${speciality?.id || "speciality"}-${index}-${createSlug(cleanName)}`,

    name: cleanName,

    slug:
      createSlug(cleanName),

    description: "",

    specialityName:
      speciality?.name || "",
  };
}


/* =========================================
   REMOVE DUPLICATES
========================================= */

function removeDuplicates(items = []) {
  const unique =
    new Map();

  items.forEach((item) => {
    if (!item?.name) {
      return;
    }

    const key =
      createSlug(item.name);

    if (!unique.has(key)) {
      unique.set(
        key,
        item
      );
    }
  });

  return Array.from(
    unique.values()
  );
}


/* =========================================
   PAGE
========================================= */

export default function AllAilments() {
  const { slug } =
    useParams();


  const [
    items,
    setItems,
  ] = useState([]);


  const [
    speciality,
    setSpeciality,
  ] = useState(null);


  const [
    loading,
    setLoading,
  ] = useState(true);


  useEffect(() => {
    let mounted = true;


   async function loadAllAilments() {
  try {
    setLoading(true);

    // STEP 1: Get all active specialities
    const response = await getSpecialities({
      is_active: 1,
      page: 1,
      limit: 100,
    });

    if (!mounted) return;

    const specialityData = getApiData(response);

    const specialities = Array.isArray(specialityData)
      ? specialityData
      : Array.isArray(specialityData?.rows)
        ? specialityData.rows
        : [];

    console.log("ALL SPECIALITIES:", specialities);

    if (specialities.length === 0) {
      setItems([]);
      setSpeciality(null);
      return;
    }

    // STEP 2: Get ailments from each speciality detail API
    const results = await Promise.all(
      specialities.map(async (specialityItem) => {
        try {
          if (!specialityItem?.slug) return [];

          const detailResponse = await getSpecialityBySlug(
            specialityItem.slug
          );

          const detail = getApiData(detailResponse);

          const ailments = Array.isArray(detail?.ailments)
            ? detail.ailments
            : [];

          return ailments
            .map((item, index) => {
              const name = cleanText(
                typeof item === "string"
                  ? item
                  : item?.title || item?.name || ""
              );

              if (!name) return null;

              const ailment = createAilment(
                name,
                specialityItem,
                index
              );

              return {
                ...ailment,
                description:
                  typeof item === "object"
                    ? cleanText(item?.description || "")
                    : "",
              };
            })
            .filter(Boolean);
        } catch (error) {
          console.error(
            `Failed to load ailments for ${specialityItem.name}:`,
            error
          );

          return [];
        }
      })
    );

    if (!mounted) return;

    // STEP 3: Combine all speciality ailments
    const allAilments = results.flat();

    console.log("ALL AILMENTS FROM BACKEND:", allAilments);

    // STEP 4: Remove duplicate ailments
    setItems(removeDuplicates(allAilments));

    setSpeciality(null);
  } catch (error) {
    console.error("All ailments API error:", error);

    if (!mounted) return;

    setItems([]);
    setSpeciality(null);
  } finally {
    if (mounted) {
      setLoading(false);
    }
  }
}


    /* =====================================
       SPECIALITY AILMENTS

       /speciality/:slug/ailments

       ONLY BACKEND DATA
    ===================================== */

    async function loadSpecialityAilments() {
      try {
        setLoading(true);


        const response =
          await getSpecialityBySlug(
            slug
          );


        if (!mounted) {
          return;
        }


        const data =
          response?.data;


        if (!data) {
          setItems([]);
          setSpeciality(null);

          return;
        }


        setSpeciality(data);


        const ailments =
          Array.isArray(
            data.ailments
          )
            ? data.ailments
            : [];


        const specialityItems = ailments
  .map((item, index) => {
    const name =
      typeof item === "string"
        ? cleanText(item)
        : cleanText(item?.title || item?.name || "");

    if (!name) return null;

    const ailment = createAilment(
      name,
      data,
      index
    );

    return {
      ...ailment,

      // Preserve backend description
      description:
        typeof item === "object" && item !== null
          ? item.description || ""
          : "",
    };
  })
  .filter(Boolean);


        setItems(
          removeDuplicates(
            specialityItems
          )
        );

      } catch (error) {
        console.error(
          "Speciality ailments API error:",
          error
        );


        if (!mounted) {
          return;
        }


        setItems([]);

        setSpeciality(null);

      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }


    /* =====================================
       ROUTE MODE
    ===================================== */

    if (slug) {
      loadSpecialityAilments();
    } else {
      loadAllAilments();
    }


    return () => {
      mounted = false;
    };

  }, [slug]);


  /* =========================================
     LOADING
  ========================================= */

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#F7FAF9]">

        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#DCE8E7] border-t-[#064B50]" />

          <p className="mt-4 text-[14px] text-[#52696A]">
            Loading ailments...
          </p>

        </div>

      </main>
    );
  }


  /* =========================================
     REUSABLE UI
  ========================================= */

  return (
    <MedicalDirectoryPage
      type="ailments"
      items={items}
      speciality={speciality}
      specialitySlug={slug}
    />
  );
}











