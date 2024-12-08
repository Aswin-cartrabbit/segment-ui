import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import Conditions from "@/components/dropdowns/Conditions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

const firstName = ({ index,removeFilter,groupIndex }: any) => {
  return (
    <div className="min-w-fit flex gap-5">
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
        defaultValue={{ value: "firstName", label: <>First Name</> }}
      />
      <Conditions />
      <Input className="w-[100px]" />
      <Button
      onClick={()=>{
        removeFilter(index,groupIndex)
      }}
      className="p-2 bg-white hover:bg-[#F27052] group">
        <Trash2 className="h-4 w-4 text-[#F27052] group-hover:text-white" />
      </Button>
    </div>
  );
};

export default firstName;
