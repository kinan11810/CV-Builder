// src/pages/CVbuilder/PreviewCV.tsx
import React from "react";
import { CVContext } from "../../context/CVContext";

const PreviewCV = () => {
  const { data } = React.useContext(CVContext);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* ================= Personal Info ================= */}
      <section style={{ marginBottom: "20px" }}>
        <h2>
          {data.personalInfo.firstName} {data.personalInfo.lastName}
        </h2>
        <p>
          {data.personalInfo.city}, {data.personalInfo.country} |{" "}
          {data.personalInfo.email} | {data.personalInfo.phone}
        </p>
      </section>

      {/* ================= Summary ================= */}
      {data.personalInfo.summary && (
        <section style={{ marginBottom: "20px" }}>
          <h3>Professional Summary</h3>
          <p>{data.personalInfo.summary}</p>
        </section>
      )}

      {/* ================= Experience ================= */}
      {data.experience.jobs.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h3>Experience</h3>
          {data.experience.jobs.map((job, idx) => (
            <div key={idx} style={{ marginBottom: "10px" }}>
              <strong>{job.title}</strong> - {job.company}, {job.location} <br />
              <small>
                {job.start} - {job.isCurrent ? "Present" : job.end}
              </small>
              <p>{job.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* ================= Education ================= */}
      {data.education.entries.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h3>Education</h3>
          {data.education.entries.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: "10px" }}>
              <strong>{edu.degree}</strong> - {edu.school}, {edu.location} <br />
              <small>
                {edu.start} - {edu.end}
              </small>
              <p>{edu.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* ================= Skills ================= */}
      {data.skills.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h3>Skills</h3>
          <ul>
            {data.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* ================= Languages ================= */}
      {data.languages.length > 0 && (
        <section style={{ marginBottom: "20px" }}>
          <h3>Languages</h3>
          <ul>
            {data.languages.map((lang, idx) => (
              <li key={idx}>
                {lang.name} ({lang.level})
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default PreviewCV;
