import React, { useContext } from 'react';
import SectionWrapper from '../../../components/SectionWrapper';
import { CVContext } from '../../../context/CVContext';

const Experience = () => {
  const { data, setData } = useContext(CVContext);
  const jobs = data.experience.jobs;

  // دالة لإضافة وظيفة جديدة فارغة
  const addJob = () => {
    setData(prev => ({
      ...prev,
      experience: {
        ...prev.experience,
        jobs: [
          ...prev.experience.jobs,
          { title: '', company: '', start: '', end: '', description: '' },
        ],
      },
    }));
  };

  // دالة لتعديل أي حقل في وظيفة محددة
  const updateJob = (index: number, field: string, value: string) => {
    const updatedJobs = [...jobs];
    updatedJobs[index] = { ...updatedJobs[index], [field]: value };
    setData(prev => ({
      ...prev,
      experience: { ...prev.experience, jobs: updatedJobs },
    }));
  };

  return (
    <SectionWrapper title="Experience">
      {jobs.length === 0 && <p>Add your professional experience here.</p>}
      {jobs.map((job, idx) => (
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
            <label>Job Title:</label>
            <input
              type="text"
              value={job.title}
              onChange={e => updateJob(idx, 'title', e.target.value)}
              placeholder="Job Title"
            />
          </div>
          <div>
            <label>Company:</label>
            <input
              type="text"
              value={job.company}
              onChange={e => updateJob(idx, 'company', e.target.value)}
              placeholder="Company"
            />
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="month"
              value={job.start}
              onChange={e => updateJob(idx, 'start', e.target.value)}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="month"
              value={job.end}
              onChange={e => updateJob(idx, 'end', e.target.value)}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={job.description}
              onChange={e => updateJob(idx, 'description', e.target.value)}
              placeholder="Job Description"
            />
          </div>
        </div>
      ))}

      <button
        style={{ marginTop: '10px' }}
        onClick={addJob}
      >
        + Add Another Job
      </button>
    </SectionWrapper>
  );
};

export default Experience;
