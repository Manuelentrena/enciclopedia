import React, { useEffect } from "react";
import { useGlobal, useTrending } from "hooks";
import { TrendingCard, Category } from "components";
import Lang from "Translations";

const TrendingPanel = () => {
  const { addNewTrendings, listTrendings, newTrendings } = useTrending();
  const { language: fx } = useGlobal();

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
  }, [fx]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Category
        title={Lang[fx].category.top_tendencies}
        link={Lang[fx].category.link}
        showLink={true}
        language={fx}
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
