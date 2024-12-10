import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/slice/operations";
import { AppDispatch, RootStat } from "../store/store";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { ISignIn } from "../types/infoAuthTypes";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import Spinner from "../common/Spinner";
import CustomErrorMessage from "../common/Error";
import { CommonButton } from "../common/Button";
import useTogglePasswordVisibility from "../hooks/useVisiblePassword";
import { FiEyeOff } from "react-icons/fi";
import { LuEye } from "react-icons/lu";

const SignInScheme = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required("Required"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .max(12, "Password must be less than 12 characters")
    .required("Required"),
});

const initialValues = { email: "", password: "" };

const SignInPage: React.FC = () => {
  const { isLoading, error } = useSelector((state: RootStat) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const emailId = useId();
  const passwordId = useId();

  const { isPasswordVisible, togglePasswordVisibility } =
    useTogglePasswordVisibility();

  const handleSubmit = async (values: ISignIn) => {
    try {
      await dispatch(login(values)).unwrap();
      navigate("/главная", { replace: true });
    } catch (error) {
      console.error("Ошибка авторизации:", error);
    }
  };

  const handleOpenSignUpPage = () => {
    navigate("/регистрация", { replace: true });
  };

  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-8">
      {isLoading && <Spinner />}
      {error && (
        <CustomErrorMessage
          name="Авторизация"
          message="Неправильный логин или пароль"
        />
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={SignInScheme}
      >
        <Form className="max-w-md mx-auto w-full bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between mb-6">
            <button
              onClick={handleOpenSignUpPage}
              className="text-blue-500 border border-blue-500 rounded px-4 py-2"
            >
              Зарегистроваться
            </button>
          </div>
          <div className="text-center mb-6">
            <p className="text-2xl font-extrabold mb-6">
              Пожалуйста, войдите в систему
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor={emailId}>
              Email address
            </label>
            <Field
              className="w-full border rounded px-3 py-2"
              type="email"
              name="email"
              placeholder="Enter email address"
              id={emailId}
            />
            <ErrorMessage
              className="text-red-500 text-sm mt-1"
              name="email"
              component="div"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor={passwordId}
            >
              Password
            </label>
            <div className="relative">
              <Field
                className="w-full border rounded px-3 py-2"
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                id={passwordId}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium text-gray-700"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <span>
                    <LuEye />
                  </span>
                ) : (
                  <span>
                    <FiEyeOff />
                  </span>
                )}
              </button>
            </div>
            <ErrorMessage
              className="text-red-500 text-sm mt-1"
              name="password"
              component="div"
            />
          </div>
          <CommonButton
            type="submit"
            className="w-full bg-blue-500 text-white rounded px-4 py-2"
            label="Войти"
          />
        </Form>
      </Formik>
    </section>
  );
};

export default SignInPage;
