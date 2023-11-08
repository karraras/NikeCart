import { useRef } from "react";
import { FaPlay } from "react-icons/fa";
function Video(prop) {
  const ref = useRef();
  const { item } = prop;

  function handlePlay() {
    ref.current.play();
  }

  function handlPause() {
    ref.current.pause();
  }

  return (
    <div
      onMouseEnter={handlePlay}
      onMouseLeave={handlPause}
      className=" relative"
    >
      <video
        playsInline={true}
        ref={ref}
        poster={item?.imgsrc}
        className="rounded  cursor-pointer "
      >
        <source src={item?.clip} type="video/mp4" />
      </video>
      <span className=" cursor-pointer top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute h-[20px] w-[20px] rounded-full bg-[#d7d7d7] flex items-center justify-center">
        <FaPlay size={10} />
      </span>
    </div>
  );
}

export default Video;
