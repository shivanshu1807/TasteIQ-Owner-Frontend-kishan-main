"use client";
import React from "react";
import Image from "next/image";
import kitchen from "@/public/kitchen.png";
import { Items } from "./Items";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

  return (
    <div className="flex flex-col border-r w-full h-screen">
      <div className="flex justify-evenly w-full items-center py-10 shrink-0">
        <Image src={kitchen} alt="logo" className="w-8 h-8" />
        <h1 className="">Kitchen Cafe</h1>
      </div>
      <div className="flex-1 overflow-y-auto min-h-0">
        <div className="flex flex-col justify-start items-stretch w-full gap-y-4 pb-4">
          {Items.map((item) => (
            <Link
              key={item.name}
              href={item.to}
              className={`
              items-center inline-flex pl-12 py-2 w-full
              transition-all duration-100
              ${
                path === item.to
                  ? "border-l-4 border-violet-600 bg-gradient-to-r from-violet-100 text-violet-600"
                  : "hover:border-l-4 hover:border-violet-600 hover:bg-gradient-to-r from-violet-100 hover:text-violet-600"
              }
            `}
            >
              <item.icon className="w-6 h-6 mr-2" />
              <h1 className="text-sm">{item.name}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
