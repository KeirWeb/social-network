import React from "react";
import ProfileInfo from "./ProfileInfo";
import { AppRootState } from "../../../../redux/redux-store";
import { connect } from "react-redux";
import {
  ProfileType,
  getCurrentUserTC,
} from "../../../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
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
    this.props.getCurrentUserTC(userId);
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
  getCurrentUserTC: (userId: number) => void;
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    currentUserId: state.profilePage.currentUserId,
  };
};

const WithUrlDataContainerComponent = withRouter(ProfileInfoContainer);

export default withAuthRedirect(
  connect(mapStateToProps, { getCurrentUserTC })(WithUrlDataContainerComponent)
);
