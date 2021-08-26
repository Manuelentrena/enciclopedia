import React from 'react';

export default function ImageOfDay({
  modal, img, handleOpenModal, iDest, author,
}) {
  return (
    <>
      <div className="imageOfDay">
        <picture className="imageOfDay__picture" onClick={handleOpenModal}>
          <img className="imageOfDay__img" src={img?.thumbnail} alt={img?.title} title={img?.title} />
          <div className="imageOfDay__label">
            <p className="imageOfDay__labelImg">{iDest}</p>
          </div>
        </picture>
        <div className="imageOfDay__body">
          <h3 className="imageOfDay__author">{`${author}: ${img?.alt}`}</h3>
          <hr />
          <p className="imageOfDay__desc">{img?.desc}</p>
        </div>
      </div>
      {modal}
    </>
  );
}
