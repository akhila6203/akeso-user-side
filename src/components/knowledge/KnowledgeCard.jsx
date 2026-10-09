import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "../SafeImage";

export default function KnowledgeCard({
  item,
  type = "blog",
}) {
  const detailsPath =
    type === "blog"
      ? `/health-library/blogs/${item.slug}`
      : `/health-library/case-studies/${item.slug}`;

  return (
    <article
      className="
        h-full overflow-hidden
        rounded-[22px]
        border border-[#DCECEB]
        bg-white
        shadow-[0_10px_35px_rgba(6,75,80,0.08)]
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_16px_42px_rgba(6,75,80,0.14)]
      "
    >
      <Link
        to={detailsPath}
        className="block overflow-hidden"
      >
        <SafeImage
          src={item.image}
          alt={item.title}
          className="
            h-[220px]
            md:h-[230px]
            lg:h-[245px]
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-[1.03]
          "
        />
      </Link>

      <div className="p-5 md:p-6">
        <p className="
          mb-2
          text-[13px]
          font-semibold
          uppercase
          tracking-[0.08em]
          text-[#C8942E]
        ">
          {item.category}
        </p>

        <Link to={detailsPath}>
          <h3 className="
            text-[18px]
            md:text-[20px]
            font-semibold
            leading-[1.35]
            text-[#263F41]
            transition
            hover:text-[#064B50]
          ">
            {item.title}
          </h3>
        </Link>

        {item.excerpt && (
          <p className="
            mt-3
            line-clamp-2
            text-[16px]
            leading-6
            text-[#4a4b4b]
          ">
            {item.excerpt}
          </p>
        )}

        <div className="
          mt-5
          flex
          items-center
          justify-between
          gap-3
        ">
          {item.date && (
            <span className="text-[13px] text-[#7A898A]">
              {item.date}
            </span>
          )}

          <Link
            to={detailsPath}
            className="
              inline-flex
              items-center
              gap-2
              text-[14px]
              font-semibold
              text-[#064B50]
              transition
              hover:text-[#C8942E]
            "
          >
            {type === "blog"
              ? "Continue Reading"
              : "Know More"}

            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}