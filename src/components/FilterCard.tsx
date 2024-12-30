import ConditionRow from "./ConditionRow";
import { RawDropdown } from "./dropdowns/RawDropDown";
import RecommendationsList from "./RecomendationList";
import useStore from "@/stores/FilterStore";
import { Separator } from "./ui/separator";
import { CustomDropdown } from "./dropdowns/CustomDropdown";

const FilterCard = ({
  item,
  configItem,
  config,
  groupIndex,
  index,
  length,
  junction
}) => {
  const addFilter = useStore((selector) => selector.addFilter);
  const setFilterJunction = useStore((selector) => selector.setFilterJunction);

  let firstRawFilterIndex = -1;
  const conditionLength = item.filters.length;
  item.filters.map((condition, conditionIndex) => {
    const matchedFilter = configItem.filters.find(
      (item: any) => item.category === condition.filterValue?.property
    );
    if (firstRawFilterIndex === -1 && matchedFilter?.type === "raw") {
      firstRawFilterIndex = conditionIndex;
    }
  });
  return (
    <div>
      {item.filters.map((condition, conditionIndex) => {
        return (
          <div key={index}>
            <ConditionRow
              item={condition}
              configItem={configItem}
              config={config}
              groupIndex={groupIndex}
              filterCardIndex={index}
              index={conditionIndex}
              firstRawFilterIndex={firstRawFilterIndex}
              length={conditionLength}
              junction={item.junction}
            />
          </div>
        );
      })}
      <div className="tw-flex tw-mt-3 tw-mb-3 tw-gap-5 tw-ml-24">
        <RecommendationsList
          configItem={configItem}
          key={`${groupIndex}-${index}`}
          groupIndex={groupIndex}
          resourceType={configItem.id}
          config={config}
          filterIndex={index}
          conditions={item.filters}
        />
        <RawDropdown
          groupIndex={groupIndex}
          configItem={configItem}
          filterIndex={index}
          addFilter={addFilter}
          config={config}
        />
      </div>
      {index !== length - 1 && (
        <div className="tw-relative  tw-w-full tw-flex tw-items-center">
          <Separator className="tw-w-full" />
          <div className="tw-absolute tw-left-[60px] tw-transform -tw-translate-x-1/2 tw-bg-white tw-z-10">
            {index !== length - 2 ? (
              <span className="tw-p-[10px] tw-text-[#F27052]">{junction === "and" ? "AND" : "OR"}</span>
            ) : (
              <CustomDropdown
                options={[
                  { value: "and", label: "and" },
                  { value: "or", label: "or" },
                ]}
                defaultValue={junction}
                onChange={(_id: string, currentValue: string) => {
                  setFilterJunction(
                    groupIndex,
                    index,
                    configItem.id,
                    currentValue
                  );
                }}
                id=""
                config={config}
              />
            )}
          </div>
          <br />
        </div>
      )}
    </div>
  );
};

export default FilterCard;
