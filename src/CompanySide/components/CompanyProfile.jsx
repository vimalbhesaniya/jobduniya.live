import React, { useCallback, useEffect, useState } from 'react'
import Card from '../../UserSide/Components/Card'
import Cookies from 'js-cookie'
import useAPI from '../../Hooks/USER/useAPI'
const CompanyProfile = () => {
    const [company , setCompany] = useState([])
    const [keyword, setKeyword] = useState("");
    const [connectingId , setConnectingId] = useState([]); 
    const [connectedCompany, setConnectedCompany] = useState([]);
    const [loading, setLoading] = useState(false);
    const api = useAPI();
    const id = localStorage.getItem("upd_id");

    useEffect(() => {
        const getUser = async () => {
            const data = await api.getREQUEST(`notFollowedCompany/${id}/0`);
            if (data) {
                setCompany(data);
            }
            else{
                setCompany([]);
            }
        };
        getUser();
    }, []);

    // console.log(compnay);
    // console.log(company);
    const handleFollowButton = useCallback((targetId) => {
        const UpdateFollow = async () => {
            const company = await api.patchREQUEST(
                `updateDetails`,
                "companyConnections",
                { userId: id },
                {
                    targetId: [targetId],
                }
            );
            if (company) {
                setConnectedCompany(company);
            }
            
            setConnectingId((prev)=>{
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
            const users = await api.patchREQUEST(`api/companyfollow/${id}/remove/${targetId}`
            );
            setConnectedCompany(users);            
            setConnectingId(prev => {
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
                    {Array.isArray(company)&&company?.map((e) => {
                        return <Card
                        no={"Connected"}
                        yes={"Connect"}
                        firstName={e?.Name}
                        _id ={e?._id}
                        handleUnFollowButton={() => handleUnFollowButton(e?._id)}
                        pofession={e?.Industry}
                        profileImage={e?.Logo}
                        following_id={connectingId}
                        univercity={e.Address && e?.Address[0]?.personalAddress}
                        handleFollowButton={() =>handleFollowButton(e?._id)}
                    />
                    })
                    }
                </div>
                <div className="container mt-2">
                    <div className="row p-2">
                        <div className="col text-end">
                            <span className="fs-5 HOVER rounded ">see all <i className="fa fa-chevron-right doanimate"></i> </span>
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

export default CompanyProfile