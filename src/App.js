import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Init } from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:lng(en|es)?" exact component={Init}></Route>
        <Route path="/:lng(en|es)?/home" exact component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
