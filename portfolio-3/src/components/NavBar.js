import React, {useState} from "react";

function NavBar({pages=[], currentPage, setCurrentPage}) {
console.log(pages[0])

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
    
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#home"
                onClick={() => setCurrentPage(pages[0])}
                // This is a conditional (ternary) operator that checks to see if the current pages is "Home"
                // If it is, we set the current pages to 'nav-link-active', otherwise we set it to 'nav-link'
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#resume"
                onClick={() => setCurrentPage(pages[1])}
                // Check to see if the currentPage is `About`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                onClick={() => setCurrentPage(pages[3])}
                // Check to see if the currentPage is `Blog`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => setCurrentPage(pages[2])}
                // Check to see if the currentPage is `Contact`, and if so we use the active link className from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </a>
            </li>
          </ul>
          <span className="navbar-text">Full-Stack Web Developer</span>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
