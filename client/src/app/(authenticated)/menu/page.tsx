"use client";

import InSearch from "@/components/header/InSearch";
import Categories from "@/components/menu/Categories";
import EditMenu from "@/components/menu/EditMenu";
import MenuList from "@/components/menu/MenuList";
import SideDrawer from "@/components/menu/SideDrawer";
import React from "react";

const Page = () => {
  return (
    <div className=" relative w-full h-full flex overflow-hidden lg:space-x-10">
      <div className="w-full flex flex-col space-y-4 lg:w-7/12 h-full p-1">
        <InSearch width="w-7/12" />
        <Categories categories={["Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish","Sweet Dish",]} />
        <div className="flex-1 min-h-0">
          <MenuList />
        </div>
      </div>
      <div className="hidden lg:flex lg:w-5/12 p-1">
        <EditMenu/>
      </div>
      <div className="absolute top-1 right-1 flex lg:hidden">
        <SideDrawer/>
      </div>
    </div>
  );
};

export default Page;
