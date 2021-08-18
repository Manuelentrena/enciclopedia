import React from 'react';

import { useEventsOfDay } from 'hooks';
import { EventsOfDayItem, Spinner } from 'components';

export default function EventsOfDayPanel() {
  const { randonEvents, loading } = useEventsOfDay();

  return loading ? (
    <Spinner />
  ) : (
    <div className="eventsOfDay__panel">
      {randonEvents.map((event) => (
        <EventsOfDayItem key={event.idEvent} event={event} />
      ))}
    </div>
  );
}
