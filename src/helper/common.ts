export function getValue(string: string) {
  const keys: Record<string, string> = {
    "Contact Property": "contact",
    "First Name": "firstName",
    "Last Name": "lastName",
    Tag: "tag",
    Birthdate: "birthdate",
    Email: "email",
    "Phone number": "phoneNumber",
    "Date of Addition": "dateOfAddition",
    City: "city",
    State: "state",
    Country: "country",
    Language: "language",

    "Placed Orders": "order",
    "Order canceled": "orderCanceled",
    "Order fulfilled": "orderFulfilled",
    "Order refunded": "orderRefunded",
    "Paid for order": "paidForOrder",
    "Placed order": "placedOrder",
    "Started checkout": "startedCheckout",

    "Subscription Status": "subscriptionStatus",

    "Purchased Product Property": "product",
    "Name of the product": "nameOfProduct",
    "ID of the product": "idOfProduct",
    "Total purchased": "totalPurchased",

    "Abandoned Cart": "abandonedCart",
    "Abandoned Date": "abandonedDate",
    "Abandoned product name": "abandonedProductName",
    "Abandoned product ID": "abandonedProductID",
    "Total no. of abandoned carts": "totalAbandonedCarts",
    "Amount in each abandoned cart": "amountInEachAbandonedCart",

    "Email Campaign Properties": "emailCampaign",
    "Clicked on mail": "clickedOnMail",
    "Marked mail as spam": "markedMailAsSpam",
    "Mail delivery failed": "mailDeliveryFailed",
    "Mail sent": "mailSent",
    "Opened Mail": "openedMail",
    "Opted in": "optedIn",
    "Opted out": "optedOut",
    "Viewed page": "ViewedPage",

    "Automation Properties": "automation",
    "Automation Email Status": "automationEmailStatus",

    "List Properties": "List",
    "Contact present": "",
  };

  return keys[string] || "";
}

export function getFilter(type: string) {
  switch (type) {
    case "firstName":
    case "lastName":
    case "email":
    case "phoneNumber":
    case "tag":
    case "city":
    case "state":
      return {
        filterType: "filter",
        filterValue: {
          property: type,
          valueType: "string_list",
          operator: "contains",
          value: {
            operator: "any",
            values: [],
          },
        },
      };
    case "country":
    case "language":
      return {
        filterType: "filter",
        filterValue: {
          property: type,
          valueType: "string",
          operator: "",
          value: {
            operator: "any",
            values: "",
          },
        },
      };
    case "subscriptionStatus":
      return {
        filterType: "filter",
        filterValue: {
          property: type,
          valueType: "string_list",
          operator: "",
          value: {
            operator: "any",
            values: [],
            status: "",
          },
        },
      };
    case "dateOfAddition":
    case "birthdate":
      return {
        filterType: "filter",
        filterValue: {
          property: type,
          valueType: "string_list",
          operator: "",
          value: {
            operator: "any",
            values: [],
          },
        },
      };

    case "orderCanceled":
    case "orderFulfilled":
    case "orderRefunded":
    case "paidForOrder":
    case "placedOrder":
    case "startedCheckout":
      return {
        filterType: "filter",
        filterValue: {
          property: type,
          valueType: "object",
          operator: "",
          value: {
            operator: "any",
          },
        },
      };
    case "clickedOnMail":
    case "optedIn":
    case "optedOut":
      return {
        filterType: "filter",
        filterValue: {
          property: type,
          valueType: "object",
          operator: "",
          value: {
            operator: "any",
          },
        },
      };
    default:
      return null;
  }
}
