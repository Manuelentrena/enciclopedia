import React, { useState, useEffect } from 'react';
import { useEventsOfDay, useGlobal } from 'hooks';
import { Spinner, Modal, ImageOfDay } from 'components';

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
  <Modal onClose={handleOpenClose}>
    <img className="modal__img" src={img.fullImg} alt={img.alt} />
  </Modal>
  );

  return img
    ? <ImageOfDay modal={modal} handleOpenModal={handleOpenModal} img={img} />
    : <Spinner />;
}
