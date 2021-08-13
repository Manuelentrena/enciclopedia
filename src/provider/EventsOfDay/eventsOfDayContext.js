import { createContext, useCallback, useReducer } from "react";
import { eventsOfDayReducer, inicialState } from "./eventsOdDayReducer";
import { EVENTS_ACTIONS } from "events/index";

const EventsOfDayContext = createContext({});

export function EventsOfDayProvider({ children }) {
  const [eventsOfDayState, eventsOfDayDispatch] = useReducer(
    eventsOfDayReducer,
    inicialState
  );

  const { events } = eventsOfDayState;

  const setEvents = useCallback(
    (events) => {
      eventsOfDayDispatch({
        type: EVENTS_ACTIONS.ADD_EVENTS,
        payload: events,
      });
    },
    [eventsOfDayDispatch]
  );

  return (
    <EventsOfDayContext.Provider value={{ events, setEvents }}>
      {children}
    </EventsOfDayContext.Provider>
  );
}

export default EventsOfDayContext;
