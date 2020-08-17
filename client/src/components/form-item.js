import React from "react";

function FormItem(props) {
 return (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1 p-md-2">
   {props.children}
  </div>
 )
}

export default FormItem;
