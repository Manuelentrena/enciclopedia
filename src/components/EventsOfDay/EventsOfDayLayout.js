import React from 'react';

import { useEventsOfDay } from 'hooks';
import { EventsOfDayItem, Spinner } from 'components';

export default function EventsOfDayLayout() {
  const { events, loading } = useEventsOfDay();

  return loading ? (
    <Spinner />
  ) : (
    <div className="eventsOfDay__layout">
      {events.map((event) => (
        <EventsOfDayItem key={event.idEvent} event={event} />
      ))}
    </div>
  );
}
