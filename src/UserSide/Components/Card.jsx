import React, { useEffect } from "react";
import "../../Style/jobview.css";
import { Skeleton } from "@mui/material";
import { Tyepography } from "../../componants/Skeletons/Tyepography";
import { Button } from "../../componants/Skeletons/Button";
const Card = ({
  profileImage,
  firstName,
  lastName,
  following_id,
  _id,
  handleFollowButton,
  handleUnFollowButton,
  no,
  yes,
  univercity,
  loading,
  pofession,
}) => {
  return (
    <>
      <div className="card---body card ">
        <div className="card---picture">
          {loading ? (
            <Skeleton
              variant="rounded"
              animation="wave"
              height="100px"
              width="100px"
            />
          ) : (
            <img
              src={profileImage}
              className="card---img"
              alt=""
              onError={(e) =>
                (e.target.src =
                  "https://isobarscience-1bfd8.kxcdn.com/wp-content/uploads/2020/09/default-profile-picture1.jpg")
              }
            />
          )}
        </div>
        <div className="card---header">
          <div>
            <Tyepography
              className="text-muted ellips fw-semibold"
              loading={loading}
              label={`${firstName} ${lastName}`}
              width={"140px"}
              height={"15px"}
            />
          </div>
          <div className="ellips">
            <Tyepography
              width={"130px"}
              height={"10px"}
              className="text-muted ellips fw-semibold"
              loading={loading}
              style={{ fontSize: "13px" }}
              label={pofession}
            />
          </div>
          <div className="ellips">
            <Tyepography
              className="text-muted ellips fw-semibold"
              loading={loading}
              style={{ fontSize: "12px" }}
              label={univercity}
              width={"120px"}
              height={"10px"}
            />
          </div>
          <div className="row d-flex  justify-content-center  align-content-center  h-100">
            {following_id?.includes(_id) ? (
              <Button
              style={{ width: "120px", cursor: "pointer" }}
                loading={loading}
                label={no}
                width={"120px"}
                height={"30px"}
                className="btn followBtn p-2 mt-2"
                onClick={() => handleUnFollowButton(_id)}
              />
            ) : (
              <Button
                className="btn followBtn p-2 mt-2"
                loading={loading}
                label={yes}
                width={"120px"}
                height={"30px"}
                onClick={() => handleFollowButton(_id)}
                style={{ width: "120px", cursor: "pointer" }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
