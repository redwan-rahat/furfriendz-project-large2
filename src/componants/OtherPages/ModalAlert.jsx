import React, { useEffect, useContext } from "react";
import { AuthContex } from "../AuthProvider/AuthProvider";


const ModalAlert = () => {
  const { visible, setVisible, type, message } = useContext(AuthContex);

  const alertStyles = {
    alert: "fixed scale-75 tab:scale-100 top-24 tab:top-5 -right-4  tab:right-5 p-4 mb-2 rounded-lg shadow-lg text-white w-72 transition-transform duration-500",
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    hidden: "translate-x-full",  
    visible: "translate-x-0",    
  };

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false); 
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [visible, setVisible]);

  return (
    visible && (
      <div
        className={`${alertStyles.alert} ${alertStyles[visible ? "visible" : "hidden"]} ${
          type === "success"
            ? alertStyles.success
            : type === "error"
            ? alertStyles.error
            : alertStyles.info
        } z-50`}
      >
        <p>{message}</p>
      </div>
    )
  );
};

export default ModalAlert;
