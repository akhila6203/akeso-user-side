
import axiosClient from "./axiosClient";

export const getPublishedFaqs = async () => {
  const allFaqs = [];
  let page = 1;
  const limit = 100;

  while (true) {
    const response = await axiosClient.get("/faqs", {
      params: { page, limit },
    });

    const result = response.data;

    // console.log("FAQ API response:", result);

    if (result?.success === false) {
      throw new Error("Unable to load FAQs");
    }

    const rows = Array.isArray(result?.rows)
      ? result.rows
      : [];

    allFaqs.push(...rows);

    const total = Number(result?.total ?? 0);

    if (
      rows.length === 0 ||
      allFaqs.length >= total
    ) {
      break;
    }

    page += 1;
  }

  return allFaqs
    .filter(
      (faq) =>
        Number(faq.is_published) === 1 &&
        faq.question?.trim() &&
        faq.answer?.trim()
    )
    .map((faq) => ({
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
    }));
};
