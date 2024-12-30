import * as React from "react";
import { Check, MoreHorizontal } from "lucide-react";
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
import useStore from "@/stores/FilterStore";

export function RawDropdown({
  configItem,
  groupIndex,
  config,
  filterIndex,
  defaultValue,
}: any) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);
  const groupedColumns = configItem?.rawFields ?? [];
  const addFilter = useStore((selector) => selector.addRawFilter);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="tw-w-fit tw-border-[#F27052] tw-justify-between hover:tw-bg-[#F27052] hover:tw-text-white tw-text-base"
        >
          {defaultValue ?? <MoreHorizontal className="tw-h-4 tw-w-4" />}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search column..." />
          <CommandList>
            <CommandEmpty>We couldn’t find any results</CommandEmpty>
            {groupedColumns.map((group) => (
              <CommandGroup key={group.group} heading={group.group}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={() => {
                      setSelected(item.label);
                      addFilter(
                        groupIndex,
                        filterIndex,
                        item.value,
                        configItem.id,
                        config
                      );
                      setOpen(false);
                    }}
                    className="tw-ml-5"
                  >
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
