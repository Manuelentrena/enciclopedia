import { SearchForm, ListImages } from "components";
/* import { ResultsContextProvider } from "provider/ResultsContext";
import { ImagesContextProvider } from "provider/ImagesContext"; */
import { SearchContextProvider } from "provider/SearchContext";
import { GlobalStateProvider } from "provider/global/globalContext";

function App() {
  return (
    <GlobalStateProvider>
      <SearchContextProvider>
        <h1 className="header">ENCICLOPEDIA</h1>
        <SearchForm />
      </SearchContextProvider>
      <ListImages />
    </GlobalStateProvider>
  );
}

export default App;
