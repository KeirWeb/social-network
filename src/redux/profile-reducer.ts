import { Dispatch } from "redux";
import { usersApi } from "../api/api";

export const ADD_POST = "ADD-POST";
export const ONCHANGE_NEW_POST_TEXT_VALUE = "ONCHANGE-NEW-POST-TEXT-VALUE";
export const SET_PROFILE = "SET-PROFILE";
export const CHANGE_CURRENT_USER_ID = "CHANGE-CURRENT-USER-ID";

export type PostType = {
  id: number;
  message: string;
  likes: number;
};
export type ProfileContactsType = {
  facebook: string | null;
  github: string | null;
  instagram: string | null;
  mainLink: string | null;
  twitter: string | null;
  vk: string | null;
  website: string | null;
  youtube: string | null;
};
export type ProfileType = {
  aboutMe: string;
  contacts: ProfileContactsType;
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  photos: {
    large: string | null;
    small: string | null;
  };
  userId: number;
} | null;
export type ProfileReducer = {
  newPostText: string;
  posts: Array<PostType>;
  profile: ProfileType;
  currentUserId: number;
};

export type ProfileActions =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof onChangeNewPostTextValueAC>
  | ReturnType<typeof setUserProfileAC>
  | ReturnType<typeof changeCurrentUserIdAC>;
const initialState = {
  newPostText: "",
  posts: [
    { id: 1, message: "Hi, how are you?", likes: 2 },
    { id: 2, message: "It's mt first post", likes: 4 },
  ],
  profile: null,
  currentUserId: 2,
} as ProfileReducer;

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
    case SET_PROFILE:
      return { ...state, profile: action.profile };

    case CHANGE_CURRENT_USER_ID:
      return { ...state, currentUserId: action.id };

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
export const setUserProfileAC = (profile: ProfileType) => {
  return { type: SET_PROFILE, profile } as const;
};
export const changeCurrentUserIdAC = (id: number) => {
  return { type: CHANGE_CURRENT_USER_ID, id } as const;
};

export const getCurrentUserTC = (userId: number) => (dispatch: Dispatch) => {
  usersApi.getCurrentUser(userId).then((res) => {
    dispatch(setUserProfileAC(res.data));
  });
};
export default profileReducer;
