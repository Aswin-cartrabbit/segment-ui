import BooleanDropdown from "@/components/dropdowns/Boolean";
import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import Conditions from "@/components/dropdowns/Conditions";
import { CustomDropdown } from "@/components/dropdowns/CustomDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";

const AutomationEmailStatus = ({ index, removeFilter, groupIndex }: any) => {
  return (
    <div className="min-w-fit flex gap-5 items-center">
      {index === 0 ? (
        <span className="whitespace-nowrap">Automations where</span>
      ) : (
        <div className="mr-1">
          <ConditionDropdown />
        </div>
      )}
      <Combobox
        key={index}
        type="automation"
        defaultValue={{
          value: "automationEmailStatus",
          label: <>Automation Email Status</>,
        }}
      />
      <span>for</span>
      <CustomDropdown
        defaulValue=""
        items={[
          {
            value: "anyAutomation",
            label: "Any Automation",
          },
        ]}
      />
      <BooleanDropdown />
      <CustomDropdown
        defaulValue="opened"
        items={[
          {
            value: "opened",
            label: "Opened",
          },
          {
            value: "linkClicked",
            label: "Link Clicked",
          },
          {
            value: "unsubscribed",
            label: "Unsubscribed",
          },
          {
            value: "failed",
            label: "Failed",
          },
          {
            value: "deliverd",
            label: "Deliverd",
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

export default AutomationEmailStatus;
