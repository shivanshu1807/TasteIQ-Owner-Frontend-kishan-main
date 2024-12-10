import Image from "next/image";
import React from "react";

const ItemCard = () => {
    return (
      <div className="bg-background hover:shadow-md transition-shadow p-4 rounded-lg flex flex-col items-center cursor-pointer">
        <div className="w-20 h-20 rounded-full overflow-hidden mb-2 relative">
          <Image
            src=""
            alt="Gulab Jamun"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-sm font-medium text-center">Gulab Jamun</h3>
        <p className="text-sm mt-1">₹ 150</p>
      </div>
    );
  };

export default ItemCard;
