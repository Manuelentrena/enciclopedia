import React, { useContext } from "react";
import Image from "components/Image";
import ImagesContext from "provider/ImagesContext";

const ListImages = () => {
  const { images } = useContext(ImagesContext);

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
