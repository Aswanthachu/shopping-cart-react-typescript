import { SearchIcon } from "../assets/svgs/SerchIcon";
import { NavItem, navItems } from "../lib/constants";

import Avatar from "../assets/images/Avatar.png";
import Favorite from "../assets/images/Favorite.png";
import ShoppingBag from "../assets/images/ShoppingBag.png";
import HamburgerMenu from "../assets/images/HamburgerMenu.png";

const NavBar = () => {
  return (
    <header className=" px-5 md:px-10 lg:px-16 py-5 md:py-8 lg:py-10 font-mons  flex items-center justify-between">
      <h1 className=" text-3xl md:text-4xl w-1/2 lg:w-2/12">
        <span className="text-4xl md:text-5xl font-bold">TAG</span>
        <span className="font-extralight">CO.</span>
      </h1>
      <ul className="items-end justify-between gap-10 w-4/12 h-full mt-3 hidden lg:flex">
        {navItems.map((item: NavItem) => (
          <li className="text-2xl font-bold">{item.title}</li>
        ))}
      </ul>
      <div className="w-4/12 px-10 mt-2 hidden lg:block">
        <div className="flex w-full  px-5 py-1.5 rounded-full border-[1.5px] border-black">
          <input
            placeholder="Search..."
            className="flex-1 border-none hover:border-none outline-none hover:outline-none placeholder-black placeholder-bold"
          />
          <SearchIcon className="w-8" />
        </div>
      </div>
      <div className=" w-1/2 lg:w-2/12 flex items-center justify-end lg:justify-between gap-6 md:gap-8  lg:px-5 lg:mt-2">
        <img src={Avatar} alt="user" className="w-12 hidden lg:flex"/>
        <img src={Favorite} alt="fav" className="w-10 hidden lg:flex"/>
        <img src={ShoppingBag} alt="bag" className="w-8 -mt-1 lg:mt-0"/>
        <img src={HamburgerMenu} alt="menu" className="w-10 h-5 md:w-8 lg:hidden"/>
      </div>
    </header>
  );
};

export default NavBar;
