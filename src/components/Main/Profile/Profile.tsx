import React, { FC } from "react";
import s from "./Profile.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  return (
    <div className={s.content}>
      <ProfileInfoContainer />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
