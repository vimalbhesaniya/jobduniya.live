// import React, { useCallback, useMemo, useEffect, useState } from "react";
// import "../Style/login.css";
// import { Link, useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import LoginAsCompany from "../../CompanySide/components/LoginAsCompany";
// import Check from "../../Auth/check";
// import LoginAsUser from "../../UserSide/LoginAsUser";
// import Cookies from "js-cookie";
// import NotFound from "./Notfound";
// import FormButton from "./FormButton";
// import FormContainer from "./FormContainer";
// import InputText from "../signup/validateInputs";
// import Lottie from "lottie-react";
// import me from "../../assets/me.json";
// import ResetPassword from "../login/ResetPassword";
// import NavbarBeforeLogin from "../login/NavbarBeforeLogin";

// const Login = () => {
//   const x = new Date();
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [close, setClose] = useState("");
//   const [progress, setProgress] = useState(0);


//   return (
//     <>

//       {close ? <ResetPassword  close={setClose} /> : ""}
//       <NavbarBeforeLogin></NavbarBeforeLogin>
//       <FormContainer
//         warning={errorMessage}
//         leftSection={
//           <Lottie
//             animationData={me}
//             loop={true}
//             style={{ height: "100%", width: "100%" }}
//           />
//         }
//         heading={"Sign In"}
//         slogan={"Unlock Your Opportunities.Explore with Login !"}
//         navigat={
//           <>
//             <p className="--navLink">
//               No account yet? Time to <Link to={"/signup"}>Sign Up !</Link>
//             </p>
//           </>
//         }
//         textbox1={
//           <InputText
//             inputType={"email"}
//             placeHolder={"Email"}
//             onChange={(e) => setEmail(e)}
//           />
//         }
//         textbox2={
//           <InputText
//             inputType={"password"}
//             password={true}
//             placeHolder={"Password"}
//             onChange={(e) => setPassword(e)}
//           />
//         }
//         button2={
//           <FormButton
//             className={"--btn"}
//             text={"Login"}
//             onClick={() => handleSubmit()}
//           />
//         }
//         button1={
//           <FormButton
//             className={"--btn"}
//             text={"Forgot Password"}
//             onClick={() => setClose(true)}
//           />
//         }
//       />
//     </>
//   );
// // =======
//     /*
//     const [progress, setProgress] = useState(0);
//     const [loginScreen, setLoginScreen] = useState("user");
//     const naviget = useNavigate();
//     const token = Cookies.get("token");
//     const yes = token ? true : false;
//     useEffect(() => {
//         if (token){
//             naviget("/home");
//         } 
//     })
//     return (
//         <>
//             {token?<NotFound></NotFound>:""}
//             {loginScreen == "user" ? (
//                 <LoginAsUser
//                     setProgress={setProgress}
//                     setLoginScreen={setLoginScreen}
//                     loginScreen={loginScreen}
//                 />
//             ) : (
//                 ""
//             )}
//             {loginScreen == "company" ? (
//                 <LoginAsCompany
//                     setLoginScreen={setLoginScreen}
//                     loginScreen={loginScreen}
//                 />
//             ) : (
//                 ""
//             )}
//         </>
//     );
// */
// // >>>>>>> 1a9b1ee7db0e607012318451be98ee9abd93385b
// };
// export default Login;
