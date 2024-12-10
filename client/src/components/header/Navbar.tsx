"use client";
import { ModeToggle } from "./ModeToggle";
import InSearch from "./InSearch";
import Notif from "./Notif";
import Image from "next/image";
import profile from "@/public/profile.png";
import { usePathname } from "next/navigation";
import SideDrawer from "./SideDrawer";
const Navbar = () => {
  const pathname = usePathname();
  const getRouteName = (path: string): string => {
    const parts = path.split("/").filter(Boolean);
    const firstPart = parts[0];
    return firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
  };
  const routeName = getRouteName(pathname);

  return (
    <div className="p-4 flex w-full justify-between items-center border-b-2">
      <div className="gap-2 flex items-center">
        <SideDrawer />
        <text className="md:text-xl">{routeName}</text>
      </div>
      <div className="sm:gap-3 gap-2 flex items-center justify-end">
        <InSearch width="w-7/12" />
        <ModeToggle />
        <Notif />
        <div className="rounded-md h-[2rem] w-[2rem]">
          <Image
            alt="profile"
            src={profile}
            className="object-cover overflow-hidden"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
