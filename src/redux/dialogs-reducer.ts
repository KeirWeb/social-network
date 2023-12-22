export const ONCHANGE_NEW_MESSAGE_VALUE = "ONCHANGE-NEW-MESSAGE-VALUE";
export const ADD_MESSAGE = "ADD-MESSAGE";

export type UserType = {
  id: number;
  name: string;
};
export type MessageType = {
  id: number;
  message: string;
};
export type DialogsReducer = {
  newMessageText: string;
  users: Array<UserType>;
  messages: Array<MessageType>;
};

export type DialogsActions =
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof onChangeNewMessageTextValueAC>;

const initialState = {
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
};

const dialogsReducer = (
  state: DialogsReducer = initialState,
  action: DialogsActions
): DialogsReducer => {
  switch (action.type) {
    case ONCHANGE_NEW_MESSAGE_VALUE:
      return { ...state, newMessageText: action.message };
    case ADD_MESSAGE:
      const newMessage = {
        id: 4,
        message: state.newMessageText,
      };

      state.newMessageText = "";
      return { ...state, messages: [...state.messages, newMessage] };

    default:
      return state;
  }
};

export const addMessageAC = () => {
  return { type: ADD_MESSAGE } as const;
};
export const onChangeNewMessageTextValueAC = (message: string) => {
  return { type: ONCHANGE_NEW_MESSAGE_VALUE, message } as const;
};

export default dialogsReducer;
