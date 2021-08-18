import React from 'react';
import {
  SearchForm,
  Header,
  Category,
  TrendingLazy,
  EventsOfDayPanel,
} from 'components';
import { useGlobal } from 'hooks';
import Lang from 'Translations';

const Init = () => {
  const { language: fx } = useGlobal();
  return (
    <>
      <Header />
      <SearchForm />
      <div className="quickpedia__body">
        <Category
          title={Lang.trending.top_tendencies[fx]}
          link={Lang.trending.link[fx]}
          showLink
          path="trendings"
        />
        <TrendingLazy />
        <Category
          title={Lang.events.onthisday[fx]}
          link={Lang.events.link[fx]}
          showLink
          path="events"
        />
        <EventsOfDayPanel />
      </div>
    </>
  );
};

export default Init;
