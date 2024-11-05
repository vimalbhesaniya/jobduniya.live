import { useState, useCallback } from "react";
import useAPI from "../../../Hooks/USER/useAPI";
import Cookies from "js-cookie";

function EditExperience() {
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [userType, setUserType] = useState("");
    const [startDateWork, setStartDateWork] = useState("");
    const [endDateWork, setEndDateWork] = useState("");
    const [responsibilitie, setResponsibilities] = useState([]);
    const [achievement, setAchievements] = useState([]);
    const [input, setInput] = useState([]);

    const api = useAPI();

    const handleEnterResponsibilitesEvent = (e) => {
        if (e.key == "Enter") {
            setResponsibilities([...responsibilitie, input])
            e.target.value = ""
        }
    }

    const handleEnterAchievementEvent = (e) => {
        if (e.key == "Enter") {
            setAchievements([...achievement, input])
            e.target.value = "";
        }
    }

    const handleSubmit = useCallback(async () => {
        const id = Cookies.get("id");
        const responsibilities = responsibilitie?.split(",");
        const achievements = achievement.length > 0 && achievement?.split(",");
        const data = await api.patchREQUEST("updateDetails", "users", id, {
            experience: [
                {
                    jobTitle,
                    companyName,
                    userType,
                    startDateWork,
                    endDateWork,
                    responsibilities,
                    achievements
                },
            ],
        });
    }, [
        jobTitle,
        companyName,
        userType,
        startDateWork,
        endDateWork,
        responsibilitie,
        achievement
    ]);

    return (
        <div className="card container  w-100 bg-body-secondary cardContainer">
            <div className='d-flex justify-content-between align-align-items-center  '>
                <span className="mt-2 fs-2 mb-3 fw-bold " >Edit Experiencce Details</span>
                <span><i className='fa fa-close fs-2 mt-2 fw-bold'></i></span>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="" className="form-label" > Job Title :</label>
                    <input type="text" className="form-control " placeholder="jobTitle" required name="jobTitle" onChange={(e) => setJobTitle(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Company Name :</label>
                    <input type="text" className="form-control " placeholder="companyName " required name="companyName" onChange={(e) => setCompanyName(e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="" className="form-label">User Type :</label>
                    <input type="text" className="form-control " placeholder="userTypr " required name="userType" onChange={(e) => setUserType(e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Start Date Work :</label>
                    <input type="date" placeholder="startDateWork" className="form-control" name="startDateWork" onChange={(e) => setStartDateWork(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">End Date School :</label>
                    <input type="date" placeholder="endDateSchool" className="form-control" name="endDateSchool" onChange={(e) => setEndDateWork(e.target.value)} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="" className="form-label">Responsibilities :</label>
                    <input type="text" placeholder="responsibilitie-must be comma(,) separated" className="form-control" name="responsibilitie" onChange={(e) => setResponsibilities(e.target.value)} onKeyUp={(e) => handleEnterResponsibilitesEvent(e)} />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-12">
                    <label htmlFor="" className="form-label">Achievements :</label>
                    <input type="text" placeholder="achievements-must be comma(,) separated" className="form-control" name="achievements" onChange={(e) => setAchievements(e.target.value)} onKeyUp={(e) => handleEnterAchievementEvent(e)} />
                </div>
            </div>

            <button type="submit" value="Submit" className="btn btn-info w-25 mb-3sign" data-mdb-ripple-init onClick={() => handleSubmit()}>Save</button>
        </div>
    );
}

export default EditExperience;