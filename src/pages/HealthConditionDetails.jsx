import {
  useEffect,
  useState,
} from "react";

import {
  Navigate,
  useParams,
} from "react-router-dom";

import {
  Activity,
  AlertCircle,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import Breadcrumb from "../components/Breadcrumb";

import {
  getHealthCondition,
} from "../data/healthLibraryData";


const tabs = [
  {
    id: "symptoms",
    label: "Symptoms",
    icon: Activity,
  },
  {
    id: "causes",
    label: "Causes",
    icon: HeartPulse,
  },
  {
    id: "risks",
    label: "Risks",
    icon: AlertCircle,
  },
  {
    id: "prevention",
    label: "Prevention",
    icon: ShieldCheck,
  },
];


export default function HealthConditionDetails() {
  const { slug } = useParams();

  const disease =
    getHealthCondition(slug);

  const [
    activeTab,
    setActiveTab,
  ] = useState("symptoms");


  useEffect(() => {
    setActiveTab("symptoms");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [slug]);


  if (!disease) {
    return (
      <Navigate
        to="/health-library"
        replace
      />
    );
  }


  const activeSection =
    disease.sections?.[
      activeTab
    ];


  if (!activeSection) {
    return null;
  }


  const imageFirst =
    activeTab === "causes" ||
    activeTab === "prevention";


  return (
    <main className="bg-white">

      {/* =========================================
          BREADCRUMB
      ========================================== */}

      <Breadcrumb
        items={[
          {
            label:
              "Health Library",
            to: "/health-library",
          },
          {
            label:
              disease.title,
          },
        ]}
        title={disease.title}
        description={`Explore general information about ${disease.title}, including symptoms, possible causes, risk factors and prevention.`}
      />


      {/* =========================================
          ABOUT CONDITION
      ========================================== */}

      <section
        className="
          bg-white
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
              About the Condition
            </span>

            <h2
              className="
                mt-3
                text-[29px]
                font-semibold
                leading-tight
                text-[#064B50]
                sm:text-[35px]
                lg:text-[39px]
              "
            >
              What is{" "}
              {disease.title}?
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                leading-8
                text-[#2a2a2a]
              "
            >
              {disease.about}
            </p>

            <div
              className="
                mt-6
                rounded-[14px]
                border-l-4
                border-[#C8942E]
                bg-[#FAF8F2]
                px-5
                py-4
              "
            >
              <p
                className="
                  text-[15px]
                  leading-6
                  text-[#323232]
                "
              >
                This information is for
                general education and
                does not replace
                individual medical
                advice, diagnosis or
                treatment.
              </p>
            </div>
          </div>


          {/* IMAGE */}

          <ConditionBoxImage
            image={disease.image}
            title={disease.title}
          />
        </div>
      </section>


      {/* =========================================
          CONDITION INFORMATION
      ========================================== */}

      <section
        className="
          border-t
          border-[#EDF2F1]
          bg-white
          py-14
          sm:py-16
          lg:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1300px]
            px-5
            sm:px-7
            lg:px-10
          "
        >

          {/* HEADING */}

          <div className="text-center">
            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#C8942E]
              "
            >
              Condition Information
            </span>

            <h2
              className="
                mt-3
                text-[29px]
                font-semibold
                text-[#064B50]
                sm:text-[35px]
              "
            >
              {disease.title}
            </h2>
          </div>


          {/* =====================================
              BUTTON TABS
          ====================================== */}

          <div
            className="
              mx-auto
              mt-9
              grid
              max-w-[850px]
              grid-cols-2
              gap-3
              md:grid-cols-4
            "
          >
            {tabs.map((tab) => {
              const Icon =
                tab.icon;

              const selected =
                activeTab ===
                tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveTab(
                      tab.id
                    )
                  }
                  className={`
                    flex
                    min-h-[54px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[12px]
                    border
                    px-4
                    py-3
                    text-[14px]
                    font-semibold
                    transition
                    duration-300

                    ${
                      selected
                        ? "border-[#064B50] bg-[#064B50] text-white shadow-[0_8px_22px_rgba(6,75,80,0.16)]"
                        : "border-[#DCECEB] bg-white text-[#52696B] hover:border-[#C8942E] hover:text-[#064B50]"
                    }
                  `}
                >
                  <Icon
                    size={18}
                  />

                  {tab.label}
                </button>
              );
            })}
          </div>


          {/* =====================================
              TAB CONTENT
          ====================================== */}

          <div
            className="
              mt-12
              grid
              items-center
              gap-9
              lg:grid-cols-2
              lg:gap-14
            "
          >

            {/* CAUSES + PREVENTION IMAGE LEFT */}

            {imageFirst && (
              <ConditionBoxImage
                image={
                  activeSection.image
                }
                title={
                  activeSection.title
                }
              />
            )}


            {/* CONTENT */}

            <div>
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#C8942E]
                "
              >
                {
                  activeSection.title
                }
              </span>

              <h3
                className="
                  mt-3
                  text-[27px]
                  font-semibold
                  leading-tight
                  text-[#064B50]
                  sm:text-[31px]
                "
              >
                {
                  activeSection.title
                }{" "}
                of {disease.title}
              </h3>

              <p
                className="
                  mt-5
                  text-[16px]
                  leading-8
                  text-[#2a2a2a]
                "
              >
                {
                  activeSection.content
                }
              </p>


              {activeSection.points
                ?.length > 0 && (
                <ul
                  className="
                    mt-6
                    space-y-3
                  "
                >
                  {activeSection.points.map(
                    (
                      point,
                      index
                    ) => (
                      <li
                        key={`${point}-${index}`}
                        className="
                          flex
                          gap-3
                          text-[15px]
                          leading-7
                          text-[#262727]
                        "
                      >
                        <span
                          className="
                            mt-[10px]
                            h-2
                            w-2
                            shrink-0
                            rounded-full
                            bg-[#C8942E]
                          "
                        />

                        <span>
                          {point}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>


            {/* SYMPTOMS + RISKS IMAGE RIGHT */}

            {!imageFirst && (
              <ConditionBoxImage
                image={
                  activeSection.image
                }
                title={
                  activeSection.title
                }
              />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}


function ConditionBoxImage({
  image,
  title,
}) {
  return (
    <div
      className="
        overflow-hidden
        rounded-[22px]
        border
        border-[#DCECEB]
        bg-[#EEF6F5]
        shadow-[0_12px_35px_rgba(6,75,80,0.07)]
      "
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="
            h-[280px]
            w-full
            object-cover
            sm:h-[360px]
            lg:h-[400px]
          "
        />
      ) : (
        <div
          className="
            flex
            h-[280px]
            items-center
            justify-center
            px-5
            text-center
            text-[#2c2d2d]
            sm:h-[360px]
            lg:h-[400px]
          "
        >
          <span>
            {title}
          </span>
        </div>
      )}
    </div>
  );
}