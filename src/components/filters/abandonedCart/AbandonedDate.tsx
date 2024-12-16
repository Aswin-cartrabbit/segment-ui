import { DatePickerWithPresets } from "@/components/DatePickerWithPresets";
import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import { CustomDropdown } from "@/components/dropdowns/CustomDropdown";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const AbandonedDate = ({ index, removeFilter, groupIndex }: any) => {
  return (
    <div className="min-w-fit flex gap-5 items-center">
      {index === 0 ? (
        <span className="whitespace-nowrap">Abandoned Carts</span>
      ) : (
        <div className="mr-1">
          <ConditionDropdown />
        </div>
      )}
      <Combobox
        key={index}
        type="abandonedCart"
        defaultValue={{
          value: "abandonedDate",
          label: <>Abandoned Date</>,
        }}
      />
      <CustomDropdown
        defaultValue="after"
        items={[
          {
            value: "after",
            label: "after",
          },
          {
            value: "before",
            label: "before",
          },
          {
            value: "between",
            label: "between",
          },
          {
            value: "notInLast",
            label: "not in last",
          },
          {
            value: "isInLast",
            label: "is in last",
          },
        ]}
      />
      <DatePickerWithPresets />
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

export default AbandonedDate;
