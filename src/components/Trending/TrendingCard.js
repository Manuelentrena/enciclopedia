import React from "react";
import { IconStart, IconView, IconMore } from "components";

const TrendingCard = ({ description, img, views, title }) => {
  return (
    <>
      <div className={img ? "trendingCard" : "trendingCard cardNoImg"}>
        <picture className="trendingCard__picture">
          {img && <img className="trendingCard__img" src={img} alt={title} />}
        </picture>
        <div className="trendingCard__opacity"></div>

        <div className="trendingCard__content">
          <div className="trendingCard__header">
            <div className="trendingCard__views">
              <IconView />
              <p className="trendingCard__counter">{views}</p>
            </div>
            <IconStart />
          </div>
          <div className="trendingCard__body">
            <p className="trendingCard__title">{title}</p>
            <p className="trendingCard__desc">{description}</p>
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

/* export default React.memo(TrendingCard, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
}); */

export default React.memo(TrendingCard);
