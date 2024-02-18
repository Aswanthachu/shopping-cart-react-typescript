import { Button, Link } from ".";
import Gift from "../assets/images/Gift.png";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <section className="w-full max-h-[400px] lg:max-h-[600px] font-mons flex flex-col lg:flex-row mb-20">
      <div className=" w-full lg:w-1/2 px-5 md:px-10 lg:px-16 pt-10 pb-5  lg:border-r-2 lg:border-b-2 border-black flex flex-col justify-between">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
            Best Gift ideas for all occasions
          </h1>
          <p className="text-sm lg:text-xl mt-8 font-bold md:font-semibold leading-snug">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet.
          </p>
        </div>
        <Button
          className="bg-black rounded-full text-white flex px-16 py-4 text-xl font-semibold items-center gap-2 my-10 lg:my-20  justify-center text-center max-w-[150px]"
          text="Button"
          type="button"
          iconColor="fill-white"
        />
        <div className="flex items-start md:items-center gap-4">
          <img src={Gift} alt="gift" />
          <div className="block lg:flex gap-4">
            <p className="text-sm lg:font-semibold">
              Best selling customised meal boxes starting from ₹999.00
            </p>
            <Link
              className="text-black text-xs md:text-sm font-semibold hover:underline hover:scale-110 md:hover:scale-125 flex gap-2 transition duration-500 ease-in-out mt-2 md:mt-0"
              text="VIEW NOW"
              iconColor="fill-white"
            />
          </div>
        </div>
      </div>
      <div className=" w-full h-full lg:w-1/2 border-b-2 border-black">
        <Carousel />
      </div>
    </section>
  );
};

export default Banner;
