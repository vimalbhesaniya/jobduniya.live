import React, { useMemo,useCallback, useState } from "react";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import { Autocomplete } from '@lob/react-address-autocomplete'
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import FormSelectBox from "../../Common/FormSelectBox";
import me from "../../../assets/Je3eTqQJrt.json";
import { Link } from "react-router-dom";
import useAPI from "../../../Hooks/USER/useAPI";
import FormContainer from "../../Common/FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import { isValidStep3 } from "../../../Auth/isValidate";

const Step3 = ({ setScreen }) => {

    const lottie = (
        <Lottie
            animationData={me}
            loop={true}
            style={{ height: "100%", width: "100%" }}
        />
    );

    const [personalAddress, setPersonalAddress] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [stateValue, setStateValue] = useState("");
    
    const api = useAPI();
    
    const [state, setState] = useState("");
    const handleState = (stateValue) => {
        setStateValue(stateValue);
    };

    const [city, setCity] = useState("");
    const handleCity = (city) => {
        setCity(city);
    };

    const isValidateStep3 = useMemo(() => isValidStep3(stateValue, city, personalAddress, pinCode), [stateValue, city, personalAddress, pinCode]);

    const handleSubmit = useCallback(async () => {
        const id = localStorage.getItem("upd_id");
        const data = await api.patchREQUEST("updateDetails", "users", id, { location:
            [{personalAddress,pinCode,state,city}]
        })
        setScreen("step4")
    }, [  stateValue , city ,personalAddress,pinCode ])


    return (
        <FormContainer
            heading={"Sign Up"}
            leftSection={lottie}
            title={
                "Rooted in City, thriving in State, and always ready to embrace the next exciting chapter wherever life takes me."
            }
            navigat={
                <p className="--navLink">
                    Already have an account : <Link to={"/login"}>Login !</Link>
                </p>
            }
            slogan={
                <Stepper
                    style={{ color: "#001f3f" }}
                    steps={[{}, {}, {}, {}, {}, {}]}
                    activeStep={2}
                />
            }
            textbox1={
                <InputText
                    inputType={"text"}
                    onChange={(e) => setPersonalAddress(e)}
                    placeHolder={"Personal Address"}
                />
            }
            textbox2={
                <FormSelectBox
                    type="text"
                    // warning="states"
                    className="--input"
                    arrayKey="states"
                    selectedState={stateValue}
                    stateValue={handleState}
                    selectedCity={city}
                    state={setState}
                    city={handleCity}
                />
            }
            textbox3={
                <FormSelectBox
                    className={"--input"}
                    arrayKey="cities"
                    selectedState={stateValue}
                    stateValue={handleState}
                    selectedCity={city}
                    state={setState}
                    city={handleCity}
                />
            }
            textbox4={
                <InputText
                    id={"Pincode"}
                    onChange={(e) => setPinCode(e)}
                    inputType={"text"}
                    placeHolder="PinCode"
                />
            }
            button1={
                <FormButton
                    className={"--btn"}
                    text={"back"}
                    onClick={() => {
                        setScreen("step2");
                    }}
                />
            }
            button2={
                <FormButton
                    className={!isValidateStep3 ? "--btnDisabled" : "--btn"}
                    isDisabled={!isValidateStep3}
                    text={"next"}
                    onClick={() => {
                        handleSubmit()
                    }}
                />
            }
        />
    )
}

export default Step3