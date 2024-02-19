import { SlideButtons } from ".";
import Quotation from "../assets/images/Quotation.png";

const ReviewSection = () => {
  return (
    <div className="font-monos flex flex-col px-5 md:px-10 lg:px-16 w-full my-10 lg:my-0">
      <div className="w-full flex justify-end -mb-10 lg:my-5 group">
        <SlideButtons />
      </div>
      <div className=" lg:pl-28 w-full  my-3 flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-6/12 space-y-6">
          <div>
            <img alt="quote" src={Quotation} />
          </div>
          <div className="text-md  lg:text-[40px] font-bold lg:font-semibold py-8 border-b border-black font-mons leading-snug">
            “I’ve found the best presents for kids with TagCompany! Here you
            will find a range of unique gift ideas, suitable for kids of all
            interests”
          </div>
          <div className="flex items-center gap-5">
            <div className="w-20 lg:w-24 h-20 lg:h-24 rounded-full bg-[#C4C4C4]" />
            <div className="gap-3">
              <p className="text-2xl font-bold">Person Name</p>
              <p className="text-lg font-semibold">Housewife</p>
            </div>
          </div>
        </div>
        <div className=" w-full  lg:w-5/12 py-10 lg:pl-20">
          <div className="w-full h-full bg-[#CAD1D8] rounded-lg min-h-[350px]" />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
