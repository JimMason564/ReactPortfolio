import React, {useState} from 'react';
import PDF from '../assets/Resume.pdf'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
      I am a motivated people manager with over 5 years of management experience in a variety of
            fields and environments. I excel at developing and implementing technical processes and
            managing team resources and time in order to meet targets on-time and under budget.

            Currently enrolled in a full-stack web development boot camp and have become familiar with
            JavaScript, React, GraphQL, NoSQL, and many other forms of web development.
      </p>
      <object width="100%" height="800" data={PDF} type="application/pdf" />
                
    </div>
  );
}
