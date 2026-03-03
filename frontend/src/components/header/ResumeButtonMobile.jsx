import { useState, useEffect, useRef } from 'react';

export function ResumeButtonMobile() {
  return (
    <div className="download-cv">
      <a
        href="resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className='row gap10'>
          <p className="t-body5">Resume</p>
          <img src="icons/redirect.svg" alt="Open resume in new tab" />
        </div>
      </a>
    </div>
  );
}

export default ResumeButtonMobile;
