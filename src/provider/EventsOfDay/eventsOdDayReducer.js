import { EVENTS_ACTIONS } from 'events/index';

export const eventsOfDayReducer = (state, action) => {
  switch (action.type) {
    case EVENTS_ACTIONS.ADD_EVENTS:
      return { ...state, events: action.payload };
    case EVENTS_ACTIONS.ADD_IMAGEOFDAY:
      return { ...state, imageOfDay: action.payload };
    default:
      return state;
  }
};

export const inicialState = {
  events: [],
  imageOfDay: null,
};
