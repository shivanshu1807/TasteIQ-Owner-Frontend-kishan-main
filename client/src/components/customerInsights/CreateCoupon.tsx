import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CreateCoupon() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-blue-500 py-5 rounded-2xl">
          Create New
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <div className="grid gap-4">
          <h3 className="text-lg font-normal text-gray-900">
            Add a new coupon
          </h3>

          <div className="grid gap-2">
            <Label htmlFor="couponName" className="text-sm text-gray-600">
              Coupon Name
            </Label>
            <Input
              id="couponName"
              placeholder="eg: CHECK50"
              className="rounded-lg border-gray-200"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="discount" className="text-sm text-gray-600">
                Discount (%)
              </Label>
              <Input
                id="discount"
                type="number"
                placeholder="10"
                className="rounded-lg border-gray-200"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="orderValue" className="text-sm text-gray-600">
                On order value (₹)
              </Label>
              <Input
                id="orderValue"
                type="number"
                placeholder="500"
                className="rounded-lg border-gray-200"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="upto" className="text-sm text-gray-600">
                Upto (₹)
              </Label>
              <Input
                id="upto"
                type="number"
                placeholder="80"
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
                className="rounded-lg border-gray-200"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="customerType" className="text-sm text-gray-600">
                Customer type
              </Label>
              <Select>
                <SelectTrigger className="rounded-lg border-gray-200">
                  <SelectValue placeholder="Customer type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New Customer</SelectItem>
                  <SelectItem value="existing">Existing Customer</SelectItem>
                  <SelectItem value="all">All Customers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="appliedItems" className="text-sm text-gray-600">
              Applied on Items
            </Label>
            <Input
              id="appliedItems"
              placeholder="Items on which coupon is applied"
              className="rounded-lg border-gray-200"
            />
          </div>

          <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg py-6">
            Create coupon
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
