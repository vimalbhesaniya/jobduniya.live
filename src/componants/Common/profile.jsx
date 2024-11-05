import React, { useCallback, useEffect, useState } from "react";
import "../../Style/profile.css";
import { Link } from "react-router-dom";
import BasicInfo from "../Profile/BasicInfo";
import Title from "../Profile/Title";
import Skills from "../Profile/Skills";
import SensetiveInfo from "../Profile/SensetiveInfo";
import EditProfile from "../Profile/Apply";
import GlobalModel from "../../Global/GlobalModel";
import EditProfileForm from "../Profile/EditProfileForm";
import DataContainer from "../Profile/DataContainer";
import Education from "../Profile/Education";
import Experience from "../Profile/Experience";
import Peoples from "../Profile/Peoples";
import { createContext } from "react";
import useAPI from "../../Hooks/USER/useAPI";
import Cookies from "js-cookie";
import Saved from "./Boxes";

const ToggleEdit = createContext();
const ToggleEducation = createContext();
const ToggleExperience = createContext();
const TogglePeoples = createContext();
const Profile = () => {
    const api = useAPI();

    const [isEditProfile, setIsEditProfile] = useState(false);
    const [screen, setScreen] = useState("education");
    const [user, setUser] = useState([])
    const [profile, setProfile] = useState([]);
    const [location, setLocation] = useState([]);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [ln, setLn] = useState("");
    const [lnc, setLnc] = useState("");
    const id = Cookies.get("id")

    const call = useCallback(async () => {
        const data = await api.getREQUEST(`profile/${Cookies.get("id")}`);
        if(data[0]){
            setProfile(data[0]);
        }
        const id = Cookies.get("id");
        const users = await api.getREQUEST(`getFollowings/${id}`)
        // console.log(users);
        setLn(users[0]?.targetId?.length);
        const com = await api.getREQUEST(`fetchConnectedCompany/${id}`)
        console.log(com);
        setLnc(com[0]?.targetId?.length);
        // if (data[0]) {
            //     setProfile(data[0]);
            //     setLocation(data[0].location[0])
            //     console.log(data);
            //     // console.log(location);
            // }
        }, []);
        // console.log(profile.experience[0]);

    const User = useCallback(async () => {
        setLocation(profile.location);
        console.log(location);
        setCity(location[0].city);
        setState(location[0].state);
        console.log("city : ",city," state : ",state);
        const users=await api.getREQUEST(`getUser?userId=${id}&city=${city}&state=${state}`)
        if(users){
            setUser(users);
        }
        else{
            console.log("User not found");
        }
    }, []);


    useEffect(() => {
        call();
        // User();
        // console.log(user);
    }, []);

    return (
        <ToggleEdit.Provider value={[isEditProfile, setIsEditProfile]}>
            <>
                {isEditProfile ? (
                    <GlobalModel modelName={<EditProfileForm />} />
                ) : (
                    ""
                )}
                <section style={{ backgroundColor: "#eee" }} className="mt-5" >
                    <div className="container py-5" >
                        <Title title={"User Profile"} />
                        <div className="row">
                            <div className="col-lg-4">
                                <BasicInfo
                                    firstName={profile.firstName}
                                    lastName={profile.lastName}
                                    description={profile.description}
                                    profileImage={profile.profileImage}
                                    profession={profile.profession}
                                    city={
                                        profile.location &&
                                        profile?.location[0]?.city
                                    }
                                    state={
                                        profile.location &&
                                        profile?.location[0]?.state
                                    }
                                />
                                <div className="card mb-4 mb-lg-0">
                                    <Skills data={profile && profile?.skills} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <SensetiveInfo
                                        ln={ln}
                                        lnc={lnc}
                                        personalAddress={
                                            profile.location &&
                                            profile.location[0].personalAddress
                                        }
                                        langauge={profile.langauges}
                                    />
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-3 mt-2 mb-2">
                                    <div>
                                        <span className={screen == "education" ? "setActive datainfoNavigator" : "datainfoNavigator"} onClick={() => setScreen("education")}>
                                            Education
                                        </span>
                                    </div>
                                    <div>
                                        <span className={screen == "experience" ? "setActive datainfoNavigator" : "datainfoNavigator"} onClick={() => setScreen("experience")}>
                                            Experience
                                        </span>
                                    </div>
                                    <div>
                                        <span className={screen == "peoples" ? "setActive datainfoNavigator" : "datainfoNavigator"} onClick={() => setScreen("peoples")}>
                                            Peoples
                                        </span>
                                    </div>
                                </div>
                                <div className="sensetiveDataContainer">
                                    {screen === "education" ?
                                        <Education
                                            univercity={
                                                profile.education &&
                                                profile?.education[0]?.univercity
                                            }
                                            school={
                                                profile.education &&
                                                profile?.education[0]?.school
                                            }
                                            institutionName={
                                                profile.education &&
                                                profile?.education[0]?.institutionName
                                            }
                                            degreeLevel={
                                                profile.education &&
                                                profile?.education[0]?.degreeLevel
                                            }
                                            startDateSchool={
                                                profile.education &&
                                                profile?.education[0]?.startDateSchool
                                            }
                                            endDateSchool={
                                                profile.education &&
                                                profile?.education[0]?.endDateSchool
                                            }
                                            gpa={
                                                profile.education &&
                                                profile?.education[0]?.gpa
                                            }
                                            certifications={
                                                profile.education &&
                                                profile?.education[0]?.certifications
                                            }
                                        /> : ""}

                                    {screen === "experience" ? <Experience
                                        userType={
                                            profile.experience &&
                                            profile?.experience[0]?.userType
                                        }
                                        jobTitle={
                                            profile.experience &&
                                            profile?.experience[0]?.jobTitle
                                        }
                                        companyName={
                                            profile.experience &&
                                            profile?.experience[0]?.companyName
                                        }
                                        startDateWork={
                                            profile.experience &&
                                            profile?.experience[0]?.startDateWork
                                        }
                                        endDateWork={
                                            profile.experience &&
                                            profile?.experience[0]?.endDateWork
                                        }
                                        responsibilities={
                                            profile.experience &&
                                            profile?.experience[0]?.responsibilities
                                        }
                                        achievements={
                                            profile.experience &&
                                            profile?.experience[0]?.achievements
                                        }
                                    /> : ""}


                                    {/* {screen === "peoples" ?
                                        user && user.map((e) => {
                                            return <Peoples
                                                profileImage={e.profileImage}
                                                firstName={e.firstName}
                                                lastName={e.lastName}
                                                profession={e.profession}
                                                city={
                                                    e.location &&
                                                    e?.location[0]?.city
                                                }
                                                state={
                                                    e.location &&
                                                    e?.location[0]?.state
                                                }
                                            />
                                        }) : ""} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </ToggleEdit.Provider>
    );
};

export default Profile;
export { ToggleEdit, ToggleEducation, ToggleExperience, TogglePeoples };

// // like button
// {
//     /* <button class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></button> */
// }

// {
//     /* <div class="row g-4">
//                                     <span className="text-muted  fs-4">People you may know</span>
//                                     <div class="col-sm-12 col-md-6 d-flex align-items-center">
//                                         <img class="flex-shrink-0 img-fluid border rounded" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={{ width: "80px", height: "80px" }} />
//                                         <div class="text-start ps-4">
//                                             <h5 class="mb-3">Yash Kalambe</h5>
//                                             <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>New York, USA</span>
//                                         </div>
//                                     </div>
//                                     <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
//                                         <div class="d-flex mb-3">
//                                             <button class="btn bgbtn text-nowrap me-3" href=""><i class="fa-solid fa-user-plus"></i> Connect</button>
//                                             <button class="btn bgbtn" href="">Profile</button>
//                                         </div>
//                                     </div>
//                                 </div> */
// }
