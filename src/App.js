import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Init } from "pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Init}></Route>
        <Route path="/home" exact component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
