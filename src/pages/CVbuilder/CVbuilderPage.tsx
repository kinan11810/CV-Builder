// src/pages/CVbuilder/CVbuilderPage.tsx
import React, { useState } from 'react';
import PersonalInfo from './sections/PersonalInfo';
import Summary from './sections/Summary';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import PaymentButton from '../../components/PaymentButton';
import PreviewCV from './PreviewCV'; // ✅ إضافة PreviewCV

const steps = [
  { title: 'Personal Info', component: PersonalInfo },
  { title: 'Summary', component: Summary },
  { title: 'Experience', component: Experience },
  { title: 'Education', component: Education },
  { title: 'Skills', component: Skills },
  { title: 'Languages', component: Languages },
  { title: 'Payment', component: null },
];

const CVbuilderPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const StepComponent = steps[currentStep].component;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Stepper */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '30px',
          flexWrap: 'wrap',
          gap: '5px',
        }}
      >
        {steps.map((step, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;
          return (
            <div
              key={idx}
              onClick={() => setCurrentStep(idx)}
              style={{
                flex: 1,
                minWidth: '80px',
                padding: '10px 5px',
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '5px',
                backgroundColor: isActive
                  ? '#007bff'
                  : isCompleted
                  ? '#28a745'
                  : '#ddd',
                color: 'white',
                fontWeight: isActive || isCompleted ? 'bold' : 'normal',
                fontSize: '14px',
              }}
            >
              {step.title}
            </div>
          );
        })}
      </div>

      {/* Current Section */}
      <div style={{ minHeight: '300px' }}>
        {StepComponent && <StepComponent />}

        {steps[currentStep].title === 'Payment' && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h2>Final Step - Payment</h2>
            <p>Please proceed to payment to download your CV.</p>
            <PaymentButton item="cv-download" price={10} />
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(prev => prev - 1)}
            style={{ padding: '10px 20px', cursor: 'pointer' }}
          >
            Back
          </button>
        )}

        {currentStep < steps.length - 1 && (
          <button
            onClick={() => setCurrentStep(prev => prev + 1)}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            Next
          </button>
        )}
      </div>

      {/* ===== PreviewCV: كل التغييرات ستظهر هنا بما فيها Summary ===== */}
      <PreviewCV />
    </div>
  );
};

export default CVbuilderPage;
