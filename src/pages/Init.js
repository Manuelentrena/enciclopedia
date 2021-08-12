import React from "react";
import {
  SearchForm,
  Header,
  Category,
  TrendingLazy,
  EventsOfDayList,
} from "components";
import { useGlobal } from "hooks";
import Lang from "Translations";

const Init = () => {
  const { language: fx } = useGlobal();

  return (
    <>
      <Header />
      <SearchForm />
      <div className="quickpedia__body">
        <Category
          title={Lang[fx].trending.top_tendencies}
          link={Lang[fx].trending.link}
          showLink={true}
          path={"trendings"}
        />
        <TrendingLazy />
        <Category
          title={Lang[fx].events.onthisday}
          link={Lang[fx].events.link}
          showLink={true}
          path={"events"}
        />
        <EventsOfDayList />
      </div>
    </>
  );
};

export default Init;
