import React from "react";

import { useEventsOfDay } from "hooks";
import { EventsOfDayItem, Spinner } from "components";

export default function EventsOfDayList() {
  const { randonEvents, loading } = useEventsOfDay();

  return loading ? (
    <Spinner />
  ) : (
    <div className="eventsOfDay__list">
      {randonEvents.map((event) => (
        <EventsOfDayItem key={event.idEvent} event={event} />
      ))}
    </div>
  );
}
