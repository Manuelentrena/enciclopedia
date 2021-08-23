import {
  Header, Category, EventsOfDayLayout,
} from 'components';
import React, { useGlobal, useEventsOfDay } from 'hooks';
import Lang from 'Translations';

const Events = () => {
  const { language: fx } = useGlobal();
  const { events } = useEventsOfDay();
  const date = `(${Lang.events.results[fx]} ${events?.length})`;
  const title = Lang.events.events[fx];

  return (
    <>
      <Header />
      <div className="quickpedia__body">
        <Category title={title} date={date} showLink={false} />
        <EventsOfDayLayout />
      </div>
    </>
  );
};

export default Events;
