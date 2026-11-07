
import { useEffect, useState } from "react";
import { getPartners } from "../../api/partnersApi";
import axiosClient from "../../api/axiosClient";

const getPartnerLogoUrl = (logo) => {
  if (!logo) return "";

  if (/^https?:\/\//i.test(logo)) {
    return logo;
  }

  const baseURL = axiosClient.defaults.baseURL;

  if (!baseURL) {
    console.error("VITE_API_URL is missing");
    return "";
  }

  try {
    const backendOrigin = new URL(baseURL).origin;

    return new URL(
      logo.startsWith("/") ? logo : `/${logo}`,
      backendOrigin
    ).href;
  } catch (error) {
    console.error("Partner image URL error:", error);
    return "";
  }
};

export default function HomeAccreditations() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);

  // Fetch admin partners
  useEffect(() => {
    let isMounted = true;

    const fetchPartners = async () => {
      try {
        console.log("Fetching partners...");
        console.log("API BASE URL:", axiosClient.defaults.baseURL);

        const data = await getPartners();

        if (isMounted) {
          setPartners(data);
          setApiError(false);
          console.log("Partners loaded successfully:", data);
        }
      } catch (error) {
        console.error("Partners API failed:", error);

        if (isMounted) {
          setPartners([]);
          setApiError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPartners();

    return () => {
      isMounted = false;
    };
  }, []);

  // Hide only after a successful API response with no partners.
  // Keep the section visible when the API request fails.
  if (!loading && !apiError && partners.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F7FAF9] py-12 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">

        {/* Heading */}
        <div className="mx-auto max-w-[820px] text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C8942E]">
            Quality &amp; Trust
          </p>

          <h2 className="mt-3 text-[26px] font-semibold leading-tight text-[#064B50] sm:text-[30px] md:text-[36px]">
            Our Healthcare Accreditations
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-[14px] leading-6 text-black sm:text-[15px] sm:leading-7 md:text-[16px]">
            Explore the accreditation standards and quality
            credentials associated with our healthcare network.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="mt-10 text-center text-gray-600">
            Loading partners...
          </p>
        )}

        {/* API Error */}
        {!loading && apiError && (
          <p className="mt-10 text-center text-red-600">
            Unable to load partners. Please check the partners API.
          </p>
        )}

        {/* Responsive Partner Grid */}
        {!loading && !apiError && partners.length > 0 && (
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

            {partners.map((item, index) => (
              <article
  key={item.id || `${item.name}-${index}`}
  className="flex min-h-[150px] flex-col items-center justify-center rounded-[20px] border border-[#E0E9E8] bg-white p-6 shadow-[0_8px_28px_rgba(6,75,80,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#C8942E]/60 hover:shadow-[0_14px_34px_rgba(6,75,80,0.10)]"
>
  {item.logo && (
    item.website_url ? (
      <a
        href={item.website_url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${item.name} website`}
        className="flex h-full w-full items-center justify-center cursor-pointer"
      >
        <img
          src={getPartnerLogoUrl(item.logo)}
          alt={item.name || "Healthcare partner"}
          loading="lazy"
          className="h-[100px] w-full object-contain transition duration-300 hover:scale-105 sm:h-[120px] md:h-[125px]"
          onError={(event) => {
            console.error(
              "Logo failed:",
              event.currentTarget.src
            );
            event.currentTarget.style.display = "none";
          }}
        />
      </a>
    ) : (
      <img
        src={getPartnerLogoUrl(item.logo)}
        alt={item.name || "Healthcare partner"}
        loading="lazy"
        className="h-[100px] w-full object-contain sm:h-[120px] md:h-[125px]"
        onError={(event) => {
          console.error(
            "Logo failed:",
            event.currentTarget.src
          );
          event.currentTarget.style.display = "none";
        }}
      />
    )
  )}
</article>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}






// import { useEffect, useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { getPartners } from "../../api/partnersApi";
// import axiosClient from "../../api/axiosClient";

// const getPartnerLogoUrl = (logo) => {
//   if (!logo) return "";

//   if (/^https?:\/\//i.test(logo)) {
//     return logo;
//   }

//   const baseURL = axiosClient.defaults.baseURL;

//   if (!baseURL) {
//     console.error("VITE_API_URL is missing");
//     return "";
//   }

//   try {
//     const backendOrigin = new URL(baseURL).origin;

//     return new URL(
//       logo.startsWith("/") ? logo : `/${logo}`,
//       backendOrigin
//     ).href;
//   } catch (error) {
//     console.error("Partner image URL error:", error);
//     return "";
//   }
// };

// export default function HomeAccreditations() {
//   const [partners, setPartners] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [apiError, setApiError] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(5);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Fetch admin partners
//   useEffect(() => {
//     let isMounted = true;

//     const fetchPartners = async () => {
//       try {
//         console.log("Fetching partners...");
//         console.log("API BASE URL:", axiosClient.defaults.baseURL);

//         const data = await getPartners();

//         if (isMounted) {
//           setPartners(data);
//           setApiError(false);
//           console.log("Partners loaded successfully:", data);
//         }
//       } catch (error) {
//         console.error("Partners API failed:", error);

//         if (isMounted) {
//           setPartners([]);
//           setApiError(true);
//         }
//       } finally {
//         if (isMounted) {
//           setLoading(false);
//         }
//       }
//     };

//     fetchPartners();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   // Responsive cards
//   useEffect(() => {
//     const updateVisibleCount = () => {
//       if (window.innerWidth < 768) {
//         setVisibleCount(1);
//       } else if (window.innerWidth < 1200) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(5);
//       }
//     };

//     updateVisibleCount();
//     window.addEventListener("resize", updateVisibleCount);

//     return () => {
//       window.removeEventListener("resize", updateVisibleCount);
//     };
//   }, []);

//   const maxIndex = Math.max(
//     0,
//     partners.length - visibleCount
//   );

//   const shouldSlide = partners.length > visibleCount;

//   useEffect(() => {
//     setCurrentIndex((previous) =>
//       Math.min(previous, maxIndex)
//     );
//   }, [maxIndex]);

//   // Auto slider
//   useEffect(() => {
//     if (!shouldSlide) return;

//     const timer = setInterval(() => {
//       setCurrentIndex((previous) =>
//         previous >= maxIndex ? 0 : previous + 1
//       );
//     }, 4500);

//     return () => clearInterval(timer);
//   }, [shouldSlide, maxIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((previous) =>
//       previous >= maxIndex ? 0 : previous + 1
//     );
//   };

//   const previousSlide = () => {
//     setCurrentIndex((previous) =>
//       previous <= 0 ? maxIndex : previous - 1
//     );
//   };

//   // Hide only after a successful API response with no partners.
//   // Do not hide the section when the API request fails.
//   if (!loading && !apiError && partners.length === 0) {
//     return null;
//   }

//   const visiblePartners = partners.slice(
//     currentIndex,
//     currentIndex + visibleCount
//   );

//   return (
//     <section className="bg-[#F7FAF9] py-14 md:py-16">
//       <div className="mx-auto max-w-[1500px] px-5 sm:px-7 lg:px-10">

//         {/* Heading */}
//         <div className="mx-auto max-w-[820px] text-center">
//           <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C8942E]">
//             Quality &amp; Trust
//           </p>

//           <h2 className="mt-3 text-[28px] font-semibold leading-tight text-[#064B50] md:text-[36px]">
//             Our Healthcare Accreditations
//           </h2>

//           <p className="mx-auto mt-4 max-w-[700px] text-[16px] leading-7 text-black">
//             Explore the accreditation standards and quality
//             credentials associated with our healthcare network.
//           </p>
//         </div>

//         {/* Loading */}
//         {loading && (
//           <p className="mt-10 text-center text-gray-600">
//             Loading partners...
//           </p>
//         )}

//         {/* API error */}
//         {!loading && apiError && (
//           <p className="mt-10 text-center text-red-600">
//             Unable to load partners. Please check the partners API.
//           </p>
//         )}

//         {/* Partner cards */}
//         {!loading && !apiError && partners.length > 0 && (
//           <div className="relative mt-10">

//             {shouldSlide && (
//               <button
//                 type="button"
//                 onClick={previousSlide}
//                 aria-label="Previous partners"
//                 className="absolute left-[-12px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#D8E4E3] bg-white text-black shadow-lg transition hover:bg-[#064B50] hover:text-white lg:left-[-18px]"
//               >
//                 <ArrowLeft size={18} />
//               </button>
//             )}

//             <div className="grid grid-cols-1 gap-5 md:grid-cols-3 xl:grid-cols-5">
//               {visiblePartners.map((item, index) => (
//                 <article
//                   key={item.id || `${item.name}-${index}`}
//                   className="flex min-h-[170px] flex-col items-center justify-center rounded-[20px] border border-[#E0E9E8] bg-white p-6 shadow-[0_8px_28px_rgba(6,75,80,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#C8942E]/60 hover:shadow-[0_14px_34px_rgba(6,75,80,0.10)]"
//                 >
//                   {item.logo && (
//                     <img
//                       src={getPartnerLogoUrl(item.logo)}
//                       alt={item.name || "Healthcare partner"}
//                       loading="lazy"
//                       className="h-[100px] w-full object-contain sm:h-[140px]"
//                       onError={(event) => {
//                         console.error(
//                           "Logo failed:",
//                           event.currentTarget.src
//                         );
//                         event.currentTarget.style.display = "none";
//                       }}
//                     />
//                   )}
// {/* 
//                   {item.name && (
//                     <h3 className="mt-3 text-center text-[14px] font-semibold text-[#064B50]">
//                       {item.name}
//                     </h3>
//                   )} */}
//                 </article>
//               ))}
//             </div>

//             {shouldSlide && (
//               <button
//                 type="button"
//                 onClick={nextSlide}
//                 aria-label="Next partners"
//                 className="absolute right-[-12px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C8942E] bg-[#064B50] text-white shadow-lg transition hover:bg-[#C8942E] lg:right-[-18px]"
//               >
//                 <ArrowRight size={18} />
//               </button>
//             )}
//           </div>
//         )}

//         {/* Slider dots */}
//         {!loading && !apiError && shouldSlide && (
//           <div className="mt-7 flex justify-center gap-2">
//             {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 onClick={() => setCurrentIndex(index)}
//                 aria-label={`Partner slide ${index + 1}`}
//                 className={`h-2 rounded-full transition-all duration-300 ${
//                   currentIndex === index
//                     ? "w-8 bg-[#C8942E]"
//                     : "w-2 bg-[#D3E3E2] hover:bg-[#064B50]"
//                 }`}
//               />
//             ))}
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }



