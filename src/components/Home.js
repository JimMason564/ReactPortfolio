import React from "react";

export default function Home() {
  return (
    <div>
      <div class="about">
        <img
          src={require("../assets/profile.jpeg")}
          alt="Me"
          className="photo"
        />
        <p className="abText">
          <h1 className="aboutMe">About Me</h1>I am a motivated people manager
          with over 5 years of management experience in a variety of fields and
          environments. I excel at developing and implementing technical
          processes and managing team resources and time in order to meet
          targets on-time and under budget.
          <br></br>
          <br></br>
          Currently enrolled in University of Washington coding boot camp and
          have become proficent in:
          <ul>React</ul>
          <ul>GraphQL</ul>
          <ul>NoSQL</ul>
          <ul>SQL</ul>
          <ul>Javascript</ul>
          <ul>CSS</ul>
          <ul>APIs</ul>
          <ul>Express</ul>
        </p>
      </div>
    </div>
  );
}
