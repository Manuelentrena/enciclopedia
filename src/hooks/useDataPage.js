import { useContext } from "react";
import getImages from "services/getImages";
import getImageUrl from "services/getImageUrl";
import ImagesContext from "provider/ImagesContext";

export const useDataPage = () => {
  const { setImages } = useContext(ImagesContext);

  async function getlistImages({ id, limit }) {
    setImages([]);
    const images = await getImagesByArticle({ id, limit });
    if (images) {
      const listPromisesUrl = [];
      images.forEach((img) => {
        listPromisesUrl.push(getUrlImagen({ img }));
      });
      Promise.all(listPromisesUrl).then((ListUrl) => {
        setImages(ListUrl);
      });
    }
  }

  function getImagesByArticle({ id, limit }) {
    return getImages({ id, limit }).then(
      (results) => results.query.pages[id].images
    );
  }

  async function getUrlImagen({ img }) {
    const search = encodeURI(img.title);
    const res = await getImageUrl({ search });

    const idPage = Object.keys(res?.query?.pages);
    if (!idPage) return null;
    const info = res?.query?.pages[idPage]?.imageinfo;
    if (!info) return null;
    const indexUrl = Object.keys(res?.query?.pages[idPage]?.imageinfo);
    console.log({ res, idPage, indexUrl });
    return res.query.pages[idPage].imageinfo[indexUrl].url;
  }

  return { getlistImages };
};
