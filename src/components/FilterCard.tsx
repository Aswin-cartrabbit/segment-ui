import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { findValueByKey, getFilterRow } from "@/lib/utils";
import { CustomDropdown } from "./dropdowns/CustomDropdown";
import { useEffect, useState, useMemo, useCallback } from "react";

const FilterCard = ({
  index,
  removeFilter,
  groupIndex,
  rule,
  setRule,
  matchedFilter,
  configItem,
  resourceType,
}: any) => {
  // Use useMemo to memoize the filter options based on configItem
  // const filterDropdownOptions = useMemo(
  //   () =>
  //     configItem.filters.map((item: any) => ({
  //       value: item.category,
  //       label: item.displayName,
  //     })),
  //   [configItem.filters]
  // );

  

  // const getDefaultValue = useMemo(() => {
  //   const matchedFilterData =
  //     matchedFilter.data.type === "dynamic"
  //       ? matchedFilter.data.values.find(
  //           (item: any) => item.for === rule.filterValue.operator
  //         )
  //       : matchedFilter.data.value;

  //   const areKeysMatching =
  //     matchedFilterData &&
  //     Object.keys(matchedFilterData).every(
  //       (key) => key in rule && matchedFilterData[key] === rule[key]
  //     );
  //     console.log("matchedFilterData", areKeysMatching)

  //     const isMatched =
  //     areKeysMatching &&
  //     JSON.stringify(rule) === JSON.stringify(matchedFilterData);

  //   // If matched, return matchedFilter data value; otherwise, return the rule
  //   return isMatched ? matchedFilter.data.value || {} : rule;
  // }, [matchedFilter, rule]);

  const filterDropdownOptions = useMemo(() => {
  console.log("filterDropdownOptions - configItem.filters:", configItem.filters);
  
  const options = configItem.filters.map((item: any) => ({
    value: item.category,
    label: item.displayName,
  }));

  console.log("filterDropdownOptions - result:", options);
  return options;
}, [configItem.filters]);

const getDefaultValue = useMemo(() => {
  console.log("getDefaultValue - matchedFilter.data:", matchedFilter.data);
  
  // Find matched filter data based on the operator
  const matchedFilterData =
    matchedFilter.data.type === "dynamic"
      ? matchedFilter.data.values.find(
          (item: any) => item.for === rule.filterValue.operator
        )
      : matchedFilter.data.value;

  console.log("getDefaultValue - matchedFilterData before key comparison:", matchedFilterData);

  const areKeysMatching =
    matchedFilterData &&
    Object.keys(matchedFilterData).every(
      (key) => key in rule && matchedFilterData[key] === rule[key]
    );
  console.log("getDefaultValue - areKeysMatching:", areKeysMatching);

  const isMatched =
    areKeysMatching &&
    JSON.stringify(rule) === JSON.stringify(matchedFilterData);
  console.log("getDefaultValue - isMatched:", isMatched);

  // If matched, return matchedFilter data value; otherwise, return the rule
  const defaultValue = isMatched ? matchedFilter.data.value || {} : rule;
  console.log("getDefaultValue - final defaultValue:", defaultValue);
  
  return defaultValue;
}, [matchedFilter, rule]);


  const [filterData, setFilterData] = useState(getDefaultValue);

  const onChange = useCallback(
    (key: string, value: any) => {
      let updatedObj = { ...filterData };

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
    },
    [filterData]
  );

  useEffect(() => {
    setRule(filterData, resourceType, groupIndex, index);
  }, [filterData]);

  const filterArray = useMemo(() => {
    return [
      ...(matchedFilter.fields || []),
      ...(typeof matchedFilter?.order === "function"
        ? matchedFilter.order(rule.filterValue.operator)
        : []),
    ];
  }, [matchedFilter, rule]);

  const showFilterSelectAt = configItem?.showFilterSelectAt ?? 0;

  return (
    <div key={index} className="min-w-fit flex gap-5 items-center mb-5">
      {index === 0 ? (
        <span className="whitespace-nowrap">
          {configItem.id === "contact" ? "All contacts whose" : "who"}
        </span>
      ) : (
        <div className="mr-1 mt-4">
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

      {filterArray.map((field: any, fieldIndex: number) => {
        const labels = matchedFilter.labels ?? [];
        const defaultValue = field.defaultValue;
        const value = findValueByKey(rule, defaultValue);

        if (matchedFilter) {
          if (matchedFilter.data.type === "dynamic") {
            return (
              <>
                {showFilterSelectAt === fieldIndex && (
                  <CustomDropdown
                    options={filterDropdownOptions}
                    defaultValue={matchedFilter.category}
                    onChange={() => {}}
                    id={""}
                  />
                )}
                {getFilterRow({ ...field, onChange, defaultValue: value })}
              </>
            );
          }
          return (
            <div key={fieldIndex} className="flex items-center gap-3">
              {showFilterSelectAt === fieldIndex && (
                <CustomDropdown
                  options={filterDropdownOptions}
                  defaultValue={matchedFilter.category}
                  onChange={() => {}}
                  id={""}
                />
              )}
              {getFilterRow({ ...field, onChange, defaultValue: value })}
              {labels.map((item: { index: number; text: string }) => {
                return fieldIndex === item.index ? (
                  <span className="text-[#F27052]"> {item.text}</span>
                ) : null;
              })}
            </div>
          );
        }
      })}

      <Button
        onClick={() => removeFilter(index, groupIndex, configItem.id)}
        className="p-2 bg-white hover:bg-[#F27052] group"
      >
        <Trash2 className="h-4 w-4 text-[#F27052] group-hover:text-white" />
      </Button>
    </div>
  );
};

export default FilterCard;
