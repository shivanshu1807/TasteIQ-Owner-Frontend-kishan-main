import WaiterEntry from "@/components/waiter/WaiterEntry";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full min-w-[800px] flex flex-col h-full">
        <div className="w-full bg-background py-4 rounded-xl">
          <div className="w-full grid grid-cols-5 gap-4 text-sm font-medium place-items-center">
            <div>Order Number</div>
            <div>Waiter Name</div>
            <div>Time Taken</div>
            <div>Ratings</div>
            <div>Order Status</div>
          </div>
        </div>

        <div className="flex-1 mt-4 overflow-y-auto">
          <div className="w-full rounded-xl bg-background">
            <WaiterEntry/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
