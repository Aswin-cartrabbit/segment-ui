import { useEffect, useState } from "react";
import GroupCard from "./components/GroupCard";
import { Button } from "./components/ui/button";
import {
  AlertOctagon,
  CheckCircle,
  CheckCircle2,
  CreditCard,
  Eye,
  Mail,
  MailIcon,
  MapPin,
  MousePointerClick,
  Package,
  Phone,
  Plus,
  RefreshCcw,
  Send,
  ShoppingCart,
  User,
  XCircle,
  XOctagon,
} from "lucide-react";
import useStore from "./stores/FilterStore";
import { addDays } from "date-fns";
function App() {
  const filter = useStore((state) => state.RuleJson);
  const addGroup = useStore((state) => state.addGroup);
  const clearAll = useStore((state) => state.clearAll);
  const config = [
    {
      id: "contact",
      displayName: "Contacts",
      icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
      conditionLimit: 7,

      filters: [
        {
          type: "common",
          category: "firstName",
          displayName: "First Name",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's first name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "firstName",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "common",
          category: "lastName",
          displayName: "Last Name",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's Last name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
          type: "common",
          category: "subscribedChannels",
          displayName: "Subscribed Channels",
          icon: <Mail className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's subscription status is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].value",
              id: "filterValue.condition.value[0].value",
              options: [
                { value: "not_subscribed", label: "Not Subscribed" },
                { value: "subscribed", label: "Subscribed" },
                { value: "unsubscribed", label: "Unsubscribed" },
              ],
            },
            {
              type: "label",
              text: "to",
            },
            {
              type: "multiSelect",
              defaultValue: "filterValue.condition.value[1].values",
              id: "filterValue.condition.value[1].values",
              placeholder: "Select a channel",
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
            {
              type: "label",
              text: "channel",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "subscribedChannels",
                valueType: "object",
                condition: {
                  junction: "and",
                  value: [
                    {
                      property: "status",
                      value: "subscribed",
                      operator: "is",
                    },
                    {
                      property: "channel",
                      values: [],
                      operator: "is",
                    },
                  ],
                },
              },
            },
          },
        },
        {
          type: "common",
          category: "email",
          displayName: "Email",
          icon: <MailIcon className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's email is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
          type: "common",
          category: "phone",
          displayName: "Phone number",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
        {
          type: "common",
          category: "city",
          displayName: "City",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's city is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
          type: "common",
          category: "state",
          displayName: "State",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's state is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
          type: "common",
          category: "language",
          displayName: "Language",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's language is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
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
          type: "common",
          category: "country",
          displayName: "Country",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's country is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
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
        {
          type: "common",
          category: "postalCode",
          displayName: "ZIP code",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "postalCode",
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
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's language is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
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
          type: "raw",
          category: "importType",
          displayName: "Import Type",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's language is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.value",
              id: "filterValue.value",
              options: [
                { value: "csv_import", label: "CSV Import" },
                { value: "woocommerce", label: "Woocommerce" },
                { value: "shopify", label: "Shopify" },
                { value: "popup", label: "Popup" },
                { value: "cart", label: "Cart" },
              ],
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "importType",
                valueType: "string",
                operator: "is",
                value: "csv_import",
              },
            },
          },
        },
        {
          type: "raw",
          category: "importType",
          displayName: "Import Type",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's language is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.value",
              id: "filterValue.value",
              options: [
                { value: "csv_import", label: "CSV Import" },
                { value: "woocommerce", label: "Woocommerce" },
                { value: "shopify", label: "Shopify" },
                { value: "popup", label: "Popup" },
                { value: "cart", label: "Cart" },
              ],
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "importType",
                valueType: "string",
                operator: "is",
                value: "csv_import",
              },
            },
          },
        },
        {
          type: "raw",
          category: "suppressedChannels",
          displayName: "Suppressed Reason",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's language is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.value",
              id: "filterValue.value",
              options: [
                { value: "bounces", label: "Bounced" },
                { value: "spam_complaints", label: "Spam Compliants" },
                { value: "mannual", label: "Mannual" },
              ],
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "suppressedChannels",
                valueType: "string",
                operator: "is",
                value: "bounces",
              },
            },
          },
        },
        {
          type: "raw",
          category: "status",
          displayName: "Status",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's language is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [{ value: "is", label: "Is" }],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.value",
              id: "filterValue.value",
              options: [
                { value: "active", label: "Active" },
                { value: "inactive", label: "In Active" },
              ],
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "status",
                valueType: "string",
                operator: "is",
                value: "active",
              },
            },
          },
        },
        {
          type: "raw",
          category: "metaData",
          displayName: "Meta Data",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "metaData",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "createdAt",
          displayName: "Created At",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
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
                    property: "createdAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          value: "",
                          params: {
                            main: true,
                          },
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
                    property: "createdAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          value: "",
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
                    property: "createdAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
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
                    property: "createdAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          value: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].value",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].value",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "updatedAt",
          displayName: "UpdatedAt",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
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
                    property: "updatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                          params: {
                            main: true,
                          },
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
                    property: "updatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
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
                    property: "updatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
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
                    property: "updatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "addressLine1",

          displayName: "Address Line 1",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "addressLine1",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "addressLine2",

          displayName: "Address Line 2",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "addressLine2",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "addressIpAddress",
          displayName: "Address IP Address",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's first name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid Ip Address",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "addressIpAddress",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
      ],
      rawFields: [
        {
          group: "Additional Information",
          items: [
            { label: "Import Type", value: "importType" },
            { label: "Suppressed Channels", value: "suppressedChannels" },
            { label: "Status", value: "status" },
            { label: "Meta Data", value: "metaData" },
            { label: "Created At", value: "createdAt" },
            { label: "Updated At", value: "updatedAt" },
          ],
        },
        {
          group: "Address Fields",
          items: [
            { label: "Address Line 1", value: "addressLine1" },
            { label: "Address Line 2", value: "addressLine2" },
            { label: "Address IP Address", value: "addressIpAddress" },
          ],
        },
      ],
      recommendations: [
        "importType",
        "suppressedChannels",
        "status",
        "metaData",
        "createdAt",
        "updatedAt",
        "addressLine1",
        "addressLine2",
        "addressIpAddress",
      ],
    },
    {
      id: "orders",
      displayName: "Orders",
      icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
      conditionLimit: 7,
      filters: [
        {
          type: "common",
          category: "orderCanceled",
          displayName: "Canceled Order",
          showFilterSelectAt: 1,
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
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
              defaultValue: "filterValue.condition.value[2].operator",
              id: "filterValue.condition.value[2].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[2].value",
              placeholder: 0,
              id: "filterValue.condition.value[2].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "cancelled",
                          property: "cartType",
                        },
                        {
                          operator: "in_the_last",
                          property: "cancelledAt",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "cancelled",
                          property: "cartType",
                        },
                        {
                          operator: "after",
                          property: "cancelledAt",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: "1",
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
                    returnType: "have",
                    params: {
                      property: "cartType",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "cancelled",
                          property: "cartType",
                        },
                        {
                          operator: "before",
                          property: "cancelledAt",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          value: "2",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "cancelled",
                          property: "cartType",
                        },
                        {
                          operator: "between",
                          property: "cancelledAt",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "cancelled",
                          property: "cartType",
                        },
                        {
                          property: "cancelledAt",
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "cancelledAt",
                          operator: "at_least",
                          value: 1,
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "cancelled",
                          property: "cartType",
                        },
                        {
                          operator: "in_total",
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "cancelled",
                          property: "cartType",
                        },
                        {
                          operator: "on_the_exact_date",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          value: "1",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[1].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[1].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[1].value.unit",
                    id: "filterValue.condition.value[1].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "orderFulfilled",
          displayName: "Fulfilled Order",
          showFilterSelectAt: 1,
          icon: <CheckCircle className="tw-mr-1 tw-h-4 tw-w-4" />,
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
              defaultValue: "filterValue.condition.value[2].operator",
              id: "filterValue.condition.value[2].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[2].value",
              placeholder: 0,
              id: "filterValue.condition.value[2].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFulfilled",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "completed",
                          property: "cartType",
                        },
                        {
                          operator: "in_the_last",
                          property: "orderDate",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFulfilled",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "completed",
                          property: "cartType",
                        },
                        {
                          operator: "after",
                          property: "orderDate",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: "1",
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
                    valueType: "object",
                    returnType: "have",
                    params: {
                      property: "cartType",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "completed",
                          property: "cartType",
                        },
                        {
                          operator: "before",
                          property: "orderDate",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "2",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "completed",
                          property: "cartType",
                        },
                        {
                          operator: "between",
                          property: "orderDate",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "completed",
                          property: "cartType",
                        },
                        {
                          property: "orderDate",
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "cancelledAt",
                          operator: "at_least",
                          value: 1,
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "completed",
                          property: "cartType",
                        },
                        {
                          operator: "in_total",
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "completed",
                          property: "cartType",
                        },
                        {
                          property: "orderDate",
                          operator: "on_the_exact_date",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[1].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[1].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[1].value.unit",
                    id: "filterValue.condition.value[1].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "orderRefunded",
          displayName: "Refunded Order",
          showFilterSelectAt: 1,
          icon: <RefreshCcw className="tw-mr-1 tw-h-4 tw-w-4" />,
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
              defaultValue: "filterValue.condition.value[2].operator",
              id: "filterValue.condition.value[2].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[2].value",
              placeholder: 0,
              id: "filterValue.condition.value[2].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderRefunded",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "refunded",
                          property: "cartType",
                        },
                        {
                          operator: "in_the_last",
                          property: "OrderDate",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderRefunded",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "refunded",
                          property: "cartType",
                        },
                        {
                          operator: "after",
                          property: "OrderDate",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: "1",
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
                    valueType: "object",
                    returnType: "have",
                    params: {
                      property: "cartType",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "refunded",
                          property: "cartType",
                        },
                        {
                          operator: "before",
                          property: "OrderDate",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "2",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "refunded",
                          property: "cartType",
                        },
                        {
                          operator: "between",
                          property: "OrderDate",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "refunded",
                          property: "cartType",
                        },
                        {
                          property: "OrderDate",
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "cancelledAt",
                          operator: "at_least",
                          value: 1,
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "refunded",
                          property: "cartType",
                        },
                        {
                          operator: "in_total",
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "refunded",
                          property: "cartType",
                        },
                        {
                          property: "OrderDate",
                          operator: "on_the_exact_date",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[1].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[1].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[1].value.unit",
                    id: "filterValue.condition.value[1].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "paidForOrder",
          displayName: "Paid Order",
          showFilterSelectAt: 1,
          icon: <CreditCard className="tw-mr-1 tw-h-4 tw-w-4" />,
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
              defaultValue: "filterValue.condition.value[2].operator",
              id: "filterValue.condition.value[2].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[2].value",
              placeholder: 0,
              id: "filterValue.condition.value[2].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "paidForOrder",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "paid",
                          property: "cartType",
                        },
                        {
                          operator: "in_the_last",
                          property: "OrderDate",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "paidForOrder",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "paid",
                          property: "cartType",
                        },
                        {
                          operator: "after",
                          property: "OrderDate",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: "1",
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
                    valueType: "object",
                    returnType: "have",
                    params: {
                      property: "cartType",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "paid",
                          property: "cartType",
                        },
                        {
                          operator: "before",
                          property: "OrderDate",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "2",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "paid",
                          property: "cartType",
                        },
                        {
                          operator: "between",
                          property: "OrderDate",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "paid",
                          property: "cartType",
                        },
                        {
                          property: "OrderDate",
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "cancelledAt",
                          operator: "at_least",
                          value: 1,
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "paid",
                          property: "cartType",
                        },
                        {
                          operator: "in_total",
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "paid",
                          property: "cartType",
                        },
                        {
                          property: "OrderDate",
                          operator: "on_the_exact_date",
                          value: new Date(),
                          params: {
                            main: true,
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[1].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[1].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[1].value.unit",
                    id: "filterValue.condition.value[1].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "orderPlaced",
          displayName: "Placed Order",
          showFilterSelectAt: 1,
          icon: <Package className="tw-mr-1 tw-h-4 tw-w-4" />,
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
              defaultValue: "filterValue.condition.value[2].operator",
              id: "filterValue.condition.value[2].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[2].value",
              placeholder: 0,
              id: "filterValue.condition.value[2].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderPlaced",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "processing",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "in_the_last",
                          property: "createdAt",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderPlaced",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "processing",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "after",
                          property: "createdAt",
                          value: new Date(),
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: "1",
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
                    valueType: "object",
                    returnType: "have",
                    params: {
                      property: "cartType",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "processing",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "before",
                          property: "createdAt",
                          value: new Date(),
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "2",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "processing",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "between",
                          property: "createdAt",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "processing",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          property: "createdAt",
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          property: "cancelledAt",
                          operator: "at_least",
                          value: 1,
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "processing",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "in_total",
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "processing",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          property: "createdAt",
                          operator: "on_the_exact_date",
                          value: new Date(),
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[1].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[1].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[1].value.unit",
                    id: "filterValue.condition.value[1].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "orderFailed",
          displayName: "Order Failed",
          showFilterSelectAt: 1,
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
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
              defaultValue: "filterValue.condition.value[2].operator",
              id: "filterValue.condition.value[2].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[2].value",
              placeholder: 0,
              id: "filterValue.condition.value[2].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFailed",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "failed",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "in_the_last",
                          property: "orderDate",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderFailed",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "failed",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "after",
                          property: "orderDate",
                          value: new Date(),
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: "1",
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
                    property: "orderFailed",
                    valueType: "object",
                    returnType: "have",
                    params: {
                      property: "cartType",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "failed",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "before",
                          property: "orderDate",
                          value: new Date(),
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "2",
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
                    property: "orderFailed",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "failed",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "between",
                          property: "orderDate",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                    property: "orderFailed",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "failed",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          property: "orderDate",
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          property: "cancelledAt",
                          operator: "at_least",
                          value: 1,
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
                    property: "orderFailed",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "failed",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "in_total",
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                    property: "orderFailed",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "failed",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          property: "orderDate",
                          operator: "on_the_exact_date",
                          value: new Date(),
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[1].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[1].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[1].value.unit",
                    id: "filterValue.condition.value[1].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "onHold",
          displayName: "Order on Hold",
          showFilterSelectAt: 1,
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
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
              defaultValue: "filterValue.condition.value[2].operator",
              id: "filterValue.condition.value[2].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[2].value",
              placeholder: 0,
              id: "filterValue.condition.value[2].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "onHold",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "on-hold",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "in_the_last",
                          property: "orderDate",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "onHold",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "on-hold",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "after",
                          property: "orderDate",
                          value: new Date(),
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: "1",
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
                    property: "onHold",
                    valueType: "object",
                    returnType: "have",
                    params: {
                      property: "cartType",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "on-hold",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "before",
                          property: "orderDate",
                          value: new Date(),
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "2",
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
                    property: "onHold",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "on-hold",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "between",
                          property: "orderDate",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                    property: "onHold",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "on-hold",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          property: "orderDate",
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          property: "cancelledAt",
                          operator: "at_least",
                          value: 1,
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
                    property: "onHold",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "on-hold",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "in_total",
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                    property: "onHold",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "on-hold",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          property: "orderDate",
                          operator: "on_the_exact_date",
                          value: new Date(),
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[1].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[1].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[1].value.unit",
                    id: "filterValue.condition.value[1].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "partiallyRefunded",
          displayName: "Partially Refunded",
          showFilterSelectAt: 1,
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
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
              defaultValue: "filterValue.condition.value[2].operator",
              id: "filterValue.condition.value[2].operator",
              options: [
                { value: "at_least", label: "at least" },
                { value: "exactly", label: "exactly" },
              ],
            },
            {
              type: "input",
              defaultValue: "filterValue.condition.value[2].value",
              placeholder: 0,
              id: "filterValue.condition.value[2].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[1].operator",
              id: "filterValue.condition.value[1].operator",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "partiallyRefunded",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "partially_refunded",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "in_the_last",
                          property: "orderDate",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "partiallyRefunded",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "partially_refunded",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "after",
                          property: "orderDate",
                          value: new Date(),
                        },
                        {
                          operator: "at_least",
                          property: "id",
                          value: "1",
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
                    property: "partiallyRefunded",
                    valueType: "object",
                    returnType: "have",
                    params: {
                      property: "cartType",
                    },
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "partially_refunded",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "before",
                          property: "orderDate",
                          value: new Date(),
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "2",
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
                    property: "partiallyRefunded",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "partially_refunded",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "between",
                          property: "orderDate",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                    property: "partiallyRefunded",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "partially_refunded",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          property: "orderDate",
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          property: "cancelledAt",
                          operator: "at_least",
                          value: 1,
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
                    property: "partiallyRefunded",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "partially_refunded",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          operator: "in_total",
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                    property: "partiallyRefunded",
                    params: {
                      property: "cartType",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "is",
                          value: "partially_refunded",
                          property: "cartType",
                        },
                        {
                          params: {
                            main: true,
                          },
                          property: "orderDate",
                          operator: "on_the_exact_date",
                          value: new Date(),
                        },
                        {
                          property: "id",
                          operator: "at_least",
                          value: "1",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[1].value",
                    id: "filterValue.condition.value[1].value",
                    placeholder: "Enter valid date",
                  },
                ];
              case "between":
                return [
                  {
                    type: "dateRange",
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[1].value.startDate",
                      endDate: "filterValue.condition.value[1].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[1].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[1].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[1].value.unit",
                    id: "filterValue.condition.value[1].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "raw",
          category: "billingAddressPostalCode",
          group: "Billing Address",

          displayName: "ZIP code",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "billingAddressPostalCode",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "language",
          group: "General",
          displayName: "Language",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's language is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
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
          type: "raw",
          category: "shippingAddressLine1",
          group: "Shipping Address",

          displayName: "Address Line 1",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "shippingAddressLine1",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "shippingAddressLine2",
          group: "Shipping Address",

          displayName: "Address Line 2",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "shippingAddressLine2",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "shippingAddressPostalCode",
          group: "Shipping Address",

          displayName: "Postal Code",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "shippingAddressPostalCode",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "shippingAddressCity",
          group: "Shipping Address",

          displayName: "City",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "shippingAddressCity",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "shippingAddressState",
          group: "Shipping Address",

          displayName: "State",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "shippingAddressState",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "shippingAddressCountry",
          group: "Shipping Address",

          displayName: "Country",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's country is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
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
                property: "shippingAddressCountry",
                valueType: "string",
                operator: "is",
                value: "",
              },
            },
          },
        },
        {
          type: "raw",
          category: "shippingAddressPhoneNumber",
          group: "Shipping Address",

          displayName: "Phone number",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "shippingAddressPhoneNumber",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "billingAddressFirstName",
          group: "Billing Address",

          displayName: "First Name",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's first name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "billingAddressFirstName",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "billingAddressLastName",
          group: "Billing Address",

          displayName: "Last Name",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's first name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "billingAddressLastName",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "billingAddressLine1",
          group: "Billing Address",

          displayName: "Address Line 1",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "billingAddressLine1",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "billingAddressLine2",
          group: "Billing Address",

          displayName: "Address Line 2",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "billingAddressLine2",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "billingAddressCountry",
          group: "Billing Address",

          displayName: "Country",
          icon: <MapPin className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's country is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
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
                property: "billingAddressCountry",
                valueType: "string",
                operator: "is",
                value: "",
              },
            },
          },
        },
        {
          type: "raw",
          category: "billingAddressState",
          group: "Billing Address",

          displayName: "State",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "billingAddressState",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "billingAddressCity",
          group: "Billing Address",

          displayName: "City",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The order's postal code is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid postal Code",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "billingAddressCity",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "billingAddressPhoneNumber",
          group: "Billing Address",

          displayName: "Phone number",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "billingAddressPhoneNumber",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "ipAddress",
          group: "General",
          displayName: "IP Address",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's first name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "Enter valid Ip Address",
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
                property: "ipAddress",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "billingAddressPhoneNumber",
          displayName: "Phone number",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "billingAddressPhoneNumber",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "metaData",
          displayName: "Meta Data",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",

          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "metaData",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "discountCodes",
          displayName: "Discount Codes",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",

          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "discountCodes",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "buyerAcceptMarketing",
          displayName: "Buyer Accept Marketing",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.value",
              id: "filterValue.value",
              options: [
                { value: "true", label: "true" },
                { value: "false", label: "false" },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "is",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "buyerAcceptMarketing",
                    valueType: "string",
                    operator: "is",
                    value: true,
                  },
                },
              },
            ],
          },
        },
        {
          type: "raw",
          category: "orderSubTotal",
          displayName: "Sub Total",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "in_between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderSubTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          property: "orderSubTotal",
                          operator: "in_between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                          params: {
                            main: true,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderSubTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          property: "orderSubTotal",
                          operator: "doesNotExist",
                          params: {
                            main: true,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exists",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderSubTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          property: "orderSubTotal",
                          operator: "exists",
                          params: {
                            main: true,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderSubTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          property: "orderSubTotal",
                          operator: "exactly",
                          value: 0,
                          params: {
                            main: true,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderSubTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          property: "orderSubTotal",
                          operator: "less_than",
                          value: 0,
                          params: {
                            main: true,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderSubTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          property: "orderSubTotal",
                          operator: "more_than",
                          value: 0,
                          params: {
                            main: true,
                          },
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "in_between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "orderShippingTotal",
          displayName: "Order Shipping Total",
          group: "Order Details",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "in_between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderShippingTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          params: {
                            main: true,
                          },
                          operator: "in_between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderShippingTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          params: {
                            main: true,
                          },
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderShippingTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          params: {
                            main: true,
                          },
                          operator: "exist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderShippingTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          params: {
                            main: true,
                          },
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderShippingTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          params: {
                            main: true,
                          },
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderShippingTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          params: {
                            main: true,
                          },
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "in_between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "orderDiscountTotal",
          displayName: "Order Discount Total",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderDiscountTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderDiscountTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderDiscountTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderDiscountTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderDiscountTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderDiscountTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "orderTaxTotal",
          displayName: "Order Tax Total",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",

          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderTaxTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderTaxTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderTaxTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderTaxTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderTaxTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderTaxTotal",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "createdAt",
          displayName: "Created At",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
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
                    property: "createdAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
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
                    property: "createdAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
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
                    property: "createdAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
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
                    property: "createdAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "orderDate",
          group: "General",

          displayName: "Order Date",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
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
                    property: "orderDate",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
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
                    property: "orderDate",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
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
                    property: "orderDate",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
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
                    property: "orderDate",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "cancelledAt",
          group: "General",

          displayName: "Cancelled At",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
            },
          ],
          labels: [
            {
              text: "time",
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
                    property: "cancelledAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
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
                    property: "cancelledAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
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
                    property: "cancelledAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
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
                    property: "cancelledAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "TotalAmount",
          group: "General",

          displayName: "Total Amount",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalAmount",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalAmount",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalAmount",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalAmount",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalAmount",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalAmount",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "currency",
          group: "General",
          displayName: "Currency",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's first name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
              ],
            },
            {
              type: "CurrencyPicker",
              defaultValue: "filterValue.value",
              placeholder: "",
              inputType: "text",
              id: "filterValue.value",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "currency",
                valueType: "string",
                operator: "is",
                value: "",
              },
            },
          },
        },
        {
          type: "raw",
          category: "email",
          group: "General",

          displayName: "Email",
          icon: <MailIcon className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's email is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "email",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "paymentMethod",
          group: "General",

          displayName: "Payment Method",
          icon: <MailIcon className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's email is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "paymentMethod",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "orderStatusUpdatedAt",
          group: "Order Details",

          displayName: "Order Status Updated At",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
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
                    property: "orderStatusUpdatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
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
                    property: "OrderStatusUpdatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
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
                    property: "OrderStatusUpdatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
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
                    property: "OrderStatusUpdatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "phone",
          group: "General",

          displayName: "Phone number",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
        {
          type: "raw",
          category: "orderStatus",
          displayName: "Order Status",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.value",
              id: "filterValue.value",
              options: [
                { value: "failed", label: "Failed" },
                { value: "paid", label: "Paid" },
                { value: "completed", label: "Completed" },
                { value: "pending", label: "Pending" },
                { value: "cancelled", label: "Cancelled" },
                { value: "partially_refunded", label: "Partially Refunded" },
                { value: "on-hold", label: "on Hold" },
                { value: "processing", label: "Processing" },
                { value: "refunded", label: "Refunded" },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "is",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderStatus",
                    valueType: "string",
                    operator: "is",
                    value: "paid",
                  },
                },
              },
            ],
          },
        },
        {
          type: "raw",
          category: "fullfilmentStatus",
          group: "General",
          displayName: "Fullfilment Status",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.value",
              id: "filterValue.value",
              options: [
                { value: "FULFILLED", label: "FULFILLED" },
                { value: "ON_HOLD", label: "ON_HOLD" },
                { value: "OPEN", label: "OPEN" },
                { value: "PARTIALLY_FULFILLED", label: "PARTIALLY_FULFILLED" },
                { value: "PENDING_FULFILLMENT", label: "PENDING_FULFILLMENT" },
                { value: "partially_refunded", label: "Partially Refunded" },
                { value: "REQUEST_DECLINED", label: "REQUEST_DECLINED" },
                { value: "processing", label: "Processing" },
                { value: "refunded", label: "Refunded" },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "is",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "fullfilmentStatus",
                    valueType: "string",
                    operator: "is",
                    value: "paid",
                  },
                },
              },
            ],
          },
        },
        {
          type: "raw",
          category: "AbandonedAt",
          displayName: "Abandoned At",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
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
                    property: "AbandonedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
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
                    property: "AbandonedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
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
                    property: "AbandonedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
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
                    property: "AbandonedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "ProductId",
          group: "General",
          displayName: "Product Id",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "ProductId",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "VariantId",
          group: "General",
          displayName: "Variant Id",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "VariantId",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "ProductName",
          group: "General",
          displayName: "Product Name",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "ProductName",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "Category",
          group: "General",
          displayName: "Product Category",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "Category",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "Sku",
          group: "General",
          displayName: "Product Sku",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "Sku",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "Quantity",
          displayName: "Quantity",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "in_between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exists",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exists",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "in_between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "UnitPrice",
          displayName: "Unit Price",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "in_between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exists",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exists",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "in_between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "TotalPrice",
          displayName: "Total Price",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "in_between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exists",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exists",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "in_between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
      ],
      recommendations: [
        "orderSubTotal",
        "orderShippingTotal",
        "orderDiscountTotal",
        "orderTaxTotal",
        "buyerAcceptMarketing",
        "discountCodes",
        "metaData",
        "createdAt",
        "orderStatus",
        "abandonedAt",
        "productId",
        "variantId",
        "productName",
        "category",
        "sku",
        "quantity",
        "unitPrice",
        "totalPrice",
        "discount",
        "orderDate",
        "cancelledAt",
        "totalAmount",
        "currency",
        "language",
        "paymentMethod",
        "fullfilmentStatus",
        "orderStatusUpdatedAt",
        "email",
        "phone",
        "ipAddress",
        "shippingAddressLine1",
        "shippingAddressLine2",
        "shippingAddressPostalCode",
        "shippingAddressCity",
        "shippingAddressState",
        "shippingAddressCountry",
        "shippingAddressPhoneNumber",
        "billingAddressFirstName",
      ],
      rawFields: [
        {
          group: "Order Details",
          items: [
            { value: "orderSubTotal", label: "Sub Total" },
            { value: "orderShippingTotal", label: "Shipping Total" },
            { value: "orderDiscountTotal", label: "Discount Total" },
            { value: "orderTaxTotal", label: "Tax Total" },
            { value: "buyerAcceptMarketing", label: "Buyer Accept Marketing" },
            { value: "discountCodes", label: "Discount Codes" },
            { value: "detaData", label: "Meta Data" },
            { value: "createdAt", label: "Created At" },
            { value: "orderStatus", label: "Order Status" },
            { value: "abandonedAt", label: "Abanded At" },
          ],
        },
        {
          group: "Order Items",
          items: [
            { value: "productId", label: "Product Id" },
            { value: "variantId", label: "Variant Id" },
            { value: "productName", label: "Product Name" },
            { value: "category", label: "Product Category" },
            { value: "sku", label: "Sku" },
            { value: "quantity", label: "Quantity" },
            { value: "unitPrice", label: "Unit Price" },
            { value: "totalPrice", label: "product Price" },
            { value: "discount", label: "Discount" },
          ],
        },
        {
          group: "Shipping Address",
          items: [
            { value: "shippingAddressLine1", label: "Address Line 1" },
            { value: "shippingAddressLine2", label: "Address Line 2" },
            { value: "shippingAddressPostalCode", label: "Postal Code" },
            { value: "shippingAddressCity", label: "City" },
            { value: "shippingAddressState", label: "State" },
            { value: "shippingAddressCountry", label: "Country" },
            { value: "shippingAddressPhoneNumber", label: "Phone Number" },
          ],
        },
        {
          group: "Billing Address",
          items: [
            { value: "billingAddressFirstName", label: "First Name" },
            { value: "billingAddressLastName", label: "Last Name" },
            { value: "billingAddressLine1", label: "Address Line 1" },
            { value: "billingAddressLine2", label: "Address Line 2" },
            { value: "billingAddressPostalCode", label: "Postal Code" },
            { value: "billingAddressCity", label: "City" },
            { value: "billingAddressState", label: "State" },
            { value: "billingAddressCountry", label: "Country" },
            { value: "billingAddressPhoneNumber", label: "Phone Number" },
          ],
        },
        {
          group: "General",
          items: [
            { value: "orderDate", label: "Order Date" },
            { value: "cancelledAt", label: "Cancelled At" },
            { value: "totalAmount", label: "Total Amount" },
            { value: "currency", label: "Currency" },
            { value: "language", label: "Language" },
            { value: "paymentMethod", label: "Payment Method" },
            { value: "fullfilmentStatus", label: "Fulfillment Status" },
            { value: "orderStatusUpdatedAt", label: "Status Updated At" },
            { value: "email", label: "Email" },
            { value: "phone", label: "Phone" },
            { value: "ipAddress", label: "IP Address" },
          ],
        },
      ],
    },
    {
      id: "products",
      displayName: "Products",
      icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
      conditionLimit: 7,
      filters: [
        {
          type: "common",
          category: "addedProductToCart",
          displayName: "Added product to cart",
          showFilterSelectAt: 1,

          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The addedProductToCart event tracks when a user adds a product to their shopping cart. This event is essential for understanding user purchase intent and optimizing the shopping experience. Key details captured include the product ID, product name, quantity, price, user ID (if logged in), session ID, timestamp, and optional metadata like product category or variant. By analyzing this data, businesses can identify popular products, tailor marketing strategies, and reduce cart abandonment rates.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
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
              text: "time",
              index: 2,
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "addedProductToCart",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                          params: {
                            main: true,
                          },
                        },
                        {
                          operator: "at_least",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "addedProductToCart",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "addedProductToCart",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "addedProductToCart",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "addedProductToCart",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "addedProductToCart",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: 0,
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
                    property: "addedProductToCart",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "orderedProduct",
          displayName: "Ordered Product",
          showFilterSelectAt: 1,

          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The orderedProduct event records when a user successfully places an order for a product. This event is critical for tracking completed transactions and understanding purchasing behavior. Key details captured include the order ID, product ID, product name, quantity, price, user ID (if logged in), order total, shipping information, payment method, timestamp, and any promotional codes applied. Analyzing this data helps businesses optimize the checkout process, assess product performance, and improve overall sales strategies.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
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
              text: "time",
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
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: 0,
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
                    property: "orderedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "orderedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "orderedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "orderedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "orderedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "orderedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "submittedProductReview",
          displayName: "Submitted Product Review",
          showFilterSelectAt: 1,

          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The submittedProductReview event tracks when a user submits a product review. It includes details such as product ID, user ID, rating, review text, and timestamp. This data helps businesses monitor customer feedback and improve products.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
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
              text: "time",
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
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: 0,
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
                    property: "submittedProductReview",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "submittedProductReview",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "submittedProductReview",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "submittedProductReview",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 0,
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
                    property: "submittedProductReview",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "submittedProductReview",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "viewedProduct",
          displayName: "Viewed Product",
          showFilterSelectAt: 1,

          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The viewedProduct event tracks when a user views a product page. It captures details like product ID, user ID (if logged in), timestamp, and optional metadata such as session ID or device used. This data helps businesses understand user interest and optimize product visibility",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
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
              text: "time",
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
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: 0,
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
                    property: "viewedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "viewedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "viewedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "viewedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 0,
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
                    property: "viewedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "viewedProduct",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "raw",
          category: "ProductId",
          group: "General",
          displayName: "Product Id",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "ProductId",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "VariantId",
          group: "General",
          displayName: "Variant Id",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "VariantId",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "common",
          category: "ProductName",
          group: "General",
          displayName: "Product Name",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "product name is the name given to the product when it was created. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "ProductName",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "Category",
          group: "General",
          displayName: "Product Category",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "Category",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "Sku",
          group: "General",
          displayName: "Product Sku",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
              ],
            },
            {
              type: "multiInput",
              defaultValue: "filterValue.values",
              placeholder: "",
              inputType: "text",
              id: "filterValue.values",
            },
          ],
          data: {
            type: "normal",
            value: {
              filterType: "filter",
              filterValue: {
                property: "Sku",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "Quantity",
          displayName: "Quantity",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "in_between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exists",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exists",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Quantity",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "in_between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "UnitPrice",
          displayName: "Unit Price",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "in_between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exists",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exists",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "UnitPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "in_between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "TotalPrice",
          displayName: "Total Price",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          group: "Order Details",
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "in_between", label: "between" },
                {
                  value: "exactly",
                  label: "exactly",
                },
                {
                  value: "exists",
                  label: "exists",
                },
                {
                  value: "doesNotExist",
                  label: "does not exist",
                },
                {
                  value: "less_than",
                  label: "less than",
                },
                {
                  value: "more_than",
                  label: "more than",
                },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_between",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_between",
                          value: {
                            min: 0,
                            max: 0,
                          },
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "doesNotExist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "doesNotExist",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exists",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exists",
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "exactly",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "exactly",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "less_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "less_than",
                          value: 0,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "more_than",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalPrice",
                    valueType: "string",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "more_than",
                          value: 0,
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
              case "exactly":
              case "less_than":
              case "more_than":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                ];
              case "in_between":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.min",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.min",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "label",
                    text: "to",
                  },
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.max",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.max",
                    placeholder: "Enter valid number",
                  },
                ];
              default:
                return [];
            }
          },
        },
      ],
      recommendations: [
        "VariantId",
        "ProductName",
        "Category",
        "Sku",
        "Quantity",
        "UnitPrice",
        "TotalPrice",
        "Discount",
      ],
      showFilterSelectAt: 1,
      rawFields: [
        {
          group: "Product Details",
          items: [
            { value: "ProductId", label: "Product Id" },
            { value: "VariantId", label: "Variant Id" },
            { value: "ProductName", label: "Product Name" },
            { value: "Category", label: "Product Category" },
            { value: "Sku", label: "Sku" },
            { value: "Quantity", label: "Quantity" },
            { value: "UnitPrice", label: "Unit Price" },
            { value: "TotalPrice", label: "product Price" },
            { value: "Discount", label: "Discount" },
          ],
        },
      ],
    },
    {
      id: "engagement",
      displayName: "Engagement",
      conditionLimit: 7,
      icon: <MailIcon className="tw-mr-1 tw-h-4 tw-w-4" />,
      filters: [
        {
          type: "common",
          category: "clickedOnMail",
          displayName: "Clicked on Mail",
          icon: <MousePointerClick className="tw-mr-1 tw-h-4 tw-w-4" />,
          showFilterSelectAt: 1,
          description:
            "The clickedOnMail event tracks when a user clicks on a link or action within an email. This event provides insights into user engagement with email campaigns by capturing key details such as the specific link clicked, the email campaign ID, the recipient's information, and the timestamp of the action. It is essential for analyzing the effectiveness of email marketing strategies, measuring click-through rates, and optimizing future campaigns.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
              min: 0,
              inputType: "number",
            },
            {
              text: "time",
              type: "label",
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
              text: "time",
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
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "clickedOnMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "clickedOnMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "clickedOnMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "clickedOnMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "clickedOnMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "clickedOnMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "markedMailAsSpam",
          displayName: "Marked Mail As Spam",
          icon: <AlertOctagon className="tw-mr-1 tw-h-4 tw-w-4" />,
          showFilterSelectAt: 1,
          description:
            "The markedMailAsSpam event captures when a user marks an email as spam. This event provides valuable insights into email deliverability issues and user dissatisfaction with email content. Key details tracked include the email campaign ID, recipient information, timestamp of the action, and any associated metadata. This data helps identify problematic patterns, improve email content, and maintain sender reputation.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
              min: 0,
              inputType: "number",
            },
            {
              text: "time",
              type: "label",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "markedMailAsSpam",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "markedMailAsSpam",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "markedMailAsSpam",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "markedMailAsSpam",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "markedMailAsSpam",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "markedMailAsSpam",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "markedMailAsSpam",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "mailDeliveryFailed",
          displayName: "Mail Delivery Failed",
          icon: <XCircle className="tw-mr-1 tw-h-4 tw-w-4" />,
          showFilterSelectAt: 1,
          description:
            "The mailDeliveryFailed event logs instances when an email fails to be delivered to the recipient. This event is crucial for diagnosing and resolving delivery issues, ensuring optimal email campaign performance. Key details captured include the email campaign ID, recipient's email address, failure reason (e.g., invalid address, blocked, or server error), and the timestamp of the failure. By analyzing these events, businesses can maintain email deliverability, update contact lists, and improve messaging reliability.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "mailSent",
          displayName: "Mail Sent",
          icon: <Send className="tw-mr-1 tw-h-4 tw-w-4" />,
          showFilterSelectAt: 1,
          description:
            "The mailSent event records the successful dispatch of an email to a recipient. This event is vital for tracking the operational status of email campaigns and ensuring emails are being processed as intended. Key details captured include the email campaign ID, recipient's email address, timestamp of sending, and optional metadata such as subject line or tags. This data helps monitor campaign progress, validate successful transmissions, and provide insights into overall email campaign performance.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
              min: 0,
              inputType: "number",
            },
            {
              text: "time",
              type: "label",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailSent",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailSent",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailSent",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailSent",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailSent",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "mailSent",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailSent",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "mailOpened",
          displayName: "Mail Opened",
          icon: <Mail className="tw-mr-1 tw-h-4 tw-w-4" />,
          showFilterSelectAt: 1,
          description:
            "The mailOpened event tracks when a recipient opens an email. This event is essential for measuring email engagement and determining the effectiveness of email campaigns. Key details captured include the email campaign ID, recipient's email address, timestamp of the action, and optional metadata like the device or location. By analyzing these events, businesses can gain insights into user behavior, optimize email content, and improve open rates.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailOpened",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "mailOpened",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailOpened",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailOpened",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailOpened",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "mailOpened",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "mailOpened",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "optedIn",
          displayName: "Opted In",
          icon: <CheckCircle2 className="tw-mr-1 tw-h-4 tw-w-4" />,
          showFilterSelectAt: 1,
          description:
            "he optedIn event records when a user voluntarily subscribes or consents to receive communications, such as marketing emails or newsletters. This event is essential for tracking user consent and building a compliant, engaged audience. Key details captured include the user's email address, the timestamp of consent, the source of opt-in (e.g., signup form, in-app prompt), and optional metadata like campaign or referral ID. This information helps businesses ensure compliance with regulations, maintain a positive sender reputation, and segment audiences effectively.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedIn",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 1,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "optedIn",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "optedIn",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "optedIn",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "optedIn",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "optedIn",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "optedIn",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "optedOut",
          displayName: "Opted Out",
          icon: <XOctagon className="tw-mr-1 tw-h-4 tw-w-4" />,
          showFilterSelectAt: 1,
          description:
            "The optedOut event tracks when a user unsubscribes or withdraws consent to receive further communications, such as marketing emails or newsletters. This event is critical for ensuring compliance with privacy regulations and respecting user preferences. Key details captured include the user's email address, the timestamp of the action, the source of opt-out (e.g., unsubscribe link, in-app settings), and optional metadata like campaign ID or reason for opting out (if provided). By analyzing these events, businesses can refine their communication strategies, reduce unsubscribe rates, and maintain a positive sender reputation.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
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
              text: "time",
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
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "optedOut",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "optedOut",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "optedOut",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "optedOut",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "optedOut",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "optedOut",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "common",
          category: "viewdMail",
          displayName: "Viewed Mail",
          icon: <Eye className="tw-mr-1 tw-h-4 tw-w-4" />,
          showFilterSelectAt: 1,
          description:
            "The viewedMail event captures when a recipient views or previews an email. This event helps measure engagement and assess the effectiveness of email content. Key details recorded include the email campaign ID, recipient's email address, timestamp of the action, and optional metadata such as the device or email client used. Analyzing this data provides insights into user behavior, helps optimize email strategies, and improves overall campaign performance.",
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
              defaultValue: "filterValue.condition.value[1].value",
              placeholder: 0,
              id: "filterValue.condition.value[1].value",
              min: 0,
              inputType: "number",
            },
            {
              type: "label",
              text: "time",
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
          data: {
            type: "dynamic",
            values: [
              {
                for: "in_the_last",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewdMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
                        },
                      ],
                    },
                  },
                },
              },
              {
                for: "after",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "viewdMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "viewdMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "viewdMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "viewdMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "viewdMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: {
                            value: 30,
                            unit: "days",
                          },
                        },
                        {
                          operator: "at_least",
                          value: 3,
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
                    property: "viewdMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_total",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    property: "viewdMail",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
                        },
                        {
                          operator: "at_least",
                          value: "",
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value.value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value.value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].value.unit",
                    id: "filterValue.condition.value[0].value.unit",
                    options: [
                      { value: "days", label: "days" },
                      { value: "weeks", label: "weeks" },
                      { value: "months", label: "months" },
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
          type: "raw",
          category: "Status",
          displayName: "Status",
          icon: <Phone className="tw-mr-1 tw-h-4 tw-w-4" />,
          showFilterSelectAt: 1,

          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is not" },
              ],
            },
            {
              type: "dropdown",
              defaultValue: "filterValue.value",
              id: "filterValue.value",
              options: [
                { value: "clicked", label: "clicked" },
                { value: "failed", label: "failed" },
                { value: "unsubscribed", label: "unsubscribed" },
                { value: "delivered", label: "delivered" },
                { value: "opened", label: "opened" },
                { value: "skipped", label: "skipped" },
              ],
            },
          ],
          data: {
            type: "dynamic",
            values: [
              {
                for: "is",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "Status",
                    valueType: "string",
                    operator: "is",
                    value: "clicked",
                  },
                },
              },
            ],
          },
        },
        {
          type: "raw",
          category: "FailedReason",
          displayName: "Failed Reason",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's first name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "FailedReason",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "CreatedAt",
          displayName: "Created At",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
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
                    property: "CreatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
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
                    property: "CreatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
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
                    property: "CreatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
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
                    property: "CreatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "UpdatedAt",
          displayName: "UpdatedAt",
          icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's order canceled is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.condition.value[0].operator",
              id: "filterValue.condition.value[0].operator",
              options: [
                { value: "after", label: "after" },
                { value: "before", label: "before" },
                { value: "between", label: "between" },
                {
                  value: "on_the_exact_date",
                  label: "on the exact date",
                },
              ],
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
                    property: "UpdatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "after",
                          date: "",
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
                    property: "UpdatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "before",
                          date: "",
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
                    property: "UpdatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          value: {
                            startDate: new Date(),
                            endDate: addDays(new Date(), 20),
                          },
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
                    property: "UpdatedAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "on_the_exact_date",
                          date: "",
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
                return [
                  {
                    type: "date",
                    defaultValue: "filterValue.condition.value[0].date",
                    id: "filterValue.condition.value[0].date",
                    placeholder: "Enter valid date",
                  },
                ];
              case "on_the_exact_date":
                return [
                  {
                    type: "label",
                    text: "that is",
                  },
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
                    defaultValue: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    id: {
                      startDate:
                        "filterValue.condition.value[0].value.startDate",
                      endDate: "filterValue.condition.value[0].value.endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
        {
          type: "raw",
          category: "Subject",
          displayName: "Subject",
          icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's first name is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "contains", label: "Contains" },
                { value: "doesNotContain", label: "Does Not Contain" },
                { value: "doesNotExist", label: "Does Not Exist" },
                { value: "endsWith", label: "Ends With" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "isNot", label: "Is Not" },
                { value: "startsWith", label: "Starts With" },
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
                property: "Subject",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
      ],
      rawFields: [
        {
          group: "Additional Information",
          items: [
            { label: "EventType", value: "EventType" },
            { label: "Failed Reason", value: "FailedReason" },
            { label: "Meta Data", value: "MetaData" },
            { label: "Status", value: "Status" },
            { label: "Created At", value: "CreatedAt" },
            { label: "Updated At", value: "UpdatedAt" },
            { label: "Subject", value: "Subject" },
          ],
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
  return (
    <div className="tw-flex tw-h-screen tw-p-5 tw-flex-col">
      {filter.type === "group" ? (
        filter.group.members[0].group.members.map((member, index) => (
          <GroupCard
            key={index}
            member={member}
            index={index}
            members={filter.group.members[0].group.members}
            config={config}
          />
        ))
      ) : (
        <></>
      )}
      <div className="tw-flex tw-p-2 tw-justify-between">
        <Button
          className="hover:tw-bg-[#F27052] hover:tw-text-white tw-text-[#F27052]"
          variant={"ghost"}
          onClick={() => {
            addGroup();
          }}
        >
          <span className="tw-text-sm tw-flex tw-gap-1 tw-items-center">
            <Plus /> Add Group{" "}
          </span>
        </Button>
        <Button
          className="hover:tw-bg-[#F27052] hover:tw-text-white tw-text-[#F27052]"
          variant={"ghost"}
          onClick={() => {
            clearAll();
          }}
        >
          <span className="tw-text-sm tw-flex tw-gap-1 tw-items-center">
            <Plus /> Clear All{" "}
          </span>
        </Button>
      </div>
      {JsonViewer(filter)}
    </div>
  );
}

export default App;

export const JsonViewer = (jsonData: any) => {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <pre
        style={{
          margin: 0,
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
      >
        {JSON.stringify(jsonData, null, 2)}
      </pre>
    </div>
  );
};
