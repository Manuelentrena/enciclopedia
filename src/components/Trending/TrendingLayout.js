import React from "react";
import { useTrending } from "hooks";
import { TrendingCard } from "components";

const TrendingLayout = () => {
  const { listTrendings } = useTrending();

  return (
    <div className="trendingLayout">
      {listTrendings.map((trendingCard) => (
        <TrendingCard key={trendingCard.canonical} {...trendingCard} />
      ))}
    </div>
  );
};

export default TrendingLayout;
