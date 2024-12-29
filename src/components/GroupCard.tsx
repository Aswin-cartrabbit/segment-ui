import { Copy, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { AddFilter } from "./addFilter";
import FilterCard from "./FilterCard";
import RecommendationsList from "./RecomendationList";
import { Separator } from "./ui/separator";
import CopyIcon from "@/assets/icons/Copy";
import { RawDropdown } from "./dropdowns/RawDropDown";
import useStore from "@/stores/FilterStore";
import { JsonViewer } from "@/App";
import { CustomDropdown } from "./dropdowns/CustomDropdown";
import { useMemo } from "react";
import NewFilterCard from "./NewFilterCard";

const getFilterComponent = (
  filter: any,
  filterIndex: number,
  groupIndex: number,
  config: []
) => {
  const resourceType = filter.rule.resourceType;
  const configIds = config.map((item: any) => item.id);
  if (configIds.includes(resourceType)) {
    const configItem: any =
      config.find((item: any) => item.id === resourceType) || {};
    const filterItems = filter.rule.filter.filters;
    let firstRawFilterIndex = -1;
    return (
      <div key={`group-${groupIndex}`} className="">
        {filterItems?.map((item: any, index: number) => {
          return (
            // <div className="tw-box-border tw-relative tw-text-[rgb(33,37,41)] tw-text-[16px] tw-font-light tw-leading-[24px] tw-text-start tw-bg-white tw-mt-[3px] tw-pt-[28px] tw-pb-[24px] tw-px-0 tw-border-t-[rgb(231,231,231)]">
            <NewFilterCard
              config={config}
              groupIndex={groupIndex}
              item={item}
              configItem={configItem}
              index={index}
              length={filterItems.length}
            />

            // </div>
          );
        })}
      </div>
    );
  }
  return <div></div>;
};

const GroupCard = ({ member, index, members, config }: any) => {
  const updateGroupJunction = useStore((state) => state.updateGroupJunction);
  const removeGroup = useStore((state) => state.removeGroup);
  const cloneGroup = useStore((state) => state.cloneGroup);
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
                {getFilterComponent(filter, filterIndex, groupIndex, config)}
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
        <AddFilter index={index} config={config} />
      </div>
      {members?.length - 1 !== index && (
        <Button
          onClick={() => {
            updateGroupJunction(
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
