import { JsonViewer } from "@/App";
import { getFilterRow, getKeys, getNestedValue } from "@/lib/utils";
import useStore from "@/stores/FilterStore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CustomDropdown } from "./dropdowns/CustomDropdown";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import RecommendationsList from "./RecomendationList";
import { RawDropdown } from "./dropdowns/RawDropDown";

const ConditionRow = ({
  item,
  configItem,
  config,
  groupIndex,
  index,
  filterCardIndex,
  firstRawFilterIndex,
  length,
  junction,
}: any) => {
  const setFilterValueByOperator = useStore(
    (state) => state.setFilterValueByOperator
  );
  const removeCondition = useStore((state) => state.removeCondition);
  const setRule = useStore((state) => state.setRule);

  const removeFilter = useStore((state) => state.removeFilter);

  const matchedFilter = configItem.filters.find(
    (filter: any) => filter.category === item.filterValue?.property
  );
  const getDefaultValue = useMemo(() => {
    const matchedFilterData =
      matchedFilter.data.type === "dynamic"
        ? matchedFilter.data.values.find(
            (hh: any) => hh.for === item.filterValue.operator
          )
        : matchedFilter.data.value;
    const areKeysMatching =
      matchedFilterData &&
      Object.keys(matchedFilterData).every(
        (key) => key in item && matchedFilterData[key] === item[key]
      );

    const isMatched =
      areKeysMatching &&
      JSON.stringify(item) === JSON.stringify(matchedFilterData);
    // If matched, return matchedFilter data value; otherwise, return the item
    const defaultValue = isMatched ? matchedFilter.data.value || {} : item;

    return defaultValue;
  }, [matchedFilter, item]);
  const [filterData, setFilterData] = useState(getDefaultValue);
  const onChange = useCallback(
    (path: string, value: any) => {
      console.log("hello");
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
  const filterArray = useMemo(() => {
    return [
      ...(matchedFilter.fields || []),
      ...(typeof matchedFilter?.order === "function"
        ? matchedFilter.order(
            item.filterValue.operator === undefined
              ? item.filterValue.condition.value[0].operator
              : item.filterValue.operator
          )
        : []),
    ];
  }, [matchedFilter, item]);
  console.log(matchedFilter);
  useEffect(() => {
    setRule(filterData, configItem.id, groupIndex, filterCardIndex, index);
  }, [filterData]);
  const filterDropdownOptions = useMemo(() => {
    const options = configItem.filters
      .filter((item: any) => item.type === matchedFilter.type)
      .map((item: any) => ({
        value: item.category,
        label: item.displayName,
      }));
    return options;
  }, [configItem.filters]);
  const showFilterSelectAt = matchedFilter?.showFilterSelectAt ?? 0;
  const getMessage = () => {
    if (filterCardIndex === 0 && index === 0) {
      return (
        <span className="tw-whitespace-nowrap tw-mr-3 tw-text-[#F27052]">
          {"All contacts"} {configItem.id === "contact" ? "whose" : "who"}
        </span>
      );
    } else if (matchedFilter.type === "raw" && firstRawFilterIndex === index) {
      return (
        <span className="tw-whitespace-nowrap tw-mr-3 tw-text-[#F27052]">
          where
        </span>
      );
    } else if (index === length - 1 && index != 0) {
      return (
        <CustomDropdown
          options={[
            { value: "and", label: "and" },
            { value: "or", label: "or" },
          ]}
          defaultValue={junction ?? "and"}
          onChange={(_id: string, currentValue: string) => {
            // updateFilterRowJunction(groupIndex, resourceType, currentValue);
          }}
          id=""
          config={config}
        />
      );
    } else if (length !== 1 && index !== 0) {
      return (
        <span className="tw-whitespace-nowrap tw-mr-3 tw-text-[#F27052]">
          {junction}
        </span>
      );
    } else {
      return <></>;
    }
  };
  return (
    <div className="tw-box-border tw-gap-5 tw-items-center tw-flex min-h-[40px] tw-relative w-[1694px] tw-z-0 tw-text-[rgb(33,37,41)] tw-text-[16px] tw-font-light tw-leading-[24px] tw-text-start tw-bg-white tw-mb-[8px]">
      <div className="tw-box-border tw-flex tw-justify-end tw-w-[160px] tw-text-[rgb(30,36,35)] tw-text-[14px] tw-font-normal tw-tracking-[normal] tw-leading-[24px] tw-whitespace-nowrap tw-text-right tw-bg-white tw-pl-[8px] tw-pr-[0px] tw-py-[8px]">
        {getMessage()}
      </div>
      {filterArray.map((field: any, fieldIndex: number) => {
        let value: any = "";
        if (field.type === "dateRange") {
          value = {
            startDate: getNestedValue(
              item,
              getKeys(field.defaultValue.startDate)
            ),
            endDate: getNestedValue(item, getKeys(field.defaultValue.endDate)),
          };
        } else {
          if (field.type === "label") {
          } else {
            const defaultValue = field.defaultValue;
            const keys = getKeys(defaultValue);
            value = getNestedValue(item, keys);
          }
        }
        return (
          <div className="tw-flex tw-items-center tw-gap-5">
            <div>
              {showFilterSelectAt === fieldIndex && (
                <CustomDropdown
                  options={filterDropdownOptions}
                  defaultValue={matchedFilter.category}
                  onChange={(id: any, currentValue: any) => {}}
                  id={""}
                  config
                />
              )}
            </div>
            <div>
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
                item,
                config,
              })}
            </div>
          </div>
        );
      })}
      <Button
        onClick={() => {
          if (index === 0) {
            removeFilter(index, groupIndex, configItem.id);
          } else {
            removeCondition(groupIndex, filterCardIndex, index, configItem.id);
          }
        }}
        className="tw-p-2 tw-bg-white hover:tw-bg-[#F27052] tw-group"
      >
        <Trash2 className="tw-h-4 tw-w-4 tw-text-[#F27052] group-hover:tw-text-white" />
      </Button>
    </div>
  );
};

export default ConditionRow;
