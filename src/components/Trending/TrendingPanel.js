import React, { useEffect, useRef } from "react";
import { useGlobal, useTrending } from "hooks";
import { TrendingCard, Category } from "components";
import Lang from "Translations";

const TrendingPanel = () => {
  const { addNewTrendings, listTrendings, newTrendings } = useTrending();
  const { language: fx } = useGlobal();
  const firstUpdate = useRef(true);
  async function addTrendings() {
    await addNewTrendings();
  }

  /*   useEffect(() => {

  }, []);  */

  useEffect(() => {
    console.log({ newTrendings });
    if (Array.isArray(newTrendings) && !newTrendings.length) {
      console.log("useEffect inicial de Panel");
      addTrendings();
      firstUpdate.current = false;
      return;
    }
    if (Array.isArray(listTrendings) && !firstUpdate.current) {
      console.log("useEffect del Panel dentro");
      addTrendings();
    }
    console.log("useEffect del Panel");
  }, [fx]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Category
        title={Lang[fx].category.top_tendencies}
        link={Lang[fx].category.link}
        showLink={true}
      />
      <div className="trendingPanel">
        {listTrendings.map((oneTrend) => (
          <TrendingCard key={oneTrend.canonical} {...oneTrend} />
        ))}
      </div>
    </>
  );
};

export default TrendingPanel;
