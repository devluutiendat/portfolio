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
      mx-40 md:px-16 lg:px-24 xl:px-36"
    >
      <Avatar />
      <div className="flex items-center space-x-2 md:space-x-4">
        <Nav />
        <NavMobile />
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
