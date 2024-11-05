import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import useFirestorage from "../../Hooks/OTHER/useFirestorage";
import InputText from "../signup/validateInputs";
import edit from "../../Style/edit.module.css";
import success from "../../assets/success.json"
import Lottie from "lottie-react";
import { ActiveModal } from "../..";
import useAPI from "../../Hooks/USER/useAPI";
import { isValidApplication } from "../../Auth/isValidate";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import UploadPdf from "../../Hooks/OTHER/UploadPdf";
import useUploadPdf from "../../Hooks/OTHER/UploadPdf";

const Apply = ({ jobs }) => {
    const upload = useUploadPdf();
    const [activeModalState, setActiveModalState] = useContext(ActiveModal);
    const [progress, setProgress] = useState("0%");
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [userEmail, setUserEmail] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [form, setFrom] = useState("form1");
    const [cv, setCv] = useState();
    const id = localStorage.getItem("appliedID");
    const userId = Cookies.get("id");
    const api = useAPI();
    useEffect(() => {
        const search = async () => {
            try {
                const items = await api.getREQUEST(`jobs?id=${id}`);
                setData(items && items[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        const user = async () => {
            const data = await api.getREQUEST(`profile/${Cookies.get("id")}`);
            if (data[0]) {
                setUser(data[0]);
            }
        };
        search();
        user();
    }, []);

    const handleInput1 = useCallback(
        (e) => {
            const email = e.target.value;
            if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                setUserEmail(email);
            } else {
                setUserEmail("");
            }
        },
        [userEmail]
    );

    const handleInput2 = useCallback(
        (e) => {
            const phone = e.target.value;
            if (phone.match(/^[0-9]{10}$/)) {
                setPhoneNumber(phone);
            } else {
                setPhoneNumber("");
            }
        },
        [phoneNumber]
    );

    const handleChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
            toast.error("Please select a PDF file only!");
        }
    };

    useEffect(() => {
        setCv(upload.url);
    }, [upload.url])


    const handleNext1 = () => {
        setProgress("80%");
        setFrom("form2")
        localStorage.setItem("Email", userEmail);
        localStorage.setItem("phoneNumber", phoneNumber);
    };

    const handleNext2 = async () => {
        const yes = window.confirm("Are you sure you want to submit the application form?")
        if (yes) {
            const cId = data?.company?._id;
            const jobId = data._id
            const email = localStorage.getItem("Email");
            const phoneNumber = localStorage.getItem("phoneNumber");
            console.log(cId , jobId,email ,phoneNumber,cv);
            const RESPONSE = await api.postREQUEST("Apply", JSON.stringify({userId, email, phoneNumber, cv, cId, jobId }));
            setProgress("100%");
            setFrom("form3")
            toast.success("Application submited successfully")
        } else {
            setActiveModalState("")
            localStorage.clear();
        }

    };


    let isTrue = useMemo(() => {
        if (userEmail && phoneNumber) {
            return false;
        } else {
            return true;
        }
    }, [userEmail, phoneNumber]);


    return (
        <>
            <div className={`card h-auto card mt-5 p-3 ${edit.cardContainer}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <span className="text-muted fontDefaultTitle">
                            Apply to {data.company?.Name}
                        </span>
                    </div>
                    <div className="">
                        <span onClick={() => setActiveModalState("")}>
                            <i className="hand fa fa-close fs-4"></i>
                        </span>
                    </div>
                </div>
                <hr />
                <br />
                <div className="row">
                    <div class="progress rounded" style={{ height: "15px" }}>
                        <div
                            class="progress-bar rounded"
                            role="progressbar"
                            style={{ width: progress }}
                        >
                            <span>{progress}</span>
                        </div>
                    </div>
                </div>
                {form === "form1" ? (
                    <>
                        <span className="mt-3 fs-5">Contect Info</span>
                        <div className="row">
                            <div className="col-md-2 appImageContainer">
                                <img
                                    className="appImage"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBYfT1otzlFrFgIErgyxOyBbO37OM5JsaUA&usqp=CAU"
                                    alt=""
                                />
                            </div>
                            <div className="col-md-10 mt-3">
                                <div>
                                    <span style={{ fontWeight: "bold" }}>
                                        {user.firstName} {user.lastName}
                                    </span>
                                </div>
                                <div>
                                    <span
                                        className="font-weight-normal"
                                        style={{ fontSize: "small" }}
                                    >
                                        Student at{" "}
                                        {user.education &&
                                            user.education[0]?.univercity}
                                    </span>
                                </div>
                                <div>
                                    <span style={{ fontSize: "10px" }}>
                                        {user.location &&
                                            user.location[0]?.city}
                                        ,
                                        {user.location &&
                                            user.location[0]?.state}
                                        , india
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 gap-3 ">
                            <div className="col-12">
                                <label htmlFor="" className="form-label">
                                    Your email address*
                                </label>
                                <input
                                    type="email"
                                    required={true}
                                    placeholder="Email address"
                                    className={
                                        userEmail
                                            ? "form-control"
                                            : `${edit.inputText}  border-danger `
                                    }
                                    onChange={(e) => handleInput1(e)}
                                />
                                <span>{errorMsg}</span>
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className="form-label">
                                    Phone number*
                                </label>
                                <input
                                    type="text"
                                    maxLength={10}
                                    onChange={(e) => handleInput2(e)}
                                    inputMode="numeric"
                                    className={
                                        phoneNumber
                                            ? "form-control"
                                            : `${edit.inputText}  border-danger `
                                    }
                                    placeholder="Phone Number"
                                />
                                <span>{ }</span>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <span style={{ fontSize: "10px" }}>
                                Submitting this application won’t change your
                                JobDuniya profile.
                            </span>
                            <span style={{ fontSize: "10px" }}>
                                Application powered by JobDunya
                            </span>
                        </div>
                        <hr />
                        <div className="row text-end ">
                            <div>
                                <button
                                    className={
                                        isTrue
                                            ? "disabled btn bgbtn text-end"
                                            : `btn bgbtn text-end  `
                                    }
                                    onClick={handleNext1}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )}
                {form == "form2" ? (
                    <>
                        <span className="mt-3 fs-5">Upload your resume</span>
                        <div className="row mt-3 gap-3 ">
                            <div className='col-12'>
                                <label htmlFor="" className='form-label '></label>
                                <input
                                    type="file"
                                    required={true}
                                    typeof="application/pdf"
                                    className={"form-control"}
                                    onChange={handleChange}
                                />
                                {upload.uploadProgress ? <div class="progress rounded" style={{ height: "10px" }}>
                                    <div
                                        class="progress-bar rounded"
                                        role="progressbar"
                                        style={{ width: `${upload.uploadProgress}%` }}
                                    >
                                        <span>{upload.uploadProgress}</span>
                                    </div>
                                </div> : ""}
                            </div>
                        </div>
                        <div className="row mt-4">
                            <span style={{ fontSize: "10px" }}>
                                Submitting this application won’t change your
                                JobDuniya profile.
                            </span>
                            <span style={{ fontSize: "10px" }}>
                                Application powered by JobDunya
                            </span>
                        </div>
                        <hr />
                        <div className="row text-end ">
                            <div>
                                {!cv ? <button
                                    className={
                                        !selectedFile
                                            ? "disabled btn bgbtn text-end"
                                            : `btn bgbtn text-end  `
                                    }
                                    onClick={() => upload.handleUpload(selectedFile)}
                                >
                                    Next
                                </button>
                                    : <button
                                        className={
                                            !selectedFile
                                                ? "disabled btn bgbtn text-end"
                                                : `btn bgbtn text-end  `
                                        }
                                        onClick={() => handleNext2()}
                                    >
                                        Submit Application
                                    </button>
                                }
                            </div>
                        </div>
                    </>
                ) : (
                    ""
                )
                }
                {
                    form == "form3" ? (
                        <>
                            {" "}
                            <span className="mt-3 fs-5">Your Application have been submited.</span>
                            <div className="row mt-3 gap-3 h-50 d-flex  justify-content-center  align-content-center ">
                                <div className="w-50 d-flex justify-content-center  align-content-center  h-25">
                                    <Lottie animationData={success} width={100} > </Lottie>
                                </div>
                            </div>
                        </>
                    ) : (
                        ""
                    )
                }
            </div >
        </>
    );
};

export default Apply;