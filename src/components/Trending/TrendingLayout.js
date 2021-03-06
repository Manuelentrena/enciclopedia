import React, { useEffect, useCallback } from 'react';
import { useNearScreen, useTrending } from 'hooks';
import { TrendingCard, Spinner } from 'components';
import debounce from 'just-debounce-it';

const TrendingLayout = () => {
  const {
    listTrendings, addBlock, loading, filterTrendingCard,
  } = useTrending();
  const { isNearScreen, fromRef } = useNearScreen({
    keepWatch: true,
    distance: '500px',
  });

  const debounceNextPage = useCallback(
    debounce(() => addBlock(), 300),
    [],
  );

  useEffect(() => {
    isNearScreen && debounceNextPage();
  }, [isNearScreen, debounceNextPage]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className="trendingLayout">
        {listTrendings.map((trendingCard) => {
          if (filterTrendingCard({ trendingCard })) {
            return (
              <TrendingCard
                key={trendingCard.canonical}
                description={trendingCard.description}
                img={trendingCard.img}
                views={trendingCard.views}
                title={trendingCard.title}
                id={trendingCard.id}
              />
            );
          }
          return null;
        })}
      </div>
      <div id="visor" ref={fromRef} />
    </>
  );
};

export default TrendingLayout;
