import { useTrending } from "hooks";
import { TrendingCard, Spinner } from "components";

export default function TrendingPanel() {
  const { getFirstBlock, loading } = useTrending();

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="trendingPanel">
          {getFirstBlock().map((trendingCard) => (
            <TrendingCard
              key={trendingCard.id}
              description={trendingCard.description}
              views={trendingCard.views}
              img={trendingCard.img}
            />
          ))}
        </div>
      )}
    </>
  );
}
