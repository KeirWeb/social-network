import React, { FC } from "react";
import { MessageType } from "../../../../redux/dialogs-reducer";

type MessagePropsType = {
  message: MessageType;
};

const Message_item: FC<MessagePropsType> = ({ message }) => {
  return <div>{message.message}</div>;
};

export default Message_item;
