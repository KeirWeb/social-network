import React from "react";
import ProfileInfo from "./ProfileInfo";
import axios from "axios";
import { AppRootState } from "../../../../redux/redux-store";
import { connect } from "react-redux";
import {
  ProfileType,
  setUserProfileAC,
} from "../../../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
type PathParamsType = {
  userId: string;
};

type ProfileInfoContainerPropsType = RouteComponentProps<PathParamsType> &
  MapStateToPropsType &
  MapDispatchToPropsType;
class ProfileInfoContainer extends React.Component<ProfileInfoContainerPropsType> {
  componentDidMount(): void {
    let userId = Number(this.props.match.params.userId);
    if (!userId) userId = 2;

    axios
      .get<ProfileType>(
        `https://social-network.samuraijs.com/api/1.0//profile/` + userId
      )

      .then((res) => {
        this.props.setUserProfileAC(res.data);
      });
  }
  render(): React.ReactNode {
    return <ProfileInfo profile={this.props.profile} />;
  }
}
type MapStateToPropsType = {
  profile: ProfileType;
  currentUserId: number;
};
type MapDispatchToPropsType = {
  setUserProfileAC: (profile: ProfileType) => void;
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    currentUserId: state.profilePage.currentUserId,
  };
};

const WithUrlDataContainerComponent = withRouter(ProfileInfoContainer);

export default connect(mapStateToProps, { setUserProfileAC })(
  WithUrlDataContainerComponent
);
