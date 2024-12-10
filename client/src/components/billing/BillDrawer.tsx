import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Bill from "./Bill";
import { Button } from "../ui/button";

const BillDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
           Open Bill
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
        <Bill />
      </SheetContent>
    </Sheet>
  );
};

export default BillDrawer;
