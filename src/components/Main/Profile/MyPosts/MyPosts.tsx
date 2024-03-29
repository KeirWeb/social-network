import React, { FC, useRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { MyPostsPropsType } from "./MyPostsContainer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../../utils/validators/validators";
import { FormControl } from "../../../common/FormsControls/FormsControls";

const MyPosts: FC<MyPostsPropsType> = ({ profilePage, addPost }) => {
  const onSubmit = (formData: FormDataType) => {
    addPost(formData.post);
    formData.post = "";
  };

  return (
    <div>
      <h1>My posts</h1>
      <AddPostReduxForm onSubmit={onSubmit} />
      {profilePage.posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default MyPosts;

type FormDataType = {
  post: string;
};

const maxLength10 = maxLengthCreator(10);

const AddPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          name="post"
          placeholder="post"
          component={FormControl}
          tagName="textarea"
          validate={[required, maxLength10]}
        />
      </div>
      <button>Add post</button>
    </form>
  );
};

const AddPostReduxForm = reduxForm<FormDataType>({
  form: "addPost",
})(AddPostForm);
