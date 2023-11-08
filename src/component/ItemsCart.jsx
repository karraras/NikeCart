// import psale2 from "../assets/Image/product10.png";
import { BsFillTrashFill } from "react-icons/bs";
import { UseGlobalContext } from "../context/Context";
function ItemsCart(prop) {
  const { increase, decrease, Delete } = UseGlobalContext();
  const { items } = prop;

  return (
    <div className="flex w-full gap-3 ">
      <div
        className={`w-[130px] bg-gradient-to-r rounded p-2 relative ${items.color}`}
      >
        <img src={items.img} alt="..." />
        <span className="absolute top-1 right-1 rounded bg-[#eeeeee] text-[12px] px-1">{`$${items.price}`}</span>
      </div>
      <div className="flex-1 flex justify-between">
        <div className="flex flex-col gap-2 py-1">
          <p className="text-sm font-bold">{items.title}</p>
          <p className="text-[12px]">{items.text}</p>
          <div className="flex justify-around">
            <span
              onClick={() => decrease(items)}
              className="w-[25px] cursor-pointer flex items-center justify-center px-2 h-[25px] text-white text-sm bg-black rounded"
            >
              -
            </span>
            <span className=" w-[25px]  flex items-center justify-center px-2 h-[25px] text-white text-sm bg-black rounded">
              {items.amount}
            </span>
            <span
              onClick={() => increase(items)}
              className=" w-[25px]  cursor-pointer flex items-center justify-center px-2 h-[25px] text-white text-sm bg-black rounded"
            >
              +
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between  items-center py-1">
          <span>${`${items.price * items.amount}`}</span>
          <span
            onClick={() => Delete(items)}
            className="bg-black cursor-pointer w-[25px] h-[25px] p-1 rounded text-white flex items-center justify-center "
          >
            <BsFillTrashFill size={15} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemsCart;
