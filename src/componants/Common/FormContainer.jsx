import React, { useContext } from "react";
import Lottie from "lottie-react";
import { ToastContainer } from "react-toastify";
import me from "../../assets/me.json";
import FormTextboxes from "./FormTextbox";
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import { Stepper } from "react-form-stepper";
import "../../Style/login.css";
import { ActiveModal } from "../..";
import Saved from "./Boxes";
const FormContainer = ({
    footerSection,
    handleSubmit,
    warning,
    setEmail,
    setPassword,
    arrayValuesCetrification,
    title,
    setArrayValuesCertification,
    textbox1,
    textbox2,
    textbox3,
    textbox4,
    arrayValues,
    textbox5,
    textbox6,
    textbox7,
    textbox8,
    textbox9,
    textbox10,
    heading,
    slogan,
    navigat,
    button1,
    button2,
    leftSection,
    setArray,
    setArrayResp,
    arrayValuesResp,
    setArrayAch,
    arrayValuesAch,
    arrayValuesSkill,
    arrayValuesLang,
    setArraySkill,
    setArrayLang,
}) => {
    const [activeModalState , setActiveModalState] = useContext(ActiveModal)
    return (
        <>
            <ToastContainer />
            <div className="--main">
                <div className="--left animate_animated animate__zoomIn">{leftSection}</div>
                <div className="--right">
                    <div className="--heading">
                        <span className="--headingText">{heading}</span>
                        <span className="--sloganText">{slogan}</span>
                        <span className="--titleText">{title}</span>
                        <span className="--waring">{warning}</span>
                    </div>
                    <div className="Forms">
                        {textbox1}
                        <Saved array={arrayValuesSkill} setArray={setArraySkill} />
                        <Saved array={arrayValues} setArray={setArray} />
                        <div className="--form">
                            {textbox2}
                            {textbox3}
                        </div>
                        <Saved array={arrayValuesLang} setArray={setArrayLang} />
                        <div className="--form">
                            {textbox4}
                            {textbox5}
                        </div>
                        {textbox6}
                        <div className="--form">
                            <Saved array={arrayValuesResp} setArray={setArrayResp} />
                            <Saved array={arrayValuesCetrification} setArray={setArrayValuesCertification} />
                        </div>
                            {textbox7}
                        <Saved array={arrayValuesAch} setArray={setArrayAch} />
                        {textbox8}
                        {textbox9}
                        {textbox10}
                        <div className="--form">
                            {button1}
                            {button2}
                        </div>
                    </div>
                    <div className="signUpFooter">
                        <span>{navigat}</span>
                        <div className="--flexCenter">
                        <span   className="badge bg-primary-subtle hand text-primary  ">Privacy Policy</span>
                        <span onClick={()=>{setActiveModalState("terms")}} className="badge bg-primary-subtle  hand text-primary  ">Terms and conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormContainer;
