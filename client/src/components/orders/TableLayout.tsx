"use client";

import React from "react";
import OrderEntry from "./OrderEntry";

const TableLayout = () => {
  return (
    <div className="w-full flex flex-col h-full space-y-4">
      <div className="overflow-x-auto">
        <div className="min-w-[800px] w-full">
          <div className="w-full bg-background py-4 rounded-xl">
            <div className="w-full grid grid-cols-7 gap-4 text-sm font-medium place-items-center ">
              <div className="">Order No</div>
              <div className="">Table No</div>
              <div className="">Type</div>
              <div className="">Item Count</div>
              <div className="">Order Status</div>
              <div className="">Payment Status</div>
              <div className="">Generate Bill</div>
            </div>
          </div>

          {/* Content Area */}
          <div className="h-[calc(100vh-17rem)] overflow-y-auto mt-4">
            <div className="w-full rounded-xl bg-background">
              <OrderEntry />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
