
import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import DOMPurify from "dompurify";

import Breadcrumb from "../Breadcrumb";
import SafeImage from "../SafeImage";
import KnowledgeSlider from "./KnowledgeSlider";

import {
  getEditorialList,
  getEditorialOne,
} from "../../api/editorialApi";

/* =========================================
   RICH TEXT DESCRIPTION
   Preserve admin editor formatting
========================================= */

function RichTextDescription({ content }) {
  const safeHtml = useMemo(() => {
    if (!content) return "";

    return DOMPurify.sanitize(String(content), {
      USE_PROFILES: { html: true },
      ADD_ATTR: ["class", "data-list"],
    });
  }, [content]);

  if (!safeHtml) return null;

  return (
    <div
      className="
        mt-9
        min-w-0
        break-words
        text-[16px]
        leading-[1.9]
        text-[#526566]

        [&_p]:mb-5

        [&_h1]:mb-5
        [&_h1]:mt-8
        [&_h1]:text-[30px]
        [&_h1]:font-bold
        [&_h1]:leading-tight
        [&_h1]:text-[#263F41]

        [&_h2]:mb-4
        [&_h2]:mt-8
        [&_h2]:text-[26px]
        [&_h2]:font-bold
        [&_h2]:leading-snug
        [&_h2]:text-[#263F41]

        [&_h3]:mb-4
        [&_h3]:mt-7
        [&_h3]:text-[22px]
        [&_h3]:font-semibold
        [&_h3]:text-[#263F41]

        [&_h4]:mb-3
        [&_h4]:mt-6
        [&_h4]:text-[19px]
        [&_h4]:font-semibold
        [&_h4]:text-[#263F41]

        [&_strong]:font-bold
        [&_b]:font-bold

        [&_em]:italic
        [&_i]:italic

        [&_u]:underline

        [&_ul]:mb-6
        [&_ul]:list-disc
        [&_ul]:space-y-2
        [&_ul]:pl-7

        [&_ol]:mb-6
        [&_ol]:list-decimal
        [&_ol]:space-y-2
        [&_ol]:pl-7

        [&_li]:pl-1
        [&_li]:leading-8

        [&_blockquote]:my-6
        [&_blockquote]:border-l-4
        [&_blockquote]:border-[#C8942E]
        [&_blockquote]:bg-[#F7FAF9]
        [&_blockquote]:px-5
        [&_blockquote]:py-4
        [&_blockquote]:italic

        [&_a]:font-medium
        [&_a]:text-[#087A86]
        [&_a]:underline

        [&_img]:my-6
        [&_img]:h-auto
        [&_img]:max-w-full
        [&_img]:rounded-xl

        [&_pre]:my-5
        [&_pre]:overflow-x-auto
        [&_pre]:rounded-lg
        [&_pre]:bg-slate-100
        [&_pre]:p-4

        [&_code]:font-mono

        [&_hr]:my-8
        [&_hr]:border-slate-200

        [&_table]:my-6
        [&_table]:w-full
        [&_table]:border-collapse

        [&_th]:border
        [&_th]:border-slate-200
        [&_th]:bg-slate-50
        [&_th]:p-3
        [&_th]:text-left

        [&_td]:border
        [&_td]:border-slate-200
        [&_td]:p-3

        [&_.ql-align-center]:text-center
        [&_.ql-align-right]:text-right
        [&_.ql-align-justify]:text-justify
      "
      dangerouslySetInnerHTML={{
        __html: safeHtml,
      }}
    />
  );
}

/* =========================================
   EDITORIAL DETAILS PAGE
========================================= */

export default function EditorialDetails({ kind }) {
  const { slug } = useParams();

  const isBlog = kind === "blogs";

  const name = isBlog ? "Blogs" : "Case Studies";

  const base = isBlog
    ? "/health-library/blogs"
    : "/health-library/case-studies";

  const [item, setItem] = useState(null);
  const [related, setRelated] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);

  /* =========================================
     FETCH DETAILS FROM BACKEND
  ========================================= */

  useEffect(() => {
    let active = true;

    setLoading(true);
    setError("");
    setItem(null);
    setRelated([]);

    Promise.all([
      getEditorialOne(kind, slug),
      getEditorialList(kind),
    ])
      .then(([current, all]) => {
        if (!active) return;

        setItem(current);

        setRelated(
          all.filter(
            (x) => x.id !== current.id
          )
        );
      })
      .catch((err) => {
        if (!active) return;

        setError(
          err.message ||
            "Unable to load details"
        );
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [kind, slug, retry]);

  return (
    <>
      {/* =====================================
          BREADCRUMB
      ===================================== */}

      <Breadcrumb
        title={item?.title || name}
        items={[
          {
            label: "Health Library",
            to: "/health-library",
          },
          {
            label: name,
            to: base,
          },
        ]}
      />

      {/* =====================================
          MAIN DETAILS
      ===================================== */}

      <article className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8">

          {/* LOADING */}

          {loading ? (
            <p className="text-[#526566]">
              Loading details...
            </p>
          ) : error ? (

            /* ERROR */

            <div className="text-[#526566]">
              <p>{error}</p>

              <button
                type="button"
                onClick={() =>
                  setRetry((n) => n + 1)
                }
                className="mt-4 rounded-full bg-[#064B50] px-6 py-2 text-white"
              >
                Try Again
              </button>

              <Link
                to={base}
                className="ml-4 underline"
              >
                Back to {name}
              </Link>
            </div>

          ) : item ? (
            <>
              {/* SPECIALITY + DATE */}

              <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-[#323232]">

                {item.category && (
                  <span className="rounded-full bg-[#EEF6F5] px-4 py-2 font-semibold text-[#064B50]">
                    {item.category}
                  </span>
                )}

                {item.date && (
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {item.date}
                  </span>
                )}
              </div>

              {/* BLOG / CASE STUDY TITLE */}

              <h1 className="max-w-[950px] text-[30px] font-bold leading-[1.2] text-[#263F41] md:text-[40px] lg:text-[46px]">
                {item.title}
              </h1>

              {/* FEATURED IMAGE */}

              <SafeImage
                src={item.image}
                alt={item.title}
                className="mt-8 h-[260px] w-full rounded-[24px] object-cover sm:h-[360px] md:h-[470px]"
              />

              {/* =====================================
                  DESCRIPTION - RICH TEXT
                  Admin formatting preserved
              ===================================== */}

              <RichTextDescription
                content={item.content}
              />

              {/* MEDICAL DISCLAIMER */}

              <div className="mt-10 rounded-[18px] border border-[#E6D7AE] bg-[#FAF8F2] p-5 text-sm leading-6 text-[#353636]">
                {isBlog
                  ? "This content is for general educational purposes and does not replace individual medical advice, diagnosis or treatment."
                  : "Case-study information should be de-identified and clinically reviewed before publication."}
              </div>
            </>
          ) : null}
        </div>
      </article>

      {/* =====================================
          RELATED BLOGS / CASE STUDIES
      ===================================== */}

      {!loading &&
        !error &&
        related.length > 0 && (
          <section className="bg-[#EEF6F5] py-14 md:py-16">
            <div className="mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">

              <div className="mb-8 text-center">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#C8942E]">
                  Explore More
                </span>

                <h2 className="mt-2 text-[28px] font-bold text-[#263F41] md:text-[36px]">
                  {isBlog
                    ? "Recent Blogs"
                    : "Related Case Studies"}
                </h2>
              </div>

              <KnowledgeSlider
                items={related}
                type={
                  isBlog
                    ? "blogs"
                    : "case-studies"
                }
              />
            </div>
          </section>
        )}
    </>
  );
}
