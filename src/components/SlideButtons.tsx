import { useState } from "react";
import LeftArrowIcon from "../assets/svgs/LeftArrowIcon";
import RightArrowIcon from "../assets/svgs/RightArrowIcon";
import { cn } from "../lib/utils";

const SlideButtons = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="space-x-6 flex">
      <button
        className="px-3 py-1 bg-white rounded-full border-2 border-white hover:border-black group:"
        onClick={handleClick}
      >
        <div className={cn("w-fit tranform group-:-translate-x-3 transition duration-700")}>
          <LeftArrowIcon />
        </div>
      </button>
      <button className="px-3 py-1 bg-white rounded-full hover:border-2 border-black">
        <RightArrowIcon />
      </button>
    </div>
  );
};

export default SlideButtons;
