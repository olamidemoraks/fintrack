"use client";
import { sidebarMenu } from "@/store/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IMenu } from "../../type";
import { sideMenu } from "../../constant";

const MobileSidebar = () => {
  const { isMobileMenu } = sidebarMenu();
  const pathname = usePathname();
  console.log({ pathname });
  const isActive = (menu: IMenu) => {
    if (pathname === menu.link) return true;
    return false;
  };
  return (
    <div
      className={`pt-4 flex md:hidden absolute left-0 bg-white z-40 h-full shadow-md transition-all duration-300 ease-in ${
        !isMobileMenu ? "translate-x-[-100%]" : "translate-x-0"
      } `}
    >
      <div
        className={`flex flex-col gap-2 transition-all duration-300  ease-out w-[250px] px-5`}
      >
        {sideMenu.map((item) => {
          const isActivated = isActive(item);
          return (
            <Link
              key={item.title}
              href={item.link}
              className={`text-sm rounded-full px-3 py-2 ${
                isActivated && "bg-secondary/15 text-secondary "
              }
              `}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileSidebar;
