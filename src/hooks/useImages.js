import { useContext } from "react";
import getImages from "services/getImages";
import getImageUrl from "services/getImageUrl";
import ImagesContext from "provider/ImagesContext";

export const useImages = () => {
  const { setImages } = useContext(ImagesContext);

  async function getlistImages({ id, limit }) {
    setImages([]);
    const images = await getImagesByArticle({ id, limit });
    if (images) {
      const listImages = [];
      images.forEach((img) => {
        listImages.push({ title: img.title });
      });
      setImages(listImages);
    }
  }

  function getImagesByArticle({ id, limit }) {
    return getImages({ id, limit }).then(
      (results) => results.query.pages[id].images
    );
  }

  async function getImage({ title, size }) {
    const search = encodeURI(title);
    const url = await getImageUrl({ search, width: size });
    return url;
  }

  return { getlistImages, getImage };
};
