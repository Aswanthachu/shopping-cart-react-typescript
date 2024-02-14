import { Button, Link } from ".";
import Gift from "../assets/images/Gift.png";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <section className="w-full max-h-[600px] font-mons flex">
      <div className=" w-full lg:w-1/2 px-5 md:px-10 lg:px-16 py-10  border-r-2 border-b-2 border-black">
        <div>
          <h1 className="text-5xl font-bold leading-snug">
            Best Gift ideas for all occasions
          </h1>
          <p className="text-lg mt-8 font-semibold">
            Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet.
          </p>
        </div>
        <Button
          className="bg-black rounded-full text-white flex px-8 py-3 text-lg font-semibold items-center gap-2 my-20  text-center"
          text="Submit"
          type="button"
          iconColor="fill-white"
        />
        <div className="flex items-start md:items-center gap-4">
          <img src={Gift} alt="gift" />
          <div>
            <p className="text-sm">
              Best selling customised meal boxes starting from ₹999.00
            </p>
            <Link
              className="text-black text-xs md:text-sm font-semibold hover:underline hover:scale-110 md:hover:scale-125 flex gap-2 transition duration-500 ease-in-out mt-2 md:mt-0"
              text="VIEW NOW"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2 border-b-2 border-black">
        <Carousel />
      </div>
    </section>
  );
};

export default Banner;
