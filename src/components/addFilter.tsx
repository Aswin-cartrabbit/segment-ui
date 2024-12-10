import * as React from "react";
import {
  Box,
  Calendar,
  DollarSign,
  List,
  Mail,
  MapPin,
  Phone,
  Repeat,
  ShoppingCart,
  Tag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import InfoCard from "./InfoCard";
import explanations from "../data/filterExplaination.json";
const items = [
  {
    category: "Contact Property",
    options: [
      { label: "First Name", icon: <Tag className="h-3 w-3" /> },
      { label: "Last Name", icon: <Tag className="h-3 w-3" /> },
      { label: "Tag", icon: <Tag className="h-3 w-3" /> },
      { label: "Birthdate", icon: <Calendar className="h-3 w-3" /> },
      { label: "Email", icon: <Mail className="h-3 w-3" /> },
      { label: "Phone number", icon: <Phone className="h-3 w-3" /> },
      { label: "Date of Addition", icon: <Calendar className="h-3 w-3" /> },
      { label: "City", icon: <MapPin className="h-3 w-3" /> },
      { label: "State", icon: <MapPin className="h-3 w-3" /> },
      { label: "Country", icon: <MapPin className="h-3 w-3" /> },
      { label: "Language", icon: <Tag className="h-3 w-3" /> },
      { label: "Subscription Status", icon: <Mail className="h-3 w-3" /> },
    ],
    icon: <Mail className="mr-1 h-3 w-3" />,
  },
  {
    // options: [
    //   "Order canceld",
    //   "Order fulfilled",
    //   "Order refunded",
    //   "Paid for order",
    //   "Placed order",
    //   "Started checkout"
    // ],
    category: "Placed Orders",
    options: [
      {
        label: "Order canceld",
        icon: <DollarSign className="h-3 w-3" />,
      },
      { label: "Order fulfilled", icon: <ShoppingCart className="h-3 w-3" /> },
      { label: "Order refunded", icon: <ShoppingCart className="h-3 w-3" /> },
      {
        label: "Paid for order",
        icon: <DollarSign className="h-3 w-3" />,
      },
      { label: "Placed order", icon: <Calendar className="h-3 w-3" /> },
    ],
    icon: <ShoppingCart className="mr-1 h-3 w-3" />,
  },
  {
    category: "Purchased Product Property",
    options: [
      { label: "Name of the product", icon: <Box className="h-3 w-3" /> },
      { label: "ID of the product", icon: <Box className="h-3 w-3" /> },
      { label: "Total purchased", icon: <ShoppingCart className="h-3 w-3" /> },
    ],
    icon: <Box className="mr-1 h-3 w-3" />,
  },
  {
    category: "Abandoned Cart",
    options: [
      { label: "Abandoned Date", icon: <Calendar className="h-3 w-3" /> },
      { label: "Abandoned product name", icon: <Box className="h-3 w-3" /> },
      { label: "Abandoned product ID", icon: <Box className="h-3 w-3" /> },
      {
        label: "Total no. of abandoned carts",
        icon: <ShoppingCart className="h-3 w-3" />,
      },
      {
        label: "Amount in each abandoned cart",
        icon: <DollarSign className="h-3 w-3" />,
      },
    ],
    icon: <ShoppingCart className="mr-1 h-3 w-3" />,
  },
  {
    category: "Email Campaign Properties",
    options: [
      { label: "Clicked on mail", icon: <Mail className="h-3 w-3" /> },
      { label: "Marked mail as spam", icon: <Mail className="h-3 w-3" /> },
      { label: "Mail delivery failed", icon: <Mail className="h-3 w-3" /> },
      { label: "Mail sent", icon: <Mail className="h-3 w-3" /> },
      { label: "Opened Mail", icon: <Mail className="h-3 w-3" /> },
      { label: "Opted in", icon: <Mail className="h-3 w-3" /> },
      { label: "Opted out", icon: <Mail className="h-3 w-3" /> },
      { label: "Viewed page", icon: <Mail className="h-3 w-3" /> },
    ],
    icon: <Mail className="mr-1 h-3 w-3" />,
  },
  {
    category: "Automation Properties",
    options: [
      {
        label: "Automation Email Status",
        icon: <Repeat className="h-3 w-3" />,
      },
    ],
    icon: <Repeat className="mr-1 h-3 w-3" />,
  },
  {
    category: "List Properties",
    options: [{ label: "Contact present", icon: <List className="h-3 w-3" /> }],
    icon: <List className="mr-1 h-3 w-3" />,
  },
];
export function AddFilter({ index, addFilter }: any) {
  const [hoveredOption, setHoveredOption] = React.useState<string | null>(null);
  const [category, setCategory] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const groupIndex = index;

  const onSelect = (
    currentValue: React.SetStateAction<string>,
    category: React.SetStateAction<string>
  ) => {
    setValue(currentValue === value ? "" : currentValue);
    setOpen(false);

    const recentlyUsed = getRecentlyUsed();

    const updatedRecentlyUsed = [...recentlyUsed, currentValue];

    if (updatedRecentlyUsed.length > 5) {
      updatedRecentlyUsed.shift();
    }

    sessionStorage.setItem(
      "recentlyUsedFilters",
      JSON.stringify(updatedRecentlyUsed)
    );

    addFilter(groupIndex, category, currentValue);
  };

  const getRecentlyUsed = () => {
    const stored = sessionStorage.getItem("recentlyUsedFilters");
    return stored ? JSON.parse(stored) : [];
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 justify-start px-2 text-zinc-400"
            aria-expanded={open}
          >
            <span className="text-sm">+ Filter</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0 flex ml-10">
          <Command>
            <CommandInput placeholder="Search filter..." />
            <CommandList>
              <CommandEmpty>No filters found.</CommandEmpty>
              {items.map((group) => (
                <CommandGroup
                  key={group.category}
                  heading={
                    <div className="flex items-center space-x-2">
                      <div className="text-[#F27052]">{group.icon}</div>
                      <div className="font-bold text-[#F27052]">
                        {group.category}
                      </div>
                    </div>
                  }
                >
                  {group.options.map((option) => (
                    <div className="hover:bg[#F27052]">
                      
                    <CommandItem
                      key={option.label}
                      value={option.label}
                      onSelect={(currentValue) => {
                        onSelect(currentValue, group.category);
                      }}
                      className="flex items-center space-x-2 ml-5"
                      onMouseEnter={() => {
                        setHoveredOption(option.label);
                        setCategory(group.category);
                      }}
                      onMouseLeave={() => {
                        setHoveredOption(null);
                        setCategory(null);
                      }}
                    >
                      {option.icon}
                      <span>{option.label}</span>
                    </CommandItem>
                    </div>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
          {open && hoveredOption && (
            <>
              <InfoCard
                hoveredOption={hoveredOption}
                category={category}
                description={
                  explanations[hoveredOption as keyof typeof explanations]
                }
              />
            </>
          )}
        </PopoverContent>
      </Popover>
    </>
  );
}
