import React, { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

const SectionWrapper = ({ title, children }: Props) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '20px'
      }}
    >
      <h2 style={{ marginBottom: '12px' }}>{title}</h2>
      {children}
    </div>
  );
};

export default SectionWrapper;
