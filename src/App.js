import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Home, Init, Trendings } from "pages";
import { GlobalStateProvider } from "provider/global/globalContext";
import { SearchContextProvider } from "provider/SearchContext";
import { TrendingStateProvider } from "provider/Trendings/trendingContext";
import FixRoute from "routers/FixRoute";

function App() {
  return (
    <GlobalStateProvider>
      <SearchContextProvider>
        <TrendingStateProvider>
          <Router>
            <Switch>
              <FixRoute path="/:lng(en|es)?" exact component={Init}></FixRoute>
              <FixRoute
                path="/:lng(en|es)?/home"
                exact
                component={Home}
              ></FixRoute>
              <FixRoute
                path="/:lng(en|es)?/trendings"
                exact
                component={Trendings}
              ></FixRoute>
            </Switch>
          </Router>
        </TrendingStateProvider>
      </SearchContextProvider>
    </GlobalStateProvider>
  );
}

export default App;
