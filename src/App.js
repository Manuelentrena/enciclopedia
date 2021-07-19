import { SearchForm, ListImages, Header } from "components";
import { SearchContextProvider } from "provider/SearchContext";
import { GlobalStateProvider } from "provider/global/globalContext";

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <SearchContextProvider>
        <SearchForm />
      </SearchContextProvider>
      <ListImages />
    </GlobalStateProvider>
  );
}

export default App;
