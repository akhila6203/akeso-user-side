import { useSiteSettings } from "../context/SiteSettingsContext";
import PolicyLayout from "../components/policies/PolicyLayout";

export default function TermsConditions() {
  const { settings } = useSiteSettings();

  return (
    <PolicyLayout
      title="Terms & Conditions"
      content={settings.terms_conditions}
      fallbackText="Terms and conditions have not been published yet."
      email={settings.email}
      address={settings.address}
      // updatedAt={settings.policy_updated_at}
      updatedAt={settings.updated_at}
    />
  );
}



// import PolicyLayout from "../components/policies/PolicyLayout";

// const policy = {
//   "intro": "Welcome to Akeso Global Medical Services Private Limited (“Akeso,” “we,” “our,” or “us”). By accessing our website or using our services, you agree to the following Terms and Conditions.",
//   "sections": [
//     {
//       "title": "Our Services",
//       "paragraphs": [
//         "Akeso facilitates access to healthcare services in India, including medical second opinions, hospital and specialist consultations, diagnostic services, teleconsultations, treatment coordination, and post-operative care support. The scope of services will depend on the patient's individual requirements and the arrangements agreed upon with Akeso and the relevant healthcare providers."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Medical Services and Professional Responsibility",
//       "paragraphs": [
//         "Medical diagnosis, treatment decisions, surgery, prescriptions, and clinical care are provided by qualified healthcare professionals and the relevant healthcare institutions. Akeso facilitates coordination and does not independently replace the judgment of treating doctors. Treatment outcomes, recovery periods, and medical results may vary from patient to patient. No particular medical outcome is guaranteed."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Medicolegal Matters and Jurisdiction",
//       "paragraphs": [
//         "Akeso primarily coordinates treatment and related healthcare services through its network and operational arrangements in Hyderabad, Telangana, India. Where a dispute or claim constitutes a medicolegal matter involving Akeso, and to the extent legally permissible, the parties agree that Hyderabad, Telangana, India, shall be the preferred venue for resolving such matters. Any applicable proceedings shall be subject to the jurisdiction of the competent courts or authorities in accordance with Indian law. Patients may be required to attend in person in Hyderabad when reasonably necessary for an investigation, medical assessment, documentation, or legal proceeding, subject to applicable law and the requirements of the relevant authority. Nothing in this clause prevents a patient from seeking emergency medical attention locally or limits any mandatory legal rights, statutory remedies, or jurisdiction that cannot lawfully be excluded."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Fees and Payments",
//       "paragraphs": [
//         "All payments for medical treatment, hospital services, professional fees, diagnostic investigations, accommodation, travel, and other services coordinated through Akeso Global Medical Services Private Limited must be made exclusively through Akeso's authorised payment channels. Patients are requested not to make any direct payments to hospitals, doctors, staff, representatives, or other service providers involved in the coordinated services unless expressly authorised in writing by Akeso. No tips, gifts, unofficial payments, or additional charges outside the agreed quotation are permitted. The total estimated cost and applicable inclusions will be communicated to the patient before the services are confirmed. Any changes to the treatment plan or additional services requiring extra payment must be communicated to and approved by the patient through Akeso before the charges are incurred, except where urgent medical care is necessary. Akeso is committed to transparent billing, clear communication, and a patient-focused payment process, with no undisclosed fees or unauthorised collections."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Appointments and Cancellations",
//       "paragraphs": [
//         "Appointments and services are subject to availability and confirmation by the relevant provider. Patients should inform Akeso as early as possible about cancellations, rescheduling, or changes in their medical or travel plans. Refunds, cancellation charges, and rescheduling conditions will be governed by the applicable service agreement and the relevant provider's policy, as disclosed to the patient."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Patient Responsibilities",
//       "paragraphs": [
//         "Patients must provide accurate personal details, medical history, prescriptions, investigation reports, and other relevant information. Patients should follow the treating healthcare professional's instructions and promptly disclose any significant change in their condition. Akeso shall not be responsible for decisions based on incomplete, inaccurate, or withheld information, to the extent permitted by law."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Third-Party Providers",
//       "paragraphs": [
//         "Hospitals, doctors, laboratories, diagnostic centres, accommodation providers, and other service providers may operate independently of Akeso. Their services are subject to their own professional obligations, terms, and applicable laws."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Website Information",
//       "paragraphs": [
//         "Website content is provided for general information and does not constitute a substitute for individual medical advice, diagnosis, or treatment. Patients should consult an appropriately qualified healthcare professional before making medical decisions."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Limitation of Liability",
//       "paragraphs": [
//         "To the extent permitted by applicable law, Akeso shall not be liable for circumstances beyond its reasonable control or for independent clinical decisions made by third-party healthcare professionals. Nothing in these Terms excludes liability that cannot lawfully be excluded, including liability arising from Akeso's own negligence or other legally actionable conduct."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Privacy and Confidentiality",
//       "paragraphs": [
//         "Personal and medical information will be handled in accordance with our Privacy Policy and applicable data protection and healthcare laws."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Changes to These Terms",
//       "paragraphs": [
//         "Akeso may update these Terms from time to time. The latest version will be published on our website with the updated date."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Contact Information",
//       "paragraphs": [
//         "Akeso Global Medical Services Private Limited Email: akesoglobalhealth@gmail.com Location: Hyderabad, Telangana, India"
//       ],
//       "bullets": []
//     }
//   ]
// };

// export default function TermsConditions() {
//   return (
//     <PolicyLayout
//       title="Terms & Conditions"
//       subtitle="Please review the terms governing access to our website and coordinated services."
//       intro={policy.intro}
//       sections={policy.sections}
//     />
//   );
// }
