import LeftArrowIcon from "../assets/svgs/LeftArrowIcon";
import RightArrowIcon from "../assets/svgs/RightArrowIcon";

const SlideButtons = () => {
  return (
    <div className="space-x-6 flex">
      <button className="px-3 py-1 bg-white rounded-full border-2 border-white hover:border-black">
        <LeftArrowIcon />
      </button>
      <button className="px-3 py-1 bg-white rounded-full hover:border-2 border-black">
        <RightArrowIcon />
      </button>
    </div>
  );
};

export default SlideButtons;
