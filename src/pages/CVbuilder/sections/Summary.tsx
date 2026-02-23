// src/pages/CVbuilder/sections/Summary.tsx
import React, { useContext } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import { CVContext } from '../../../context/CVContext';

const Summary: React.FC = () => {
  const { data, setData } = useContext(CVContext);

  // تحديث الملخص في personalInfo
  const handleChange = (value: string) => {
    setData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        summary: value,
      },
    }));
  };

  const handleGenerateAI = () => {
    // لاحقاً استدعاء خدمة AI
    alert('AI summary generation will be implemented later');
  };

  return (
    <SectionWrapper title="Professional Summary">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <textarea
          rows={4}
          placeholder="Write a short professional summary about yourself, e.g., Experienced Service Advisor with 10 years of experience..."
          value={data.personalInfo.summary || ''}
          onChange={e => handleChange(e.target.value)}
          style={{ width: '100%', padding: '10px', fontSize: '14px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <div style={{ marginTop: '10px' }}>
          <button type="button" onClick={handleGenerateAI}>
            Generate with AI
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Summary;
