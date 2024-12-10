import { DatePicker } from "@/components/DatePicker";
import { DateRangePicker } from "@/components/DateRangePicker";
import { AniversaryConditionsDropdown } from "@/components/dropdowns/AniversaryConditions";
import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import { DateDropdown } from "@/components/dropdowns/DateDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const BirthDate = ({ index, removeFilter, groupIndex, rule, setRule }: any) => {
  const [filterData, setFilterData] = useState<any>({
    filterType: "filter",
    filterValue: {
      property: "birthdate",
      valueType: "date",
      operator: "exists",
      value: {},
    },
  });

  const handleOperatorChange = (operator: string) => {
    let newFilterData = {
      ...filterData,
      filterValue: {
        ...filterData.filterValue,
        operator,
      },
    };
  
    // Reset values based on operator
    if (["aniversary is in the next", "in the last", "not in the last"].includes(operator)) {
      newFilterData.filterValue.value = {
        input: "",  // Reset input for other operators
        inputType: "",  // Reset inputType
      };
    } else if (["after", "before"].includes(operator)) {
      newFilterData.filterValue.value = {
        date: "",  // Only startdate should be set
      };
    } else if (["between"].includes(operator)) {
      newFilterData.filterValue.value = {
        startDate: "",  // Reset startDate and endDate for the 'between' operator
        endDate: "",
      };
    } else if (["exists", "does not exist"].includes(operator)) {
      newFilterData.filterValue.value = {};  // Reset values for 'exists' and 'does not exist'
    }
  
    setFilterData(newFilterData);  // Update the filterData state
  };
  

  const handleValueChange = (key: string, value: any) => {
    setFilterData((prev: any) => ({
      ...prev,
      filterValue: {
        ...prev.filterValue,
        value: {
          ...prev.filterValue.value,
          [key]: value,
        },
      },
    }));
  };

  useEffect(() => {
    setRule(filterData, "contact", groupIndex, index);
  }, [filterData]);
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
        defaultValue={{ value: "birthdate", label: <>Birthdate</> }}
      />
      <AniversaryConditionsDropdown
        onSelect={handleOperatorChange}
        defaultValue={filterData?.filterValue.operator}
      />
      {getComponent(
        filterData?.filterValue.operator,
        filterData,
        handleValueChange
      )}
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

export default BirthDate;

const getComponent = (
  type: string,
  filterData: any,
  handleValueChange: any
) => {
  switch (type) {
    case "aniversary is in the next":
      return AniversaryIsInTheNext(filterData, handleValueChange);
    case "after":
      return after(filterData, handleValueChange);
    case "before":
      return before(filterData, handleValueChange);
    case "between":
      return between(filterData, handleValueChange);
    case "in the last":
      return inTheLast(filterData, handleValueChange);
    case "not in the last":
      return notInTheLast(filterData, handleValueChange);
    case "on the exact date":
      return onTheExactDay(filterData, handleValueChange);
    default:
      return <></>;
  }
};

const AniversaryIsInTheNext = (filterData: any, handleValueChange: any) => {
  return (
    <>
      <Input
        className="w-[100px]"
        type="number"
        min={1}
        max={1000}
        value={filterData?.filterValue?.value?.input || ""}
        onChange={(e) => handleValueChange("input", e.target.value)}
      />
      <DateDropdown
        defaultValue={filterData?.filterValue?.value?.inputType}
        onSelect={(value: string) => handleValueChange("inputType", value)}
      />
    </>
  );
};

const after = (filterData: any, handleValueChange: any) => {
  return (
    <>
      <DatePicker
        selected={filterData?.filterValue?.value?.startdate}
        onChange={(date: string) => handleValueChange("startdate", date)}
      />
    </>
  );
};

const before = (filterData: any, handleValueChange: any) => {
  return (
    <>
      <DatePicker
        selected={filterData?.filterValue?.value?.enddate}
        onChange={(date: string) => handleValueChange("enddate", date)}
      />
    </>
  );
};

const between = (filterData: any, handleValueChange: any) => {
  return (
    <>
      <DateRangePicker
        startDate={filterData?.filterValue?.value?.startdate}
        endDate={filterData?.filterValue?.value?.enddate}
        onChange={(range: { start: string; end: string }) => {
          handleValueChange("startdate", range.start);
          handleValueChange("enddate", range.end);
        }}
      />
    </>
  );
};

const inTheLast = (filterData: any, handleValueChange: any) => {
  return (
    <>
      <Input
        className="w-[100px]"
        type="number"
        min={1}
        max={1000}
        value={filterData?.filterValue?.value?.input || ""}
        onChange={(e) => handleValueChange("input", e.target.value)}
      />
      <DateDropdown
        defaultValue={filterData?.filterValue?.value?.inputType}
        onSelect={(value: string) => handleValueChange("inputType", value)}
      />
    </>
  );
};

const notInTheLast = (filterData: any, handleValueChange: any) => {
  return (
    <>
      <Input
        className="w-[100px]"
        type="number"
        min={1}
        max={1000}
        value={filterData?.filterValue?.value?.input || ""}
        onChange={(e) => handleValueChange("input", e.target.value)}
      />
      <DateDropdown
        defaultValue={filterData?.filterValue?.value?.inputType}
        onSelect={(value: string) => handleValueChange("inputType", value)}
      />
    </>
  );
};

const onTheExactDay = (filterData: any, handleValueChange: any) => {
  return (
    <>
      <DatePicker
        selected={filterData?.filterValue?.value?.startdate}
        onChange={(date: string) => handleValueChange("startdate", date)}
      />
    </>
  );
};
