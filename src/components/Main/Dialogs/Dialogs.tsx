import React, { FC } from "react";
import s from "./Dialogs.module.css";
import Dialog_item from "./Dialog/Dialog_item";
import Message_item from "./Message/Message_item";
import { DialogPropsType } from "./DialogsContainer";

const Dialogs: FC<DialogPropsType> = ({
  dialogPage,
  onChangeNewMessageValue,
  addMessage,
  auth,
}) => {
  const onChangeNewMessageValueHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    onChangeNewMessageValue(e.currentTarget.value);
  };

  const addMessageHandler = () => {
    addMessage();
  };
  return (
    <div className={s.container}>
      <div className={s.dialogs}>
        {dialogPage.users.map((user) => (
          <Dialog_item key={user.id} user={user} />
        ))}
      </div>
      <div className={s.messages}>
        {dialogPage.messages.map((message) => (
          <Message_item key={message.id} message={message} />
        ))}
        <div>
          <textarea
            placeholder="Enter your message"
            value={dialogPage.newMessageText}
            onChange={(e) => onChangeNewMessageValueHandler(e)}
          />
          <button onClick={addMessageHandler}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
