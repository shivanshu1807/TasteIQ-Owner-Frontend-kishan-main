import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ReceiptText } from "lucide-react";
import { Button } from "../ui/button";
const ReceiptCard = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ReceiptText className="h-[1.2rem] w-[1.2rem] text-blue-600 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Button className="w-full">Download Receipt</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ReceiptCard;
