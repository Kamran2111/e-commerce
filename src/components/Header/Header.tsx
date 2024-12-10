import { useState, useRef, useEffect } from "react";
import LogoImg from "../../assets/images/LOGO.png";
import NavbarMenu from "../Navbar/NavbarMenu";
import { MenuItem } from "../../types/menuType";
import { useDispatch, useSelector } from "react-redux";
import { RootStat } from "../../store/store";
import { toggleMenu, setMenuActive } from "../../store/slice/menuSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { TiHomeOutline } from "react-icons/ti";
import { FaInfo } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { CiLogin, CiLogout } from "react-icons/ci";
import { TbShoppingCartHeart } from "react-icons/tb";

const Header = () => {
  const { products } = useSelector((state: RootStat) => state.cart);
  const { favorite } = useSelector((state: RootStat) => state.favorites);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountRef = useRef<HTMLDivElement | null>(null);
  const menuActive = useSelector((state: RootStat) => state.menu.isActive);

  const items: MenuItem[] = [
    { id: 1, value: "Главная", href: "/главная", icon: <TiHomeOutline /> },
    { id: 2, value: "О нас", href: "/онас", icon: <FaInfo /> },
    { id: 3, value: "Контакты", href: "/контакты", icon: <GrContactInfo /> },
  ];

  const handleToggleAccount = () => setIsOpen(!isOpen);

  const handleOpenSignInPage = () => {
    navigate("/");
    setIsOpen(false);
  };

  const handleOpenSignUpPage = () => {
    navigate("/регистрация");
    setIsOpen(false);
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      <nav className="h-[60px] w-full bg-bgAll fixed z-50 flex items-center justify-between px-6 shadow-lg">
        {/* Бургерная иконка для мобильных экранов */}
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={handleToggleMenu}
        >
          <IoMenu className="text-white text-3xl" />
        </div>

        {/* Логотип */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src={LogoImg}
            alt="LOGO"
            className="rounded-full w-[50px] h-[50px] shadow-md"
          />
        </div>

        {/* Стандартное меню для экранов 768px и больше */}
        <div className="hidden md:flex items-center space-x-4 text-base mr-auto">
          {items.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              className="text-white no-underline transition-all duration-300 hover:text-gray-300"
            >
              {item.value}
            </NavLink>
          ))}
        </div>

        {/* Иконка аккаунта на больших экранах */}
        <div className="relative hidden md:flex items-center justify-center">
          <button
            className="text-white text-2xl hover:text-gray-400 transition-colors duration-200"
            onClick={handleToggleAccount}
          >
            <FiUser />
          </button>
          {isOpen && (
            <div
              ref={accountRef}
              className="absolute  bg-white p-2 mt-2 right-0 top-4 rounded-lg shadow-lg border border-gray-200"
            >
              <button
                onClick={handleOpenSignInPage}
                className="block flex items-center gap-1 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-500"
              >
                Войти
                <CiLogin />
              </button>
              <button
                onClick={handleOpenSignUpPage}
                className="block flex items-center gap-1 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Зарегистрироваться
                <CiLogout />
              </button>
            </div>
          )}
        </div>

        {/* Иконка корзины */}
        <div className="flex items-center justify-center mt-2 gap-1">
          <div>
            <button
              onClick={() => navigate("/корзина")}
              className="relative text-white text-2xl cursor-pointer hover:text-gray-400 transition-colors duration-200"
            >
              <MdOutlineShoppingBag />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {products.length}
              </span>
            </button>
          </div>
          {/*  */}
          <div>
            <button
              onClick={() => navigate("/избранные")}
              className="relative text-white text-2xl cursor-pointer hover:text-gray-400 transition-colors duration-200"
            >
              <TbShoppingCartHeart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {favorite.length}
              </span>
            </button>
          </div>
        </div>
        {/* Мобильное меню */}
        <NavbarMenu
          active={menuActive}
          setActive={(active) => dispatch(setMenuActive(active))}
          header={"Меню"}
          items={items}
          onAccountClick={handleToggleAccount}
          onSignIn={handleOpenSignInPage}
          onSignUp={handleOpenSignUpPage}
        />
      </nav>
    </header>
  );
};

export default Header;
