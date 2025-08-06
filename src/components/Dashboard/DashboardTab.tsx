"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
  select: string;
  setSelect: (value: "overview" | "transaction") => void;
};
const DashboardTab = ({ select, setSelect }: Props) => {
  return (
    <div className=" w-full border-b border-black/10  flex md:justify-start justify-center gap-3">
      <div
        onClick={() => setSelect("overview")}
        className={`text-sm text-black/60 cursor-pointer pb-1 py-1 px-6 relative  ${
          select === "overview"
            ? "text-primary border-b border-primary"
            : "text-black/60"
        }`}
      >
        <motion.div
          initial={{ backgroundColor: "transparent", x: 10 }}
          whileHover={{ backgroundColor: "rgb(58 108 123 / 0.15)", x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            ease: "easeIn",
          }}
          className="rounded-md py-1 text-center absolute w-full h-[90%] top-0 left-0"
        />
        Overview
      </div>
      <div
        onClick={() => setSelect("transaction")}
        className={`text-sm text-black/60 cursor-pointer pb-1 py-1 px-6 relative  ${
          select === "transaction"
            ? "text-primary border-b border-primary"
            : "text-black/60"
        }`}
      >
        <motion.div
          initial={{ backgroundColor: "transparent", x: -10 }}
          whileHover={{ backgroundColor: "rgb(58 108 123 / 0.15)", x: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            ease: "easeIn",
          }}
          className="rounded-md py-1 text-center absolute w-full h-[90%] top-0 left-0"
        />
        Transaction
      </div>
    </div>
  );
};

export default DashboardTab;
