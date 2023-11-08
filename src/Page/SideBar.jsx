import { AiFillCloseSquare } from "react-icons/ai";
import { PiArrowLeftBold } from "react-icons/pi";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ItemsCart from "../component/ItemsCart";
import emptyBag from "../assets/Image/emptybag.png";
import { UseGlobalContext } from "../context/Context";
function SideBar() {
  const { cart, total, setCart, open, setOpen } = UseGlobalContext();
  return (
    <div
      className={`h-screen duration-300 ${
        open ? "right-0" : "-right-full"
      }  bg-white w-full  md:w-[450px] max-w-[450px] fixed top-0 z-50 flex flex-col`}
    >
      <div className="flex justify-between bg-[white] items-center h-10 px-2 ">
        <div className="flex items-center">
          <div
            onClick={() => setOpen(false)}
            className="px-2 cursor-pointer hover:text-[red]"
          >
            <MdKeyboardDoubleArrowLeft size={20} />
          </div>
          <div className="flex text-[12px]">
            Your Cart{" "}
            <span className="bg-black text-white rounded px-1 ml-2">{`${cart.length} Items`}</span>
          </div>
        </div>
        <div onClick={() => setCart([])} className="cursor-pointer">
          <AiFillCloseSquare size={20} />
        </div>
      </div>
      <div className="flex-1 w-full  px-2   right-0">
        {cart.length === 0 ? (
          <div className="flex items-center h-full justify-center gap-4 flex-col">
            <img
              src={emptyBag}
              alt="..."
              className="w-[100px] duration-300 hover:scale-105 "
            />
            <button
              onClick={() => setOpen(false)}
              className="flex text-sm gap-2 items-center rounded px-4 py-1 bg-[#ee750c] text-white"
            >
              <PiArrowLeftBold />
              Back To Nike Store
            </button>
          </div>
        ) : (
          <div className="h-full">
            <div className="w-full  flex flex-col gap-2  h-[calc(100%-100px)] overflow-y-auto">
              {cart?.map((item, index) => {
                return <ItemsCart key={index} items={item} />;
              })}
            </div>
            <div className="flex flex-col gap-2 text-[12px] w-full p-2 bottom-0 h-[100px] bg-white">
              <div className="flex justify-between font-bold ">
                <span className="uppercase ">Subtotal</span>
                <span className="bg-black text-white p-1 rounded ">
                  ${`${total}`}
                </span>
              </div>
              <p className="text-center">
                Taxes and Shipping Will Calculate At Shipping
              </p>
              <button className="bg-black text-white rounded py-1 text-center w-full font-bold">
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
