import { links } from './';

export type SectionName = (typeof links)[number]['name'];

export type ProficienciesTab = 'Skills' | 'Certifications';

export type Theme = 'light' | 'dark';
