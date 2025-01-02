import { create } from "zustand";
import _ from "lodash";

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
    conditionIndex: number,
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
    conditionIndex: number
  ) => void;
  addRawFilter: (
    groupIndex: number,
    filterIndex: number,
    condition: string,
    resourceType: string,
    config: any
  ) => void;
  removeCondition: (
    groupIndex: number,
    filterIndex: number,
    conditionIndex: number,
    resourceType: string
  ) => void;
  changeConditionJunction: (
    groupIndex: number,
    filterIndex: number,
    resourceType: string,
    newJunction: string
  ) => void;
  setFilterJunction: (
    groupIndex: number,
    filterIndex: number,
    resourceType: string,
    newJunction: string
  ) => void;
  changeFilter: (
    groupIndex: number,
    filterIndex: number,
    resourceType: string,
    currentValue: string,
    config: any
  ) => void;
  changeCondition: (
    groupIndex: number,
    filterIndex: number,
    conditionIndex: number,
    value: string,
    resourceType: string,
    config: any
  ) => void;
  onChange: (
    groupIndex: number,
    filterIndex: number,
    resourceType: string,
    conditionIndex: number,
    path: string,
    value: any
  ) => void;
}

const useStore = create<StoreState>((set) => ({
  RuleJson: {
    "type": "group",
    "group": {
      "junction": "or",
      "members": [
        {
          "type": "group",
          "group": {
            "junction": "and",
            "members": [
              {
                "type": "group",
                "group": {
                  "junction": "and",
                  "members": [
                    {
                      "type": "rule",
                      "rule": {
                        "resourceType": "orders",
                        "filter": {
                          "junction": "and",
                          "filterType": "junction",
                          "filters": [
                            {
                              "junction": "and",
                              "filterType": "junction",
                              "filters": [
                                {
                                  "filterType": "filter",
                                  "filterValue": {
                                    "property": "orderCanceled",
                                    "params": {
                                      "property": "cartType"
                                    },
                                    "valueType": "object",
                                    "returnType": "have",
                                    "condition": {
                                      "junction": "and",
                                      "value": [
                                        {
                                          "operator": "is",
                                          "value": "cancelled",
                                          "property": "cartType"
                                        },
                                        {
                                          "operator": "in_the_last",
                                          "property": "cancelledAt",
                                          "value": {
                                            "value": 30,
                                            "unit": "days"
                                          }
                                        },
                                        {
                                          "operator": "at_least",
                                          "property": "id",
                                          "value": 1
                                        }
                                      ]
                                    }
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
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
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));

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
            const newFilterToAdd = {
              junction: "and",
              filterType: "junction",
              filters: [data],
            };
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
                  filters: [
                    {
                      junction: "and",
                      filterType: "junction",
                      filters: [data],
                    },
                  ],
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
    console.log(indexToRemove, groupIndex, filterType);
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      const group =
        newFilter.group?.members[0]?.group?.members[groupIndex]?.group?.members;

      if (group) {
        const member = group.find(
          (member: any) => member.rule?.resourceType === filterType
        );
        console.log(member.rule.filter.filters[indexToRemove]);
        if (member && member.rule?.filter?.filters) {
          _.remove(
            member.rule.filter.filters,
            (_: any, index: number) => index === indexToRemove
          );

          if (member.rule.filter.filters.length === 0) {
            _.remove(group, (m: any) => m === member);
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
    conditionIndex: number,
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
      console.log(operatorValue);
      result = filteredData?.value;
      console.log(result);
      set((state) => {
        const newFilter = JSON.parse(JSON.stringify(state.RuleJson));

        newFilter.group.members[0].group.members[groupIndex].group.members.find(
          (m: any) => m.rule.resourceType === category
        ).rule.filter.filters[filterIndex].filters[conditionIndex] = result;
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
    conditionIndex: number
  ) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      const targetMember = newFilter.group?.members?.[0]?.group?.members?.[
        groupIndex
      ]?.group?.members?.find(
        (member: { rule: { resourceType: string } }) =>
          member?.rule?.resourceType === resourceType
      );
      return { RuleJson: newFilter };
    });
  },
  addRawFilter: (
    groupIndex: number,
    filterIndex: number,
    condition: string,
    resourceType: string,
    config: any
  ) => {
    const filter = config.find((f) => f.id === resourceType);
    let data =
      filter?.filters.find((f) => f.category === condition)?.data ?? null;

    // Resolve the correct data value based on the type
    if (data?.type === "dynamic") {
      data = data.values?.[0]?.value ?? null;
    } else if (data?.type === "normal") {
      data = data.value ?? null;
    }

    if (!data) {
      console.error("Data is undefined or null. Cannot add filter.");
      return;
    }

    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      const groupMembers =
        newFilter?.group?.members?.[0]?.group?.members?.[groupIndex]?.group
          ?.members;

      if (!Array.isArray(groupMembers)) {
        return state;
      }
      const targetMember = groupMembers.find(
        (member) => member?.rule?.resourceType === resourceType
      );

      if (!targetMember) {
        return state;
      }
      const targetFilter =
        targetMember?.rule?.filter?.filters?.[filterIndex]?.filters;

      if (!Array.isArray(targetFilter)) {
        return state;
      }

      targetFilter.push(data);

      return { RuleJson: newFilter };
    });
  },

  removeCondition: (
    groupIndex: number,
    filterIndex: number,
    conditionIndex: number,
    resourceType: string
  ) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      const group = newFilter.group?.members[0]?.group?.members[
        groupIndex
      ]?.group?.members.find(
        (member: any) => member?.rule?.resourceType === resourceType
      );
      if (group?.rule?.filter?.filters?.[filterIndex]?.filters) {
        _.remove(
          group.rule.filter.filters[filterIndex].filters,
          (_: any, index: number) => index === conditionIndex
        );
      }

      return { RuleJson: newFilter };
    });
  },
  changeConditionJunction: (
    groupIndex: number,
    filterIndex: number,
    resourceType: string,
    newJunction: string
  ) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      newFilter.group.members[0].group.members[groupIndex].group.members.find(
        (m: any) => m.rule.resourceType === resourceType
      ).rule.filter.filters[filterIndex].junction = newJunction;
      return {
        RuleJson: newFilter,
      };
    });
  },
  setFilterJunction: (
    groupIndex: number,
    filterIndex: number,
    resourceType: string,
    newJunction: string
  ) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      newFilter.group.members[0].group.members[groupIndex].group.members.find(
        (m: any) => m.rule.resourceType === resourceType
      ).rule.filter.junction = newJunction;
      return {
        RuleJson: newFilter,
      };
    });
  },
  changeFilter: (
    groupIndex: number,
    filterIndex: number,
    resourceType: string,
    currentValue: string,
    config: any
  ) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      const filter = config.find((f) => f.id === resourceType);
      let data =
        filter?.filters.find((f) => f.category === currentValue)?.data ?? null;
      if (data?.type === "dynamic") {
        data = data.values[0].value;
      } else if (data?.type === "normal") {
        data = data.value;
      }
      newFilter.group.members[0].group.members[groupIndex].group.members.find(
        (m: any) => m.rule.resourceType === resourceType
      ).rule.filter.filters[filterIndex] = {
        junction: "and",
        filterType: "junction",
        filters: [data],
      };
      return {
        RuleJson: newFilter,
      };
    });
  },
  changeCondition: (
    groupIndex: number,
    filterIndex: number,
    conditionIndex: number,
    value: string,
    resourceType: string,
    config: any
  ) => {
    console.log(
      groupIndex,
      filterIndex,
      conditionIndex,
      value,
      resourceType,
    );
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      const filter = config.find((f) => f.id === resourceType);
      let data =
        filter?.filters.find((f) => f.category === value)?.data ?? null;
      if (data?.type === "dynamic") {
        data = data.values[0].value;
      } else if (data?.type === "normal") {
        data = data.value;
      }

      newFilter.group.members[0].group.members[groupIndex].group.members.find(
        (m: any) => m.rule.resourceType === resourceType
      ).rule.filter.filters[filterIndex].filters[conditionIndex] = data;
      return {
        RuleJson: newFilter,
      };
    });
  },

  onChange: (
    groupIndex: number,
    filterIndex: number,
    resourceType: string,
    conditionIndex: number,
    path: string,
    value: any
  ) => {
    set((state) => {
      const newFilter = JSON.parse(JSON.stringify(state.RuleJson));
      let updatedObj = newFilter.group.members[0].group.members[
        groupIndex
      ].group.members.find((m: any) => m.rule.resourceType === resourceType)
        .rule.filter.filters[filterIndex].filters[conditionIndex];
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
      newFilter.group.members[0].group.members[groupIndex].group.members.find(
        (m: any) => m.rule.resourceType === resourceType
      ).rule.filter.filters[filterIndex].filters[conditionIndex] = updatedObj;
      return {
        RuleJson: newFilter,
      };
    });
  },
}));

export default useStore;
