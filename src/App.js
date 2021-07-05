import { Search, ListResult } from "components";
import { SearchContextProvider } from "provider/SearchContext";

function App() {
  return (
    <SearchContextProvider>
      <Search />
      <ListResult />
    </SearchContextProvider>
  );
}

export default App;
