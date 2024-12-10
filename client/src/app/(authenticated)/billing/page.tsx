import Bill from "@/components/billing/Bill";
import BillDrawer from "@/components/billing/BillDrawer";
import ItemCard from "@/components/billing/ItemCard";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full md:w-8/12 h-full overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
      <div className="absolute flex md:hidden right-5 top-5 z-10">
        <BillDrawer />
      </div>
      <div
        className="overflow-y-auto bg-background shadow-lg border-l
      hidden
      md:flex md:items-start md:w-4/12 md:absolute md:top-0 md:right-0 md:bottom-0"
      >
        <Bill />
      </div>
    </div>
  );
}
