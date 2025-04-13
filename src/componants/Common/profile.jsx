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
  const [user, setUser] = useState([]);
  const [location, setLocation] = useState([]);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [ln, setLn] = useState("");
  const [lnc, setLnc] = useState("");
  const id = Cookies.get("id");

  const { data } = api.useGetRequest({
    PATH: `profile/${Cookies.get("id")}`,
    enabled: true,
    initialData: {},
    key: ["fetch-user-profile"],
  });

  // const users = await api.getREQUEST(`getFollowings/${id}`)
  // // console.log(users);
  // setLn(users[0]?.targetId?.length);
  // const com = await api.getREQUEST(`fetchConnectedCompany/${id}`)
  // console.log(com);
  // setLnc(com[0]?.targetId?.length);

  // console.log(data?.experience[0]);

  // const User = useCallback(async () => {
  //     setLocation(data?.location);
  //     console.log(location);
  //     setCity(location[0].city);
  //     setState(location[0].state);
  //     console.log("city : ",city," state : ",state);
  //     const users=await api.getREQUEST(`getUser?userId=${id}&city=${city}&state=${state}`)
  //     if(users){
  //         setUser(users);
  //     }
  //     else{
  //         console.log("User not found");
  //     }
  // }, []);

  return (
    <ToggleEdit.Provider value={[isEditProfile, setIsEditProfile]}>
      <>
        {isEditProfile ? <GlobalModel modelName={<EditProfileForm />} /> : ""}
        <section style={{ backgroundColor: "#eee" }} className="mt-5">
          <div className="container py-5">
            <Title title={"User Profile"} />
            <div className="row">
              <div className="col-lg-4">
                <BasicInfo
                  firstName={data?.firstName}
                  lastName={data?.lastName}
                  description={data?.description}
                  profileImage={data?.profileImage}
                  profession={data?.profession}
                  city={data?.location && data?.location[0]?.city}
                  state={data?.location && data?.location[0]?.state}
                />
                <div className="card mb-4 mb-lg-0">
                  <Skills data={data && data?.skills} />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <SensetiveInfo
                    ln={ln}
                    lnc={lnc}
                    personalAddress={
                      data?.location && data?.location?.[0]?.personalAddress
                    }
                    langauge={data?.langauges}
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center gap-3 mt-2 mb-2">
                  <div>
                    <span
                      className={
                        screen == "education"
                          ? "setActive datainfoNavigator"
                          : "datainfoNavigator"
                      }
                      onClick={() => setScreen("education")}
                    >
                      Education
                    </span>
                  </div>
                  <div>
                    <span
                      className={
                        screen == "experience"
                          ? "setActive datainfoNavigator"
                          : "datainfoNavigator"
                      }
                      onClick={() => setScreen("experience")}
                    >
                      Experience
                    </span>
                  </div>
                  <div>
                    <span
                      className={
                        screen == "peoples"
                          ? "setActive datainfoNavigator"
                          : "datainfoNavigator"
                      }
                      onClick={() => setScreen("peoples")}
                    >
                      Peoples
                    </span>
                  </div>
                </div>
                <div className="sensetiveDataContainer">
                  {screen === "education" ? (
                    <Education
                      univercity={
                        data?.education && data?.education[0]?.univercity
                      }
                      school={data?.education && data?.education[0]?.school}
                      institutionName={
                        data?.education && data?.education[0]?.institutionName
                      }
                      degreeLevel={
                        data?.education && data?.education[0]?.degreeLevel
                      }
                      startDateSchool={
                        data?.education && data?.education[0]?.startDateSchool
                      }
                      endDateSchool={
                        data?.education && data?.education[0]?.endDateSchool
                      }
                      gpa={data?.education && data?.education[0]?.gpa}
                      certifications={
                        data?.education && data?.education[0]?.certifications
                      }
                    />
                  ) : (
                    ""
                  )}

                  {screen === "experience" ? (
                    <Experience
                      userType={
                        data?.experience && data?.experience[0]?.userType
                      }
                      jobTitle={
                        data?.experience && data?.experience[0]?.jobTitle
                      }
                      companyName={
                        data?.experience && data?.experience[0]?.companyName
                      }
                      startDateWork={
                        data?.experience && data?.experience[0]?.startDateWork
                      }
                      endDateWork={
                        data?.experience && data?.experience[0]?.endDateWork
                      }
                      responsibilities={
                        data?.experience &&
                        data?.experience[0]?.responsibilities
                      }
                      achievements={
                        data?.experience && data?.experience[0]?.achievements
                      }
                    />
                  ) : (
                    ""
                  )}
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
