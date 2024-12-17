import { Copy, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import ConditionDropdown from "./dropdowns/ConditionDropdown";
import { AddFilter } from "./addFilter";
import FilterCard from "./FilterCard";
import DottedButton from "./DottedButton";

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
    console.log(resourceType);
    return (
      <div key={`group-${groupIndex}`}>
        {filterItems.map((rule: any, ruleIndex: number) => {
          const matchedFilter = configItem.filters.find(
            (item: any) => item.category === rule.filterValue?.property
          );
          if (matchedFilter) {
            return (
              <>
                <FilterCard
                  key={ruleIndex}
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
  return <div>hello</div>;

  // switch (filter.rule.resourceType) {
  //   case "contact":
  //     return (
  //       <div key={filterIndex} className="flex flex-col gap-2">
  //         {filterItems.map((rule: any, ruleIndex: number) => {
  //           switch (rule.filterValue.property) {
  //             case "firstName":
  //               return (
  //                 <FirstName
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "lastName":
  //               return (
  //                 <LastName
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "email":
  //               return (
  //                 <Email
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "language":
  //               return (
  //                 <Language
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "birthdate":
  //               return (
  //                 <BirthDate
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "dateOfAddition":
  //               return (
  //                 <DateofAdd
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "tag":
  //               return (
  //                 <Tag
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "subscriptionStatus":
  //               return (
  //                 <SubscriptionStatus
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "phoneNumber":
  //               return (
  //                 <PhoneNumber
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "city":
  //               return (
  //                 <City
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "state":
  //               return (
  //                 <State
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "country":
  //               return (
  //                 <Country
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             default:
  //               return null;
  //           }
  //         })}
  //       </div>
  //     );
  //   case "order":
  //     return (
  //       <div key={filterIndex} className="flex flex-col gap-2">
  //         {filterItems.map((rule: any, ruleIndex: number) => {
  //           switch (rule.filterValue.property) {
  //             case "orderCanceled":
  //               return (
  //                 <OrderCancled
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "orderFulfilled":
  //               return (
  //                 <OrderFulfilled
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "orderRefunded":
  //               return (
  //                 <OrderRefund
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "paidForOrder":
  //               return (
  //                 <PaidForOrder
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "placedOrder":
  //               return (
  //                 <PlacedOrder
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             case "startedCheckout":
  //               return (
  //                 <StartedCheckout
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                   rule={rule}
  //                   setRule={setRule}
  //                 />
  //               );
  //             default:
  //               return null;
  //           }
  //         })}
  //       </div>
  //     );
  //   case "product":
  //     return (
  //       <div key={filterIndex} className="flex flex-col gap-2">
  //         {filterItems.map((rule: any, ruleIndex: number) => {
  //           switch (rule.filterValue.property) {
  //             case "nameOfProduct":
  //               return (
  //                 <NameOfProduct
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "idOfProduct":
  //               return (
  //                 <ProductID
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "totalPurchased":
  //               return (
  //                 <TotalPurchased
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             default:
  //               return null;
  //           }
  //         })}
  //       </div>
  //     );
  //   case "automation":
  //     return (
  //       <div key={filterIndex} className="flex flex-col gap-2">
  //         {filterItems.map((rule: any, ruleIndex: number) => {
  //           switch (rule.filterValue.property) {
  //             case "automationEmailStatus":
  //               return (
  //                 <AutomationEmailStatus
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             default:
  //               return null;
  //           }
  //         })}
  //       </div>
  //     );
  //   case "emailCampaign":
  //     return (
  //       <div key={filterIndex} className="flex flex-col gap-2">
  //         {filterItems.map((rule: any, ruleIndex: number) => {
  //           switch (rule.filterValue.property) {
  //             case "EmailCampaignStatus":
  //               return (
  //                 // <EmailCampaignStatus
  //                 //   key={ruleIndex}
  //                 //   index={ruleIndex}
  //                 //   className="filter-item"
  //                 //   removeFilter={removeFilter}
  //                 //   groupIndex={groupIndex}
  //                 // />
  //                 <>helllasdasdo</>
  //               );
  //             case "clickedOnMail":
  //               return (
  //                 <EmailClick
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "markedMailAsSpam":
  //               return (
  //                 <EmailClick
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "openedMail":
  //               return (
  //                 <EmailClick
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "mailDeliveryFailed":
  //               return (
  //                 <EmailClick
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "mailSent":
  //               return (
  //                 <EmailClick
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "optedIn":
  //               return (
  //                 <EmailClick
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "optedOut":
  //               return (
  //                 <EmailClick
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "ViewedPage":
  //               return (
  //                 <EmailClick
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             default:
  //               return null;
  //           }
  //         })}
  //       </div>
  //     );

  //   case "abandonedCart":
  //     return (
  //       <div key={filterIndex} className="flex flex-col gap-2">
  //         {filterItems.map((rule: any, ruleIndex: number) => {
  //           switch (rule.filterValue.property) {
  //             case "abandonedDate":
  //               return (
  //                 <AbandonedDate
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "abandonedProductName":
  //               return (
  //                 <AbandonedProductName
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "abandonedProductID":
  //               return (
  //                 <AbandonedProductId
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "abandonedProductID":
  //               return (
  //                 <AbandonedProductId
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "amountInEachAbandonedCart":
  //               return (
  //                 <AmountInEachAbandonedCart
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             case "totalAbandonedCarts":
  //               return (
  //                 <TotalAbandonedCarts
  //                   key={ruleIndex}
  //                   index={ruleIndex}
  //                   className="filter-item"
  //                   removeFilter={removeFilter}
  //                   groupIndex={groupIndex}
  //                 />
  //               );
  //             default:
  //               return null;
  //           }
  //         })}
  //       </div>
  //     );
  //   default:
  //     return null;
  // }
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
                <div className="flex gap-2 ml-20">
                  {configItem.recommendations.map((item: any) => {
                    const displayName = configItem.filters.find(
                      (i: any) => i.category === item
                    ).displayName;
                    return (
                      <DottedButton
                        index={index}
                        addFilter={addFilter}
                        config={config}
                        text={displayName}
                      />
                    );
                  })}
                </div>
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
