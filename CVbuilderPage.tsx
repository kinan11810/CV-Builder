import React, { useState } from 'react';
import PersonalInfo from './sections/PersonalInfo';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import PaymentButton from '../../components/PaymentButton';

const steps = [
  { title: 'Personal Info', component: PersonalInfo },
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
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        {steps.map((step, idx) => {
          const isCompleted = idx < currentStep;
          const isActive = idx === currentStep;
          return (
            <div
              key={idx}
              onClick={() => setCurrentStep(idx)}
              style={{
                flex: 1,
                padding: '10px',
                margin: '0 4px',
                textAlign: 'center',
                cursor: 'pointer',
                borderRadius: '5px',
                backgroundColor: isActive ? '#007bff' : isCompleted ? '#28a745' : '#ddd',
                color: 'white',
                fontWeight: isActive || isCompleted ? 'bold' : 'normal',
              }}
            >
              {step.title}
            </div>
          );
        })}
      </div>

      {/* Section المعروض حاليا */}
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

      {/* أزرار التنقل */}
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
        {currentStep > 0 && (
          <button onClick={() => setCurrentStep(prev => prev - 1)}>Back</button>
        )}
        {currentStep < steps.length - 1 && (
          <button onClick={() => setCurrentStep(prev => prev + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default CVbuilderPage;
