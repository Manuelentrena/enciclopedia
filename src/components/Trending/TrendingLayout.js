import React from "react";
import { useTrending } from "hooks";
import { TrendingCard } from "components";
import { Button } from "components";

const TrendingLayout = () => {
  const { listTrendings, addBlock } = useTrending();

  const nextPage = (e) => {
    console.log(e.target);
    addBlock();
  };

  return (
    <>
      <div className="trendingLayout">
        {listTrendings.map((trendingCard) => (
          <TrendingCard key={trendingCard.canonical} {...trendingCard} />
        ))}
      </div>
      <Button
        className="buttonPrimary center"
        type="button"
        text="MORE CARDS"
        action={nextPage}
      />
    </>
  );
};

export default TrendingLayout;
