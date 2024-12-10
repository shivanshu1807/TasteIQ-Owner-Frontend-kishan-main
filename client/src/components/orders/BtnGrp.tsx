  import React from "react";
import { Button } from "../ui/button";
import OrderOnBehalf from "./OrderOnBehalf";

const BtnGrp = () => {
  const Buttons = [
    {
      id: 1,
      name: "Dine In",
    },
    {
      id: 2,
      name: "Zomato",
    },
    {
      id: 3,
      name: "Swiggy",
    },
    {
      id: 4,
      name: "Paid",
    },
    {
      id: 5,
      name: "Unpaid",
    },
  ];
  return (
    <div className="w-full flex items-center">
      <div className="grid md:grid-cols-5 grid-cols-3 gap-4 w-2/4 justify-center-center">
        {Buttons.map((item) => (
          <Button
            key={item.id}
            className="bg-[#4f46e5] hover:bg-[#655ee7] rounded text-xs lg:text-sm"
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="flex justify-end w-2/4">
        <OrderOnBehalf/>
      </div>
    </div>
  );
};

export default BtnGrp;
