import { SearchForm, Header } from "components";
import { SearchContextProvider } from "provider/SearchContext";

const Home = () => {
  return (
    <>
      <Header />
      <SearchContextProvider>
        <SearchForm />
      </SearchContextProvider>
    </>
  );
};

export default Home;
