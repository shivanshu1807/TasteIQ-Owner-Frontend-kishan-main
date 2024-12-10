import React from "react";

const Data = [
  {
    title: "New Customers",
    number: 120,
  },
  {
    title: "Repeat Customers",
    number: 24,
  },
  {
    title: "Current AWT",
    number: 8,
    extraText: "mins",
  },
  {
    title: "Customer Ratings",
    number: 4.2,
    extraText: "/5",
  },
  {
    title: "Repeat customer rate",
    number: 62,
    extraText: "%",
  },
  {
    title: "Total Time Saved",
    number: 63,
    extraText: "mins",
  },
];

const DataCard = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-6">
      {Data.map((data, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-start justify-between p-4 gap-10 bg-background rounded-3xl"
          >
            <span className="text-sm font-normal text-muted-foreground">{data.title}</span>
            <p className="text-3xl font-semibold">
              {data.number}
              {data.extraText && (
                <span className="ml-1 font-normal text-base text-gray-600">{data.extraText}</span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DataCard;