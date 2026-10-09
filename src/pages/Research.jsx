import Breadcrumb from "../components/Breadcrumb";


export default function Research() {
  return (
    <main className="bg-white">

      {/* =========================================
          EXISTING COMMON BREADCRUMB
      ========================================== */}

      <Breadcrumb
        items={[
          {
            label: "Health Library",
            to: "/health-library",
          },
          {
            label: "Akeso Research",
          },
        ]}
        title="Akeso Research"
        description="Knowledge, research and healthcare information supporting better understanding of medical care."
      />


      {/* =========================================
          RESEARCH INTRODUCTION
      ========================================== */}

      <section
        className="
          py-14
          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1300px]
            items-center
            gap-9
            px-5

            sm:px-7

            lg:grid-cols-2
            lg:gap-14
            lg:px-10
          "
        >

          {/* IMAGE */}

          <div
            className="
              overflow-hidden
              rounded-[24px]
              bg-[#EEF6F5]
            "
          >
            <img
              src="/images/health-library/research.jpg"
              alt="Akeso Research"
              className="
                h-[300px]
                w-full
                object-cover

                sm:h-[380px]

                lg:h-[430px]
              "
            />
          </div>


          {/* CONTENT */}

          <div>
            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#C8942E]
              "
            >
              Research & Knowledge
            </span>

            <h2
              className="
                mt-3
                text-[30px]
                font-semibold
                leading-tight
                text-[#064B50]

                sm:text-[36px]
                lg:text-[40px]
              "
            >
              Advancing Healthcare
              Knowledge
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                leading-8
                text-[#292929]
              "
            >
              Akeso supports access to
              healthcare information that
              can help patients better
              understand medical care,
              treatment pathways and
              available healthcare
              technologies.
            </p>

            <p
              className="
                mt-4
                text-[15px]
                leading-8
                text-[#292a2a]
              "
            >
              Research and educational
              information published here
              should be based on approved
              institutional information
              and appropriate clinical or
              scientific sources.
            </p>

            <div
              className="
                mt-7
                rounded-[16px]
                border-l-4
                border-[#C8942E]
                bg-[#FAF8F2]
                px-5
                py-4
              "
            >
              <p
                className="
                  text-[14px]
                  leading-7
                  text-[#2a2b2b]
                "
              >
                Health information on this
                website is intended for
                general education and
                should not replace
                individual medical advice.
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}