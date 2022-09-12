import React, {useState} from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page";

const App = () => {
  const [pages] = useState([
    { name: "Home" },
    { name: "Resume" },
    { name: "Contact" },
    { name: "Portfolio" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <>
      <Header>
        <NavBar
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></NavBar>
      </Header>
      <Page currentPage={currentPage}></Page>
      <Footer />
    </>
  );
};

export default App;
