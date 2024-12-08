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


    "Placed Orders": "",
    "Amount spend in total": "",
    "Number of orders": "",
    "Order status": "",
    "Amount spent per order": "",
    "Date of the order": "",
    "Last Order Date": "",
    "Currency of the Order": "",
    "Customer's language": "",
    "Purchased Product Property": "",
    "Name of the product": "",
    "ID of the product": "",
    "Total purchased": "",
    "Abandoned Cart": "",
    "Abandoned Date": "",
    "Abandoned product name": "",
    "Abandoned product ID": "",
    "Total no. of abandoned carts": "",
    "Amount in each abandoned cart": "",
    "Email Campaign Properties": "",
    "Clicked on mail": "",
    "Marked mail as spam": "",
    "Mail delivery failed": "",
    "Message sent": "",
    "Opened message": "",
    "Opted in": "",
    "Opted out": "",
    "Viewed page": "",
    "Automation Properties": "",
    "Automation Email Status": "",
    "List Properties": "",
    "Contact present": "",
  };

  return keys[string] || "";
}
