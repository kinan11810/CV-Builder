// src/pages/CVbuilder/sections/Skills.tsx
import React, { useContext, useState } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import { CVContext } from '../../../context/CVContext';

const Skills: React.FC = () => {
  const { data, setData } = useContext(CVContext);
  const [skillInput, setSkillInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const skills = data.skills?.list || [];
  const experiences = data.experience?.entries || [];
  const educations = data.education?.entries || [];

  // دالة توليد الاقتراحات (محاكاة للذكاء الاصطناعي)
  const generateAISuggestions = () => {
    const suggestions: string[] = [];
    const commonSkills: Record<string, string[]> = {
      'javascript': ['JavaScript', 'React', 'Node.js', 'TypeScript'],
      'react': ['React', 'Redux', 'JSX', 'Frontend Development'],
      'python': ['Python', 'Django', 'Data Analysis', 'Machine Learning'],
      'manager': ['Team Leadership', 'Project Management', 'Strategic Planning'],
      'engineer': ['Problem Solving', 'Technical Design', 'Quality Assurance'],
      'bachelor': ['Research', 'Critical Thinking', 'Academic Writing'],
      'communication': ['Communication Skills', 'Public Speaking', 'Negotiation'],
      'marketing': ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics'],
    };

    // جمع النصوص من الخبرة والتعليم للبحث عن كلمات مفتاحية
    const allText = [
      ...experiences.map((e: any) => `${e.title} ${e.company} ${e.description}`),
      ...educations.map((e: any) => `${e.degree} ${e.field} ${e.school}`)
    ].join(' ').toLowerCase();

    Object.keys(commonSkills).forEach(keyword => {
      if (allText.includes(keyword)) {
        commonSkills[keyword].forEach(skill => {
          if (!skills.includes(skill) && !suggestions.includes(skill)) {
            suggestions.push(skill);
          }
        });
      }
    });

    return suggestions.slice(0, 8); // إظهار أول 8 اقتراحات
  };

  const addSkill = (skill?: string) => {
    const skillToAdd = skill || skillInput.trim();
    if (!skillToAdd || skills.includes(skillToAdd)) return;
    
    setData(prev => ({
      ...prev,
      skills: { ...prev.skills, list: [...(prev.skills?.list || []), skillToAdd] },
    }));
    setSkillInput('');
  };

  const removeSkill = (index: number) => {
    const updated = skills.filter((_, i) => i !== index);
    setData(prev => ({ ...prev, skills: { ...prev.skills, list: updated } }));
  };

  const suggestions = generateAISuggestions();

  return (
    <SectionWrapper title="Skills">
      {/* حقل الإدخال + زر الذكاء الاصطناعي */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
        <input
          type="text"
          value={skillInput}
          placeholder="Type a skill..."
          onChange={e => setSkillInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addSkill()}
          style={{ flex: 1, minWidth: '200px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={() => addSkill()} style={{ padding: '8px 16px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add</button>
        <button onClick={() => setShowSuggestions(!showSuggestions)} style={{ padding: '8px 16px', background: '#7c3aed', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
          ✨ AI Suggest
        </button>
      </div>

      {/* عرض الاقتراحات */}
      {showSuggestions && suggestions.length > 0 && (
        <div style={{ marginBottom: '15px', padding: '10px', background: '#f5f3ff', borderRadius: '6px', border: '1px solid #ddd6fe' }}>
          <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#5b21b6' }}>💡 Suggested based on your CV:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {suggestions.map((skill, idx) => (
              <button
                key={idx}
                onClick={() => addSkill(skill)}
                style={{
                  padding: '4px 12px',
                  background: 'white',
                  border: '1px solid #7c3aed',
                  color: '#7c3aed',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                + {skill}
              </button>
            ))}
          </div>
        </div>
      )}
      {showSuggestions && suggestions.length === 0 && (
        <p style={{ color: '#666', fontSize: '14px' }}>🤔 Add more details to Experience/Education for better suggestions.</p>
      )}

      {/* قائمة المهارات المضافة */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {skills.map((skill: string, idx: number) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#e0e7ff', padding: '6px 12px', borderRadius: '20px' }}>
            <span style={{ fontSize: '14px' }}>{skill}</span>
            <button onClick={() => removeSkill(idx)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
          </div>
        ))}
      </div>
      
      {skills.length === 0 && <p style={{ color: '#666', marginTop: '10px' }}>No skills added yet.</p>}
    </SectionWrapper>
  );
};

export default Skills;