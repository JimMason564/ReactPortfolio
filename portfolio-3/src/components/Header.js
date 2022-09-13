import React from 'react';


function Header(props) {



  return (
    <header className= "header">
    
      <h1>Jim Mason</h1>

      {props.children}
    </header>
  );
}

export default Header;
