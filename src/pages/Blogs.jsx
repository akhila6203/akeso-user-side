import { useEffect, useState } from 'react';
import KnowledgeListingPage from '../components/knowledge/KnowledgeListingPage';
import { getEditorialList } from '../api/editorialApi';

export default function Blogs() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retry, setRetry] = useState(0);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError('');
    getEditorialList('blogs')
      .then(data => { if (active) setItems(data); })
      .catch(err => { if (active) setError(err.message || 'Unable to load blogs'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [retry]);

  return <KnowledgeListingPage
    title="Blogs"
    description="Explore educational articles and healthcare insights."
    items={items}
    type="blogs"
    loading={loading}
    error={error}
    onRetry={() => setRetry(n => n + 1)}
  />;
}




// import KnowledgeListingPage from "../components/knowledge/KnowledgeListingPage";
// import { blogData } from "../data/knowledgeCenterData";

// export default function Blogs() {
//   return (
//     <KnowledgeListingPage
//       title="Blogs"
//       description="Explore educational articles and healthcare insights."
//       items={blogData}
//       type="blogs"
//     />
//   );
// }