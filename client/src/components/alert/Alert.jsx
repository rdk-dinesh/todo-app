import React from "react";
import "./Alert.css";

const Alert = ({ title, message, onClose }) => {
  return (
    <div className="custom-alert" style={{ borderLeft: title === 'error' ? '5px solid #FF0000' : '5px solid #28a745' }}>
      <div className="alert-content">
        <i className={`fa-regular ${title === 'error' ? 'fa-circle-xmark error-icon' : 'fa-circle-check success-icon'}`}></i>
        <div className="alert-text">
          <strong>{title}</strong>
          <p>{message}</p>
        </div>
      </div>
      <button type="button" className="btn-close custom-btn" onClick={onClose}></button>
    </div>
  );
};

export default Alert;