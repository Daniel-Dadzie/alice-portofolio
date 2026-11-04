// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

// ─── Skills ──────────────────────────────────────────────────────────────────

export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

// ─── Experience ──────────────────────────────────────────────────────────────

export interface ExperienceItem {
  id: string;
  title: string;
  organisation: string;
  location: string | null;
  period: string | null; // e.g. "August 2024 – Present", or null if unconfirmed
  periodConfirmed: boolean;
  responsibilities: string[];
  transferableNote: string;
}

// ─── Education ───────────────────────────────────────────────────────────────

export interface EducationItem {
  id: string;
  qualification: string;
  institution: string;
  location: string;
  graduationDate: string | null; // null = not confirmed
  description: string;
}

// ─── Certifications ──────────────────────────────────────────────────────────

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string; // optional — only when confirmed
}

// ─── QA Learning Journey & Future Completed Projects ────────────────────────

export type QAStatus =
  | 'Planned'
  | 'Learning'
  | 'In Progress'
  | 'Executed'
  | 'Passed'
  | 'Failed'
  | 'Blocked';

export interface QACompletedProject {
  id: string;
  title: string;
  applicationUnderTest: string;
  testingScope: string;
  testingApproach: string;
  testCasesCount?: number;
  bugReportsCount?: number;
  executionStatus: 'Executed' | 'Passed' | 'Failed';
  summaryOfFindings: string;
  lessonsLearned?: string;
  evidenceUrl?: string;
  reportDate?: string;
}

export interface QALearningArea {
  id: string;
  title: string;
  status: QAStatus;
  description: string;
  keyConcepts: string[]; // Core syllabus concepts being learned
  skillsBeingDeveloped: string[]; // Competency focus areas
  targetDeliverable: string; // The genuine exercise output to be produced
  completedProject?: QACompletedProject; // Populated only when genuine evidence exists
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string; // undefined = hidden from UI
  github?: string; // undefined = hidden from UI
}

// ─── Personal ────────────────────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  heroHeadline: string;
  heroSupporting: string[]; // array of paragraphs
  languages: string[];
  contact: ContactInfo;
}
