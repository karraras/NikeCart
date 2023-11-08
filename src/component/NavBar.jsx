import Logo from "../assets/Image/Logo.png";
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useState, useEffect } from "react";
import { UseGlobalContext } from "../context/Context";
function NavBar() {
  const { cart, setOpen } = UseGlobalContext();
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    function Scrolls() {
      return setScroll(window.scrollY.toFixed(0));
    }
    document.addEventListener("scroll", Scrolls);
    return () => {
      document.removeEventListener("scroll", Scrolls);
    };
  }, [scroll]);

  return (
    <div
      className={` px-6 lg:px-10 h-14 w-full absolute  bg-transparent z-50 ${
        scroll > 30 && "!fixed top-0 left-0 !bg-[#e0e0e0]"
      } `}
    >
      <div className="container flex justify-between h-full">
        <div className=" flex items-center justify-center">
          <img src={Logo} alt="..." className="h-[40px]" />
        </div>
        <div className="flex items-center gap-3">
          <BsSearch />
          <AiOutlineHeart />
          <div
            onClick={() => setOpen(true)}
            className="relative cursor-pointer"
          >
            <BsBag />
            <span className="absolute h-4 w-4 bg-white flex justify-center items-center rounded-full right-0 text-[12px]">
              {`${cart.length}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
