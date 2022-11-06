import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <h1 className="text-[#0058ff]">DEFI</h1>
        <div className="hidden md:flex">
          <ul className="flex text-white px-3 py-2 items-center">
            <li className="mx-4">Menu</li>
            <li className="mx-4">Menu</li>
            <li className="mx-4">Menu</li>
            <li className="mx-4">Menu</li>
            <button className="ml-4">Use DeFi</button>
          </ul>
        </div>
        <div className="block md:hidden text-white text-3xl px-4" onClick={handleNav}>
          {nav ? <AiOutlineClose/> : <AiOutlineMenu /> }
        </div>
        <div  className={nav ? " flex md:hidden absolute top-[90px] left-0 bg-black text-white w-full py-3 align-center justify-center" : "hidden"} >
          <ul >
            <li className="text-center py-2">Menu</li>
            <li className="text-center py-2">Menu</li>
            <li className="text-center py-2">Menu</li>
            <li className="text-center py-2">Menu</li>
            <button className="">Use DeFi</button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
