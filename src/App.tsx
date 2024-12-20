import { useState } from "react";
import GroupCard from "./components/GroupCard";
import { Button } from "./components/ui/button";
import {
  CheckCircle,
  CreditCard,
  Mail,
  MailIcon,
  MapPin,
  Package,
  Phone,
  Plus,
  RefreshCcw,
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
                        resourceType: "orders",
                        filter: {
                          junction: "or",
                          filterType: "junction",
                          filters: [
                            {
                              filterType: "filter",
                              filterValue: {
                                property: "orderCanceled",
                                valueType: "object",
                                returnType: "have",
                                condition: {
                                  junction: "and",
                                  value: [
                                    {
                                      operator: "after",
                                      date: "2024-12-09T18:30:00.000Z",
                                    },
                                    {
                                      operator: "at_least",
                                      unit: "",
                                    },
                                  ],
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                    // {
                    //   type: "rule",
                    //   rule: {
                    //     resourceType: "orders",
                    //     filter: {
                    //       junction: "and",
                    //       filterType: "junction",
                    //       filters: [
                    //         {
                    //           filterType: "filter",
                    //           filterValue: {
                    //             property: "orderCanceled",
                    //             valueType: "object",
                    //             operator: "before",
                    //             value: {
                    //               returnType: "have_not",
                    //               date: "2024-12-03T18:30:00.000Z",
                    //               counter: {
                    //                 input: "5",
                    //                 counterOperator: "at_least",
                    //               },
                    //             },
                    //           },
                    //         },
                    //         {
                    //           filterType: "filter",
                    //           filterValue: {
                    //             property: "orderRefunded",
                    //             valueType: "object",
                    //             operator: "in_total",
                    //             value: {
                    //               returnType: "have",
                    //               date: "",
                    //               counter: {
                    //                 input: "5",
                    //                 counterOperator: "at_least",
                    //               },
                    //             },
                    //           },
                    //         },
                    //         {
                    //           filterType: "filter",
                    //           filterValue: {
                    //             property: "paidForOrder",
                    //             valueType: "object",
                    //             operator: "in_the_last",
                    //             value: {
                    //               returnType: "have",
                    //               unit: "6",
                    //               type: "weeks",
                    //               counter: {
                    //                 input: "3",
                    //                 counterOperator: "at_least",
                    //               },
                    //             },
                    //           },
                    //         },
                    //         {
                    //           filterType: "filter",
                    //           filterValue: {
                    //             property: "placedOrder",
                    //             valueType: "object",
                    //             operator: "not_in_the_last",
                    //             value: {
                    //               returnType: "have_not",
                    //               unit: "6",
                    //               type: "days",
                    //               counter: {
                    //                 input: "3",
                    //                 counterOperator: "at_least",
                    //               },
                    //             },
                    //           },
                    //         },
                    //         {
                    //           filterType: "filter",
                    //           filterValue: {
                    //             property: "placedOrder",
                    //             valueType: "object",
                    //             operator: "in_the_last",
                    //             value: {
                    //               returnType: "have",
                    //               unit: "6",
                    //               type: "year",
                    //               counter: {
                    //                 input: "3",
                    //                 counterOperator: "at_least",
                    //               },
                    //             },
                    //           },
                    //         },
                    //         {
                    //           filterType: "filter",
                    //           filterValue: {
                    //             property: "checkoutStarted",
                    //             valueType: "object",
                    //             operator: "after",
                    //             value: {
                    //               returnType: "have",
                    //               date: "2024-12-25T18:30:00.000Z",
                    //               counter: {
                    //                 input: "5",
                    //                 counterOperator: "exactly",
                    //               },
                    //             },
                    //           },
                    //         },
                    //         {
                    //           filterType: "filter",
                    //           filterValue: {
                    //             property: "orderRefunded",
                    //             valueType: "object",
                    //             operator: "on_the_exact_date",
                    //             value: {
                    //               returnType: "have",
                    //               date: "2024-12-27T18:30:00.000Z",
                    //               counter: {
                    //                 input: "3",
                    //                 counterOperator: "at_least",
                    //               },
                    //             },
                    //           },
                    //         },
                    //         {
                    //           filterType: "filter",
                    //           filterValue: {
                    //             property: "orderFullfilled",
                    //             valueType: "object",
                    //             operator: "in_total",
                    //             value: {
                    //               returnType: "have",
                    //               counter: {
                    //                 input: "9",
                    //                 counterOperator: "at_least",
                    //               },
                    //             },
                    //           },
                    //         },
                    //       ],
                    //     },
                    //   },
                    // },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  });
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
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
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
              defaultValue: "filterValue.values",
              placeholder: "Enter valid First Name",
              inputType: "text",
              id: "filterValue.values",
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
          data: {
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
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
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
              defaultValue: "filterValue.values",
              placeholder: "Enter valid First Name",
              inputType: "text",
              id: "filterValue.values",
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
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "lastName",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          category: "subscribedChannels",
          displayName: "subscribedChannels",
          icon: <Mail className="h-3 w-3" />,
          description:
            "The user's subscription status is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "list_value_eq", label: "Is" },
                { value: "list_value_not_eq", label: "Is Not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "status",
              id: "status",
              options: [
                { value: "not_subscribed", label: "Not Subscribed" },
                { value: "subscribed", label: "Subscribed" },
                { value: "unsubscribed", label: "Unsubscribed" },
              ],
            },
            {
              type: "multiSelect",
              defaultValue: "values",
              id: "values",
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
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "subscribedChannels",
                valueType: "object",
                operator: "list_value_eq",
                value: {
                  status: "",
                  values: [],
                },
              },
            },
          },
        },
        {
          category: "email",
          displayName: "Email",
          icon: <MailIcon className="mr-1 h-4 w-4" />,
          description:
            "The user's email is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
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
              defaultValue: "filterValue.values",
              placeholder: "Enter valid First Name",
              inputType: "text",
              id: "filterValue.values",
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
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "email",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
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
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
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
              defaultValue: "filterValue.values",
              placeholder: "Enter valid First Name",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "phone",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        // {
        //   category: "dateOfAddition",
        //   displayName: "Date of Addition",
        //   icon: <Calendar className="mr-1 h-4 w-4" />,
        //   description:
        //     "The user's date of addition is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
        //   fields: [
        //     {
        //       type: "dropdown",
        //       defaultValue: "after",
        //       options: [
        //         {
        //           value: "aniversary is in the next",
        //           label: "aniversary is in the next",
        //         },
        //         { value: "after", label: "after" },
        //         { value: "before", label: "before" },
        //         { value: "between", label: "between" },
        //         {
        //           value: "does not exist",
        //           label: "does not exist",
        //         },
        //         {
        //           value: "exists",
        //           label: "exists",
        //         },
        //         {
        //           value: "in_the_last",
        //           label: "in_the_last",
        //         },
        //         {
        //           value: "not_in_the_last",
        //           label: "not_in_the_last",
        //         },
        //         {
        //           value: "on the exact date",
        //           label: "on the exact date",
        //         },
        //       ],
        //     },
        //     {
        //       type: "input",
        //       defaultValue: "",
        //       placeholder: "Enter valid First Name",
        //     },
        //     {
        //       type: "date",
        //       defaultValue: "",
        //       placeholder: "Enter valid date",
        //     },
        //     {
        //       type: "input",
        //       defaultValue: "",
        //       placeholder: "Enter valid First Name",
        //     },
        //   ],
        //   order: (option: string) => {
        //     switch (option) {
        //       case "after":
        //       case "before":
        //       case "on the exact date":
        //         return [
        //           {
        //             type: "date",
        //             defaultValue: "",
        //             placeholder: "Enter valid date",
        //           },
        //         ];
        //       case "between":
        //         return [
        //           {
        //             type: "dateRange",
        //             defaultValue: "",
        //             placeholder: "Enter valid date",
        //           },
        //         ];
        //       case "in_the_last":
        //       case "not_in_the_last":
        //         return [
        //           {
        //             type: "input",
        //             defaultValue: "",
        //             placeholder: "Enter valid First Name",
        //           },
        //           {
        //             type: "dropdown",
        //             defaultValue: "after",
        //             options: [
        //               {
        //                 value: "aniversary is in the next",
        //                 label: "aniversary is in the next",
        //               },
        //               { value: "after", label: "after" },
        //               { value: "before", label: "before" },
        //               { value: "between", label: "between" },
        //               {
        //                 value: "does not exist",
        //                 label: "does not exist",
        //               },
        //               {
        //                 value: "exists",
        //                 label: "exists",
        //               },
        //               {
        //                 value: "in_the_last",
        //                 label: "in_the_last",
        //               },
        //               {
        //                 value: "not_in_the_last",
        //                 label: "not_in_the_last",
        //               },
        //               {
        //                 value: "on the exact date",
        //                 label: "on the exact date",
        //               },
        //             ],
        //           },
        //         ];
        //       default:
        //         return [];
        //     }
        //   },
        // },
        {
          category: "city",
          displayName: "City",
          icon: <MapPin className="mr-1 h-4 w-4" />,
          description:
            "The user's city is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
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
              defaultValue: "filterValue.values",
              placeholder: "Enter valid First Name",
              inputType: "text",
              id: "filterValue.values",
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
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "city",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
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
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
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
              defaultValue: "filterValue.values",
              placeholder: "Enter valid First Name",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "state",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
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
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
              ],
            },
            {
              id: "filterValue.value",
              type: "languageDropdown",
              defaultValue: "filterValue.value",
              placeholder: "",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "language",
                valueType: "string",
                operator: "is",
                value: "",
              },
            },
          },
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
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is Not" },
              ],
            },
            {
              type: "countryDropdown",
              defaultValue: "filterValue.value",
              placeholder: "",
              id: "filterValue.value",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "country",
                valueType: "string",
                operator: "",
                value: "",
              },
            },
          },
        },
      ],
      recommendations: [
        "subscribedChannels",
        "email",
        "phone",
        "country",
        "state",
        "city",
        "language",
        "phone",
        "firstName",
        "lastName",
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
              defaultValue: "filterValue.returnType",
              id: "filterValue.returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[1].unit",
              placeholder: 0,
              id: "filterValue.condition.value[1].unit",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                          params: {},
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    valueType: "object",
                    returnType: "have_not",
                    params: {
                      property: "cart_type",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          startDate: "",
                          endDate: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
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
                    defaultValue: "filterValue.condition.value[0].unit",
                    inputType: "number",
                    id: "filterValue.condition.value[0].unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
          icon: <CheckCircle className="mr-1 h-4 w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.returnType",
              id: "filterValue.returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[1].unit",
              placeholder: 0,
              id: "filterValue.condition.value[1].unit",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFulfilled",
                    valueType: "object",
                    returnType: "have_not",
                    params: {
                      property: "cart_type",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          startDate: "",
                          endDate: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
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
                    defaultValue: "filterValue.condition.value[0].unit",
                    inputType: "number",
                    id: "filterValue.condition.value[0].unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
          icon: <RefreshCcw className="mr-1 h-4 w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.returnType",
              id: "filterValue.returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[1].unit",
              placeholder: 0,
              id: "filterValue.condition.value[1].unit",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderRefunded",
                    valueType: "object",
                    params: {
                      property: "cart_type",
                    },
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          startDate: "",
                          endDate: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
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
                    defaultValue: "filterValue.condition.value[0].unit",
                    inputType: "number",
                    id: "filterValue.condition.value[0].unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
          icon: <CreditCard className="mr-1 h-4 w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.returnType",
              id: "filterValue.returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[1].unit",
              placeholder: 0,
              id: "filterValue.condition.value[1].unit",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          startDate: "",
                          endDate: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
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
                    defaultValue: "filterValue.condition.value[0].unit",
                    inputType: "number",
                    id: "filterValue.condition.value[0].unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
          category: "orderPlaced",
          displayName: "Order Placed",
          icon: <Package className="mr-1 h-4 w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.returnType",
              id: "filterValue.returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[1].unit",
              placeholder: 0,
              id: "filterValue.condition.value[1].unit",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          startDate: "",
                          endDate: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
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
                    defaultValue: "filterValue.condition.value[0].unit",
                    inputType: "number",
                    id: "filterValue.condition.value[0].unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
          category: "checkoutStarted",
          displayName: "Checkout started",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.returnType",
              id: "filterValue.returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[1].unit",
              placeholder: 0,
              id: "filterValue.condition.value[1].unit",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          startDate: "",
                          endDate: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          unit: 6,
                          type: "days",
                        },
                        {
                          operator: "at_least",
                          unit: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have_not",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          unit: "",
                        },
                      ],
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
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
                    defaultValue: "filterValue.condition.value[0].unit",
                    inputType: "number",
                    id: "filterValue.condition.value[0].unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
      recommendations: [
        "orderCanceled",
        "orderFulfilled",
        "orderRefunded",
        "checkoutStarted",
        "orderPlaced",
        "paidForOrder",
      ],
      showFilterSelectAt: 1,
    },
    {
      id: "products",
      displayName: "Products",
      icon: <ShoppingCart className="mr-1 h-4 w-4" />,
      filters: [
        {
          category: "addedProductToCart",
          displayName: "Added product to cart",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The addedProductToCart event tracks when a user adds a product to their shopping cart. This event is essential for understanding user purchase intent and optimizing the shopping experience. Key details captured include the product ID, product name, quantity, price, user ID (if logged in), session ID, timestamp, and optional metadata like product category or variant. By analyzing this data, businesses can identify popular products, tailor marketing strategies, and reduce cart abandonment rates.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              min: 0,
              inputType: "number",
              id: "input",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "addedProductToCart",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "addedProductToCart",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "addedProductToCart",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "addedProductToCart",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "addedProductToCart",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "addedProductToCart",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "addedProductToCart",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
          description:
            "The orderedProduct event records when a user successfully places an order for a product. This event is critical for tracking completed transactions and understanding purchasing behavior. Key details captured include the order ID, product ID, product name, quantity, price, user ID (if logged in), order total, shipping information, payment method, timestamp, and any promotional codes applied. Analyzing this data helps businesses optimize the checkout process, assess product performance, and improve overall sales strategies.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              min: 0,
              inputType: "number",
              id: "input",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderedProduct",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderedProduct",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderedProduct",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderedProduct",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderedProduct",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderedProduct",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderedProduct",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
            "The submittedProductReview event tracks when a user submits a product review. It includes details such as product ID, user ID, rating, review text, and timestamp. This data helps businesses monitor customer feedback and improve products.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              min: 0,
              inputType: "number",
              id: "input",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "submittedProductReview",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "submittedProductReview",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "submittedProductReview",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "submittedProductReview",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "submittedProductReview",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "submittedProductReview",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "submittedProductReview",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
            "The viewedProduct event tracks when a user views a product page. It captures details like product ID, user ID (if logged in), timestamp, and optional metadata such as session ID or device used. This data helps businesses understand user interest and optimize product visibility",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              min: 0,
              inputType: "number",
              id: "input",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewedProduct",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewedProduct",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewedProduct",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewedProduct",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewedProduct",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewedProduct",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewedProduct",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
      recommendations: [
        "addedProductToCart",
        "viewedProduct",
        "submittedProductReview",
        "addedProductToCart",
      ],
      showFilterSelectAt: 1,
    },
    {
      id: "engagement",
      displayName: "Engagement",
      icon: <MailIcon className="mr-1 h-4 w-4" />,
      filters: [
        {
          category: "clickedOnMail",
          displayName: "Clicked on Mail",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The clickedOnMail event tracks when a user clicks on a link or action within an email. This event provides insights into user engagement with email campaigns by capturing key details such as the specific link clicked, the email campaign ID, the recipient's information, and the timestamp of the action. It is essential for analyzing the effectiveness of email marketing strategies, measuring click-through rates, and optimizing future campaigns.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              min: 0,
              inputType: "number",
              id: "input",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "clickedOnMail",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "clickedOnMail",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "clickedOnMail",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "clickedOnMail",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "clickedOnMail",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "clickedOnMail",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "clickedOnMail",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
          displayName: "Marked Mail As Spam",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The markedMailAsSpam event captures when a user marks an email as spam. This event provides valuable insights into email deliverability issues and user dissatisfaction with email content. Key details tracked include the email campaign ID, recipient information, timestamp of the action, and any associated metadata. This data helps identify problematic patterns, improve email content, and maintain sender reputation.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              min: 0,
              inputType: "number",
              id: "input",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "markedMailAsSpam",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "markedMailAsSpam",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "markedMailAsSpam",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "markedMailAsSpam",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "markedMailAsSpam",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "markedMailAsSpam",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "markedMailAsSpam",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
          displayName: "Mail Delivery Failed",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The mailDeliveryFailed event logs instances when an email fails to be delivered to the recipient. This event is crucial for diagnosing and resolving delivery issues, ensuring optimal email campaign performance. Key details captured include the email campaign ID, recipient's email address, failure reason (e.g., invalid address, blocked, or server error), and the timestamp of the failure. By analyzing these events, businesses can maintain email deliverability, update contact lists, and improve messaging reliability.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              min: 0,
              inputType: "number",
              id: "input",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
          displayName: "Mail Sent",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The mailSent event records the successful dispatch of an email to a recipient. This event is vital for tracking the operational status of email campaigns and ensuring emails are being processed as intended. Key details captured include the email campaign ID, recipient's email address, timestamp of sending, and optional metadata such as subject line or tags. This data helps monitor campaign progress, validate successful transmissions, and provide insights into overall email campaign performance.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              id: "input",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailSent",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailSent",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailSent",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailSent",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailSent",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailSent",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailSent",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
            "The mailOpened event tracks when a recipient opens an email. This event is essential for measuring email engagement and determining the effectiveness of email campaigns. Key details captured include the email campaign ID, recipient's email address, timestamp of the action, and optional metadata like the device or location. By analyzing these events, businesses can gain insights into user behavior, optimize email content, and improve open rates.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              id: "input",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailOpened",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailOpened",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailOpened",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailOpened",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailOpened",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailOpened",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailOpened",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
          description:
            "he optedIn event records when a user voluntarily subscribes or consents to receive communications, such as marketing emails or newsletters. This event is essential for tracking user consent and building a compliant, engaged audience. Key details captured include the user's email address, the timestamp of consent, the source of opt-in (e.g., signup form, in-app prompt), and optional metadata like campaign or referral ID. This information helps businesses ensure compliance with regulations, maintain a positive sender reputation, and segment audiences effectively.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              id: "input",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedIn",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedIn",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedIn",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedIn",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedIn",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedIn",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedIn",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
          displayName: "Opted Out",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The optedOut event tracks when a user unsubscribes or withdraws consent to receive further communications, such as marketing emails or newsletters. This event is critical for ensuring compliance with privacy regulations and respecting user preferences. Key details captured include the user's email address, the timestamp of the action, the source of opt-out (e.g., unsubscribe link, in-app settings), and optional metadata like campaign ID or reason for opting out (if provided). By analyzing these events, businesses can refine their communication strategies, reduce unsubscribe rates, and maintain a positive sender reputation.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              id: "input",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedOut",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedOut",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedOut",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedOut",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedOut",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedOut",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedOut",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
          category: "viewdMail",
          displayName: "Viewed Mail",
          icon: <ShoppingCart className="mr-1 h-4 w-4" />,
          description:
            "The viewedMail event captures when a recipient views or previews an email. This event helps measure engagement and assess the effectiveness of email content. Key details recorded include the email campaign ID, recipient's email address, timestamp of the action, and optional metadata such as the device or email client used. Analyzing this data provides insights into user behavior, helps optimize email strategies, and improves overall campaign performance.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "returnType",
              id: "returnType",
              options: [
                { value: "have", label: "have" },
                { value: "have_not", label: "have not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "counterOperator",
              id: "counterOperator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "input",
              placeholder: "0",
              id: "input",
              min: 0,
              inputType: "number",
            },
            {
              type: "dropdown",
              defaultValue: "operator",
              id: "operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "in_the_last",
                  label: "in the last",
                },
                {
                  value: "not_in_the_last",
                  label: "not in the last",
                },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
                {
                  value: "in_total",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewdMail",
                    valueType: "object",
                    operator: "before",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "at_least",
                      },
                    },
                  },
                },
              },
              {
                for: "before",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewdMail",
                    valueType: "object",
                    operator: "after",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewdMail",
                    valueType: "object",
                    operator: "between",
                    value: {
                      returnType: "have",
                      startDate: "",
                      endDate: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewdMail",
                    valueType: "object",
                    operator: "in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "not_in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewdMail",
                    valueType: "object",
                    operator: "not_in_the_last",
                    value: {
                      returnType: "have",
                      unit: "",
                      type: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
              {
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewdMail",
                    valueType: "object",
                    operator: "in_total",
                    value: {
                      returnType: "have",
                      count: "",
                      counterOperator: "",
                    },
                  },
                },
              },
              {
                for: "on_the_exact_date",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewdMail",
                    valueType: "object",
                    operator: "on_the_exact_date",
                    value: {
                      returnType: "have",
                      date: "",
                      counter: {
                        input: "",
                        counterOperator: "",
                      },
                    },
                  },
                },
              },
            ],
          },

          order: (option: string) => {
            switch (option) {
              case "after":
              case "before":
              case "on_the_exact_date":
                return [
                  {
                    type: "date",
                    defaultValue: "date",
                    id: "date",
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
                    defaultValue: "unit",
                    inputType: "number",
                    id: "unit",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "type",
                    id: "type",
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
      recommendations: [
        "viewdMail",
        "clickedOnMail",
        "optedOut",
        "optedIn",
        "mailOpened",
        "mailSent",
        "mailDeliveryFailed",
        "markedMailAsSpam",
      ],
      showFilterSelectAt: 1,
    },
  ];
  const setRule = (
    rule: any,
    resourceType: string,
    groupIndex: number,
    filterIndex: number
  ) => {
    setFilter((prevFilter) => {
      // Create a deep clone of the previous filter
      const newFilter = JSON.parse(JSON.stringify(prevFilter));

      // Safely navigate and find the target member
      const targetMember = newFilter.group?.members?.[0]?.group?.members?.[
        groupIndex
      ]?.group?.members?.find(
        (member: { rule: { resourceType: string } }) =>
          member?.rule?.resourceType === resourceType
      );
      if (
        targetMember?.rule?.filter?.filters &&
        targetMember.rule.filter.filters[filterIndex] !== undefined
      ) {
        targetMember.rule.filter.filters[filterIndex] = rule;
      }

      return newFilter;
    });
  };
  console.log();
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
    } else if (data.type === "normal") {
      data = data.value;
    }
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
      const group =
        newFilter.group?.members[0]?.group?.members[groupIndex]?.group?.members;
      if (group) {
        const member = group.find(
          (member: any) => member.rule?.resourceType === filterType
        );

        if (member && member.rule?.filter?.filters) {
          member.rule.filter.filters.splice(indexToRemove, 1);
          if (member.rule.filter.filters.length === 0) {
            const ruleIndex = group.findIndex((m: any) => m === member);
            if (ruleIndex !== -1) {
              group.splice(ruleIndex, 1);
            }
          }
        }
      }
      return newFilter;
    });
  };
  const updateFilterRowJunction = (
    groupIndex: string | number,
    resourceType: any,
    value: any
  ) => {
    setFilter((prevFilter) => {
      const newFilter = JSON.parse(JSON.stringify(prevFilter));
      newFilter.group.members[0].group.members[
        groupIndex
      ].group.members.forEach((member: any) => {
        if (member.rule.resourceType === resourceType) {
          member.rule.filter.junction = value;
        }
      });
      return newFilter;
    });
  };
  console.log(filter.group.members[0].group.members[0]);
  const updateFilterJunction = (
    groupIndex: string | number,
    resourceType: any,
    value: any
  ) => {
    const newFilter = JSON.parse(JSON.stringify(filter));

    // setFilter((prevFilter) => {
    //   newFilter.group.members[0].group.members[
    //     groupIndex
    //   ].group
    //   return newFilter;
    // });
  };
  return (
    <div className="flex h-screen p-5 flex-col">
      {filter.type === "group" ? (
        filter.group.members[0].group.members.map((member, index) => (
          <GroupCard
            key={index}
            member={member}
            index={index}
            removeGroup={removeGroup}
            members={filter.group.members[0].group.members}
            updateJunction={updateJunction}
            cloneGroup={cloneGroup}
            addFilter={addFilter}
            updateFilterRowJunction={updateFilterRowJunction}
            updateFilterJunction={updateFilterJunction}
            removeFilter={removeFilter}
            setRule={setRule}
            config={config}
          />
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
          onClick={() => {
            setFilter({
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
            });
          }}
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
