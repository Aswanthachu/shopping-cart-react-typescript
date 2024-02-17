import { Link } from ".";
import Inspiration from "../assets/images/Inspiration.png";

const InspirationCard = () => {
  return (
    <div className="text-center flex flex-col  group gap-2">
      <div className="rounded-[28px]  overflow-hidden ">
        <img
          src={Inspiration}
          alt="inspiration"
          className="group-hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>
      <h1 className="text-[22px] font-bold">Anniversary Gifts</h1>
      <div className="w-full flex justify-center">
        <Link
          className="text-black text-xs  font-semibold group-hover:font-bold group-hover:underline group-hover:scale-110 md:group-hover:scale-110 flex gap-2   mt-2 md:mt-0"
          text="READ MORE"
        />
      </div>
    </div>
  );
};

export default InspirationCard;
