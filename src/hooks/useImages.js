import { useContext } from 'react';
import getImages from 'services/getImages';
import getImageUrl from 'services/getImageUrl';
import ImagesContext from 'provider/ImagesContext';
import GlobalContext from 'provider/global/globalContext';
import getImageById from 'services/getImageById';

export const useImages = () => {
  /* Context Images */
  const { setImages } = useContext(ImagesContext);
  /* Context Global */
  const { language } = useContext(GlobalContext);

  function getImagesByArticle({ id, limit }) {
    return getImages({ id, limit }).then(
      (results) => results.query.pages[id].images,
    );
  }

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

  async function getImage({ title, size }) {
    const search = encodeURI(title);
    const url = await getImageUrl({ search, width: size, language });
    return url;
  }

  function getImageHeader({ id, large, signal }) {
    return getImageById({
      id, large, signal, language,
    }).then((res) => res?.query?.pages[id]?.thumbnail?.source);
  }

  return { getlistImages, getImage, getImageHeader };
};
