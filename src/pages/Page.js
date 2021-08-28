import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useImages } from 'hooks';
import {
  Header,
} from 'components';

const Page = () => {
  const { id } = useParams();
  const { getImageHeader } = useImages();
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (id) {
      getImageHeader({ id, large: 1000 }).then((url) => {
        setSrc(url);
      });
    }
  }, []);

  return (
    <>
      <Header isPage />
      <div className="quickpedia__body">
        <img src={src} alt="" />
      </div>
    </>
  );
};
export default Page;
