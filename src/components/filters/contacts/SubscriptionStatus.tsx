import BooleanDropdown from "@/components/dropdowns/Boolean";
import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import { CustomDropdown } from "@/components/dropdowns/CustomDropdown";
import { MultiSelectDropdown } from "@/components/MultiSelectDropdown";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

type Items = Record<"value" | "label", string>;

const SubscriptionStatus = ({
  index,
  removeFilter,
  groupIndex,
  rule,
  setRule,
}: {
  index: number;
  removeFilter: (index: number, groupIndex: number) => void;
  groupIndex: number;
  rule:any;
  setRule: any;
}) => {
  const [filterData, setFilterData] = useState<any>(rule);

  const [selected, setSelected] = useState<Items[]>([]);
  const [items, setItems] = useState<Items[]>([
    { value: "email", label: "Email" },
    { value: "SMS", label: "SMS" },
    { value: "whatsapp", label: "Whatsapp" },
  ]);

  const handleBooleanChange = (value: string) => {
    setFilterData((prev: any) => ({
      ...prev,
      filterValue: {
        ...prev.filterValue,
        operator: value,
      },
    }));
  };

  const handleSubscriptionChange = (value: string) => {
    setFilterData((prev: any) => ({
      ...prev,
      filterValue: {
        ...prev.filterValue,
        value: {
          ...prev.filterValue.value,
          status: value,
        },
      },
    }));
  };

  const handleChannelChange = () => {
    setFilterData((prev: any) => ({
      ...prev,
      filterValue: {
        ...prev.filterValue,
        value: {
          ...prev.filterValue.value,
          values: selected.map((item) => item.value),
        },
      },
    }));
    setSelected(selected);
  };
  useEffect(() => {
    setRule(filterData, "contact", groupIndex, index);
  }, [ filterData]);
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

      <BooleanDropdown onSelect={handleBooleanChange} />

      <CustomDropdown
        items={[
          { value: "subscribed", label: "Subscribed" },
          { value: "notSubscribed", label: "Not Subscribed" },
          { value: "unsubscribed", label: "Unsubscribed" },
        ]}
        onSelect={handleSubscriptionChange}
        defaulValue={"subscribed"}
      />

      <span>to</span>

      <MultiSelectDropdown
        items={items}
        selected={selected}
        setSelected={setSelected}
        setItems={setItems}
      />

      <span>channel</span>

      <Button
        onClick={() => removeFilter(index, groupIndex)}
        className="p-2 bg-white hover:bg-[#F27052] group"
      >
        <Trash2 className="h-4 w-4 text-[#F27052] group-hover:text-white" />
      </Button>
    </div>
  );
};

export default SubscriptionStatus;
