import React, { ChangeEvent } from "react";
import s from "./ProfileInfo.module.css";

type ProfileStatusProps = {
  status: string;
  updateProfileStatus: (newStatus: string) => void;
};

class ProfileStatus extends React.Component<ProfileStatusProps> {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activeEditMode() {
    this.setState({
      editMode: true,
    });
  }
  deactivateEditMode() {
    this.setState({
      editMode: false,
    });

    this.props.updateProfileStatus(this.state.status);
  }
  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.target.value });
  };
  componentDidUpdate(
    prevProps: Readonly<ProfileStatusProps>,
    prevState: Readonly<{}>
  ): void {
    if (prevProps !== this.props) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render(): React.ReactNode {
    return (
      <div>
        {this.state.editMode ? (
          <input
            onBlur={this.deactivateEditMode.bind(this)}
            autoFocus
            type="text"
            value={this.state.status}
            onChange={(e) => this.onStatusChange(e)}
          />
        ) : (
          <span onClick={this.activeEditMode.bind(this)}>
            {this.props.status || "------"}
          </span>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
