import {
  useMemo,
  useState,
} from "react";

import {
  Search,
  Play,
} from "lucide-react";

import Breadcrumb from "../Breadcrumb";
import KnowledgeCard from "./KnowledgeCard";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

// export default function KnowledgeListingPage({
//   title,
//   description,
//   items,
//   type,
// }) {
export default function KnowledgeListingPage({
  title,
  description,
  items = [],
  type,
  loading = false,
  error = "",
  onRetry = () => {},
}) {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(6);
  const [selectedVideo, setSelectedVideo] =
    useState(null);

  const filtered = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase();

    if (!query) return items;

    return items.filter((item) =>
      `${item.title} ${item.category}`
        .toLowerCase()
        .includes(query)
    );
  }, [items, search]);

  const visibleItems =
    filtered.slice(0, visible);

  const handleSearch = (value) => {
    setSearch(value);
    setVisible(6);
  };

  return (
    <>
      <Breadcrumb
        title={title}
        description={description}
        items={[
          {
            label: "Health Library",
            to: "/health-library",
          },
        ]}
      />

      <section className="
        bg-[#F7FAF9]
        py-12
        md:py-16
      ">
        <div className="
          mx-auto
          max-w-[1450px]
          px-4
          sm:px-6
          lg:px-8
        ">
          <div className="
            mb-9
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-end
            md:justify-between
          ">
            <div>
              <p className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#C8942E]
              ">
                Knowledge Center
              </p>

              <h2 className="
                mt-2
                text-3xl
                font-bold
                text-[#263F41]
              ">
                All {title}
              </h2>
            </div>

            <div className="
              relative
              w-full
              md:w-[360px]
            ">
              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#393b3b]
                "
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  handleSearch(
                    e.target.value
                  )
                }
                placeholder={`Search ${title.toLowerCase()}...`}
                className="
                  h-12
                  w-full
                  rounded-full
                  border
                  border-[#DCECEB]
                  bg-white
                  pl-11
                  pr-4
                  outline-none
                  transition
                  focus:border-[#064B50]
                  focus:ring-2
                  focus:ring-[#064B50]/10
                "
              />
            </div>
          </div>

          {loading ? (
            <div className="rounded-2xl bg-white p-10 text-center text-[#3a3c3c]">Loading {title.toLowerCase()}...</div>
          ) : error ? (
            <div className="rounded-2xl bg-white p-10 text-center text-[#3a3c3c]">
              <p>{error}</p>
              <button type="button" onClick={onRetry} className="mt-4 rounded-full bg-[#064B50] px-6 py-2 text-white">Try Again</button>
            </div>
          ) : visibleItems.length ? (
            <div className="
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              xl:grid-cols-3
            ">
              {visibleItems.map((item) =>
                type === "videos" ? (
                  <VideoCard
                    key={item.id}
                    item={item}
                    onPlay={
                      setSelectedVideo
                    }
                  />
                ) : (
                  <KnowledgeCard
                    key={item.id}
                    item={item}
                    type={
                      type === "blogs"
                        ? "blog"
                        : "case-study"
                    }
                  />
                )
              )}
            </div>
          ) : (
            <div className="
              rounded-2xl
              bg-white
              p-10
              text-center
              text-[#3a3c3c]
            ">
              No matching results found.
            </div>
          )}

          {visible < filtered.length && (
            <div className="
              mt-10
              text-center
            ">
              <button
                type="button"
                onClick={() =>
                  setVisible(
                    (current) =>
                      current + 6
                  )
                }
                className="
                  rounded-full
                  bg-[#064B50]
                  px-8
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#043F43]
                "
              >
                Load More
              </button>
            </div>
          )}
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





// import {
//   useMemo,
//   useState,
// } from "react";

// import {
//   Search,
//   Play,
// } from "lucide-react";

// import Breadcrumb from "../Breadcrumb";
// import KnowledgeCard from "./KnowledgeCard";
// import VideoCard from "./VideoCard";
// import VideoModal from "./VideoModal";

// export default function KnowledgeListingPage({
//   title,
//   description,
//   items,
//   type,
// }) {
//   const [search, setSearch] = useState("");
//   const [visible, setVisible] = useState(6);
//   const [selectedVideo, setSelectedVideo] =
//     useState(null);

//   const filtered = useMemo(() => {
//     const query = search
//       .trim()
//       .toLowerCase();

//     if (!query) return items;

//     return items.filter((item) =>
//       `${item.title} ${item.category}`
//         .toLowerCase()
//         .includes(query)
//     );
//   }, [items, search]);

//   const visibleItems =
//     filtered.slice(0, visible);

//   const handleSearch = (value) => {
//     setSearch(value);
//     setVisible(6);
//   };

//   return (
//     <>
//       <Breadcrumb
//         title={title}
//         description={description}
//         items={[
//           {
//             label: "Health Library",
//             to: "/health-library",
//           },
//         ]}
//       />

//       <section className="
//         bg-[#F7FAF9]
//         py-12
//         md:py-16
//       ">
//         <div className="
//           mx-auto
//           max-w-[1450px]
//           px-4
//           sm:px-6
//           lg:px-8
//         ">
//           <div className="
//             mb-9
//             flex
//             flex-col
//             gap-5
//             md:flex-row
//             md:items-end
//             md:justify-between
//           ">
//             <div>
//               <p className="
//                 text-xs
//                 font-bold
//                 uppercase
//                 tracking-[0.15em]
//                 text-[#C8942E]
//               ">
//                 Knowledge Center
//               </p>

//               <h2 className="
//                 mt-2
//                 text-3xl
//                 font-bold
//                 text-[#263F41]
//               ">
//                 All {title}
//               </h2>
//             </div>

//             <div className="
//               relative
//               w-full
//               md:w-[360px]
//             ">
//               <Search
//                 size={18}
//                 className="
//                   absolute
//                   left-4
//                   top-1/2
//                   -translate-y-1/2
//                   text-[#393b3b]
//                 "
//               />

//               <input
//                 type="text"
//                 value={search}
//                 onChange={(e) =>
//                   handleSearch(
//                     e.target.value
//                   )
//                 }
//                 placeholder={`Search ${title.toLowerCase()}...`}
//                 className="
//                   h-12
//                   w-full
//                   rounded-full
//                   border
//                   border-[#DCECEB]
//                   bg-white
//                   pl-11
//                   pr-4
//                   outline-none
//                   transition
//                   focus:border-[#064B50]
//                   focus:ring-2
//                   focus:ring-[#064B50]/10
//                 "
//               />
//             </div>
//           </div>

//           {visibleItems.length ? (
//             <div className="
//               grid
//               grid-cols-1
//               gap-6
//               md:grid-cols-2
//               xl:grid-cols-3
//             ">
//               {visibleItems.map((item) =>
//                 type === "videos" ? (
//                   <VideoCard
//                     key={item.id}
//                     item={item}
//                     onPlay={
//                       setSelectedVideo
//                     }
//                   />
//                 ) : (
//                   <KnowledgeCard
//                     key={item.id}
//                     item={item}
//                     type={
//                       type === "blogs"
//                         ? "blog"
//                         : "case-study"
//                     }
//                   />
//                 )
//               )}
//             </div>
//           ) : (
//             <div className="
//               rounded-2xl
//               bg-white
//               p-10
//               text-center
//               text-[#3a3c3c]
//             ">
//               No matching results found.
//             </div>
//           )}

//           {visible < filtered.length && (
//             <div className="
//               mt-10
//               text-center
//             ">
//               <button
//                 type="button"
//                 onClick={() =>
//                   setVisible(
//                     (current) =>
//                       current + 6
//                   )
//                 }
//                 className="
//                   rounded-full
//                   bg-[#064B50]
//                   px-8
//                   py-3
//                   text-sm
//                   font-semibold
//                   text-white
//                   transition
//                   hover:bg-[#043F43]
//                 "
//               >
//                 Load More
//               </button>
//             </div>
//           )}
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