import { useCallback, useContext } from "react";
import { ActiveModal } from "..";
import FollowersModel from "../componants/Profile/FollowersModel";
import ConnectionModel from "../componants/Profile/ConnectionModel";
import ApplyModel from "../componants/Profile/ApplyModel";
import FollowingModel from "../componants/Profile/FollowingModel";
import Notifications from "../componants/Common/Notifications";
import PostAJob from "../CompanySide/Modals/PostAJob";
import TermsCondition from "../UserSide/terms&condition";

const RenderModal = ({}) => {
  const [activeModalState, setActiveModalState] = useContext(ActiveModal);
  const onClose = useCallback(() => {
    setActiveModalState("");
  }, []);
  switch (activeModalState) {
    case "ApplyForm":
      return <ApplyModel onClose={onClose} />;
    case "Followers":
      return <FollowersModel onClose={onClose} />;
    case "Followings":
      return <FollowingModel onClose={onClose} />;
    case "connections":
      return <ConnectionModel onClose={onClose} />;
    case "notifications":
      return <Notifications onClose={onClose} />;
    case "terms":
      return <TermsCondition onClose={onClose} />;
    default:
      return;
  }
};

export default RenderModal;
