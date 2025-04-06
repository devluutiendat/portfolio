import React from "react";
import headerNavLinks from "@/data/navBarLink";
import Link from "@/components/ui/Link";

const Nav = () => {
  return (
    <nav
      className="hidden items-center space-x-6 md:flex"
      aria-label="Main navigation"
    >
      {headerNavLinks.map((link) => (
        <Link
          key={link.title}
          href={`#${link.href}`}
          className="font-medium transition-colors hover:text-primary dark:hover:text-primary"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
