import { SearchForm, ListImages, Header } from "components";
import { SearchContextProvider } from "provider/SearchContext";

const Init = () => {
  return (
    <>
      <Header />
      <SearchContextProvider>
        <SearchForm />
      </SearchContextProvider>
      <ListImages />
    </>
  );
};

export default Init;
