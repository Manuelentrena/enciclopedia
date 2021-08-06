import { SearchForm, Header, TrendingPanel, Category } from "components";
import { useGlobal } from "hooks";
import Lang from "Translations";

const Init = () => {
  const { language: fx } = useGlobal();

  return (
    <>
      <Header />
      <SearchForm />
      <Category
        title={Lang[fx].category.top_tendencies}
        link={Lang[fx].category.link}
        showLink={true}
      />
      <div className="quickpedia__body">
        <TrendingPanel />
      </div>
    </>
  );
};

export default Init;
