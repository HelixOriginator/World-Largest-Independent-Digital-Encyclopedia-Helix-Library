export enum Category {
  GOVERNANCE = 'Governance & Policy',
  ELECTIONS = 'Election Commission',
  TECHNOLOGY = 'Technology & Innovation',
  PHILOSOPHY = 'Philosophy & Ethics',
  SPIRITUALITY = 'Spirituality & Consciousness',
  HISTORY = 'History & Culture',
  EDUCATION = 'Education & Learning',
  BUSINESS = 'Business & Economics',
  SCIENCE = 'Science & Nature',
  ARTS = 'Arts & Literature'
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

export interface ChartData {
  name: string;
  value: number;
  fill: string;
}