import { SearchForm, ListImages, Header } from "components";
import { SearchContextProvider } from "provider/SearchContext";
import { GlobalStateProvider } from "provider/global/globalContext";
import { useParams } from "react-router";
import { useGlobal } from "hooks/useGlobal";

const Init = () => {
  const { lng } = useParams();
  const { setLanguage } = useGlobal();

  setLanguage(lng);

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

export default Init;
