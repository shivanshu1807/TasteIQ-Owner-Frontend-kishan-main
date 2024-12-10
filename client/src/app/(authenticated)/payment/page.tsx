import SideDrawer from "@/components/common/SideDrawer";
import PaymentGateway from "@/components/payment/PaymentGateway";
import PaymentOptions from "@/components/payment/PaymentOptions";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col flex-1">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
        <div className="bg-background rounded-xl p-6">
          <PaymentGateway />
        </div>
        <div className="bg-background rounded-xl p-6 lg:flex hidden h-fit sticky top-0">
          <PaymentOptions />
        </div>
        <div className="lg:hidden fixed z-50">
          <SideDrawer text="Payment Options">
            <PaymentOptions />
          </SideDrawer>
        </div>
      </div>
    </div>
  );
};

export default Page;
