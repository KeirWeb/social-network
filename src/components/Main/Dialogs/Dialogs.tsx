import React, { FC } from "react";
import s from "./Dialogs.module.css";
import Dialog_item from "./Dialog/Dialog_item";
import Message_item from "./Message/Message_item";
import { ActionsType } from "../../../redux/state";
import {
  MessageType,
  UserType,
  addMessageAC,
  onChangeNewMessageTextValueAC,
} from "../../../redux/dialogs-reducer";

type DialogsPropsType = {
  state: {
    newMessageText: string;
    users: Array<UserType>;
    messages: Array<MessageType>;
  };
  dispatch: (action: ActionsType) => void;
};
const Dialogs: FC<DialogsPropsType> = ({ state, dispatch }) => {
  const onChangeNewMessageValueHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch(onChangeNewMessageTextValueAC(e.currentTarget.value));
  };

  const addMessageHandler = () => {
    dispatch(addMessageAC());
  };
  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        {state.users.map((user) => (
          <Dialog_item user={user} />
        ))}
      </div>
      <div className={s.messages}>
        {state.messages.map((message) => (
          <Message_item message={message} />
        ))}
        <div>
          <textarea
            placeholder="Enter your message"
            value={state.newMessageText}
            onChange={(e) => onChangeNewMessageValueHandler(e)}
          />
          <button onClick={addMessageHandler}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
