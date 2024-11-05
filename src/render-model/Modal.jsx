import React, { CSSProperties, MouseEventHandler, ReactElement } from "react";
import classes from "./index.module.css";


const Modal = ({
  body,
  onClose,
  closeBtn = true,
  backgroundstyle,
  modalstyle,
  animate
}) => {
    console.log(body);
  return (
    <div className={`${classes.background} animate__animated ${animate}`} style={backgroundstyle}>
      <div className={`${classes.modal}`} style={modalstyle}>
        {closeBtn && (
          <button className={classes["close-btn-user"]} onClick={onClose}>
            <i className="ri-close-line ri-xl"></i> 
          </button>
        )}
        <>{body}</>
      </div>
    </div>
  );
};

export default Modal;
