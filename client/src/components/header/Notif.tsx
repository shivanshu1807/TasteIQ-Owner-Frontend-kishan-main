import React from "react";
import { Bell } from "lucide-react";
import { Button } from "../ui/button";
const Notif = () => {
  return (
    <Button variant="outline" size="icon">
      <Bell className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
};

export default Notif;
