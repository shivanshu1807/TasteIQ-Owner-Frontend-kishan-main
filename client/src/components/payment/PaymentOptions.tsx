import React from "react";
import { Switch } from "../ui/switch";

const PaymentOptions = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col space-y-1">
        <span className="font-medium text-md">Payment Options</span>
        <span className="text-xs font-light">
          Configure whether customers pay before or after their meal.
          Automatical generate bills post-payment.
        </span>
      </div>
      <div className="p-2 rounded-2xl flex justify-between items-center border">
        <span className="font-semibold">Pre payment</span>
        <Switch
          id="inStock"
          defaultChecked
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        />
      </div>
      <div className="p-2 rounded-2xl flex justify-between items-center border">
        <span className="font-semibold">Post payment</span>
        <Switch
          id="inStock"
          defaultChecked
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        />
      </div>
      <div className="p-2 rounded-2xl flex justify-between items-center border">
        <span className="font-semibold">Auto bill generation</span>
        <Switch
          id="inStock"
          defaultChecked
          className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"
        />
      </div>
    </div>
  );
};

export default PaymentOptions;
