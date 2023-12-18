import React, { FC, useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { ActionsType } from "../../../../redux/state";
import {
  PostType,
  addPostAC,
  onChangeNewPostTextValueAC,
} from "../../../../redux/profile-reducer";

type MyPostsPropsType = {
  posts: Array<PostType>;
  newPostText: string;
  dispatch: (action: ActionsType) => void;
};
const MyPosts: FC<MyPostsPropsType> = ({ posts, newPostText, dispatch }) => {
  const newPostElement = useRef<HTMLTextAreaElement>(null);

  const addPostHandler = () => {
    if (newPostElement.current) {
      dispatch(addPostAC(newPostElement.current.value));
    }
  };

  const onChangeNewPostTextValueHandler = () => {
    if (newPostElement.current) {
      dispatch(onChangeNewPostTextValueAC(newPostElement.current.value));
    }
  };

  return (
    <div>
      <h1>My posts</h1>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={newPostText}
            onChange={onChangeNewPostTextValueHandler}
          ></textarea>
        </div>
        <button onClick={addPostHandler}>Add post</button>
      </div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MyPosts;
