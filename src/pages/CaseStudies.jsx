import { useEffect, useState } from 'react';
import KnowledgeListingPage from '../components/knowledge/KnowledgeListingPage';
import { getEditorialList } from '../api/editorialApi';

export default function CaseStudies() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    getEditorialList('cases')
      .then(data => { if (active) setItems(data); })
      .catch(err => { if (active) setError(err.message || 'Unable to load case studies'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [retry]);

  return <KnowledgeListingPage
    title="Case Studies"
    description="Explore selected healthcare case-study resources."
    items={items}
    type="case-studies"
    loading={loading}
    error={error}
    onRetry={() => setRetry(n => n + 1)}
  />;
}




// import KnowledgeListingPage from "../components/knowledge/KnowledgeListingPage";
// import { caseStudyData } from "../data/knowledgeCenterData";

// export default function CaseStudies() {
//   return (
//     <KnowledgeListingPage
//       title="Case Studies"
//       description="Explore selected healthcare case-study resources."
//       items={caseStudyData}
//       type="case-studies"
//     />
//   );
// }