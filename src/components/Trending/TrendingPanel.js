import React, { useTrending } from 'hooks';
import { TrendingCard, Spinner } from 'components';

export default function TrendingPanel() {
  const { getFirstBlock, loading, filterTrendingCard } = useTrending();

  return loading ? (
    <Spinner />
  ) : (
    <div className="trendingPanel">
      {getFirstBlock().map((trendingCard) => {
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
  );
}
