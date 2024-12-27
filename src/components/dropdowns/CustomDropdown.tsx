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

interface Options {
  value: string;
  label: string;
}
export function CustomDropdown({
  options,
  defaultValue,
  onChange,
  id = "",
  disabled,
  setFilterValueByOperator,
  fieldIndex,
  groupIndex,
  category,
  filterProperty,
  setFilter,
  config,
}: {
  options: Options[];
  defaultValue: string;
  onChange: any;
  id: string;
  disabled?: boolean;
  setFilterValueByOperator?: any;
  fieldIndex?: number;
  groupIndex?: number;
  category?: string;
  filterProperty?: string;
  setFilter?: any;
  config:any
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue ?? "");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          disabled={disabled}
          aria-expanded={open}
          className="tw-w-fit tw-border-[#F27052] tw-justify-between hover:tw-bg-[#F27052] hover:tw-text-white tw-text-base"
        >
          <span>
            {value
              ? options.find((item) => item.value === value)?.label
              : "Select item..."}
          </span>

          <ChevronsUpDown className="group-hover:tw-text-white" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="tw-w-[300px] tw-p-0">
        <Command>
          <CommandInput placeholder="Search item..." />
          <CommandList>
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {options.map((item) => {
                return (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      if (id === "filterValue.condition.value[0].operator") {
                        const result = setFilterValueByOperator(
                          category,
                          filterProperty,
                          currentValue,
                          groupIndex,
                          fieldIndex,
                          config
                        );
                        setFilter(result);
                      } else {
                        onChange(id, currentValue);
                      }
                      setOpen(false);
                    }}
                  >
                    {item.label}
                    <Check
                      className={cn(
                        "tw-ml-auto",
                        value === item.value ? "tw-opacity-100" : "tw-opacity-0"
                      )}
                    />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
