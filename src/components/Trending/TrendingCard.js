import React, { useEffect, useState } from "react";
import { useTrending } from "hooks";
import { IconStart, IconView, IconMore } from "components";

const TrendingCard = (oneTrend) => {
  const { canonical, views } = oneTrend;
  const { addInfo, existsCard } = useTrending();
  const [infoCard, setInfoCard] = useState({});

  async function getData() {
    const newInfo = await addInfo({
      canonical,
      views,
    });
    newInfo && setInfoCard(newInfo);
  }

  useEffect(() => {
    const dataCard = existsCard({ canonical });
    dataCard ? setInfoCard(dataCard) : getData();
  }, [canonical]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="trendingCard">
        <picture className="trendingCard__picture">
          <img
            className="trendingCard__img"
            src={infoCard.img}
            alt={infoCard.title}
          />
        </picture>
        <div className="trendingCard__opacity"></div>

        <div className="trendingCard__content">
          <div className="trendingCard__header">
            <div className="trendingCard__views">
              <IconView />
              <p className="trendingCard__counter">{infoCard.views}</p>
            </div>
            <IconStart />
          </div>
          <div className="trendingCard__body">
            <p className="trendingCard__title">{infoCard.title}</p>
            <p className="trendingCard__desc">{infoCard.description}</p>
            <div className="trendingCard__bodyRel">
              <IconMore />
            </div>
            <div className="trendingCard__opacityEnd"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(TrendingCard);
