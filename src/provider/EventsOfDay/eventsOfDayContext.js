import { createContext, useReducer } from "react";
import { eventsOfDayReducer, inicialState } from "./eventsOdDayReducer";

const EventsOfDayContext = createContext({});

export function EventsOfDayProvider({ children }) {
  const [eventsOfDayState, eventsOfDayDispatch] = useReducer(
    eventsOfDayReducer,
    inicialState
  );

  const { events } = eventsOfDayState;
}

export default EventsOfDayContext;
