import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ToggleEdit } from '../Common/profile'
import FollowersModel from './FollowersModel'
import { ActiveModal } from '../..'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const SensetiveInfo = ({ personalAddress, langauge ,lnc , ln}) => {
    const [activeModalState  ,  setActiveModalState ] = useContext(ActiveModal)
    const [isEditProfile, setIsEditProfile] = useContext(ToggleEdit)
    const navigate = useNavigate()
    const performLogOut = () => {
        const ok = window.confirm("Are you sure?");
        if (ok) {
            Cookies.remove("token");
            navigate("/loginasuser");
        } else {
            navigate(window.location.pathname);
        }
    };
    return (
        <div className="card-body">
            <div className="container">
                <div className=" d-flex justify-content-between mb-2">
                    <p className="hand" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }}  onClick={() => setActiveModalState("Followers")} >Followers 0</p>
                    <p className="hand" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }} onClick={() => setActiveModalState("Followings")}>Following  {ln}</p>
                    <p className="hand" style={{ fontSize: "2.8cqmin", whiteSpace: "nowrap" }} onClick={() => setActiveModalState("connections")}>Connections {lnc}</p>
                </div>
                <div className=" d-flex justify-content-between mb-2">
                    <button type="button" className="btn bgbtn" onClick={() => setIsEditProfile(true)} >Edit profile</button>
                    <button type="button" className="btn bgbtnred" onClick={() => performLogOut()} >Log out</button>
                    <label htmlFor='fileReader' className="btn bgbtn">Upload Resume</label>
                    <input type="file" id='fileReader' hidden />
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="mb-4 mb-lg-0">
                    <div className=" d-flex justify-content-between flex-wrap  mb-2">
                        <div className="col-md-6">
                            <p className="text-muted  fs-5"  >Personal address :</p>
                            <p className="">{personalAddress}</p>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <div className="row">
                                    <span className="fs-5 text-muted">Langauge Known</span>
                                    {langauge?.map((e) => {
                                        return <div className="col">
                                            <p className="text-info bg-secondary-subtle  p-2 rounded-pill text-center mb-2 " style={{ whiteSpace: "nowrap" }} >{e}</p>
                                        </div>
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SensetiveInfo


