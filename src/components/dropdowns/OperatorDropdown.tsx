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

const operators = [
  {
    value: "lt",
    label: "Less than",
  },
  {
    value: "gt",
    label: "Greater than",
  },
  {
    value: "lte",
    label: "Less than or equal to",
  },
  {
    value: "gte",
    label: "Greater than or equal to",
  },
  {
    value: "eq",
    label: "Equals to",
  },
];

export function OperatorsDropdown() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("lte");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[200px] justify-between"
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
}
