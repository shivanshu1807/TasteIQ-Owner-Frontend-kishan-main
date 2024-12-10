"use client";
import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
import CustomSelect from "../common/CustomSelect";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

const ExportOptions = () => {
  const [selectedOptions, setSelectedOptions] = useState([
    "Trending Items",
    "Customer Feedback",
  ]);

  const exportFormats: { value: string; label: string }[] = [
    { value: "pdf", label: "PDF" },
    { value: "xlsx", label: "Excel" },
    { value: "csv", label: "CSV" },
  ];

  const options = [
    { id: "all", label: "All" },
    { id: "revenue", label: "Revenue" },
    { id: "trending", label: "Trending Items" },
    { id: "orders", label: "Orders report" },
    { id: "feedback", label: "Customer Feedback" },
    { id: "waiters", label: "Waiters performance" },
    { id: "chef", label: "Chef Performance" },
  ];

  const handleOptionToggle = (id: string) => {
    setSelectedOptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleFormatChange = (value: string) => {
    console.log("Selected format:", value);
  };

  return (
    <div className="w-full flex flex-col px-2">
      <Button
        variant="outline"
        size="sm"
        className="absolute top-4 right-4 flex items-center gap-2 text-sm py-5"
      >
        <CalendarDays className="size-5" />
        Today
      </Button>

      {/* Options List */}
      <div className="space-y-3 mb-4">
        {options.map((option) => (
          <Label
            key={option.id}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Checkbox
              className="w-4 h-4 rounded data-[state=checked]:bg-blue-600"
              // checked={selectedOptions.includes(option.label)}
              // onChange={() => handleOptionToggle(option.label)}
            />
            <span className="text-gray-700">{option.label}</span>
          </Label>
        ))}
      </div>

      <div className="flex gap-2">
        <CustomSelect
          placeholder="Select Format"
          options={exportFormats}
          onChange={handleFormatChange}
          className="flex-1"
        />

        <Button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Download
        </Button>
      </div>
    </div>
  );
};

export default ExportOptions;
