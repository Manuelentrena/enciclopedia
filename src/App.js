import { Search, ListResult, ListImages } from "components";
import { SearchContextProvider } from "provider/SearchContext";
import { ImagesContextProvider } from "provider/ImagesContext";

function App() {
  return (
    <SearchContextProvider>
      <ImagesContextProvider>
        <Search />
        <ListImages />
      </ImagesContextProvider>
    </SearchContextProvider>
  );
}

export default App;
