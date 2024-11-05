import React, { useCallback, useMemo, useState } from "react";
import "../../../Style/singup.css";
import ProfessionBox from "../../Common/ProfessionBox";
import Lottie from "lottie-react";
import classes from "../../../Style/inputBoxs.module.css";
import "react-toastify/dist/ReactToastify.css";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import FormContainer from "../../Common/FormContainer";
import "../../../Style/login.css";
import { Link, useNavigate } from "react-router-dom";
import { isValidStep6 } from "../../../Auth/isValidate";
import InputText from "../validateInputs";
import useAPI from "../../../Hooks/USER/useAPI";


const Step6 = ({ setScreen }) => {
    const lottie = (
        <Lottie
            animationData={me}
            loop={true}
            style={{ height: "100%", width: "100%" }}
        />
    );

    const api = useAPI();
    const navigate = useNavigate()

    const [skills, setSkills] = useState([]);
    const [profession, setProfession] = useState("");
    const [input, setInput] = useState([]);
    const [langauges, setLanguages] = useState([]);
    const[description , setDescription]  = useState("");
    console.log(description);


    const isValidateStep6 = useMemo(
        () =>
            isValidStep6(
                skills, profession, langauges
            ),
        [
            skills, profession, langauges
        ]
    );

    const handleEnterSkillsEvent = (e) => {
        if (e.key == "Enter") {
            setSkills([...skills, input]);
            e.target.value = "";
        }
    };

    const handleEnterLangaugeEvent = (e) => {
        if (e.key == "Enter") {
            setLanguages([...langauges, input]);
            e.target.value = "";
        }
    };

    const handleSubmit = useCallback(async () => {
        const id = localStorage.getItem("upd_id");
        const data = await api.patchREQUEST("updateDetails", "users", id, {langauges , profession ,skills ,description});
        console.log(data);
        navigate("/loginasuser");

    }, [
        profession , skills ,langauges
    ]);

    return (
        <FormContainer
            arrayValuesSkill={skills}
            arrayValuesLang={langauges}
            setArraySkill={setSkills}
            setArrayLang={setLanguages}
            
            navigat={
                <p className="--navLink">
                    Already have an account : <Link to={"/login"}>Login !</Link>
                </p>
            }
            heading={"Sign Up"}
            leftSection={lottie}
            title={
                "Unleash your potential and let your unique abilities shine on the path to career success."
            }
            slogan={
                <Stepper
                    style={{ color: "#001f3f" }}
                    steps={[{}, {}, {}, {}, {}, {}]}
                    activeStep={5}
                />
            }
            textbox1={
                <ProfessionBox
                    onChange={(e) => setProfession(e.target.value)}
                    arrayKey="profession"
                    multiple={false}
                />
            }
            textbox2={
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type={"text"}
                    className={`${classes.input}`}
                    onKeyUp={(e) => handleEnterSkillsEvent(e)}
                    placeholder="Skills*(press enter to add)"
                    require={true}
                />
            }
            textbox4={
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type={"text"}
                    className={`${classes.input}`}
                    onKeyUp={(e) => handleEnterLangaugeEvent(e)}
                    placeholder="Langauge known*(press enter to add)"
                    require={true}
                />
            }
            textbox6={
                <InputText 
                    inputType={"text"}
                    onChange={(e => setDescription(e))}
                    placeHolder={"Describe your self"}
                />
            }
            button1={
                <FormButton
                    className={"--btn"}
                    text={"back"}
                    onClick={() => setScreen("step5")}
                />
            }
            button2={
                <FormButton
                    className={!isValidateStep6 ? "--btnDisabled" : "--btn"}
                    isDisabled={!isValidateStep6}
                    text={"Get Started"}
                    onClick={() => {
                        handleSubmit()
                    }}
                />
            }
        />
    );
};

export default Step6;
