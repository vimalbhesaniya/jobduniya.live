// import React, { useCallback, useMemo, useState } from "react";
// import "../../../Style/profile.css"
// const ProfessionBox = ({ onChange, value, id }) => {
//     const  [text , setText] = useState(null);
//     const professions = [
//         "Software Developer",
//         "Nurse",
//         "Marketing Manager",
//         "Sales Representative",
//         "Graphic Designer",
//         "Truck Driver",
//         "Web Developer",
//         "Receptionist",
//         "Social Worker (Non-Profit)",
//         "Architect",
//         "Teacher",
//         "Doctor",
//         "Accountant",
//         "Data Analyst",
//         "Mechanic",
//         "Chef",
//         "Lawyer",
//         "Writer",
//         "Photographer",
//         "Engineer",
//         "Scientist",
//         "Musician",
//         "Athlete",
//         "Therapist",
//         "Designer",
//         "Consultant",
//     ];
    
//     const handleChange =(e) =>{
//         if (e.target.value.length < 2) {
//             setText(e.target.value);
//         }
//     }

//     return (
//         <>
//             <input type="text" onChangeCapture={(e) =>handleChange(e)} />
//             {text?professions.map((e) => {
//                 if(e.includes(text))
//                 return <div class="dataContainer">
//                     <div class="data-item">
//                         <p className="data-item-info">{e}</p>
//                     </div>
//                 </div>
//             }):""}
//         </>
//     );
// };

// export default ProfessionBox;
