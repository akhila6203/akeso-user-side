
const indiaCards = [
  {
    label: "WHY INDIA",
    title: "What Makes India a Destination for Medical Care?",
    paragraphs: [
      "India — where ancient healing heritage meets modern medical excellence. For centuries, India has been a land of healing, wellness and medical knowledge.",

      "Today, that heritage stands alongside advanced hospitals, experienced specialists, modern medical technology and internationally oriented healthcare.",

      "For international patients, India can offer access to quality medical care with a wide range of treatment options, often at a more accessible cost than many Western healthcare systems.",
    ],
  },
  {
    label: "WHY AKESO & INDIA",
    title: "Why Akeso — And Why India?",
    paragraphs: [
      "India offers a wide range of medical care and treatment options. At Akeso Global, we help make that journey clearer for international patients.",

      "From medical-record review and hospital coordination to treatment planning, travel assistance and post-treatment support, we connect patients with a suitable care pathway in India.",

      "Our approach focuses on making international healthcare more accessible, coordinated and patient-focused.",
    ],
  },
  {
    label: "THE AKESO JOURNEY",
    title: "India for Healthcare. Akeso for the Journey. Why?",
    paragraphs: [
      "India is not just a destination for treatment. It can be a destination for hope, healing and a new beginning.",

      "At Akeso Global, we help coordinate the healthcare journey, from the first medical enquiry and treatment planning to travel arrangements and follow-up support.",

      "AKESO GLOBAL — Healthcare. Coordinated with Care.",

      "Considering treatment in India? Send us your medical reports to start a conversation.",
    ],
  },
];

/* =========================================
   REUSABLE CONTENT CARD
========================================= */

function IndiaCard({ label, title, paragraphs }) {
  return (
    <article
      className="
        group
        flex h-full flex-col
        overflow-hidden
        rounded-[18px]
        border border-[#DFE9E8]
        bg-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#C8942E]
        hover:shadow-[0_14px_35px_rgba(6,75,80,0.08)]
      "
    >
      {/* <div className="h-[3px] bg-[#064B50] transition-colors group-hover:bg-[#C8942E]" /> */}

      <div className="flex flex-1 flex-col px-6 py-7 sm:px-7">

        <p className="text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-[#B78124]">
          {label}
        </p>

        <h3 className="mt-4 text-center text-[21px] font-semibold leading-[1.4] text-[#064B50] lg:text-[22px]">
          {title}
        </h3>

        <div className="mx-auto mt-5 h-[2px] w-12 bg-[#C8942E]" />

        <div className="mt-6 space-y-4 text-[16px] leading-[1.8] text-[#344849]">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

      </div>
    </article>
  );
}

/* =========================================
   THREE QUESTION SECTION
========================================= */

export default function WhyAkesoIndia() {
  return (
    <section
      id="why-india"
      className="bg-[#F8FAF9] py-12 md:py-16"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-7 lg:px-10">

        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {indiaCards.map((card) => (
            <IndiaCard
              key={card.title}
              {...card}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
