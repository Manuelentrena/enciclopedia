import { SearchForm, Header, TrendingPanel } from "components";
import { SearchContextProvider } from "provider/SearchContext";
import { TrendingStateProvider } from "provider/Trendings/trendingContext";

const Init = () => {
  return (
    <>
      <Header />
      <SearchContextProvider>
        <SearchForm />
      </SearchContextProvider>
      <div className="quickpedia__body">
        <TrendingStateProvider>
          <TrendingPanel />
        </TrendingStateProvider>
      </div>
    </>
  );
};

export default Init;
