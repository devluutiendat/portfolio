
 const siteMetadata = {
  title: "dat's profile",
  author: 'Tien Dat',
  jobTitle:"Web Developer",
  major:"Information Technology",
  university:"economics, engineering and industry (uneti)",
  passion:[
    "Coding",
    "develop web application",
  ],
  technicalSkills: [
    "nextjs",
    "typescript",
    "tailwindcss"
  ],
  database:[
    "mongodb",
    "mysql",
  ],
  orm:[
    "prisma",
    "typeorm",
  ],
  born:"Nam Định",
  fullName: 'luu Tien dat',
  headerTitle: "dat's Blog",
  description: 'My desire to practice my skills and share my acquired knowledge fuels my endeavors.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://dat.dev',
  analyticsURL: 'https://analytics.dat.dev/share/Z3eSINRnbzydz1gK/dat.dev',
  siteRepo: 'https://github.com/dat/dat.dev',
  siteLogo: '/static/images/avatar.jpg',
  avatar: '/static/images/avatar.jpg',
  socialImage: '/static/images/projects/dat-blog.png',
  email: 'dotrongkhanh.dev@gmail.com',
  github: 'https://github.com/dat',
  facebook: 'https://www.facebook.com/dat.dev',
  linkedin: 'https://www.linkedin.com/in/dat',
  twitter: 'https://twitter.com/dat',
  youtube: 'https://youtube.com',
  locale: 'en-US',
  stickyNav: false,
  socialAccounts: {
    github: 'dat',
    linkedin: 'dat',
    facebook: 'dat.dev',
  },
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.UMAMI_WEBSITE_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'bottom',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
};

export default siteMetadata;