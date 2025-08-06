import React from "react";
import { BiCaretDown } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { users } from "../../../constant";
import Image from "next/image";
import StatusPill from "./StatusPill";

const Header = () => {
  return (
    <div className=" space-y-6">
      {/* Header section */}
      <div className="flex md:flex-row flex-col md:justify-between md:items-center gap-4">
        <div className="flex items-center md:justify-start justify-between gap-4">
          <h2 className=" text-2xl md:text-[34px] font-bold flex items-center gap-2">
            Wallet Ledger <BiCaretDown size={16} />
          </h2>

          <StatusPill title="Active" status="green" />
        </div>

        <div className="flex items-center gap-3">
          <div className="px-2 py-1 rounded-full flex items-center w-fit bg-primary cursor-pointer">
            <span className="text-sm text-white">Share</span>
          </div>
          <div className="px-2 py-1 rounded-full border border-zinc-200 w-fit cursor-pointer">
            <BsThreeDots />
          </div>
        </div>
      </div>
      {/* User avatars section */}
      <div className="flex items-center gap-3">
        <div className="flex items-center -space-x-2 ">
          {users.slice(0, 4).map((user, index) => (
            <div
              key={user.name}
              className="z-10"
              style={{ zIndex: users.length - index, position: "relative" }}
            >
              <div className="size-[32px] overflow-hidden rounded-full ring-1 ring-white">
                <Image
                  src={user.imgUrl}
                  alt={user.name}
                  className="h-full w-full object-cover"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="md:flex items-center gap-1 hidden">
          {users.slice(1, 4).map((user, index) => (
            <p key={index} className="text-black/40 text-sm capitalize ">
              {user.name}{" "}
              {users.slice(1, 4).length - 1 > index
                ? ","
                : `+${users.length} others`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
