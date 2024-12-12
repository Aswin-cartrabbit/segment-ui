import * as React from "react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Command as CommandPrimitive } from "cmdk";

type items = Record<"value" | "label", string>;
export function MultiSelectDropdown({
  items,
  selected,
  setSelected,
  setItems,
}: {
  items: items[];
  selected: any;
  setSelected: any;
  setItems: any;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  const handleUnselect = React.useCallback(
    (item: items) => {
      setSelected((prev: any[]) => prev.filter((s) => s.value !== item.value));
      setItems((prev: any[]) => [...prev, item]); // Add back to items
    },
    [setItems, setSelected]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev: any) => {
              const newSelected = [...prev];
              const removed = newSelected.pop();
              if (removed) setItems((prev: any[]) => [...prev, removed]);
              return newSelected;
            });
          }
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [setItems, setSelected]
  );

  const handleSelect = React.useCallback(
    (item: items) => {
      setInputValue("");
      setSelected((prev: any[]) => [...prev, item]); // Add to selected
      setItems((prev: any[]) => prev.filter((i) => i.value !== item.value)); // Remove from items
    },
    [setItems, setSelected]
  );

  const selectables = items;

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent w-fit mt-2"
    >
      <div className="group w-[400px] rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((item: items) => (
            <Badge
              key={item.value}
              variant="secondary"
              className="bg-[#FFEDD5] hover:bg-[#F27052] text-[#F6997D] hover:text-white"
            >
              {item.label}
              <button
                className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUnselect(item);
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onClick={() => handleUnselect(item)}
              >
                <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
              </button>
            </Badge>
          ))}

          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select items..."
            className="ml-2 max-w-[400px] flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((item) => (
                  <CommandItem
                    key={item.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => handleSelect(item)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </div>
          ) : null}
        </CommandList>
      </div>
    </Command>
  );
}
