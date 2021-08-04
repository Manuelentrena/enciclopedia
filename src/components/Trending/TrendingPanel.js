import React, { useEffect } from "react";
import { useGlobal, useTrending } from "hooks";
import { TrendingCard, Category } from "components";

const TrendingPanel = () => {
  const { addNewTrendings, listTrendings, newTrendings } = useTrending();
  const { language } = useGlobal();

  async function addTrendings() {
    await addNewTrendings();
  }

  useEffect(() => {
    newTrendings.length === 0 && addTrendings();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (Array.isArray(listTrendings) && listTrendings.length !== 0) {
      addTrendings();
    }
  }, [language]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Category />
      <div className="trendingPanel">
        {listTrendings.map((oneTrend) => (
          <TrendingCard key={oneTrend.canonical} {...oneTrend} />
        ))}
      </div>
    </>
  );
};

export default TrendingPanel;
