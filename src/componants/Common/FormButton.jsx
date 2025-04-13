import React from "react";
import "../../Style/login.css";

const Loader = () => {
  return (
    <div
      class="spinner-border"
      style={{ height: "25px", width: "25px" }}
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  );
};

const FormButton = ({ loading, className, onClick, text, isDisabled }) => {
  return (
    <>
      <button
        className={isDisabled ? "--btnDisabled" : "--btn"}
        onClick={onClick}
        disabled={isDisabled}
      >
        {loading ? <Loader /> : text}
      </button>
    </>
  );
};

export default FormButton;
