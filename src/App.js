import Navbar from "./component/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./component/pages/Home";
import Introduction from "./component/pages/Intro/Introduction";
import Comments from "./component/pages/Comments/Comments";
import Members from "./component/pages/Team/Members";
import Professor from "./component/pages/Team/Professor.js";
import Researchers from "./component/pages/Team/Researchers.js";
import News from "./component/pages/Achievement/News";
import Details from "./component/pages/Achievement/Details.js";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/comments" exact component={Comments} />
          <Route path="/introduction" exact component={Introduction} />
          <Route path="/achievements" exact component={News} />
          <Route path="/achievements/:id" exact component={Details} />
          <Route path="/professor" exact component={Members} />
          <Route path="/professor" exact component={Professor} />
          <Route path="/researchers" exact component={Researchers} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
