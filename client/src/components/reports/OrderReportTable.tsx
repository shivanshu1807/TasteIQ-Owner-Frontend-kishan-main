import React from "react";

interface OrderReport {
  date: string;
  OrderNo: number;
  Quantity: number;
  Name: string;
  Time: string;
  Payment: string;
  Price: number;
}

const OrderReportTable = () => {
  const orders: OrderReport[] = [
    {
      date: "2024-03-01",
      OrderNo: 1001,
      Quantity: 2,
      Name: "Chicken Burger",
      Time: "12:30 PM",
      Payment: "Card",
      Price: 25.99,
    },
    {
      date: "2024-03-01",
      OrderNo: 1002,
      Quantity: 1,
      Name: "Caesar Salad",
      Time: "12:45 PM",
      Payment: "Cash",
      Price: 15.5,
    },
    ...Array(20)
      .fill(null)
      .map((_, index) => ({
        date: "2024-03-01",
        OrderNo: 1003 + index,
        Quantity: Math.floor(Math.random() * 5) + 1,
        Name: `Menu Item ${index + 1}`,
        Time: `${Math.floor(Math.random() * 12 + 1)}:${Math.floor(
          Math.random() * 60
        )
          .toString()
          .padStart(2, "0")} PM`,
        Payment: Math.random() > 0.5 ? "Card" : "Cash",
        Price: +(Math.random() * 30 + 10).toFixed(2),
      })),
  ];

  return (
    <div className="w-full h-[35vh] overflow-y-auto">
      <div className="min-w-[700px] overflow-x-auto">
        {" "}
        {/* Minimum width to prevent squishing */}
        {/* Header */}
        <div className="w-full grid grid-cols-7 gap-4 py-4 bg-gray-50 text-sm font-semibold text-gray-900 sticky top-0 z-10">
          <div className="px-2 text-center">Date</div>
          <div className="px-2 text-center">Order No</div>
          <div className="px-2 text-center">Quantity</div>
          <div className="px-2 text-center">Name</div>
          <div className="px-2 text-center">Time</div>
          <div className="px-2 text-center">Payment</div>
          <div className="px-2 text-center">Price</div>
        </div>
        {/* Content */}
        <div className="divide-y divide-gray-200">
          {orders.map((order) => (
            <div
              key={order.OrderNo}
              className="w-full grid grid-cols-7 gap-4 py-4 text-sm font-medium"
            >
              <div className="text-center">{order.date}</div>
              <div className="px-2 text-center">#{order.OrderNo}</div>
              <div className="px-2 text-center">{order.Quantity}</div>
              <div className="px-2 text-center">{order.Name}</div>
              <div className="px-2 text-center">{order.Time}</div>
              <div className="px-2 text-center">{order.Payment}</div>
              <div className="px-2 text-center">${order.Price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderReportTable;
