import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, onClose }) => (
  <div className="modal">
    <div className="modal__items">
      <button className="buttonPrimary" onClick={onClose}>X</button>
    </div>
    <div className="modal__body">
      {children}
    </div>

  </div>
);

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('modal'),
  );
}
