import React from "react";
import { withRouter } from "react-router-dom";

const GoBack = ({ history }) => (
  <div className="ui basic segment">
    <button className="ui labeled icon button" onClick={() => history.goBack()}>
      <i className="left arrow icon"></i>
      Go Back
    </button>
  </div>
);

export default withRouter(GoBack);
