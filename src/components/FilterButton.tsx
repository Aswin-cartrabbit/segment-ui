import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Contact,
  ShoppingBag,
  Box,
  ShoppingCart,
  Mail,
  Repeat,
  List,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

const FilterButton = ({ addFilter,index }: any) => {
  const groupIndex = index
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownDirection, setDropdownDirection] = useState<"down" | "up">(
    "down"
  );
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Contact Property");
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const buttonRef = useRef<HTMLDivElement>(null);

  const items = [
    {
      category: "Contact Property",
      options: [
        "First Name",
        "Last Name",
        "Tag",
        "Birthdate",
        "Email",
        "Phone number",
        "Date of Addition",
        "City",
        "State",
        "Country",
        "Language",
      ],
      icon: <Contact className="mr-1 h-4 w-4" />,
    },
    {
      category: "Placed Orders",
      options: [
        "Amount spend in total",
        "Number of orders",
        "Order status",
        "Amount spent per order",
        "Date of the order",
        "Last Order Date",
        "Currency of the Order",
        "Customer's language",
      ],
      icon: <ShoppingBag className="mr-1 h-4 w-4" />,
    },
    {
      category: "Purchased Product Property",
      options: ["Name of the product", "ID of the product", "Total purchased"],
      icon: <Box className="mr-1 h-4 w-4" />,
    },
    {
      category: "Abandoned Cart",
      options: [
        "Abandoned Date",
        "Abandoned product name",
        "Abandoned product ID",
        "Total no. of abandoned carts",
        "Amount in each abandoned cart",
      ],
      icon: <ShoppingCart className="mr-1 h-4 w-4" />,
    },
    {
      category: "Email Campaign Properties",
      options: [
        "Clicked on mail",
        "Marked mail as spam",
        "Mail delivery failed",
        "Message sent",
        "Opened message",
        "Opted in",
        "Opted out",
        "Viewed page",
      ],
      icon: <Mail className="mr-1 h-4 w-4" />,
    },
    {
      category: "Automation Properties",
      options: ["Automation Email Status"],
      icon: <Repeat className="mr-1 h-4 w-4" />,
    },
    {
      category: "List Properties",
      options: ["Contact present"],
      icon: <List className="mr-1 h-4 w-4" />,
    },
  ];

  const explanations: { [key: string]: string } = {
    "First Name": "The user's first name as provided in the contact profile.",
    "Last Name": "The user's last name as provided in the contact profile.",
    Tag: "Tags associated with the contact to categorize or label them.",
    Birthdate: "The contact's date of birth.",
    Email: "The primary email address of the contact.",
    "Phone number": "The contact's primary phone number.",
    "Date of Addition": "The date when the contact was added to the database.",
    City: "The city where the contact is located.",
    State: "The state where the contact resides.",
    Country: "The country where the contact is located.",
    Language: "The preferred language of the contact.",
    "Amount spend in total":
      "The total amount spent by the customer over all orders.",
    "Number of orders": "The total number of orders placed by the customer.",
    "Order status": "The current status of the customer's orders.",
    "Amount spent per order":
      "The average amount spent by the customer per order.",
    "Date of the order": "The date when the order was placed.",
    "Last Order Date":
      "The date of the most recent order placed by the customer.",
    "Currency of the Order": "The currency used in the customer's orders.",
    "Customer's language":
      "The language preference of the customer for communication.",
    "Name of the product": "The name of the purchased product.",
    "ID of the product": "The unique identifier for the purchased product.",
    "Total purchased":
      "The total quantity of a product purchased by the customer.",
    "Abandoned Date": "The date when the cart was abandoned by the customer.",
    "Abandoned product name":
      "The name of the product left in the abandoned cart.",
    "Abandoned product ID": "The unique ID of the product left in the cart.",
    "Total no. of abandoned carts":
      "The total number of abandoned carts recorded.",
    "Amount in each abandoned cart":
      "The amount of money in each abandoned cart.",
    "Clicked on mail": "The user clicked on a link in the email campaign.",
    "Marked mail as spam": "The user marked the email as spam.",
    "Mail delivery failed": "Indicates if the email failed to be delivered.",
    "Message sent": "Indicates that the email message was successfully sent.",
    "Opened message": "Indicates that the email was opened by the recipient.",
    "Opted in": "The user opted into the email campaign.",
    "Opted out": "The user opted out of the email campaign.",
    "Viewed page": "The user viewed the page linked in the email campaign.",
    "Automation Email Status": "The current status of the automation email.",
    "Contact present":
      "Indicates whether a specific contact is part of the list.",
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const calculateDropdownDirection = () => {
      const buttonRect = buttonRef.current?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (buttonRect) {
        const spaceBelow = viewportHeight - buttonRect.bottom;
        const dropdownHeight = 200; // Estimated height of the dropdown
        setDropdownDirection(spaceBelow < dropdownHeight ? "up" : "down");
      }
    };

    calculateDropdownDirection();
    window.addEventListener("resize", calculateDropdownDirection);

    return () =>
      window.removeEventListener("resize", calculateDropdownDirection);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={buttonRef} className="relative w-[400px] font-sans">
      {/* Dropdown Button */}
      <Button
        variant="ghost"
        className="h-8 justify-start px-2 text-zinc-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">+ Filter</span>
      </Button>
      {/* Dropdown Menu */}
      {isOpen && (
        <Card
          className={`absolute ${
            dropdownDirection === "up" ? "bottom-10" : "top-10"
          } left-0 z-20 flex w-[700px] bg-white border border-gray-300 rounded-md shadow-lg`}
        >
          {/* Left Pane: Categories */}
          <div className="w-1/2 border-r border-gray-200 p-3 flex flex-col gap-1">
            {items.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => setSelectedCategory(item.category)}
                className={`text-left text-sm justify-start transition-all duration-200 ${
                  selectedCategory === item.category
                    ? "bg-[#F27052] text-white hover:bg-[#F27052] hover:text-white"
                    : "text-gray-700 hover:bg-[#F27052] hover:text-white"
                }`}
              >
                {item.icon}
                {item.category}
              </Button>
            ))}
          </div>

          {/* Middle Pane: Options */}
          <ScrollArea className="h-[300px] min-w-fit p-3 overflow-hidden border-r">
            <div className="w-full border-gray-200 flex flex-col gap-1">
              {selectedCategory ? (
                items
                  .find((item) => item.category === selectedCategory)
                  ?.options.map((option, index) => (
                    <Button
                      key={index}
                      onMouseEnter={() => setHoveredOption(option)}
                      onMouseLeave={() => setHoveredOption(null)}
                      onClick={()=>{
                        addFilter(groupIndex,selectedCategory,hoveredOption)
                      }}
                      variant={"ghost"}
                      className="text-left text-gray-700 text-sm justify-start transition-all duration-200 w-full hover:bg-[#F27052] hover:text-white"
                    >
                      {option}
                    </Button>
                  ))
              ) : (
                <p className="p-4 text-sm text-gray-400">
                  Select a category to view options.
                </p>
              )}
            </div>
          </ScrollArea>

          <div className="w-1/2 p-4 overflow-auto">
            {hoveredOption ? (
              <div className="text-sm text-gray-600 transition-opacity duration-300">
                <strong className="block text-gray-800">{hoveredOption}</strong>
                <p className="mt-2 text-xs text-gray-500">
                  {explanations[hoveredOption] ||
                    "Detailed information about this option will appear here."}
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-400">
                Hover over an option to see details.
              </p>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};

export default FilterButton;
