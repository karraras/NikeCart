import { heroapi } from "../context/Data";
import Video from "./Video";

function Hero() {
  return (
    <div className=" relative ">
      <div
        style={{
          background: "linear-gradient(75deg, #673ab7, #00bcd4)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)",
        }}
        className="absolute h-[90%] w-full"
      />
      <div className="px-6 lg:px-10 relative flex  flex-col  w-full h-full  z-30 pt-[70px]">
        <div className="flex flex-col gap-2 items-center ">
          <p className=" text-2xl md:text-4xl  lg:text-5xl  font-extrabold text-[#ececec]">
            {heroapi.title}
          </p>
          <p className=" text-2xl md:text-4xl  lg:text-5xl  font-extrabold text-[#ececec]">
            {heroapi.subtitle}
          </p>
        </div>
        <div className="flex-1 flex justify-between mt-2">
          <div className="w-[70px] sm:w-[80px] md:w-[90px] flex flex-col gap-5">
            {heroapi.videos.map((item, index) => {
              return <Video key={index} item={item} />;
            })}
          </div>
          <div className="relative h-full items-center flex flex-col gap-4">
            <button className="bg-[#ececec] px-2 rounded">
              {heroapi?.btntext}
            </button>

            <img
              src={heroapi?.img}
              alt="..."
              className="h-[150px] sm:h-[200px] md:h-[250px] cursor-pointer -rotate-12 hover:rotate-0 duration-300"
            />
          </div>
          <div className="  w-[70px] sm:w-[80px] md:w-[90px] flex flex-col gap-2 items-end">
            {heroapi?.sociallinks.map((item, index) => {
              return (
                <img
                  key={index}
                  className=" h-[20px] w-[20px] sm:h-[25px] sm:w-[25px] cursor-pointer"
                  src={item.icon}
                  alt="..."
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
