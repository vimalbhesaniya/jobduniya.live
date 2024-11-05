import React from 'react'
import Card from '../../UserSide/Components/Card'
import React, { useCallback, useEffect, useState } from "react";
import "../../Style/jobview.css";
import useAPI from "../Hooks/USER/useAPI";
import Cookies from "js-cookie";

const AllUsersModel = () => {
    const [user, setUser] = useState([]);
    const [followingId , setFollowingId] = useState([]); 
    const [followedUser, setFollowedUser] = useState([]);
    const api = useAPI();
    const id = Cookies.get("id");

    useEffect(() => {
        const getUser = async () => {
            const data = await api.getREQUEST(`notFollowed/${id}/10`);
            setUser(data);
        };
        getUser();
    }, []);

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
            
            setFollowingId((prev)=>{
                if(prev?.includes(targetId))
                {
                    return prev.filter(id => id !== targetId);
                }
                else{
                    return [...prev, targetId]
                }
            })
        };
        UpdateFollow();
    }, []);
    const handleUnFollowButton = useCallback((targetId) => {
        const UpdateFollow = async () => {
            const users = await api.patchREQUEST(
                `updateDetails`,
                "userFollow",
                { userId: id },
                {
                    targetId: [targetId],
                }

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
        <div className="container card">
                <div className="card---container">
                    {user.map((e) => {
                        return<Card
                            btnText={"Follow"}
                            firstName={e.firstName}
                            _id ={e._id}
                            lastName={e.lastName}
                            handleUnFollowButton={() => handleUnFollowButton(e._id)}
                            pofession={e.profession}
                            profileImage={e.profileImage}
                            following_id={followingId}
                            univercity={e.education[0].univercity}
                            handleFollowButton={() =>handleFollowButton(e._id)}
                        />
                    })
                    }

                </div>
                
            </div>
    </>
    )
}

export default AllUsersModel