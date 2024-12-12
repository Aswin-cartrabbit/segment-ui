import { DatePicker } from "@/components/DatePicker";
import { DateRangePicker } from "@/components/DateRangePicker";
import { Combobox } from "@/components/dropdowns/ComboBox";
import ConditionDropdown from "@/components/dropdowns/ConditionDropdown";
import { CustomDropdown } from "@/components/dropdowns/CustomDropdown";
import { DateDropdown } from "@/components/dropdowns/DateDropdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addDays } from "date-fns";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

const OrderFulfilled = ({
  index,
  removeFilter,
  groupIndex,
  rule,
  setRule,
}: any) => {
  const [filterData, setFilterData] = useState<any>(rule);

  const handleOperatorChange = (operator: string) => {
    const newFilterValue = {
      ...filterData.filterValue,
      value: getDefaultValueByOperator(operator),
    };
    setFilterData({ ...filterData, filterValue: newFilterValue });
  };

  const handleLeastOrExactChange = (leastOrExact: string) => {
    setFilterData((prev: { filterValue: any }) => ({
      ...prev,
      filterValue: { ...prev.filterValue, leastOrExact },
    }));
  };

  const handleValueChange = (key: string, value: any) => {
    setFilterData((prev: { filterValue: { value: any } }) => ({
      ...prev,
      filterValue: {
        ...prev.filterValue,
        value: { ...prev.filterValue.value, [key]: value },
      },
    }));
  };
  const handleHaveOrNotHave = (data: string) => {
    setFilterData((prev: { filterValue: any }) => ({
      ...prev,
      filterValue: { ...prev.filterValue, operator: data },
    }));
  };

  useEffect(() => {
    setRule(filterData, "order", groupIndex, index);
  }, [filterData]);
  return (
    <div className="min-w-fit flex gap-5 items-center">
      {index === 0 ? (
        <span className="whitespace-nowrap">All contacts whose</span>
      ) : (
        <ConditionDropdown />
      )}

      <CustomDropdown
        items={dropdownOptions.haveOrNotHave}
        defaulValue="have"
        onSelect={handleHaveOrNotHave}
      />

      <Combobox
        key={index}
        type="order"
        defaultValue={{ value: "orderFulfilled", label: <>Order Fulfilled</> }}
      />

      <CustomDropdown
        items={dropdownOptions.leastOrExact}
        defaulValue="at least"
        onSelect={handleLeastOrExactChange}
      />

      <Input
        className="w-[100px]"
        type="number"
        min={1}
        max={1000}
        value={filterData?.filterValue?.value?.count || ""}
        onChange={(e) => handleValueChange("count", e.target.value)}
      />

      <span>time</span>

      <CustomDropdown
        items={dropdownOptions.operators}
        defaulValue={filterData?.filterValue.value.operator}
        onSelect={handleOperatorChange}
      />

      {renderValueComponent(
        filterData?.filterValue.value.operator,
        filterData,
        handleValueChange
      )}

      <Button
        onClick={() => removeFilter(index, groupIndex, "order")}
        className="p-2 bg-white hover:bg-[#F27052] group"
      >
        <Trash2 className="h-4 w-4 text-[#F27052] group-hover:text-white" />
      </Button>
    </div>
  );
};

export default OrderFulfilled;

const dropdownOptions = {
  haveOrNotHave: [
    { value: "have", label: "Have" },
    { value: "do not have", label: "Do not have" },
  ],
  leastOrExact: [
    { value: "at least", label: "at least" },
    { value: "exactly", label: "exactly" },
  ],
  operators: [
    { value: "after", label: "after" },
    { value: "before", label: "before" },
    { value: "between", label: "between" },
    { value: "in the last", label: "in the last" },
    { value: "not in the last", label: "not in the last" },
    { value: "on the exact date", label: "on the exact date" },
    { value: "in total", label: "in total" },
  ],
};

const getDefaultValueByOperator = (operator: string) => {
  switch (operator) {
    case "in the last":
    case "not in the last":
      return { count: "", operator, input: "", inputType: "" };
    case "after":
    case "before":
      return { count: "", operator, date: "" };
    case "between":
      return {
        count: "",
        operator,
        startDate: new Date(),
        endDate: addDays(new Date(), 20),
      };
    case "in total":
      return { operator };
    default:
      return {};
  }
};

const renderValueComponent = (
  operator: string,
  filterData: any,
  handleValueChange: any
) => {
  const valueProps = {
    filterData,
    handleValueChange,
  };

  switch (operator) {
    case "after":
    case "before":
      return <DatePickerComponent {...valueProps} dateKey="date" />;
    case "between":
      return <DateRangePickerComponent {...valueProps} />;
    case "in the last":
    case "not in the last":
      return <InputWithDropdownComponent {...valueProps} />;
    case "on the exact date":
      return <DatePickerComponent {...valueProps} dateKey="startdate" />;
    default:
      return null;
  }
};

const DatePickerComponent = ({
  filterData,
  handleValueChange,
  dateKey,
}: any) => (
  <DatePicker
    selected={filterData?.filterValue?.value?.[dateKey]}
    onChange={(date: string) => handleValueChange(dateKey, date)}
  />
);

const DateRangePickerComponent = ({ filterData, handleValueChange }: any) => (
  <DateRangePicker
    startDate={filterData?.filterValue?.value?.startDate}
    endDate={filterData?.filterValue?.value?.endDate}
    onChange={({ start, end }: { start: string; end: string }) => {
      handleValueChange("startDate", start);
      handleValueChange("endDate", end);
    }}
  />
);

const InputWithDropdownComponent = ({ filterData, handleValueChange }: any) => (
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
