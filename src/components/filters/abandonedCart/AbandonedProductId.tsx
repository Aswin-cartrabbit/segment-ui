import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import Conditions from "@/components/dropdowns/Conditions";
import TagsInput from "@/components/MultiInput";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const AbandonedProductId = ({ index, removeFilter, groupIndex }: any) => {
  const [names, setNames] = useState([]);

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
        type="abandonedCart"
        defaultValue={{ value: "abandonedProductID", label: <>Abandoned Product ID</> }}
      />
      <Conditions />
      {names.length > 1 && (
        <div className="flex gap-2">
          <span>any of</span>
        </div>
      )}
      <TagsInput data={names} setData={setNames} />
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

export default AbandonedProductId;