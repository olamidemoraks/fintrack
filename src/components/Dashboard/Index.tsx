"use client";
import React, { useState } from "react";
import Header from "./Header";
import DashboardTab from "./DashboardTab";
import DashboardSummary from "./DashboardSummary";
import { motion } from "framer-motion";
import Transaction from "./Transaction";

const Index = () => {
  const [tab, setTab] = useState<"overview" | "transaction">("overview");
  return (
    <div className="flex flex-col gap-6">
      <Header />
      <DashboardTab select={tab} setSelect={setTab} />
      <motion.div
        key={tab}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          type: "spring",
          ease: "easeIn",
        }}
      >
        {tab === "overview" ? <DashboardSummary /> : <Transaction />}
      </motion.div>
    </div>
  );
};

export default Index;
