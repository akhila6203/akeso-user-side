export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="mx-auto max-w-[850px] text-center">
      {eyebrow && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C8942E] sm:text-[12px]">
          {eyebrow}
        </p>
      )}

      <h2
        className={`
          mt-2 text-[28px] font-semibold leading-tight
          sm:text-[32px] md:text-[38px]
          ${light ? "text-white" : "text-[#064B50]"}
        `}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`
            mx-auto mt-4 max-w-[760px]
            text-[15px] leading-7 md:text-[16px]
            ${light ? "text-white/80" : "text-[#2b2b2b]"}
          `}
        >
          {description}
        </p>
      )}
    </div>
  );
}