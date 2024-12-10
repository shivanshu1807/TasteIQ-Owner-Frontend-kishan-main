"use client";
import React from "react";

interface WaiterOrder {
  id: string;
  ChefName: string;
  TimeTaken: number;
  Rating: number;
  orderStatus: "waiting" | "served" | "cancelled";
}

const StatusBadge = ({ status }: { status: WaiterOrder["orderStatus"] }) => {
  const statusStyles = {
    waiting: "bg-blue-100 text-blue-700",
    served: "bg-green-100 text-green-700",
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

const WaiterEntry = () => {
  const orders: WaiterOrder[] = [
    {
      id: "ORD001",
      ChefName: "John Doe",
      TimeTaken: 15,
      Rating: 4.5,
      orderStatus: "served",
    },
    {
      id: "ORD002",
      ChefName: "Jane Smith",
      TimeTaken: 20,
      Rating: 3.8,
      orderStatus: "waiting",
    },
    {
      id: "ORD003",
      ChefName: "Bob Johnson",
      TimeTaken: 18,
      Rating: 4.2,
      orderStatus: "served",
    },
    {
      id: "ORD004",
      ChefName: "Maria Garcia",
      TimeTaken: 25,
      Rating: 2.5,
      orderStatus: "cancelled",
    },
    {
      id: "ORD005",
      ChefName: "John Doe",
      TimeTaken: 12,
      Rating: 4.8,
      orderStatus: "served",
    },
    {
      id: "ORD006",
      ChefName: "Sarah Wilson",
      TimeTaken: 30,
      Rating: 3.0,
      orderStatus: "waiting",
    },
    {
      id: "ORD007",
      ChefName: "Bob Johnson",
      TimeTaken: 22,
      Rating: 4.0,
      orderStatus: "served",
    },
    {
      id: "ORD008",
      ChefName: "Jane Smith",
      TimeTaken: 16,
      Rating: 4.7,
      orderStatus: "waiting",
    },
    {
      id: "ORD009",
      ChefName: "Maria Garcia",
      TimeTaken: 28,
      Rating: 1.5,
      orderStatus: "cancelled",
    },
    {
      id: "ORD010",
      ChefName: "Sarah Wilson",
      TimeTaken: 19,
      Rating: 4.3,
      orderStatus: "served",
    },
    {
      id: "ORD011",
      ChefName: "John Doe",
      TimeTaken: 14,
      Rating: 4.9,
      orderStatus: "served",
    },
    {
      id: "ORD012",
      ChefName: "Bob Johnson",
      TimeTaken: 23,
      Rating: 3.5,
      orderStatus: "waiting",
    },
  ];

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
            <span>{order.Rating}</span>
          </div>

          <div className="px-2">
            <StatusBadge status={order.orderStatus} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WaiterEntry;
