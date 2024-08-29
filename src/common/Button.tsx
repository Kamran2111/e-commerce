import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mb-4 px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 transform hover:scale-105 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

interface CommonButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  label,
  onClick,
  className = "",
  ...props
}) => (
  <button
    onClick={onClick}
    className={`bg-custom-btn-gradient ${className}`}
    {...props}
  >
    {label}
  </button>
);

export { CommonButton, Button };
