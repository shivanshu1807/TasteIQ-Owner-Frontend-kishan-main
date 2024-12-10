"use client";

import { useState } from "react";
import OrderList from "./OrderList";
import ReceiptCard from "./ReceiptCard";
import StatusSelect from "./StatusSelect";

interface Order {
  id: string;
  tableNo: number;
  type: string;
  itemsCount: number;
  orderStatus: "processing" | "completed" | "cancelled";
  paymentStatus: "paid" | "unpaid";
}

const OrderEntry = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "#101",
      tableNo: 6,
      type: "Dine-in",
      itemsCount: 7,
      orderStatus: "processing",
      paymentStatus: "unpaid",
    },
    {
      id: "#102",
      tableNo: 2,
      type: "Zomato",
      itemsCount: 4,
      orderStatus: "completed",
      paymentStatus: "paid",
    },
    // Add your other orders here
  ]);

  const orderStatusOptions = [
    { value: "processing", label: "Processing" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const paymentStatusOptions = [
    { value: "paid", label: "Paid" },
    { value: "unpaid", label: "Unpaid" },
  ];

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId
          ? { ...order, orderStatus: newStatus as Order['orderStatus'] }
          : order
      )
    );
  };

  const updatePaymentStatus = (orderId: string, newStatus: string) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId
          ? { ...order, paymentStatus: newStatus as Order['paymentStatus'] }
          : order
      )
    );
  };

  return (
    <div className="divide-y divide-secondary">
      {orders.map((order) => (
        <div
          key={order.id}
          className="w-full grid grid-cols-7 gap-4 py-4 text-sm font-medium place-items-center"
        >
          <div className="px-2">
            <span className="font-medium">{order.id}</span>
          </div>
          <div className="px-2">{order.tableNo}</div>
          <div className="text-center">{order.type}</div>
          <div className="flex items-center space-x-2">
            <h1>{order.itemsCount}</h1>
            <OrderList />
          </div>
          <div className="px-2">
            <StatusSelect
              value={order.orderStatus}
              onValueChange={(value) => updateOrderStatus(order.id, value)}
              options={orderStatusOptions}
              placeholder="Order Status"
            />
          </div>
          <div className="px-2">
            <StatusSelect
              value={order.paymentStatus}
              onValueChange={(value) => updatePaymentStatus(order.id, value)}
              options={paymentStatusOptions}
              placeholder="Payment Status"
            />
          </div>
          <div className="px-2">
            <ReceiptCard />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderEntry;