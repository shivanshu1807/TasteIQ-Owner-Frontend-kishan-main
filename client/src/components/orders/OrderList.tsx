"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Badge } from "../ui/badge";

const OrderList = () => {
  // Sample data for demonstration
  const orderItems = [
    {
      id: 1,
      name: "Tandoori Aloo Tikki, Paneer",
      quantity: 3,
      status: "prepared",
      price: 230,
      image: "/api/placeholder/48/48",
    },
    {
      id: 2,
      name: "Butter Chicken",
      quantity: 2,
      status: "preparing",
      price: 340,
      image: "/api/placeholder/48/48",
    },
    {
      id: 3,
      name: "Garlic Naan",
      quantity: 4,
      status: "prepared",
      price: 160,
      image: "/api/placeholder/48/48",
    },
    {
      id: 4,
      name: "Dal Makhani",
      quantity: 1,
      status: "prepared",
      price: 180,
      image: "/api/placeholder/48/48",
    },
    {
      id: 5,
      name: "Jeera Rice",
      quantity: 2,
      status: "preparing",
      price: 150,
      image: "/api/placeholder/48/48",
    },
    {
      id: 6,
      name: "Malai Kofta",
      quantity: 1,
      status: "prepared",
      price: 250,
      image: "/api/placeholder/48/48",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "prepared":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "preparing":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="underline text-xs text-blue-600 hover:text-blue-800">
          View All
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="pb-4 border-b">
          <h2 className="text-lg font-semibold">Order Items</h2>
          <p className="text-sm text-gray-500">
            Total {orderItems.length} items
          </p>
        </div>
        <div className="max-h-[60vh] overflow-y-auto pr-2 -mr-2">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between rounded-xl items-center p-2 mb-3 border"
            >
              <div className="flex justify-start items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start justify-center px-2">
                  <h1 className="text-sm font-medium">{item.name}</h1>
                  <h1 className="text-xs">x{item.quantity}</h1>
                  <Badge className={`mt-1 ${getStatusColor(item.status)}`}>
                    {item.status}
                  </Badge>
                </div>
              </div>
              <div className="flex justify-center items-center font-semibold">
                ₹{item.price}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderList;
