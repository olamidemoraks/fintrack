import React from "react";

type Props = {
  title: string;
  status: "red" | "green";
};
const StatusPill = ({ title, status }: Props) => {
  return (
    <div className="px-2 py-1 rounded-full flex items-center gap-2 bg-black/10 w-fit">
      {/* Active Indicator */}
      <div
        className={`size-[6px] rounded-full ${
          status == "red" ? "bg-Red" : "bg-Green"
        }`}
      />
      {/* Active text */}
      <span className="text-sm">{title}</span>
    </div>
  );
};

export default StatusPill;
