import React, { useState } from "react";
import { MenuItem } from "../../types/menuType";
import { NavLink, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiLogin, CiLogout } from "react-icons/ci";

type NavbarMenuProps = {
  header: string;
  items: MenuItem[];
  active: boolean;
  setActive: (active: boolean) => void;
  onAccountClick: () => void;
  onSignIn: () => void;
  onSignUp: () => void;
};

const NavbarMenu: React.FC<NavbarMenuProps> = ({
  header,
  items,
  active,
  setActive,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClose = () => {
    setActive(false);
  };

  const handleOpenSignInPage = () => {
    navigate("/");
    setIsOpen(false);
    setActive(false);
  };

  const handleOpenSignUpPage = () => {
    navigate("/регистрация");
    setIsOpen(false);
    setActive(false);
  };
  const toggleAccountMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Фоновое затемнение для мобильного меню */}
      {active && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={handleClose}
        />
      )}

      {/* Боковое меню для мобильных устройств */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 md:w-1/4 lg:w-1/6 bg-gray-900 text-gray-100 transition-transform duration-300 ease-in-out md:hidden ${
          active ? "translate-x-0" : "-translate-x-full"
        } z-50`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl hover:text-gray-400 transition-colors duration-200"
          onClick={handleClose}
        >
          <IoCloseOutline />
        </button>
        <div className="text-3xl text-white p-6 border-b-4 border-red-600 w-full text-center font-bold">
          {header}
        </div>
        <ul className="flex flex-col items-center mt-6 gap-5">
          {items.map((item) => (
            <li key={item.id} className="w-full">
              <NavLink
                to={item.href}
                className="block text-white no-underline px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                onClick={handleClose}
              >
                <div className="flex items-center justify-between">
                  <span>{item.value}</span>
                  {item.icon && (
                    <span className="text-white text-lg">{item.icon}</span>
                  )}
                </div>
              </NavLink>
            </li>
          ))}
          {/* Иконка аккаунта в мобильном меню */}
          <li className="w-full">
            <button
              onClick={toggleAccountMenu}
              className="block flex items-center justify-between text-white no-underline px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300 w-full"
            >
              Аккаунт
              <span>
                <FiUser className="text-lg" />
              </span>
            </button>

            {isOpen && (
              <div className="bg-gray-800 mt-2 rounded-lg shadow-lg border border-gray-700">
                <button
                  onClick={handleOpenSignInPage}
                  className="block flex items-center gap-1 w-full text-left px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  Войти
                  <CiLogin className="text-lg" />
                </button>
                <button
                  onClick={handleOpenSignUpPage}
                  className="block flex items-center gap-1 w-full text-left px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  Зарегистрироваться
                  <CiLogout className="text-lg" />
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
