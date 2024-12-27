import { create } from "zustand";

interface Filter {
  filterType: string;
  filterValue?: any;
  filters?: Filter[];
  junction?: string;
}

interface Rule {
  resourceType: string;
  filter: Filter;
}

interface RuleGroup {
  type: "group" | "rule";
  group?: {
    junction: string;
    members: RuleGroup[];
  };
  rule?: Rule;
}

interface RuleJson {
  type: "group";
  group: {
    junction: string;
    members: RuleGroup[];
  };
}

interface StoreState {
  RuleJson: RuleJson;
  addFilter: (
    index: number,
    category: string,
    hoveredOption: string,
    config: { id: string; filters: { category: string; data: any }[] }[]
  ) => void;
  addGroup: () => void;
  clearAll: () => void;
  cloneGroup: (index: number) => void;
  removeFilter: (
    indexToRemove: number,
    groupIndex: number,
    filterType: string
  ) => void;
  updateGroupJunction: (index: number, newJunction: string) => void;
  removeGroup: (indexToRemove: number) => void;
  setFilterValueByOperator: (
    category: string,
    filterProperty: string,
    operatorValue: string,
    groupIndex: number,
    filterIndex: number,
    config: any
  ) => void;
  updateFilterRowJunction: (
    groupIndex: string | number,
    resourceType: any,
    value: any
  ) => void;
  setRule: (
    rule: any,
    resourceType: string,
    groupIndex: number,
    filterIndex: number,
    conditionIndex:number
  ) => void;
}

const useStore = create<StoreState>((set) => ({
  RuleJson: {
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
                  junction: "and",
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
                              junction: "and",
                              filterType: "junction",
                              filters: [
                                {
                                  filterType: "filter",
                                  filterValue: {
                                    property: "firstName",
                                    valueType: "string_list",
                                    operator: "contains",
                                    values: [],
                                  },
                                },
                                {
                                  filterType: "filter",
                                  filterValue: {
                                    property: "firstName",
                                    valueType: "string_list",
                                    operator: "is",
                                    value: [],
                                  },
                                },
                              ],
                            },
                            {
                              junction: "and",
                              filterType: "junction",
                              filters: [
                                {
                                  filterType: "filter",
                                  filterValue: {
                                    property: "firstName",
                                    valueType: "string_list",
                                    operator: "contains",
                                    values: [],
                                  },
                                },
                                {
                                  filterType: "filter",
                                  filterValue: {
                                    property: "ImportType",
                                    valueType: "string",
                                    operator: "is",
                                    value: "csv_import",
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    },
                    // {
                    //   type: "rule",
                    //   rule: {
                    //     resourceType: "orders",
                    //     filter: {
                    //       junction: "and",
                    //       filterType: "junction",
                    //       filters: [
                    //         {
                    //           junction: "and",
                    //           filterType: "junction",
                    //           filters: [
                    //             {
                    //               filterType: "filter",
                    //               filterValue: {
                    //                 property: "orderCanceled",
                    //                 params: {
                    //                   property: "cart_type",
                    //                 },
                    //                 valueType: "object",
                    //                 returnType: "have",
                    //                 condition: {
                    //                   junction: "and",
                    //                   value: [
                    //                     {
                    //                       operator: "in_the_last",
                    //                       value: 1,
                    //                       type: "days",
                    //                     },
                    //                     {
                    //                       operator: "at_least",
                    //                       value: 1,
                    //                     },
                    //                   ],
                    //                 },
                    //               },
                    //             },
                    //             {
                    //               filterType: "filter",
                    //               filterValue: {
                    //                 property: "BillingAddressPostalCode",
                    //                 valueType: "string_list",
                    //                 operator: "contains",
                    //                 values: [],
                    //               },
                    //             },
                    //           ],
                    //         },
                    //       ],
                    //     },
                    //   },
                    // },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  addFilter: (index, category, hoveredOption, config) => {
    const filter = config.find((f) => f.id === category);
    let data =
      filter?.filters.find((f) => f.category === hoveredOption)?.data ?? null;
    if (data?.type === "dynamic") {
      data = data.values[0].value;
    } else if (data?.type === "normal") {
      data = data.value;
    }

    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson)); // Clone the current RuleJson

      const groupMembers = newFilter.group.members[0]?.group?.members;

      if (Array.isArray(groupMembers) && groupMembers[index]) {
        const group = groupMembers[index];

        if (Array.isArray(group.group?.members)) {
          const members = group.group.members;

          const targetMember = members.find((member) => {
            return member?.rule?.resourceType === category;
          });

          if (targetMember) {
            targetMember.rule!.resourceType = category;
            const newFilterToAdd = data;

            if (Array.isArray(targetMember.rule!.filter.filters)) {
              targetMember.rule!.filter.filters.push(newFilterToAdd);
            } else {
              targetMember.rule!.filter.filters = [newFilterToAdd];
            }
          } else {
            const newFilterToAdd = {
              type: "rule",
              rule: {
                resourceType: category,
                filter: {
                  junction: "and",
                  filterType: "junction",
                  filters: [data],
                },
              },
            };
            if (category === "contact") {
              members.unshift(newFilterToAdd);
            } else {
              members.push(newFilterToAdd);
            }
          }
        }
      }
      return { RuleJson: newFilter };
    });
  },
  removeFilter: (
    indexToRemove: number,
    groupIndex: number,
    filterType: string
  ) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      const group =
        newFilter.group?.members[0]?.group?.members[groupIndex]?.group?.members;
      if (group) {
        const member = group.find(
          (member: any) => member.rule?.resourceType === filterType
        );
        if (member && member.rule?.filter?.filters) {
          member.rule.filter.filters.splice(indexToRemove, 1);
          if (member.rule.filter.filters.length === 0) {
            const ruleIndex = group.findIndex((m: any) => m === member);
            if (ruleIndex !== -1) {
              group.splice(ruleIndex, 1);
            }
          }
        }
      }
      return { RuleJson: newFilter };
    });
  },
  addGroup: () => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
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
      newFilter.group.members[0].group.members.push({
        type: "group",
        group: {
          junction: "and",
          members: [],
        },
      });
      return { RuleJson: newFilter };
    });
  },
  clearAll: () => {
    set({
      RuleJson: {
        type: "group",
        group: {
          junction: "or",
          members: [
            {
              type: "group",
              group: {
                junction: "and",
                members: [],
              },
            },
          ],
        },
      },
    });
  },
  cloneGroup: (index: number) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
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
      const groupToClone = members[index];
      if (groupToClone) {
        const clonedGroup = JSON.parse(JSON.stringify(groupToClone));
        members.splice(index + 1, 0, clonedGroup);
      }
      return { RuleJson: newFilter };
    });
  },
  updateGroupJunction: (index: number, newJunction: string) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      if (newFilter.group.members[0]?.group?.members) {
        newFilter.group.members[0].group.members[index].group.junction =
          newJunction;
      }
      return { RuleJson: newFilter };
    });
  },
  removeGroup: (indexToRemove: number) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      if (Array.isArray(newFilter.group.members[0]?.group?.members)) {
        newFilter.group.members[0].group.members =
          newFilter.group.members[0].group.members.filter(
            (_: any, index: number) => index !== indexToRemove
          );
      }
      return { RuleJson: newFilter };
    });
  },
  setFilterValueByOperator: (
    category: string,
    filterProperty: string,
    operatorValue: string,
    groupIndex: number,
    filterIndex: number,
    config: any
  ) => {
    let result = {};
    const data: any = config
      .find((f) => f.id === category)
      .filters.find((f: any) => f.category === filterProperty).data;
    if (data.type === "dynamic") {
      const filteredData = data?.values.find(
        (v: any) => v.for === operatorValue
      );
      result = filteredData.value;
      set((state) => {
        const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
        newFilter.group.members[0].group.members[groupIndex].group.members.find(
          (m: any) => m.rule.resourceType === category
        ).rule.filter.filters[filterIndex] = filteredData.value;
        return { RuleJson: newFilter };
      });
      return result;
    }
  },
  updateFilterRowJunction: (
    groupIndex: string | number,
    resourceType: any,
    value: any
  ) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      newFilter.group.members[0].group.members[
        groupIndex
      ].group.members.forEach((member: any) => {
        if (member.rule.resourceType === resourceType) {
          member.rule.filter.junction = value;
        }
      });
      return { RuleJson: newFilter };
    });
  },
  setRule: (
    rule: any,
    resourceType: string,
    groupIndex: number,
    filterIndex: number,
    conditionIndex:number
  ) => {
    set((state) => {
      // Create a deep clone of the previous filter
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      // Safely navigate and find the target member
      const targetMember = newFilter.group?.members?.[0]?.group?.members?.[
        groupIndex
      ]?.group?.members?.find(
        (member: { rule: { resourceType: string } }) =>
          member?.rule?.resourceType === resourceType
      );
      if (
        targetMember?.rule?.filter?.filters &&
        targetMember.rule.filter.filters[filterIndex] !== undefined
      ) {
        targetMember.rule.filter.filters[filterIndex].filters[conditionIndex] = rule;
      }
      return { RuleJson: newFilter };
    });
  },
}));

export default useStore;
