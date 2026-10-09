import { useEffect, useState } from "react";
import { getPublishedFaqs } from "../api/faqsApi";

export default function useFaqs() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadFaqs() {
      try {
        setLoading(true);
        setError("");

        const data = await getPublishedFaqs();

        if (mounted) {
          setFaqs(data);
        }
      } catch (err) {
        console.error("FAQ API error:", err);

        if (mounted) {
          setError("Unable to load FAQs.");
          setFaqs([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadFaqs();

    return () => {
      mounted = false;
    };
  }, []);

  return { faqs, loading, error };
}