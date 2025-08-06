"use client";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import MobileSidebar from "./MobileSidebar";

type Props = {
  children: Readonly<ReactNode>;
};
const DashboardWrapper = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex gap-5 h-[calc(100vh-64px)] overflow-hidden">
        <Sidebar />
        <MobileSidebar />
        <motion.div
          key={pathname}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            type: "spring",
            ease: "easeIn",
          }}
          className="w-full md:px-10 px-3 pt-4  overflow-y-auto overflow-x-hidden"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardWrapper;
