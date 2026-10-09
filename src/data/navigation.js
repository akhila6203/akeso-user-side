import {
  HeartPulse,
  Activity,
  Brain,
  Bone,
  Stethoscope,
  Baby,
  Ambulance,
  Ear,
  Sparkles,
  BookOpen,
  Microscope,
  Cpu,
  ShieldPlus,
  Newspaper,
  Lightbulb,
  CalendarDays,
  Download,
  MessageCircle,
  FlaskConical,
  House,
  Pill,
  Video,
  Plane,
  Siren,
  ClipboardPlus,
  Accessibility,
  Globe,
  Headphones,
  MapPin,
  Calculator,
  ShieldCheck,
  Hospital,
  ScanLine,
  Eye,
  Cross,
} from "lucide-react";

/* =========================================================
   SPECIALITIES
========================================================= */

export const specialties = [
  [
    "Orthopaedics",
    "orthopaedics",
    Bone,
  ],

  [
    "Cancer Care",
    "cancer-care",
    Activity,
  ],

  [
    "Neurosciences",
    "neurosciences",
    Brain,
  ],

  [
    "Weight Loss Programs",
    "weight-loss-programs",
    Activity,
  ],

  [
    "Cardiac Care",
    "cardiac-care",
    HeartPulse,
  ],

  [
    "Gastrosciences",
    "gastrosciences",
    Stethoscope,
  ],

  [
    "Renal Care",
    "renal-care",
    Activity,
  ],

  [
    "Liver Transplant",
    "liver-transplant",
    Stethoscope,
  ],

  [
    "Bone Marrow Transplant",
    "bone-marrow-transplant",
    Hospital,
  ],

  [
    "Lung Transplant",
    "lung-transplant",
    Activity,
  ],

  [
    "Chest Surgery",
    "chest-surgery",
    HeartPulse,
  ],

  [
    "Gynaecology and GynaeOncology",
    "gynaecology-and-gynaeoncology",
    Baby,
  ],

  [
    "Paediatric Care",
    "paediatric-care",
    Baby,
  ],

  [
    "Obstetrics & Gynaecology",
    "obstetrics-gynaecology",
    Baby,
  ],

  [
    "Emergency",
    "emergency",
    Ambulance,
  ],

  [
    "ENT, Head and Neck Surgery",
    "ent-head-neck-surgery",
    Stethoscope,
  ],

  [
    "Plastic, Aesthetic and Reconstructive Surgery",
    "plastic-aesthetic-reconstructive-surgery",
    Stethoscope,
  ],

  [
    "Internal Medicine",
    "internal-medicine",
    Pill,
  ],

  [
    "Respiratory & Sleep Medicine",
    "respiratory-sleep-medicine",
    Activity,
  ],

  [
    "Peripheral Vascular and Endovascular Sciences",
    "peripheral-vascular-endovascular-sciences",
    Activity,
  ],

  [
    "Endocrinology & Diabetes",
    "endocrinology-diabetes",
    Activity,
  ],

  [
    "Rheumatology and Immunology",
    "rheumatology-immunology",
    ShieldPlus,
  ],

  [
    "Radiology & Imaging",
    "radiology-imaging",
    ScanLine,
  ],

  [
    "Ophthalmology",
    "ophthalmology",
    Eye,
  ],

  [
    "Critical Care",
    "critical-care",
    Hospital,
  ],

  [
    "Dermatology",
    "dermatology",
    Activity,
  ],

  [
    "Dentistry",
    "dentistry",
    Cross,
  ],

  [
    "Dietetics and Nutrition",
    "dietetics-nutrition",
    HeartPulse,
  ],

  [
    "Lab & Pathology",
    "lab-pathology",
    Microscope,
  ],
];
/* =========================================================
   HEALTH LIBRARY

   IMPORTANT:
   "knowledge" is used by Header.jsx to identify
   Knowledge Center and open its right-side submenu.
========================================================= */

export const healthLibrary = [
  ["Treatments", "treatments", Stethoscope],
  ["Technologies", "technologies", Cpu],
  ["Ailments", "ailments", ShieldPlus],
  ["Web Stories", "web-stories", Newspaper],
  
  ["Knowledge Center", "knowledge", Lightbulb],
];

export const knowledgeCenter = [
  ["Blogs", "blogs", BookOpen],
  ["Videos", "videos", Video],
  ["Case Studies", "case-studies", ClipboardPlus],
];

/* =========================================================
   SERVICES
========================================================= */

export const services = [
    [
    "TeleVisits",
    "televisits",
    Video,
  ],
  [
    "Second Opinion",
    "second-opinion",
    MessageCircle,
  ],

  [
    "Lab Test & Diagnostic",
    "lab-test-diagnostic",
    FlaskConical,
  ],

  [
    "Homecare Services",
    "homecare-services",
    House,
  ],
  [
    "Post-Op Care",
    "post-op-care",
    Activity,
  ],
];

/* =========================================================
   INTERNATIONAL PATIENTS
========================================================= */

export const international = [
//   [
//     "International Patients",
//     "international-patients",
//     Globe,
//   ],

  [
    "Patient Help Desk",
    "patient-help-desk",
    Headphones,
  ],

  [
    "Plan Your Trip",
    "plan-your-trip",
    MapPin,
  ],

  [
    "Request An Estimate",
    "request-an-estimate",
    Calculator,
  ],

];

/* =========================================================
   FOOTER QUICK LINKS
========================================================= */

export const footerQuickLinks = [
  ["Our Doctors", "/doctors"],

  ["Specialities", "/specialities"],

  ["Services", "/services"],

  ["Health Library", "/health-library"],

  [
    "International Patients",
    "/international-patients",
  ],

  ["Contact Us", "/contact"],
];

/* =========================================================
   FOOTER SPECIALITY LINKS
========================================================= */

export const footerSpecialities = [
  ["Cardiac Care", "/speciality/cardiac-care"],

  ["Cancer Care", "/speciality/cancer-care"],

  ["Neurosciences", "/speciality/neurosciences"],

  ["Gastrosciences", "/speciality/gastrosciences"],

  ["Orthopaedics", "/speciality/orthopaedics"],

  ["Renal Care", "/speciality/renal-care"],
];

/* =========================================================
   FOOTER PATIENT LINKS
========================================================= */

export const footerPatientLinks = [
  [
    "Second Opinion",
    "/services/second-opinion",
  ],

  [
    "Health Checkup",
    "/services/health-checkup",
  ],

  [
    "Patient Help Desk",
    "/international/patient-help-desk",
  ],

  [
    "Plan Your Trip",
    "/international/plan-your-trip",
  ],

  [
    "Request An Estimate",
    "/international/request-an-estimate",
  ],
];

/* =========================================================
   OPTIONAL EXPORTS

   These aliases are included so older components in the
   project do not immediately break if they use the previous
   variable names.
========================================================= */

export const specialityDropdown = specialties.slice(0, 6);

export const healthLibraryMenu = healthLibrary;

export const knowledgeCenterMenu = knowledgeCenter;

export const servicesMenu = services;

export const internationalPatientsMenu = international;