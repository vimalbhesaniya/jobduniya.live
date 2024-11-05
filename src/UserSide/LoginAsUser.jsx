import React, { useContext, useMemo, useState } from "react";
import FormButton from "../componants/Common/FormButton";
import server from "../assets/server.json"
import me from "../assets/me.json";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import FormContainer from "../componants/Common/FormContainer";
import InputText from "../componants/signup/validateInputs";
import { getApp } from "firebase/app";
import 'firebase/auth';
import { useNavigate, Link, json } from "react-router-dom";
import Lottie from "lottie-react";
import NavbarBeforeLogin from "../componants/login/NavbarBeforeLogin";
import ResetPassword from "../componants/login/ResetPassword";
import { EnableSpinner } from "..";
import useAPI from "../Hooks/USER/useAPI";

const LoginAsUser = ({ setScreen }) => {
    const api = useAPI();
    const navigate = useNavigate();
    
    const [setSpinnerState, spinner] = useContext(EnableSpinner)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [close, setClose] = useState(false);
    const [serverError, setServerError] = useState(false);
    const memo = useMemo(() => {
        return errorMessage;
    }, [errorMessage])

    const handleSubmit = async () => {
        if (email.length >= 2 && password.length >= 2) {
            const RESPONSE = await api.postREQUEST("login", JSON.stringify({ email, password }));
            if(RESPONSE?.data) {
                const userId = RESPONSE.id
                await api.postREQUEST("userWhoPerformFollow", JSON.stringify({ userId }));
                await api.postREQUEST("userWhoPerformFollowToCompany", JSON.stringify({ userId }));
                Cookies.set("id"  ,RESPONSE.id)
                Cookies.set("token" ,RESPONSE.token)
                localStorage.setItem("data",JSON.stringify(RESPONSE.data));
                toast.success("Login Successfully")
                navigate("/home");
            } else {
                setErrorMessage(RESPONSE.error)
                console.log(RESPONSE)
            }
        }
        else {
            setErrorMessage("Provide Email and Password");
        }
    }
    


    return (
        <>
            {close && <ResetPassword close={setClose} />}
            <NavbarBeforeLogin />
            <FormContainer
                warning={memo}
                leftSection={
                    <Lottie
                        animationData={serverError ? server : me}
                        loop={true}
                        style={{ height: "100%", width: "100%" }}
                    />
                }
                heading={"Sign In"}
                slogan={"Unlock Your Opportunities.Explore with Login !"}
                navigat={
                    <>
                        <p className="--navLink">
                            No account yet? Time to{" "}
                            <Link to={"/signup"}>Sign Up !</Link>
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

export default LoginAsUser;
