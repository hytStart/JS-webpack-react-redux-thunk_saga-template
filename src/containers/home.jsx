import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";

import About from "./About";
import User from "./User";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/User">
          <User />
        </Route>
        <Redirect to="/about" />
      </Switch>
    </div>
  );
};

export default Home;
