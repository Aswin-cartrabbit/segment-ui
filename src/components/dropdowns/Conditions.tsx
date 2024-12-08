"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
const Conditions = () => {


    const Conditions = [
        { value: "contains", label: "Contains" },
        { value: "does_not_contain", label: "Does Not Contain" },
        { value: "does_not_exist", label: "Does Not Exist" },
        { value: "ends_with", label: "Ends With" },
        { value: "exists", label: "Exists" },
        { value: "is", label: "Is" },
        { value: "is_not", label: "Is Not" },
        { value: "starts_with", label: "Starts With" },
      ]
      const [open, setOpen] = React.useState(false)
      const [value, setValue] = React.useState(Conditions[0].value)
    
      return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between hover:bg-[#F27052] hover:text-white"
            >
              {value
                ? Conditions.find((operator) => operator.value === value)?.label
                : "Select operator..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search condition" />
              <CommandList>
                <CommandEmpty>No operator found.</CommandEmpty>
                <CommandGroup>
                  {Conditions.map((operator) => (
                    <CommandItem
                      key={operator.value}
                      value={operator.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      {operator.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === operator.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )
}

export default Conditions