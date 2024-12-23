import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn, getNestedValue } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps {
  className?: string;
  defaultValue?: any;
  id: any;
  rule: any;
  onChange?: any;
}

export function DateRangePicker({
  className,
  defaultValue,
  id,
  onChange,
  rule,
}: DateRangePickerProps) {
  console.log(defaultValue, "defaultValue");
  const startDate = defaultValue?.startDate;
  const endDate = defaultValue?.endDate;
  console.log(startDate, endDate);
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: defaultValue.startDate
      ? new Date(defaultValue.startDate)
      : new Date(),
    to: defaultValue.endDate
      ? new Date(defaultValue.endDate)
      : addDays(new Date(), 20),
  });

  React.useEffect(() => {
    if (startDate && endDate) {
      setDate({
        from: new Date(startDate),
        to: new Date(endDate),
      });
    }
  }, [startDate, endDate]);

  const handleDateSelect = (range: DateRange | undefined) => {
    setDate(range);
    if (onChange && range?.from && range?.to) {
      onChange(id.startDate, range.from.getTime());
      onChange(id.endDate, range.to.getTime());
    }
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
