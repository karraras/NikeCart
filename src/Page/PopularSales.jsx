import { popularsales, highlight } from "../context/Data";
import TitleName from "../component/TitleName";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { UseGlobalContext } from "../context/Context";
function PopularSales() {
  const { addItem } = UseGlobalContext();
  return (
    <div className="px-6 lg:px-10">
      <TitleName name={popularsales.title} />
      <div className="grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {popularsales.items.map((item) => {
          return (
            <div
              key={item.id}
              className={` relative ${item.shadow} group hover:scale-105 cursor-pointer duration-300  bg-gradient-to-b ${item.color} bg-[red] rounded`}
            >
              <div className="p-2 text-white flex flex-col gap-4">
                <p className="text-sm font-semibold ">{item.title}</p>
                <p className="text-[12px]">{item.text}</p>
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
                    onClick={() => addItem(item, item.id)}
                    className="text-[12px] text-black  rounded px-1 bg-[#e0e0e0]"
                  >
                    {item.btn}
                  </button>
                </div>
              </div>
              <img
                className="h-[100px] w-[200px] absolute top-1/2 -translate-y-1/2 right-0 -rotate-12 delay-200 duration-300 group-hover:rotate-0"
                src={item.img}
                alt="..."
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 py-5 flex-col-reverse md:flex-row   ">
        <div className=" py-5 md:w-1/2 flex items-center justify-center ">
          <img
            src={highlight.img}
            alt="..."
            className=" w-[400px]    rotate-12 duration-300  hover:rotate-0 cursor-pointer"
          />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-blue-700 text-2xl  md:text-3xl font-semibold">
            {highlight.heading}
          </p>
          <p className="md:text-3xl text-2xl font-bold ">{highlight.title}</p>
          <p className="my-2 text-[12px] md:text-sm">{highlight.text}</p>
          <button className="bg-black  text-[12px]  rounded text-white py-1 px-3">
            {highlight.btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopularSales;
//  absolute top-1/2 -translate-x-1/2 -translate-y-1/2  right-1/2
