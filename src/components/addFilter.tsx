import * as React from "react";
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
import { CheckCircle } from "lucide-react";

export function AddFilter({ index, addFilter, config }: any) {
  const [hoveredOption, setHoveredOption] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const [filterData, setFilterData] = React.useState({
    category: "",
    icon: "",
    value: "",
    description: "",
  });

  const items = React.useMemo(
    () =>
      config?.map((item: any) => ({
        category: item.displayName,
        id: item.id,
        options: item.filters.map((field: any) => ({
          label: field.displayName,
          icon: field.icon,
          fieldId: field.category,
          description: field.description,
        })),
      })),
    [config]
  );

  const getRecentlyUsed = React.useCallback(() => {
    const stored = sessionStorage.getItem("recentlyUsedFilters");
    return stored ? JSON.parse(stored) : [];
  }, []);

  const onSelect = (
    currentValue: React.SetStateAction<string>,
    category: React.SetStateAction<string>
  ) => {
    setFilterData((prevData: any) => ({
      ...prevData,
      value: currentValue === filterData.value ? "" : currentValue,
    }));
    setOpen(false);

    const recentlyUsed = getRecentlyUsed();
    const updatedRecentlyUsed = [...recentlyUsed, currentValue];

    if (updatedRecentlyUsed.length > 5) updatedRecentlyUsed.shift();

    sessionStorage.setItem(
      "recentlyUsedFilters",
      JSON.stringify(updatedRecentlyUsed)
    );
    addFilter(index, category, currentValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="h-8 justify-start px-2 text-[#F27052] hover:bg-[#F27052] hover:text-white"
        >
          <span className="text-sm">+ Filter</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 flex ml-10">
        <Command>
          <CommandInput placeholder="Search filter..." />
          <CommandList>
            <CommandEmpty>No filters found.</CommandEmpty>
            {items.map((group: any) => (
              <CommandGroup
                key={group.category}
                heading={
                  <div className="flex items-center space-x-2">
                    <div className="font-bold text-[#F27052]">
                      {group.category}
                    </div>
                  </div>
                }
              >
                {group.options.map((option: any) => {
                  console.log(option);
                  return (
                    <CommandItem
                      key={option.label}
                      value={option.label}
                      onSelect={() => onSelect(option.fieldId, group.id)}
                      className="flex items-center space-x-2 ml-5 hover:bg-[#F27052]"
                      onMouseEnter={() => {
                        setHoveredOption(option.fieldId);
                        setFilterData({
                          category: group.category,
                          icon: option.icon,
                          value: option.label,
                          description: option.description,
                        });
                      }}
                      onMouseLeave={() => setHoveredOption(null)}
                    >
                      {option.icon}
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
        {open && hoveredOption && (
          <InfoCard
            hoveredOption={hoveredOption}
            icon={filterData.icon}
            category={filterData.category}
            description={filterData.description}
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
