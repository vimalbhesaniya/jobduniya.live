import React, { useEffect, useMemo, useState } from "react";
// import FormButton from "../componants/FormButton";
import me from "../../assets/companylogin.json"
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import InputText from "../../componants/signup/validateInputs";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import FormButton from "../../componants/Common/FormButton";
import FormContainer from "../../componants/Common/FormContainer";
import NavbarBeforeLogin from "../../componants/login/NavbarBeforeLogin";
import ResetPassword from "../../componants/login/ResetPassword";
import useAPI from "../../Hooks/USER/useAPI";
const LoginAsCompany = ({ setScreen }) => {
    
const api = useAPI()
  const x = new Date();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [close, setClose] = useState(false); 
  useEffect(() => {   
    const token = Cookies.get("token");
    if (token) {
        navigate("/dashboard");
    }
})

  const handleSubmit = async () =>{
    if (email.length >= 2 && password.length >= 2) {
        const RESPONSE = await api.postREQUEST("Clogin", JSON.stringify({ email, password }));

        if (RESPONSE.data) {
            toast.success("Login Successfully")
            alert(RESPONSE.token)
            Cookies.set("token" , RESPONSE.token)
            navigate("/dashboard");
        }
            // localStorage.setItem("data",JSON.stringify(RESPONSE.data));

        // } else {
        //     setErrorMessage(RESPONSE.error)
        //     console.log(RESPONSE)
        // }
    }
    else {
        setErrorMessage("Provide Email and Password");
    }
}

  const leftSection = (
    <div className="leftSectionHeader">
      <span>looking to Jobs ? </span>
      <span className="screentitle"  onClick={() => navigate("/loginasuser")}> Login as Seeker</span>
    </div>
  );

  return (
    <>
      {close ? <ResetPassword close={setClose} /> : ""}
      <NavbarBeforeLogin leftSection={leftSection} />
      <FormContainer
        warning={errorMessage}
        leftSection={
          <Lottie
            animationData={me}
            loop={true}
            style={{ height: "100%", width: "100%" }}
          />
        }
        heading={"Login As Company"}
        slogan={"Unlock Your Opportunities.Explore with Login !"}
        navigat={
          <>
            <p className="--navLink">
              No account yet? Time to <Link to={"/signup"}>Sign Up !</Link>
            </p>
          </>
        }
        textbox1={
          <InputText
            inputType={"email"}
            placeHolder={"Email"}
            onChange={(e) => setEmail(e)}
          />
        }
        textbox2={
          <InputText
            inputType={"password"}
            password={true}
            placeHolder={"Password"}
            onChange={(e) => setPassword(e)}
          />
        }
        button2={
          <FormButton
            className={"--btn"}
            text={"Login"}
            onClick={() => handleSubmit()}
          />
        }
        button1={
          <FormButton
            className={"--btn"}
            text={"Forgot Password"}
            onClick={() => setClose(true)}
          />
        }
      />
    </>
  );
};

export default LoginAsCompany;
