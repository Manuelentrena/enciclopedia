import { SearchForm, Header } from "components";
import { SearchContextProvider } from "provider/SearchContext";
import { TrendingStateProvider } from "provider/Trendings/trendingContext";

const Trendings = () => {
  return (
    <>
      <Header />
      <SearchContextProvider>
        <SearchForm />
      </SearchContextProvider>
      <div className="quickpedia__body">
        <TrendingStateProvider>
          <h1>PAGINA NUEVA</h1>
        </TrendingStateProvider>
      </div>
    </>
  );
};

export default Trendings;
