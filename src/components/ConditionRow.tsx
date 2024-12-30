import { getFilterRow, getKeys, getNestedValue } from "@/lib/utils";
import useStore from "@/stores/FilterStore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CustomDropdown } from "./dropdowns/CustomDropdown";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
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
  const changeConditionJunction = useStore(
    (selector) => selector.changeConditionJunction
  );
  const setChange = useStore((state) => state.onChange);

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

  // const [filterData, setFilterData] = useState(getDefaultValue);

  const onChange = useCallback(
    (path: string, value: any) => {
      setChange(groupIndex, filterCardIndex, configItem.id, index, path, value);
    },
    []
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
  // useEffect(() => {
  //   setRule(filterData, configItem.id, groupIndex, filterCardIndex, index);
  // }, [filterData]);
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
            changeConditionJunction(
              groupIndex,
              filterCardIndex,
              configItem.id,
              currentValue
            );
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
  }
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
          <div className="tw-flex tw-items-center tw-gap-3">
            <div>
              {showFilterSelectAt === fieldIndex &&
                (matchedFilter.type === "raw" ? (
                  <RawDropdown
                    configItem={configItem}
                    groupIndex={groupIndex}
                    config={config}
                    filterIndex={filterCardIndex}
                    defaultValue={matchedFilter.displayName}
                  />
                ) : (
                  <CustomDropdown
                    options={filterDropdownOptions}
                    defaultValue={matchedFilter.category}
                    onChange={(id: any, currentValue: any) => {}}
                    id={"changeFilterValue"}
                    category={configItem.id}
                    config={config}
                    groupIndex={groupIndex}
                    filterCardIndex={filterCardIndex}
                  />
                ))}
            </div>
            <div>
              {getFilterRow({
                ...field,
                onChange,
                defaultValue: value,
                setFilterValueByOperator: setFilterValueByOperator,
                fieldIndex: filterCardIndex,
                groupIndex,
                category: configItem.id,
                filterProperty: matchedFilter.category,
                item,
                conditionIndex: index,
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
        variant="outline"
        className="tw-p-2 tw-bg-white hover:tw-bg-[#F27052] tw-group"
      >
        <Trash2 className="tw-h-4 tw-w-4 tw-text-[#F27052] group-hover:tw-text-white" />
      </Button>
    </div>
  );
};

export default ConditionRow;
