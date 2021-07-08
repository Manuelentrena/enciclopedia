import React from "react";

const SearchModal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__body">
        <button onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

export default SearchModal;
