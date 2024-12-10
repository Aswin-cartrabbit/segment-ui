import { Copy, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import LastName from "./filters/contacts/LastName";
import Email from "./filters/contacts/Email";
import FirstName from "./filters/contacts/firstName";
import Language from "./filters/contacts/Language";
import BirthDate from "./filters/contacts/BirthDate";
import DateofAdd from "./filters/contacts/DateOfAdd";
import Tag from "./filters/contacts/Tag";
import AmountSpent from "./filters/orders/AmountSpent";
import ConditionDropdown from "./dropdowns/ConditionDropdown";
import { AddFilter } from "./addFilter";
import NoOfOrders from "./filters/orders/NoOfOrders";
import OrderStatus from "./filters/orders/OrderStatus";
import AmountSpentPerOrder from "./filters/orders/AmountSpentPerOrder";
import DateOfOrder from "./filters/orders/DateOfOrder";
import LastOrderDate from "./filters/orders/LastOrderDate";
import CustomerLanguage from "./filters/orders/CustomerLanguage";
import SubscriptionStatus from "./filters/contacts/SubscriptionStatus";
import NameOfProduct from "./filters/Product/NameOfProduct";
import ProductID from "./filters/Product/ProductID";
import TotalPurchased from "./filters/Product/TotalPurchased";
import OrderCurrency from "./filters/orders/OrderCurrency";
import AutomationEmailStatus from "./filters/automation/AutomationEmailStatus";
import EmailClick from "./filters/emailCampaign/EmailClick";
import AbandonedDate from "./filters/abandonedCart/AbandonedDate";
import AbandonedProductName from "./filters/abandonedCart/AbandonedProductName";
import AbandonedProductId from "./filters/abandonedCart/AbandonedProductId";
import AmountInEachAbandonedCart from "./filters/abandonedCart/AmountInEachAbandonedCart";
import TotalAbandonedCarts from "./filters/abandonedCart/TotalAbandonedCarts";
import PhoneNumber from "./filters/contacts/PhoneNumber";
import City from "./filters/contacts/City";
import State from "./filters/contacts/State";
import Country from "./filters/contacts/Country";

const getFilterComponent = (
  filter: any,
  filterIndex: number,
  removeFilter: any,
  groupIndex: number,
  setRule: any
) => {
  const filterItems = filter.rule.filter.filters;
  switch (filter.rule.resourceType) {
    case "contact":
      return (
        <div key={filterIndex} className="flex flex-col gap-2">
          {filterItems.map((rule: any, ruleIndex: number) => {
            switch (rule.filterValue.property) {
              case "firstName":
                return (
                  <FirstName
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                );
              case "lastName":
                return (
                  <LastName
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                );
              case "email":
                return (
                  <Email
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                );
              case "language":
                return (
                  <Language
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                );
              case "birthdate":
                return (
                  <BirthDate
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                );
              case "dateOfAddition":
                return (
                  <DateofAdd
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                );
              case "tag":
                return (
                  <Tag
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "subscriptionStatus":
                return (
                  <SubscriptionStatus
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "phoneNumber":
                return (
                  <PhoneNumber
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                );
              case "city":
                return (
                  <City
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                );
              case "state":
                return (
                  <State
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                );
              case "country":
                return (
                  <Country
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                    rule={rule}
                    setRule={setRule}
                  />
                )
              default:
                return null;
            }
          })}
        </div>
      );
    case "orders":
      return (
        <div key={filterIndex} className="flex flex-col gap-2">
          {filterItems.map((rule: any, ruleIndex: number) => {
            switch (rule.filterValue.property) {
              case "amountSpent":
                return (
                  <AmountSpent
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "noOfOrders":
                return (
                  <NoOfOrders
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "orderStatus":
                return (
                  <OrderStatus
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "amountSpentPerOrder":
                return (
                  <AmountSpentPerOrder
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "dateOfOrder":
                return (
                  <DateOfOrder
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "lastOrderDate":
                return (
                  <LastOrderDate
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "currencyOfOrder":
                return (
                  <OrderCurrency
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "customerLanguage":
                return (
                  <CustomerLanguage
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      );
    case "product":
      return (
        <div key={filterIndex} className="flex flex-col gap-2">
          {filterItems.map((rule: any, ruleIndex: number) => {
            switch (rule.filterValue.property) {
              case "nameOfProduct":
                return (
                  <NameOfProduct
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "idOfProduct":
                return (
                  <ProductID
                    key={ruleIndex}
                    index={ruleIndex}
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "totalPurchased":
                return (
                  <TotalPurchased
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      );
    case "automation":
      return (
        <div key={filterIndex} className="flex flex-col gap-2">
          {filterItems.map((rule: any, ruleIndex: number) => {
            switch (rule.filterValue.property) {
              case "automationEmailStatus":
                return (
                  <AutomationEmailStatus
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      );
    case "emailCampaign":
      return (
        <div key={filterIndex} className="flex flex-col gap-2">
          {filterItems.map((rule: any, ruleIndex: number) => {
            switch (rule.filterValue.property) {
              case "EmailCampaignStatus":
                return (
                  // <EmailCampaignStatus
                  //   key={ruleIndex}
                  //   index={ruleIndex}
                  //   className="filter-item"
                  //   removeFilter={removeFilter}
                  //   groupIndex={groupIndex}
                  // />
                  <>helllasdasdo</>
                );
              case "clickedOnMail":
                return (
                  <EmailClick
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "markedMailAsSpam":
                return (
                  <EmailClick
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "openedMail":
                return (
                  <EmailClick
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "mailDeliveryFailed":
                return (
                  <EmailClick
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "mailSent":
                return (
                  <EmailClick
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "optedIn":
                return (
                  <EmailClick
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "optedOut":
                return (
                  <EmailClick
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "ViewedPage":
                return (
                  <EmailClick
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      );

    case "abandonedCart":
      return (
        <div key={filterIndex} className="flex flex-col gap-2">
          {filterItems.map((rule: any, ruleIndex: number) => {
            switch (rule.filterValue.property) {
              case "abandonedDate":
                return (
                  <AbandonedDate
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "abandonedProductName":
                return (
                  <AbandonedProductName
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "abandonedProductID":
                return (
                  <AbandonedProductId
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "abandonedProductID":
                return (
                  <AbandonedProductId
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "amountInEachAbandonedCart":
                return (
                  <AmountInEachAbandonedCart
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              case "totalAbandonedCarts":
                return (
                  <TotalAbandonedCarts
                    key={ruleIndex}
                    index={ruleIndex}
                    className="filter-item"
                    removeFilter={removeFilter}
                    groupIndex={groupIndex}
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      );
    default:
      return null;
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
  removeFilter,
  setRule,
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
        <div className="flex flex-col w-full gap-5">
          {member.group.members.map((filter: any, filterIndex: number) => {
            const groupIndex = index;
            return (
              <div key={filterIndex}>
                {filterIndex !== 0 && (
                  <>
                    <div className="h-4 flex mb-3 mr-1 w-full">
                      <ConditionDropdown />
                    </div>
                  </>
                )}
                {getFilterComponent(
                  filter,
                  filterIndex,
                  removeFilter,
                  groupIndex,
                  setRule
                )}
              </div>
            );
          })}
          {/* <div className="flex gap-2 w-fit">
            <DottedButton text="Add filter" onClick={() => addFilter(index)} />
            <DottedButton text="Add filter" onClick={() => addFilter(index)} />
            <DottedButton text="Add filter" onClick={() => addFilter(index)} />
          </div> */}
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
        <AddFilter index={index} addFilter={addFilter} />
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
