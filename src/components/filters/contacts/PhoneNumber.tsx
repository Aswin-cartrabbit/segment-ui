import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import Conditions from "@/components/dropdowns/Conditions";
import TagsInput from "@/components/Tag";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState, useEffect } from "react";

const PhonNumber = ({
  index,
  removeFilter,
  groupIndex,
  rule,
  setRule,
}: any) => {
  const [filterData, setFilterData] = useState<any>(rule);

  const handleOperatorChange = (operator: string) => {
    setFilterData((prev: { filterValue: any }) => {
      const updatedData = {
        ...prev,
        filterValue: {
          ...prev.filterValue,
          operator,
        },
      };
      return updatedData;
    });
  };
  const handleNamesChange = (updatedNames: string[]) => {
    setFilterData((prev: { filterValue: any }) => {
      const updatedData = {
        ...prev,
        filterValue: {
          ...prev.filterValue,
          value: {
            ...prev.filterValue.value,
            values: [...updatedNames],
          },
        },
      };
      return updatedData;
    });
  };

  useEffect(() => {
    setRule(filterData, "contact", groupIndex, index);
  }, [filterData]);

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
        defaultValue={{ value: "phoneNumber", label: <>Phone number</> }}
      />
      <Conditions onSelect={handleOperatorChange} />
      {filterData.filterValue.value.values.length > 1 && (
        <div className="flex gap-2">
          <span>any of</span>
        </div>
      )}
      <TagsInput
        data={filterData.filterValue.value.values}
        setData={handleNamesChange}
        type="number"
      />

      <Button
        onClick={() => removeFilter(index, groupIndex, "contact")}
        className="p-2 bg-white hover:bg-[#F27052] group"
      >
        <Trash2 className="h-4 w-4 text-[#F27052] group-hover:text-white" />
      </Button>
    </div>
  );
};

export default PhonNumber;
