import { type Post } from "content-layer/generated";

/**
 * A unique identifier can be either a string or a number.
 */
type UniqueIdentifier = string | number;

/**
 * Represents social profiles of a user.
 */
interface SocialProfiles {
  /** The platform of the social profile, can be either LinkedIn or Github. */
  platform: "LinkedIn" | "Github";
  /** The URL of the social profile. */
  url: string;
  /** The URL of the image of the social profile. */
  imageUrl: string;
  /** The URL of the blurred data of the image of the social profile. Can be null. */
  blurDataUrl: string | null;
}

/**
 * Represents a project.
 */
interface Project {
  /** The unique identifier of the project. */
  id: UniqueIdentifier;
  /** The name of the project. */
  name: string;
  /** The tagline of the project. */
  tagline: string;
  /** The URL of the project. */
  projectUrl: string;
  /** The Github URL of the project. */
  github: string;
  /** The number of pictures in the project. */
  noOfPictures: number;
  /** The points of the project. */
  points: string[];
  /** The technology stack of the project. */
  stack: string[];
}

/**
 * Represents the academic background of a user.
 */
interface AcademicBackground {
  /** The institution of the academic background. */
  institution: string;
  /** The degree obtained in the academic background. */
  degreeObtained: string;
  /** The location of the academic background. */
  location: string;
  /** The grade point average of the academic background. */
  gradePointAverage: string;
  /** The major subject of the academic background. */
  majorSubject: string;
  /** The study period of the academic background. */
  studyPeriod: string;
}

/**
 * Represents a professional certification of a user.
 */
interface ProfessionalCertifications {
  /** The name of the certification. */
  name: string;
  /** The organization that issued the certification. */
  issuingOrganization: string;
  /** The date the certification was issued. */
  issueDate: string;
  /** The ID of the certification. */
  credentialId: string;
  /** The URL of the certification. */
  credentialUrl: string;
}

/**
 * Represents the biography of a user.
 */
interface Biography {
  /** The full name of the user. */
  fullName: string;
  /** The profession of the user. */
  profession: string;
  /** The contact email of the user. */
  contactEmail: string;
  /** The contact number of the user. */
  contactNumber: string;
  /** The social profiles of the user. */
  socialProfiles: SocialProfiles[];
  /** The link to the resume of the user. */
  resumeLink: string;
  /** The personal description of the user. */
  personalDescription: string;
  /** The academic background of the user. */
  academicBackground: AcademicBackground;
  /** The portfolio projects of the user. */
  portfolioProjects: Project[];
  /** The professional certifications of the user. */
  professionalCertifications: ProfessionalCertifications[];
}

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
