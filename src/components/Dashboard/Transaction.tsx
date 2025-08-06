import React from "react";
import SummaryTable from "./SummaryTable";

const Transaction = () => {
  return (
    <div className=" space-y-6">
      <p className=" text-xl font-bold">Transactions</p>
      <SummaryTable />
    </div>
  );
};

export default Transaction;
