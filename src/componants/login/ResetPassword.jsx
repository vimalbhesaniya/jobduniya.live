import React, { useCallback, useState } from "react";
import "./ResetPassword.css"
import css from "../../Style/inputBoxs.module.css"

  const ResetPassword = ({ close }) => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [step, setStep] = useState(1); // 1: Email input, 2: OTP input, 3: New password input
    const [isClose, setIsClose] = useState(false);
    const [message, setMessage] = useState("");

    const handleClose = useCallback(() => {
      setIsClose(!isClose);
      close(isClose);
    }, [isClose]);

    const handleEmailSubmit = async (e) => {
      e.preventDefault();
      setMessage('');
      if (email.length >= 2) {    
          const response = await fetch("http://localhost:5500/forgot", {
              body: JSON.stringify({ email }),
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                },
            }).then((e) => e.json());
            if (response.status) {
                alert(response.result.message)
                setStep(2);
                setMessage("");
            }
            else {
                alert(response.message)
            }
        }
        else{
            alert("provide email");
        }
    };

    const handleOtpSubmit = async (e) => {
      e.preventDefault();
      if (otp.length === 6) {
        
          const response = await fetch("http://localhost:5500/checkOTP", {
              body: JSON.stringify({ otp, email }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
    }).then((e) => e.json());
      if (!response.success) {
          setMessage("OTP is Not valid");
      }
      else {
        setStep(3);
        setMessage("You can change the password");
    }
}
else{
    alert("invalid otp ")
}
};

    const handlePasswordReset = async (e) => {
      e.preventDefault();
      // Implement password reset logic here (server-side logic in a real app).
      // For this example, let's assume the password is successfully reset.
      const response = await fetch("http://localhost:5500/changePwd", {
        body: JSON.stringify({ email, password }),
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((e) => e.json());
      if (response.success) {
        setMessage("Password reset successfully!");
        close(false)
      }
    };

    return (
      <div className="forgot-password-container">
        <div className="forgot-password-popup">
          <button className="close-button" onClick={() => handleClose()}>
            x
          </button>
          <div className="popup-content">
            {step === 1 && (
              <form onSubmit={handleEmailSubmit}>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  className={`${css.input} mb-2 mt-2`}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="bgbtn btn">
                  Submit
                </button>
              </form>
            )}
            {step === 2 && (
              <form onSubmit={handleOtpSubmit}>
                <label>OTP:</label>
                <input
                  type="text"
                  value={otp}
                  className={`${css.input} mb-2 mt-2`}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button type="submit" className="btn bgbtn">
                  Submit
                </button>
              </form>
            )}
            {step === 3 && (
              <form onSubmit={handlePasswordReset}>
                <label>New Password:</label>
                <input
                  type="password"
                  className={`${css.input} mb-2 mt-2`}

                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn bgbtn">
                  Reset Password
                </button>
              </form>
            )}
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      </div>
    );
  };

export default ResetPassword;
