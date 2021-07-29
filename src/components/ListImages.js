import React, { useEffect } from "react";
/* import Image from "components/Image";
import ImagesContext from "provider/ImagesContext"; */
import getTrendings from "services/getTrendings";

const ListImages = () => {
  /* const { images } = useContext(ImagesContext); */

  /* const result = () => {
    https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2021/07/12
    getlistOfSearch({ search: "UEFA_Euro_2020", numPag: 0 }).then((result) => {
      console.log(result);
    });
  }; */

  useEffect(() => {
    async function verDatos({ language }) {
      const data = await getTrendings({ language });
      console.log(data.items[0].articles);
    }
    verDatos({ language: "es" });
  }, []);

  return <></>;
};

export default ListImages;
