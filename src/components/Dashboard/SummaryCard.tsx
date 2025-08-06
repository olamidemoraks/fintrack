import React from "react";
import { BsThreeDots } from "react-icons/bs";

type Props = {
  title: string;
  value: number;
  currency?: boolean;
  rate: string;
};
const SummaryCard = ({ currency, rate, title, value }: Props) => {
  return (
    <div className="bg-secondary/10 rounded-[20px] h-[140px] md:h-[158px] w-full min-w-[223px] flex flex-col justify-between p-7">
      <div className="flex items-center justify-between">
        <p className=" md:text-[17px] font-semibold">{title}</p>
        <BsThreeDots />
      </div>
      <p className=" text-2xl md:text-[34px] font-bold">
        {currency && "$"}
        {value.toLocaleString()}
      </p>
      <p className=" text-[13px] text-primary font-medium">{rate}</p>
    </div>
  );
};

export default SummaryCard;
