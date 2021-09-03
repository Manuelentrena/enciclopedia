import React from 'react';
import { Header, Spinner } from 'components';
import { useInfoPage } from 'hooks';

const Page = () => {
  const { getTitle, loading } = useInfoPage();

  return (
    <>
      <Header isPage />
      <div className="quickpedia__body">
        { loading
          ? <Spinner />
          : <h1>{getTitle()}</h1>}
      </div>
    </>
  );
};

export default Page;
