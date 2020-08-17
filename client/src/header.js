import React from "react";

function Header(props) {
 return (
  <header
   className="page-header text-light bg-primary"
  >
   <h1>{props.title}</h1>
  </header>
 )
}

export default Header;