import React from "react";

const Modal = ({ show, onClose, handleStartClick }) => {
  return (
    <div className={`modal ${show ? "show" : ""}`}>
      <div className="modal-content">
        <h2>Welcome to Your App!</h2>
        <button onClick={handleStartClick}>Start</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
