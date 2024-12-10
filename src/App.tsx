import { useState } from "react";
import GroupCard from "./components/GroupCard";
import { Button } from "./components/ui/button";
import { Plus } from "lucide-react";
import { getValue } from "./helper/common";

function App() {
  const [filter, setFilter] = useState({
    type: "group",
    group: {
      junction: "or",
      members: [
        {
          type: "group",
          group: {
            junction: "and",
            members: [
              {
                type: "group",
                group: {
                  junction: "or",
                  members: [
                    {
                      type: "rule",
                      rule: {
                        resourceType: "contact",
                        filter: {
                          junction: "and",
                          filterType: "junction",
                          filters: [
                            {
                              filterType: "filter",
                              filterValue: {
                                property: "firstName",
                                valueType: "string_list",
                                operator: "eq",
                                value: {
                                  operator: "any",
                                  values: ["John", "Jane"],
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  });

  const setRule = (
    rule: any,
    resourceType: string,
    groupIndex: number,
    filterIndex: number
  ) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
      newFilter.group.members[0].group.members[groupIndex].group.members.find(
        (member: { rule: { resourceType: string } }) =>
          member.rule.resourceType === resourceType
      ).rule.filter.filters[filterIndex] = rule;

      return newFilter;
    });
  };

  console.log(filter);
  const addGroup = (newMember: any) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
      const members = newFilter.group.members[0]?.group?.members;
      if (!Array.isArray(members)) {
        newFilter.group.members[0] = {
          type: "group",
          group: {
            junction: "and",
            members: [],
          },
        };
      }
      newFilter.group.members[0].group.members.push(newMember);
      return newFilter;
    });
  };

  const addFilter = (
    index: number,
    category: string,
    hoveredOption: string
  ) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));

      // Access the group members array
      const groupMembers = newFilter.group.members[0]?.group?.members;

      // Check if the group exists at the provided index
      if (Array.isArray(groupMembers) && groupMembers[index]) {
        const group = groupMembers[index];

        // Loop through the members array of the group
        if (Array.isArray(group.group?.members)) {
          const members = group.group.members;

          // Find the member where the category exists
          const targetMember = members.find((member: any) => {
            // Check if the category matches the resourceType or if it's the right condition
            return member?.rule?.resourceType === getValue(category);
          });
          if (targetMember) {
            targetMember.rule.resourceType = getValue(category);
            const newFilterToAdd = {
              filterType: "filter",
              filterValue: {
                property: getValue(hoveredOption),
                valueType: "string_list",
                operator: "eq",
                value: {
                  operator: "any",
                  values: [],
                },
              },
            };
            if (Array.isArray(targetMember.rule.filter.filters)) {
              targetMember.rule.filter.filters.push(newFilterToAdd);
            } else {
              targetMember.rule.filter.filters = [newFilterToAdd];
            }
          } else {
            const newFilterToAdd = {
              type: "rule",
              rule: {
                resourceType: getValue(category),
                filter: {
                  junction: "and",
                  filterType: "junction",
                  filters: [
                    {
                      filterType: "filter",
                      filterValue: {
                        property: getValue(hoveredOption),
                        valueType: "string_list",
                        operator: "eq",
                        value: {
                          operator: "any",
                          values: [],
                        },
                      },
                    },
                  ],
                },
              },
            };
            members.push(newFilterToAdd);
          }
        }
      }
      return newFilter;
    });
  };

  const updateJunction = (index: number, newJunction: string) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));

      // Ensure members exist before updating
      if (newFilter.group.members[0]?.group?.members) {
        newFilter.group.members[0].group.members[index].group.junction =
          newJunction;
      }

      return newFilter;
    });
  };

  const removeGroup = (indexToRemove: number) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));

      if (Array.isArray(newFilter.group.members[0]?.group?.members)) {
        newFilter.group.members[0].group.members =
          newFilter.group.members[0].group.members.filter(
            (_: any, index: number) => index !== indexToRemove
          );
      }

      return newFilter;
    });
  };
  const cloneGroup = (index: number) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
      const members = newFilter.group.members[0]?.group?.members;

      if (!Array.isArray(members)) {
        newFilter.group.members[0] = {
          type: "group",
          group: {
            junction: "and",
            members: [],
          },
        };
      }

      // Find the group to clone based on the index
      const groupToClone = members[index];

      if (groupToClone) {
        // Clone the group
        const clonedGroup = JSON.parse(JSON.stringify(groupToClone));

        // Insert the cloned group next to the original one (index + 1)
        members.splice(index + 1, 0, clonedGroup);
      }

      return newFilter;
    });
  };
  const removeFilter = (
    indexToRemove: number,
    groupIndex: number,
    filterType: string
  ) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
      if (
        Array.isArray(
          newFilter.group.members[0].group.members[groupIndex]?.group.members
        )
      ) {
        newFilter.group.members[0].group.members[groupIndex].group.members.find(
          (member: { rule: { resourceType: string } }) =>
            member.rule.resourceType === filterType
        ).rule.filter.filters = newFilter.group.members[0].group.members[
          groupIndex
        ].group.members
          .find(
            (member: { rule: { resourceType: string } }) =>
              member.rule.resourceType === filterType
          )
          .rule.filter.filters.filter(
            (_: any, index: number) => index !== indexToRemove
          );
        const members = newFilter.group.members[0].group.members[
          groupIndex
        ].group.members.find(
          (member: { rule: { resourceType: string } }) =>
            member.rule.resourceType === filterType
        ).rule.filter.filters;
        if (members.length === 0) {
          newFilter.group.members[0].group.members[groupIndex].group.members =
            newFilter.group.members[0].group.members[
              groupIndex
            ].group.members.filter(
              (member: { rule: { resourceType: string } }) =>
                member.rule.resourceType !== "contacts"
            );
        }
      }
      return newFilter;
    });
  };

  return (
    <div className="flex h-screen p-5 flex-col">
      {filter.type === "group" ? (
        filter.group.members[0].group.members.map((member, index) => (
          <div key={index}>
            <GroupCard
              member={member}
              index={index}
              removeGroup={removeGroup}
              members={filter.group.members[0].group.members}
              updateJunction={updateJunction}
              cloneGroup={cloneGroup}
              addFilter={addFilter}
              removeFilter={removeFilter}
              setRule={setRule}
            />
          </div>
        ))
      ) : (
        <></>
      )}
      <div className="flex p-2 justify-between">
        <Button
          className="hover:bg-[#F27052] hover:text-white text-[#F27052]"
          variant={"ghost"}
          onClick={() => {
            const data = {
              type: "group",
              group: {
                junction: "and",
                members: [],
              },
            };
            addGroup(data);
          }}
        >
          <span className="text-sm flex gap-1 items-center">
            <Plus /> Add Group{" "}
          </span>
        </Button>
        <Button
          className="hover:bg-[#F27052] hover:text-white text-[#F27052]"
          variant={"ghost"}
        >
          <span className="text-sm flex gap-1 items-center">
            <Plus /> Clear All{" "}
          </span>
        </Button>
      </div>
    </div>
  );
}

export default App;
