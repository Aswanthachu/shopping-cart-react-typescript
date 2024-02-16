import { Button, FavoriteIcon, StarRating } from ".";
import Featured from "../assets/images/Featured.png";

const FeaturedCard = () => {
  return (
    <div className="lg:min-w-[430px]  group">
      <div className="border-[3px]  border-black bg-cover bg-center overflow-hidden relative">
        <span className="bg-white border-2 border-black px-3 py-1 w-fit absolute top-5 left-5 rounded-full text-xs font-bold z-40">
          SALE
        </span>
        <FavoriteIcon />
        <Button
          className="absolute top-1/2 left-1/2 transform transition duration-700 ease-in-out -translate-x-1/2 -translate-y-1/2 z-40 bg-black border-2 border-white rounded-full text-white  px-8 py-3 text-lg font-semibold items-center gap-2 my-20  text-center hidden group-hover:flex"
          text="View Now"
          type="button"
          iconColor="fill-white"
        />
        <img
          src={Featured}
          alt="featured"
          className=" object-cover group-hover:scale-105"
        />
      </div>
      <div className="border-x-2 border-b-2  border-black flex flex-col p-5 space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#7B61FF]" />
          <p className="font-bold text-sm">MEALBOXES</p>
        </div>
        <p className="font-semibold text-2xl">Rakhi inspired</p>
        <p className="font-medium text-xl">Description of the product</p>
        <StarRating />
        <div className="flex gap-2">
          <p className="text-[#969696] text-xl line-through">₹900.00</p>
          <p className="text-black font-bold text-2xl">₹850.00 </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
