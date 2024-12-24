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
  onChange?: (id, selected: Options[]) => void;
  id: string;
};

export function MultiSelect({
  options,
  defaultValue = [],
  onChange,
  id,
}: FancyMultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<Options[]>(defaultValue);
  const [inputValue, setInputValue] = React.useState("");
  const handleUnselect = React.useCallback(
    (Options: Options) => {
      setSelected((prev) => {
        const newSelected = prev.filter((s) => s.value !== Options.value);
        onChange?.(id, newSelected);
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
              onChange?.(id, newSelected);
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
      className="tw-overflow-visible tw-bg-transparent tw-max-w-fit"
    >
      <div className="tw-group tw-rounded-md tw-border tw-border-input tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background focus-within:tw-ring-2 focus-within:tw-ring-ring focus-within:tw-ring-offset-2">
        <div className="tw-flex tw-flex-wrap tw-gap-1">
          {selected.map((Options) => (
            <Badge
              key={Options.value}
              variant="outline"
              className="tw-inline-flex tw-border-none hover:tw-bg-none tw-items-center tw-rounded-md tw-bg-red-50 tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-text-[#F27052] tw-ring-1 tw-ring-inset tw-ring-red-600/10"
            >
              {Options.label}
              <button
                className="tw-ml-1   tw-rounded-full tw-outline-none tw-ring-offset-background focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2"
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
                <X className="tw-h-4 tw-w-4 tw-text-[#F27052] hover:tw-bg-[#F27052] tw-rounded-full hover:tw-text-white tw-transition tw-ease-in-out tw-duration-300" />
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
            className="tw-ml-2 tw-flex-1 tw-bg-transparent tw-outline-none placeholder:tw-text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative  ">
        <CommandList>
          {open && selectables.length > 0 ? (
            <div className="tw-absolute tw-mt-2 tw-top-0 tw-z-10 tw-w-full tw-rounded-md tw-border tw-bg-popover tw-text-popover-foreground tw-shadow-md tw-outline-none tw-animate-in">
              <CommandGroup className="tw-h-full tw-overflow-auto">
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
                        onChange?.(id, newSelected.map((s) => s.value) as any);
                        return newSelected;
                      });
                    }}
                    className={"tw-cursor-pointer"}
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
