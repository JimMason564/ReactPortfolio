import React from "react";

export default function Projects(props) {
  const cardStyle = {
    width: "18rem",
  };

  return (
    <ul className="list-group">
      {props.Projects.map((name, description, repo, id, live) => {
        return (
          <div className="container">
            <div className="card" style={cardStyle}>
              <img className="card-img-top" src={props.image} alt="Card cap" />
              <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Description: {description}</p>
                <p className="card-text">Github Repo: {repo}</p>
                <p className="card-text">ID: {id}</p>
                <a href="props.live" className="btn btn-primary">
                  Deployed site
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
