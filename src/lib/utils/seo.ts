// utils/genPageMetadata.ts
import siteMetadata from '@/data/siteMetadata'

interface Author {
  name: string;
  url?: string;
}

interface PageMetadataParams {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  authors?: Author[];
  publishedTime?: string;
  type?: string;
  locale?: string;
  canonicalUrl?: string;
}

export function genPageMetadata({
  title,
  description = siteMetadata.description,
  keywords = [],
  image = siteMetadata.socialBanner || '/images/avatar.svg',
  authors = [{ name: siteMetadata.author }],
  publishedTime,
  type = 'website',
  locale = siteMetadata.locale || 'en_US',
  canonicalUrl,
}: PageMetadataParams) {
  const fullTitle = `${title} | ${siteMetadata.headerTitle || siteMetadata.title}`;
  
  return {
    title: fullTitle,
    description,
    keywords: [...siteMetadata.keywords, ...keywords].join(', '),
    authors: authors.map(author => ({
      name: author.name,
      url: author.url || siteMetadata.siteUrl,
    })),
    creator: siteMetadata.author,
    publisher: siteMetadata.author,
    metadataBase: new URL(siteMetadata.siteUrl),
    alternates: {
      canonical: canonicalUrl || '/',
    },
    openGraph: {
      title: fullTitle,
      description,
      url: process.env.NEXT_PUBLIC_AUTH_URL,
      siteName: siteMetadata.title,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale,
      type,
      publishedTime,
    },
    twitter: {
      card: 'This is my portfolio',
      title: fullTitle,
      description,
      images: '/opengraph-image.png',
      creator: siteMetadata.socialAccounts.twitter 
        ? `@${siteMetadata.socialAccounts.twitter}` 
        : undefined,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    // Additional metadata
    applicationName: siteMetadata.title,
    manifest: '/manifest.json',
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}