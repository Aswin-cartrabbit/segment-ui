import BooleanDropdown from "@/components/dropdowns/Boolean";
import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import { CustomDropdown } from "@/components/dropdowns/CustomDropdown";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const SubscriptionStatus = ({ index, removeFilter, groupIndex }: any) => {
  return (
    <div className="min-w-fit flex items-center gap-5">
      {index === 0 ? (
        <span className="whitespace-nowrap">All contacts whose</span>
      ) : (
        <div className="mr-1">
          <ConditionDropdown />
        </div>
      )}
      <Combobox
        key={index}
        type="contact"
        defaultValue={{
          value: "subscription Status",
          label: <>Subscription Status</>,
        }}
      />
      <BooleanDropdown />
      <CustomDropdown
        items={[
          {
            value: "subscribed",
            label: "Subscribed",
          },
          {
            value: "notSubscribed",
            label: "Not-subscribed",
          },
          {
            value: "unsubscribed",
            label: "Unsubscribed",
          },
        ]}
        defaulValue={"subscribed"}
      />
      <span>to</span>
      
      <CustomDropdown
        items={[
          {
            value: "email",
            label: "Email",
          },
          {
            value: "SMS",
            label: "sms",
          },
          {
            value: "whatsapp",
            label: "Whatsapp",
          },
        ]}

        defaulValue={"email"}
      />
      <span>channel</span>
      <Button
        onClick={() => {
          removeFilter(index, groupIndex);
        }}
        className="p-2 bg-white hover:bg-[#F27052] group"
      >
        <Trash2 className="h-4 w-4 text-[#F27052] group-hover:text-white" />
      </Button>
    </div>
  );
};

export default SubscriptionStatus;
