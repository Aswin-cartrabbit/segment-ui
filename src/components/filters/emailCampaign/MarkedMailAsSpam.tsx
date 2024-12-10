import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import Conditions from "@/components/dropdowns/Conditions";
import { CustomDropdown } from "@/components/dropdowns/CustomDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

const MarkedMailAsSpam = ({ index, removeFilter, groupIndex }: any) => {
  return (
    <div className="min-w-fit flex gap-5 items-center">
      {index === 0 ? (
        <span className="whitespace-nowrap">Who</span>
      ) : (
        <div className="mr-1">
          <ConditionDropdown />
        </div>
      )}
      <CustomDropdown
        items={[
          {
            value: "have",
            label: "Have",
          },
          {
            value: "haveNot",
            label: "Have Not",
          },
        ]}
        defaulValue={"have"}
      />
      <Combobox
        key={index}
        type="emailCampaign"
        defaultValue={{ value: "markedMailAsSpam", label: <>Marked mail as spam</> }}
      />
      <Conditions />
      <CustomDropdown
        items={[
          {
            value: "atLeast",
            label: "at least",
          },
          {
            value: "exactly",
            label: "exactly",
          },
        ]}
        defaulValue={"atLeast"}
      />
      <Input type="number" className="w-[100px]" />
      <span>times</span>
      <CustomDropdown
        defaulValue="after"
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

export default MarkedMailAsSpam