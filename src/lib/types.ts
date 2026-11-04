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
  period: string; // "Aug 2024 – Present" or "Dates to be confirmed"
  periodConfirmed: boolean; // false triggers a subtle visual indicator
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

// ─── QA Learning Journey ─────────────────────────────────────────────────────

export type QAStatus =
  | 'Planned'
  | 'In Progress'
  | 'Executed'
  | 'Passed'
  | 'Failed'
  | 'Blocked';

export interface QALearningArea {
  id: string;
  title: string;
  status: QAStatus;
  description: string;
  tools: string[]; // tools being learned, NOT claimed as proficiencies
  evidenceUrl?: string; // only populated when real evidence exists
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

