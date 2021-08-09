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
          {getFirstBlock().map((oneTrend) => (
            <TrendingCard key={oneTrend.canonical} {...oneTrend} />
          ))}
        </div>
      )}
    </>
  );
}
