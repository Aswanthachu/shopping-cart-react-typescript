import { Button, Link } from ".";
import Medias from "../assets/images/Medias.png";
import ArrowTopIcon from "../assets/svgs/ArrowTopIcon";
import CopyRightIcon from "../assets/svgs/CopyRightIcon";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white font-mons flex flex-col">
      <div className="w-full flex flex-col lg:flex-row border-b border-white">
        <div className="w-full lg:w-5/12 p-6 lg:px-20 py-10 lg:py-24 space-y-10 border-b-2 lg:border-r-2 border-white">
          <p className="text-[40px] font-semibold leading-snug">
            Subscribe & get{" "}
            <span className="text-[64px] font-semibold">20%</span>* discount
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <input
              placeholder="Email"
              className="bg-inherit border-2 border-white px-5 py-4 rounded-full placeholder-white active:border-2 w-full max-w-[250px]"
            />
            <Button
              text="Submit"
              type="button"
              className="bg-white hover:bg-black rounded-full text-black border-2 border-black hover:border-white hover:text-white flex px-8 py-3 text-sm my-5 lg:my-0 lg:text-lg font-semibold items-center gap-2   text-center max-w-[200px]"
              iconColor="fill-white"
            />
          </div>
          <div>
            <p>Follow Us</p>
            <img src={Medias} alt="social media" />
          </div>
        </div>

        <div className="w-full lg:w-7/12 px-6 lg:p-16 py-20 lg:py-28 flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0">
          <div className="w-full lg:w-1/3 lg:text-center">
            <h1 className="text-2xl font-bold">CATEGORIES</h1>
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-3 my-3 group lg:justify-center "
              >
                <div className="w-2 h-2 rounded-full bg-[#9747FF] mt-2 lg:mt-0" />
                <Link
                  text="CATEGORY"
                  className="text-white text-xs lg:text-base font-semibold group-hover:font-bold group-hover:underline group-hover:scale-110 md:group-hover:scale-110 flex gap-2   mt-2 md:mt-0"
                  iconColor="fill-white"
                />
              </div>
            ))}
          </div>
          <div className="text-start lg:w-1/3">
            <h1 className="text-2xl font-bold mb-5">COMPANY</h1>
            {[
              "CONTACT US",
              "RETURNS",
              "PRIVACY POLICY",
              "TERMS & CONDITIONS",
            ].map((link) => (
              <div className="w-full gap-3 my-3 flex ">
                <p className="text-md font-bold inline-block">{link}</p>
                <ArrowTopIcon className="w-3 h-3 fill-white" />
              </div>
            ))}
          </div>
          <div className=" lg:w-1/3 space-y-3 font-semibold">
            <h1 className="text-2xl font-bold mb-5">GET IN TOUCH</h1>
            <div className="text-md font-bold w-full">
              <p>Address Line 1</p>
              <p>Address Line 2</p>
              <p>Address Line 3</p>
            </div>
            <p>Mob : 1234567890</p>
            <p>hello@tagcompany.com</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row">
        <div className=" w-full lg:w-5/12 p-6 lg:p-20 text-6xl border-t-2 border-r-2 border-white">
          <p className="font-thin flex">
            <span className="font-bold">TAG</span>CO
            <span className="hidden lg:block">MPANY</span>.
          </p>
        </div>
        <div className="w-full lg:w-7/12 p-6 lg:p-20 lg:border-t-2 border-white">
          <div className="text-sm lg:text-md font-medium lg:font-bold">
            <p>© 2023 TAG COMPANY,</p> 
            <p>ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
