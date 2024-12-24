import { Copy, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { AddFilter } from "./addFilter";
import FilterCard from "./FilterCard";
import RecommendationsList from "./RecomendationList";
import { Separator } from "./ui/separator";
import CopyIcon from "@/assets/icons/Copy";
import { RawDropdown } from "./RawDropDown";

const getFilterComponent = (
  filter: any,
  filterIndex: number,
  removeFilter: any,
  groupIndex: number,
  setRule: any,
  config: [],
  updateFilterRowJunction: any,
  setFilterValueByOperator: any
) => {
  // Extract the resourceType from the rule
  const resourceType = filter.rule.resourceType;
  const configIds = config.map((item: any) => item.id);
  if (configIds.includes(resourceType)) {
    const configItem: any =
      config.find((item: any) => item.id === resourceType) || {};
    const filterItems = filter.rule.filter.filters;
    let firstRawFilterIndex = -1;
    return (
      <div key={`group-${groupIndex}`} className="">
        {filterItems.map((rule: any, ruleIndex: number) => {
          const matchedFilter = configItem.filters.find(
            (item: any) => item.category === rule.filterValue?.property
          );
          filterIndex;
          const filterItemsLength = filterItems.length;

          // Check if the matchedFilter.type is "raw" and if it's the first occurrence
          if (firstRawFilterIndex === -1 && matchedFilter?.type === "raw") {
            firstRawFilterIndex = ruleIndex; // Store the first "raw" filter index
          }
          console.log(firstRawFilterIndex);
          if (matchedFilter) {
            return (
              <>
                <FilterCard
                  key={`rule-${ruleIndex}`}
                  index={ruleIndex}
                  className="filter-item"
                  removeFilter={removeFilter}
                  groupIndex={groupIndex}
                  filterIndex={filterIndex}
                  rule={rule}
                  updateFilterRowJunction={updateFilterRowJunction}
                  setRule={setRule}
                  matchedFilter={matchedFilter}
                  configItem={configItem}
                  resourceType={resourceType}
                  junction={filter.rule.filter.junction}
                  filterItemsLength={filterItemsLength - 1}
                  setFilterValueByOperator={setFilterValueByOperator}
                  firstRawFilterIndex={firstRawFilterIndex}
                />
              </>
            );
          }
        })}
      </div>
    );
  }
  return <div></div>;
};

const GroupCard = ({
  member,
  removeGroup,
  index,
  members,
  updateJunction,
  cloneGroup,
  addFilter,
  removeFilter,
  setRule,
  config,
  updateFilterRowJunction,
  setFilterValueByOperator,
}: any) => {
  return (
    <Card
      className={`tw-min-w-fit tw-max-w-1/2 tw-p-5 tw-flex tw-flex-col tw-gap-4 tw-relative  ${
        member.group.junction === "or" && members?.length - 1 !== index
          ? "tw-mb-10"
          : ""
      }`}
    >
      <div className="tw-flex tw-justify-between tw-items-start tw-gap-2">
        <div className="tw-flex tw-flex-col tw-w-full tw-gap-2">
          {member.group.members.map((filter: any, filterIndex: number) => {
            const groupIndex = index;
            const configItem: any =
              config.find(
                (item: any) => item.id === filter.rule.resourceType
              ) || {};
            return (
              <div key={filterIndex}>
                {filterIndex !== 0 && (
                  <div className="tw-w-full tw-flex tw-items-center tw-mb-5">
                    {/* <CustomDropdown
                      options={[
                        {
                          value: "and",
                          label: "and",
                        },
                        {
                          value: "or",
                          label: "or",
                        },
                      ]}
                      onChange={(id: any,value: string) => {
                        id
                        updateFilterJunction(groupIndex, filterIndex, value);
                      }}
                      disabled
                      defaultValue="and"
                      id=""
                      key={filterIndex}
                    />
                    <Separator className="mb- text-[#F27052] bg-[#F27052]" />
                    <br /> */}
                    <Separator className="tw-mb- tw-text-[#F27052] tw-bg-[#F27052]" />
                  </div>
                )}
                {getFilterComponent(
                  filter,
                  filterIndex,
                  removeFilter,
                  groupIndex,
                  setRule,
                  config,
                  updateFilterRowJunction,
                  setFilterValueByOperator
                )}
                <div className="tw-flex tw-mt-3 tw-mb-3 tw-gap-5">
                  <RecommendationsList
                    addFilter={addFilter}
                    configItem={configItem}
                    key={index}
                    groupIndex={groupIndex}
                    resourceType={filter.rule.resourceType}
                  />
                  <RawDropdown addFilter={addFilter} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="tw-flex tw-items-center tw-gap-4">
          <Button
            onClick={() => {
              cloneGroup(index);
            }}
            variant="outline"
            className="tw-p-2 hover:tw-bg-[#F27052] tw-group tw-bg-white tw-text-black hover:tw-text-white"
          >
            {/* <Copy className="tw-h-4 tw-w-4 " /> */}
            <CopyIcon />
          </Button>
          <Button
            onClick={() => {
              removeGroup(index);
            }}
            variant="outline"
            className="tw-p-2 tw-bg-[#F27052] tw-group hover:tw-bg-[#F27052]"
          >
            <Trash2 className="tw-h-4 tw-w-4 tw-text-white" />
          </Button>
        </div>
      </div>
      <div>
        <AddFilter index={index} addFilter={addFilter} config={config} />
      </div>
      {members?.length - 1 !== index && (
        <Button
          onClick={() => {
            updateJunction(
              index,
              member.group.junction === "and" ? "or" : "and"
            );
          }}
          variant="outline"
          className={`tw-max-w-fit tw-text-white hover:tw-text-white tw-p-2 tw-h-[25px] tw-bg-[#F27052] hover:tw-bg-[#F27052] tw-absolute ${
            member.group.junction === "and" ? "tw-bottom-0" : "tw--bottom-5"
          } tw-left-1/2 tw-transform tw--translate-x-1/2 tw-translate-y-1/2 tw-z-10`}
        >
          {member.group.junction.toUpperCase()}
        </Button>
      )}
    </Card>
  );
};

export default GroupCard;
