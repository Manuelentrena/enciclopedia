import { useContext, useState, useEffect } from "react";
import EventsOfDayContext from "provider/EventsOfDay/eventsOfDayContext";
import getEventsOfDay from "services/EventOfDay/getEventsOfDay";
import { useGlobal } from "hooks";

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
      setEvents(data);
    }
    setloading(true);
    getEvents();
  }, [language, setEvents]);

  /* IF CHANGE DE EVENTS, CREATE NEW STATE RANDON EVENTS */
  useEffect(() => {
    if (events.length) {
      const eventsRandon = [];
      for (let i = 0; i < 4; i++) {
        eventsRandon.push(events[numRandom()]);
      }
      setRandonEvents(eventsRandon);
      setloading(false);
    }
  }, [events]); // eslint-disable-line react-hooks/exhaustive-deps

  function numRandom() {
    return Math.floor(Math.random() * events.length);
  }

  return { setEvents, events, randonEvents, loading };
};
