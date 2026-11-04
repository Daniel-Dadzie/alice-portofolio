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
    period: null,
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
    period: null,
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
    period: null,
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
    id: 'website-manual-testing',
    title: 'Website Manual Testing',
    status: 'Planned',
    description:
      'Establishing a disciplined approach to evaluating responsive web applications through structured manual testing techniques, systematic edge-case discovery, and clear defect documentation.',
    keyConcepts: [
      'Functional testing',
      'Positive & negative testing',
      'Boundary-value analysis',
      'Equivalence partitioning',
      'Form validation',
      'Exploratory testing',
      'Basic regression testing',
      'Defect reporting',
    ],
    skillsBeingDeveloped: [
      'Test scenario authoring',
      'Expected vs. actual result analysis',
      'Defect severity & priority triage',
      'Cross-browser verification',
    ],
    targetDeliverable:
      'Structured test scenarios, execution log, and verified defect reports on a live web application.',
  },
  {
    id: 'api-testing-postman',
    title: 'API Testing with Postman',
    status: 'Planned',
    description:
      'Learning to validate backend REST API endpoints, inspect request and response payloads, and assess service reliability independently from the graphical user interface.',
    keyConcepts: [
      'HTTP methods (GET, POST, PUT, PATCH, DELETE)',
      'Headers & authentication fundamentals',
      'Query parameters',
      'Request bodies & JSON payloads',
      'HTTP status codes (2xx, 4xx, 5xx)',
      'Response payload validation',
      'Negative & boundary testing',
      'Authentication fundamentals',
    ],
    skillsBeingDeveloped: [
      'Postman workspace & collection design',
      'API contract validation',
      'Header & token configuration',
      'Status code verification',
    ],
    targetDeliverable:
      'Documented Postman collection with parameterized requests, status validations, and negative test coverage.',
  },
  {
    id: 'sql-database-validation',
    title: 'SQL Database Validation',
    status: 'Planned',
    description:
      'Learning to verify data integrity directly at the database layer to confirm frontend transactions correctly write, update, filter, and persist records.',
    keyConcepts: [
      'SELECT queries',
      'WHERE clause filtering',
      'ORDER BY sorting',
      'NULL values identification',
      'Duplicate records detection',
      'Data consistency checks',
      'Basic validation queries',
    ],
    skillsBeingDeveloped: [
      'Data integrity verification',
      'Backend-to-frontend reconciliation',
      'Boundary query formulation',
      'Data anomaly detection',
    ],
    targetDeliverable:
      'Validation query script verifying database state consistency against expected application outcomes.',
  },
  {
    id: 'ai-chatbot-testing',
    title: 'AI Chatbot Testing',
    status: 'Planned',
    description:
      'Applying software quality assurance principles to conversational AI interfaces, chatbots, and automation workflows — directly aligned with SimplyDone Africa’s core products.',
    keyConcepts: [
      'Intent recognition accuracy',
      'Conversation flows & branch testing',
      'Context retention across multi-turn dialogs',
      'Invalid & malformed inputs',
      'Unexpected questions handling',
      'Fallback behaviour validation',
      'Response consistency & tone',
      'Edge cases discovery',
    ],
    skillsBeingDeveloped: [
      'Conversational flow auditing',
      'Boundary & intent stress-testing',
      'Multi-turn dialog verification',
      'Fallback path validation',
    ],
    targetDeliverable:
      'Conversation test matrix with multi-turn transcripts, edge-case evaluations, and fallback behavior audits.',
  },
];
