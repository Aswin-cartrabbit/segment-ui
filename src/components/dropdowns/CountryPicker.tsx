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

import countries from "../../data/countries.json";

export default function CountryPicker({onSelect}:any) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const country = countries.map((country) => ({
    value: country.name,
    label: (
      <div className="flex items-end gap-2">
        <span>{country.emoji}</span>
        <span>{country.name}</span>
      </div>
    ),
  }));

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
            ? country.find((country) => country.value === value)?.label
            : "Select Country..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {country.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  className="min-w-[500px]"
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onSelect(currentValue);
                    setOpen(false);
                  }}
                >
                  <span className="text-nowrap">{country.label}</span>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === country.value ? "opacity-100" : "opacity-0"
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
