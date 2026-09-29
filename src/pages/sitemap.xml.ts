import type { APIRoute } from 'astro';

export const prerender = true;

const paths = ['/', '/about/', '/privacy/', '/contact/', '/editorial-policy/'];

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    return new Response('Site URL is required to generate the sitemap.', { status: 500 });
  }

  const urls = paths
    .map((path) => '  <url><loc>' + new URL(path, site).href + '</loc></url>')
    .join('\n');
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
