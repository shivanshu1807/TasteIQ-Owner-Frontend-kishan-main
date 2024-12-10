"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Search, SlidersHorizontalIcon } from "lucide-react";
import { Separator } from "../ui/separator";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function OrderOnBehalf() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Tandoori Aloo Tikka",
      price: 230,
      image: "",
    },
    {
      id: 2,
      name: "Paneer Tikka",
      price: 250,
      image: "",
    },
    {
      id: 3,
      name: "Malai Kofta",
      price: 220,
      image: "",
    },
  ];

  const updateQuantity = (itemId: number, increment: boolean) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + (increment ? 1 : -1)),
    }));
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalAmount = menuItems.reduce(
    (sum, item) => sum + (quantities[item.id] || 0) * item.price,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-[#4f46e5] hover:bg-[#655ee7] rounded text-xs lg:text-sm">
          Order on Behalf
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col h-full w-full sm:max-w-md">
        <SheetHeader className="pb-4">
          <SheetTitle>Order On Behalf</SheetTitle>
          <div className="flex w-full space-x-2">
            <div className="relative w-full">
              <Input type="search" placeholder="Search here" className="pr-8" />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="size-4" />
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className=""
            >
              <SlidersHorizontalIcon className="size-[1.2rem]" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto pb-4">
          <div className="space-y-4">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm">₹{item.price}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, false)}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">
                    {quantities[item.id] || 0}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, true)}
                  >
                    +
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="flex items-center gap-2 p-2 rounded">
              <div className="bg-foreground text-background rounded px-2 py-1 text-sm">
                {totalItems}
              </div>
              <div className="bg-foreground text-background rounded px-2 py-1 text-sm">
                ₹{totalAmount}
              </div>
            </div>

            <div className="space-y-4 px-1">
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" placeholder="Enter phone number" />
              </div>

              <div>
                <Label>Payment</Label>
                <Select defaultValue="cash">
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="card">Card</SelectItem>
                    <SelectItem value="upi">UPI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Order Type</Label>
                <Select defaultValue="dine-in">
                  <SelectTrigger>
                    <SelectValue placeholder="Select order type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dine-in">Dine - In</SelectItem>
                    <SelectItem value="takeaway">Takeaway</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <SheetFooter className="pt-4">
          <SheetClose asChild>
            <Button type="submit" className="w-full">
              Place Order
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
