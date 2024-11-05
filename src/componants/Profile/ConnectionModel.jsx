import React, { useEffect, useState } from 'react'
import Modal from '../../render-model/Modal';
import css from "../../Style/follow.module.css";
import useAPI from '../../Hooks/USER/useAPI';
import Cookies from 'js-cookie';
const Body = ({ onClose }) => {
    const api = useAPI();
    const [company, setCompany] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    useEffect(() => {
        const apiCall = async () => {
            const userid = Cookies.get("id");
            const c = await api.getREQUEST(`fetchConnectedCompany/${userid}`)
            if (!c.message) {
                setCompany(c[0]?.targetId);
            }
            else if (c.message) {
                setErrorMessage(c.message)
            }
        }
        apiCall()
    }, [])

    return (
        <>
            <div className={css.container}>
                <div className={css.header}>
                    <div>
                        <span className="text-text-center text-body  fw-bold  ">
                            Connections {company.length}
                        </span>
                    </div>
                    <div>
                        <span onClick={onClose} className='hand'>
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
                <div className="d-flex flex-column justify-content-center  align-content-center  gap-3">
                    {Array.isArray(company) && company?.map((e) => {
                        return <div className={`row d-flex justify-content-center  align-items-center`}>
                            <div className={"col-4"}>
                                <div className={css.imgDiv}>
                                    <img
                                        onError={(e) =>
                                        (e.target.src =
                                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwRBD9gNuA2GjcOf6mpL-WuBhJADTWC3QVQ&usqp=CAU")
                                        }
                                        src={e.Logo}
                                        className={css.img}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={"col-4 ellips"}>
                                <span className="fs-6" style={{ width: "10px" }}>{e.Name}</span>
                            </div>
                            <div className='col-4'>
                                <button className="btn bgbtn">Unfollow</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
};

const ConnectionModel = ({ onClose }) => {
    return (
        <>
            <Modal
                body = { 
                <Body onClose={onClose}/>
                }
            />
        </>
    );
}

export default ConnectionModel