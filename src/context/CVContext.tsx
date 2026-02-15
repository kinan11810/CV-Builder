import React, { createContext, useState, ReactNode } from 'react';

// نوع البيانات المشتركة
interface CVData {
  personalInfo: {
    firstName: string;
    lastName: string;
    country: string;
    countryCode: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  experience: {
    jobs: { title: string; company: string; start: string; end: string; description: string }[];
  };
  education: any; // لاحقًا يمكن تحديد النوع
  skills: string[];
  languages: string[];
}

interface CVContextType {
  data: CVData;
  setData: React.Dispatch<React.SetStateAction<CVData>>;
}

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
  },
  experience: { jobs: [] },
  education: {},
  skills: [],
  languages: [],
};

export const CVContext = createContext<CVContextType>({
  data: defaultData,
  setData: () => {},
});

export const CVProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<CVData>(defaultData);

  return (
    <CVContext.Provider value={{ data, setData }}>
      {children}
    </CVContext.Provider>
  );
};
