import React from "react";
import "semantic-ui-css/semantic.min.css";
import UsersContainer from "../containers/UsersContainer";

const App = () => {
  return (
    <div className="ui container raised teal segment">
      <h3 className="ui horizontal divider header teal">
        <i className="circular users icon"></i>
        Members
      </h3>
      <UsersContainer />
    </div>
  );
};

export default App;
