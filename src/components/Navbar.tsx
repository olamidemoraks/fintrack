// Navbar.tsx
import { sidebarMenu } from "@/store/sidebar";
import Image from "next/image";
import React from "react";
import { BiMenu, BiSearch } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";

const Navbar: React.FC = () => {
  const { open, setToggle, setIsMobileMenu, isMobileMenu } = sidebarMenu();

  return (
    <div className=" h-16">
      <nav className="flex items-center justify-between bg-white px-4 md:px-10 py-3 fixed top-0 right-0 left-0 z-50 md:shadow-none shadow-sm ">
        {/* Left section: Hamburger menu and Logo */}
        <div className="flex items-center gap-x-5 ">
          {/* Hamburger Menu Icon */}
          <div
            onClick={() => setToggle(!open)}
            className="md:flex hidden cursor-pointer"
          >
            <BiMenu size={18} />
          </div>
          <div
            onClick={() => setIsMobileMenu(!isMobileMenu)}
            className=" md:hidden flex cursor-pointer"
          >
            <BiMenu size={18} />
          </div>

          {/* Logo */}
          <div className="">
            <Image height={100} width={100} alt="FinTrack" src={"/logo.svg"} />
          </div>
        </div>

        {/* Right section: Icons and Profile Avatar */}
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer">
            <BiSearch size={18} />
          </div>

          <div className="cursor-pointer">
            <BsGrid size={18} />
          </div>

          <div className="size-[40px] overflow-hidden rounded-full">
            <Image
              src="/profilepic.png"
              alt="User avatar"
              className="h-full w-full object-cover"
              height={100}
              width={100}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
