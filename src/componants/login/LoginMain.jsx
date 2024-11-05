// import React, { useState  , useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie'
// import LoginAsUser from "../../UserSide/LoginAsUser"
// import LoginAsCompany from "../../CompanySide/components/LoginAsCompany"
// import "../../Style/login.css"

// const LoginMain = () => {
//     const [screen ,setScreen] = useState("user")
//     const naviget = useNavigate();
//     useEffect(() => {   
//         const token = Cookies.get("token");
//         if (token) {
//             naviget("/home");
//         }
//     }, [])
//     return (
        
//                 <LoginAsUser />
//     )
// }

// export default LoginMain