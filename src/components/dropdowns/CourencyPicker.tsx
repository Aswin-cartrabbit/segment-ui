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
import currency from "../../data/currency.json";
const currencys = currency.map((currency) => {
  return {
    value: currency.code,
    label: currency.code,
  };
});

export function CurrencyPicker({ defaultValue, onChange, id }: any) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue);
    console.log("hello")
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="tw-w-[200px] tw-justify-between"
        >
          {value
            ? currencys.find((currency) => currency.value === value)?.label
            : "Select Lanuage..."}
          <ChevronsUpDown className="tw-opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="tw-w-[200px] tw-p-0">
        <Command>
          <CommandInput placeholder="Search currency..." />
          <CommandList>
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {currencys.map((currency) => (
                <CommandItem
                  key={currency.value}
                  value={currency.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    onChange(id, currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {currency.label}
                  <Check
                    className={cn(
                      "tw-ml-auto",
                      value === currency.value
                        ? "tw-opacity-100"
                        : "tw-opacity-0"
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
