import { SearchForm, Header, TrendingPanel } from "components";
import { SearchContextProvider } from "provider/SearchContext";
import { TrendingStateProvider } from "provider/Trendings/trendingContext";

const Home = () => {
  return (
    <>
      <Header />
      <SearchContextProvider>
        <SearchForm />
      </SearchContextProvider>
      <TrendingStateProvider>
        <TrendingPanel />
      </TrendingStateProvider>
    </>
  );
};

export default Home;
