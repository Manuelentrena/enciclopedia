import React from 'react';

import { useEventsOfDay } from 'hooks';
import { EventsOfDayItem, Spinner, ImageOfDay } from 'components';

export default function EventsOfDayPanel() {
  const { randonEvents, loading } = useEventsOfDay();

  return loading ? (
    <Spinner />
  ) : (
    <div className="eventsOfDay__panel">
      <ImageOfDay />
      {randonEvents.map((event) => (
        <EventsOfDayItem key={event.idEvent} event={event} />
      ))}

    </div>
  );
}
