import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import DiscountBased from "./DiscountBased";
import ItemsBased from "./ItemsBased";

export function CreateLoyalty() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="text-blue-500 py-5 rounded-2xl">
            Create New
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] bg-secondary grid gap-2 items-center">
          <Tabs
            defaultValue="item based"
            className="w-full h-full flex flex-col pt-1"
          >
            <TabsList className="grid w-full grid-cols-2 gap-4 shrink-0">
              <TabsTrigger
                value="item based"
                className="bg-background data-[state=active]:bg-[#4f46e5] data-[state=active]:text-white text-foreground p-3"
              >
                Items Based
              </TabsTrigger>
              <TabsTrigger
                value="discount based"
                className="bg-background data-[state=active]:bg-[#4f46e5] data-[state=active]:text-white text-foreground p-3"
              >
                Discount Based
              </TabsTrigger>
            </TabsList>
            <div className="flex-1 overflow-hidden mt-4">
              <TabsContent value="item based" className="h-full p-1">
                <ItemsBased />
              </TabsContent>
              <TabsContent value="discount based" className="h-full p-1">
                <DiscountBased />
              </TabsContent>
            </div>
          </Tabs>
          <Button className="w-full py-5 rounded-xl bg-[#4f46e5]">
            Create Loyalty Program
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
