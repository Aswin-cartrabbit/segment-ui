import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { getFilterRow, getKeys, getNestedValue } from "@/lib/utils";
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
  filterIndex,
  updateFilterRowJunction,
  junction,
  filterItemsLength,
  setFilterValueByOperator,
  firstRawFilterIndex,
}: any) => {
  console.log(matchedFilter.type, "matchedFilter");
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
      console.log(path, value);
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
    setRule(filterData, resourceType, groupIndex, index);
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

  return (
    <div
      key={index}
      className="tw-box-border tw-gap-5 tw-items-center tw-flex tw-min-h-[40px] tw-relative w-[1679px] tw-z-0 tw-text-[rgb(33,37,41)] tw-text-[16px] tw-font-light tw-leading-[24px] tw-text-start tw-bg-white tw-mb-[8px]"
    >
      <div className="tw-w-[150px] tw-text-right">
        {index === 0 ? (
          <span className="tw-whitespace-nowrap tw-text-[#F27052] ">
            {groupIndex === 0 && filterIndex === 0 && index === 0 && (
              <span className="tw-whitespace-nowrap tw-mr-3 tw-text-[#F27052]">All contacts</span>
            )}
            {configItem.id === "contact" ? "whose" : "who"}
          </span>
        ) : (
          <div className="tw-mr-1 tw-mb-2 tw-mt-0 tw-text-[#F27052]">
            {filterItemsLength === index ? (
              matchedFilter.type === "raw" && firstRawFilterIndex === index ? (
                "where"
              ) : (
                <CustomDropdown
                  options={[
                    { value: "and", label: "and" },
                    { value: "or", label: "or" },
                  ]}
                  defaultValue={junction ?? "and"}
                  onChange={(_id: string, currentValue: string) => {
                    updateFilterRowJunction(
                      groupIndex,
                      resourceType,
                      currentValue
                    );
                  }}
                  id=""
                />
              )
            ) : (
              <span className="tw-text-[#F27052]">
                {matchedFilter.type === "raw" && firstRawFilterIndex === index
                  ? "where"
                  : junction}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="tw-w-full tw-flex tw-flex-wrap tw-justify-start tw-items-center tw-gap-5 tw-mb-[8px] tw-mr-0">
        {filterArray.map((field: any, fieldIndex: number) => {
          const labels = matchedFilter.labels ?? [];
          let value: any = "";
          if (field.type === "dateRange") {
            value = {
              startDate: getNestedValue(
                rule,
                getKeys(field.defaultValue.startDate)
              ),

              endDate: getNestedValue(
                rule,
                getKeys(field.defaultValue.endDate)
              ),
            };
            console.log(value);
          } else {
            console.log("field", field);
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
              <div
                key={fieldIndex}
                className="tw-flex tw-items-center tw-gap-3"
              >
                {showFilterSelectAt === fieldIndex && (
                  <CustomDropdown
                    options={filterDropdownOptions}
                    defaultValue={matchedFilter.category}
                    onChange={() => {}}
                    id={""}
                  />
                )}
                {getFilterRow({
                  ...field,
                  onChange,
                  defaultValue: value,
                  setFilterValueByOperator: setFilterValueByOperator,
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
        <Button
          onClick={() => removeFilter(index, groupIndex, configItem.id)}
          className="tw-p-2 tw-bg-white hover:tw-bg-[#F27052] tw-group"
        >
          <Trash2 className="tw-h-4 tw-w-4 tw-text-[#F27052] group-hover:tw-text-white" />
        </Button>
      </div>
    </div>
  );
};

export default FilterCard;
