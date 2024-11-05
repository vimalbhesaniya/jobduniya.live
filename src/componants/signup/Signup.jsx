import React, {useState } from "react";
import "../../Style/singup.css";
import NavbarBeforeLogin from "../login/NavbarBeforeLogin";
import {  useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";
import "../../Style/login.css";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";


const Signup = () => {
  const [screen, setScreen] = useState("step1");
  
  const navigate = useNavigate();
  if (Cookies.get("token")) {
    navigate("/home");
  }

  return (
    <>
      <NavbarBeforeLogin
        leftSection={"Unlock Your World, One Login at a Time!"}
      />
      {screen === "step1" ? <Step1 setScreen={setScreen}  /> : ""}
      {screen === "step2" ? <Step2 setScreen={setScreen} /> : ""}
      {screen === "step3" ? <Step3 setScreen={setScreen} /> : ""}
      {screen === "step4" ? <Step4 setScreen={setScreen} /> : ""}
      {screen === "step5" ? <Step5 setScreen={setScreen} /> : ""}
      {screen === "step6" ? <Step6 setScreen={setScreen} /> : ""}
        
      {/* <Footer></Footer> */}
    </>
  );
};

export default Signup;
