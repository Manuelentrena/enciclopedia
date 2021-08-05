import { SearchForm, Header, TrendingPanel } from "components";

const Init = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <div className="quickpedia__body">
        <TrendingPanel />
      </div>
    </>
  );
};

export default Init;
