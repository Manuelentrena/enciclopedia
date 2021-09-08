import React from 'react';
import { Header, Spinner } from 'components';
import { useInfoPage } from 'hooks';

const Page = () => {
  const {
    getTitle, loading, getPageId, mainImg,
  } = useInfoPage();

  return (
    <>
      <Header isPage title={getTitle()} />
      <div className="quickpedia__body">
        { loading
          ? <Spinner />
          : (
            <>
              <h1>{getPageId()}</h1>
              <img src={mainImg} alt={getTitle()} />
            </>
          )}
      </div>
    </>
  );
};

export default Page;
