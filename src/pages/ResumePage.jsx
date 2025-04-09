import React from 'react';

export default function ResumePage() {
  const resumeUrl = '/resume.pdf'; // Path to the PDF file in the public folder

  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      {/* Embed the PDF for viewing */}
      <div style={{ height: '600px', border: '1px solid #ccc', marginBottom: '20px' }}>
        <iframe
          src={resumeUrl}
          title="Resume"
          style={{ width: '100%', height: '100%' }}
          frameBorder="0"
        ></iframe>
      </div>
      {/* Download button */}
      <a href={resumeUrl} download="My_Resume.pdf" className="btn btn-primary">
        Download Resume
      </a>
    </div>
  );
}