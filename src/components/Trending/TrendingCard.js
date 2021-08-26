import React from 'react';
import { IconStart, IconView, IconMore } from 'components';
import { useHistory } from 'react-router';
import { useGlobal } from 'hooks';

const TrendingCard = ({
  description, img, views, title, id,
}) => {
  const history = useHistory();
  const { language: fx } = useGlobal();
  const handleClick = () => {
    history.push(`/${fx}/page/${id}`);
  };

  return (
    <div className={img ? 'trendingCard' : 'trendingCard cardNoImg'} onClick={handleClick}>
      <picture className="trendingCard__picture">
        {img && <img className="trendingCard__img" src={img} alt={title} />}
      </picture>
      <div className="trendingCard__opacity" />

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
          <div className="trendingCard__opacityEnd" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TrendingCard);
