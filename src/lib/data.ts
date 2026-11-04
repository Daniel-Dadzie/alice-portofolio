import type {
  NavItem,
  SkillGroup,
  ExperienceItem,
  EducationItem,
  Certification,
  QALearningArea,
  PersonalInfo,
} from './types';

// ─── Personal ────────────────────────────────────────────────────────────────

export const personal: PersonalInfo = {
  name: "Akoth Alice Ojuang'",
  title: 'ICT Professional | Web Technologies | Aspiring QA Tester',
  tagline: 'Thoughtful testing. Reliable technology. Better digital experiences.',
  heroHeadline: 'Thoughtful testing. Reliable technology. Better digital experiences.',
  heroSupporting: [
    "I'm an ICT professional with a background in web technologies, AI data annotation and technical support. I enjoy identifying inconsistencies, troubleshooting technical issues and helping to create reliable digital experiences.",
    "I'm developing a specialisation in software quality assurance and looking to apply my analytical thinking, technical foundation and attention to detail in a testing role.",
  ],
  languages: ['English', 'Swahili'],
  contact: {
    email: 'lizzyalice10@gmail.com',
    phone: '+254 718 356 439',
    location: 'Nairobi, Kenya',
    // linkedin and github intentionally omitted until confirmed URLs are supplied
  },
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'QA Journey', href: '#qa-journey' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    id: 'web-technologies',
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    skills: ['Windows (XP–11)', 'Linux'],
  },
  {
    id: 'productivity-tools',
    title: 'Productivity & Business Tools',
    skills: ['Microsoft Office Suite', 'QuickBooks'],
  },
  {
    id: 'systems-networking',
    title: 'Systems & Networking',
    skills: [
      'LAN setup',
      'Network configuration',
      'RJ45 cable termination',
      'Printer configuration',
    ],
  },
  {
    id: 'professional-skills',
    title: 'Professional Skills',
    skills: [
      'Technical documentation & reporting',
      'IT support & systems maintenance',
      'Data protection & cybersecurity awareness',
      'Analytical & critical thinking',
      'Effective communication',
      'Project organisation',
      'Adaptability',
    ],
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export const experience: ExperienceItem[] = [
  {
    id: 'smartbrains-tutor',
    title: 'Coding and Robotics Tutor',
    organisation: 'Stimulating Smartbrains',
    location: 'Nairobi, Kenya',
    period: 'August 2024 – Present',
    periodConfirmed: true,
    responsibilities: [
      'Delivered practical lessons in HTML, CSS, Scratch and coding fundamentals to learners across age groups.',
      'Guided students through identifying and resolving errors in their code, building a systematic approach to debugging.',
      'Introduced robotics concepts including sensors, actuators and microcontrollers.',
      'Evaluated student progress and maintained clear documentation of learning outcomes.',
      'Researched emerging coding trends and educational technologies to keep lesson content current.',
    ],
    transferableNote:
      'This role directly exercises skills central to quality assurance: identifying errors, systematic troubleshooting, analytical thinking, technical documentation and explaining findings clearly.',
  },
  {
    id: 'sama-annotator',
    title: 'Associate Data Annotator',
    organisation: 'Sama AI',
    location: 'Nairobi, Kenya',
    period: 'Dates to be confirmed',
    periodConfirmed: false,
    responsibilities: [
      'Annotated datasets to support AI model training and development.',
      'Identified patterns, inconsistencies and labelling errors within datasets.',
      'Applied quality guidelines and met productivity benchmarks consistently.',
      'Followed data security and privacy protocols.',
      'Documented workflows and contributed to training materials.',
    ],
    transferableNote:
      'Quality-focused, detail-oriented work requiring accuracy, structured processes and clear documentation — closely aligned with the mindset required in software testing.',
  },
  {
    id: 'gain-credit',
    title: 'Credit Control Assistant',
    organisation: 'Gain Ventures Ltd',
    location: null,
    period: 'Dates to be confirmed',
    periodConfirmed: false,
    responsibilities: [
      'Managed digital customer records with accuracy and consistency.',
      'Resolved customer issues and escalations, identifying root causes and communicating solutions clearly.',
      'Supported upselling and cross-selling activities through customer engagement.',
      'Collected and analysed customer feedback to identify recurring problems.',
    ],
    transferableNote:
      'Demonstrated structured problem resolution, record-keeping accuracy and clear professional communication.',
  },
  {
    id: 'zetech-ict',
    title: 'ICT Attaché',
    organisation: 'Zetech University',
    location: 'Ruiru, Kenya',
    period: 'Dates to be confirmed',
    periodConfirmed: false,
    responsibilities: [
      'Installed, configured and maintained Windows and Linux operating systems.',
      'Diagnosed and resolved hardware, software and network problems systematically.',
      'Assisted with LAN configuration and network maintenance.',
      'Configured printers and peripheral devices.',
      'Performed RJ45 cable termination.',
      'Assisted with data backup and system recovery procedures.',
      'Logged all technical issues and resolutions for reference and audit.',
      'Educated staff and students on the correct use of technology.',
    ],
    transferableNote:
      'Hands-on technical troubleshooting under real conditions: diagnosing problems, applying fixes, documenting outcomes and educating users — a practical foundation directly relevant to quality assurance.',
  },
];

// ─── Education ───────────────────────────────────────────────────────────────

export const education: EducationItem[] = [
  {
    id: 'zetech-diploma',
    qualification: 'Diploma in Business Information Technology',
    institution: 'Zetech University',
    location: 'Ruiru, Kenya',
    graduationDate: null, // not yet confirmed
    description:
      'Covered core disciplines in information technology, business computing, networking and systems management.',
  },
];

// ─── Certifications ──────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    id: 'ibm-cybersecurity',
    title: 'Cybersecurity Fundamentals',
    issuer: 'IBM',
    date: 'March – April 2026',
  },
  {
    id: 'sama-ai101',
    title: 'AI101 Course',
    issuer: 'Sama',
    date: 'July 2023',
  },
  {
    id: 'ajira-digital',
    title: 'Ajira Digital Programme',
    issuer: 'Ajira Digital',
    date: '2023',
  },
  {
    id: 'ict-authority',
    title: 'Basic Digital Skills',
    issuer: 'ICT Authority of Kenya',
    date: '2023',
  },
  {
    id: 'cisco-cybersecurity',
    title: 'Introduction to Cyber Security',
    issuer: 'Cisco Networking Academy',
    date: 'July 2021',
  },
];

// ─── QA Learning Journey ─────────────────────────────────────────────────────

export const qaLearningAreas: QALearningArea[] = [
  {
    id: 'manual-testing',
    title: 'Website Manual Testing',
    status: 'Planned',
    description:
      'Learning to design test cases, perform functional and exploratory testing, document defects and produce structured test reports for web applications.',
    tools: ['Browser DevTools', 'Spreadsheets / Test case documents'],
  },
  {
    id: 'api-testing',
    title: 'API Testing with Postman',
    status: 'Planned',
    description:
      'Learning to test REST API endpoints using HTTP methods, validate response codes and payloads, and document findings using Postman collections.',
    tools: ['Postman'],
  },
  {
    id: 'sql-validation',
    title: 'SQL & Database Validation',
    status: 'Planned',
    description:
      'Learning to write basic SQL queries to verify data integrity, check for inconsistencies and validate expected records.',
    tools: ['SQL (learning)'],
  },
  {
    id: 'chatbot-testing',
    title: 'AI Chatbot Testing',
    status: 'Planned',
    description:
      'Learning to evaluate conversational AI applications by testing intent recognition, context retention, edge cases and response consistency.',
    tools: ['Conversation testing frameworks', 'Manual exploratory methods'],
  },
];

