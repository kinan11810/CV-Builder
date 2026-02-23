import React, { useContext, useState } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import { CVContext } from '../../../context/CVContext';

const Languages = () => {
  const { data, setData } = useContext(CVContext);
  const languages = data.languages || []; // تأكد أنها مصفوفة

  const [newLang, setNewLang] = useState('');
  const [newLevel, setNewLevel] = useState('Intermediate');

  const addLanguage = () => {
    if (!newLang.trim()) return;
    setData(prev => ({
      ...prev,
      // نحفظ الآن كائن يحتوي على الاسم والمستوى
      languages: [...prev.languages, { name: newLang.trim(), level: newLevel }],
    }));
    setNewLang('');
  };

  const removeLanguage = (index: number) => {
    const updated = languages.filter((_, i) => i !== index);
    setData(prev => ({ ...prev, languages: updated }));
  };

  return (
    <SectionWrapper title="Languages">
      {languages.length === 0 && <p style={{ color: '#666' }}>Add the languages you speak here.</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '15px' }}>
        {languages.map((lang: any, idx: number) => (
          <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f3f4f6', padding: '8px 12px', borderRadius: '6px' }}>
            <div>
              <strong>{lang.name}</strong> 
              <span style={{ color: '#666', fontSize: '0.9em', marginLeft: '8px' }}>({lang.level})</span>
            </div>
            <button onClick={() => removeLanguage(idx)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold' }}>✕</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Language (e.g. English)"
          value={newLang}
          onChange={e => setNewLang(e.target.value)}
          style={{ flex: 1, minWidth: '150px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <select
          value={newLevel}
          onChange={e => setNewLevel(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', background: 'white' }}
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Fluent">Fluent</option>
          <option value="Native">Native</option>
        </select>
        <button onClick={addLanguage} style={{ padding: '8px 16px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add
        </button>
      </div>
    </SectionWrapper>
  );
};

export default Languages;