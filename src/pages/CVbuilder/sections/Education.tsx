import React, { useContext } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import { CVContext } from '../../../context/CVContext';

const Education = () => {
  const { data, setData } = useContext(CVContext);
  const educations = data.education.entries || [];

  const addEducation = () => {
    const newEntry = { school: '', degree: '', field: '', location: '', start: '', end: '', description: '' };
    setData(prev => ({
      ...prev,
      education: { ...prev.education, entries: [...educations, newEntry] },
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updated = [...educations];
    updated[index] = { ...updated[index], [field]: value };
    setData(prev => ({ ...prev, education: { ...prev.education, entries: updated } }));
  };

  const removeEducation = (index: number) => {
    const updated = educations.filter((_, i) => i !== index);
    setData(prev => ({ ...prev, education: { ...prev.education, entries: updated } }));
  };

  return (
    <SectionWrapper title="Education">
      {educations.length === 0 && <p className="text-gray-500 mb-4">Add your educational background.</p>}

      {educations.map((edu, idx) => (
        <div key={idx} className="mb-6 p-4 border rounded-lg bg-gray-50 relative">
          {educations.length > 1 && (
            <button onClick={() => removeEducation(idx)} className="absolute top-2 right-2 text-red-500 text-sm">✕</button>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input-field" placeholder="School / University" value={edu.school} onChange={e => updateEducation(idx, 'school', e.target.value)} />
            <input className="input-field" placeholder="Degree (e.g., Bachelor)" value={edu.degree} onChange={e => updateEducation(idx, 'degree', e.target.value)} />
            <input className="input-field" placeholder="Field of Study" value={edu.field} onChange={e => updateEducation(idx, 'field', e.target.value)} />
            <input className="input-field" placeholder="Location" value={edu.location} onChange={e => updateEducation(idx, 'location', e.target.value)} />
            
            <div className="flex gap-2">
              <input type="month" className="input-field" value={edu.start} onChange={e => updateEducation(idx, 'start', e.target.value)} />
              <input type="month" className="input-field" value={edu.end} onChange={e => updateEducation(idx, 'end', e.target.value)} />
            </div>
          </div>
          
          <textarea className="input-field mt-4 w-full" placeholder="Description, achievements, or relevant courses (optional)" rows={3} value={edu.description} onChange={e => updateEducation(idx, 'description', e.target.value)} />
          
          {/* AI Button Placeholder */}
          <button className="btn-ai mt-2 text-sm">✨ Enhance with AI</button>
        </div>
      ))}

      <button onClick={addEducation} className="btn-secondary mt-4 w-full">+ Add Another Education</button>
    </SectionWrapper>
  );
};

export default Education;