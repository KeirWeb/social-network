import React, { FC } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileType } from "../../../../redux/profile-reducer";
import noAvatar from "../../../../assets/images/no-avatar.png";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoProps = {
  profile: ProfileType;
  profileStatus: string;
  updateProfileStatus: (newStatus: string) => void;
};
const ProfileInfo: FC<ProfileInfoProps> = ({
  profile,
  profileStatus,
  updateProfileStatus,
}) => {
  return (
    <div>
      {profile ? (
        <div>
          <div>
            {profile && (
              <>
                <img
                  src={profile.photos.small ? profile.photos.small : noAvatar}
                  alt="img"
                />
                <ProfileStatus
                  status={profileStatus}
                  updateProfileStatus={updateProfileStatus}
                />
              </>
            )}
          </div>
        </div>
      ) : (
        <div>No Profile</div>
      )}
    </div>
  );
};

export default ProfileInfo;
