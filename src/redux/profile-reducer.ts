export const ADD_POST = "ADD-POST";
export const ONCHANGE_NEW_POST_TEXT_VALUE = "ONCHANGE-NEW-POST-TEXT-VALUE";

export type PostType = {
  id: number;
  message: string;
  likes: number;
};
export type ProfileReducer = {
  newPostText: string;
  posts: Array<PostType>;
};

export type ProfileActions =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof onChangeNewPostTextValueAC>;

const profileReducer = (
  state: ProfileReducer,
  action: ProfileActions
): ProfileReducer => {
  switch (action.type) {
    case ADD_POST:
      const newMessage: PostType = {
        id: 3,
        message: action.postMessage,
        likes: 0,
      };
      state.posts.push(newMessage);
      state.newPostText = "";
      return state;
    case ONCHANGE_NEW_POST_TEXT_VALUE:
      state.newPostText = action.value;
      return state;

    default:
      return state;
  }
};

export const addPostAC = (postMessage: string) => {
  return { type: ADD_POST, postMessage } as const;
};
export const onChangeNewPostTextValueAC = (value: string) => {
  return { type: ONCHANGE_NEW_POST_TEXT_VALUE, value } as const;
};

export default profileReducer;
