import { useState } from "react";

const useTogglePasswordVisibility = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return { isPasswordVisible, togglePasswordVisibility };
};

export default useTogglePasswordVisibility;
