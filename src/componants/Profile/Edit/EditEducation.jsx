import { useState, useCallback, useContext } from "react";
import useAPI from "../../../Hooks/USER/useAPI";
import Cookies from "js-cookie";
import { ToggleEdit } from "../../Common/profile";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const EditEducation = () => {
  const api = useAPI();
  const [institutionName, setInstitutionName] = useState("");
  const [degreeLevels, setDegreeLevel] = useState([]);
  const [startDateSchool, setStartDateSchool] = useState("");
  const [endDateSchool, setEndDateSchool] = useState("");
  const [gpa, setGpa] = useState("");
  const [certificat, setCertifications] = useState([]);
  const [isEditProfile, setIsEditProfile] = useContext(ToggleEdit);
  const [univercity, setUnivercity] = useState("");
  const [school, setSchool] = useState("");

  const queryClient = useQueryClient();

  const { mutate } = api.usePatchREQUEST({
    PATH: "updateDetails",
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetch-user-profile"],
      });

      setIsEditProfile(false);

      toast.success("Porfile updated successfully");
    },
  });

  const handleSubmit = useCallback(async () => {
    const id = Cookies.get("id");
    const degreeLevel = degreeLevels?.split(",");
    const certifications = certificat?.split(",");
    mutate({
      COLOMNS: {
        education: [
          {
            univercity,
            school,
            degreeLevel,
            startDateSchool,
            endDateSchool,
            institutionName,
            gpa,
            certifications,
          },
        ],
      },
      _id: id,
      COLLECTION_NAME: "users",
    });
  }, [
    institutionName,
    degreeLevels,
    startDateSchool,
    endDateSchool,
    gpa,
    certificat,
    univercity,
    school,
  ]);

  return (
    <div className="card container   w-100  bg-body-secondary cardContainer">
      <div className="d-flex justify-content-between align-align-items-center  ">
        <span className="mt-2 fs-2 mb-3 fw-bold ">Edit Education Details</span>
        <span>
          <i className="fa fa-close fs-2 mt-2 fw-bold"></i>
        </span>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            {" "}
            Univercity :
          </label>
          <input
            type="text"
            className="form-control "
            placeholder="Univercity"
            required
            name="univercity"
            onChange={(e) => setUnivercity(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            School :
          </label>
          <input
            type="text"
            className="form-control "
            placeholder="school "
            required
            name="school"
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">
            Degree Level :
          </label>
          <input
            type="text"
            placeholder="degreeLevel-must be comma(,) separated"
            className="form-control"
            name="degreeLevel"
            onChange={(e) => setDegreeLevel(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            Start Date School :
          </label>
          <input
            type="date"
            placeholder="Start Date School"
            className="form-control"
            name="startDateSchool"
            onChange={(e) => setStartDateSchool(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            End Date School :
          </label>
          <input
            type="date"
            placeholder="End Date School"
            className="form-control"
            name="endDateSchool"
            onChange={(e) => setEndDateSchool(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">
            Institution Name :
          </label>
          <input
            type="text"
            placeholder="institutionName-must be comma(,) separated"
            className="form-control"
            name="institutionName"
            onChange={(e) => setInstitutionName(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">
            GPA :
          </label>
          <input
            type="text"
            placeholder="gpa-must be comma(,) separated"
            className="form-control"
            name="gpa"
            onChange={(e) => setGpa(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">
            Certifications :
          </label>
          <input
            type="text"
            placeholder="certifications-must be comma(,) separated"
            className="form-control"
            name="certifications"
            onChange={(e) => setCertifications(e.target.value)}
          />
        </div>
      </div>
      <button
        type="Submit"
        value="Submit"
        className="btn btn-info w-25 mb-3"
        data-mdb-ripple-init
        onClick={() => handleSubmit()}
      >
        Save
      </button>
    </div>
  );
};

export default EditEducation;
