// src/pages/CVBuilder/sections/Experience.tsx
import React, { useContext, useState } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import { CVContext } from '../../../context/CVContext';
import { generateExperienceDescription } from '../../../services/aiService';

interface Job {
  title: string;
  company: string;
  location: string;
  industry: string;
  from: string;
  to: string;
  stillWorking: boolean;
  description: string;
}

const Experience: React.FC = () => {
  const { data, setData } = useContext(CVContext);

  const [jobs, setJobs] = useState<Job[]>(
    data.experience.jobs.length
      ? data.experience.jobs.map(j => ({
          title: j.title || '',
          company: j.company || '',
          location: j.location || '',
          industry: j.industry || '',
          from: j.start || '',
          to: j.end || '',
          stillWorking: false,
          description: j.description || '',
        }))
      : [
          {
            title: '',
            company: '',
            location: '',
            industry: '',
            from: '',
            to: '',
            stillWorking: false,
            description: '',
          },
        ]
  );

  const updateJob = (index: number, field: keyof Job, value: any) => {
    const updatedJobs = [...jobs];
    updatedJobs[index][field] = value;

    if (field === 'stillWorking' && value === true) {
      updatedJobs[index].to = '';
    }

    setJobs(updatedJobs);
    setData(prev => ({
      ...prev,
      experience: {
        jobs: updatedJobs.map(j => ({
          title: j.title,
          company: j.company,
          start: j.from,
          end: j.to,
          description: j.description,
          location: j.location,
          industry: j.industry,
        })),
      },
    }));
  };

  const addJob = () => {
    const newJob: Job = {
      title: '',
      company: '',
      location: '',
      industry: '',
      from: '',
      to: '',
      stillWorking: false,
      description: '',
    };
    const updatedJobs = [...jobs, newJob];
    setJobs(updatedJobs);
    setData(prev => ({
      ...prev,
      experience: {
        jobs: updatedJobs.map(j => ({
          title: j.title,
          company: j.company,
          start: j.from,
          end: j.to,
          description: j.description,
          location: j.location,
          industry: j.industry,
        })),
      },
    }));
  };

  const removeJob = (index: number) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    setData(prev => ({
      ...prev,
      experience: {
        jobs: updatedJobs.map(j => ({
          title: j.title,
          company: j.company,
          start: j.from,
          end: j.to,
          description: j.description,
          location: j.location,
          industry: j.industry,
        })),
      },
    }));
  };

  const handleGenerateAI = async (index: number) => {
    const job = jobs[index];
    const description = await generateExperienceDescription(job);
    updateJob(index, 'description', description);
  };

  return (
    <SectionWrapper title="Experience">
      {jobs.length === 0 && <p>Add your professional experience here.</p>}

      {jobs.map((job, idx) => (
        <div
          key={idx}
          style={{
            border: '1px solid #ccc',
            padding: '15px',
            marginBottom: '12px',
            borderRadius: '5px',
          }}
        >
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Job Title"
              value={job.title}
              onChange={e => updateJob(idx, 'title', e.target.value)}
            />
            <input
              type="text"
              placeholder="Company Name"
              value={job.company}
              onChange={e => updateJob(idx, 'company', e.target.value)}
            />
            <input
              type="text"
              placeholder="Location"
              value={job.location}
              onChange={e => updateJob(idx, 'location', e.target.value)}
            />
            <input
              type="text"
              placeholder="Industry (for AI)"
              value={job.industry}
              onChange={e => updateJob(idx, 'industry', e.target.value)}
            />
          </div>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <input
              type="month"
              value={job.from}
              onChange={e => updateJob(idx, 'from', e.target.value)}
            />
            {!job.stillWorking && (
              <input
                type="month"
                value={job.to}
                onChange={e => updateJob(idx, 'to', e.target.value)}
              />
            )}
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input
                type="checkbox"
                checked={job.stillWorking}
                onChange={e => updateJob(idx, 'stillWorking', e.target.checked)}
              />
              Still working here
            </label>
          </div>

          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
          >
            <textarea
              placeholder="Job Description"
              value={job.description}
              onChange={e => updateJob(idx, 'description', e.target.value)}
              rows={4}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="button" onClick={() => handleGenerateAI(idx)}>
                Generate Automatically
              </button>
              <button
                type="button"
                onClick={() => alert('Enhance Existing will be implemented later')}
              >
                Enhance Existing
              </button>
            </div>
          </div>

          <div style={{ marginTop: '10px' }}>
            <button type="button" onClick={() => removeJob(idx)}>
              Remove Job
            </button>
          </div>
        </div>
      ))}

      <button type="button" onClick={addJob} style={{ marginTop: '10px' }}>
        + Add Another Job
      </button>
    </SectionWrapper>
  );
};

export default Experience;
