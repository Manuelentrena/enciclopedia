import { SearchForm, ListImages } from "components";
import { ResultsContextProvider } from "provider/ResultsContext";
import { ImagesContextProvider } from "provider/ImagesContext";
import { SearchContextProvider } from "provider/SearchContext";

function App() {
  return (
    <ResultsContextProvider>
      <ImagesContextProvider>
        <SearchContextProvider>
          <SearchForm />
        </SearchContextProvider>
        <ListImages />
      </ImagesContextProvider>
    </ResultsContextProvider>
  );
}

export default App;
