import React from "react";
import ReactDOM from "react-dom";

const SearchModal = ({ children, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__body">{children}</div>
    </div>
  );
};

export default function SearchPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <SearchModal onClose={onClose}>{children}</SearchModal>,
    document.getElementById("searching")
  );
}
