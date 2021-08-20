import { useContext, useState, useEffect } from 'react';
import EventsOfDayContext from 'provider/EventsOfDay/eventsOfDayContext';
import getEventsOfDay from 'services/EventOfDay/getEventsOfDay';
import getImageOfDay from 'services/EventOfDay/getImageOfDay';
import { useGlobal } from 'hooks';

export const useEventsOfDay = () => {
  const { language } = useGlobal();
  const {
    setEvents, events, imageOfDay, setImageOfDay,
  } = useContext(EventsOfDayContext);
  /* STATE, EVENTS RANDON */
  const [randonEvents, setRandonEvents] = useState([]);
  const [loading, setloading] = useState(false);

  /* IF CHANGUE LANGUAGE, LOAD NEW EVENTS ANG IMAGEOFDAY */
  useEffect(() => {
    async function getEvents() {
      getEventsOfDay({ language }).then((data) => setEvents({ events: data }));
      getImageOfDay({ language }).then((data) => setImageOfDay({ imageOfDay: data }));
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
    for (let i = 0; i < 4; i++) {
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
    setEvents, events, randonEvents, loading, imageOfDay,
  };
};
