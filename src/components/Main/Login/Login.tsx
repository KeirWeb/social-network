import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { FormControl } from "../../common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validators";
import { Redirect } from "react-router-dom";
import s from "./Login.module.css";

type LoginProps = {
  login: (
    email: string,
    password: string,
    rememberMe?: boolean,
    captcha?: boolean
  ) => void;
  isAuth: boolean;
};
const Login: FC<LoginProps> = (props) => {
  const onSubmit = (formData: FormDataType) => {
    props.login(formData.login, formData.password);
  };
  if (props.isAuth) return <Redirect to={"/profile"} />;
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;

type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm: FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          name="login"
          placeholder="login"
          component={FormControl}
          tagName="input"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type="text"
          name="password"
          placeholder="password"
          component={FormControl}
          tagName="input"
          validate={[required]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component="input" />
        remember me
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <button>login</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<FormDataType>({
  // a unique name for the form
  form: "login",
})(LoginForm);
