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

const items = [
  {
    value: "aniversary is in the next",
    label: "aniversary is in the next",
  },
  {
    value: "after",
    label: "after",
  },
  {
    value: "before",
    label: "before",
  },
  {
    value: "between",
    label: "between",
  },
  {
    value: "does not exist",
    label: "does not exist",
  },
  {
    value: "exists",
    label: "exists",
  },
  {
    value: "in the last",
    label: "in the last",
  },
  {
    value: "not in the last",
    label: "not in the last",
  },
  {
    value: "on the exact date",
    label: "on the exact date",
  },
];

export function AniversaryConditionsDropdown({ onSelect, defaultValue }: any) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue ?? "exists");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-between"
        >
          {value
            ? items.find((condition) => condition.value === value)?.label
            : " Select Condition..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search ..." />
          <CommandList>
            <CommandEmpty>No condition found.</CommandEmpty>
            <CommandGroup>
              {items.map((condition) => (
                <CommandItem
                  key={condition.value}
                  value={condition.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onSelect(currentValue);
                    setOpen(false);
                  }}
                >
                  {condition.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === condition.value ? "opacity-100" : "opacity-0"
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
