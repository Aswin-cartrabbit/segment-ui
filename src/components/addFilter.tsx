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

export function AddFilter({ index, addFilter, config }: any) {
  const [hoveredOption, setHoveredOption] = React.useState<string | null>(null);
  const [open, setOpen] = React.useState(false);
  const [filterData, setFilterData] = React.useState({
    category: null,
    icon: "",
    value: "",
    description: "",
  });

  const groupIndex = index;

  const items = React.useMemo(() => {
    return config?.map((item: any) => ({
      category: item.displayName,
      id: item.id,
      options: item.filters.map((field: any) => ({
        label: field.displayName,
        icon: item.icon,
        id: item.id,
        fieldId: field.category,
        description: field.description,
      })),
    }));
  }, [config]);

  const getRecentlyUsed = () => {
    const stored = sessionStorage.getItem("recentlyUsedFilters");
    return stored ? JSON.parse(stored) : [];
  };

  const onSelect = (currentValue: React.SetStateAction<string>, category: React.SetStateAction<string>) => {
    setFilterData((prevData:any) => ({
      ...prevData,
      value: currentValue === filterData.value ? "" : currentValue,
    }));
    setOpen(false);

    const recentlyUsed = getRecentlyUsed();
    const updatedRecentlyUsed = [...recentlyUsed, currentValue];

    if (updatedRecentlyUsed.length > 5) updatedRecentlyUsed.shift();

    sessionStorage.setItem("recentlyUsedFilters", JSON.stringify(updatedRecentlyUsed));
    addFilter(groupIndex, category, currentValue);
  };

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="h-8 justify-start px-2 text-zinc-400" aria-expanded={open}>
            <span className="text-sm">+ Filter</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0 flex ml-10">
          <Command>
            <CommandInput placeholder="Search filter..." />
            <CommandList>
              <CommandEmpty>No filters found.</CommandEmpty>
              {items.map((group:any) => (
                <CommandGroup
                  key={group.category}
                  heading={
                    <div className="flex items-center space-x-2">
                      <div className="text-[#F27052]">{group.icon}</div>
                      <div className="font-bold text-[#F27052]">{group.category}</div>
                    </div>
                  }
                >
                  {group.options.map((option:any) => (
                    <div className="hover:bg-[#F27052]" key={option.label}>
                      <CommandItem
                        value={option.label}
                        onSelect={() => onSelect(hoveredOption??"", group.id)}
                        className="flex items-center space-x-2 ml-5"
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
                    </div>
                  ))}
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
    </>
  );
}
