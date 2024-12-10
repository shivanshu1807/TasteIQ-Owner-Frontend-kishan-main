import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface SideDrawerProps {
  text: string;
  children: React.ReactNode;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ text, children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-xl">{text}</Button>
      </SheetTrigger>
      <SheetContent className="py-12">{children}</SheetContent>
    </Sheet>
  );
};

export default SideDrawer;