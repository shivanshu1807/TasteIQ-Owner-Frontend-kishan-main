import React from "react";

const customerData = [
  {
    name: "Sarah Johnson",
    phone: "8764529109",
    totalOrders: "15",
    totalSpent: "₹ 520",
  },
  {
    name: "Michael Brown",
    phone: "7654270198",
    totalOrders: "20",
    totalSpent: "₹ 650",
  },
  {
    name: "Emma Wilson",
    phone: "6542210987",
    totalOrders: "18",
    totalSpent: "₹ 580",
  },
  {
    name: "Emma Wilson",
    phone: "6542210987",
    totalOrders: "18",
    totalSpent: "₹ 580",
  },
  {
    name: "Emma Wilson",
    phone: "6542210987",
    totalOrders: "18",
    totalSpent: "₹ 580",
  },
  {
    name: "Emma Wilson",
    phone: "6542210987",
    totalOrders: "18",
    totalSpent: "₹ 580",
  },
  {
    name: "Emma Wilson",
    phone: "6542210987",
    totalOrders: "18",
    totalSpent: "₹ 580",
  },
  {
    name: "Emma Wilson",
    phone: "6542210987",
    totalOrders: "18",
    totalSpent: "₹ 580",
  },
];

const UniqCustomer = () => {
  return (
    <div className="w-full p-4 bg-background rounded-3xl">
      <div className="grid gap-4 px-1">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">
            Unique customer list
          </span>
        </div>
        <div className="h-[38vh] overflow-y-auto scroll-smooth pr-2">
          <div className="grid gap-2">
            {customerData.map((customer, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border rounded-2xl"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-semibold">{customer.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {customer.phone}
                  </span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-sm text-muted-foreground">
                    total orders: {customer.totalOrders}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    total spent: {customer.totalSpent}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqCustomer;
