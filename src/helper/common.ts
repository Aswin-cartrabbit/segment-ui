export function getValue(string: string) {
  const keys: Record<string, string> = {
    "Contact Property": "contacts",
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


    "Placed Orders": "orders",
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

    "Abandoned Cart": "Abandoned Cart",
    "Abandoned Date": "",
    "Abandoned product name": "",
    "Abandoned product ID": "",
    "Total no. of abandoned carts": "",
    "Amount in each abandoned cart": "",

    "Email Campaign Properties": "Email",
    "Clicked on mail": "",
    "Marked mail as spam": "",
    "Mail delivery failed": "",
    "Message sent": "",
    "Opened message": "",
    "Opted in": "",
    "Opted out": "",
    "Viewed page": "",

    "Automation Properties": "automation",
    "Automation Email Status": "automationEmailStatus",

    "List Properties": "List",
    "Contact present": "",
  };

  return keys[string] || "";
}
