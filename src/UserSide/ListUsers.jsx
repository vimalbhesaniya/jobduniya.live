import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import "../Style/jobview.css";
import useAPI from "../Hooks/USER/useAPI";
import Cookies from "js-cookie";
import { EnableSpinner } from "..";
import Card from "./Components/Card";
import { toast } from "react-toastify";
import CompanyProfile from "../CompanySide/components/CompanyProfile";
import { debounce } from "lodash";
import { useDebounceCallback, useDebounceValue } from "usehooks-ts";
import { useQueryClient } from "@tanstack/react-query";

const ListUsers = () => {
  const [followingId, setFollowingId] = useState([]);
  const [followedUser, setFollowedUser] = useState([]);
  const [length, setLength] = useState(false);
  const api = useAPI();
  const id = Cookies.get("id");

  const [keyword, setKeyword] = useState("");

  const [searchInput] = useDebounceValue(keyword, 1000);

  const { data, refetch, isFetching } = api.useGetRequest({
    PATH: `filter/user?filter=${searchInput}`,
    initialData: [],
    key: ["users"],
    enabled: true,
  });

  useEffect(() => {
    refetch();
  }, [searchInput]);

  const { mutate } = api.usePatchREQUEST({
    PATH: "updateDetails",
    onSuccess: () => {
      refetchFollowing();
    },
  });

  const { data: currentFollowing, refetch: refetchFollowing } =
    api.useGetRequest({
      PATH: `getFollowings/${id}`,
      enabled: !!id,
      initialData: ["following"],
    });

  const handleFollowButton = useCallback((targetId) => {
    mutate({
      COLUMNS: {
        targetId: [targetId],
      },
      _id: { userId: id },
      COLLECTION_NAME: "userFollow",
    });
  }, []);

  console.log("call--currentFollowing", currentFollowing);

  const myFollowing = useMemo(() => {
    return currentFollowing?.targetId?.map((following) => {
      return following._id;
    });
  }, [JSON.stringify(currentFollowing)]);

  const { mutate: unFollowMutation } = api.usePatchREQUEST({
    PATH: `api/userfollow/${id}/remove/${followingId}`,
    onSuccess: () => {
      refetchFollowing();
    },
  });

  const handleUnFollowButton = (targetId) => {
    setFollowingId(targetId);
    unFollowMutation({
      COLLECTION_NAME: "userFollow",
    });
  };

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
        <span className="fs-5"> Results {data?.length ?? 0}</span>
      </div>

      <div className="container card">
        <div className="card---container">
          {isFetching &&
            Array.from({ length: 30 }).map(() => {
              return (
                <Card
                  btnText={"Follow"}
                  firstName={""}
                  _id={""}
                  lastName={""}
                  yes={""}
                  loading={isFetching}
                  no={""}
                  handleUnFollowButton={() => {}}
                  pofession={""}
                  profileImage={""}
                  following_id={""}
                  univercity={""}
                  handleFollowButton={() => {}}
                />
              );
            })}
          {data?.map((e) => {
            return (
              <Card
                btnText={"Follow"}
                firstName={e?.firstName}
                _id={e?._id}
                lastName={e?.lastName}
                yes={"Follow"}
                loading={isFetching}
                no={"Following"}
                handleUnFollowButton={() => handleUnFollowButton(e?._id)}
                pofession={e?.profession}
                profileImage={e?.profileImage}
                following_id={myFollowing}
                univercity={e?.education[0]?.univercity}
                handleFollowButton={() => handleFollowButton(e?._id)}
              />
            );
          })}
        </div>
      </div>
      {/* <div className="row">
        <div className="col text-center ">
          <span className="text-center fs-2">Companies</span>
        </div>
      </div>
      <CompanyProfile /> */}
    </>
  );
};

export default ListUsers;
