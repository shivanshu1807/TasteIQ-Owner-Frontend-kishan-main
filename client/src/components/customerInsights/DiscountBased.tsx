import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const DiscountBased = () => {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="after" className="text-sm text-gray-600">
            Get discount of (%)
          </Label>
          <Input
            id="discount"
            type="number"
            placeholder="Discount %"
            className="rounded-lg border-gray-200"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="discount" className="text-sm text-gray-600">
            on spending
          </Label>
          <Input
            id="spend"
            type="number"
            placeholder="Spend amount"
            className="rounded-lg border-gray-200"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="validTill" className="text-sm text-gray-600">
            Valid till
          </Label>
          <Input
            id="validTill"
            value={new Date().toISOString().slice(0, 16)}
            type="datetime-local"
            className="rounded-lg border-gray-200"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="customerType" className="text-sm text-gray-600">
            Customer type
          </Label>
          <Select>
            <SelectTrigger className="rounded-lg border-gray-200">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="new">New Customers</SelectItem>
              <SelectItem value="existing">Existing Customers</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default DiscountBased;
