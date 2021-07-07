import React, { useContext, useEffect } from "react";
import Image from "components/Image";
import ImagesContext from "provider/ImagesContext";

const ListImages = () => {
  const { images } = useContext(ImagesContext);

  useEffect(() => {
    /* console.log("Render listImages..."); */
  });

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
