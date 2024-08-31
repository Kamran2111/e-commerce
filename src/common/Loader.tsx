import React, { useEffect } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  useEffect(() => {
    const tlLoader = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tlLoader
      .set(".loader_item", { yPercent: -100 })
      .set(".loader_title", { opacity: 0 })
      .to(".loader_item", { yPercent: 0, duration: 0.5, stagger: 0.25 })
      .to(".loader_item", { yPercent: 100, duration: 0.5, stagger: 0.25 })
      .to(".loader_title", { opacity: 1, duration: 1, scale: 1.2 })
      .set(".loader_item", { yPercent: -100 })
      .to(".loader_title", { opacity: 0, duration: 0.4, scale: 0.8 })
      .to(".loader", { yPercent: -100, duration: 0.6 });
  }, [onComplete]);

  return (
    <div className="loader fixed left-0 top-0 w-full h-full bg-white z-5 flex ">
      <div className="loader_title absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] font-semibold text-base md:text-4xl  z-6">
        Гардероб джентльмена
      </div>
      <div className="loader_item flex-auto z-7 border-r border-[1px] bg-green-950 border-black loader_item1"></div>
      <div className="loader_item flex-auto z-7 border-r border-[1px] bg-green-950 border-black loader_item2"></div>
      <div className="loader_item flex-auto z-7 border-r border-[1px] bg-green-950 border-black loader_item3"></div>
    </div>
  );
};

export default Loader;
