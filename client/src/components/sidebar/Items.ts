import {
  HandPlatter,
  House,
  ReceiptIndianRupee,
  BadgeIndianRupee,
  Blocks,
  ClipboardMinus,
  ChefHat,
  ChartPie,
  CookingPot,
} from "lucide-react"; // Import icons

export const Items = [
  {
    name: "Dashboard",
    icon: House,
    to: "/dashboard",
  },
  {
    name: "Billing",
    icon: ReceiptIndianRupee,
    to: "/billing",
  },
  {
    name: "Orders",
    icon: HandPlatter,
    to: "/orders",
  },
  {
    name: "Menu",
    icon: ChefHat,
    to: "/menu",
  },
  {
    name: "Payment",
    icon: BadgeIndianRupee,
    to: "/payment",
  },
  {
    name: "Customer Insights",
    icon: ChartPie,
    to: "/customer-insights",
  },
  {
    name: "Third Party",
    icon: Blocks,
    to: "/third-party",
  },
  {
    name: "Chef",
    icon: CookingPot,
    to: "/chef",
  },
  {
    name: "Waiter",
    icon: HandPlatter,
    to: "/waiter",
  },
  {
    name: "Reports",
    icon: ClipboardMinus,
    to: "/reports",
  },
];
