import React, { useContext, useState } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import { CVContext } from '../../../context/CVContext';

const Skills = () => {
  const { data, setData } = useContext(CVContext);
  const skills = data.skills;

  const [newSkill, setNewSkill] = useState('');

  const addSkill = () => {
    if (!newSkill.trim()) return;
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, newSkill.trim()],
    }));
    setNewSkill('');
  };

  const removeSkill = (index: number) => {
    const updated = skills.filter((_, i) => i !== index);
    setData(prev => ({ ...prev, skills: updated }));
  };

  return (
    <SectionWrapper title="Skills">
      {skills.length === 0 && <p>Add your professional skills here.</p>}

      <ul>
        {skills.map((skill, idx) => (
          <li key={idx} style={{ marginBottom: '6px' }}>
            {skill}{' '}
            <button onClick={() => removeSkill(idx)} style={{ marginLeft: '8px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Add a skill"
          value={newSkill}
          onChange={e => setNewSkill(e.target.value)}
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
