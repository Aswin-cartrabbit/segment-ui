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

type Options = Record<"value" | "label", string>;

type FancyMultiSelectProps = {
  options: Options[];
  defaultValue?: Options[];
  onChange?: (selected: Options[]) => void;
};

export function MultiSelect({
  options,
  defaultValue = [],
  onChange,
}: FancyMultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Options[]>(defaultValue);
  const [inputValue, setInputValue] = React.useState("");
  const handleUnselect = React.useCallback(
    (Options: Options) => {
      setSelected((prev) => {
        const newSelected = prev.filter((s) => s.value !== Options.value);
        onChange?.(newSelected);
        return newSelected;
      });
    },
    [onChange]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === "Delete" || e.key === "Backspace") {
          if (input.value === "") {
            setSelected((prev) => {
              const newSelected = [...prev];
              newSelected.pop();
              onChange?.(newSelected);
              return newSelected;
            });
          }
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    },
    [onChange]
  );

  const selectables = options.filter(
    (Options) => !selected.some((s) => s.value === Options.value)
  );

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent max-w-fit"
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((Options) => (
            <Badge
              key={Options.value}
              variant="outline"
              className="inline-flex border-none hover:bg-none items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-[#F27052] ring-1 ring-inset ring-red-600/10"
            >
              {Options.label}
              <button
                className="ml-1   rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleUnselect(Options);
                  }
                }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              onClick={() => handleUnselect(Options)}
              >
                <X className="h-4 w-4 text-[#F27052] hover:bg-[#F27052] rounded-full hover:text-white transition ease-in-out duration-300" />
              </button>
            </Badge>
          ))}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select Optionss..."
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative  ">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="absolute mt-2 top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((Options) => (
                  <CommandItem
                    key={Options.value}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    onSelect={() => {
                      setInputValue("");
                      setSelected((prev) => {
                        const newSelected = [...prev, Options];
                        onChange?.(newSelected);
                        return newSelected;
                      });
                    }}
                    className={"cursor-pointer"}
                  >
                    {Options.label}
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
