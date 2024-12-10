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
    "Amount spent in total": "amountSpent",
    "Number of orders": "noOfOrders",
    "Order status": "orderStatus",
    "Amount spent per order": "amountSpentPerOrder",
    "Date of the order": "dateOfOrder",
    "Last Order Date": "lastOrderDate",
    "Currency of the Order": "currencyOfOrder",
    "Customer's language": "customerLanguage",
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
