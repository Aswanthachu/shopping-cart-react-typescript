import LeftArrowIcon from "../assets/svgs/LeftArrowIcon";
import RightArrowIcon from "../assets/svgs/RightArrowIcon";
import { cn } from "../lib/utils";

const SlideButtons = () => {
  return (
    <div className="space-x-6 flex">
      <button className="px-3 py-1 bg-white rounded-full border-2 border-white hover:border-black group">
        <div
          className={cn(
            "w-fit tranform group-active:-translate-x-3 transition duration-500"
          )}
        >
          <LeftArrowIcon />
        </div>
      </button>
      <button className="px-3 py-1 bg-white rounded-full hover:border-2 border-black group">
        <div
          className={cn(
            "w-fit tranform group-active:translate-x-3 transition duration-500"
          )}
        >
          <RightArrowIcon />
        </div>
      </button>
    </div>
  );
};

export default SlideButtons;
