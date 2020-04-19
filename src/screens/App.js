import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Users from "../screens/Users";
import Posts from "../screens/Posts";
import Comments from "../screens/Comments";

const App = () => {
  return (
    <Router>
      <div className="ui container raised teal segment">
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/user/:userId" component={Posts} />
          <Route path="/post/:postId" component={Comments} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
