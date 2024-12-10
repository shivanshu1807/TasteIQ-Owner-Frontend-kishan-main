import React from "react";
const mockdata = [
  {
    itemName: "Paneer Tikka",
    Offer: "Set 20% off for quick sale",
    textfield: "Expiry date ",
    data: "2 days",
  },
  {
    itemName: "Paneer Tikka",
    Offer: "Set 20% off for quick sale",
    textfield: "Expiry date ",
    data: "2 days",
  },
  {
    itemName: "Paneer Tikka",
    Offer: "Set 20% off for quick sale",
    textfield: "Expiry date ",
    data: "2 days",
  },
  {
    itemName: "Paneer Tikka",
    Offer: "Set 20% off for quick sale",
    textfield: "Expiry date ",
    data: "2 days",
  },
  {
    itemName: "Paneer Tikka",
    Offer: "Set 20% off for quick sale",
    textfield: "Expiry date ",
    data: "2 days",
  },
  {
    itemName: "Paneer Tikka",
    Offer: "Set 20% off for quick sale",
    textfield: "Expiry date ",
    data: "2 days",
  },
];
const PushPromotionInsights = () => {
  return (
    <div className="w-full p-4 bg-background rounded-3xl">
      <div className="grid gap-3 px-1">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground text-sm">
            Push Promotion Insights
          </span>
        </div>
        <div className="h-[39vh] overflow-y-auto scroll-smooth pr-2">
          <div className="grid gap-2">
            {mockdata.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl p-3 gap-1 border"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{item.itemName}</span>
                  <span className="p-2 bg-blue-300 text-blue-700 rounded-xl text-sm">
                    {item.Offer}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    {item.textfield}
                    <span className="text-red-600 font-semibold">
                      {item.data}
                    </span>
                  </span>
                  <span className="text-muted-foreground text-xs">
                    Recommended Action
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PushPromotionInsights;
