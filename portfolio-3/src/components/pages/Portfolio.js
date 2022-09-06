import React, { useState } from 'react';
import Projects from '../Projects'

export default function Portfolio() {

  const [projects] = useState([
    {
      name: 'Stack My Paddle',
      description:'Test test test',
      repo: 'https://github.com/furhan-dev/pickleball',
      live: 'https://www.stackmypaddle.com/',
      image:'screenshot.jpg'
    },
    {
      name: 'Stack My Paddle',
      description:'Test test test',
      repo: 'https://github.com/furhan-dev/pickleball',
      live: 'https://www.stackmypaddle.com/',
      image:'screenshot.jpg'
    },
    {
      name: 'Stack My Paddle',
      description:'Test test test',
      repo: 'https://github.com/furhan-dev/pickleball',
      live: 'https://www.stackmypaddle.com/',
      image:'screenshot.jpg'
    }
  ]);

  return (
    <div>
      <div>
      {projects.map((project,index)=>(
        <Projects project = {project}
        key = {"project"+index}
        />
      ))}
        </div>
    </div>
  );
}
