import { AniversaryConditionsDropdown } from "@/components/dropdowns/AniversaryConditions";
import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import { DateDropdown } from "@/components/dropdowns/DateDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

const DateofAdd = ({ index, removeFilter, groupIndex }: any) => {
  return (
    <div className="min-w-fit flex gap-5 items-center">
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
        defaultValue={{ value: "dateOfAddition", label: <>Date of Addition</> }}
      />
      <span>is</span>
      <AniversaryConditionsDropdown />
      <Input className="w-[100px]" type="number" />
      <DateDropdown />
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

export default DateofAdd;
