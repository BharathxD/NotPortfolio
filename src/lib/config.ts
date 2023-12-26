import { type Biography } from "~/types";

const siteConfig = {
  name: "Bharath Lakshman Kumar",
  description: "Personal Portfolio",
  logoUrl: "/logo.svg",
  favicons: [
    {
      url: "/public/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      url: "/public/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/public/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    {
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

const biography: Biography = {
  fullName: "Bharath Lakshman Kumar",
  profession: "UI Engineer",
  contactEmail: "Bharath.lkb@outlook.com",
  contactNumber: "+918247228027",
  socialProfiles: [
    {
      platform: "Github",
      url: "https://www.github.com/bharathxd",
    },
    {
      platform: "UrledIn",
      url: "https://www.linkedin.com/in/bharath-bandi/",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/Bharath_uwu",
    },
  ],
  resumeLink: "https://bharath-web-bucket.s3.ap-south-1.amazonaws.com/Bharat-Laxman-Kumar-Bandi.pdf",
  personalDescription: `Hey, I'm Bharath Lakshman Kumar (you can call me Bharath, though). I'm a UI Engineer and a student based in Hyderabad, India. I'm working as a software engineering intern at Vertocity, where I contribute to building a variety of AI/Ed SaaS products. My background is in UI development, but I love everything related to Server-Side Engineering. I'm all about clean, detailed documentation, rock-solid processes, and never shying away from asking "why?". Those are the pillars of my work, no matter what project I'm tackling.And speaking of projects, my sweet spot lies in the SaaS space. But if there's a chance to turn a playful idea into reality, consider me on board! Feel free to stick around, explore, and don't hesitate to say hello!`,
  academicBackground: {
    institution: "KL University Hyderabad",
    degreeObtained: "Bachelor of Computer Applications",
    location: "Hyderabad, India",
    gradePointAverage: "9.62",
    majorSubject: "Computer Science",
    studyPeriod: "June 2021-24",
  },
  portfolioProjects: [
    {
      name: "DevCircle",
      tagline: "A Collaborative Developer Network",
      projectUrl: "https://devcircle.live/home",
      github: "https://www.github.com/bharathxd/devcircle",
      points: [
        "Developed DevCircle, an open-source developer community platform that fosters a collaborative environment for developers to exchange expertise and stay up-to-date.",
        "Engineered a production-grade application with Next.js 13's cutting-edge Server-Side Rendering (SSR) and React Server Components (RSC) capabilities, implementing industry-standard SEO practices.",
        "Orchestrated seamless Continuous Integration and Continuous Deployment (CI/CD) workflows using GitHub Actions, deploying the application on Amazon Web Services (AWS) via the Serverless Stack Toolkit (SST) framework and AWS Cloud Development Kit (CDK).",
        "Ensured efficient caching using Redis and leveraged CloudFront CDN for optimal content delivery.",
        "Utilized MySQL and Prisma ORM to implement a highly scalable and efficient data management system.",
        "Designed and developed an intuitive user interface leveraging TailwindCSS and Shadcn/UI libraries, resulting in a visually appealing and user-friendly interface",
      ],
      stack: [
        "NextJS",
        "React",
        "TypeScript",
        "MySQL",
        "Redis",
        "Shadcn/UI",
        "TailwindCSS",
        "EditorJS",
        "NextAuth",
        "API Gateway",
        "Lambda",
        "S3",
        "CloudFront",
      ],
    },
    {
      name: "OptimizeX",
      tagline: "Effortless Image Optimization",
      projectUrl: "https://optimizex.vercel.app/",
      github: "https://github.com/bharathxd/optimizex",
      points: [
        "Developed and deployed OptimizeX, a scalable SaaS application using NextJS, React, TypeScript, Prisma, and AWS services, enabling efficient bulk-generation of optimized images.",
        "Achieved outstanding performance scores on pagespeed.web.dev, with a score of 90+ in key areas like Performance, Accessibility, Best Practices, and SEO, ensuring a seamless user experience and high search engine visibility.",
        "Implemented robust security measures, including fine-grained IAM permissions and access keys, to safeguard application services and protect user data.",
        "Utilized a comprehensive tech stack, including NextJS, React, TypeScript, Prisma, MongoDB, Node.js, TailwindCSS, NextAuth, React Query, and Zustand, to deliver a modern, efficient, and maintainable codebase.",
        "Successfully integrated various AWS services like S3, Lambda, SQS, CloudFront, CloudWatch, and SNS, enabling essential functionalities such as image storage, processing, content delivery, monitoring, and notifications.",
      ],
      stack: [
        "TypeScript",
        "React",
        "NextJS",
        "TailwindCSS",
        "MongoDB",
        "NextAuth",
        "Zustand",
        "S3",
        "Lambda",
        "SQS",
        "SNS",
        "CloudWatch",
      ],
    },
  ],
  professionalCertifications: [
    {
      issuingOrganization: "AWS",
      name: "AWS Certified Developer Associate",
      credentialId: "b292109c-047c-4e91-a7cd-f9036bc8eb2d",
      credentialUrl: "https://www.credly.com/badges/b292109c-047c-4e91-a7cd-f9036bc8eb2d",
      issueDate: "March 31, 2023",
    },
    {
      issuingOrganization: "AWS",
      name: "AWS Certified SysOps Administrator Associate",
      credentialId: "5070d9ed-6ced-4386-99ad-365b84d64baf",
      credentialUrl: "https://www.credly.com/badges/5070d9ed-6ced-4386-99ad-365b84d64baf",
      issueDate: "April 30, 2023",
    },
    {
      issuingOrganization: "AWS",
      credentialId: "dda71c67-519c-4ba7-b4de-d4a0a77b23eb",
      name: "AWS Certified Solutions Architect Associate",
      credentialUrl: "https://www.credly.com/badges/dda71c67-519c-4ba7-b4de-d4a0a77b23eb",
      issueDate: "April 20, 2023",
    },
    {
      issuingOrganization: "AWS",
      name: "AWS Certified Cloud Practitioner",
      credentialUrl: "https://www.credly.com/badges/9b90deb2-f3dc-4687-89c6-aa50b4b55051",
      credentialId: "9b90deb2-f3dc-4687-89c6-aa50b4b55051",
      issueDate: "January 25, 2023",
    },
    {
      issuingOrganization: "MSFT",
      name: "Microsoft Certified Azure Fundamentals",
      credentialUrl: "https://www.credly.com/badges/15a3d4d9-c908-4817-963e-965d74e15112",
      credentialId: "15a3d4d9-c908-4817-963e-965d74e15112",
      issueDate: "January 09, 2023",
    },
    {
      issuingOrganization: "MSFT",
      name: "Microsoft Certified Azure AI Fundamentals",
      credentialUrl: "https://www.credly.com/badges/37be2ece-707f-47d4-928b-6780a4200c99",
      credentialId: "37be2ece-707f-47d4-928b-6780a4200c99",
      issueDate: "January 13, 2023",
    },
    {
      issuingOrganization: "MSFT",
      name: "Microsoft Certified Azure Data Fundamentals",
      credentialUrl: "https://www.credly.com/badges/59c76dc4-c7b9-4466-a4d7-7a86d4db1deb",
      credentialId: "59c76dc4-c7b9-4466-a4d7-7a86d4db1deb",
      issueDate: "January 11, 2023",
    },
    {
      issuingOrganization: "MSFT",
      name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      credentialUrl: "https://www.credly.com/badges/8251f1b2-db4f-41f3-a1d7-98c85eb5132b",
      credentialId: "8251f1b2-db4f-41f3-a1d7-98c85eb5132b",
      issueDate: "January 16, 2023",
    },
  ],
} as const;

export { siteConfig, biography };
