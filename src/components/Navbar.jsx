import React from "react";
import { Link } from "react-router-dom";
import Menus from "../utils";
import DesktopMenu from "../layouts/DesktopMenu";
import MobMenu from "../layouts/MobMenu";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const leftMenus = Menus.slice(0, 2);
  const rightMenus = Menus.slice(2);

  return (
    <header className="fixed w-full top-0 z-50 bg-secondary shadow-md">
      <nav className="px-6">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="hidden lg:flex basis-1/3 justify-end gap-6 items-center">
            {leftMenus.map((menu) => (
              <DesktopMenu key={menu.name} menu={menu} />
            ))}
          </div>
          <div className="flex justify-center basis-auto">
            <Link to="/" className="flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-24 w-auto max-w-[200px]"
              />
            </Link>
          </div>
          <div className="hidden lg:flex basis-1/3 justify-start gap-6 items-center">
            {rightMenus.map((menu) => (
              <DesktopMenu key={menu.name} menu={menu} />
            ))}
            <SocialLinks />
          </div>
          <div className="lg:hidden">
            <MobMenu Menus={Menus} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
