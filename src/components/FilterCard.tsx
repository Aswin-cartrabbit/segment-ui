import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { getFilterRow, getKeys, getNestedValue } from "@/lib/utils";
import { CustomDropdown } from "./dropdowns/CustomDropdown";
import { useEffect, useState, useMemo, useCallback } from "react";
import useStore from "@/stores/FilterStore";
import { Separator } from "./ui/separator";

const FilterCard = ({
  index,
  groupIndex,
  rule,
  matchedFilter,
  configItem,
  resourceType,
  filterIndex,
  junction,
  filterItemsLength,
  firstRawFilterIndex,
  config,
  conditionIndex,
}: any) => {
  const removeFilter = useStore((state) => state.removeFilter);
  const setFilterValueByOperator = useStore(
    (state) => state.setFilterValueByOperator
  );
  const updateFilterRowJunction = useStore(
    (state) => state.updateFilterRowJunction
  );
  const setRule = useStore((state) => state.setRule);
  const filterDropdownOptions = useMemo(() => {
    const options = configItem.filters
      .filter((item: any) => item.type === matchedFilter.type)
      .map((item: any) => ({
        value: item.category,
        label: item.displayName,
      }));
    return options;
  }, [configItem.filters]);

  const getDefaultValue = useMemo(() => {
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

  useEffect(() => {
    setRule(filterData, resourceType, groupIndex, index, conditionIndex);
  }, [filterData]);

  const filterArray = useMemo(() => {
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

  const showFilterSelectAt = matchedFilter?.showFilterSelectAt ?? 0;
  const getMessage = () => {
    if (index === 0 && conditionIndex === 0) {
      return (
        <span className="tw-whitespace-nowrap tw-mr-3 tw-text-[#F27052]">
          {"All contacts"} {configItem.id === "contact" ? "whose" : "who"}
        </span>
      );
    } else if (
      matchedFilter.type === "raw" &&
      firstRawFilterIndex === conditionIndex - 1
    ) {
      return (
        <span className="tw-whitespace-nowrap tw-mr-3 tw-text-[#F27052]">
          where
        </span>
      );
    } else if (filterItemsLength === index) {
      // return (
      //   <div className="tw-relative  tw-w-full tw-flex tw-items-center">
      //     <Separator className="tw-w-full" />
      //     <div className="tw-absolute tw-left-[40px] tw-transform -tw-translate-x-1/2 tw-bg-white tw-z-10">
      //       <CustomDropdown
      //         options={[
      //           { value: "and", label: "and" },
      //           { value: "or", label: "or" },
      //         ]}
      //         defaultValue={junction ?? "and"}
      //         onChange={(_id: string, currentValue: string) => {
      //           updateFilterRowJunction(groupIndex, resourceType, currentValue);
      //         }}
      //         id=""
      //         config={config}
      //       />
      //     </div>
      //     <br />
      //   </div>
      // );
    } else {
      return <span className="tw-text-[#F27052]">{junction}</span>;
    }
  };

  return (
    <div className="tw-box-border tw-items-center tw-flex min-h-[40px] tw-relative w-[1694px] tw-z-0 tw-text-[rgb(33,37,41)] tw-text-[16px] tw-font-light tw-leading-[24px] tw-text-start tw-bg-white tw-mb-[8px]">
      <div className="tw-box-border tw-flex tw-justify-end tw-w-[160px] tw-text-[rgb(30,36,35)] tw-text-[14px] tw-font-normal tw-tracking-[normal] tw-leading-[24px] tw-whitespace-nowrap tw-text-start tw-bg-white tw-pl-[8px] tw-pr-[16px] tw-py-[8px]">
        {getMessage()}
      </div>
      {filterArray.map((field: any, fieldIndex: number) => {
        const labels = matchedFilter.labels ?? [];
        let value: any = "";
        if (field.type === "dateRange") {
          value = {
            startDate: getNestedValue(
              rule,
              getKeys(field.defaultValue.startDate)
            ),
            endDate: getNestedValue(rule, getKeys(field.defaultValue.endDate)),
          };
        } else {
          if (field.type === "label") {
          } else {
            const defaultValue = field.defaultValue;
            const keys = getKeys(defaultValue);
            value = getNestedValue(rule, keys);
          }
        }

        if (matchedFilter) {
          if (matchedFilter.data.type === "dynamic") {
            return (
              <>
                {showFilterSelectAt === fieldIndex && (
                  <CustomDropdown
                    options={filterDropdownOptions}
                    defaultValue={matchedFilter.category}
                    onChange={(id: any, currentValue: any) => {}}
                    id={""}
                    config
                  />
                )}

                {getFilterRow({
                  ...field,
                  onChange,
                  defaultValue: value,
                  setFilterValueByOperator: setFilterValueByOperator,
                  fieldIndex: index,
                  groupIndex,
                  category: configItem.id,
                  filterProperty: matchedFilter.category,
                  setFilter: setFilterData,
                  rule,
                  config,
                })}
                {labels.map((item: { index: number; text: string }) => {
                  return fieldIndex === item.index ? (
                    <span className="tw-text-[#F27052]"> {item.text}</span>
                  ) : null;
                })}
              </>
            );
          }
          return (
            <div key={fieldIndex} className="tw-flex tw-items-center tw-gap-3">
              {showFilterSelectAt === fieldIndex && (
                <CustomDropdown
                  options={filterDropdownOptions}
                  defaultValue={matchedFilter.category}
                  onChange={() => {}}
                  id={""}
                  config
                />
              )}
              {getFilterRow({
                ...field,
                onChange,
                defaultValue: value,
                setFilterValueByOperator: setFilterValueByOperator,
                config,
              })}
              {labels.map((item: { index: number; text: string }) => {
                return fieldIndex === item.index ? (
                  <span className="tw-text-[#F27052]"> {item.text}</span>
                ) : null;
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default FilterCard;