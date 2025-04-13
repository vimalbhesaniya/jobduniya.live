import React, { useContext, useState, useCallback, useEffect } from "react";
import DataList from "./assets/DataList";
import edit from "../../Style/edit.module.css";
import ProfessionBox from "./assets/ProfessionBox";
import EditEducation from "./Edit/EditEducation";
import EditExperience from "./Edit/EditExperience";
import EditAddress from "./Edit/EditAddress";
import ProfilePreview from "../signup/Steps/profilePreview";
import { ToggleEdit } from "../Common/profile";
import useFirestorage from "../../Hooks/OTHER/useFirestorage";
import Cookies from "js-cookie";
import useAPI from "../../Hooks/USER/useAPI";
import { toast } from "react-toastify";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

const EditProfileForm = () => {
  const upload = useFirestorage();
  const [profilePicture, setProfilePicture] = useState("");
  const [image, setImage] = useState("");
  const [isEditProfile, setIsEditProfile] = useContext(ToggleEdit);
  const [education, setEducation] = useState();
  const [experience, setExperience] = useState();
  const [address, setAddress] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [profileImage, setprofileImage] = useState();
  const [skill, setSkills] = useState("");
  const [profession, setProfession] = useState();
  const [input, setInput] = useState([]);
  const [langauge, setLanguages] = useState("");
  const api = useAPI();
  const url = upload.imageUrl;
  
  const queryClient = useQueryClient()

  const handleEnterSkillsEvent = (e) => {
    if (e.key == "Enter") {
      setSkills([...skill, input]);
      e.target.value = "";
    }
  };

  const handleEnterLangaugeEvent = (e) => {
    if (e.key == "Enter") {
      setLanguages([...langauge, input]);
      e.target.value = "";
    }
  };

  useEffect(() => {
    console.log('call--url', url);


    setprofileImage(url);
  }, [url]);

  const { mutate } = api.usePatchREQUEST({
    PATH: "updateDetails",
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey : ["fetch-user-profile"]
        })

        setIsEditProfile(false)

      toast.success("Porfile updated successfully");
    },
  });

  const handleSubmit = useCallback(async () => {
    const langauges = langauge?.length > 0 && langauge?.split(",");
    const id = Cookies?.get("id");
    const skills = Array.isArray(skill) ? skill?.split(",") : "";

    mutate({
      COLUMNS: {
        profileImage,
        firstName,
        lastName,
        langauges,
        profession,
        skills,
      },
      _id: id,
      COLLECTION_NAME: "users",
    });
  }, [firstName, lastName, profileImage, langauge, profession, skill]);

  const handleFileChange = useCallback(async (event) => {
    const isConfirmed = window.confirm("Are you sure?");
    if (isConfirmed) {
      await upload.Upload(event.target.files[0]);
    }
  }, []);

  useEffect(() => {
    setprofileImage(url);
  }, [url]);
  return (
    <>
      <div
        className={`card container animate__animated ${
          isEditProfile ? `animate__bounceInDown` : `animate__bounceOutUp`
        } h-50  overflow-scroll bg-body-secondary ${edit.cardContainer}`}
      >
        <div className="d-flex justify-content-between align-align-items-center  ">
          <span className="mt-2 fs-2 mb-3 fw-bold ">Edit profile</span>
          <span>
            <i
              className="fa fa-close fs-2 mt-2 fw-bold"
              onClick={() => setIsEditProfile(false)}
            ></i>
          </span>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              {" "}
              First name :
            </label>
            <input
              type="text"
              className="form-control "
              placeholder="first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              Last name :
            </label>
            <input
              type="text"
              className="form-control "
              placeholder="last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-10">
            <label htmlFor="" className="form-label ">
              Profile picture :
            </label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => handleFileChange(e)}
            />
          </div>
          <div className="col-md-2">
            <ProfilePreview image={profileImage} />
          </div>
        </div>
        <div className="row mb-3 ">
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              Langauges :
            </label>
            <input
              list="langauge"
              placeholder="Langauges-must be comma(,) saparated"
              className="form-control"
              onChange={(e) => setLanguages(e.target.value)}
              onKeyUp={(e) => handleEnterLangaugeEvent(e)}
            />
            <DataList Id={"langauge"} />
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="form-label">
              Profession :
            </label>
            <input
              list="profession"
              placeholder="profession"
              className="form-control"
              onChange={(e) => setProfession(e.target.value)}
            />
            <ProfessionBox id={"profession"} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12">
            <label htmlFor="" className="form-label">
              Skills :
            </label>
            <input
              type="text"
              placeholder="Skills-must be comma(,) saparated"
              className="form-control"
              onChange={(e) => setSkills(e.target.value)}
              onKeyUp={(e) => handleEnterSkillsEvent(e)}
            />
          </div>
        </div>
        <button
          className="btn btn-success w-25 mb-3"
          data-mdb-ripple-init
          onClick={() => handleSubmit()}
        >
          Save
        </button>
        <div className="row">
          <div className="col-md mb-2 ">
            <p className="">Edit your education</p>
            <button
              className="btn btn-info"
              onClick={() => setEducation(!education)}
            >
              {!education ? `Education` : `Close`}
            </button>
          </div>
        </div>
        {education && <EditEducation />}
        <div className="row">
          <div className="col-md mb-2 ">
            <p className="">Edit your address</p>
            <button
              className="btn btn-info"
              onClick={() => setAddress(!address)}
            >
              {!address ? `Address` : `Close`}
            </button>
          </div>
        </div>
        {address && <EditAddress />}
        <div className="row mb-2 ">
          <div className="col-md">
            <p className="">Edit your Experience</p>
            <button
              className="btn btn-info"
              onClick={() => setExperience(!experience)}
            >
              {" "}
              {!experience ? "Experience" : `Close`}
            </button>
          </div>
        </div>
        {experience && <EditExperience />}
      </div>
    </>
  );
};

export default EditProfileForm;
