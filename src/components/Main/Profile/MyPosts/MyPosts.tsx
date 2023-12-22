import React, { FC, useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostType } from "../../../../redux/profile-reducer";
import { MyPostsPropsType } from "./MyPostsContainer";

const MyPosts: FC<MyPostsPropsType> = ({
  profilePage,
  addPost,
  onChangeNewPostTextValue,
}) => {
  const newPostElement = useRef<HTMLTextAreaElement>(null);

  const addPostHandler = () => {
    if (newPostElement.current) {
      addPost(newPostElement.current.value);
    }
  };

  const onChangeNewPostTextValueHandler = () => {
    if (newPostElement.current) {
      onChangeNewPostTextValue(newPostElement.current.value);
    }
  };

  return (
    <div>
      <h1>My posts</h1>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={profilePage.newPostText}
            onChange={onChangeNewPostTextValueHandler}
          ></textarea>
        </div>
        <button onClick={addPostHandler}>Add post</button>
      </div>
      {profilePage.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MyPosts;
