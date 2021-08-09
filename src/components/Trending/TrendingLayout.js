import { useTrending } from "hooks";
import { TrendingCard } from "components";
import { Button, Spinner } from "components";

const TrendingLayout = () => {
  const { listTrendings, addBlock, loading } = useTrending();

  const nextPage = (e) => {
    console.log(e.target);
    addBlock();
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="trendingLayout">
          {listTrendings.map((trendingCard) => (
            <TrendingCard key={trendingCard.canonical} {...trendingCard} />
          ))}
        </div>
      )}
      <Button
        className="buttonPrimary center"
        type="button"
        text="MORE CARDS"
        action={nextPage}
      />
    </>
  );
};

export default TrendingLayout;
