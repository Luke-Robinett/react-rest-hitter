import React from "react";
import Header from "./components/header";
import Form from "./components/form";
import FormItemGroup from "./components/form-item-group";
import FormItem from "./components/form-item";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header title="Rest Hitter" />
        <Form>
          <FormItem>
            <input
              type="text"
              placeholder="Untitled 1"
              className="w-100"
            />
          </FormItem>
          <FormItem>
            <input
              type="url"
              placeholder="Endpoint"
              className="w-100"
            />
          </FormItem>
          <FormItemGroup title="Data">
            <textarea
              placeholder="JSON Body"
              className="w-100"
            ></textarea>
          </FormItemGroup>
        </Form>
      </div >
    );
  }
}

export default App;