
import { useMemo } from "react";
import DOMPurify from "dompurify";

export default function RichTextContent({ content = "" }) {
  const safeHtml = useMemo(() => {
    if (!content) return "";

    return DOMPurify.sanitize(String(content), {
      USE_PROFILES: { html: true },
      ADD_ATTR: ["class", "data-list"],
    });
  }, [content]);

  if (!safeHtml) {
    return null;
  }

  return (
    <div
      className="
        min-w-0
        break-words
        text-[15px]
        leading-[1.9]
        text-[#40565A]

        [&_h1]:mb-5
        [&_h1]:mt-8
        [&_h1]:text-3xl
        [&_h1]:font-bold
        [&_h1]:leading-tight
        [&_h1]:text-[#153F4A]

        [&_h2]:mb-4
        [&_h2]:mt-7
        [&_h2]:text-2xl
        [&_h2]:font-bold
        [&_h2]:text-[#153F4A]

        [&_h3]:mb-3
        [&_h3]:mt-6
        [&_h3]:text-xl
        [&_h3]:font-semibold
        [&_h3]:text-[#153F4A]

        [&_h4]:mb-3
        [&_h4]:mt-5
        [&_h4]:text-lg
        [&_h4]:font-semibold
        [&_h4]:text-[#153F4A]

        [&_p]:mb-4

        [&_strong]:font-bold
        [&_b]:font-bold

        [&_em]:italic
        [&_i]:italic

        [&_u]:underline

        [&_ul]:mb-5
        [&_ul]:list-disc
        [&_ul]:space-y-2
        [&_ul]:pl-7

        [&_ol]:mb-5
        [&_ol]:list-decimal
        [&_ol]:space-y-2
        [&_ol]:pl-7

        [&_li]:pl-1

        [&_blockquote]:my-6
        [&_blockquote]:border-l-4
        [&_blockquote]:border-[#13899B]
        [&_blockquote]:bg-[#F1F8F8]
        [&_blockquote]:px-5
        [&_blockquote]:py-4
        [&_blockquote]:italic

        [&_a]:text-[#087A86]
        [&_a]:underline

        [&_img]:my-5
        [&_img]:max-w-full
        [&_img]:rounded-xl

        [&_pre]:my-5
        [&_pre]:overflow-x-auto
        [&_pre]:rounded-lg
        [&_pre]:bg-slate-100
        [&_pre]:p-4

        [&_code]:font-mono
      "
      dangerouslySetInnerHTML={{
        __html: safeHtml,
      }}
    />
  );
}
