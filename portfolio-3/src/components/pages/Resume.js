import React, {useState} from 'react';
import PDF from '../assets/Resume.pdf'


export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <object width="100%" height="800" data={PDF} type="application/pdf" />
                
    </div>

  );
}
