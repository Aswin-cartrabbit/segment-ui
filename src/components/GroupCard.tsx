import { Copy, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import ConditionDropdown from "./dropdowns/ConditionDropdown";
import { AddFilter } from "./addFilter";
import FilterCard from "./FilterCard";
import RecommendationsList from "./RecomendationList";

const getFilterComponent = (
  filter: any,
  filterIndex: number,
  removeFilter: any,
  groupIndex: number,
  setRule: any,
  config: []
) => {
  // Extract the resourceType from the rule
  const resourceType = filter.rule.resourceType;
  const configIds = config.map((item: any) => item.id);
  if (configIds.includes(resourceType)) {
    const configItem: any =
      config.find((item: any) => item.id === resourceType) || {};
    const filterItems = filter.rule.filter.filters;
    return (
      <div key={`group-${groupIndex}`}>
        {filterItems.map((rule: any, ruleIndex: number) => {
          const matchedFilter = configItem.filters.find(
            (item: any) => item.category === rule.filterValue?.property
          );
          filterIndex;
          if (matchedFilter) {
            return (
              <>
                <FilterCard
                  key={`rule-${ruleIndex}`}
                  index={ruleIndex}
                  className="filter-item"
                  removeFilter={removeFilter}
                  groupIndex={groupIndex}
                  rule={rule}
                  setRule={setRule}
                  matchedFilter={matchedFilter}
                  configItem={configItem}
                  resourceType={resourceType}
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
}: any) => {
  return (
    <Card
      className={`min-w-fit max-w-1/2 p-5 flex flex-col gap-4 relative  ${
        member.group.junction === "or" && members?.length - 1 !== index
          ? "mb-10"
          : ""
      }`}
    >
      <div className="flex justify-between items-start gap-2">
        <div className="flex flex-col w-full gap-2">
          {member.group.members.map((filter: any, filterIndex: number) => {
            const groupIndex = index;
            const configItem: any =
              config.find(
                (item: any) => item.id === filter.rule.resourceType
              ) || {};
            return (
              <div key={filterIndex}>
                {filterIndex !== 0 && (
                  <div className="w-full">
                    <ConditionDropdown />

                    <br />
                  </div>
                )}
                {getFilterComponent(
                  filter,
                  filterIndex,
                  removeFilter,
                  groupIndex,
                  setRule,
                  config
                )}
                {/* <div className="flex gap-2 ml-20"> */}
                <RecommendationsList
                  addFilter={addFilter}
                  configItem={configItem}
                  key={index}
                  groupIndex={groupIndex}
                />
                {/* </div> */}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => {
              cloneGroup(index);
            }}
            className="p-2 hover:bg-[#F27052] group bg-white text-black hover:text-white"
          >
            <Copy className="h-4 w-4 " />
          </Button>
          <Button
            onClick={() => {
              removeGroup(index);
            }}
            className="p-2 bg-[#F27052] group hover:bg-[#F27052]"
          >
            <Trash2 className="h-4 w-4 text-white" />
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
          className={`max-w-fit p-2 h-[25px] bg-[#F27052] hover:bg-[#F27052] absolute ${
            member.group.junction === "and" ? "bottom-0" : "-bottom-5"
          } left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10`}
        >
          {member.group.junction.toUpperCase()}
        </Button>
      )}
    </Card>
  );
};

export default GroupCard;
