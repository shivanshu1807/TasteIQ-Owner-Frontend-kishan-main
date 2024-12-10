import React from "react";
const Comments = [
  { message: "Great food but low service ", author: "Kishan Agrawal" },
  { message: "Great food but low service ", author: "Kishan Agrawal" },
  { message: "Great food but low service ", author: "Kishan Agrawal" },
  { message: "Great food but low service ", author: "Kishan Agrawal" },
  { message: "Great food but low service ", author: "Kishan Agrawal" },
  { message: "Great food but low service ", author: "Kishan Agrawal" },
  { message: "Great food but low service ", author: "Kishan Agrawal" },
];
const CustomerComments = () => {
  return (
    <div className="w-full p-4 bg-background rounded-3xl">
      <div className="grid gap-3 px-1">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">
            Customer Comments
          </span>
        </div>
        <div className="h-[22vh] overflow-y-auto scroll-smooth pr-2">
          <div className="grid gap-2">
            {Comments.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl p-3 gap-1 border"
              >
                <span className="font-semibold">{item.message}</span>

                <span className="text-xs font-semibold text-green-500">
                  {item.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerComments;
