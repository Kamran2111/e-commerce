import React from "react";
import { NavLink } from "react-router-dom";
import iconFacebook from "../../assets/images/icon-Facebook.png";
import iconInstagram from "../../assets/images/icon-Instagram.png";
import iconTwitter from "../../assets/images/icons-Twitter.png";
import { TiHomeOutline } from "react-icons/ti";
import { FaInfo } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import ScrollToTop from "react-scroll-to-top";
import { FaAnchor } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Контактная информация */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h5 className="text-2xl font-bold mb-3">Можем ли мы вам помочь?</h5>
            <p className="text-base mb-2">Свяжитесь с нами:</p>
            <p className="text-base mb-1">
              <a
                href="mailto:example@example.com"
                className="text-blue-400 hover:underline"
              >
                example@example.com
              </a>
            </p>
            <p className="text-base mb-1">
              <a
                href="tel:+123456789"
                className="text-blue-400 hover:underline"
              >
                +123456789
              </a>
            </p>
          </div>

          {/* Ссылки на страницы */}
          <div className="mb-6 text-center">
            <h3 className="text-xl font-semibold mb-3 pb-2 border-b-2 border-red-600">
              Компания
            </h3>
            <div className="flex flex-col items-center md:items-start">
              <NavLink
                to="/главная"
                className="text-center mb-2 flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                Главная
                <TiHomeOutline />
              </NavLink>
              <NavLink
                to="/онас"
                className="text-center mb-2 flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                О нас
                <FaInfo />
              </NavLink>
              <NavLink
                to="/контакты"
                className="text-center flex items-center gap-2 hover:text-red-400 transition-colors"
              >
                Контакты
                <GrContactInfo />
              </NavLink>
            </div>
          </div>

          {/* Иконки соцсетей */}
          <div className="flex gap-5 justify-center md:justify-end">
            <a
              href="https://facebook.com/yourpage"
              aria-label="Facebook"
              target="_blank"
            >
              <img
                src={iconFacebook}
                alt="Facebook"
                className="w-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a
              href="https://twitter.com/yourpage"
              aria-label="Twitter"
              target="_blank"
            >
              <img
                src={iconTwitter}
                alt="Twitter"
                className="w-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a
              href="https://instagram.com/yourpage"
              aria-label="Instagram"
              target="_blank"
            >
              <img
                src={iconInstagram}
                alt="Instagram"
                className="w-6 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Копирайт */}
        <div className="text-center mt-6 border-t-3 border-gray-700 pt-4">
          <p className="text-sm text-gray-400 font-montserrat">
            &copy; 2024 Ваша компания. Все права защищены.
          </p>
        </div>
        <h1 className="text-lg text-white uppercase text-center font-montserrat">
          гардероб джентельмена
        </h1>
        <ScrollToTop
          smooth
          color="#000"
          top={300}
          component={<FaAnchor className="text-2xl" />}
          style={{
            width: "40px",
            height: "40px",
            color: "#992121",
            borderRadius: "50%",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "3px solid #000",
          }}
        />
      </section>
    </footer>
  );
};

export default Footer;
