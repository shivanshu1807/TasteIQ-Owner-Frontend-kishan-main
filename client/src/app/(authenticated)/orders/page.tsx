"use client";

import BtnGrp from "@/components/orders/BtnGrp";
import TableLayout from "@/components/orders/TableLayout";

const Page = () => {
  
  return (
    <div className="w-full h-full overflow-hidden flex flex-col space-y-6">
      <BtnGrp/>
      <TableLayout/>
    </div>
  );
};

export default Page;
