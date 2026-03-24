import type { MetadataRoute } from 'next';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://chemiscope.vercel.app';
  return [
    '', '/about', '/industries', '/solutions', '/products', '/downloads', '/contact', '/technical-support', '/why-chemiscope'
  ].map((p) => ({ url: `${base}${p}`, lastModified: new Date() })).concat(products.map((p) => ({ url: `${base}/products/${p.slug}`, lastModified: new Date() })));
}
