import dialogsReducer, {
  DialogsActions,
  DialogsReducer,
} from "./dialogs-reducer";
import profileReducer, {
  ProfileActions,
  ProfileReducer,
} from "./profile-reducer";

export const ADD_POST = "ADD-POST";
export const ONCHANGE_NEW_POST_TEXT_VALUE = "ONCHANGE-NEW-POST-TEXT-VALUE";
export const ADD_MESSAGE = "ADD-MESSAGE";
export const ONCHANGE_NEW_MESSAGE_VALUE = "ONCHANGE-NEW-MESSAGE-VALUE";

export type ActionsType = DialogsActions | ProfileActions;
export type StateType = {
  profilePage: ProfileReducer;
  dialogPage: DialogsReducer;
};

export type StoreType = {
  _state: StateType;
  getState: () => StateType;
  rerenderEntireTree: (state: any) => void;
  subscribe: (observer: any) => void;
  dispatch: (action: ActionsType) => void;
};

export let store: StoreType = {
  _state: {
    profilePage: {
      newPostText: "",
      posts: [
        { id: 1, message: "Hi, how are you?", likes: 2 },
        { id: 2, message: "It's mt first post", likes: 4 },
      ],
    },
    dialogPage: {
      newMessageText: "",
      users: [
        { id: 1, name: "Kirill" },
        { id: 2, name: "Vova" },
        { id: 3, name: "Kescha" },
        { id: 4, name: "Vika" },
        { id: 5, name: "Vitya" },
        { id: 6, name: "Marina" },
        { id: 7, name: "Ira" },
      ],
      messages: [
        { id: 1, message: "HEllo!!!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "How is your it-kamasutra?" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {
    console.log("state changed");
  },
  subscribe(observer: any) {
    this.rerenderEntireTree = observer;
  },
  dispatch(action: any) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this.rerenderEntireTree(this._state);
  },
};
