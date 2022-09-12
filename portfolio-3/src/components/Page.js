import React  from 'react';
import Home from './Home';
import Portfolio from './Portfolio';
import Resume from './Resume'
import Contact from './Contact';
import PageContent from './PageContent';


export default function Page({currentPage}) {

  // This method is checking to see what the value of `currentPage.name` is. Depending on the value of currentPage.name, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage.name.name === 'Home') {
      return <Home />;
    }
    if (currentPage.name === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage.name === 'Contact') {
      return <Contact />;
    }
    if (currentPage.name === "Resume") {
      return <Resume />;
    }
    return <Home />;
  };



  return (
    <div>

      <PageContent>{renderPage()}</PageContent>
    </div>
  );
}
