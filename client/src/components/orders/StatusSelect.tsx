"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  interface StatusSelectProps {
    value: string;
    onValueChange: (value: string) => void;
    options: {
      value: string;
      label: string;
    }[];
    placeholder?: string;
  }
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-gray-100 text-gray-800";
      case "paid":
        return "bg-green-100 text-green-800";
      case "unpaid":
        return "bg-red-100 text-red-800";
      default:
        return "";
    }
  };
  
  const StatusSelect = ({ value, onValueChange, options, placeholder = "Select status" }: StatusSelectProps) => {
    return (
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={`inline-flex items-center rounded-full text-xs font-medium ${getStatusColor(value)}`}>
          <SelectValue placeholder={placeholder}>
              {value}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(option.value)}`}>
                {option.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };
  
  export default StatusSelect;