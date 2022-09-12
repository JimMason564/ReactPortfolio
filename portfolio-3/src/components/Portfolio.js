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
    {
      name: "Movie Finder",
      description:
        "Movie Finder is a website with form inputs. You can get a list of movies rendered on the screen based on your input criteria.",
      repo: "https://github.com/hallerhc/Project-1",
      live: "https://hallerhc.github.io/Project-1/",
      image: "movie.jpg",
    },
    {
      name: "Team Profile Generator",
      description:
        "A program run via Node that, once started, the user will choose whether the employee they are adding is a manager, engineer, or intern. They will then be asked specific questions based on their selection. When done building their team, an HTML will automatically generate with an org chart.",
      repo: "https://github.com/JimMason564/TeamProfGen",
      live: "https://github.com/JimMason564/TeamProfGen",
      image: "profGen.jpg",
    },
    {
      name: "Day Planner",
      description:
        "This is a calendar application that allows a user to save events for each hour of the day by modifying starter code.",
      repo: "https://github.com/JimMason564/DayPlanner",
      live: "https://jimmason564.github.io/DayPlanner/",
      image: "dayplanner.jpg",
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
