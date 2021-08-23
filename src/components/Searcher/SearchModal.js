import React from 'react';
import ReactDOM from 'react-dom';

const SearchModal = ({ children, onClose }) => (
  <div className="searchModal" onClick={onClose}>
    <div className="searchModal__body">{children}</div>
  </div>
);

export default function SearchPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <SearchModal onClose={onClose}>{children}</SearchModal>,
    document.getElementById('searching'),
  );
}
