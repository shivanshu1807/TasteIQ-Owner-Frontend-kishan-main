import Coupons from "@/components/customerInsights/Coupons";
import CustomerComments from "@/components/customerInsights/CustomerComments";
import DataCard from "@/components/customerInsights/DataCard";
import Gaming from "@/components/customerInsights/Gaming";
import Loyalty from "@/components/customerInsights/Loyalty";
import PushPromotionInsights from "@/components/customerInsights/PushPromotionInsights";
import UniqCustomer from "@/components/customerInsights/UniqCustomer";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-4 pb-8">
        <div className="grid gap-4">
          <DataCard />
          <Coupons />
          <UniqCustomer />
        </div>
        <div className="grid gap-4 content-start">
          <Loyalty />
          <CustomerComments />
          <PushPromotionInsights />
          <Gaming />
        </div>
      </div>
    </div>
  );
};

export default page;
