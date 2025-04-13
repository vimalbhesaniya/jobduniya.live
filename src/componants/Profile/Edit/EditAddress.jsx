import { useState, useCallback, useContext } from "react";
import FormSelectBox from "../../Common/FormSelectBox";
import Cookies from "js-cookie";
import useAPI from "../../../Hooks/USER/useAPI";
import { useQueryClient } from "@tanstack/react-query";
import { ToggleEdit } from "../../Common/profile";
import { toast } from "react-toastify";

function EditAddress() {
  const [personalAddress, setPersonalAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [isEditProfile, setIsEditProfile] = useContext(ToggleEdit);
  const [state, setState] = useState("");
  const api = useAPI();

  const handleState = (stateValue) => {
    setStateValue(stateValue);
  };

  const [city, setCity] = useState("");
  const handleCity = (city) => {
    setCity(city);
  };

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
    mutate({
      COLOMNS: {
        location: [{ personalAddress, pinCode, state, city }],
      },
      _id: id,
      COLLECTION_NAME: "users",
    });
  }, [personalAddress, pinCode, state, city]);

  return (
    <div className="card container   w-100  bg-body-secondary cardContainer">
      <div className="d-flex justify-content-between align-align-items-center  ">
        <span className="mt-2 fs-2 mb-3 fw-bold ">Edit Address Details</span>
        <span>
          <i className="fa fa-close fs-2 mt-2 fw-bold"></i>
        </span>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">
            {" "}
            Personal Address :
          </label>
          <input
            type="text"
            className="form-control "
            placeholder="Personal Address"
            required
            name="univercity"
            onChange={(e) => setPersonalAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">
            Pincode :
          </label>
          <input
            type="text"
            className="form-control "
            placeholder="pincode "
            required
            name="school"
            onChange={(e) => setPinCode(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">
            State :
          </label>
          <FormSelectBox
            type="text"
            // warning="states"
            className="form-control"
            arrayKey="states"
            selectedState={stateValue}
            stateValue={handleState}
            selectedCity={city}
            state={setState}
            city={handleCity}
          />
          {/* <input type="text" placeholder="" className="form-control" name="state" value={formData.state} onChange={handleChange} /> */}
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="" className="form-label">
            City :
          </label>
          <FormSelectBox
            className="form-control"
            arrayKey="cities"
            selectedState={stateValue}
            stateValue={handleState}
            selectedCity={city}
            state={setState}
            city={handleCity}
          />
          {/* <input type="text" placeholder="" className="form-control" name="city" value={formData.city} onChange={handleChange} /> */}
        </div>
      </div>
      <button
        type="submit"
        value="Submit"
        className="btn btn-info w-25 mb-3"
        data-mdb-ripple-init
        onClick={() => handleSubmit()}
      >
        Save
      </button>
    </div>
  );
}

export default EditAddress;
