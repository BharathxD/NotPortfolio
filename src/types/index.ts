type UniqueIdentifier = string | number;

interface SocialProfiles {
  platform: string;
  url: string;
}

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

interface AcademicBackground {
  institution: string;
  degreeObtained: string;
  location: string;
  gradePointAverage: string;
  majorSubject: string;
  studyPeriod: string;
}

interface ProfessionalCertifications {
  name: string;
  issuingOrganization: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
}

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

type Emoticons = ["angry", "happy", "disappointed", "neutral", "smile", "star", "404"];

export type { Biography, Project, AcademicBackground, SocialProfiles, ProfessionalCertifications, Emoticons };
