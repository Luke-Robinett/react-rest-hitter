import React from "react";

class Form extends React.Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <form>
    <div className="row">
     {this.props.children}
    </div>
   </form>
  )
 }
}

export default Form;
