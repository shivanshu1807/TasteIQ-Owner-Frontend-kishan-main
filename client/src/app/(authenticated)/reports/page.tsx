import CardLayout from "@/components/common/CardLayout";
import Export from "@/components/reports/Export";
import Overall from "@/components/reports/Overall";
import RevenueChart from "@/components/reports/RevenueChart";
import SalesPerformance from "@/components/reports/SalesPerformance";
import TrendingItems from "@/components/reports/TrendingItems";
import { Button } from "@/components/ui/button";
import { CalendarDays, SlidersHorizontalIcon } from "lucide-react";
import React from "react";
import OrderReportTable from "@/components/reports/OrderReportTable";
import SideDrawer from "@/components/common/SideDrawer";

interface toRenderType {
  title: string;
  Element: React.ReactNode;
}
const toRender: toRenderType[] = [
  {
    title: "Overall",
    Element: <Overall />,
  },
  { title: "Revenue", Element: <RevenueChart /> },
  { title: "Trending Items", Element: <TrendingItems /> },
];

const page = () => {
  return (
    <div className="w-full h-full space-y-6">
      <div className="flex items-center justify-end gap-4">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-sm py-5"
        >
          <CalendarDays className="size-5" />
          From 20 July - To 20 Aug
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-sm py-5"
        >
          <SlidersHorizontalIcon className="size-[1.2rem]" />
          Filter
        </Button>
        <div className="lg:hidden flex">
          <SideDrawer text="Export">
            <CardLayout title="Export" classText="font-semibold text-base" className="h-fit">
              <Export />
            </CardLayout>
          </SideDrawer>
        </div>
      </div>

      <div className="flex-1 flex flex-col w-full overflow-y-auto">
        <div className="flex flex-col w-full items-stretch pb-6 gap-3">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-8/12 w-full flex lg:flex-row flex-col gap-3">
              {toRender.map((item, index) => (
                <CardLayout
                  key={index}
                  title={item.title}
                  classText="font-semibold text-base"
                  className="h-full"
                >
                  {item.Element}
                </CardLayout>
              ))}
            </div>
            <div className="lg:w-4/12 w-full flex">
              <CardLayout
                title="Sales Performance"
                classText="font-semibold text-base text-center"
                className="h-full"
              >
                <SalesPerformance />
              </CardLayout>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-8/12 w-full flex lg:flex-row flex-col gap-3">
              <CardLayout
                title="Orders Report"
                classText="font-semibold text-base"
                className="h-full"
              >
                <OrderReportTable />
              </CardLayout>
            </div>
            <div className="lg:w-4/12 hidden lg:flex">
              <CardLayout
                title="Export"
                classText="font-semibold text-base"
                className="h-full"
              >
                <Export />
              </CardLayout>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
