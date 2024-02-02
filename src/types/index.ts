import { type Post } from "content-layer/generated";

/**
 * A unique identifier can be either a string or a number.
 */
type UniqueIdentifier = string | number;

/**
 * Represents social profiles of a user.
 */
interface SocialProfiles {
  platform: "LinkedIn" | "Github";
  url: string;
  imageUrl: string;
  blurDataUrl: string | null;
}

/**
 * Represents a project.
 */
interface Project {
  id: UniqueIdentifier;
  name: string;
  tagline: string;
  projectUrl: string;
  github: string;
  noOfPictures: number;
  points: string[];
  stack: string[];
}

/**
 * Represents the academic background of a user.
 */
interface AcademicBackground {
  institution: string;
  degreeObtained: string;
  location: string;
  gradePointAverage: string;
  majorSubject: string;
  studyPeriod: string;
}

/**
 * Represents a professional certification of a user.
 */
interface ProfessionalCertifications {
  name: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
}

/**
 * Represents the biography of a user.
 */
interface Biography {
  fullName: string;
  profession: string;
  contactEmail: string;
  contactNumber: string;
  socialProfiles: SocialProfiles[];
  resumeLink: string;
  personalDescription: string;
  academicBackground: AcademicBackground;
  portfolioProjects: Project[];
  professionalCertifications: ProfessionalCertifications[];
}

/**
 * Represents a link in the navigation bar.
 */
type NavbarLink = {
  name?: string;
  path: string;
};

/**
 * Represents emoticons.
 */
type Emoticons = ["angry", "happy", "disappointed", "neutral", "smile", "star", "flyaway", "404"];

/**
 * Represents a count of items, where each key is a string and each value is a number.
 */
type Count = Record<string, number>;

/**
 * Represents a post with views.
 */
type PostWithViewCount = Post & {
  views: number;
};

export type {
  Count,
  Project,
  Emoticons,
  Biography,
  NavbarLink,
  PostWithViewCount,
  SocialProfiles,
  AcademicBackground,
  ProfessionalCertifications,
};
