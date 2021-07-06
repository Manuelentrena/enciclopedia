import React, { useContext, useEffect } from "react";
import Image from "components/Image";
import ImagesContext from "provider/ImagesContext";

const ListImages = () => {
  const { images } = useContext(ImagesContext);

  useEffect(() => {
    /* console.log("Render listImages..."); */
    console.log(images);
  });

  return (
    <>
      <h2>IMAGES OF ARTICLE:</h2>
      {images
        ? images.map((url, index) => <Image key={index} url={url} />)
        : null}
    </>
  );
};

export default ListImages;
