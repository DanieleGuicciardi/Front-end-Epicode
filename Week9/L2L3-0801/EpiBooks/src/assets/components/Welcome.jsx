import React, { useState } from "react";

const WelcomeAlert = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null; // Non mostrare l'alert se non è visibile

  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Welcome to EpiBooks!</strong> I hope you enjoy our list of books!
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={handleClose}
      ></button>
    </div>
  );
};

export default WelcomeAlert;