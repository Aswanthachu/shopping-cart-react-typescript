import Featured from "../assets/images/Featured.png";
import OfferTag from "../assets/svgs/OfferTag";
import Offer from "../assets/images/Offer.png";
import { Button, StarRating } from ".";
import { cn } from "../lib/utils";

interface OfferBoxProps{
  className:string
}

const OfferBox:React.FC<OfferBoxProps> = ({className}) => {
  return (
    <div className={cn(className,"w-full flex h-fit items-center justify-center relative flex-1 border-x-2 border-black")}>
      <img src={Offer} alt="offer" className="px-3"/>
      <div className="absolute top-0 left-5 ">
        <OfferTag className=" w-8 lg:w-12" />
      </div>
    </div>
  );
};

const OfferSection = () => {
  return (
    <div className="w-full my-10 border-y-2 border-black lg:h-[700px] flex flex-col lg:flex-row font-mons">
      <div className="w-full lg:w-1/2 h-full bg-gray-700 relative border-b-2 border-black lg:border-none">
        <img
          src={Featured}
          alt="offer"
          className="w-full h-full object-fill "
        />
        <div className="absolute top-0 left-10">
          <OfferTag className="w-16 lg:w-24" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex">
        <div className="flex flex-col w-1/2 ">
          <OfferBox className="border-b-2 "/>
          <OfferBox className=""/>
        </div>
        <div className="w-1/2  lg:p-10 flex flex-col justify-between">
          <div className=" flex flex-col p-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#7B61FF]" />
              <p className="font-bold text-xs lg:text-sm">MEALBOXES</p>
            </div>
            <p className="font-bold lg:font-semibold text-lg lg:text-2xl">
              Rakhi inspired
            </p>
            <p className="font-medium text-md lg:text-xl">
              Description of the product of the product Description of the
              product of the product
            </p>
            <StarRating />

            <p className="text-black font-bold text-xl lg:text-2xl">₹850.00</p>
          </div>
          <div className="w-full flex justify-center">
            <Button
              text="Add to cart"
              type="button"
              className="bg-white hover:bg-black  rounded-full text-black border-2 border-black hover:border-white hover:text-white flex px-8 py-3 text-sm my-5 lg:my-0 lg:text-lg font-semibold items-center gap-2   text-center max-w-[250px]"
              iconColor="fill-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
