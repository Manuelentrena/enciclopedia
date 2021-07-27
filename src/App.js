import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Init } from "pages";
import { GlobalStateProvider } from "provider/global/globalContext";
import FixRoute from "routers/FixRoute";

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <Switch>
          <FixRoute path="/:lng(en|es)?" exact component={Init}></FixRoute>
          <FixRoute path="/:lng(en|es)?/home" exact component={Home}></FixRoute>
        </Switch>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
