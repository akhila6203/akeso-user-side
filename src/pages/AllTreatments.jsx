import {
  useMemo,
} from "react";

import {
  useParams,
} from "react-router-dom";

import MedicalDirectoryPage from "../components/medical/MedicalDirectoryPage";

import {
  getAllTreatments,
} from "../utils/medicalDirectory";

import {
  getSpecialityDetails,
} from "../data/specialityDetails";

import {
  specialties,
} from "../data/navigation";


export default function AllTreatments() {
  const { slug } = useParams();


  /* =========================================
     ALL HARDCODED TREATMENTS
  ========================================= */

  const allTreatments = useMemo(
    () => getAllTreatments(),
    []
  );


  /* =========================================
     NORMAL ALL TREATMENTS PAGE

     URL:
     /treatments
  ========================================= */

  if (!slug) {
    return (
      <MedicalDirectoryPage
        type="treatments"
        items={allTreatments}
      />
    );
  }


  /* =========================================
     SPECIALITY TREATMENTS PAGE

     URL:
     /speciality/:slug/treatments

     No API integration.
     Existing hardcoded speciality data only.
  ========================================= */

  const navigationItem =
    specialties.find(
      (item) => item[1] === slug
    );


  if (!navigationItem) {
    return (
      <MedicalDirectoryPage
        type="treatments"
        items={[]}
      />
    );
  }


  const specialityData =
    getSpecialityDetails(
      slug,
      navigationItem
    );


  const specialityTreatments =
    Array.isArray(
      specialityData?.treatments
    )
      ? specialityData.treatments
      : [];


  return (
    <MedicalDirectoryPage
      type="treatments"
      items={specialityTreatments}
      speciality={{
        name:
          specialityData?.title ||
          navigationItem?.[0] ||
          "",
        slug,
      }}
      specialitySlug={slug}
    />
  );
}




// import MedicalDirectoryPage from "../components/medical/MedicalDirectoryPage";

// import {
//   getAllTreatments,
// } from "../utils/medicalDirectory";


// export default function AllTreatments() {
//   const treatments =
//     getAllTreatments();

//   return (
//     <MedicalDirectoryPage
//       type="treatments"
//       items={treatments}
//     />
//   );
// }