import React, { FC } from "react";
import s from "./FormsControls.module.css";
import { WrappedFieldProps } from "redux-form";

type FormControlProps = WrappedFieldProps & {
  tagName: "textarea" | "input";
};

export const FormControl: FC<FormControlProps> = ({
  input,
  meta,
  tagName,
  ...props
}) => {
  const hasError = meta.touched && meta.error;
  const Tag = tagName;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>
        <Tag {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
