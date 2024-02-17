import { Button, FavoriteIcon, StarRating } from ".";
import Featured from "../assets/images/Featured.png";

const GiftCard = () => {
  return (
    <div className="w-full group">
      <div className="w-full overflow-hidden relative">
        <img src={Featured} alt="offer" className=" min-w-48 lg:min-w-80 group-hover:scale-110 transition duration-500 ease-in-out " />
        <FavoriteIcon />
      </div>
      <div className="text-center py-4 flex  flex-col space-y-3">
        <h1 className="text-lg lg:text-2xl font-bold text-black">Retro Black Cap</h1>
        <div className="flex w-full justify-center">
          <StarRating />
        </div>
        <p className="text-black font-bold text-xl lg:text-2xl">₹850.00</p>
        <div className="flex w-full justify-center">
          <Button
            text="Add to cart"
            type="button"
            className="bg-white hover:bg-black rounded-full text-black border-2 border-black hover:border-white hover:text-white flex px-8 py-1 lg:min-w-[200px] text-sm my-5 lg:my-0 lg:text-lg font-semibold items-center gap-2   text-center max-w-[250px]"
            iconColor="fill-white"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
