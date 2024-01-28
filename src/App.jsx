import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";

function App() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex items-center justify-between lg:px-14 px-10 py-5 bg-white shadow-lg">
      <div>
        <a>Navbar</a>
      </div>
      <div className="lg:block hidden">
        <ul className="flex items-center space-x-7">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div onClick={toggleMenu} className="lg:hidden block">
        {menu ? (
          <span>
            <MdClose />
          </span>
        ) : (
          <span>
            <IoIosMenu />
          </span>
        )}
      </div>
      {menu && (
        <div className="w-[320px] h-screen fixed top-0 left-0 bg-blue-600">
          <div className="py-10 pl-10 text-white">
            <a href="" className="text-[26px] font-semibold uppercase">
              Logo
            </a>
          </div>
          <hr className="border border-white" />
          <ul>
            <li className="py-3 pl-10 border-b border-white text-white text-[16px] uppercase">
              <a href="">Home</a>
            </li>
            <li className="py-3 pl-10 border-b border-white text-white text-[16px] uppercase">
              <a href="">About</a>
            </li>
            <li className="py-3 pl-10 border-b border-white text-white text-[16px] uppercase">
              <a href="">Services</a>
            </li>
            <li className="py-3 pl-10 border-b border-white text-white text-[16px] uppercase">
              <a href="">Portfolio</a>
            </li>
            <li className="py-3 pl-10 border-b border-white text-white text-[16px] uppercase">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
