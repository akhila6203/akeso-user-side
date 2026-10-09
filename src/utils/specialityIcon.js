import {
  HeartPulse,
  Activity,
  Brain,
  Bone,
  Stethoscope,
  Baby,
  Ambulance,
  Microscope,
  Cpu,
  ShieldPlus,
  Pill,
  Hospital,
  ScanLine,
  Eye,
  Cross,
  Ear,
} from "lucide-react";


/* =========================================================
   SPECIALITY ICON RESOLVER

   - Icon DB/API lo store cheyyalsina avasaram ledu.
   - Admin panel lo speciality NAME matrame add chestharu.
   - API nunchi vachina name base chesi icon automatic ga select avuthundi.
   - Match kakapothe DEFAULT = Stethoscope.
========================================================= */

export function getSpecialityIcon(name = "") {
  const value = String(name)
    .trim()
    .toLowerCase();


  /* =======================================================
     ORTHOPAEDICS / BONES / JOINTS
  ======================================================= */

  if (
    value.includes("orthopaedic") ||
    value.includes("orthopedic") ||
    value.includes("bone") ||
    value.includes("joint")
  ) {
    return Bone;
  }


  /* =======================================================
     CANCER / ONCOLOGY
  ======================================================= */

  if (
    value.includes("cancer") ||
    value.includes("oncology") ||
    value.includes("onco")
  ) {
    return Activity;
  }


  /* =======================================================
     NEUROSCIENCES / BRAIN
  ======================================================= */

  if (
    value.includes("neuroscience") ||
    value.includes("neurology") ||
    value.includes("neuro") ||
    value.includes("brain")
  ) {
    return Brain;
  }


  /* =======================================================
     WEIGHT LOSS / BARIATRIC / OBESITY
  ======================================================= */

  if (
    value.includes("weight loss") ||
    value.includes("bariatric") ||
    value.includes("obesity")
  ) {
    return Activity;
  }


  /* =======================================================
     CARDIAC / CARDIOLOGY / HEART
  ======================================================= */

  if (
    value.includes("cardiac") ||
    value.includes("cardiology") ||
    value.includes("cardio") ||
    value.includes("heart")
  ) {
    return HeartPulse;
  }


  /* =======================================================
     GASTROSCIENCES / GASTROENTEROLOGY
  ======================================================= */

  if (
    value.includes("gastro") ||
    value.includes("digestive") ||
    value.includes("stomach")
  ) {
    return Stethoscope;
  }


  /* =======================================================
     RENAL / NEPHROLOGY / KIDNEY
  ======================================================= */

  if (
    value.includes("renal") ||
    value.includes("nephro") ||
    value.includes("kidney")
  ) {
    return Activity;
  }


  /* =======================================================
     LIVER / HEPATOLOGY
  ======================================================= */

  if (
    value.includes("liver") ||
    value.includes("hepato")
  ) {
    return Stethoscope;
  }


  /* =======================================================
     BONE MARROW / TRANSPLANT
     Note:
     Bone Marrow already matched above by "bone".
     Other transplant specialities use Hospital.
  ======================================================= */

  if (
    value.includes("transplant")
  ) {
    return Hospital;
  }


  /* =======================================================
     LUNG / RESPIRATORY / PULMONOLOGY / CHEST
     Current project used Activity/HeartPulse.
     We keep Activity for respiratory/lung.
  ======================================================= */

  if (
    value.includes("lung") ||
    value.includes("pulmonology") ||
    value.includes("pulmonary") ||
    value.includes("respiratory") ||
    value.includes("sleep medicine")
  ) {
    return Activity;
  }


  if (
    value.includes("chest")
  ) {
    return HeartPulse;
  }


  /* =======================================================
     GYNAECOLOGY / OBSTETRICS / WOMEN'S CARE
  ======================================================= */

  if (
    value.includes("gynaecology") ||
    value.includes("gynecology") ||
    value.includes("gynae") ||
    value.includes("obstetric") ||
    value.includes("maternity") ||
    value.includes("women")
  ) {
    return Baby;
  }


  /* =======================================================
     PAEDIATRICS / PEDIATRICS / CHILD CARE
  ======================================================= */

  if (
    value.includes("paediatric") ||
    value.includes("pediatric") ||
    value.includes("child") ||
    value.includes("neonatal") ||
    value.includes("neonatology")
  ) {
    return Baby;
  }


  /* =======================================================
     EMERGENCY / TRAUMA
  ======================================================= */

  if (
    value.includes("emergency") ||
    value.includes("trauma")
  ) {
    return Ambulance;
  }


  /* =======================================================
     ENT / EAR / HEAD & NECK
  ======================================================= */

  if (
    value.includes("ent") ||
    value.includes("ear") ||
    value.includes("head and neck") ||
    value.includes("head & neck")
  ) {
    return Ear;
  }


  /* =======================================================
     PLASTIC / AESTHETIC / RECONSTRUCTIVE SURGERY
  ======================================================= */

  if (
    value.includes("plastic") ||
    value.includes("aesthetic") ||
    value.includes("reconstructive") ||
    value.includes("cosmetic")
  ) {
    return Stethoscope;
  }


  /* =======================================================
     INTERNAL / GENERAL MEDICINE
  ======================================================= */

  if (
    value.includes("internal medicine") ||
    value.includes("general medicine")
  ) {
    return Pill;
  }


  /* =======================================================
     VASCULAR / ENDOVASCULAR
  ======================================================= */

  if (
    value.includes("vascular") ||
    value.includes("endovascular")
  ) {
    return Activity;
  }


  /* =======================================================
     ENDOCRINOLOGY / DIABETES
  ======================================================= */

  if (
    value.includes("endocrinology") ||
    value.includes("endocrine") ||
    value.includes("diabetes") ||
    value.includes("diabetic")
  ) {
    return Activity;
  }


  /* =======================================================
     RHEUMATOLOGY / IMMUNOLOGY
  ======================================================= */

  if (
    value.includes("rheumatology") ||
    value.includes("rheumatic") ||
    value.includes("immunology") ||
    value.includes("immune")
  ) {
    return ShieldPlus;
  }


  /* =======================================================
     RADIOLOGY / IMAGING / SCANS
  ======================================================= */

  if (
    value.includes("radiology") ||
    value.includes("imaging") ||
    value.includes("scan")
  ) {
    return ScanLine;
  }


  /* =======================================================
     OPHTHALMOLOGY / EYE
  ======================================================= */

  if (
    value.includes("ophthalmology") ||
    value.includes("ophthalmic") ||
    value.includes("eye") ||
    value.includes("vision")
  ) {
    return Eye;
  }


  /* =======================================================
     CRITICAL CARE / ICU
  ======================================================= */

  if (
    value.includes("critical care") ||
    value.includes("intensive care") ||
    value.includes("icu")
  ) {
    return Hospital;
  }


  /* =======================================================
     DERMATOLOGY / SKIN
  ======================================================= */

  if (
    value.includes("dermatology") ||
    value.includes("dermatologist") ||
    value.includes("skin")
  ) {
    return Activity;
  }


  /* =======================================================
     DENTISTRY / DENTAL
  ======================================================= */

  if (
    value.includes("dentistry") ||
    value.includes("dental") ||
    value.includes("dentist") ||
    value.includes("oral")
  ) {
    return Cross;
  }


  /* =======================================================
     DIETETICS / NUTRITION
  ======================================================= */

  if (
    value.includes("dietetic") ||
    value.includes("nutrition") ||
    value.includes("diet")
  ) {
    return HeartPulse;
  }


  /* =======================================================
     LAB / PATHOLOGY
  ======================================================= */

  if (
    value.includes("pathology") ||
    value.includes("laboratory") ||
    value.includes("lab")
  ) {
    return Microscope;
  }


  /* =======================================================
     TECHNOLOGY / ROBOTIC
  ======================================================= */

  if (
    value.includes("robotic") ||
    value.includes("technology") ||
    value.includes("advanced technology")
  ) {
    return Cpu;
  }


  /* =======================================================
     GENERAL SURGERY
  ======================================================= */

  if (
    value.includes("surgery") ||
    value.includes("surgical")
  ) {
    return Stethoscope;
  }


  /* =======================================================
     DEFAULT ICON

     IMPORTANT:
     Admin future lo completely new speciality add chesina
     error raadhu.

     Example:
     "Rare Disease Center"
     "Pain Management"
     "New Medical Department"

     paina conditions lo match kakapothe
     Stethoscope automatic ga display avuthundi.
  ======================================================= */

  return Stethoscope;
}