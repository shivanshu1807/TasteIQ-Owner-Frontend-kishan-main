import React from "react";

const Gaming = () => {
  return (
    <div className="w-full p-4 bg-background rounded-3xl">
      <div className="grid gap-4 px-1">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">
            Time Spent on Gaming
          </span>
        </div>
        <div className="overflow-y-auto scroll-smooth pr-2">
          <div className="grid gap-2">
            <div className="flex justify-between items-center rounded-2xl p-4 border">
              <span className="font-semibold">
                Average Gaming Time per Customer
              </span>
              <span className="p-2 bg-blue-300 text-blue-700 rounded-xl text-sm">
                20 Minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gaming;
