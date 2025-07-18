import React from "react";

import Avatar from "./Avatar";
import Nav from "./Nav";
import ThemeSwitch from "./Toggle-theme";
import NavMobile from "./NavMobile";

const Header: React.FC = () => {
  return (
    <header
      className="fixed top-0 z-10 flex w-full items-center justify-between p-4 shadow-md 
      backdrop-blur-md bg-white/70 dark:bg-backgroundCat/50 text-black dark:text-white
      px-4md:px-16 lg:px-24"
    >
      <Avatar />
      <div className="flex items-center space-x-2 md:space-x-4">
        <Nav />
        <NavMobile />
        <ThemeSwitch />
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-blue-900 text-white font-medium rounded-xl shadow-md hover:bg-blue-800 transition"
        >
          📄 Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
