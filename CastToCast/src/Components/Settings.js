import React, { useState } from "react";

function Settings({ onClose }) {
  const [isPopupOpen, setPopupOpen] = useState(true);

  const handleClose = () => {
    setPopupOpen(false);
    onClose();
  };

  return (
    <div className={`modal ${isPopupOpen ? "open" : ""}`}>
      <div className="modal-header">
        <p className="modal-title">Your Settings</p>
        <button className="close-button" onClick={handleClose}>
          X
        </button>
      </div>
      <div className="modal-content"></div>
    </div>
  );
}

export default Settings;
