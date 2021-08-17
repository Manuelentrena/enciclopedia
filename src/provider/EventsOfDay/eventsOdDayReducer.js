import { EVENTS_ACTIONS } from 'events/index';

export const eventsOfDayReducer = (state, action) => {
  switch (action.type) {
    case EVENTS_ACTIONS.ADD_EVENTS:
      return { ...state, events: action.payload };
    default:
      return state;
  }
};

export const inicialState = {
  events: [],
};
