import React from "react";
import Modal from "../../render-model/Modal";
import css from "../../Style/follow.module.css";

const Body = ({onClose}) => {
    return (
        <>
            <div className={css.container}>
                <div className={css.header}>
                    <div>
                        <span className="text-text-center text-body  fw-bold  ">
                            Followers
                        </span>
                    </div>
                    <div>
                        <span onClick={onClose} className="hand">
                            <i className="fa fa-close fs-5"></i>
                        </span>
                    </div>
                </div>
                <div className={css.searchBox}>
                    <input
                        type="text"
                        className={`${css.formControl} mb-3 w-100`}
                        placeholder="search..."
                    />
                </div>
                <div className="d-flex flex-column gap-3">
                    <div className={css.body}>
                        <div className={css.profile}>
                            <div className={css.imgDiv}>
                                <img
                                    onError={(e) =>
                                    (e.target.src =
                                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwRBD9gNuA2GjcOf6mpL-WuBhJADTWC3QVQ&usqp=CAU")
                                    }
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_x_zUaCKM1ffaKKErUvIVKEwcDD_DWPBeg&usqp=CAU"
                                    className={css.img}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={css.discription}>
                            <span className="fs-6">Vimal bhesaniya</span>
                            <button className="btn bgbtn">following</button>
                        </div>
                    </div>
                    <div className={css.body}>
                        <div className={css.profile}>
                            <div className={css.imgDiv}>
                                <img
                                    onError={(e) =>
                                    (e.target.src =
                                        "https://img.freepik.com/premium-vector/anonymous-user-flat-icon-vector-illustration-with-long-shadow_520826-1932.jpg")
                                    }
                                    src="https://images.pelasxels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
                                    className={css.img}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={css.discription}>
                            <span className="fs-6">yash Kalambe</span>
                            <button className="btn bgbtn">following</button>
                        </div>
                    </div>
                    <div className={css.body}>
                        <div className={css.profile}>
                            <div className={css.imgDiv}>
                                <img
                                    onError={(e) =>
                                    (e.target.src =
                                        "https://img.freepik.com/premium-vector/anonymous-user-flat-icon-vector-illustration-with-long-shadow_520826-1932.jpg")
                                    }
                                    src="https://images.pelasxels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
                                    className={css.img}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={css.discription}>
                            <span className="fs-6">yash Kalambe</span>
                            <button className="btn bgbtn">following</button>
                        </div>
                    </div>
                    <div className={css.body}>
                        <div className={css.profile}>
                            <div className={css.imgDiv}>
                                <img
                                    onError={(e) =>
                                    (e.target.src =
                                        "https://img.freepik.com/premium-vector/anonymous-user-flat-icon-vector-illustration-with-long-shadow_520826-1932.jpg")
                                    }
                                    src="https://images.pelasxels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
                                    className={css.img}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={css.discription}>
                            <span className="fs-6">yash Kalambe</span>
                            <button className="btn bgbtn">following</button>
                        </div>
                    </div>
                    <div className={css.body}>
                        <div className={css.profile}>
                            <div className={css.imgDiv}>
                                <img
                                    onError={(e) =>
                                    (e.target.src =
                                        "https://img.freepik.com/premium-vector/anonymous-user-flat-icon-vector-illustration-with-long-shadow_520826-1932.jpg")
                                    }
                                    src="https://images.pelasxels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
                                    className={css.img}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={css.discription}>
                            <span className="fs-6">yash Kalambe</span>
                            <button className="btn bgbtn">following</button>
                        </div>
                    </div>
                    <div className={css.body}>
                        <div className={css.profile}>
                            <div className={css.imgDiv}>
                                <img
                                    onError={(e) =>
                                    (e.target.src =
                                        "https://img.freepik.com/premium-vector/anonymous-user-flat-icon-vector-illustration-with-long-shadow_520826-1932.jpg")
                                    }
                                    src="https://images.pelasxels.com/photos/34534/people-peoples-homeless-male.jpg?auto=compress&cs=tinysrgb&w=600"
                                    className={css.img}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={css.discription}>
                            <span className="fs-6">yash Kalambe</span>
                            <button className="btn bgbtn">following</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const FollowersModel = ({onClose}) => {
    return (
        <>
            <Modal
                body={<Body onClose={onClose}/>}  
                />
        </>
    );
};

export default FollowersModel;
