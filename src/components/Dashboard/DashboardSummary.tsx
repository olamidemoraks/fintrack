import React from "react";
import SummaryCard from "./SummaryCard";
import { summaries } from "../../../constant";
import SummaryTable from "./SummaryTable";

const DashboardSummary = () => {
  return (
    <div className=" space-y-6">
      <p className=" text-xl font-bold">Summary</p>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 ">
        {summaries.map((summary) => (
          <SummaryCard
            key={summary.title}
            currency={summary.currency}
            value={summary.value}
            title={summary.title}
            rate={summary.rate}
          />
        ))}
      </div>

      <SummaryTable />
    </div>
  );
};

export default DashboardSummary;
