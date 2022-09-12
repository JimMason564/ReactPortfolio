import React, { useState } from "react";
import Projects from './Projects';

export default function Portfolio() {
  const [projects] = useState([
    {
      name: "Stack My Paddle",
      description: "Pickleball scheduling site",
      repo: "https://github.com/furhan-dev/pickleball",
      live: "https://www.stackmypaddle.com/",
      image: "screenshot.jpg",
    },
    {
      name: "Notetaker",
      description:
        "This is a simple note taker app that will allow the user to write, save, and delete notes",
      repo: "https://github.com/JimMason564/NoteTaker",
      live: "https://immense-meadow-01925.herokuapp.com/",
      image: "notetaker.jpg",
    },
    {
      name: "Webpack Text Editor",
      description:
        "A text editor that allows the user to enter text while online and then download the app and retain functionality without a web connection. This app utilizes Webpack, Javascript, and IDB.",
      repo: "https://github.com/JimMason564/TextEditor",
      live: "https://pacific-springs-26101.herokuapp.com",
      image: "text.jpg",
    },
  ]);

  return (
    <div>
      <div>
        {projects.map((project) => (
          <Projects project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}
