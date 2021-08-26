import React, { useState, useEffect } from 'react';
import { useEventsOfDay, useGlobal } from 'hooks';
import { Spinner, ImageOfDay } from 'components';
import Lang from 'Translations';
import Lightbox from 'react-image-lightbox';

export default function ImageOfDayContainer() {
  const { noScroll, language: fx } = useGlobal();
  const { imageOfDay: img } = useEventsOfDay();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    noScroll(showModal);
  }, [showModal, noScroll]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleOpenClose = () => {
    setShowModal(false);
  };

  const modal = showModal && (
    <Lightbox
      mainSrc={img.fullImg}
      onCloseRequest={handleOpenClose}
      imageTitle={img.alt}
    />
  );

  const iDest = Lang.events.imageDest[fx];
  const author = Lang.events.author[fx];

  return img
    ? (
      <ImageOfDay
        modal={modal}
        handleOpenModal={handleOpenModal}
        img={img}
        iDest={iDest}
        author={author}
      />
    )
    : <Spinner />;
}
