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

const initialState = {
  newPostText: "",
  posts: [
    { id: 1, message: "Hi, how are you?", likes: 2 },
    { id: 2, message: "It's mt first post", likes: 4 },
  ],
};

const profileReducer = (
  state: ProfileReducer = initialState,
  action: ProfileActions
): ProfileReducer => {
  switch (action.type) {
    case ADD_POST:
      const newMessage: PostType = {
        id: 3,
        message: action.postMessage,
        likes: 0,
      };

      return { ...state, posts: [...state.posts, newMessage], newPostText: "" };
    case ONCHANGE_NEW_POST_TEXT_VALUE:
      return { ...state, newPostText: action.value };

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
