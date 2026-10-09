// import { useState } from "react";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  Video,
  ClipboardPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

import KnowledgeSlider from "./KnowledgeSlider";
import VideoModal from "./VideoModal";

// import {
//   blogData,
//   videoData,
//   caseStudyData,
// } from "../../data/knowledgeCenterData";
import useOurStories from "../../hooks/useOurStories";
import { getEditorialList } from "../../api/editorialApi";

const tabs = [
  {
    key: "blogs",
    label: "Blogs",
    icon: BookOpen,
  },
  {
    key: "videos",
    label: "Videos",
    icon: Video,
  },
  {
    key: "case-studies",
    label: "Case Studies",
    icon: ClipboardPlus,
  },
];

export default function KnowledgeCenterSection() {
  const {
  stories: videoData = [],
  loading: videosLoading,
  error: videosError,
} = useOurStories();
  const [activeTab, setActiveTab] =
    useState("blogs");

  const [selectedVideo, setSelectedVideo] =
    useState(null);

  // const getItems = () => {
  //   if (activeTab === "videos") {
  //     return videoData;
  //   }

  //   if (activeTab === "case-studies") {
  //     return caseStudyData;
  //   }

  //   return blogData;
  // };

  const [blogData, setBlogData] = useState([]);
const [caseStudyData, setCaseStudyData] = useState([]);

const [blogsLoading, setBlogsLoading] = useState(true);
const [casesLoading, setCasesLoading] = useState(true);

const [blogsError, setBlogsError] = useState(null);
const [casesError, setCasesError] = useState(null);

useEffect(() => {
  let active = true;

  const loadBlogs = async () => {
    try {
      const data = await getEditorialList("blogs");

      if (active) {
        setBlogData(data.slice(0, 8));
      }
    } catch (error) {
      if (active) {
        setBlogsError(error);
      }
    } finally {
      if (active) {
        setBlogsLoading(false);
      }
    }
  };

  const loadCases = async () => {
    try {
      const data = await getEditorialList("cases");

      if (active) {
        setCaseStudyData(data.slice(0, 8));
      }
    } catch (error) {
      if (active) {
        setCasesError(error);
      }
    } finally {
      if (active) {
        setCasesLoading(false);
      }
    }
  };

  loadBlogs();
  loadCases();

  return () => {
    active = false;
  };
}, []);



  const getItems = () => {
    if (activeTab === "videos") {
      return videoData;
    }

    if (activeTab === "case-studies") {
      return caseStudyData;
    }

    return blogData;
  };

  const viewAllPath =
    activeTab === "blogs"
      ? "/health-library/blogs"
      : activeTab === "videos"
      ? "/health-library/videos"
      : "/health-library/case-studies";

      const isLoading =
  activeTab === "blogs"
    ? blogsLoading
    : activeTab === "videos"
    ? videosLoading
    : casesLoading;

const currentError =
  activeTab === "blogs"
    ? blogsError
    : activeTab === "videos"
    ? videosError
    : casesError;

  return (
    <>
      <section className="
        bg-[#FAF8F2]
        py-14
        md:py-16
        lg:py-20
      ">
        <div className="
          mx-auto
          max-w-[1450px]
          px-4
          sm:px-6
          lg:px-8
        ">
          <div className="text-center">
            <span className="
              text-[13px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#C8942E]
            ">
              Learn • Understand • Decide
            </span>

            <h2 className="
              mt-2
              text-[28px]
              md:text-[36px]
              lg:text-[42px]
              font-bold
              text-[#263F41]
            ">
              Knowledge Center
            </h2>

            <p className="
              mx-auto
              mt-3
              max-w-[720px]
              text-[15px]
              md:text-[16px]
              leading-7
              text-[#393a3a]
            ">
              Explore educational articles,
              healthcare videos and selected
              case-study resources.
            </p>
          </div>

          {/* TABS */}
          <div className="
            mt-7
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          ">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active =
                activeTab === tab.key;

              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab.key)
                  }
                  className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    transition
                    ${
                      active
                        ? `
                          border-[#064B50]
                          bg-[#064B50]
                          text-white
                          shadow-md
                        `
                        : `
                          border-[#BFD4D2]
                          bg-white
                          text-[#263F41]
                          hover:border-[#C8942E]
                          hover:text-[#064B50]
                        `
                    }
                  `}
                >
                  <Icon size={16} />

                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* SLIDER */}
          {/* <div className="mt-9 md:mt-11">
            <KnowledgeSlider
              items={getItems()}
              type={activeTab}
              onPlay={setSelectedVideo}
            />
          </div> */}
          {/* SLIDER */}
{/* SLIDER */}
<div className="mt-9 md:mt-11">
  {isLoading ? (
    <p className="py-10 text-center text-[#263F41]">
      Loading content...
    </p>
  ) : currentError ? (
    <p className="py-10 text-center text-red-600">
      Unable to load content. Please try again.
    </p>
  ) : getItems().length === 0 ? (
    <p className="py-10 text-center text-[#263F41]">
      No content available.
    </p>
  ) : (
    <KnowledgeSlider
      items={getItems()}
      type={activeTab}
      onPlay={setSelectedVideo}
    />
  )}
</div>

          {/* VIEW ALL */}
          <div className="
            mt-9
            flex
            justify-center
          ">
            <Link
              to={viewAllPath}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#064B50]
                px-7
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-[#043F43]
              "
            >
              View All{" "}
              {activeTab === "blogs"
                ? "Blogs"
                : activeTab === "videos"
                ? "Videos"
                : "Case Studies"}

              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <VideoModal
        video={selectedVideo}
        onClose={() =>
          setSelectedVideo(null)
        }
      />
    </>
  );
}



















// import { useState } from "react";
// import {
//   ArrowRight,
//   BookOpen,
//   Video,
//   ClipboardPlus,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// import KnowledgeSlider from "./KnowledgeSlider";
// import VideoModal from "./VideoModal";

// import {
//   blogData,
//   videoData,
//   caseStudyData,
// } from "../../data/knowledgeCenterData";

// const tabs = [
//   {
//     key: "blogs",
//     label: "Blogs",
//     icon: BookOpen,
//   },
//   {
//     key: "videos",
//     label: "Videos",
//     icon: Video,
//   },
//   {
//     key: "case-studies",
//     label: "Case Studies",
//     icon: ClipboardPlus,
//   },
// ];

// export default function KnowledgeCenterSection() {
//   const [activeTab, setActiveTab] =
//     useState("blogs");

//   const [selectedVideo, setSelectedVideo] =
//     useState(null);

//   const getItems = () => {
//     if (activeTab === "videos") {
//       return videoData;
//     }

//     if (activeTab === "case-studies") {
//       return caseStudyData;
//     }

//     return blogData;
//   };

//   const viewAllPath =
//     activeTab === "blogs"
//       ? "/health-library/blogs"
//       : activeTab === "videos"
//       ? "/health-library/videos"
//       : "/health-library/case-studies";

//   return (
//     <>
//       <section className="
//         bg-[#FAF8F2]
//         py-14
//         md:py-16
//         lg:py-20
//       ">
//         <div className="
//           mx-auto
//           max-w-[1450px]
//           px-4
//           sm:px-6
//           lg:px-8
//         ">
//           <div className="text-center">
//             <span className="
//               text-[13px]
//               font-bold
//               uppercase
//               tracking-[0.16em]
//               text-[#C8942E]
//             ">
//               Learn • Understand • Decide
//             </span>

//             <h2 className="
//               mt-2
//               text-[28px]
//               md:text-[36px]
//               lg:text-[42px]
//               font-bold
//               text-[#263F41]
//             ">
//               Knowledge Center
//             </h2>

//             <p className="
//               mx-auto
//               mt-3
//               max-w-[720px]
//               text-[15px]
//               md:text-[16px]
//               leading-7
//               text-[#393a3a]
//             ">
//               Explore educational articles,
//               healthcare videos and selected
//               case-study resources.
//             </p>
//           </div>

//           {/* TABS */}
//           <div className="
//             mt-7
//             flex
//             flex-wrap
//             items-center
//             justify-center
//             gap-3
//           ">
//             {tabs.map((tab) => {
//               const Icon = tab.icon;
//               const active =
//                 activeTab === tab.key;

//               return (
//                 <button
//                   key={tab.key}
//                   type="button"
//                   onClick={() =>
//                     setActiveTab(tab.key)
//                   }
//                   className={`
//                     inline-flex
//                     items-center
//                     gap-2
//                     rounded-full
//                     border
//                     px-5
//                     py-2.5
//                     text-sm
//                     font-semibold
//                     transition
//                     ${
//                       active
//                         ? `
//                           border-[#064B50]
//                           bg-[#064B50]
//                           text-white
//                           shadow-md
//                         `
//                         : `
//                           border-[#BFD4D2]
//                           bg-white
//                           text-[#263F41]
//                           hover:border-[#C8942E]
//                           hover:text-[#064B50]
//                         `
//                     }
//                   `}
//                 >
//                   <Icon size={16} />

//                   {tab.label}
//                 </button>
//               );
//             })}
//           </div>

//           {/* SLIDER */}
//           <div className="mt-9 md:mt-11">
//             <KnowledgeSlider
//               items={getItems()}
//               type={activeTab}
//               onPlay={setSelectedVideo}
//             />
//           </div>

//           {/* VIEW ALL */}
//           <div className="
//             mt-9
//             flex
//             justify-center
//           ">
//             <Link
//               to={viewAllPath}
//               className="
//                 inline-flex
//                 items-center
//                 gap-2
//                 rounded-full
//                 bg-[#064B50]
//                 px-7
//                 py-3
//                 text-sm
//                 font-semibold
//                 text-white
//                 shadow-md
//                 transition
//                 hover:bg-[#043F43]
//               "
//             >
//               View All{" "}
//               {activeTab === "blogs"
//                 ? "Blogs"
//                 : activeTab === "videos"
//                 ? "Videos"
//                 : "Case Studies"}

//               <ArrowRight size={17} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       <VideoModal
//         video={selectedVideo}
//         onClose={() =>
//           setSelectedVideo(null)
//         }
//       />
//     </>
//   );
// }