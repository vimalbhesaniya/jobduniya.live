import React, { useCallback, useMemo, useState } from "react";
import classes from "../../Style/inputBoxs.module.css";

const InputText = ({
  onChange,
  id,
  label,
  inputType,
  placeHolder,
  warning,
  password,
  require,
  minLength = 0,
  maxLength = 100,
  value,
  onEnterHandler,
}) => {
  //Validating email if type is email
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const [type, setType] = useState(inputType);
  const [warningState, setWarningState] = useState("");
  const onInputChangeHandler = useCallback(
    (e) => {
      if (
        e.target.value.toString().trim() === "" ||
        e.target.value.toString().length < minLength ||
        e.target.value.toString().length > maxLength
      ) {
        setWarningState(warning);
      } else {
        if (type === "email") {
          if (validateEmail(e.target.value)) {
            setWarningState("");
            onChange(e.target.value);
          } else {
            setWarningState("Please enter a valid email");
          }
        } else {
          setWarningState("");
          onChange(e.target.value);
        }
      }
    },
    [type]
  );

  const renderEyeButton = useMemo(() => {
    if (type === "password") {
      return (
        <i
          class={`fa-solid fa-eye ${classes.eyediv}`}
          onClick={() => setType("text")}
          style={{ cursor: "pointer" }}
        ></i>
      );
    } else {
      return (
        <i
          className={`fa-solid fa-eye-slash ${classes.eyediv}`}
          style={{ cursor: "pointer" }}
          onClick={() => setType("password")}
        ></i>
      );
    }
  }, [type]);
  return (
    <div className={classes.inputText}>
      <label className={classes.inputLabel} htmlFor={id}>
        {label}
      </label>
      <div className={classes.inputdiv}>
        <input
          className={`${classes.input} ${
            warningState !== "" ? classes.inputerror : ""
          }`}
          type={type}
          name={id}
          placeholder={placeHolder}
          id={id}
          required={require ?? true}
          onChange={onInputChangeHandler} 
          minLength={minLength}
          maxLength={maxLength}
          onKeyUp={onEnterHandler}
          value={value}
        />
        {password && renderEyeButton}
      </div>
      <span className={classes.warning}>{warningState}</span>
    </div>
  );
};

export default InputText;
