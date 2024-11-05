import React, { useCallback, useMemo, useState } from "react";
import "../../../Style/singup.css";
import classes from "../../../Style/inputBoxs.module.css";
import Lottie from "lottie-react";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../Common/FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import { isValidStep4 } from "../../../Auth/isValidate";
import useAPI from "../../../Hooks/USER/useAPI";

const Step4 = ({ setScreen }) => {
    const lottie = (
        <Lottie
            animationData={me}
            loop={true}
            style={{ height: "100%", width: "100%" }}
        />
    );

    const api = useAPI();

    const [institutionName, setInstitutionName] = useState("");
    const [input, setInput] = useState([]);
    const [degreeLevel, setDegreeLevel] = useState([]);
    const [startDateSchool, setStartDateSchool] = useState("");
    const [endDateSchool, setEndDateSchool] = useState("");
    const [gpa, setGpa] = useState("");
    const [certifications, setCertifications] = useState([]);
    const [univercity, setUnivercity] = useState("");
    const [school, setSchool] = useState("");

    const isValidateStep4 = useMemo(
        () => isValidStep4(institutionName, endDateSchool, startDateSchool),
        [institutionName, startDateSchool, endDateSchool]
    );

    const handleEnterDegreeEvent = (e) => {
        if (e.key == "Enter") {
            setDegreeLevel([...degreeLevel, input]);
            e.target.value = "";
        }
    };

    const handleEnterCertificationEvent = (e) => {
        if (e.key == "Enter") {
            setCertifications([...certifications, input]);
            e.target.value = "";
        }
    };

    const handleSubmit = useCallback(async () => {
        const id = localStorage.getItem("upd_id");
        const data = await api.patchREQUEST("updateDetails", "users", id, {
            education: [
                {
                    institutionName,
                    degreeLevel,
                    startDateSchool,
                    endDateSchool,
                    gpa,
                    certifications,
                    school,
                    univercity,
                },
            ],
        }); 
        console.log(data);
        setScreen("step5");
    }, [
        institutionName,
        degreeLevel,
        startDateSchool,
        endDateSchool,
        gpa,
        certifications,
        univercity,
        school,
    ]);

    return (
        <FormContainer
            heading={"Sign Up"}
            leftSection={lottie}
            arrayValues={degreeLevel}
            setArray={setDegreeLevel}
            arrayValuesCetrification={certifications}
            setArrayValuesCertification={setCertifications}
            title={
                "Unlock your potential by sharing your educational journey because every degree is a stepping stone to success!"
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
                    activeStep={3}
                />
            }
            textbox1={
                <InputText
                    onChange={(e) => setInstitutionName(e)}
                    id={"School"}
                    inputType={"text"}
                    placeHolder="Name of the educational institution."
                    require={true}
                />
            }
            textbox2={
                <input
                    onChange={(e) => setInput(e.target.value)}
                    id="degree"
                    type={"text"}
                    className={`${classes.input}`}
                    onKeyUp={(e) => handleEnterDegreeEvent(e)}
                    placeholder="Type of degree obtained.(press enter to add)"
                    require={true}
                />
            }
            textbox4={
                <InputText
                    inputType={"date"}
                    onChange={(e) => setStartDateSchool(e)}
                    label={"Start Date"}
                    id={"start date"}
                    placeHolder="start date"
                />
            }
            textbox5={
                <InputText
                    onChange={(e) => setEndDateSchool(e)}
                    id={"enddate"}
                    inputType={"date"}
                    label={"End Date"}
                />
            }
            textbox6={
                <InputText
                    id={"gpa"}
                    inputType={"text"}
                    onChange={(e) => setGpa(e)}
                    placeHolder={"Enter GPA"}
                    require={false}
                />
            }
            textbox7={
                <input
                    onChange={(e) => setInput(e.target.value)}
                    id="degree"
                    type={"text"}
                    className={`${classes.input}`}
                    onKeyUp={(e) => handleEnterCertificationEvent(e)}
                    placeholder="write your certification courses(press enter to add)"
                    require={true}
                />
            }
            textbox8={
                <InputText
                    onChange={(e) => setSchool(e)}
                    inputType={"text"}
                    placeHolder={"school"}
                    require={false}
                />
            }
            textbox10={
                <InputText
                    onChange={(e) => setUnivercity(e)}
                    inputType={"text"}
                    placeHolder={"Univercity"}
                    require={false}
                />
            }
            button1={
                <FormButton
                    className={"--btn"}
                    text={"back"}
                    onClick={() => setScreen("step3")}
                />
            }
            button2={
                <FormButton
                    className={!isValidateStep4 ? "--btnDisabled" : "--btn"}
                    isDisabled={!isValidateStep4}
                    text={"Next"}
                    onClick={() => {
                        handleSubmit();
                    }}
                />
            }
        />
    );
};

export default Step4;
