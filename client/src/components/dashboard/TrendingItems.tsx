import { SlidersHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";

export const TrendingItems = () => {
  return (
    <div className="size-full flex flex-col overflow-y-auto">
      <Button variant="outline" size="icon" className="absolute top-5 right-5">
        <SlidersHorizontalIcon className="size-[1.2rem]" />
      </Button>
      <div className="flex w-full justify-between items-center my-2">
        <div className="flex items-center space-x-2">
          <Image src="" alt="" className="size-[3rem] border border-red-400 rounded-full" />
          <div className="flex flex-col">
            <h1 className="">Butter Garlic Naan</h1>
            <h1 className="text-sm">13 orders</h1>
          </div>
        </div>
        <Badge variant="outline" className="bg-green-200 text-green-700 h-6 text-sm rounded-full">+13.6%</Badge>
      </div>
    </div>
  );
};
