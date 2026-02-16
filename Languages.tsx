import React, { useContext, useState } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import { CVContext } from '../../../context/CVContext';

const Languages = () => {
  const { data, setData } = useContext(CVContext);
  const languages = data.languages;

  const [newLang, setNewLang] = useState('');

  const addLanguage = () => {
    if (!newLang.trim()) return;
    setData(prev => ({
      ...prev,
      languages: [...prev.languages, newLang.trim()],
    }));
    setNewLang('');
  };

  const removeLanguage = (index: number) => {
    const updated = languages.filter((_, i) => i !== index);
    setData(prev => ({ ...prev, languages: updated }));
  };

  return (
    <SectionWrapper title="Languages">
      {languages.length === 0 && <p>Add the languages you speak here.</p>}

      <ul>
        {languages.map((lang, idx) => (
          <li key={idx} style={{ marginBottom: '6px' }}>
            {lang}{' '}
            <button onClick={() => removeLanguage(idx)} style={{ marginLeft: '8px' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="Add a language"
          value={newLang}
          onChange={e => setNewLang(e.target.value)}
        />
        <button onClick={addLanguage}>Add Language</button>
      </div>
    </SectionWrapper>
  );
};

export default Languages;
