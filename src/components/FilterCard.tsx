import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { findValueByKey, getFilterRow } from "@/lib/utils";
import { CustomDropdown } from "./dropdowns/CustomDropdown";
import { useEffect, useState } from "react";

const FilterCard = ({
  index,
  removeFilter,
  groupIndex,
  rule,
  setRule,
  matchedFilter,
  configItem,
}: any) => {
  const filterDropdownOptions = configItem.filters.map((item: any) => {
    return {
      value: item.category,
      label: item.displayName,
    };
  });
  const [filterData, setFilterData] = useState(() => {
    const isMatched =
      JSON.stringify(rule) ===
      JSON.stringify(
        matchedFilter.data.type === "dynamic"
          ? matchedFilter.data.values.find(
              (item: any) => item.for === rule.filterValue.operator
            )
          : matchedFilter.data[0].value
      );

    // Return the appropriate initial state
    console.log(rule);
    return isMatched ? matchedFilter.data[0].value || {} : rule;
  });

  const onChange = (key: string, value: any) => {
    let updatedObj = { ...filterData };
    console.log(
      key + "=======================",
      value + "======================="
    );
    const updateNestedValue = (
      obj: { [x: string]: any },
      key: string,
      value: any
    ) => {
      for (let k in obj) {
        if (!obj.hasOwnProperty(k)) continue;
        if (k === key) {
          obj[k] = value;
        } else if (typeof obj[k] === "object" && obj[k] !== null) {
          updateNestedValue(obj[k], key, value);
        }
      }
    };
    updateNestedValue(updatedObj, key, value);
    setFilterData(updatedObj);
  };
  console.log(matchedFilter);
  useEffect(() => {
    setRule(filterData, "contact", groupIndex, index);
  }, [filterData]);
  return (
    <div key={index} className="min-w-fit flex gap-5 items-center mb-5">
      {index === 0 ? (
        <span className="whitespace-nowrap">All contacts whose</span>
      ) : (
        <div className="mr-1">
          <CustomDropdown
            options={[
              { value: "and", label: "and" },
              { value: "or", label: "or" },
            ]}
            defaultValue={"and"}
            onChange={undefined}
            id={""}
          />
        </div>
      )}
      <CustomDropdown
        options={filterDropdownOptions}
        defaultValue={matchedFilter.category}
        onChange={() => {}}
        id={""}
      />
      {matchedFilter.fields.map((field: any, fieldIndex: number) => {
        const labels = matchedFilter.labels ?? [];
        const defaultValue = field.defaultValue;
        const value = findValueByKey(rule, defaultValue);
        return (
          <div key={fieldIndex}>
            {getFilterRow(
              { ...field, onChange, defaultValue: value },
              matchedFilter.order ?? ""
            )}
            {labels.map((item: { index: number; text: string }) => {
              return fieldIndex === item.index ? (
                <span className="dtext-[#F27052]"> {item.text}</span>
              ) : null;
            })}
          </div>
        );
      })}
      <Button
        onClick={() => removeFilter(index, groupIndex, "contact")}
        className="p-2 bg-white hover:bg-[#F27052] group"
      >
        <Trash2 className="h-4 w-4 text-[#F27052] group-hover:text-white" />
      </Button>
    </div>
  );
};

export default FilterCard;
