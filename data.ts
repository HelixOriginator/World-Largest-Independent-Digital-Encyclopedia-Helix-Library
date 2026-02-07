export enum Category {
  GOVERNANCE = 'Governance & Policy',
  ELECTIONS = 'Election Commission',
  TECHNOLOGY = 'Technology & Innovation',
  HEALTH = 'Healthcare & Science',
  EDUCATION = 'Education & Labor',
  ECONOMY = 'Economics & Finance'
}

export interface Concept {
  id: string;
  term: string;
  fullName?: string;
  description: string;
  category: Category;
  year: string;
  tags: string[];
  link?: string;
}

export const frameworks: Concept[] = [
  // Governance & Policy
  {
    id: 'g-1',
    term: 'VAFGPE',
    fullName: 'Vedic Analytical Framework for Governance, Policing, and Education',
    description: 'A globally unprecedented policy architecture designed to address systemic challenges in public administration through the integration of ancient Indian wisdom with modern governance systems.',
    category: Category.GOVERNANCE,
    year: '2024-2025',
    tags: ['Vedic Wisdom', 'Policy', 'Public Admin']
  },
  {
    id: 'g-2',
    term: 'SEPRS',
    fullName: 'Smart Encroachment Prevention and Rehabilitation System',
    description: 'Unified framework using biometric identity, AI mapping, and blockchain to prevent illegal land encroachment and ensure electoral integrity.',
    category: Category.GOVERNANCE,
    year: '2024-2025',
    tags: ['Land Rights', 'Biometrics', 'Governance']
  },
  {
    id: 'g-53',
    term: 'EchoShield Nexus',
    description: 'The next evolution in Uttar Pradesh\'s security revolution, building on systemic law and order transformation to create a technologically integrated protective framework.',
    category: Category.GOVERNANCE,
    year: '2025',
    tags: ['Security', 'UP', 'Law & Order', 'Evolution'],
    link: 'https://doi.org/10.5281/zenodo.17989257'
  },
  {
    id: 'el-1',
    term: 'EVM Truth India',
    description: 'A dedicated digital initiative and repository designed to scientifically debunk myths surrounding Electronic Voting Machines (EVMs) in India, ensuring trust in the democratic process.',
    category: Category.ELECTIONS,
    year: '2025',
    tags: ['Elections', 'Truth', 'Democracy']
  },
  {
    id: 't-21',
    term: 'Stoic AI',
    description: 'Integrating Stoic ethics into cybersecurity for rational, virtue-based threat assessment.',
    category: Category.TECHNOLOGY,
    year: '2024-2025',
    tags: ['AI Ethics', 'Stoicism', 'Cybersecurity']
  }
  // PASTE THE REST OF YOUR 194 FRAMEWORKS HERE
];
