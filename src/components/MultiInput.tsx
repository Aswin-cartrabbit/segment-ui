import * as React from "react";
import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type MultiSelectProps = {
  defaultValue?: string[];
  onChange?: (id: string, selected: string[]) => void;
  id: string;
};

export default function MultiInput({
  defaultValue = [],
  onChange,
  id = "",
}: MultiSelectProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [selected, setSelected] = React.useState<string[]>(defaultValue);
  const [inputValue, setInputValue] = React.useState("");
  const handleUnselect = React.useCallback(
    (option: string) => {
      setSelected((prev) => {
        const newSelected = prev.filter((s) => s !== option);
        onChange?.(id, newSelected);
        return newSelected;
      });
    },
    [onChange]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && inputValue.trim() !== "") {
        if (!selected.includes(inputValue)) {
          const newSelected = [...selected, inputValue];
          setSelected(newSelected);
          onChange?.(id, newSelected);
        }
        setInputValue("");
      }
    },
    [inputValue, selected, onChange]
  );

  return (
    <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      <div className="flex flex-wrap gap-1">
        {selected.map((option) => (
          <Badge
            key={option}
            variant="outline"
            className="inline-flex border-none hover:bg-none items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-[#F27052] ring-1 ring-inset ring-red-600/10"
          >
            {option}
            <button
              className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => handleUnselect(option)}
            >
              <X className="h-4 w-4 text-[#F27052] hover:bg-[#F27052] rounded-full hover:text-white transition ease-in-out duration-300" />
            </button>
          </Badge>
        ))}
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter..."
          className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
        />
      </div>
    </div>
  );
}
