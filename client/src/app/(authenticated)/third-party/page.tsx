import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Swiggy from "@/public/swiggy-logo.png";
import Zomato from "@/public/zomato-logo.png";
import Image from "next/image";
import { Plus } from "lucide-react";

const Page = () => {
  const integrations = [
    {
      name: "Swiggy",
      description:
        "Sync your restaurant's menu and orders directly with Swiggy. Once connected, you can manage Swiggy orders in real-time from this platform",
      icon: Swiggy,
      gradient: "bg-gradient-to-br from-orange-500 via-orange-200 to-gray-50",
    },
    {
      name: "Zomato",
      description:
        "Sync your restaurant's menu and orders directly with Zomato. Once connected, you can manage Zomato orders in real-time from this platform",
      icon: Zomato,
      gradient: "bg-gradient-to-br from-red-500 via-red-500 to-slate-50",
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
        {integrations.map((integration, index) => (
          <div
            key={index}
            className="rounded-xl p-5 shadow-sm relative bg-background "
          >
            <div className="absolute top-8 right-8">
              <span className="text-red-500 text-sm">Not connected</span>
            </div>
            {/* <div
              className={`block w-[200px] h-[100px] absolute top-0 left-0 bg-gradient-to-br ${integration.gradient} `}
            ></div> */}

            <div className="flex flex-col items-start space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <div className="w-40 h-40 rounded-lg flex items-center justify-center">
                {/* bg-gradient-to-br ${integration.gradientFrom} ${integration.gradientTo} */}
                <Image src={integration.icon} alt="" className="w-40"/>
              </div>
              <div className="flex-1 pr-8 md:pr-24">
                <h2 className="text-xl font-semibold mb-2">
                  Connect to {integration.name}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {integration.description}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Input placeholder="Add api key" className="flex-1 bg-white" />
              <Button variant="ghost" className="text-blue-600 flex space-x-2 items-center">
                <Plus/>
                <span>Connect</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
