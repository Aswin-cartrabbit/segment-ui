import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import { OperatorsDropdown } from "@/components/dropdowns/OperatorDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

const TotalPurchased = ({ index, removeFilter, groupIndex }: any) => {
  return (
    <div className="min-w-fit flex gap-5 items-center">
      {index === 0 ? (
        <span className="whitespace-nowrap">products where</span>
      ) : (
        <div className="mr-1">
          <ConditionDropdown />
        </div>
      )}
      <Combobox
        key={index}
        type="product"
        defaultValue={{
          value: "totalPurchased",
          label: <>Total purchased</>,
        }}
      />
      <OperatorsDropdown />
      <Input className="w-[100px]" type="number" min={1} />
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

export default TotalPurchased;
