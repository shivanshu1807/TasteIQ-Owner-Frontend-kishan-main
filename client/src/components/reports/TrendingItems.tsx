import React from "react";
import Image from "next/image";

const TrendingItems = () => {
  const trendingItems = [
    { id: 1, name: "Butter Garlic Naan" },
    { id: 2, name: "Chicken Biryani" },
    { id: 3, name: "Paneer Tikka" },
    { id: 4, name: "Masala Dosa" },
    { id: 5, name: "Gulab Jamun" },
    { id: 6, name: "Butter Chicken" },
  ];

  return (
    <div className="w-full h-[calc(4*3.625rem)] overflow-y-auto">
      <div className="flex flex-col space-y-2">
        {trendingItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-3">
            <Image
              src=""
              alt=""
              className="size-[2.5rem] border border-red-400 rounded-full"
            />
            <h3 className="font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingItems;