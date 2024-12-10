import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import EditMenu from "./EditMenu"

export default function SideDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Edit Menu</Button>
      </SheetTrigger>
      <SheetContent className="bg-secondary w-[400px] sm:w-[540px] pt-10">
        <EditMenu/>
      </SheetContent>
    </Sheet>
  )
}
