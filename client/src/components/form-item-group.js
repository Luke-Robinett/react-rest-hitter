import React from "react";
import FormItem from "./form-item";

function FormItemGroup(props) {
 return (
  <FormItem>
   <details>
    <summary>{props.title}</summary>
    <div>
     {props.children}
    </div>
   </details>
  </FormItem>
 )
}

export default FormItemGroup;
