import {
  Activity,
  Ambulance,
  Apple,
  BadgeCheck,
  CalendarCheck,
  ClipboardCheck,
  Clock3,
  Dumbbell,
  FileCheck2,
  FileText,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  Home,
  House,
  Languages,
  MessageCircle,
  MessagesSquare,
  Microscope,
  MonitorSmartphone,
  Pill,
  Salad,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TestTube2,
  UserRoundCheck,
  Users,
  Video,
} from "lucide-react";


/* =========================================================
   SERVICES
========================================================= */

export const services = [

  /* =======================================================
     TELEVISITS
  ======================================================= */

  {
    id: 1,

    name: "TeleVisits",

    slug: "televisits",

    icon: Video,

    eyebrow: "Virtual Care",

    shortDescription:
      "Connect with suitable medical specialists remotely before planning your treatment journey.",

    heroDescription:
      "Begin your medical journey with convenient specialist consultation, report review and coordinated guidance from wherever you are.",

    aboutTitle:
      "Specialist Care Before You Travel",

    about:
      "TeleVisits help patients discuss their medical condition with an appropriate specialist without travelling for the first consultation. Patients can share available reports, scans, prescriptions and medical history so the clinical team can better understand the case before discussing possible next steps.",

    introTitle:
      "Why Use a TeleVisit?",

    introText:
      "For international and outstation patients, the first challenge is often understanding which specialist to consult and whether travel is necessary. A TeleVisit creates an early connection between the patient and specialist, helping organise the medical journey before an in-person hospital visit.",


    features: [
      {
        icon: FileText,
        title: "Share Medical Reports",
        text:
          "Send available reports, scans, prescriptions and relevant medical history for review.",
      },

      {
        icon: Stethoscope,
        title: "Specialist Review",
        text:
          "Your medical concern can be coordinated with an appropriate specialist based on the information provided.",
      },

      {
        icon: Video,
        title: "Online Consultation",
        text:
          "Discuss symptoms, previous treatment and possible next steps through a scheduled virtual consultation.",
      },

      {
        icon: ClipboardCheck,
        title: "Treatment Guidance",
        text:
          "Understand whether additional investigations, an in-person consultation or further treatment planning may be required.",
      },

      {
        icon: Languages,
        title: "Communication Support",
        text:
          "Our coordination team can assist patients in organising the information required for their consultation.",
      },

      {
        icon: CalendarCheck,
        title: "Plan the Next Step",
        text:
          "If further care is required, the next consultation or treatment journey can be coordinated accordingly.",
      },
    ],


    highlightTitle:
      "Care Starts Before You Travel",

    highlightText:
      "Begin your healthcare journey with remote specialist consultation and coordinated support before making major travel or treatment decisions.",


    processTitle:
      "How TeleVisits Work",

    process: [
      {
        title: "Send Your Request",
        text:
          "Tell us about the medical condition, preferred speciality and your current concerns.",
      },

      {
        title: "Share Medical Records",
        text:
          "Provide available reports, scans, prescriptions and previous medical information.",
      },

      {
        title: "Specialist Coordination",
        text:
          "The case is coordinated with an appropriate specialist based on the available information.",
      },

      {
        title: "Virtual Consultation",
        text:
          "Attend the scheduled consultation and discuss your condition, questions and possible next steps.",
      },

      {
        title: "Plan Further Care",
        text:
          "If an in-person evaluation or treatment is advised, our team can help coordinate the next stage.",
      },
    ],


    benefitsTitle:
      "When TeleVisits Can Help",

    benefits: [
      "Before travelling for specialist treatment",
      "For review of existing medical reports",
      "For suitable follow-up discussions",
      "When seeking guidance about the appropriate speciality",
      "To understand possible next steps before planning treatment",
      "For patients who live far from the treating hospital",
    ],


    note:
      "TeleVisits are suitable for selected non-emergency medical needs. A specialist may advise an in-person examination or additional investigations when clinically necessary.",
  },


  /* =======================================================
     SECOND OPINION
  ======================================================= */

  {
    id: 2,

    name: "Second Opinion",

    slug: "second-opinion",

    icon: MessagesSquare,

    eyebrow: "Expert Medical Review",

    shortDescription:
      "Get an additional specialist perspective before making an important treatment decision.",

    heroDescription:
      "A structured medical review can help patients better understand a diagnosis, recommended treatment and available options.",

    aboutTitle:
      "Greater Clarity for Important Medical Decisions",

    about:
      "A second opinion allows another suitable specialist to review available medical information and provide an additional clinical perspective. It may be useful when a diagnosis is complex, major surgery has been recommended, treatment options are unclear or the patient wants greater confidence before deciding the next step.",

    introTitle:
      "Why Consider a Second Opinion?",

    introText:
      "Complex healthcare decisions can involve several possible approaches. Reviewing the available reports, imaging and previous recommendations with another specialist can help patients prepare better questions and understand the considerations around their current care plan.",


    features: [
      {
        icon: FileText,
        title: "Medical Record Review",
        text:
          "Relevant reports, scans, pathology findings and previous treatment information can be organised for review.",
      },

      {
        icon: UserRoundCheck,
        title: "Specialist Matching",
        text:
          "The case can be directed toward an appropriate specialist according to the medical condition.",
      },

      {
        icon: Microscope,
        title: "Investigation Review",
        text:
          "Available diagnostic information can be considered together with the patient's medical history.",
      },

      {
        icon: MessagesSquare,
        title: "Clinical Discussion",
        text:
          "Discuss questions regarding diagnosis, proposed treatment and possible alternatives where appropriate.",
      },

      {
        icon: FileCheck2,
        title: "Organised Case Summary",
        text:
          "Keeping relevant medical information together can make specialist review more efficient.",
      },

      {
        icon: ClipboardCheck,
        title: "Next-Step Guidance",
        text:
          "Understand what further evaluation or consultation may be required before making a treatment decision.",
      },
    ],


    highlightTitle:
      "Another Perspective Can Bring More Clarity",

    highlightText:
      "The goal of a second opinion is not to replace your existing doctor, but to provide additional specialist insight that can support an informed discussion about your care.",


    processTitle:
      "How the Second Opinion Process Works",

    process: [
      {
        title: "Tell Us About Your Case",
        text:
          "Share the diagnosis, current recommendation and reason for requesting another opinion.",
      },

      {
        title: "Submit Medical Records",
        text:
          "Provide relevant reports, scans, pathology documents, prescriptions and treatment history.",
      },

      {
        title: "Specialist Coordination",
        text:
          "The case is coordinated with a suitable specialist according to the medical condition.",
      },

      {
        title: "Medical Review",
        text:
          "The specialist reviews the available clinical information and discusses relevant considerations.",
      },

      {
        title: "Discuss Next Steps",
        text:
          "Use the additional perspective when discussing your treatment plan with your healthcare team.",
      },
    ],


    benefitsTitle:
      "A Second Opinion May Be Useful When",

    benefits: [
      "A major surgery or procedure has been recommended",
      "The diagnosis is complex or uncommon",
      "Several treatment options are available",
      "You want another specialist perspective",
      "You are considering travelling for medical treatment",
      "You want to better understand the proposed care plan",
    ],


    note:
      "A second opinion is based on the medical information available for review and may not replace a physical examination or additional diagnostic testing.",
  },


  /* =======================================================
     LAB TEST & DIAGNOSTIC
  ======================================================= */

  {
    id: 3,

    name: "Lab Test & Diagnostic",

    slug: "lab-test-diagnostic",

    icon: FlaskConical,

    eyebrow: "Diagnostics & Testing",

    shortDescription:
      "Coordinate laboratory investigations and diagnostic testing recommended as part of your medical care.",

    heroDescription:
      "From commonly prescribed blood tests to diagnostic investigations, testing helps clinicians evaluate health concerns and monitor treatment.",

    aboutTitle:
      "Diagnostics That Support Better Medical Decisions",

    about:
      "Laboratory and diagnostic investigations provide important information that doctors use together with symptoms, medical history, physical examination and other clinical findings. Akeso helps patients coordinate suitable testing requirements as part of their broader treatment journey.",

    introTitle:
      "Why Akeso for Diagnostic Coordination?",

    introText:
      "Patients travelling for treatment may need several investigations before or during their medical journey. Our role is to help organise prescribed testing, coordinate available diagnostic requirements and ensure reports are ready for appropriate clinical review.",


    whyTitle:
      "Why Akeso",

    whyItems: [
      {
        icon: ClipboardCheck,
        title: "Doctor-Directed Testing",
        text:
          "Testing can be coordinated according to the investigations recommended by the treating clinician.",
      },

      {
        icon: TestTube2,
        title: "Multiple Test Categories",
        text:
          "Support can include commonly prescribed pathology investigations and other diagnostic requirements.",
      },

      {
        icon: FileCheck2,
        title: "Report Coordination",
        text:
          "Available diagnostic reports can be organised for subsequent specialist consultation and treatment planning.",
      },

      {
        icon: Clock3,
        title: "Journey Coordination",
        text:
          "Where possible, testing can be planned around consultations and other stages of the patient's medical journey.",
      },
    ],


    testsTitle:
      "Frequently Prescribed Tests",

    tests: [
      {
        icon: TestTube2,
        title: "Complete Blood Count (CBC)",
        text:
          "Measures different blood-cell components and is commonly used as part of general health assessment and monitoring.",
      },

      {
        icon: Activity,
        title: "Blood Glucose",
        text:
          "Measures blood glucose and may be prescribed for diabetes screening or monitoring.",
      },

      {
        icon: HeartPulse,
        title: "Lipid Profile",
        text:
          "Measures cholesterol and triglyceride levels to provide information relevant to cardiovascular risk assessment.",
      },

      {
        icon: FlaskConical,
        title: "Liver Function Tests",
        text:
          "A group of blood tests used to assess substances associated with liver function and possible liver injury.",
      },

      {
        icon: Microscope,
        title: "Kidney / Renal Function",
        text:
          "Tests may be prescribed to assess substances related to kidney function and monitor selected medical conditions.",
      },

      {
        icon: Activity,
        title: "Thyroid Tests",
        text:
          "Tests such as TSH may be used when evaluating or monitoring thyroid function.",
      },

      {
        icon: TestTube2,
        title: "HbA1c",
        text:
          "Provides information about average blood glucose levels over approximately the previous two to three months.",
      },

      {
        icon: Microscope,
        title: "Urine Tests",
        text:
          "Urinalysis and other urine investigations may provide information about selected health conditions.",
      },
    ],


    features: [
      {
        icon: ClipboardCheck,
        title: "Prescription Review",
        text:
          "Share the investigation advised by your doctor or treating specialist.",
      },

      {
        icon: FlaskConical,
        title: "Test Coordination",
        text:
          "Suitable laboratory or diagnostic requirements can be organised according to availability.",
      },

      {
        icon: FileText,
        title: "Report Collection",
        text:
          "Completed reports can be organised for use during subsequent medical consultations.",
      },

      {
        icon: Stethoscope,
        title: "Clinical Review",
        text:
          "The treating clinician interprets test results in the context of the patient's overall medical condition.",
      },
    ],


    processTitle:
      "From Prescription to Clinical Review",

    process: [
      {
        title: "Share the Prescription",
        text:
          "Provide the investigations recommended by the doctor or specialist.",
      },

      {
        title: "Coordinate Testing",
        text:
          "The required laboratory or diagnostic service is identified according to availability.",
      },

      {
        title: "Complete the Investigation",
        text:
          "Attend the scheduled diagnostic service and follow any preparation instructions provided.",
      },

      {
        title: "Receive the Report",
        text:
          "Reports are made available according to the relevant laboratory or diagnostic process.",
      },

      {
        title: "Discuss With Your Doctor",
        text:
          "Results should be interpreted by the treating clinician together with symptoms and other medical information.",
      },
    ],


    benefitsTitle:
      "Diagnostic Support May Include",

    benefits: [
      "Routine and prescribed laboratory testing",
      "Pre-treatment investigations",
      "Follow-up testing during treatment",
      "Report coordination for specialist review",
      "Selected imaging or diagnostic coordination",
      "Testing required as part of treatment planning",
    ],


    note:
      "Tests should be selected and interpreted by qualified healthcare professionals. Not every patient requires every test, and preparation requirements can vary.",
  },


  /* =======================================================
     HOMECARE
  ======================================================= */

  {
    id: 4,

    name: "Homecare Services",

    slug: "homecare-services",

    icon: House,

    eyebrow: "Care at Home",

    shortDescription:
      "Coordinate suitable healthcare and recovery support for patients who need continued care at home.",

    heroDescription:
      "Home-based support can help selected patients continue recovery, rehabilitation and clinical care outside the hospital.",

    aboutTitle:
      "Continuity of Care in a Familiar Environment",

    about:
      "Some patients need ongoing support after hospital discharge or during recovery from illness, injury or treatment. Homecare can help coordinate appropriate nursing, rehabilitation and patient-support requirements based on the treating team's care plan and the services available.",

    introTitle:
      "What Can Homecare Help With?",

    introText:
      "The exact homecare plan depends on the patient's condition. The goal is to support continuity of care, help families follow medical instructions and coordinate qualified assistance where clinically appropriate.",


    features: [
      {
        icon: HeartPulse,
        title: "Nursing Support",
        text:
          "Selected nursing needs may include monitoring, dressing support and other clinician-directed care.",
      },

      {
        icon: Dumbbell,
        title: "Physiotherapy",
        text:
          "Rehabilitation support can help suitable patients work on mobility, strength and functional recovery.",
      },

      {
        icon: Pill,
        title: "Medication Support",
        text:
          "Patients and caregivers can receive support in following the medication plan provided by the treating clinician.",
      },

      {
        icon: Activity,
        title: "Health Monitoring",
        text:
          "Selected observations can be tracked according to the patient's care plan and clinical requirements.",
      },

      {
        icon: Users,
        title: "Caregiver Guidance",
        text:
          "Families can be supported in understanding appropriate day-to-day care instructions.",
      },

      {
        icon: Stethoscope,
        title: "Follow-Up Coordination",
        text:
          "Medical follow-up can be coordinated when the treating team needs to review recovery progress.",
      },
    ],


    careTitle:
      "Homecare Support Areas",

    careItems: [
      {
        icon: HeartPulse,
        title: "Skilled Nursing",
        text:
          "Appropriate nursing support based on the patient's clinical requirements.",
      },

      {
        icon: Dumbbell,
        title: "Physical Rehabilitation",
        text:
          "Selected physiotherapy support for mobility, strength and functional recovery.",
      },

      {
        icon: Activity,
        title: "Recovery Monitoring",
        text:
          "Support in following the monitoring plan advised by the treating healthcare team.",
      },

      {
        icon: FileText,
        title: "Care Instructions",
        text:
          "Helping patients and caregivers organise discharge instructions and follow-up requirements.",
      },

      {
        icon: Users,
        title: "Family Support",
        text:
          "Practical guidance for caregivers involved in the patient's recovery journey.",
      },

      {
        icon: CalendarCheck,
        title: "Medical Follow-Up",
        text:
          "Coordination of appropriate consultations when medical reassessment is required.",
      },
    ],


    highlightTitle:
      "Hospital Care Does Not Always End at Discharge",

    highlightText:
      "A structured transition to home can help patients and families understand the care plan, rehabilitation needs and follow-up requirements.",


    processTitle:
      "How Homecare Is Coordinated",

    process: [
      {
        title: "Understand the Patient's Needs",
        text:
          "Review the available medical recommendations, discharge advice and required support.",
      },

      {
        title: "Plan Appropriate Care",
        text:
          "Identify suitable nursing, rehabilitation or patient-support requirements.",
      },

      {
        title: "Coordinate Home Support",
        text:
          "Available healthcare support is coordinated according to the agreed care requirements.",
      },

      {
        title: "Follow the Care Plan",
        text:
          "The patient and caregivers follow instructions provided by the treating healthcare team.",
      },

      {
        title: "Review Progress",
        text:
          "Follow-up requirements can be reassessed as the patient's condition changes.",
      },
    ],


    benefitsTitle:
      "Who May Benefit From Homecare?",

    benefits: [
      "Patients recovering after hospital discharge",
      "Patients with reduced mobility",
      "Patients requiring selected nursing support",
      "Patients undergoing rehabilitation",
      "Older adults who need additional care support",
      "Families who need help coordinating continued care",
    ],


    note:
      "Homecare services depend on clinical suitability and service availability. Sudden or severe symptoms require appropriate emergency medical assessment.",
  },


  /* =======================================================
     POST-OPERATIVE CARE
  ======================================================= */

  {
    id: 5,

    name: "Post-Op Care",

    slug: "post-op-care",

    icon: Activity,

    eyebrow: "Healing Beyond Surgery",

    shortDescription:
      "Structured recovery support after surgery, from discharge planning and rehabilitation to follow-up care.",

    heroDescription:
      "Help patients transition from surgery to recovery with coordinated follow-up, rehabilitation and wellbeing support.",

    aboutTitle:
      "Recovery Continues After the Procedure",

    about:
      "The period after surgery can involve wound-care instructions, medications, mobility restrictions, rehabilitation, nutrition and follow-up appointments. Post-operative support helps patients and families organise these requirements around the surgeon's discharge plan and recognise when further medical review may be needed.",

    introTitle:
      "How Post-Operative Care Helps",

    introText:
      "Recovery needs differ depending on the procedure and the patient's overall health. A structured plan can make it easier to follow medical instructions, gradually restore mobility and coordinate follow-up with the treating team.",


    features: [
      {
        icon: ClipboardCheck,
        title: "Discharge Plan Support",
        text:
          "Organise the instructions, precautions and follow-up recommendations provided after surgery.",
      },

      {
        icon: HeartPulse,
        title: "Recovery Monitoring",
        text:
          "Observe recovery according to the care plan and communicate concerns to appropriate healthcare professionals.",
      },

      {
        icon: Pill,
        title: "Medication Guidance",
        text:
          "Help patients follow the medication schedule prescribed by their treating clinician.",
      },

      {
        icon: Dumbbell,
        title: "Rehabilitation",
        text:
          "Coordinate suitable physiotherapy and mobility support where recommended.",
      },

      {
        icon: Salad,
        title: "Nutrition Support",
        text:
          "Support practical nutrition planning around recovery where appropriate and clinically advised.",
      },

      {
        icon: CalendarCheck,
        title: "Follow-Up Visits",
        text:
          "Coordinate follow-up consultations and investigations advised by the treating team.",
      },
    ],


    careTitle:
      "Post-Operative Care & Wellness",

    careItems: [
      {
        icon: Activity,
        title: "Physiotherapy",
        text:
          "Structured rehabilitation designed around mobility, strength and functional recovery.",
      },

      {
        icon: Sparkles,
        title: "Gentle Movement & Wellness",
        text:
          "Appropriate guided movement and relaxation practices may complement recovery when medically suitable.",
      },

      {
        icon: HeartHandshake,
        title: "Emotional Wellbeing",
        text:
          "Recovery can be physically and emotionally demanding; supportive care can help patients manage the transition.",
      },

      {
        icon: Apple,
        title: "Nutrition",
        text:
          "Practical nutrition support may complement recovery according to individual needs and medical advice.",
      },
    ],


    highlightTitle:
      "From Procedure to Recovery",

    highlightText:
      "Post-operative care helps connect hospital discharge with rehabilitation, follow-up and day-to-day recovery support.",


    processTitle:
      "Your Post-Surgery Recovery Journey",

    process: [
      {
        title: "Review Discharge Instructions",
        text:
          "Understand the surgeon's medication, activity, wound-care and follow-up recommendations.",
      },

      {
        title: "Prepare the Recovery Plan",
        text:
          "Identify appropriate support for mobility, rehabilitation, nutrition and follow-up.",
      },

      {
        title: "Follow the Care Instructions",
        text:
          "Continue the prescribed recovery plan and observe precautions advised by the treating team.",
      },

      {
        title: "Rehabilitation & Mobility",
        text:
          "Gradually work toward appropriate functional recovery according to clinical guidance.",
      },

      {
        title: "Follow-Up & Reassessment",
        text:
          "Attend recommended follow-up consultations and report concerning symptoms promptly.",
      },
    ],


    benefitsTitle:
      "Post-Operative Support Can Help With",

    benefits: [
      "Understanding discharge instructions",
      "Organising follow-up appointments",
      "Medication schedule support",
      "Mobility and rehabilitation coordination",
      "Recovery-focused nutrition support",
      "Transition from hospital to home",
      "Monitoring recovery concerns",
      "Coordination with the treating team",
    ],


    note:
      "Post-operative instructions from the treating surgeon take priority. New or worsening symptoms should be discussed promptly with an appropriate healthcare professional.",
  },
];


/* =========================================================
   GET SERVICE
========================================================= */

export function getServiceBySlug(slug) {
  return services.find(
    (service) =>
      service.slug === slug
  );
}