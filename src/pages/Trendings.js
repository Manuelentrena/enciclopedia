import { SearchForm, Header, Category, TrendingLayout } from "components";
import { useGlobal } from "hooks";
import Lang from "Translations";

const Trendings = () => {
  const { language: fx } = useGlobal();

  return (
    <>
      <Header />
      <SearchForm />
      <div className="quickpedia__body">
        <Category
          title={Lang[fx].trending.tendencies}
          date={new Date().toLocaleDateString()}
          showLink={false}
        />
        <TrendingLayout />
      </div>
    </>
  );
};

export default Trendings;
