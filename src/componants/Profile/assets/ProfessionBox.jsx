import React, { useCallback, useMemo, useState } from "react";

const ProfessionBox = ({ onChange, value, id}) => {
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

  return (
    <datalist
      id={id}
      value={value}
      onChange={onChange}
    >
      {professions.map((e) => <option value={e}>{e}</option>)};
    </datalist>
  );
};

export default ProfessionBox;
