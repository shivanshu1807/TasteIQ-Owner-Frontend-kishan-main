import React from "react";
import { CreateLoyalty } from "./CreateLoyalty";
const data = [
  {
    title: "Get free Icecream",
    sText: "after",
    mText: "5 visits",
  },
  {
    title: "Get free Icecream",
    sText: "after",
    mText: "5 visits",
  },
  {
    title: "Get free Icecream",
    sText: "after",
    mText: "5 visits",
  },
  {
    title: "Get free Icecream",
    sText: "after",
    mText: "5 visits",
  },
  {
    title: "Get free Icecream",
    sText: "after",
    mText: "5 visits",
  },
  {
    title: "Get free Icecream",
    sText: "after",
    mText: "5 visits",
  },
];
const Loyalty = () => {
  return (
    <div className="w-full p-4 bg-background rounded-3xl">
      <div className="grid gap-4 px-1">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">Loyalty Program</span>
          <CreateLoyalty />
        </div>
        <div className="h-[18vh] overflow-y-auto scroll-smooth pr-2">
          <div className="grid gap-2">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center rounded-2xl p-4 border"
              >
                <span className="font-semibold">{item.title}</span>
                <div className="flex gap-1">
                  <span className="text-sm text-muted-foreground">
                    {item.sText}
                  </span>
                  <span className="text-sm text-green-400 font-semibold">
                    {item.mText}
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

export default Loyalty;
