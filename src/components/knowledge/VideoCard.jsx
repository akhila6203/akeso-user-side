
import { Play } from "lucide-react";
import SafeImage from "../SafeImage";

export default function VideoCard({
  item,
  onPlay,
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      className="
        group
        w-full
        overflow-hidden
        rounded-[22px]
        border border-[#DCECEB]
        bg-white
        text-left
        shadow-[0_10px_35px_rgba(6,75,80,0.08)]
        transition
        duration-300
        hover:-translate-y-1
      "
    >
      {/* VIDEO THUMBNAIL */}

      <div className="relative overflow-hidden">
        <SafeImage
          src={item.image || item.thumbnail}
          alt={item.title}
          className="
            h-[230px]
            md:h-[245px]
            w-full
            object-cover
          "
        />

        <div
          className="
            absolute inset-0
            bg-black/10
            transition
            group-hover:bg-black/20
          "
        />

        {/* PLAY BUTTON */}

        <span
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-14
            w-14
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border-2
            border-white
            bg-[#064B50]/85
            text-white
            shadow-lg
            transition
            group-hover:scale-110
            group-hover:bg-[#C8942E]
          "
        >
          <Play
            size={23}
            fill="currentColor"
            className="ml-1"
          />
        </span>
      </div>

      {/* VIDEO DETAILS */}

      <div className="p-5 md:p-6">
        <p
          className="
            mb-2
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.08em]
            text-[#C8942E]
          "
        >
          {item.category}
        </p>

        <h3
          className="
            text-[18px]
            md:text-[20px]
            font-semibold
            leading-[1.35]
            text-[#263F41]
          "
        >
          {item.title}
        </h3>

        <span
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            text-[14px]
            font-semibold
            text-[#064B50]
          "
        >
          Watch Video
          <Play size={15} />
        </span>
      </div>
    </button>
  );
}





// import { Play } from "lucide-react";
// import SafeImage from "../SafeImage";

// export default function VideoCard({
//   item,
//   onPlay,
// }) {
//   return (
//     <button
//       type="button"
//       onClick={() => onPlay(item)}
//       className="
//         group
//         w-full
//         overflow-hidden
//         rounded-[22px]
//         border border-[#DCECEB]
//         bg-white
//         text-left
//         shadow-[0_10px_35px_rgba(6,75,80,0.08)]
//         transition
//         duration-300
//         hover:-translate-y-1
//       "
//     >
//       <div className="relative overflow-hidden">
//         <SafeImage
//           src={item.image}
//           alt={item.title}
//           className="
//             h-[230px]
//             md:h-[245px]
//             w-full
//             object-cover
//           "
//         />

//         <div className="
//           absolute inset-0
//           bg-black/10
//           transition
//           group-hover:bg-black/20
//         " />

//         <span
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             flex
//             h-14
//             w-14
//             -translate-x-1/2
//             -translate-y-1/2
//             items-center
//             justify-center
//             rounded-full
//             border-2
//             border-white
//             bg-[#064B50]/85
//             text-white
//             shadow-lg
//             transition
//             group-hover:scale-110
//             group-hover:bg-[#C8942E]
//           "
//         >
//           <Play
//             size={23}
//             fill="currentColor"
//             className="ml-1"
//           />
//         </span>
//       </div>

//       <div className="p-5 md:p-6">
//         <p className="
//           mb-2
//           text-[13px]
//           font-semibold
//           uppercase
//           tracking-[0.08em]
//           text-[#C8942E]
//         ">
//           {item.category}
//         </p>

//         <h3 className="
//           text-[18px]
//           md:text-[20px]
//           font-semibold
//           leading-[1.35]
//           text-[#263F41]
//         ">
//           {item.title}
//         </h3>

//         <span className="
//           mt-4
//           inline-flex
//           items-center
//           gap-2
//           text-[14px]
//           font-semibold
//           text-[#064B50]
//         ">
//           Watch Video
//           <Play size={15} />
//         </span>
//       </div>
//     </button>
//   );
// }