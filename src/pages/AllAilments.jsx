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


/* =========================================
   NORMALIZE ONE AILMENT
========================================= */

function createAilment(
  name,
  speciality,
  index
) {
  const cleanName =
    String(name || "").trim();

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


    /* =====================================
       ALL AILMENTS

       /ailments

       ONLY BACKEND DATA
    ===================================== */

    async function loadAllAilments() {
      try {
        setLoading(true);


        const response =
          await getSpecialities({
            is_active: 1,
            limit: 100,
          });


        if (!mounted) {
          return;
        }


        /*
          specialitiesApi.js already does:

          return response.data;

          So expected:

          {
            success: true,
            data: [...]
          }

          Therefore:
          response.data = [...]
        */

        let specialities = [];


        if (
          Array.isArray(
            response?.data
          )
        ) {
          specialities =
            response.data;
        }

        else if (
          Array.isArray(
            response?.data?.rows
          )
        ) {
          specialities =
            response.data.rows;
        }

        else if (
          Array.isArray(
            response?.rows
          )
        ) {
          specialities =
            response.rows;
        }

        else if (
          Array.isArray(response)
        ) {
          specialities =
            response;
        }


        console.log(
          "ALL SPECIALITIES:",
          specialities
        );


        /* =================================
           READ ailments_text

           Backend list() already returns:

           ailments_text
        ================================= */

        const allAilments =
          specialities.flatMap(
            (specialityItem) => {

              const ailmentsText =
                specialityItem
                  ?.ailments_text;


              if (!ailmentsText) {
                return [];
              }


              /*
                GROUP_CONCAT normally gives:

                "Heart Failure,Arrhythmia,Stroke"

                Convert to array.
              */

              const names =
                String(ailmentsText)
                  .split(",")
                  .map(
                    (name) =>
                      name.trim()
                  )
                  .filter(Boolean);


              return names
                .map(
                  (
                    name,
                    index
                  ) =>
                    createAilment(
                      name,
                      specialityItem,
                      index
                    )
                )
                .filter(Boolean);
            }
          );


        console.log(
          "BACKEND ALL AILMENTS:",
          allAilments
        );


        setItems(
          removeDuplicates(
            allAilments
          )
        );


        setSpeciality(null);

      } catch (error) {
        console.error(
          "All ailments API error:",
          error
        );


        if (!mounted) {
          return;
        }


        /*
          IMPORTANT:
          no hardcoded fallback
        */

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


        const specialityItems =
          ailments
            .map(
              (
                item,
                index
              ) => {

                const name =
                  typeof item ===
                  "string"
                    ? item
                    : item?.name ||
                      item?.title ||
                      "";


                return createAilment(
                  name,
                  data,
                  index
                );
              }
            )
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





// import MedicalDirectoryPage from "../components/medical/MedicalDirectoryPage";

// import {
//   getAllAilments,
// } from "../utils/medicalDirectory";


// export default function AllAilments() {
//   const ailments =
//     getAllAilments();

//   return (
//     <MedicalDirectoryPage
//       type="ailments"
//       items={ailments}
//     />
//   );
// }