import Featured from "../assets/images/Featured.png";
import MedicalId from "../assets/images/MedicalID.png";
import Festival from "../assets/images/Festival.png";
import { Button, Timer } from ".";

const FeaturedBanner = () => {
  return (
    <div className="font-mons flex flex-col px-5 md:px-10 lg:px-16 w-full gap-10 my-2 lg:my-8">
      <div className=" lg:pl-28 lg:pr-16 w-full  my-3 flex flex-col lg:flex-row justify-between space-y-">
        <div className="w-full lg:w-6/12  border-[3px] border-black rounded-tl-[100px]  flex flex-col  ">
          <div className="w-full max-h-[600px] relative px-5 py-10 lg:p-5 flex justify-center items-center flex-1">
            <img
              src={Featured}
              alt="offer"
              className=" lg:w-[450px]  min-h-[300px] lg:min-h-[500px] rounded-[100px]"
            />
            <img src={MedicalId} alt="med" className="absolute top-3 lg:top-5 right-3 lg:right-5" />
          </div>
          <div className=" border-t-[3px] border-black w-full text-center py-2">
            <h1 className="text-[24px] lg:text-[45px] font-medium italic">
              Happy Rakshabandhan!
            </h1>
          </div>
        </div>
        <div className=" w-full  lg:w-5/12 space-y-10 lg:space-y-5 flex flex-col justify-between mt-10 lg:mt-0">
          <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
            Are you ready for Rakshabandhan shopping?
          </h1>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet, consectetur dipiscing elit. Cras sodales
            tristique laoreet. Vivamus iaculis solli null lorem dolor citudin
            viverra.
          </p>
          <div className="flex items-center gap-4 border-b-2 border-black pb-3">
            <img src={Festival} alt="festival" />
            <p className="text-base lg:text-[22px] font-bold inline-block">DAYS TILL RAKSHABANDHAN</p>
          </div>
          <Timer />
          <div className="w-full flex justify-center lg:justify-start">
          <Button
            className="bg-black rounded-full text-white flex px-12 py-3 lg:py-5 text-lg font-semibold items-center gap-2 my-5 lg:my-20  text-center w-fit"
            text="Shop Now!"
            type="button"
            iconColor="fill-white"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
