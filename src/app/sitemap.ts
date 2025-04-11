// src/app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://acme.com/',
      lastModified: new Date(),
      priority:1,
      changeFrequency: 'monthly',
    },
  ];
}
