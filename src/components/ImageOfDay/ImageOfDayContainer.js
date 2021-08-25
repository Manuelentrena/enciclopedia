import React, { useState, useEffect } from 'react';
import { useEventsOfDay, useGlobal } from 'hooks';
import { Spinner, ImageOfDay } from 'components';
import Lightbox from 'react-image-lightbox';

export default function ImageOfDayContainer() {
  const { noScroll } = useGlobal();
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

  return img
    ? <ImageOfDay modal={modal} handleOpenModal={handleOpenModal} img={img} />
    : <Spinner />;
}
