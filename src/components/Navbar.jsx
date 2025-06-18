import React from "react";
import { Link } from "react-router-dom";
import Menus from "../utils";
import DesktopMenu from "../layouts/DesktopMenu";
import MobMenu from "../layouts//MobMenu";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-secondary shadow-lg">
      <nav className="px-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-30 w-40" />
          </Link>

          <ul className="hidden lg:flex gap-4 items-center">
            {Menus.map((menu) => (
              <DesktopMenu key={menu.name} menu={menu} />
            ))}
            <li>
              <SocialLinks />
            </li>
          </ul>

          <MobMenu Menus={Menus} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
