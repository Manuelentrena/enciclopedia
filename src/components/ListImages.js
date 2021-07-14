import React, { useContext } from "react";
import Image from "components/Image";
import ImagesContext from "provider/ImagesContext";
import getlistOfSearch from "services/getlistOfSearch";

const ListImages = () => {
  const { images } = useContext(ImagesContext);

  const result = () => {
    /* https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2021/07/12 */
    getlistOfSearch({ search: "UEFA_Euro_2020", numPag: 0 }).then((result) => {
      console.log(result);
    });
  };

  /* result(); */

  return (
    <>
      <h2>IMAGES OF ARTICLE:</h2>

      {images
        ? images.map((img, index) => <Image key={index} title={img.title} />)
        : null}
    </>
  );
};

export default ListImages;
