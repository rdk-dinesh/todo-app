import React, { createContext, useContext, useState } from "react";

// Create Context for the alert
const AlertContext = createContext();

// Custom hook to use the AlertContext in other components
export const useAlert = () => {
  return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({
    title: "",
    message: "",
  });


  const handleShowAlert = (title, message) => {
    setAlertData({ title, message });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 6000); // Automatically hide after 3 seconds
  };

  return (
    <AlertContext.Provider value={{ showAlert, alertData, handleShowAlert, setShowAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
