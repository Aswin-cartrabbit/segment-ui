import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { getFilterRow, getKeys, getNestedValue } from "@/lib/utils";
import { CustomDropdown } from "./dropdowns/CustomDropdown";
import { useEffect, useState, useMemo, useCallback } from "react";
import { Separator } from "./ui/separator";

const FilterCard = ({
  index,
  removeFilter,
  groupIndex,
  rule,
  setRule,
  matchedFilter,
  configItem,
  resourceType,
  filterIndex,
  updateFilterRowJunction,
  junction,
  filterItemsLength,
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
    const options = configItem.filters.map((item: any) => ({
      value: item.category,
      label: item.displayName,
    }));
    return options;
  }, [configItem.filters]);

  const getDefaultValue = useMemo(() => {
    // Find matched filter data based on the operator
    const matchedFilterData =
      matchedFilter.data.type === "dynamic"
        ? matchedFilter.data.values.find(
            (item: any) => item.for === rule.filterValue.operator
          )
        : matchedFilter.data.value;

    const areKeysMatching =
      matchedFilterData &&
      Object.keys(matchedFilterData).every(
        (key) => key in rule && matchedFilterData[key] === rule[key]
      );

    const isMatched =
      areKeysMatching &&
      JSON.stringify(rule) === JSON.stringify(matchedFilterData);
    // If matched, return matchedFilter data value; otherwise, return the rule
    const defaultValue = isMatched ? matchedFilter.data.value || {} : rule;

    return defaultValue;
  }, [matchedFilter, rule]);

  const [filterData, setFilterData] = useState(getDefaultValue);

  const onChange = useCallback(
    (path: string, value: any) => {
      let updatedObj = { ...filterData };
      console.log(path, value);
      const updateNestedValue = (
        obj: { [key: string]: any },
        keys: string[],
        value: any
      ) => {
        const [currentKey, ...remainingKeys] = keys;

        if (Array.isArray(obj)) {
          const index = parseInt(currentKey, 10);
          if (!isNaN(index) && index >= 0 && index < obj.length) {
            obj[index] = updateNestedValue(obj[index], remainingKeys, value);
          }
        } else if (remainingKeys.length === 0) {
          obj[currentKey] = value;
        } else {
          if (!obj[currentKey]) {
            obj[currentKey] = isNaN(parseInt(remainingKeys[0], 10)) ? {} : [];
          }
          obj[currentKey] = updateNestedValue(
            obj[currentKey],
            remainingKeys,
            value
          );
        }
        return obj;
      };

      const keys = path
        .split(".")
        .map((key) =>
          key.includes("[") ? key.replace("]", "").split("[") : key
        )
        .flat();

      updateNestedValue(updatedObj, keys, value);

      setFilterData(updatedObj);
    },
    [filterData, setFilterData]
  );
  const keys = getKeys("filterValue.values");

  console.log(getNestedValue(filterData, keys));
  useEffect(() => {
    setRule(filterData, resourceType, groupIndex, index);
  }, [filterData]);

  const filterArray = useMemo(() => {
    console.log(
      rule.filterValue.operator === undefined
        ? rule.filterValue.condition.value[0].operator
        : rule.filterValue.operator
    );
    return [
      ...(matchedFilter.fields || []),
      ...(typeof matchedFilter?.order === "function"
        ? matchedFilter.order(
            rule.filterValue.operator === undefined
              ? rule.filterValue.condition.value[0].operator
              : rule.filterValue.operator
          )
        : []),
    ];
  }, [matchedFilter, rule]);

  const showFilterSelectAt = configItem?.showFilterSelectAt ?? 0;

  return (
    <div key={index} className="min-w-fit flex gap-5 items-center">
      <div className="w-[150px] text-right">
        {index === 0 ? (
          <span className="whitespace-nowrap ">
            {groupIndex === 0 && filterIndex === 0 && index === 0 && (
              <span className="whitespace-nowrap mr-3">All contacts</span>
            )}
            {configItem.id === "contact" ? "whose" : "who"}
          </span>
        ) : (
          <div className="mr-1 mt-0">
            {filterItemsLength === index ? (
              <CustomDropdown
                options={[
                  { value: "and", label: "and" },
                  { value: "or", label: "or" },
                ]}
                defaultValue={junction ?? "and"}
                onChange={(id: string, currentValue: string) => {
                  console.log(id, currentValue);
                  updateFilterRowJunction(
                    groupIndex,
                    resourceType,
                    currentValue
                  );
                }}
                id=""
              />
            ) : (
              <span>{junction}</span>
            )}
          </div>
        )}
      </div>
      <div className="w-full flex flex-wrap gap-5 mb-[8px]">
        {filterArray.map((field: any, fieldIndex: number) => {
          const labels = matchedFilter.labels ?? [];
          const defaultValue = field.defaultValue;
          const keys = getKeys(defaultValue);
          const value = getNestedValue(rule, keys);

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
      </div>

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
