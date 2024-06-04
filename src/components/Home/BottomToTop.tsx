import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BottomToTop = () => {
 
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isOpen ? "visiable" : "invisible"
      }  fixed right-4 bottom-4 cursor-pointer shadow bg-assLight text-white translate-y-0 hover:-translate-y-1 transition w-10 h-10 grid place-content-center rounded`}
    >
      <FaArrowUp />
    </div>
  );
};

export default BottomToTop;
