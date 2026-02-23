// src/context/CVContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

/* =========================
   Data Types
========================= */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  country: string;
  countryCode: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  summary: string; // Professional Summary (Manual + AI)
}

export interface JobEntry {
  title: string;
  company: string;
  location: string;
  industry: string; // Used for AI only
  start: string;
  end: string;
  description: string;
  isCurrent: boolean; // Still working here
}

export interface EducationEntry {
  school: string;
  degree: string;
  field: string;
  location: string;
  start: string;
  end: string;
  description: string;
}

export interface LanguageEntry {
  name: string;
  level: string; // Beginner | Intermediate | Advanced | Fluent | Native
}

export interface CVData {
  personalInfo: PersonalInfo;
  experience: { jobs: JobEntry[] };
  education: { entries: EducationEntry[] };
  skills: string[];
  languages: LanguageEntry[];
}

/* =========================
   Context Type
========================= */

interface CVContextType {
  data: CVData;
  setData: React.Dispatch<React.SetStateAction<CVData>>;
}

/* =========================
   Default Initial Data
========================= */

const defaultData: CVData = {
  personalInfo: {
    firstName: '',
    lastName: '',
    country: '',
    countryCode: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    summary: '', // Summary stored here
  },
  experience: {
    jobs: [],
  },
  education: {
    entries: [],
  },
  skills: [],
  languages: [],
};

/* =========================
   Create Context
========================= */

export const CVContext = createContext<CVContextType>({
  data: defaultData,
  setData: () => {},
});

/* =========================
   Provider
========================= */

export const CVProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CVData>(defaultData);

  return (
    <CVContext.Provider value={{ data, setData }}>
      {children}
    </CVContext.Provider>
  );
};
