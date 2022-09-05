import React from 'react';
import Projects from '../Projects'

export default function Portfolio() {

  const project = 
    {
      id: '1',
      name: 'Stack My Paddle',
      description:'Test test test',
      repo: 'https://github.com/furhan-dev/pickleball',
      live: 'https://www.stackmypaddle.com/',
      image:'https://github.com/furhan-dev/pickleball/blob/main/public/assets/images/screenshot.jpg',
    }

  ;

  return (
    <div>
        <Projects name={project.name} description={project.description} repo={project.repo} live={project.live} image={project.image} />
    </div>
  );
}
