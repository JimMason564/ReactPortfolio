import React from "react";
import "../index.css"

export default function Projects({project}) {
    const cardStyle = {
      width: "30rem",
      height: "38rem"
    };
const {name, description, repo, live, image} = project

  return (
  <div className="projectList">
    <ul id= "horizontal-list" className="list-group">
            <div className="container d-flex flex-column justify-content:center">
            <div className="card" style={cardStyle}>
              <img className="card-img-top" src={require(`../assets/projects/${image}`)} alt={name} />
              <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Description: {description}</p>
                <p className="card-text">Github Repo: {repo}</p>
                <a href = {live} className="btn btn-primary">
                  {name}
                </a>
              </div>
            </div>
          </div>
    </ul>
    </div>
  );
  }
