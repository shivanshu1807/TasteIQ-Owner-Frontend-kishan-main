import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "../sidebar/Sidebar";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

export default function SideDrawer() {
  return (
    <div className="md:hidden flex">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-0 w-[250px]" side={"left"}>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
