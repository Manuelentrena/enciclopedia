import React, { createContext, useCallback, useReducer } from 'react';
import { EVENTS_ACTIONS } from 'events/index';
import { eventsOfDayReducer, inicialState } from './eventsOdDayReducer';

const EventsOfDayContext = createContext({});

export function EventsOfDayProvider({ children }) {
  const [eventsOfDayState, eventsOfDayDispatch] = useReducer(
    eventsOfDayReducer,
    inicialState,
  );

  const { events, imageOfDay } = eventsOfDayState;

  const setEvents = useCallback(
    ({ events: event }) => {
      eventsOfDayDispatch({
        type: EVENTS_ACTIONS.ADD_EVENTS,
        payload: event,
      });
    },
    [eventsOfDayDispatch],
  );

  const setImageOfDay = useCallback(
    ({ imageOfDay: image }) => {
      eventsOfDayDispatch({
        type: EVENTS_ACTIONS.ADD_IMAGEOFDAY,
        payload: image,
      });
    },
    [eventsOfDayDispatch],
  );

  return (
    <EventsOfDayContext.Provider value={{
      events, setEvents, imageOfDay, setImageOfDay,
    }}
    >
      {children}
    </EventsOfDayContext.Provider>
  );
}

export default EventsOfDayContext;
