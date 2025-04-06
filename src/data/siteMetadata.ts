import Facebook from "next-auth/providers/facebook";

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
  theme: 'system',
  avatar: '/avatar.svg',
  email: 'luutiendat03112003.dev@gmail.com',
  github: 'https://github.com/devluutiendat',
  Facebook:"http://facebook.com/luu.tien.at.374555",
  phone: '325933782',
  socialAccounts: {
    github: 'dat',
    linkedin: 'dat',
    facebook: 'dat.dev',
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