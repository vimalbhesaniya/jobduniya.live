import React from 'react'
import css from "../../Style/All.module.css"
const Peoples = ({ profileImage,firstName,lastName,profession, city,state}) => {
    return (
        <>
            <div className={css.usersCard}>
                <div className={css.header}>
                    <span className='text-muted fw-semibold ' style={{ fontSize: "16px" }}>People you may know</span>
                    <span style={{ fontSize: "10px" }}>from your location</span>
                </div>
                <hr />
                <div className={css.userBody}>
                    <div className='d-flex'>
                        <div className={css.pic}>
                            <img src={profileImage} className={css.img} alt="" />
                        </div>
                        <div className={css.details}>
                            <span style={{ fontSize: "14px", fontWeight: 600 }}>{firstName}{ lastName}</span>
                            <span style={{ fontSize: "10px" }}>{profession}</span>
                            <span style={{ fontSize: "10px" }}>{city},{ state}</span>
                        </div>
                    </div>
                    <div className={css.buttonBox}>
                        <button className='btn bgbtn p-2 '>Follow<i class="fa-solid fa-user-plus"></i> </button>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Peoples