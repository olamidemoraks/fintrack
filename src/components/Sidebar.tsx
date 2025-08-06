"use client";
import { sidebarMenu } from "@/store/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IMenu } from "../../type";
import { sideMenu } from "../../constant";

const Sidebar = () => {
  const { open } = sidebarMenu();
  const pathname = usePathname();
  const [active, setActive] = useState("Dashboard");
  const isActive = (menu: IMenu) => {
    if (active === menu.title || pathname === menu.link) return true;
    return false;
  };
  return (
    <div className={` pt-4 md:flex hidden `}>
      <div
        className={` flex flex-col gap-2 transition-all duration-300  ease-out ${
          open ? "w-[250px] pl-10" : "w-0"
        }`}
      >
        {sideMenu.map((item) => {
          const isActivated = isActive(item);
          return (
            <Link
              key={item.title}
              href={item.link}
              className={`text-sm rounded-full ${
                isActivated && "bg-secondary/15 text-secondary"
              }
              ${open ? "md:px-3 md:py-2 " : "md:hidden"}
              `}
              onClick={() => setActive(item.title)}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
