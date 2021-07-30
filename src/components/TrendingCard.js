import React, { useEffect } from "react";
import { useTrending } from "hooks";

const TrendingCard = (oneTrend) => {
  const { /* description, id, img, */ views, title } = oneTrend;
  const { addInfo } = useTrending();

  useEffect(() => {
    addInfo({ title, views });
  }, [title]);
  return (
    <>
      <p>{title}</p>
      <p>{views}</p>
    </>
  );
};

export default React.memo(TrendingCard);
