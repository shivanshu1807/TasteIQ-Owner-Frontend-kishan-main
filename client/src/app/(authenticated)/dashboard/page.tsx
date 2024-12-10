import CardLayout from "@/components/common/CardLayout";
import DailySales from "@/components/dashboard/DailySales";
import PaymentBreakdown from "@/components/dashboard/PaymentBreakdown";
import { PeakOrderTime } from "@/components/dashboard/PeakOrderTime";
import { TrendingItems } from "@/components/dashboard/TrendingItems";
import { UpsellRevenue } from "@/components/dashboard/UpsellRevenue";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export default function DashBoard() {
  return (
    <div className="w-full space-y-6">
      <div className="flex items-center justify-end">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 text-sm py-5"
        >
          <CalendarDays className="size-5" />
          Today
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 pb-6 lg:grid-cols-3 gap-6">
        <CardLayout title="Daily Sales">
          <DailySales />
        </CardLayout>
        <CardLayout title="Payment Breakdown">
          <PaymentBreakdown />
        </CardLayout>
        <CardLayout title="Trending items">
          <TrendingItems />
        </CardLayout>
        <CardLayout title="Peak Order time">
          <PeakOrderTime />
        </CardLayout>
        <CardLayout title="Upsell Revenue">
          <UpsellRevenue />
        </CardLayout>
        <CardLayout title="Customer Type">
          <DailySales />
        </CardLayout>
      </div>
    </div>
  );
}
