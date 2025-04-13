import React, { useCallback, useMemo, useState } from "react";
import "../../../Style/singup.css";
import Lottie from "lottie-react";
import classes from "../../../Style/inputBoxs.module.css";

import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Stepper from "react-stepper-horizontal";
import FormButton from "../../Common/FormButton";
import me from "../../../assets/Je3eTqQJrt.json";
import useAPI from "../../../Hooks/USER/useAPI";
import FormContainer from "../../Common/FormContainer";
import "../../../Style/login.css";
import InputText from "../validateInputs";
import { isValidStep5 } from "../../../Auth/isValidate";
import { toast } from "react-toastify";

const Step5 = ({ setScreen }) => {
  const lottie = (
    <Lottie
      animationData={me}
      loop={true}
      style={{ height: "100%", width: "100%" }}
    />
  );

  const [jobTitle, setJobTitle] = useState("");
  const [userType, setUserType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDateWork, setStartDateWork] = useState("");
  const [endDateWork, setEndDateWork] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [isFresher, setIsFresher] = useState(false);
  const [input, setInput] = useState([]);

  const handleEnterResponsibilitesEvent = (e) => {
    if (e.key == "Enter") {
      setResponsibilities([...responsibilities, input]);
      e.target.value = "";
    }
  };

  const handleEnterAchievementEvent = (e) => {
    if (e.key == "Enter") {
      setAchievements([...achievements, input]);
      e.target.value = "";
    }
  };

  const api = useAPI();

  const { usePatchREQUEST } = api;

  const isValidateStep5 = [
    jobTitle,
    companyName,
    startDateWork.length,
    endDateWork.length,
    responsibilities.length,
    achievements.length,
  ].every(Boolean);

  console.log("call--isValidateStep5", isValidateStep5);

  // const handleSubmit = useCallback(async () => {
  //         const id = localStorage.getItem("upd_id");
  //         const data = await api.usePatchREQUEST(
  //           "updateDetails",
  //           "users",
  //           id,
  //           {
  //             experience: [
  //               {
  //                 isFresher,
  //                 jobTitle,
  //                 companyName,
  //                 userType,
  //                 startDateWork,
  //                 endDateWork,
  //                 responsibilities,
  //                 achievements,
  //               },
  //             ],
  //           }
  //         );
  //         setScreen("step6");
  // }, [
  //     jobTitle,
  //     companyName,
  //     startDateWork,
  //     userType,
  //     endDateWork,
  //     responsibilities,
  //     achievements,
  // ]);

  const { mutate, isPending } = api.usePatchREQUEST({
    PATH: "updateDetails",

    onSuccess: (data) => {
      toast.success(data.message);
      setScreen("step6");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });


  const handleSubmit = () => {
    const id = localStorage.getItem("upd_id");

    mutate({
      COLUMNS: {
        experience: [
          {
            isFresher,
            jobTitle,
            companyName,
            userType,
            startDateWork,
            endDateWork,
            responsibilities,
            achievements,
          },
        ],
      },
      _id: id,
      COLLECTION_NAME: "users",
    });
  };

  return (
    <FormContainer
      heading={"Sign Up"}
      leftSection={lottie}
      arrayValuesResp={responsibilities}
      setArrayResp={setResponsibilities}
      arrayValuesAch={achievements}
      setArrayAch={setAchievements}
      title={
        <>
          <div className="flexCheckbox">
            <input type="checkbox" onClick={() => setIsFresher(!isFresher)} /> I
            don't have an any experience.
          </div>
        </>
      }
      navigat={
        <p className="--navLink">
          Already have an account : <Link to={"/login"} style={{color:"blue"}}>Login !</Link>
        </p>
      }
      slogan={
        <Stepper
          style={{ color: "#001f3f" }}
          steps={[{}, {}, {}, {}, {}, {}]}
          activeStep={4}
        />
      }
      textbox1={
        <InputText
          onChange={(e) => setJobTitle(e)}
          id="JobTitle"
          inputType={"text"}
          placeHolder={"Job Title*"}
          require={true}
        />
      }
      textbox2={
        <InputText
          id="CompanyName"
          onChange={(e) => setCompanyName(e)}
          inputType={"text"}
          placeHolder={"Company Name*"}
          require={true}
        />
      }
      textbox6={
        <InputText
          id="Employeement Type"
          onChange={(e) => setUserType(e)}
          inputType={"text"}
          placeHolder={"Employeement type*"}
          require={true}
        />
      }
      textbox4={
        <InputText
          onChange={(e) => setStartDateWork(e)}
          id="StartDate"
          inputType={"date"}
          require={true}
          label={"Start date*"}
        />
      }
      textbox5={
        <InputText
          id="EndDate"
          onChange={(e) => setEndDateWork(e)}
          inputType={"date"}
          require={true}
          label={"End date*"}
        />
      }
      textbox7={
        <input
          onChange={(e) => setInput(e.target.value)}
          type={"text"}
          className={`${classes.input}`}
          onKeyUp={(e) => handleEnterResponsibilitesEvent(e)}
          placeholder="Responsiblities*(press enter to add)"
          require={false}
        />
      }
      textbox8={
        <input
          onChange={(e) => setInput(e.target.value)}
          type={"text"}
          className={`${classes.input}`}
          onKeyUp={(e) => handleEnterAchievementEvent(e)}
          placeholder="Achievements*(press enter to add)"
          require={false}
        />
      }
      button1={
        <FormButton
          text={"back"}
          onClick={() => setScreen("step4")}
        />
      }
      button2={
        <FormButton
          text={"Next"}
          loading={isPending}
          isDisabled={isPending || (!isFresher && !isValidateStep5)}
          onClick={() => {
            handleSubmit();
          }}
        />
      }
    />
  );
};

export default Step5;
