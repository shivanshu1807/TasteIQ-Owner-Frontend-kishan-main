import React from "react";
import { CreateCoupon } from "./CreateCoupon";

const data = [
  {
    mText: "10% OFF 80",
    sText: "on your first order",
    coupon: "NEWUSER",
  },
  {
    mText: "10% OFF 80",
    sText: "on your first order",
    coupon: "NEWUSER",
  },
  {
    mText: "10% OFF 80",
    sText: "on your first order",
    coupon: "NEWUSER",
  },
  {
    mText: "10% OFF 80",
    sText: "on your first order",
    coupon: "NEWUSER",
  },
  {
    mText: "10% OFF 80",
    sText: "on your first order",
    coupon: "NEWUSER",
  },
];

const Coupons = () => {
  return (
    <div className="w-full p-4 bg-background rounded-3xl">
      <div className="grid gap-4 px-1">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">Coupons</span>
          <CreateCoupon />
        </div>
        <div className="h-[40vh] overflow-y-auto scroll-smooth pr-2">
          <div className="grid gap-2">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center rounded-2xl p-4 border"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-semibold">{item.mText}</span>
                  <span className="text-sm text-muted-foreground">
                    {item.sText}
                  </span>
                </div>
                <span className="text-sm px-3 py-2 bg-green-100 rounded-2xl text-green-700 font-medium">
                  {item.coupon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
