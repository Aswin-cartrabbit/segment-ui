import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

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

export function Combobox({ type, onSelect, defaultValue }: any) {
  const contactProperties = [
    { value: "firstName", label: <>First Name</> },
    { value: "lastName", label: <>Last Name</> },
    { value: "tag", label: <>Tag</> },
    { value: "birthdate", label: <>Birthdate</> },
    { value: "email", label: <>Email</> },
    { value: "phoneNumber", label: <>Phone number</> },
    { value: "dateOfAddition", label: <>Date of Addition</> },
    { value: "city", label: <>City</> },
    { value: "country", label: <>Country</> },
    { value: "language", label: <>Language</> },
    { value: "state", label: <>State</> },
    { value: "subscription Status", label: <>SubscriptionStatus</> },
  ];
  const orderProperties = [
    {
      value:"orderCanceled",
      label:"Order Canceled"
    },
    {
      value:"orderFulfilled",
      label:"Order Fulfilled"
    },
    {
      value:"orderRefunded",
      label:"Order Refunded"
    },
    {
      value:"paidForOrder",
      label:"Paid For Order"
    },{
      value:"placedOrder",
      label:"Placed Order"
    },
    {
      value:"startedCheckout",
      label:"Started Checkout"
    }
  ];

  const productProperties = [
    {
      value: "nameOfProduct",
      label: "Name of the product",
    },
    {
      value: "idOfProduct",
      label: "ID of the product",
    },
    {
      value: "totalPurchased",
      label: "Total purchased",
    },
  ];

  const abandonedCarts = [
    {
      value: "totalAbandonedCarts",
      label: "Total Abandoned Carts",
    },
    {
      value: "amountInEachAbandonedCart",
      label: "Amount in each abandoned cart",
    },
    {
      value: "abandonedDate",
      label: "Abandoned Date",
    },
    {
      value: "abandonedProductName",
      label: "Abandoned Product Name",
    },
    {
      value: "abandonedProductID",
      label: "Abandoned Product ID",
    },
  ];

  const automationProperties = [
    {
      value: "automationEmailStatus",
      label: "Automation Email Status",
    },
  ];
  const emailCampaignProperties = [
    {
      value: "emailCampaignStatus",
      label: "Email Campaign Status",
    },
    {
      value: "clickedOnMail",
      label: "Clicked on mail",
    },
    {
      value: "markedMailAsSpam",
      label: "Marked mail as spam",
    },
    {
      value: "openedMail",
      label: "Opened mail",
    },
    {
      value: "mailDeliveryFailed",
      label: "Mail delivery failed",
    },
    {
      value: "mailSent",
      label: "Mail sent",
    },
    {
      value: "optedIn",
      label: "Opted in",
    },
    {
      value: "optedOut",
      label: "Opted out",
    },
    {
      value: "ViewedPage",
      label: "Viewed page",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(defaultValue?.value);

  let options: { label: any; value: string }[] = [];

  if (type === "contact") {
    options = contactProperties;
  } else if (type === "order") {
    options = orderProperties;
  } else if (type === "product") {
    options = productProperties;
  } else if (type === "abandonedCart") {
    options = abandonedCarts;
  } else if (type === "automation") {
    options = automationProperties;
  } else if (type === "emailCampaign") {
    options = emailCampaignProperties;
  }
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-fit justify-between hover:bg-[#F27052] hover:text-white"
        >
          {value
            ? options?.find(
                (option: { value: string }) => option.value === value
              )?.label
            : options?.[0]?.label || "Select filter..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search filters..." />
          <CommandList>
            <CommandEmpty>No filters found.</CommandEmpty>
            <CommandGroup>
              {options?.map((option: { value: string; label: string }) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    onSelect(currentValue);
                  }}
                  className="hover:bg-[#F27052] hover:text-white"
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
