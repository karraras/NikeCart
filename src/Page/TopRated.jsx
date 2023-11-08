import TitleName from "../component/TitleName";
import { toprateslaes } from "../context/Data";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { sneaker } from "../context/Data";

import { UseGlobalContext } from "../context/Context";

function TopRated() {
  const { addItem } = UseGlobalContext();
  return (
    <div className="px-6 lg:px-10">
      <TitleName name={toprateslaes.title} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {toprateslaes.items.map((item) => {
          return (
            <div
              key={item.id}
              className={`bg-gradient-to-b ${item.color} ${item.shadow} rounded p-2 group hover:scale-105 duration-300 cursor-pointer`}
            >
              <div className="flex flex-col items-center gap-2">
                <p className="text-white text-sm">{item.title}</p>
                <p className="text-white text-[12px]">{item.text}</p>
                <div className="flex gap-2">
                  <span className="bg-[#e0e0e0] text-black rounded px-1 text-[12px] flex items-center justify-center">
                    ${item.price}
                  </span>
                  <span className="flex items-center ">
                    {" "}
                    <AiFillStar /> {item.rating}
                  </span>
                </div>
                <div className="flex gap-2 ">
                  <span className="text-black bg-[#e0e0e0] p-1 rounded">
                    <BsFillBagFill />
                  </span>
                  <button
                    onClick={() => addItem(item)}
                    className="text-[12px] text-black  rounded px-1 bg-[#e0e0e0]"
                  >
                    {item.btn}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center py-2 h-[120px]">
                <img
                  src={item.img}
                  alt="..."
                  className="w-[200px] group-hover:-rotate-12 duration-300 delay-200 "
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 py-5 flex-col-reverse md:flex-row-reverse   ">
        <div className=" py-5 md:w-1/2 flex items-center justify-center ">
          <img
            src={sneaker.img}
            alt="..."
            className=" w-[400px]    rotate-12 duration-300  hover:rotate-0 cursor-pointer"
          />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-blue-700 text-2xl  md:text-3xl font-semibold">
            {sneaker.heading}
          </p>
          <p className="md:text-3xl text-2xl font-bold ">{sneaker.title}</p>
          <p className="my-2 text-[12px] md:text-sm">{sneaker.text}</p>
          <button className="bg-black  text-[12px]  rounded text-white py-1 px-3">
            {sneaker.btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRated;
