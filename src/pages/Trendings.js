import {
  SearchForm, Header, Category, TrendingLayout,
} from 'components';
import React, { useGlobal } from 'hooks';
import Lang from 'Translations';

const Trendings = () => {
  const { language: fx } = useGlobal();

  return (
    <>
      <Header />
      <SearchForm />
      <div className="quickpedia__body">
        <Category
          title={Lang.trending.tendencies[fx]}
          date={new Date().toLocaleDateString()}
          showLink={false}
        />
        <TrendingLayout />
      </div>
    </>
  );
};

export default Trendings;
