import React from "react";

const Mock = [
  {
    Text: "Total Revenue",
    Data: 1250000,
  },
  {
    Text: "Total Revenue",
    Data: 1250000,
  },
  {
    Text: "Total Revenue",
    Data: 1250000,
  },
  {
    Text: "Total Revenue",
    Data: 1250000,
  },
];
const Overall = () => {
  return (
    <div className="grid gap-6 w-full">
      {Mock.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="text-muted-foreground">{item.Text}</span>
          <span className="font-semibold">{item.Data}</span>
        </div>
      ))}
    </div>
  );
};

export default Overall;
