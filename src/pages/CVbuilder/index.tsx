import React from 'react';
import PersonalInfo from './sections/PersonalInfo';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import { useNavigate } from 'react-router-dom';

const CVbuilderPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <PersonalInfo />
      <Experience />
      <Education />
      <Skills />
      <Languages />

      {/* Final Button to Payment Page */}
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <button
          onClick={() => navigate('/payment')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default CVbuilderPage;
