import axiosClient from './axiosClient';

const apiBase = (import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');
const origin = apiBase.replace(/\/api\/?$/, '');

export function editorialImageUrl(path) {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${origin}/${String(path).replace(/^\/+/, '')}`;
}

function textFromHtml(html) {
  return String(html || '')
    .replace(/<\s*br\s*\/?\s*>/gi, ' ')
    .replace(/<\/(?:p|div|h[1-6]|li)>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, ' ').trim();
}

export function mapEditorialItem(row) {
  const raw = textFromHtml(row.content || row.short_description);
  return {
    id: row.id,
    slug: row.slug || String(row.id),
    title: row.title || '',
    category: row.speciality_name || row.speciality?.name || 'Healthcare',
    image: editorialImageUrl(row.thumbnail),
    excerpt: raw.length > 175 ? `${raw.slice(0, 172)}...` : raw,
    content: row.content || '',
    date: row.created_at ? new Date(row.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
  };
}

export async function getEditorialList(kind) {
  const response = await axiosClient.get(`/public/editorial/${kind}`, { params: { page: 1, limit: 100 } });
  return (response.data.rows || []).map(mapEditorialItem);
}

export async function getEditorialOne(kind, slug) {
  const response = await axiosClient.get(`/public/editorial/${kind}/${encodeURIComponent(slug)}`);
  return mapEditorialItem(response.data.data);
}
