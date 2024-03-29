import React, { FC } from "react";
import s from "./Dialogs.module.css";
import Dialog_item from "./Dialog/Dialog_item";
import Message_item from "./Message/Message_item";
import { DialogPropsType } from "./DialogsContainer";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormControl } from "../../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";

const Dialogs: FC<DialogPropsType> = ({
  dialogPage,
  onChangeNewMessageValue,
  addMessage,
}) => {
  const onSubmit = (formData: FormDataType) => {
    if (formData.message) {
      addMessage(formData.message);
      formData.message = "";
    }
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
        <DialogReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Dialogs;

type FormDataType = {
  message: string;
};
const maxLength10 = maxLengthCreator(10);

const DialogForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        type="text"
        name="message"
        placeholder="message"
        component={FormControl}
        tagName="textarea"
        validate={[required, maxLength10]}
      />
      <button>add message</button>
    </form>
  );
};

const DialogReduxForm = reduxForm<FormDataType>({
  form: "message",
})(DialogForm);
