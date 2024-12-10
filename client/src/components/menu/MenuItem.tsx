import React from "react";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";

const MenuItem = () => {
  return (
    <div className="relative rounded-xl flex flex-col items-center p-3 bg-background space-y-2">
      <Button variant="ghost" className="absolute top-3 right-2">
        <Pencil className="size-4" />
      </Button>
      <div className="rounded-full border size-24">
        <Image src="" alt="" className=" object-cover overflow-clip" />
      </div>
      <div className="text-center space-y-1">
        <h1 className="text-md">Item Name</h1>
        <p className="font-semibold text-sm">120</p>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="inStock" defaultChecked className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500" />
        <Label htmlFor="inStock">Instock</Label>
      </div>
    </div>
  );
};

export default MenuItem;
