"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
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
const ConditionDropdown = ({ defaultValue, onChange }: any) => {
  const operators = [
    { value: "and", label: "and" },
    { value: "or", label: "or" },
  ];
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue ?? "and");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between hover:bg-[#F27052]  hover:text-white mb-5"
        >
          {value
            ? operators.find((operator) => operator.value === value)?.label
            : "Select operator..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search operator..." />
          <CommandList>
            <CommandEmpty>No operator found.</CommandEmpty>
            <CommandGroup>
              {operators.map((operator) => (
                <CommandItem
                  key={operator.value}
                  value={operator.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  {operator.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === operator.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ConditionDropdown;
