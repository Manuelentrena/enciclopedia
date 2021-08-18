import { useContext, useState, useEffect } from 'react';
import EventsOfDayContext from 'provider/EventsOfDay/eventsOfDayContext';
import getEventsOfDay from 'services/EventOfDay/getEventsOfDay';
import { useGlobal } from 'hooks';

export const useEventsOfDay = () => {
  const { language } = useGlobal();
  const { setEvents, events } = useContext(EventsOfDayContext);
  /* STATE, EVENTS RANDON */
  const [randonEvents, setRandonEvents] = useState([]);
  const [loading, setloading] = useState(false);

  /* IF CHANGUE LANGUAGE, LOAD NEW EVENTS */
  useEffect(() => {
    async function getEvents() {
      const data = await getEventsOfDay({ language });
      setEvents({ events: data });
    }
    setloading(true);
    getEvents();
  }, [language, setEvents]);

  function numRandom() {
    return Math.floor(Math.random() * events.length);
  }

  function loadEvents() {
    const eventsRandon = [];
    const idsRandon = [];
    let newNum = 0;
    for (let i = 0; i < 6; i++) {
      newNum = numRandom();
      if (!idsRandon.includes(newNum)) {
        eventsRandon.push(events[newNum]);
        idsRandon.push(newNum);
      } else {
        i--;
      }
    }
    return eventsRandon;
  }

  /* IF CHANGE DE EVENTS, CREATE NEW STATE RANDON EVENTS */
  useEffect(() => {
    if (events?.length) {
      const eventsRandon = loadEvents();
      setRandonEvents(eventsRandon);
      setloading(false);
    }
  }, [events]);

  return {
    setEvents, events, randonEvents, loading,
  };
};
