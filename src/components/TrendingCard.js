import React, { useEffect, useState } from "react";
import { useTrending } from "hooks";

const TrendingCard = (oneTrend) => {
  const { views, canonical } = oneTrend;
  const { addInfo } = useTrending();
  const [infoCard, setInfoCard] = useState({});

  useEffect(() => {
    async function getData() {
      const newInfo = await addInfo({
        canonical,
        views,
      });
      newInfo && setInfoCard(newInfo);
    }
    getData();
  }, []);

  return (
    <>
      <p>{infoCard.title}</p>
      <p>{infoCard.description}</p>
      <p> VISTAS: {infoCard.views}</p>
      <img src={infoCard.img} atl={infoCard.title}></img>
    </>
  );
};

export default React.memo(TrendingCard);
