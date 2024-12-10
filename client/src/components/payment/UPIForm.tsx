import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

const UPIForm = () => {
  return (
    <div className="p-4 flex flex-col rounded-2xl border gap-4">
      <div className="flex justify-between items-center">
        <span className="font-medium">UPI ID</span>
        <Switch
          id="inStock"
          defaultChecked
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        />
      </div>
      <div className="flex justify-between items-center gap-2">
        <Input placeholder="Enter UPI ID" className="p-6 rounded-2xl" />
        <Button
          variant="outline"
          className="border-blue-500 text- to-blue-500 rounded-2xl p-6"
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default UPIForm;
