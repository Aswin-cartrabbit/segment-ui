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
  console.log(selected);
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
    <div className="tw-group tw-rounded-md tw-border tw-border-input tw-px-3 tw-py-2 tw-text-sm tw-ring-offset-background focus-within:tw-ring-2 focus-within:tw-ring-ring focus-within:tw-ring-offset-2">
      <div className="tw-flex tw-flex-wrap tw-gap-1">
        {selected.map((option) => (
          <Badge
            key={option}
            variant="outline"
            className="tw-inline-flex tw-border-none hover:tw-bg-none tw-items-center tw-rounded-md tw-bg-red-50 tw-px-2 tw-py-1 tw-text-xs tw-font-medium tw-text-[#F27052] tw-ring-1 tw-ring-inset tw-ring-red-600/10"
          >
            {option}
            <button
              className="tw-ml-1 tw-rounded-full tw-outline-none tw-ring-offset-background focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2"
              onClick={() => handleUnselect(option)}
            >
              <X className="tw-h-4 tw-w-4 tw-text-[#F27052] hover:tw-bg-[#F27052] tw-rounded-full hover:tw-text-white tw-transition tw-ease-in-out tw-duration-300" />
            </button>
          </Badge>
        ))}
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter..."
          className="tw-ml-2 tw-flex-1 tw-bg-transparent tw-outline-none placeholder:tw-text-muted-foreground"
        />
      </div>
    </div>
  );
}
