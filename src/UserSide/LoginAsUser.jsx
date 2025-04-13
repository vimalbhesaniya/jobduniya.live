import React, { useContext, useMemo, useState } from "react";
import FormButton from "../componants/Common/FormButton";
import server from "../assets/server.json";
import me from "../assets/me.json";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import FormContainer from "../componants/Common/FormContainer";
import InputText from "../componants/signup/validateInputs";
import { getApp } from "firebase/app";
import "firebase/auth";
import { useNavigate, Link, json } from "react-router-dom";
import Lottie from "lottie-react";
import NavbarBeforeLogin from "../componants/login/NavbarBeforeLogin";
import ResetPassword from "../componants/login/ResetPassword";
import { EnableSpinner } from "..";
import useAPI from "../Hooks/USER/useAPI";

const LoginAsUser = () => {
  const api = useAPI();
  const navigate = useNavigate();

  const { usePostREQUEST } = api;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [close, setClose] = useState(false);

  const userMutation = usePostREQUEST({
    PATH: "userWhoPerformFollow",
  });

  const companyMutation = usePostREQUEST({
    PATH: "userWhoPerformFollowToCompany",
  });

  const { mutate, isPending } = usePostREQUEST({
    PATH: "login",
    onSuccess: (data) => {
      Cookies.set("id", data.id);
      Cookies.set("token", data.token);
      localStorage.setItem("data", JSON.stringify(data?.data));
      toast.success(data.message);
      navigate("/home");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const handleSubmit = async () => {
    mutate({
      email: email,
      password: password,
    });

    userMutation.mutate({ userId: Cookies.get("id") });
    companyMutation.mutate({ userId: Cookies.get("id") });
  };

  return (
    <>
      {close && <ResetPassword close={setClose} />}
      <NavbarBeforeLogin />
      <FormContainer
        warning={""}
        leftSection={
          <Lottie
            animationData={me}
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
              <Link to={"/signup"} style={{ color: "blue" }}>
                Sign Up !
              </Link>
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
            loading={isPending}
            isDisabled={isPending}
            text={"Login"}
            onClick={() => handleSubmit()}
          />
        }
        button1={
          <FormButton text={"Forgot Password"} onClick={() => setClose(true)} />
        }
      />
    </>
  );
};

export default LoginAsUser;
