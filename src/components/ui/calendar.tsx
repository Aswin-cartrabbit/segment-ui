import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("tw-p-3", className)}
      classNames={{
        months: "tw-flex tw-flex-col sm:tw-flex-row tw-space-y-4 sm:tw-space-x-4 sm:tw-space-y-0",
        month: "tw-space-y-4",
        caption: "tw-flex tw-justify-center tw-pt-1 tw-relative tw-items-center",
        caption_label: "tw-text-sm tw-font-medium",
        nav: "tw-space-x-1 tw-flex tw-items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "tw-h-7 tw-w-7 tw-bg-transparent tw-p-0 tw-opacity-50 hover:tw-opacity-100"
        ),
        nav_button_previous: "tw-absolute tw-left-1",
        nav_button_next: "tw-absolute tw-right-1",
        table: "tw-w-full tw-border-collapse tw-space-y-1",
        head_row: "tw-flex",
        head_cell:
          "tw-text-muted-foreground tw-rounded-md tw-w-8 tw-font-normal tw-text-[0.8rem]",
        row: "tw-flex tw-w-full tw-mt-2",
        cell: cn(
          "tw-relative tw-p-0 tw-text-center hover:tw-bg-[#FFF7ED] tw-text-sm focus-within:tw-relative focus-within:tw-z-20 [&:has([aria-selected])]:tw-bg-accent [&:has([aria-selected].day-outside)]:tw-bg-[#FFF7ED] [&:has([aria-selected].day-range-end)]:tw-rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:tw-rounded-r-md [&:has(>.day-range-start)]:tw-rounded-l-md first:[&:has([aria-selected])]:tw-rounded-l-md last:[&:has([aria-selected])]:tw-rounded-r-md"
            : "[&:has([aria-selected])]:tw-rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "tw-h-8 tw-w-8 tw-p-0 tw-font-normal aria-selected:tw-opacity-100"
        ),
        day_range_start: "day-range-start hover:tw-bg-[#F27052]",
        day_range_end: "day-range-end",
        day_selected:
          "tw-bg-[#F27052] tw-text-primary-foreground  focus:tw-bg-[#F27052] tw-bg-[#F27052] focus:tw-text-primary-foreground",
        day_today: "tw-bg-accent tw-text-accent-foreground",
        day_outside:
          "tw-day-outside tw-text-muted-foreground hover:tw-bg-[#FFF7ED] aria-selected:tw-bg-accent/50 aria-selected:tw-text-muted-foreground",
        day_disabled: "tw-text-muted-foreground tw-opacity-50",
        day_range_middle:
          "aria-selected:tw-bg-[#FFF7ED] aria-selected:tw-text-accent-foreground ",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="tw-h-4 tw-w-4" />,
        IconRight: () => <ChevronRight className="tw-h-4 tw-w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
