import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import {
  Home, Init, Trendings, Events, Page,
} from 'pages';
import { GlobalStateProvider } from 'provider/global/globalContext';
import { SearchContextProvider } from 'provider/SearchContext';
import { TrendingStateProvider } from 'provider/Trendings/trendingContext';
import { EventsOfDayProvider } from 'provider/EventsOfDay/eventsOfDayContext';
import { InfoPageContextProvider } from 'provider/InfoPage';
import FixRoute from 'routers/FixRoute';

function App() {
  return (
    <GlobalStateProvider>
      <InfoPageContextProvider>
        <TrendingStateProvider>
          <SearchContextProvider>
            <EventsOfDayProvider>
              <Router>
                <Switch>
                  <FixRoute
                    path="/:lng(en|es)?"
                    exact
                    component={Init}
                  />
                  <FixRoute
                    path="/:lng(en|es)?/home"
                    exact
                    component={Home}
                  />
                  <FixRoute
                    path="/:lng(en|es)?/trendings"
                    exact
                    component={Trendings}
                  />
                  <FixRoute
                    path="/:lng(en|es)?/events"
                    exact
                    component={Events}
                  />
                  <FixRoute
                    path="/:lng(en|es)?/page/:title"
                    exact
                    component={Page}
                  />
                </Switch>
              </Router>
            </EventsOfDayProvider>
          </SearchContextProvider>
        </TrendingStateProvider>
      </InfoPageContextProvider>
    </GlobalStateProvider>
  );
}

export default App;
