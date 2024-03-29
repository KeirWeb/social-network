import React from "react";
import ProfileInfo from "./ProfileInfo";
import { AppRootState } from "../../../../redux/redux-store";
import { connect } from "react-redux";
import {
  ProfileType,
  getCurrentUserTC,
  getProfileStatusTC,
  updateProfileStatusTC,
} from "../../../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../../../hoc/withAuthRedirect";
type PathParamsType = {
  userId: string;
};

type ProfileInfoContainerPropsType = RouteComponentProps<PathParamsType> &
  MapStateToPropsType &
  MapDispatchToPropsType;
export class ProfileInfoContainer extends React.Component<ProfileInfoContainerPropsType> {
  componentDidMount(): void {
    let userId = Number(this.props.match.params.userId);
    if (!userId) userId = this.props.authorizedUserId!;
    if (!userId) {
      this.props.history.push("/login");
    }
    this.props.getCurrentUserTC(userId);
    this.props.getProfileStatusTC(userId);
  }
  render(): React.ReactNode {
    return (
      <ProfileInfo
        profile={this.props.profile}
        profileStatus={this.props.profileStatus}
        updateProfileStatus={this.props.updateProfileStatusTC}
      />
    );
  }
}
type MapStateToPropsType = {
  profile: ProfileType;
  currentUserId: number;
  profileStatus: string;
  authorizedUserId: number | null;
  isAuth: boolean;
};
type MapDispatchToPropsType = {
  getCurrentUserTC: (userId: number) => void;
  getProfileStatusTC: (userId: number) => void;
  updateProfileStatusTC: (newStatus: string) => void;
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
    currentUserId: state.profilePage.currentUserId,
    profileStatus: state.profilePage.profileStatus,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
  };
};

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getCurrentUserTC,
    updateProfileStatusTC,
    getProfileStatusTC,
  }),
  withAuthRedirect,
  withRouter
)(ProfileInfoContainer);
