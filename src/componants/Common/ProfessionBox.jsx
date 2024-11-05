import React, { useCallback, useMemo, useState } from "react";

const ProfessionBox = ({ onChange, value, arrayKey ,multiple}) => {
  const professions = [
    "Select Your Profession",
    "Software Developer",
    "Nurse",
    "Marketing Manager",
    "Sales Representative",
    "Graphic Designer",
    "Truck Driver",
    "Web Developer",
    "Receptionist",
    "Social Worker (Non-Profit)",
    "Architect",
    "Teacher",
    "Doctor",
    "Accountant",
    "Data Analyst",
    "Mechanic",
    "Chef",
    "Lawyer",
    "Writer",
    "Photographer",
    "Engineer",
    "Scientist",
    "Musician",
    "Athlete",
    "Therapist",
    "Designer",
    "Consultant",
  ];
  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Arabic",
    "Russian",
    "Portuguese",
    "Italian",
    "Hindi",
    "Bengali",
    "Urdu",
    "Turkish",
    "Korean",
    "Vietnamese",
    "Swahili",
    "Dutch",
    "Polish",
    "Swedish",
    "Greek",
    "Czech",
  ];
  const renderOptions =  useMemo(() => {
    if (arrayKey === "profession")
      return professions.map((e) => <option value={e}>{e}</option>);
    if (arrayKey === "langauge")
      return languages.map((e) => <option value={e}>{e}</option>);
  } , []);

  return (
    <select
      id="profession"
      name="profession"
      value={value}
      className="--input"
      onChange={onChange}
      multiple={multiple}
    >
      {renderOptions}
    </select>
  );
};

export default ProfessionBox;
