import { Copy, Trash2 } from "lucide-react";
import FilterButton from "./FilterButton";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import LastName from "./filters/contacts/LastName";
import Email from "./filters/contacts/Email";
import FirstName from "./filters/contacts/firstName";
import Language from "./filters/contacts/Language";

// Function to determine the filter component to render
const getFilterComponent = (filter: any, filterIndex: number,removeFilter:any,groupIndex:number) => {
  switch (filter.rule.resourceType) {
    case "contacts":
      const filterItems = filter.rule.filter.filters;
      return (
        <div key={filterIndex} className="flex flex-col gap-2">
          {filterItems.map((rule: any, ruleIndex: number) => {
            switch (rule.filterValue.property) {
              case "firstName":
                return <FirstName key={ruleIndex} index={ruleIndex} className="filter-item" removeFilter={removeFilter} groupIndex={groupIndex} />;
              case "lastName":
                return <LastName key={ruleIndex} index={ruleIndex} className="filter-item" removeFilter={removeFilter} groupIndex={groupIndex} />;
              case "email":
                return <Email key={ruleIndex} index={ruleIndex} className="filter-item" removeFilter={removeFilter} groupIndex={groupIndex} />;
              case "language":
                return <Language key={ruleIndex} index={ruleIndex} className="filter-item" removeFilter={removeFilter} groupIndex={groupIndex} />
              default:
                return null; // If no match, return null or a fallback component
            }
          })}
        </div>
      );
    // Add more cases for other resource types if needed
    default:
      return null; // Or return a fallback component for other resource types
  }
};

const GroupCard = ({
  member,
  removeGroup,
  index,
  members,
  updateJunction,
  cloneGroup,
  addFilter,
  removeFilter
}: any) => {
  return (
    <Card
      className={`min-w-fit max-w-1/2 p-5 flex flex-col gap-4 relative hover:cursor-grab ${
        member.group.junction === "or" && members?.length - 1 !== index
          ? "mb-10"
          : ""
      }`}
      draggable={true}
    >
      <div className="flex justify-between items-start gap-2">
        <div className="flex flex-col gap-2">
          {member.group.members.map((filter: any, filterIndex: number) => {
            // Get filter component by passing filter and filterIndex
            const groupIndex = index
            return getFilterComponent(filter, filterIndex,removeFilter,groupIndex);
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
        <FilterButton index={index} addFilter={addFilter} />
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