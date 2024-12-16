import { useState } from "react";
import GroupCard from "./components/GroupCard";
import { Button } from "./components/ui/button";
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  Plus,
  ShoppingCart,
  User,
} from "lucide-react";
function App() {
  const [filter, setFilter] = useState({
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
                          filters: [
                            {
                              filterType: "filter",
                              filterValue: {
                                property: "firstName",
                                valueType: "string_list",
                                operator: "does_not_contain",
                                values: [
                                  "welcome to the use",
                                  "asdv",
                                  "dfffase",
                                  "grftgvd",
                                ],
                              },
                            },
                            {
                              filterType: "filter",
                              filterValue: {
                                property: "firstName",
                                valueType: "string_list",
                                operator: "ends_with",
                                values: ["use", "ash"],
                              },
                            },
                          ],
                        },
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  });
  console.log(filter)
  const config = [
    {
      id: "contact",
      displayName: "Contact Properties",
      icon: <User className="mr-1 h-4 w-4" />,
      filters: [
        {
          category: "firstName",
          displayName: "First Name",
          icon: <User className="mr-1 h-4 w-4" />,
          description:
            "The user's first name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "does_not_contain", label: "Does Not Contain" },
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "ends_with", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
                { value: "starts_with", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "values",
              placeholder: "Enter valid First Name",
              id: "values",
              validate: () => {
                return {
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: "Enter a valid name",
                  },
                };
              },
            },
          ],
          data: [
            {
              type: "normal",
              value: {
                filterType: "filter",
                filterValue: {
                  property: "firstName",
                  valueType: "string_list",
                  operator: "contains",
                  values: [],
                },
              },
            },
          ],
        },
        {
          category: "lastName",
          displayName: "Last Name",
          icon: <User className="mr-1 h-4 w-4" />,
          description:
            "The user's Last name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "does_not_contain", label: "Does Not Contain" },
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "ends_with", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
                { value: "starts_with", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "values",
              placeholder: "Enter valid First Name",
              id: "values",
              validate: () => {
                return {
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: "Enter a valid name",
                  },
                };
              },
            },
          ],
          data: [
            {
              type: "normal",
              value: {
                filterType: "filter",
                filterValue: {
                  property: "firstName",
                  valueType: "string_list",
                  operator: "contains",
                  values: [],
                },
              },
            },
          ],
        },
        {
          category: "tag",
          displayName: "Tag",
          icon: <User className="mr-1 h-4 w-4" />,
          description:
            "Tags are keywords or labels assigned to a contact to categorize them based on attributes, behaviors, or interests. They help organize contacts for more targeted marketing.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "does_not_contain", label: "Does Not Contain" },
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "ends_with", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
                { value: "starts_with", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "values",
              placeholder: "Enter tags",
              id: "values",
            },
          ],
          data: [
            {
              type: "normal",
              value: {
                filterType: "filter",
                filterValue: {
                  property: "firstName",
                  valueType: "string_list",
                  operator: "contains",
                  values: [],
                },
              },
            },
          ],
        },
        {
          category: "birthDate",
          displayName: "Birthdate",
          icon: <User className="mr-1 h-4 w-4" />,
          description:
            "The user's birthdate is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "operator",
              id:"operator",
              options: [
                {
                  value: "anniversary_is_in_the_next",
                  label: "aniversary is in the next",
                },
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "does_not_exist",
                  label: "does not exist",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
            },
            // {
            //   type: "input",
            //   defaultValue: "",
            //   placeholder: "Enter valid First Name",
            //   validate: () => {
            //     return {
            //       pattern: {
            //         value: /^[a-zA-Z ]*$/,
            //         message: "Enter a valid lastName",
            //       },
            //     };
            //   },
            // },
            // {
            //   type: "date",
            //   defaultValue: "",
            //   placeholder: "Enter valid date",
            // },
            // {
            //   type: "input",
            //   defaultValue: "",
            //   placeholder: "Enter valid First Name",
            // },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      {
                        value: "aniversary is in the next",
                        label: "aniversary is in the next",
                      },
                      { value: "after", label: "after" },
                      { value: "before", label: "before" },
                      { value: "between", label: "between" },
                      {
                        value: "does not exist",
                        label: "does not exist",
                      },
                      {
                        value: "exists",
                        label: "exists",
                      },
                      {
                        value: "in_the_last",
                        label: "in_the_last",
                      },
                      {
                        value: "not_in_the_last",
                        label: "not_in_the_last",
                      },
                      {
                        value: "on the exact date",
                        label: "on the exact date",
                      },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "birthDate",
                    valueType: "object",
                    operator: "after",
                    value: {
                      date: "",
                    },
                  },
                },
              },
            ],
          },
        },
        {
          category: "subscriptionStatus",
          displayName: "Subscription Status",
          icon: <Mail className="h-3 w-3" />,
          description:
            "The user's subscription status is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "is",
              options: [
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "not_subscribed",
              options: [
                { value: "not_subscribed", label: "Not Subscribed" },
                { value: "subscribed", label: "Subscribed" },
                { value: "unsubscribed", label: "Unsubscribed" },
              ],
            },
            {
              type: "multiSelect",
              defaultValue: [
                {
                  value: "email",
                  label: "Email",
                },
              ],
              placeholder: "Enter valid First Name",
              options: [
                {
                  value: "sms",
                  label: "SMS",
                },
                {
                  value: "email",
                  label: "Email",
                },
                {
                  value: "whatsApp",
                  label: "WhatsApp",
                },
              ],
            },
          ],
          labels: [
            {
              text: "to",
              index: 1,
            },
            {
              text: "channel",
              index: 2,
            },
          ],
        },
        {
          category: "email",
          displayName: "Email",
          icon: <User className="mr-1 h-4 w-4" />,
          description:
            "The user's email is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "contains",
              options: [
                { value: "contains", label: "Contains" },
                { value: "does_not_contain", label: "Does Not Contain" },
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "ends_with", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
                { value: "starts_with", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "",
              placeholder: "",
            },
          ],
        },
        {
          category: "phone",
          displayName: "Phone number",
          icon: <Phone className="mr-1 h-4 w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "contains",
              options: [
                { value: "contains", label: "Contains" },
                { value: "does_not_contain", label: "Does Not Contain" },
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "ends_with", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
                { value: "starts_with", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "",
              placeholder: "",
            },
          ],
        },
        {
          category: "dateOfAddition",
          displayName: "Date of Addition",
          icon: <Calendar className="mr-1 h-4 w-4" />,
          description:
            "The user's date of addition is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                {
                  value: "aniversary is in the next",
                  label: "aniversary is in the next",
                },
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "does not exist",
                  label: "does not exist",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "Enter valid First Name",
            },
            {
              type: "date",
              defaultValue: "",
              placeholder: "Enter valid date",
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "Enter valid First Name",
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      {
                        value: "aniversary is in the next",
                        label: "aniversary is in the next",
                      },
                      { value: "after", label: "after" },
                      { value: "before", label: "before" },
                      { value: "between", label: "between" },
                      {
                        value: "does not exist",
                        label: "does not exist",
                      },
                      {
                        value: "exists",
                        label: "exists",
                      },
                      {
                        value: "in_the_last",
                        label: "in_the_last",
                      },
                      {
                        value: "not_in_the_last",
                        label: "not_in_the_last",
                      },
                      {
                        value: "on the exact date",
                        label: "on the exact date",
                      },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "city",
          displayName: "City",
          icon: <MapPin className="mr-1 h-4 w-4" />,
          description:
            "The user's city is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "contains",
              options: [
                { value: "contains", label: "Contains" },
                { value: "does_not_contain", label: "Does Not Contain" },
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "ends_with", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
                { value: "starts_with", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "",
              placeholder: "Enter valid city name",
              validate: () => {
                return {
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: "Enter a valid name",
                  },
                };
              },
            },
          ],
        },
        {
          category: "state",
          displayName: "State",
          icon: <MapPin className="mr-1 h-4 w-4" />,
          description:
            "The user's state is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "contains",
              options: [
                { value: "contains", label: "Contains" },
                { value: "does_not_contain", label: "Does Not Contain" },
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "ends_with", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
                { value: "starts_with", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "",
              placeholder: "",
            },
          ],
        },
        {
          category: "language",
          displayName: "Language",
          icon: <MapPin className="mr-1 h-4 w-4" />,
          description:
            "The user's language is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "contains",
              options: [
                { value: "contains", label: "Contains" },
                { value: "does_not_contain", label: "Does Not Contain" },
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "ends_with", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
                { value: "starts_with", label: "Starts With" },
              ],
            },
            {
              type: "languageDropdown",
              defaultValue: "",
              placeholder: "",
            },
          ],
        },
        {
          category: "country",
          displayName: "Country",
          icon: <MapPin className="mr-1 h-4 w-4" />,
          description:
            "The user's country is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "contains",
              options: [
                { value: "contains", label: "Contains" },
                { value: "does_not_contain", label: "Does Not Contain" },
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "ends_with", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
                { value: "starts_with", label: "Starts With" },
              ],
            },
            {
              type: "countryDropdown",
              defaultValue: "",
              placeholder: "",
            },
          ],
        },
      ],
    },
    {
      id: "orders",
      displayName: "Placed Orders",
      icon: <ShoppingCart className="mr-1 h-4 w-4" />,
      filters: [
        {
          category: "orderCanceled",
          displayName: "Order Canceled",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "orderFulfilled",
          displayName: "Order Fulfilled",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The user's order fulfilled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "orderRefunded",
          displayName: "Order Refunded",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The user's order refunded is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "paidForOrder",
          displayName: "Paid For Order",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description: "about paid order ",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "placedOrder",
          displayName: "Placed Order",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description: "about paid order ",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "startedCheckout",
          displayName: "Started Checkout",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description: "about paid order ",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
      ],
    },
    {
      id: "products",
      displayName: "Products",
      icon: <ShoppingCart className="mr-1 h-4 w-4" />,
      filters: [
        {
          category: "AddedProductToCart",
          displayName: "Added Product To Cart",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The number of times a product has been added to the cart. ",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "orderedProduct",
          displayName: "Ordered Product",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description: "The number of times a product has been ordered. ",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "viewedProduct",
          displayName: "Viewed Product",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The user's order refunded is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "submittedProductReview",
          displayName: "Submitted Product Review",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The user's order refunded is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
      ],
    },
    {
      id: "emailCampaign",
      displayName: "Email Campaign",
      icon: <ShoppingCart className="mr-1 h-4 w-4" />,
      filters: [
        {
          category: "clickedOnMail",
          displayName: "Clicked on Mail",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "Have clicked on a mail in a campaign. or any automation",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "markedMailAsSpam",
          displayName: "Marked mail as spam",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "Have marked a mail as spam in a campaign. or any automation",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "mailSent",
          displayName: "Mail sent",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The number of times a mail has been sent in a campaign. or any automation",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "mailDeliveryFailed",
          displayName: "Mail delivery failed",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The number of times a mail has been failed in a campaign. or any automation",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "mailOpened",
          displayName: "Mail Opened",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The number of times a mail has been opened in a campaign. or any automation",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "optedIn",
          displayName: "Opted In",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description: "opted In to a campaign or any automation",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "optedOut",
          displayName: "optedOut",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description: "opted out to a campaign or any automation",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          category: "viewedPage",
          displayName: "Viewed Page",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description: "opted out to a campaign or any automation",
          fields: [
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "have",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "",
              placeholder: "0",
            },
            {
              type: "dropdown",
              defaultValue: "after",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in_the_last",
                },
                {
                  value: "not_in_the_last",
                  label: "not_in_the_last",
                },
                {
                  value: "on the exact date",
                  label: "on the exact date",
                },
                {
                  value: "in total",
                  label: "in total",
                },
              ],
            },
          ],
          labels: [
            {
              text: "times",
              index: 2,
            },
          ],
          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on the exact date":
                return [
                  {
                    type: "date",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "",
                    placeholder: "Enter valid First Name",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "after",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "year", label: "year" },
                    ],
                  },
                ];
              default:
                return [];
            }
          },
        },
      ],
    },
  ];

  const setRule = (
    rule: any,
    resourceType: string,
    groupIndex: number,
    filterIndex: number
  ) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
      newFilter.group.members[0].group.members[groupIndex].group.members.find(
        (member: { rule: { resourceType: string } }) =>
          member.rule.resourceType === resourceType
      ).rule.filter.filters[filterIndex] = rule;

      return newFilter;
    });
  };

  const addGroup = (newMember: any) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
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
      newFilter.group.members[0].group.members.push(newMember);
      return newFilter;
    });
  };

  const addFilter = (
    index: number,
    category: string,
    hoveredOption: string
  ) => {
    console.log(index, category, hoveredOption);
    const filter: any = config.find((f) => f.id === category);
    let data =
      filter?.filters.find(
        (f: { category: string }) => f.category === hoveredOption
      )?.data ?? null;
    if (data.type === "dynamic") {
      data = data.values[0].value;
    } else {
      data = data[0].value;
    }
    console.log(data);

    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
      // Access the group members array
      const groupMembers = newFilter.group.members[0]?.group?.members;

      // Check if the group exists at the provided index
      if (Array.isArray(groupMembers) && groupMembers[index]) {
        const group = groupMembers[index];

        // Loop through the members array of the group
        if (Array.isArray(group.group?.members)) {
          const members = group.group.members;

          // Find the member where the category exists
          const targetMember = members.find((member: any) => {
            // Check if the category matches the resourceType or if it's the right condition
            return member?.rule?.resourceType === category;
          });
          if (targetMember) {
            targetMember.rule.resourceType = category;
            const newFilterToAdd = data;
            if (Array.isArray(targetMember.rule.filter.filters)) {
              targetMember.rule.filter.filters.push(newFilterToAdd);
            } else {
              targetMember.rule.filter.filters = [newFilterToAdd];
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
            members.push(newFilterToAdd);
          }
        }
      }
      return newFilter;
    });
  };

  const updateJunction = (index: number, newJunction: string) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));

      // Ensure members exist before updating
      if (newFilter.group.members[0]?.group?.members) {
        newFilter.group.members[0].group.members[index].group.junction =
          newJunction;
      }

      return newFilter;
    });
  };

  const removeGroup = (indexToRemove: number) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));

      if (Array.isArray(newFilter.group.members[0]?.group?.members)) {
        newFilter.group.members[0].group.members =
          newFilter.group.members[0].group.members.filter(
            (_: any, index: number) => index !== indexToRemove
          );
      }

      return newFilter;
    });
  };
  const cloneGroup = (index: number) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
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

      // Find the group to clone based on the index
      const groupToClone = members[index];

      if (groupToClone) {
        // Clone the group
        const clonedGroup = JSON.parse(JSON.stringify(groupToClone));

        // Insert the cloned group next to the original one (index + 1)
        members.splice(index + 1, 0, clonedGroup);
      }

      return newFilter;
    });
  };
  const removeFilter = (
    indexToRemove: number,
    groupIndex: number,
    filterType: string
  ) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
      if (
        Array.isArray(
          newFilter.group.members[0].group.members[groupIndex]?.group.members
        )
      ) {
        newFilter.group.members[0].group.members[groupIndex].group.members.find(
          (member: { rule: { resourceType: string } }) =>
            member.rule.resourceType === filterType
        ).rule.filter.filters = newFilter.group.members[0].group.members[
          groupIndex
        ].group.members
          .find(
            (member: { rule: { resourceType: string } }) =>
              member.rule.resourceType === filterType
          )
          .rule.filter.filters.filter(
            (_: any, index: number) => index !== indexToRemove
          );
        const members = newFilter.group.members[0].group.members[
          groupIndex
        ].group.members.find(
          (member: { rule: { resourceType: string } }) =>
            member.rule.resourceType === filterType
        ).rule.filter.filters;
        if (members.length === 0) {
          newFilter.group.members[0].group.members[groupIndex].group.members =
            newFilter.group.members[0].group.members[
              groupIndex
            ].group.members.filter(
              (member: { rule: { resourceType: string } }) =>
                member.rule.resourceType !== "contacts"
            );
        }
      }
      return newFilter;
    });
  };

  return (
    <div className="flex h-screen p-5 flex-col">
      {filter.type === "group" ? (
        filter.group.members[0].group.members.map((member, index) => (
          <div key={index}>
            <GroupCard
              member={member}
              index={index}
              removeGroup={removeGroup}
              members={filter.group.members[0].group.members}
              updateJunction={updateJunction}
              cloneGroup={cloneGroup}
              addFilter={addFilter}
              removeFilter={removeFilter}
              setRule={setRule}
              config={config}
            />
          </div>
        ))
      ) : (
        <></>
      )}
      <div className="flex p-2 justify-between">
        <Button
          className="hover:bg-[#F27052] hover:text-white text-[#F27052]"
          variant={"ghost"}
          onClick={() => {
            const data = {
              type: "group",
              group: {
                junction: "and",
                members: [],
              },
            };
            addGroup(data);
          }}
        >
          <span className="text-sm flex gap-1 items-center">
            <Plus /> Add Group{" "}
          </span>
        </Button>
        <Button
          className="hover:bg-[#F27052] hover:text-white text-[#F27052]"
          variant={"ghost"}
        >
          <span className="text-sm flex gap-1 items-center">
            <Plus /> Clear All{" "}
          </span>
        </Button>
      </div>
    </div>
  );
}

export default App;
