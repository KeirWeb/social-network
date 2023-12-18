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

const dialogsReducer = (
  state: DialogsReducer,
  action: DialogsActions
): DialogsReducer => {
  switch (action.type) {
    case ONCHANGE_NEW_MESSAGE_VALUE:
      state.newMessageText = action.message;
      return state;
    case ADD_MESSAGE:
      state.messages.push({
        id: 4,
        message: state.newMessageText,
      });
      state.newMessageText = "";
      return state;

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
