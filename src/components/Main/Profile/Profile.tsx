import React, { FC } from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionsType } from "../../../redux/state";
import { PostType } from "../../../redux/profile-reducer";

type ProfilePropsType = {
  state: {
    posts: Array<PostType>;
    newPostText: string;
  };
  dispatch: (action: ActionsType) => void;
};

const Profile: FC<ProfilePropsType> = ({ state, dispatch }) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts
        posts={state.posts}
        newPostText={state.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
