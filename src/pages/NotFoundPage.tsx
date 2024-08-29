import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl font-medium text-gray-600 mt-4">
        Страница не найдена
      </p>
      <p className="text-base text-gray-500 mt-2">
        Извините, но запрашиваемая вами страница не существует или была удалена.
      </p>
      <Link
        to="/главная"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        На главную
      </Link>
    </div>
  );
};

export default NotFound;
