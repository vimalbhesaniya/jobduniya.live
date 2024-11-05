import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../Common/FormContainer";
import "../../../Style/login.css";
import useAPI from "../../../Hooks/USER/useAPI";
import InputText from "../validateInputs";
import { isValidStep1 } from "../../../Auth/isValidate";
import { toast } from "react-toastify";

const Step1 = ({ setScreen }) => {
    const lottie = (
        <Lottie
            animationData={me}
            loop={true}
            style={{ height: "100%", width: "100%" }}
        />
    );

    const api = useAPI();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const isValidateStep1 = useMemo(() =>
        isValidStep1(email, password, confirmPassword)
    );

    const handleSubmit = async () => {
        const response = await api.postREQUEST("addUser", JSON.stringify({ email, password }));
        localStorage.setItem("upd_id", response._id);
        if (response.success == false) {
            toast.error("A user with this email already exists. Please log in using your existing account credentials.");
        }
        else{
            setScreen("step2");
        }
    }
    return (
        <>
            <FormContainer
                heading={"Sign Up"}
                leftSection={lottie}
                title={
                    "Just to be sure, enter your password again. Double-check for a seamless and secure login."
                }
                slogan={<Stepper steps={[{}, {}, {}, {}, {}, {}]} activeStep={0} />}
                navigat={
                    <p className="--navLink">
                        Already have an account : <Link to={"/login"}>Login !</Link>
                    </p>
                }
                textbox1={
                    <InputText
                        inputType={"email "}
                        placeHolder={"Email*"}
                        onChange={(e) => setEmail(e)}
                    />
                }
                textbox2={
                    <InputText
                        inputType={"password"}
                        password={true}
                        placeHolder={"Password*"}
                        onChange={(e) => setPassword(e)}
                    />
                }
                textbox3={
                    <InputText
                        inputType={"password"}
                        password={true}
                        placeHolder={"Confirm Password*"}
                        onChange={(e) => setConfirmPassword(e)}
                    />
                }
                button2={
                    <FormButton
                        className={isValidateStep1 ? "--btnDisabled" : "--btn"}
                        text={"next"}
                        isDisabled={isValidateStep1}
                        onClick={() => handleSubmit()}
                    />
                }
            />
        </>
    );
};

export default Step1;
