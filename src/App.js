import React  from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./Layout";
import MyModel from "./componants/Common/MyModel";
import Home from "./componants/Common/Home";
import { useState } from "react";
import Signup from "./componants/signup/Signup";
import Jobs from "./componants/Common/Jobs";

import NotFound from "./componants/Common/Notfound";
import Nearbyusers from "./componants/Common/nearbyusers";
import Profile from "./componants/Common/profile";
import JobsList from "./UserSide/JobsList";
import Postajob from "./componants/Common/postajob";
import SavedJobsPage from "./componants/Common/SavedJobsPage";
import { ToastContainer, Slide } from "react-toastify";
import ListUsers from "./UserSide/ListUsers";
import LoginAsUser from "./UserSide/LoginAsUser";

const App = () => {
  const [modell, setModell] = useState(false);
  return (
    <>
      {modell ? <MyModel setModell={setModell}></MyModel> : ""}
      <BrowserRouter>
        <ToastContainer
          style={{ zIndex: "12322222222222222222222" }}
          position="top-right"
          closeOnClick
          rtl={false}
          transition={Slide}
        />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home setModell={setModell} />} />
            <Route path="/saved" element={<Nearbyusers />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/postajob" element={<Postajob />} />
            <Route path="/network" element={<ListUsers />} />
            <Route path="/saved" element={<SavedJobsPage />} />
            <Route path={"/jobs/:id"} element={<Jobs />} />
            <Route path={"/jobs"} element={<JobsList />} />
          </Route>
          <Route path={"/loginasuser"} element={<LoginAsUser />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
