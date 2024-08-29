import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "../common/Modal";
import useModal from "../hooks/useModal";

const validationSchema = Yup.object({
  name: Yup.string().required("Имя обязательно"),
  email: Yup.string()
    .email("Неверный формат электронной почты")
    .required("Электронная почта обязательна"),
  message: Yup.string()
    .min(20, "Минимум 20 символов")
    .required("Сообщение обязательно"),
});

const Contacts = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const handleSubmit = (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    resetForm();
    openModal();
  };

  return (
    <section className="pt-16 px-4 md:px-8 lg:px-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          Контакты
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          Мы рады, что вы решили с нами связаться! Пожалуйста, заполните форму
          ниже, и мы постараемся ответить вам как можно скорее.
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Имя
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Введите ваше имя"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Электронная почта
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Введите ваш email"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Сообщение
              </label>
              <Field
                id="message"
                name="message"
                as="textarea"
                placeholder="Введите ваше сообщение"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Отправить
            </button>
          </Form>
        </Formik>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} title="Сообщение отправлено">
        <p>Через некоторое время с вами свяжутся.</p>
      </Modal>
    </section>
  );
};

export default Contacts;
