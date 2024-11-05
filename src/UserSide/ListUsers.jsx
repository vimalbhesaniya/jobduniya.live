import React, { useCallback, useContext, useEffect, useState } from "react";
import "../Style/jobview.css";
import useAPI from "../Hooks/USER/useAPI";
import Cookies from "js-cookie";
import { EnableSpinner } from "..";
import Card from "./Components/Card";
import { toast } from "react-toastify";
import CompanyProfile from "../CompanySide/components/CompanyProfile";

const ListUsers = () => {
    const [setSpinnerState] = useContext(EnableSpinner)
    const [keyword, setKeyword] = useState("");
    const [user, setUser] = useState([]);
    const [followingId, setFollowingId] = useState([]);
    const [followedUser, setFollowedUser] = useState([]);
    const [length, setLength] = useState(false);
    const api = useAPI();
    const id = Cookies.get("id");

    const getUser = async (filter) => {
        const data = await api.getREQUEST(`filter/user?filter=${filter}`);
        if (data) {
            setUser(data.users);
            setLength(data?.users?.length)
        }
        else {
            setUser([]);
        }
    };
    useEffect(() => {
        const deBounce = setTimeout(() => {
            getUser(keyword);
        }, 1000);
        return () => clearTimeout(deBounce);
    }, [keyword])

    // useEffect(() => {
    //     const getUser = async () => {
    //         const data = await api.getREQUEST(`notFollowed/${id}/0`);
    //         if (data) {
    //             setUser(data);
    //         }
    //         else {
    //             setUser([]);
    //         }
    //     };
    //     getUser();
    // }, []);
    // console.log(user);

    const handleFollowButton = useCallback((targetId) => {
        const UpdateFollow = async () => {
            const users = await api.patchREQUEST(
                `updateDetails`,
                "userFollow",
                { userId: id },
                {
                    targetId: [targetId],
                }
            );
            if (users) {
                setFollowedUser(users);
            }

            setFollowingId((prev) => {
                if (prev?.includes(targetId)) {
                    return prev.filter(id => id !== targetId);
                }
                else {
                    return [...prev, targetId]
                }
            })
        };
        UpdateFollow();
    }, []);

    const handleUnFollowButton = useCallback((targetId) => {

        const UpdateFollow = async () => {
            const users = await api.patchREQUEST(`api/userfollow/${id}/remove/${targetId}`,
                "userFollow"
            );
            setFollowedUser(users);
            setFollowingId(prev => {
                if (prev?.includes(targetId)) {
                    return prev.filter(id => id !== targetId);
                } else {
                    return [...prev, targetId];
                }
            });
        };
        UpdateFollow();
    }, []);

    return (
        <>
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row-jobList">
                    <div className="col-jobList">
                        <span className="fs-3">Recommended for you</span>
                    </div>
                    <div className="col-jobList">
                        <div className="job--input">
                            <input
                                type="text"
                                className="form-control h-100 w-100"
                                placeholder={"type to search"}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <span className="fs-5"> Results {length}</span>
            </div>

            <div className="container card">
                <div className="card---container">
                    {user && Array.isArray(user) && user?.map((e) => {
                        return <Card
                            btnText={"Follow"}
                            firstName={e?.firstName}
                            _id={e?._id}
                            lastName={e?.lastName}
                            yes={"Follow"}
                            no={"Following"}
                            handleUnFollowButton={() => handleUnFollowButton(e?._id)}
                            pofession={e?.profession}
                            profileImage={e?.profileImage}
                            following_id={followingId}
                            univercity={e?.education[0]?.univercity}
                            handleFollowButton={() => handleFollowButton(e?._id)}
                        />
                    })
                    }

                </div>
            </div>
            <div className="row">
                    <div className="col text-center ">
                        <span className="text-center fs-2">Companies</span>
                    </div>

            </div>
            <CompanyProfile />
        </>
    );
};

export default ListUsers;
