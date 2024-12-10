import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

const BankForm = () => {
  return (
    <div className="p-4 flex flex-col rounded-2xl border gap-4">
      <div className="flex justify-between items-center">
        <span className="font-medium">Bank Details</span>
        <Switch
          id="inStock"
          defaultChecked
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        />
      </div>
      <div className="flex flex-col justify-between items-center gap-4">
        <Input placeholder="Beneficiary Name" className="rounded-xl" />
        <Input placeholder="Account Number" className="rounded-xl" />
        <Input placeholder="Confirm Account Number" className="rounded-xl" />
        <Input placeholder="IFSC Code" className="rounded-xl" />
        <Button className="rounded-xl w-full bg-[#4f46e5] hover:bg-[#4239ec]">
          Add
        </Button>
      </div>
    </div>
  );
};

export default BankForm;
