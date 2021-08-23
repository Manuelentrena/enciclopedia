import React from 'react';

import { useEventsOfDay } from 'hooks';
import { EventsOfDayItem, Spinner, ImageOfDayContainer } from 'components';

export default function EventsOfDayPanel() {
  const { randonEvents, loading } = useEventsOfDay();

  return loading ? (
    <Spinner />
  ) : (
    <div className="eventsOfDay__panel">
      <ImageOfDayContainer />
      {randonEvents.map((event) => (
        <EventsOfDayItem key={event.idEvent} event={event} />
      ))}

    </div>
  );
}
