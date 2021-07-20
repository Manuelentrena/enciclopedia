import { SearchForm, ListImages, Header } from "components";
import { SearchContextProvider } from "provider/SearchContext";
import { GlobalStateProvider } from "provider/global/globalContext";

const Home = () => {
  return (
    <GlobalStateProvider>
      <Header />
      <SearchContextProvider>
        <SearchForm />
      </SearchContextProvider>
      <ListImages />
    </GlobalStateProvider>
  );
};

export default Home;