import React from "react";
import { Button } from "../ui/button";
import { Minus, Plus } from "lucide-react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Bill = () => {
  return (
    <div className="bg-background p-4">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Input
          type="text"
          placeholder="Phone number"
          className="p-2 border rounded col-span-2"
        />
        <Input
          type="text"
          placeholder="Table no."
          className="p-2 border rounded "
        />
        <Input
          type="text"
          placeholder="Name"
          className="p-2 border rounded col-span-2"
        />
        <Select defaultValue="Dinein">
          <SelectTrigger>
            <SelectValue placeholder="Dine In" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Dinein">Dine In</SelectItem>
              <SelectItem value="TakeOut">Take Out</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-4">Items</h3>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm">Chole Bhature</span>
          <div className="flex items-center gap-4">
            <button className="p-1">
              <Minus size={16} />
            </button>
            <span>2</span>
            <button className="p-1">
              <Plus size={16} />
            </button>
            <span className="ml-4">₹ 723</span>
          </div>
        </div>
      </div>

      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ 2,424</span>
        </div>
        <div className="flex justify-between">
          <span>GST(2.5%)</span>
          <span>₹ 120</span>
        </div>
        <div className="flex justify-between">
          <span>SGST(2.5%)</span>
          <span>₹ 242</span>
        </div>
        <div className="flex justify-between text-green-500">
          <span>Discount</span>
          <span>- ₹ 200</span>
        </div>
      </div>

      <div className="border-t mt-4 pt-4 flex justify-between font-medium">
        <span>Total</span>
        <span>₹ 2,586</span>
      </div>

      <Button className="w-full mt-6">Print Bill</Button>
    </div>
  );
};

export default Bill;
