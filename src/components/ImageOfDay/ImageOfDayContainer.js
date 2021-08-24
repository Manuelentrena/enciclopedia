import React, { useState, useEffect, useRef } from 'react';
import { useEventsOfDay, useGlobal } from 'hooks';
import { Spinner, Modal, ImageOfDay } from 'components';

export default function ImageOfDayContainer() {
  const { noScroll } = useGlobal();
  const { imageOfDay: img } = useEventsOfDay();
  const [showModal, setShowModal] = useState(false);

  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    noScroll(showModal);
  }, [showModal, noScroll]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleOpenClose = () => {
    setShowModal(false);
  };

  const zoom = (e) => {
    const realImg = imgRef.current;
    const realWidth = realImg.naturalWidth;
    const realHeight = realImg.naturalHeight;
    const ratio = realHeight / realWidth;
    const percentage = `${ratio * 100}%`;
    const boxWidth = containerRef.current.clientWidth;
    const xPos = e.pageX;
    const yPos = e.pageY;
    const xPercent = `${xPos / (boxWidth / 100)}%`;
    const yPercent = `${yPos / ((boxWidth * ratio) / 100)}%`;
    /* realImg.style.backgroundPosition = `${xPercent} ${yPercent}`;
    realImg.style.backgroundSize = `${realWidth}px`; */
    console.log(imgRef);
    console.log({
      percentage, boxWidth, xPos, yPos, xPercent, yPercent,
    });
  };

  const modal = showModal && (
  <Modal onClose={handleOpenClose}>
    <div ref={containerRef} className="modal__picture">
      <img ref={imgRef} className="modal__img" src={img.fullImg} alt={img.alt} onMouseMove={(e) => zoom(e)} />
    </div>
  </Modal>
  );

  return img
    ? <ImageOfDay modal={modal} handleOpenModal={handleOpenModal} img={img} />
    : <Spinner />;
}
