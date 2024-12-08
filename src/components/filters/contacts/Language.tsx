import BooleanDropdown from "@/components/dropdowns/Boolean";
import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import { LanguagePicker } from "@/components/dropdowns/LanguagePicker";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const Language = ({ index,removeFilter,groupIndex }: any) => {
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
        defaultValue={{ value: "language", label: <>Language</> }}
      />
      <BooleanDropdown />
      <LanguagePicker />
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

export default Language;
