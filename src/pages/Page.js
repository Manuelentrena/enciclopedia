import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useImages } from 'hooks';
import wtf from 'wtf_wikipedia';
import {
  Header,
} from 'components';

const Page = () => {
  const { id } = useParams();
  const { getImageHeader } = useImages();
  const [src, setSrc] = useState(null);
  /* const [page, setPage] = useState(null); */

  useEffect(() => {
    if (id) {
      getImageHeader({ id, large: 1000 }).then((url) => {
        setSrc(url);
      });
    }
  }, []);

  useEffect(() => {
    async function getPage() {
      /* const res = await fetch('https://es.wikipedia.org/w/api.php?action=query&format=json&prop=cirrusbuilddoc&titles=Kylian_Mbapp%C3%A9&origin=*&format=json'); */
      /* const res = await fetch('https://en.wikipedia.org/w/api.php?action=parse&format=json&page=Kylian_Mbapp%C3%A9&prop=text&origin=*&format=json');
      const data = await res.json();
      const htmlPage = data.parse.text['*'];
      setPage(htmlPage); */
      wtf.fetch('Black_Sabbath', 'es').then((doc) => {
        console.log(doc.infobox().json());
      });
    }
    getPage();
  }, []);

  /*   useEffect(() => {
    page && console.log(page);
  }, [page]); */

  return (
    <>
      <Header isPage />
      <div className="quickpedia__body">
        <img src={src} alt="" />
        {/* <p>{parse(page)}</p> */}
      </div>
    </>
  );
};
export default Page;
