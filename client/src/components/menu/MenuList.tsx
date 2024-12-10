"use client";

import { SlidersHorizontalIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import MenuItem from "./MenuItem";

const MenuList = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-2">
      <div className="w-full flex justify-between">
        <h1 className="text-md">Items(3)</h1>
        <Button variant="outline" size="icon">
          <SlidersHorizontalIcon className="size-[1.2rem]" />
        </Button>
      </div>
      
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default MenuList;