import React, { useContext } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import { CVContext } from '../../../context/CVContext';

const Education = () => {
  const { data, setData } = useContext(CVContext);
  const educations = data.education.entries || [];

  // دالة لإضافة سجل تعليمي جديد
  const addEducation = () => {
    const newEntry = { school: '', degree: '', field: '', start: '', end: '' };
    setData(prev => ({
      ...prev,
      education: {
        ...prev.education,
        entries: [...educations, newEntry],
      },
    }));
  };

  // دالة لتعديل أي حقل في سجل تعليمي محدد
  const updateEducation = (index: number, field: string, value: string) => {
    const updated = [...educations];
    updated[index] = { ...updated[index], [field]: value };
    setData(prev => ({
      ...prev,
      education: { ...prev.education, entries: updated },
    }));
  };

  return (
    <SectionWrapper title="Education">
      {educations.length === 0 && <p>Add your educational background here.</p>}

      {educations.map((edu, idx) => (
        <div
          key={idx}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '12px',
            borderRadius: '5px',
          }}
        >
          <div>
            <label>School/University:</label>
            <input
              type="text"
              value={edu.school}
              onChange={e => updateEducation(idx, 'school', e.target.value)}
              placeholder="School/University"
            />
          </div>
          <div>
            <label>Degree:</label>
            <input
              type="text"
              value={edu.degree}
              onChange={e => updateEducation(idx, 'degree', e.target.value)}
              placeholder="Degree"
            />
          </div>
          <div>
            <label>Field of Study:</label>
            <input
              type="text"
              value={edu.field}
              onChange={e => updateEducation(idx, 'field', e.target.value)}
              placeholder="Field of Study"
            />
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="month"
              value={edu.start}
              onChange={e => updateEducation(idx, 'start', e.target.value)}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="month"
              value={edu.end}
              onChange={e => updateEducation(idx, 'end', e.target.value)}
            />
          </div>
        </div>
      ))}

      <button style={{ marginTop: '10px' }} onClick={addEducation}>
        + Add Another Education
      </button>
    </SectionWrapper>
  );
};

export default Education;
