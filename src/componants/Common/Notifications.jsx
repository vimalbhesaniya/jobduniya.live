import React from "react";
import "../../Style/noti.css";
import Modal from "../../render-model/Modal";

const Body = ({ onClose }) => {
    return (
        <>
            <div className="notification">
                <div className="notification-content d-flex p-4">
                    <div className="d-flex justify-content-between align-align-items-center mb-3">
                        <div className="">
                            <span className="text-muted  fs-4 mb-5">Notifications</span>
                        </div>
                        <div>
                            <span><i className="fa fa-close" onClick={onClose}></i></span>

                        </div>
                    </div>

                    <div class="row g-4 p-4 doround bg-body-secondary mb-4">
                        <div class=" col-md-6 d-flex align-items-center">
                            <div className="row">
                                <div className="col-md-3">
                                    <img
                                        class="flex-shrink-0 mb-2 img-fluid border rounded"
                                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                        alt=""
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                        }}
                                    />
                                </div>
                                <div class="text-start ps-4 col-md-9">
                                    <h5 class="mb-3 col">Vishala Gajera</h5>
                                    <span class="me-3 col">
                                        Congratulations , Your application was
                                        accepted by Microsoft
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3">
                                <button class="btn bgbtn" href="">
                                    <i class="fa-solid fa-close"></i>
                                </button>
                            </div>
                            <div>
                                <span className={"fs-6"}>2h Ago</span>
                            </div>
                        </div>
                    </div>

                    <div class="row g-4 p-4 doround bg-body-secondary mb-4">
                        <div class="col-sm-12 col-md-6 d-flex align-items-center">
                            <img
                                class="flex-shrink-0 img-fluid border rounded"
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt=""
                                style={{ width: "80px", height: "80px" }}
                            />
                            <div class="text-start ps-4">
                                <h5 class="mb-3">Vishala Gajera</h5>
                                <span class="me-3">
                                    Congratulations , Your application was
                                    accepted by Microsoft
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3">
                                <button class="btn bgbtn" href="">
                                    <i class="fa-solid fa-close"></i>
                                </button>
                            </div>
                            <div>
                                <span className={"fs-6"}>2h Ago</span>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 p-4 doround bg-body-secondary mb-4">
                        <div class="col-sm-12 col-md-6 d-flex align-items-center">
                            <img
                                class="flex-shrink-0 img-fluid border rounded"
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt=""
                                style={{ width: "80px", height: "80px" }}
                            />
                            <div class="text-start ps-4">
                                <h5 class="mb-3">Yash Kalambe</h5>
                                <span class="me-3">
                                    Congratulations , Your application was
                                    accepted by Microsoft
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3">
                                <button class="btn bgbtn" href="">
                                    <i class="fa-solid fa-close"></i>
                                </button>
                            </div>
                            <div>
                                <span className={"fs-6"}>2h Ago</span>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 p-4 doround bg-body-secondary mb-4">
                        <div class="col-sm-12 col-md-6 d-flex align-items-center">
                            <img
                                class="flex-shrink-0 img-fluid border rounded"
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt=""
                                style={{ width: "80px", height: "80px" }}
                            />
                            <div class="text-start ps-4">
                                <h5 class="mb-3">Yash Kalambe</h5>
                                <span class="me-3">
                                    Congratulations , Your application was
                                    accepted by Microsoft
                                </span>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3">
                                <button class="btn bgbtn" href="">
                                    <i class="fa-solid fa-close"></i>
                                </button>
                            </div>
                            <div>
                                <span className={"fs-6"}>2h Ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Notifications = ({ onClose }) => {
    return (
        <>
            <Modal
                body={<Body onClose={onClose} />}
            />
        </>
    );
};

export default Notifications;
