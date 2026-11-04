import {
  specialties,
} from "./navigation";

import doctorsImage from "../assets/patient-support/support-doctors.jpg";
import specialitiesImage from "../assets/patient-support/support-specialities.jpg";
import treatmentsImage from "../assets/patient-support/support-treatments.jpg";
import ailmentsImage from "../assets/patient-support/support-ailments.jpg";

// Health Library images
import symptomsImage from "../assets/health-library/symptoms.jpg";
import causesImage from "../assets/health-library/causes.jpg";
import risksImage from "../assets/health-library/risks.jpg";
import preventionImage from "../assets/health-library/prevention.jpg";
import symptomsImage1 from "../assets/health-library/symptoms1.jpg";

import ctImage from "../assets/health-library/ct.jpg";
import roboticSurgeryImage from "../assets/health-library/robotic-surgery.jpg";
import imageGuidedImage from "../assets/health-library/image-guided.jpg";

// Condition images
import migraineImage from "../assets/health-library/hl4.jpg";

// Default condition image
import defaultConditionImage from "../assets/health-library/hl1.jpg";

export const slugifyHealth = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[’']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");


/* =========================================================
   DISEASE / CONDITION NAMES
========================================================= */

const diseaseNames = [
  "Voice Box Tumours",
  "Urinary Incontinence",
  "Ulcer",
  // "Trigger Finger",
  "Traumatic Crush Injuries",
  "Tracheal Cancer",
  "Tongue Cancer",
  // "Trigeminal Neuralgia",
  // "Traumatic Brain Injury",
  // "Tourette Syndrome",

  "Severe Bone Fracture",
  "Scabies",
  "Skin Allergies",
  // "Severe Burns",
  // "Skull Base Tumor",
  // "Rosacea",
  // "Road Accidents",
  // "Rheumatic Heart Disease",
  // "Renal Tubular Acidosis",
  // "Rheumatoid Arthritis",

  "Paget’s Disease",
  "Panfacial Fractures",
  // "Prolapsed Intervertebral Disc",
  // "Pilonidal Sinus",
  // "Pimple",
  // "Pharyngeal Cancer",
  // "Parkinson’s Disease",
  "Peritonitis",
  "Osteoarthritis",
  "Osteoporosis",

  // "Obsessive Compulsive Disorder",
  // "Nasal Polyps",
  "Nephrotic Syndrome",
  "Nerve Injury",
  // "Maxillary and Mandibular Fractures",
  // "Maxillary Sinusitis",
  // "Marfan Syndrome",
  // "Melanoma",
  // "Meningioma",
  // "Multiple Sclerosis",

  "Migraine",
  "Moebius Syndrome",
  // "Myositis",
  // "Lung Cancer",
  // "Lipoma",
  // "Large Ductal Carcinoma",
  // "Lip Cancer",
  // "Laryngeal Cancer",
  // "Lumbar Canal Stenosis",
  // "Knee Fractures & Injuries",

  // "Kidney Cancer",
  // "Keratoconus",
  "Jaundice",
  "Impetigo",
  "Interstitial Cystitis",
  // "Intradural Spinal Tumour",
  // "Irritable Bowel Syndrome",
  // "Internal Hemorrhoidal Prolapse",
  // "Immunodeficiency Disorder",
  // "Hip Fracture",

  // "Heart Failure",
  // "Hypertension",
  // "Horseshoe Kidney",
  "Hydronephrosis",
  "Head and Neck Cancer",
  // "Huntington's Disease",
  // "Hemifacial Spasm",
  // "Hydrocephalus",
  // "Hepatitis C",
  // "Hernia",

  // "Gynecomastia",
  // "Glomerular Disease",
  // "Glioblastoma (GBM)",
  // "Gestational Diabetes",
  // "Goodpasture Syndrome",
  "Frozen Shoulder",
  "Fibromyalgia",
  // "Flatfeet",
  // "Fibrocystic Disease",
  // "Extensive Wound or Trauma",

  "Eardrum Perforation",
  "Ewing’s Sarcoma",
  // "Extradural Spinal Tumour",
  "Disc Prolapse",
  "Dystonia",
  // "Dental Malocclusions",
  // "Deviated Nasal Septum",
  // "Diabetic Kidney Disease",
  // "Dysphagia",
  // "Dawson Disease",

  "Dyspepsia (Indigestion, Upset Stomach)",
  "Carcinoma Lung",
  "Chronic Otitis Media",
  "Coronary Artery Disease",
  // "Carcinoma Prostate",
  // "Carcinoma Pancreas",
  // "Carcinoma Buccal Mucosa",
  // "Carcinoma Larynx",
  // "Carcinoma Tonsil",
  // "Cerebral Aneurysm",

  "CSF Rhinorrhea",
  "Craniosynostosis",
  "Carcinoma Esophagus",
  // "Cholecystitis",
  // "Carcinoma Rectum",
  // "Cushing Syndrome",
  // "Bartter Syndrome",
  // "Bladder Pain Syndrome",
  // "Brain Metastasis",
  // "Bloody Nipple Discharge",

  "Bowen’s Disease",
  "Brain Cancer",
  // "Biliary Atresia",
  "Biliary Disease",
  // "Androgenetic Alopecia or Pattern Baldness",
  "Allergic Rhinitis",
  "Asperger’s Disease",
  // "Acute Kidney Injury",
  // "Acute Myeloid Leukemia",
  // "Acquired Brain Injury",

  "Agnosia",
  "Anxiety",
];


/* =========================================================
   CATEGORY DETECTION

   Used only for UI icon/category organisation.
========================================================= */

function getCategory(name) {
  const value = name.toLowerCase();

  if (
    value.includes("cancer") ||
    value.includes("carcinoma") ||
    value.includes("tumour") ||
    value.includes("tumor") ||
    value.includes("leukemia") ||
    value.includes("melanoma") ||
    value.includes("sarcoma")
  ) {
    return "Cancer Care";
  }

  if (
    value.includes("brain") ||
    value.includes("neural") ||
    value.includes("migraine") ||
    value.includes("parkinson") ||
    value.includes("dystonia") ||
    value.includes("sclerosis") ||
    value.includes("hydrocephalus") ||
    value.includes("agnosia")
  ) {
    return "Neurosciences";
  }

  if (
    value.includes("kidney") ||
    value.includes("renal") ||
    value.includes("bladder") ||
    value.includes("nephrotic") ||
    value.includes("glomerular")
  ) {
    return "Renal Care";
  }

  if (
    value.includes("heart") ||
    value.includes("coronary") ||
    value.includes("hypertension") ||
    value.includes("rheumatic")
  ) {
    return "Cardiac Care";
  }

  if (
    value.includes("bone") ||
    value.includes("fracture") ||
    value.includes("shoulder") ||
    value.includes("arthritis") ||
    value.includes("osteoporosis") ||
    value.includes("disc") ||
    value.includes("flatfeet") ||
    value.includes("finger")
  ) {
    return "Orthopaedics";
  }

  return "General Health";
}


// export const healthConditions = diseaseNames.map((name) => ({
//   name,
//   slug: slugifyHealth(name),
//   category: getCategory(name),
// }));
export const healthConditions = diseaseNames.map((name) => {
  const slug = slugifyHealth(name);

  const conditionImages = {
    migraine: migraineImage,
  };

  return {
    name,
    slug,
    category: getCategory(name),
    image: conditionImages[slug] || defaultConditionImage,
  };
});
/* =========================================================
   FEATURED / MOST SEARCHED
========================================================= */

export const mostSearchedConditions = [
  "Osteoarthritis",
  "Frozen Shoulder",
  "Disc Prolapse",
  "Fibromyalgia",
  "Hip Fracture",
  "Paget’s Disease",
  "Knee Fractures & Injuries",
  "Trigger Finger",
  "Severe Bone Fracture",
  "Panfacial Fractures",
  "Dystonia",
  "Prolapsed Intervertebral Disc",
  "Flatfeet",
  "Osteoporosis",
];


/* =========================================================
   DETAILS DATA

   IMPORTANT:
   Keep medical copy reviewed/approved before production.

   The generic fallback below prevents broken pages.
   For important conditions add approved condition-specific
   content inside healthConditionDetails.
========================================================= */

export const healthConditionDetails = {
  "pagets-disease": {
    title: "Paget’s Disease",

      image: defaultConditionImage,

    about:
      "Paget’s disease is a long-term disorder involving abnormal bone remodelling. The affected bone can become enlarged, structurally altered and more vulnerable to complications. Clinical evaluation may include symptoms, examination, blood tests and imaging.",

    sections: {
      symptoms: {
        title: "Symptoms",
        image:
          symptomsImage1,

        content:
          "Some people may have no noticeable symptoms. When symptoms occur, they can vary depending on which bones are affected.",

        points: [
          "Bone or joint pain",
          "Changes in bone shape",
          "Reduced mobility in an affected area",
          "Symptoms related to pressure on nearby nerves",
        ],
      },

      causes: {
        title: "Causes",
        image: causesImage,

        content:
          "The exact cause is not fully established. Genetic and environmental factors may contribute in some patients.",

        points: [
          "Family history may increase susceptibility",
          "Age is an important associated factor",
          "Environmental influences continue to be studied",
        ],
      },

      risks: {
        title: "Risks",
       
          image: risksImage,

        content:
          "Certain factors may be associated with a greater likelihood of developing Paget’s disease.",

        points: [
          "Increasing age",
          "Family history",
          "Some populations may have higher prevalence",
        ],
      },

      prevention: {
        title: "Prevention",
       image: preventionImage,

        content:
          "There is no guaranteed way to prevent the condition, but appropriate medical follow-up can help reduce complications.",

        points: [
          "Follow the treatment plan recommended by your doctor",
          "Maintain appropriate bone health and nutrition",
          "Reduce fall risk where mobility is affected",
          "Attend recommended follow-up assessments",
        ],
      },
    },
  },
};


/* =========================================================
   GENERIC FALLBACK
========================================================= */

export function getHealthCondition(slug) {
  const condition =
    healthConditions.find(
      (item) => item.slug === slug
    );

  if (!condition) {
    return null;
  }

  if (healthConditionDetails[slug]) {
    return {
      ...condition,
      ...healthConditionDetails[slug],
    };
  }

  return {
    ...condition,

    title: condition.name,

    image:
      symptomsImage1,

    about: `${condition.name} requires an individual clinical assessment to understand symptoms, possible contributing factors, diagnosis and appropriate management. Evaluation and treatment depend on the patient's medical history, examination and specialist recommendations.`,

    sections: {
      symptoms: {
        title: "Symptoms",
         image: symptomsImage,

        content: `Symptoms associated with ${condition.name} can differ between patients and may vary according to severity and the part of the body affected.`,

        points: [
          "Symptoms may vary from person to person",
          "Severity may change over time",
          "Some symptoms can overlap with other conditions",
          "Specialist assessment may be required",
        ],
      },

      causes: {
        title: "Causes",
        image: causesImage,

        content: `The causes or contributing factors associated with ${condition.name} depend on the condition and the individual patient.`,

        points: [
          "Medical history may be relevant",
          "Genetic factors may contribute in some conditions",
          "Lifestyle or environmental factors may be relevant",
          "A specialist can help identify likely contributing factors",
        ],
      },

      risks: {
        title: "Risks",
        image: risksImage,

        content: `Risk factors for ${condition.name} vary and should be interpreted together with the patient's medical history.`,

        points: [
          "Age may be relevant for some conditions",
          "Family history may be relevant",
          "Existing medical conditions can influence risk",
          "Individual risk should be assessed clinically",
        ],
      },

      prevention: {
        title: "Prevention",
        image:
          preventionImage,

        content: `Prevention and risk-reduction strategies for ${condition.name} depend on the underlying condition and individual health needs.`,

        points: [
          "Attend appropriate health assessments",
          "Follow medical advice for existing conditions",
          "Maintain appropriate lifestyle and preventive care",
          "Seek medical attention for persistent or worsening symptoms",
        ],
      },
    },
  };
}

/* =========================================================
   HEALTH LIBRARY PROVIDES
========================================================= */

export const libraryProvides = [
  {
    title:
      "Diseases & Conditions",

    description:
      "Explore health conditions with information about symptoms, possible causes, risks and prevention.",

    icon: "activity",

    path:
      "/health-library",
  },

  {
    title:
      "Treatments & Procedures",

    description:
      "Browse treatment and procedure information across all available specialist care areas.",

    icon: "clipboard",

    path:
      "/treatments",
  },

  {
    title:
      "Technology & Devices",

    description:
      "Explore medical technologies used across different areas of healthcare.",

    icon: "settings",

    path:
      "/technologies",
  },

  {
    title:
      "Ailments",

    description:
      "Browse ailments and conditions across all available specialist care areas.",

    icon: "heart",

    path:
      "/ailments",
  },
];


/* =========================================================
   MANAGING HEALTHCARE EASIER
========================================================= */

export const healthcareCards = [
  {
    title:
      "Our Doctors",

    image:
      doctorsImage,

    path:
      "/doctors",
  },

  {
    title:
      "Our Specialities",

    image:
      specialitiesImage,

    path:
      "/specialities",
  },

  {
    title:
      "Treatments",

    image:
      treatmentsImage,

    path:
      "/treatments",
  },

  {
    title:
      "Ailments",

    image:
      ailmentsImage,

    path:
      "/ailments",
  },
];

/* =========================================================
   EXISTING SPECIALITY ROUTES
========================================================= */

export const treatmentSpecialities =
  specialties.map(
    ([name, slug]) => ({
      name,
      slug,

      path:
        `/speciality/${slug}/treatments`,
    })
  );


export const ailmentSpecialities =
  specialties.map(
    ([name, slug]) => ({
      name,
      slug,

      path:
        `/speciality/${slug}/ailments`,
    })
  );

/* =========================================================
   TECHNOLOGY PREVIEW
========================================================= */

export const healthTechnologies = [
  {
    title: "Advanced CT Imaging",
    description:
      "Advanced imaging may support detailed diagnostic assessment and treatment planning.",
    image: ctImage,
  },

  {
    title: "Advanced MRI",
    description:
      "MRI technology provides detailed soft-tissue imaging for appropriate clinical indications.",
    image:
      "/images/technologies/mri.jpg",
  },

  {
    title: "Robotic Surgery",
    description:
      "Robotic-assisted platforms may support selected minimally invasive procedures.",
    image: roboticSurgeryImage,
  },

  {
    title:
      "Image-Guided Treatment",
    description:
      "Image-guided systems may support precision during selected procedures.",
    image: imageGuidedImage,
  },

  {
    title:
      "Radiation Technology",
    description:
      "Modern radiation platforms support carefully planned treatment delivery where clinically indicated.",
    image:
      "/images/technologies/radiation.jpg",
  },
];