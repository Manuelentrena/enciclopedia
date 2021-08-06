import React from "react";
import { useTrending } from "hooks";
import { TrendingCard } from "components";

const TrendingPanel = () => {
  const { listTrendings } = useTrending();

  return (
    <div className="trendingPanel">
      {listTrendings.map((oneTrend) => (
        <TrendingCard key={oneTrend.canonical} {...oneTrend} />
      ))}
    </div>
  );
};

export default TrendingPanel;
