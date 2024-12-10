"use client";
import { Heart } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface ChefOrder {
  id: string;
  ChefName: string;
  TimeTaken: number;
  Review: boolean;
  orderStatus: "processing" | "completed" | "cancelled";
  isFavorite?: boolean;
}

const StatusBadge = ({ status }: { status: ChefOrder["orderStatus"] }) => {
  const statusStyles = {
    processing: "bg-blue-100 text-blue-700",
    completed: "bg-green-100 text-green-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]} capitalize`}
    >
      {status}
    </span>
  );
};

const ChefEntry = () => {
  const [orders, setOrders] = useState<ChefOrder[]>([
    {
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },
    {
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },{
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Review: true,
      orderStatus: "processing",
      isFavorite: false,
    },
    {
      id: "ORD002",
      ChefName: "Jane Smith",
      TimeTaken: 20,
      Review: false,
      orderStatus: "completed",
      isFavorite: false,
    },
    {
      id: "ORD003",
      ChefName: "Bob Johnson",
      TimeTaken: 10,
      Review: true,
      orderStatus: "cancelled",
      isFavorite: false,
    },
  ]);

  const toggleFavorite = (orderId: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, isFavorite: !order.isFavorite }
          : order
      )
    );
  };

  return (
    <div className="divide-y divide-secondary">
      {orders.map((order) => (
        <div
          key={order.id}
          className="w-full grid grid-cols-5 gap-4 py-4 text-sm font-medium place-items-center"
        >
          <div className="px-2">
            <span className="font-medium text-gray-700">#{order.id}</span>
          </div>

          <div className="text-center text-gray-700">{order.ChefName}</div>

          <div className="flex items-center space-x-2 text-gray-600">
            <span>{order.TimeTaken} mins</span>
          </div>

          <div className="px-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleFavorite(order.id)}
              className="hover:bg-transparent"
            >
              <Heart
                className={`size-5 transition-colors ${
                  order.isFavorite
                    ? "fill-red-500 stroke-red-500"
                    : "stroke-gray-400 hover:stroke-red-500"
                }`}
              />
            </Button>
          </div>

          <div className="px-2">
            <StatusBadge status={order.orderStatus} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChefEntry;
