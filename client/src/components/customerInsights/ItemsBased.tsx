import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";

const ItemsBased = () => {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="selectedItem" className="text-sm text-gray-600">
            Select item
          </Label>
          <Select>
            <SelectTrigger className="rounded-lg border-gray-200">
              <SelectValue placeholder="Select item" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="item1">Item 1</SelectItem>
              <SelectItem value="item2">Item 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="getFree" className="text-sm text-gray-600">
            after no of visits
          </Label>
          <Input
            id="getFree"
            type="number"
            placeholder="No of visits"
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
            type="datetime-local"
            value={new Date().toISOString().slice(0, 16)}
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

export default ItemsBased;
