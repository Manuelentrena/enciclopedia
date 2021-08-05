import React from "react";
import { useGlobal, useTrending } from "hooks";
import { TrendingCard, Category } from "components";
import Lang from "Translations";

const TrendingPanel = () => {
  const { listTrendings } = useTrending();
  const { language: fx } = useGlobal();

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
