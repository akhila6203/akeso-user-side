import { useSiteSettings } from "../context/SiteSettingsContext";
import PolicyLayout from "../components/policies/PolicyLayout";

export default function PrivacyPolicy() {
  const { settings } = useSiteSettings();

  return (
    <PolicyLayout
      title="Privacy Policy"
      content={settings.privacy_policy}
      fallbackText="Privacy policy has not been published yet."
      email={settings.email}
      address={settings.address}
      // updatedAt={settings.policy_updated_at}
      updatedAt={settings.updated_at}
    />
  );
}


// import PolicyLayout from "../components/policies/PolicyLayout";

// const policy = {
//   "intro": "Akeso Global Medical Services Private Limited (“Akeso”) respects your privacy and is committed to protecting your personal and medical information.",
//   "sections": [
//     {
//       "title": "Information We Collect",
//       "paragraphs": [
//         "We may collect the following information when you contact us or use our services:"
//       ],
//       "bullets": [
//         "Name, age, contact details, nationality, and country of residence.",
//         "Medical history, prescriptions, laboratory reports, imaging, and other health-related information voluntarily provided for care coordination.",
//         "Travel, appointment, billing, and payment-related information necessary to arrange services.",
//         "Website usage and technical information, where applicable."
//       ]
//     },
//     {
//       "title": "How We Use Your Information",
//       "paragraphs": [
//         "Your information may be used to:"
//       ],
//       "bullets": [
//         "Respond to enquiries and coordinate medical second opinions.",
//         "Facilitate consultations, diagnostic investigations, treatment planning, and hospital appointments.",
//         "Share relevant medical records with selected doctors, hospitals, laboratories, or other providers involved in your requested care.",
//         "Coordinate post-operative care and follow-up services.",
//         "Process payments, maintain records, meet legal obligations, and improve our services."
//       ]
//     },
//     {
//       "title": "Sharing of Information",
//       "paragraphs": [
//         "We share personal or medical information only as reasonably necessary for the purposes described in this Policy, with appropriate service providers, authorised personnel, or other recipients where permitted or required by law. We do not offer patients' medical records for sale to advertisers."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Protection of Information",
//       "paragraphs": [
//         "Akeso takes reasonable measures to protect personal information against unauthorised access, disclosure, alteration, or loss. However, no electronic transmission or storage system can be guaranteed to be completely secure."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "International Patients and Data Transfers",
//       "paragraphs": [
//         "Where a patient's information needs to be shared across national borders to coordinate treatment, we will handle such transfers in accordance with applicable data protection laws and relevant requirements."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Data Retention",
//       "paragraphs": [
//         "Information will be retained for as long as reasonably necessary to provide the requested services, fulfil legitimate operational purposes, and comply with applicable legal and regulatory requirements."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Your Privacy Rights",
//       "paragraphs": [
//         "Subject to applicable law, you may request access to, correction of, or deletion of your personal information, or raise concerns about how it is handled. Some information may need to be retained where legally required."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Cookies and Website Technologies",
//       "paragraphs": [
//         "Our website may use cookies or similar technologies to maintain functionality, understand website usage, and improve the user experience. Where required, consent will be obtained for applicable technologies."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Children's Information",
//       "paragraphs": [
//         "Where services involve minors, information should be provided by a parent, legal guardian, or other authorised representative, as applicable under law."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Updates to This Policy",
//       "paragraphs": [
//         "This Privacy Policy may be updated periodically. The latest version will be available on our website."
//       ],
//       "bullets": []
//     },
//     {
//       "title": "Contact Us",
//       "paragraphs": [
//         "Akeso Global Medical Services Private Limited Email: akesoglobalhealth@gmail.com Hyderabad, Telangana, India"
//       ],
//       "bullets": []
//     }
//   ]
// };

// export default function PrivacyPolicy() {
//   return (
//     <PolicyLayout
//       title="Privacy Policy"
//       subtitle="Learn how we collect, use, share, and protect personal and medical information."
//       intro={policy.intro}
//       sections={policy.sections}
//     />
//   );
// }
