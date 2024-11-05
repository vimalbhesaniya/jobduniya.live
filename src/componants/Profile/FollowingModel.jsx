import React, { useEffect, useState } from 'react'
import Modal from '../../render-model/Modal';
import css from "../../Style/follow.module.css";
import useAPI from '../../Hooks/USER/useAPI';
import Cookies from 'js-cookie';

const Body = ({ onClose }) => {
    const api = useAPI();
    const [users , setUsers] = useState([]);
    const [errorMessage , setErrorMessage]  = useState("");
    useEffect(() => {
        const apiCall =async () =>{
            const id = Cookies.get("id");
            const users = await api.getREQUEST(`getFollowings/${id}`)
            setUsers(users[0].targetId);
        }
        apiCall()
    } , [])

    return (
        <>
            <div className={css.container}>
                <div className={css.header}>
                    <div>
                        <span className="text-texty
                        -center text-body  fw-bold  ">
                            Following
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
                <div className="d-flex flex-column gap-3">
                { Array.isArray(users) && users?.map((e) => {
                    return <div className={css.body}>
                        <div className={css.profile}>
                            <div className={css.imgDiv}>
                                <img
                                    // onError={(e) =>
                                    // (e.target.src =
                                    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIwRBD9gNuA2GjcOf6mpL-WuBhJADTWC3QVQ&usqp=CAU")
                                    // }
                                    src={e.profileImage}
                                    className={css.img}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className={css.discription}>
                            <span className="fs-6">{e.firstName} {e.lastName}</span>
                            <button className="btn bgbtn">Unfollow</button>
                        </div>
                    </div>
                })  }
                </div>
            </div>
        </>
    );
};

const FollowingModel = ({ onClose }) => {
    return (
        <>
            <Modal
                body={<Body
                    onClose={onClose} />}
            />
        </>
    );
}

export default FollowingModel