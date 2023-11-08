import { story } from "../context/Data";
import TitleName from "../component/TitleName";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillHeart } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsHash } from "react-icons/bs";

import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import "swiper/css";

function TopStories() {
  const [view, setView] = useState(window.innerWidth);

  useEffect(() => {
    function Size() {
      return setView(window.innerWidth);
    }
    window.addEventListener("resize", Size);
    return () => {
      window.removeEventListener("resize", Size);
    };
  }, [view]);
  return (
    <div className=" px-6 lg:px-10 sm:p-1 md:p-1 lg:p-1">
      <TitleName name={story.title} />
      <Swiper
        spaceBetween={25}
        slidesPerView={
          view < 640
            ? 1
            : view > 640 && view < 678
            ? 2
            : view > 678 && view < 1024
            ? 3
            : view > 1024
            ? 4
            : 1
        }
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {story.news.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="rounded relative overflow-hidden shadow-gray-900"
            >
              <img src={item.img} alt="..." />
              <div className="p-2 ">
                <div className="flex justify-between text-[12px]">
                  <div className="flex items-center gap-1">
                    <span className="text-[red]">
                      <AiFillHeart />
                    </span>
                    <span>{item.like}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[12px]">
                    <span>
                      <BiTimeFive />
                    </span>
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-500 text-[12px] ">
                    <span>
                      <BsHash />
                    </span>
                    <span>{item.by}</span>
                  </div>
                </div>
                <div className="my-2 ">
                  <p className="font-bold text-[12px]">{item.title}</p>
                  <p className="text-sm text-[10px]">{item.text}</p>
                </div>
                <button
                  onClick={() => window.open(item.url, "_blank")}
                  className="w-full cursor-pointer bg-black text-white rounded text-[12px] py-1"
                >
                  {item.btn}
                </button>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-next z-40  top-1/2 absolute cursor-pointer ">
          <IoIosArrowBack />
        </div>
        <div className="swiper-button-prev z-40 right-0  top-1/2 absolute cursor-pointer">
          <IoIosArrowForward />
        </div>
      </Swiper>
    </div>
  );
}

export default TopStories;
