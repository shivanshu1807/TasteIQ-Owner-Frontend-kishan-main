import ChefEntry from "@/components/chef/ChefEntry";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full min-w-[800px] flex flex-col h-full">
        <div className="w-full bg-background py-4 rounded-xl">
          <div className="w-full grid grid-cols-5 gap-4 text-sm font-medium place-items-center">
            <div>Order Number</div>
            <div>Chef Name</div>
            <div>Time Taken</div>
            <div>Review</div>
            <div>Order Status</div>
          </div>
        </div>

        <div className="flex-1 mt-4 overflow-y-auto">
          <div className="w-full rounded-xl bg-background">
            <ChefEntry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
