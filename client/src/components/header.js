import React from "react";

function Header(props) {
 return (
  <header
   className="text-light bg-primary"
  >
   {props.title}
  </header>
 )
}

export default Header;