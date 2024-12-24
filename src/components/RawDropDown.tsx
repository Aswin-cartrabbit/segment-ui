import * as React from "react";
import { Check, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
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

// Define all columns grouped logically
const groupedColumns = [
  {
    group: "General",
    items: [
      { value: "OrderDate", label: "Order Date" },
      { value: "CancelledAt", label: "Cancelled At" },
      { value: "TotalAmount", label: "Total Amount" },
      { value: "Currency", label: "Currency" },
      { value: "language", label: "Language" },
      { value: "PaymentMethod", label: "Payment Method" },
      { value: "OrderStatus", label: "Status" },
      { value: "FullfilmentStatus", label: "Fulfillment Status" },
      { value: "OrderStatusUpdatedAt", label: "Status Updated At" },
      { value: "Email", label: "Email" },
      { value: "Phone", label: "Phone" },
      { value: "IpAddress", label: "IP Address" },
    ],
  },
  {
    group: "Shipping Address",
    items: [
      { value: "ShippingAddressLine1", label: "Address Line 1" },
      { value: "ShippingAddressLine2", label: "Address Line 2" },
      { value: "ShippingAddressPostalCode", label: "Postal Code" },
      { value: "ShippingAddressCity", label: "City" },
      { value: "ShippingAddressState", label: "State" },
      { value: "ShippingAddressCountry", label: "Country" },
      { value: "ShippingAddressPhoneNumber", label: "Phone Number" },
    ],
  },
  {
    group: "Billing Address",
    items: [
      { value: "BillingAddressFirstName", label: "First Name" },
      { value: "BillingAddressLastName", label: "Last Name" },
      { value: "BillingAddressLine1", label: "Address Line 1" },
      { value: "BillingAddressLine2", label: "Address Line 2" },
      { value: "BillingAddressPostalCode", label: "Postal Code" },
      { value: "BillingAddressCity", label: "City" },
      { value: "BillingAddressState", label: "State" },
      { value: "BillingAddressCountry", label: "Country" },
      { value: "BillingAddressPhoneNumber", label: "Phone Number" },
    ],
  },
  {
    group: "Order Details",
    items: [
      { value: "OrderSubTotal", label: "Sub Total" },
      { value: "OrderShippingTotal", label: "Shipping Total" },
      { value: "OrderDiscountTotal", label: "Discount Total" },
      { value: "OrderTaxTotal", label: "Tax Total" },
      { value: "BuyerAcceptMarketing", label: "Buyer Accept Marketing" },
      { value: "DiscountCodes", label: "Discount Codes" },
      { value: "MetaData", label: "Meta Data" },
      { value: "CreatedAt", label: "Created At" },
      { value: "UpdatedAt", label: "Updated At" },
    ],
  },
];

export function RawDropdown({ groupIndex, addFilter }: any) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="tw-w-fit tw-justify-between hover:tw-bg-[#F27052] hover:tw-text-white"
        >
          <MoreHorizontal className="tw-h-4 tw-w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search column..." />
          <CommandList>
            <CommandEmpty>We couldn’t find any results</CommandEmpty>
            {groupedColumns.map((group) => (
              <CommandGroup key={group.group} heading={group.group}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={() => {
                      setSelected(item.label);
                      addFilter(0, "orders", item.value);
                      setOpen(false);
                    }}
                    className="tw-ml-5"
                  >
                    {item.label}
                    <Check
                      className={cn(
                        "tw-ml-auto",
                        selected === item.label
                          ? "tw-opacity-100"
                          : "tw-opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
