import React, { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootStat } from "../store/store";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ISignUp } from "../types/infoAuthTypes";
import { CommonButton } from "../common/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { register, login } from "../store/slice/operations";
import Spinner from "../common/Spinner";
import useTogglePasswordVisibility from "../hooks/useVisiblePassword";

const SignUpScheme = Yup.object().shape({
  email: Yup.string()
    .email("Должен быть действительный адрес электронной почты")
    .required("Необходимый"),
  password: Yup.string()
    .min(4, "Пароль должен содержать не менее 4 символов.")
    .max(12, "Пароль должен быть короче 12 символов")
    .required("Необходимый"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Пароли не совпадают")
    .required("Необходимый"),
});

const initialValues: ISignUp = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  avatar: "",
};

const SignUpPage: React.FC = () => {
  const { isLoading } = useSelector((state: RootStat) => state.user);
  const { isPasswordVisible, togglePasswordVisibility } =
    useTogglePasswordVisibility();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = async (values: ISignUp) => {
    try {
      const registerResult = await dispatch(register(values));
      if (register.fulfilled.match(registerResult)) {
        const loginResult = await dispatch(
          login({ email: values.email, password: values.password })
        );
        if (login.fulfilled.match(loginResult)) {
          navigate("/главная", { replace: true });
        } else {
          console.error("Ошибка авторизации:", loginResult.payload);
        }
      } else {
        console.error("Ошибка регистрации:", registerResult.payload);
      }
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };
  const emailId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const nameId = useId();
  const avatarId = useId();

  return (
    <section className="relative flex flex-col items-center justify-center m-16">
      <div className="absolute inset-0 right-0 bottom-[10px] flex z-60">
        {isLoading && <Spinner />}
      </div>
      <div className="relative z-20 w-full max-w-lg p-4 bg-white shadow-md rounded-md">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SignUpScheme}
        >
          <Form>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-8">
                <button
                  onClick={() => navigate("/", { replace: true })}
                  className="text-blue-500 border border-blue-500 rounded px-4 py-2 text-sm"
                >
                  Войти
                </button>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold mb-8">
                  Пожалуйста, зарегистрируйтесь
                </p>

                <div>
                  <div>
                    <label className="block text-sm mb-1" htmlFor={emailId}>
                      Email address
                    </label>
                    <Field
                      className="w-full border border-input-color rounded p-3"
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      id={emailId}
                    />
                    <ErrorMessage
                      className="text-red-500 mt-1 text-sm"
                      name="email"
                      component="p"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1" htmlFor={passwordId}>
                      Password
                    </label>
                    <Field
                      className="w-full border border-input-color rounded p-3"
                      type={isPasswordVisible ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      id={passwordId}
                    />
                    <ErrorMessage
                      className="text-red-500 mt-1 text-sm"
                      name="password"
                      component="p"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm mb-1"
                      htmlFor={confirmPasswordId}
                    >
                      Confirm Password
                    </label>
                    <Field
                      className="w-full border border-input-color rounded p-3"
                      type={isPasswordVisible ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      id={confirmPasswordId}
                    />
                    <ErrorMessage
                      className="text-red-500 mt-1 text-sm"
                      name="confirmPassword"
                      component="p"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1" htmlFor={nameId}>
                      Name
                    </label>
                    <Field
                      className="w-full border border-input-color rounded p-3"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      id={nameId}
                    />
                    <ErrorMessage
                      className="text-red-500 mt-1 text-sm"
                      name="name"
                      component="p"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1" htmlFor={avatarId}>
                      Avatar URL
                    </label>
                    <Field
                      className="w-full border border-input-color rounded p-3"
                      type="text"
                      name="avatar"
                      placeholder="Enter avatar URL"
                      id={avatarId}
                    />
                    <ErrorMessage
                      className="text-red-500 mt-1 text-sm"
                      name="avatar"
                      component="p"
                    />
                  </div>

                  <CommonButton
                    type="submit"
                    className="w-full mt-8 bg-blue-500 text-white rounded p-2.5"
                    label="Войти"
                  />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default SignUpPage;
