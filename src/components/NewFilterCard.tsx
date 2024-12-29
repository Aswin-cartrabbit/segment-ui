import ConditionRow from "./ConditionRow";
import { RawDropdown } from "./dropdowns/RawDropDown";
import RecommendationsList from "./RecomendationList";
import useStore from "@/stores/FilterStore";
import { Separator } from "./ui/separator";
import { CustomDropdown } from "./dropdowns/CustomDropdown";

const NewFilterCard = ({
  item,
  configItem,
  config,
  groupIndex,
  index,
  length,
}) => {
  const addFilter = useStore((selector) => selector.addFilter);
  let firstRawFilterIndex = -1;
  const conditionLength = item.conditions.length;
  item.conditions.map((condition,conditionIndex) => {
    const matchedFilter = configItem.filters.find(
      (item: any) => item.category === condition.filterValue?.property
    );
    if (firstRawFilterIndex === -1 && matchedFilter?.type === "raw") {
      firstRawFilterIndex = conditionIndex;
    }
  });
  console.log(item)
  return (
    <div>
      {item.conditions.map((condition, conditionIndex) => {
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
            <CustomDropdown
              options={[
                { value: "and", label: "and" },
                { value: "or", label: "or" },
              ]}
              defaultValue={"and"}
              onChange={(_id: string, currentValue: string) => {
                // updateFilterRowJunction(
                //   groupIndex,
                //   resourceType,
                //   currentValue
                // );
              }}
              id=""
              config={config}
            />
          </div>
          <br />
        </div>
      )}
    </div>
  );
};

export default NewFilterCard;
