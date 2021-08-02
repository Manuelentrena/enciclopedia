import React, { useEffect, useState } from "react";
import { useTrending } from "hooks";
import { StartIcon, ViewsIcon, MoreIcon } from "components";

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
  }, [canonical, views]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="cardTrend">
        <picture className="cardTrend__picture">
          <img
            className="cardTrend__img"
            src={infoCard.img}
            alt={infoCard.title}
          />
        </picture>
        <div className="cardTrend__opacity"></div>

        <div className="cardTrend__content">
          <div className="cardTrend__header">
            <div className="cardTrend__views">
              <ViewsIcon />
              <p className="cardTrend__counter">{infoCard.views}</p>
            </div>
            <StartIcon />
          </div>
          <div className="cardTrend__body">
            <p className="cardTrend__title">{infoCard.title}</p>
            <p className="cardTrend__desc">{infoCard.description}</p>
            <div className="cardTrend__bodyRel">
              <MoreIcon />
            </div>
            <div className="cardTrend__opacityEnd"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(TrendingCard);
