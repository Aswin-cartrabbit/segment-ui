import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerProps {
  selected?: Date;
  onChange?: any;
  id: string;
  defaultValue?: Date;
}

export function DatePicker({ defaultValue, onChange, id }: DatePickerProps) {
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    defaultValue
  );

  const handleDateSelect = (date: Date | undefined) => {
    setInternalDate(date);
    onChange(id, date);
    onChange(date);
  };

  React.useEffect(() => {
    setInternalDate(defaultValue);
  }, [defaultValue]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !internalDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {internalDate ? (
            format(internalDate, "PPP")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={internalDate}
          onSelect={handleDateSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
