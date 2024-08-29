import React, { useState } from "react";

const useHoverImage = (initialImage: string, hoverImage: string) => {
  const [currentImage, setCurrentImage] = useState(initialImage);

  const handleMouseEnter = () => {
    setCurrentImage(hoverImage);
  };
  const handleMouseLeave = () => {
    setCurrentImage(initialImage);
  };

  return { currentImage, handleMouseEnter, handleMouseLeave };
};

export default useHoverImage;
