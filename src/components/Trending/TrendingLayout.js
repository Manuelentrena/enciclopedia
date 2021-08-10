import { useEffect, useCallback } from "react";
import { useNearScreen, useTrending } from "hooks";
import { TrendingCard } from "components";
import { Spinner } from "components";
import debounce from "just-debounce-it";

const TrendingLayout = () => {
  const { listTrendings, addBlock, loading } = useTrending();
  const { isNearScreen, fromRef } = useNearScreen({
    keepWatch: true,
    distance: "220px",
  });

  const debounceNextPage = useCallback(
    debounce(() => addBlock(), 200),
    [addBlock]
  );

  useEffect(() => {
    isNearScreen && debounceNextPage();
  }, [isNearScreen]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="trendingLayout">
            {listTrendings.map((trendingCard) => (
              <TrendingCard key={trendingCard.canonical} {...trendingCard} />
            ))}
          </div>
          <div id="visor" ref={fromRef}></div>
        </>
      )}
    </>
  );
};

export default TrendingLayout;
