import React, { useEffect } from "react";
import getEventsOfDay from "services/EventOfDay/getEventsOfDay";
import { useGlobal } from "hooks";

export default function EventsOfDayList() {
  const { language } = useGlobal();

  useEffect(() => {
    async function getEvents() {
      const data = await getEventsOfDay({ language });
      console.log(data);
    }
    getEvents();
  }, [language]);

  return <div>COMPONENTE</div>;
}
