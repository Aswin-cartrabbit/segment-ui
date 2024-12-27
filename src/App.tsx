import { useState } from "react";
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
function App() {
  const filter = useStore((state) => state.RuleJson);
  const setFilter = useStore((state) => state.addFilter);
  const addGroup = useStore((state) => state.addGroup);
  const clearAll = useStore((state) => state.clearAll);
  const config = [
    {
      id: "contact",
      displayName: "Contacts",
      icon: <User className="tw-mr-1 tw-h-4 tw-w-4" />,
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
          type: "common",

          category: "subscribedChannels",
          displayName: "Subscribed Channels",
          icon: <Mail className="tw-mr-1 tw-h-4 tw-w-4" />,
          description:
            "The user's subscription status is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
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
              type: "dropdown",
              defaultValue: "filterValue.value.status",
              id: "filterValue.value.status",
              options: [
                { value: "not_subscribed", label: "Not Subscribed" },
                { value: "subscribed", label: "Subscribed" },
                { value: "unsubscribed", label: "Unsubscribed" },
              ],
            },
            {
              type: "multiSelect",
              defaultValue: "filterValue.value.values",
              id: "filterValue.value.values",
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
                operator: "is",
                value: {
                  status: "",
                  values: [],
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
          type: "raw",
          category: "ImportType",
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
                { value: "is_not", label: "Is Not" },
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
                property: "ImportType",
                valueType: "string",
                operator: "is",
                value: "csv_import",
              },
            },
          },
        },
        {
          type: "raw",
          category: "ImportType",
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
                { value: "is_not", label: "Is Not" },
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
                property: "ImportType",
                valueType: "string",
                operator: "is",
                value: "csv_import",
              },
            },
          },
        },
        {
          type: "raw",
          category: "SuppressedChannels",
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
                { value: "is_not", label: "Is Not" },
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
                property: "SuppressedChannels",
                valueType: "string",
                operator: "is",
                value: "bounces",
              },
            },
          },
        },
        {
          type: "raw",
          category: "Status",
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
                property: "Status",
                valueType: "string",
                operator: "is",
                value: "active",
              },
            },
          },
        },
        {
          type: "raw",
          category: "MetaData",
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
                property: "MetaData",
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
                          startDate: "",
                          endDate: "",
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
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
                          startDate: "",
                          endDate: "",
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
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
          category: "AddressLine1",

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
                property: "AddressLine1",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "AddressLine2",

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
                property: "AddressLine2",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "AddressIpAddress",
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
                property: "AddressIpAddress",
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
            { label: "Import Type", value: "ImportType" },
            { label: "Suppressed Channels", value: "SuppressedChannels" },
            { label: "Status", value: "Status" },
            { label: "Meta Data", value: "MetaData" },
            { label: "Created At", value: "CreatedAt" },
            { label: "Updated At", value: "UpdatedAt" },
          ],
        },
        {
          group: "Address Fields",
          items: [
            { label: "Address Line 1", value: "AddressLine1" },
            { label: "Address Line 2", value: "AddressLine2" },
            { label: "Address IP Address", value: "AddressIpAddress" },
          ],
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
        "postalCode",
      ],
    },
    {
      id: "orders",
      displayName: "Orders",
      icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
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
              text: "times",
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
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 1,
                          type: "days",
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
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "orderCanceled",
                    valueType: "object",
                    returnType: "have",
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
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
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
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 1,
                          type: "days",
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
                for: "in_total",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "orderCanceled",
                    params: {
                      property: "cart_type",
                    },
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                    returnType: "have",
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
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
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
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "orderFulfilled",
                    params: {
                      property: "cart_type",
                    },
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
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
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "orderRefunded",
                    params: {
                      property: "cart_type",
                    },
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
          displayName: "Paid Order ",
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
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
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
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "paidForOrder",
                    params: {
                      property: "cart_type",
                    },
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
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
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
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
                    property: "orderPlaced",
                    params: {
                      property: "cart_type",
                    },
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
          category: "checkoutStarted",
          displayName: "started Checkout",
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
                    property: "checkoutStarted",
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
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have",
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
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "checkoutStarted",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "checkoutStarted",
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
                    property: "checkoutStarted",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
          category: "BillingAddressPostalCode",
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
                property: "BillingAddressPostalCode",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "Language",
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
          type: "raw",
          category: "ShippingAddressLine1",
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
                property: "ShippingAddressLine1",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "ShippingAddressLine2",
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
                property: "ShippingAddressLine2",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "ShippingAddressPostalCode",
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
                property: "ShippingAddressPostalCode",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "ShippingAddressCity",
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
                property: "ShippingAddressCity",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "ShippingAddressState",
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
                property: "ShippingAddressState",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "ShippingAddressCountry",
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
                property: "ShippingAddressCountry",
                valueType: "string",
                operator: "",
                value: "",
              },
            },
          },
        },
        {
          type: "raw",
          category: "ShippingAddressPhoneNumber",
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
                property: "ShippingAddressPhoneNumber",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "BillingAddressFirstName",
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
                property: "BillingAddressFirstName",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "BillingAddressLastName",
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
                property: "BillingAddressLastName",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "BillingAddressLine1",
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
                property: "BillingAddressLine1",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "BillingAddressLine2",
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
                property: "BillingAddressLine2",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "BillingAddressCountry",
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
                property: "BillingAddressCountry",
                valueType: "string",
                operator: "",
                value: "",
              },
            },
          },
        },
        {
          type: "raw",
          category: "BillingAddressState",
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
                property: "BillingAddressState",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "BillingAddressCity",
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
                property: "BillingAddressCity",
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
          category: "IpAddress",
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
                property: "IpAddress",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "BillingAddressPhoneNumber",
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
                property: "BillingAddressPhoneNumber",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "MetaData",
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
                property: "MetaData",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "DiscountCodes",
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
                property: "DiscountCodes",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "BuyerAcceptMarketing",
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
                { value: "does_not_exist", label: "Does Not Exist" },
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
                    property: "BuyerAcceptMarketing",
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
          category: "OrderSubTotal",
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
                  value: "does_not_exist",
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
                    property: "OrderSubTotal",
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
                for: "does_not_exist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "OrderSubTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "does_not_exist",
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
                    property: "OrderSubTotal",
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
                    property: "OrderSubTotal",
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
                    property: "OrderSubTotal",
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
                    property: "OrderSubTotal",
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
          category: "OrderShippingTotal",
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
                  value: "does_not_exist",
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
                    property: "OrderShippingTotal",
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
                for: "does_not_exist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "OrderShippingTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "does_not_exist",
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
                    property: "OrderShippingTotal",
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
                    property: "OrderShippingTotal",
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
                    property: "OrderShippingTotal",
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
                    property: "OrderShippingTotal",
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
          category: "OrderDiscountTotal",
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
                  value: "does_not_exist",
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
                    property: "OrderDiscountTotal",
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
                for: "does_not_exist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "OrderDiscountTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "does_not_exist",
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
                    property: "OrderDiscountTotal",
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
                    property: "OrderDiscountTotal",
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
                    property: "OrderDiscountTotal",
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
                    property: "OrderDiscountTotal",
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
          category: "OrderTaxTotal",
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
                  value: "does_not_exist",
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
                    property: "OrderTaxTotal",
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
                for: "does_not_exist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "OrderTaxTotal",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "does_not_exist",
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
                    property: "OrderTaxTotal",
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
                    property: "OrderTaxTotal",
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
                    property: "OrderTaxTotal",
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
                    property: "OrderTaxTotal",
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
          category: "CreatedAt",
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
                          startDate: "",
                          endDate: "",
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
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
          category: "OrderDate",
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
                    property: "OrderDate",
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
                    property: "OrderDate",
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
                    property: "OrderDate",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          startDate: "",
                          endDate: "",
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
                    property: "OrderDate",
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
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
          category: "CancelledAt",
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
                    property: "CancelledAt",
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
                    property: "CancelledAt",
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
                    property: "CancelledAt",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "between",
                          startDate: "",
                          endDate: "",
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
                    property: "CancelledAt",
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
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
                  value: "does_not_exist",
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
                for: "does_not_exist",
                value: {
                  filterType: "filter",
                  filterValue: {
                    property: "TotalAmount",
                    valueType: "object",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "does_not_exist",
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
          category: "Currency",
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
                { value: "is_not", label: "Is Not" },
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
                property: "Currency",
                valueType: "string",
                operator: "is",
                value: "",
              },
            },
          },
        },
        {
          type: "raw",
          category: "Email",
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
                property: "Email",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "PaymentMethod",
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
                property: "PaymentMethod",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "OrderStatusUpdatedAt",
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
                    property: "OrderStatusUpdatedAt",
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
                          startDate: "",
                          endDate: "",
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
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
          category: "Phone",
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
                property: "Phone",
                valueType: "string_list",
                operator: "contains",
                values: [],
              },
            },
          },
        },
        {
          type: "raw",
          category: "OrderStatus",
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
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is not" },
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
                    property: "OrderStatus",
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
          category: "FullfilmentStatus",
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
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is not" },
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
                    property: "FullfilmentStatus",
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
                          startDate: "",
                          endDate: "",
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    placeholder: "Enter valid date",
                  },
                ];
              default:
                return [];
            }
          },
        },
      ],
      recommendations: [
        "OrderSubTotal",
        "OrderShippingTotal",
        "OrderDiscountTotal",
        "OrderTaxTotal",
        "BuyerAcceptMarketing",
        "DiscountCodes",
        "CreatedAt",
      ],
      rawFields: [
        {
          group: "Order Details",
          items: [
            { value: "OrderSubTotal", label: "Sub Total" },
            { value: "OrderShippingTotal", label: "Shipping Total" },
            { value: "OrderDiscountTotal", label: "Discount Total" },
            { value: "OrderTaxTotal", label: "Tax Total" },
            { value: "BuyerAcceptMarketing", label: "Buyer Accept Marketing" },
            { value: "DiscountCodes", label: "Discount Codes" },
            { value: "MetaData", label: "Meta Data" },
            { value: "CreatedAt", label: "Created At" },
            { value: "OrderStatus", label: "Order Status" },
            { value: "AbandonedAt", label: "Abanded At" },
          ],
        },
        {
          group: "Order Items",
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
        {
          group: "Shipping Address",
          items: [
            { value: "ShippingAddressLine1", label: "Address Line 1" },
            { value: "ShippingAddressLine2", label: "Address Line 2" },
            { value: "ShippingAddressPostalCode", label: "Postal Code" },
            { value: "ShippingAddressCity", label: "City" },
            { value: "ShippingAddressState", label: "State" },
            { value: "ShippingAddressCountry", label: "Country" },
            { value: "ShippingAddressPhoneNumber", label: "Phone Number" },
          ],
        },
        {
          group: "Billing Address",
          items: [
            { value: "BillingAddressFirstName", label: "First Name" },
            { value: "BillingAddressLastName", label: "Last Name" },
            { value: "BillingAddressLine1", label: "Address Line 1" },
            { value: "BillingAddressLine2", label: "Address Line 2" },
            { value: "BillingAddressPostalCode", label: "Postal Code" },
            { value: "BillingAddressCity", label: "City" },
            { value: "BillingAddressState", label: "State" },
            { value: "BillingAddressCountry", label: "Country" },
            { value: "BillingAddressPhoneNumber", label: "Phone Number" },
          ],
        },
        {
          group: "General",
          items: [
            { value: "OrderDate", label: "Order Date" },
            { value: "CancelledAt", label: "Cancelled At" },
            { value: "TotalAmount", label: "Total Amount" },
            { value: "Currency", label: "Currency" },
            { value: "Language", label: "Language" },
            { value: "PaymentMethod", label: "Payment Method" },
            { value: "FullfilmentStatus", label: "Fulfillment Status" },
            { value: "OrderStatusUpdatedAt", label: "Status Updated At" },
            { value: "Email", label: "Email" },
            { value: "Phone", label: "Phone" },
            { value: "IpAddress", label: "IP Address" },
          ],
        },
      ],
    },
    {
      id: "products",
      displayName: "Products",
      icon: <ShoppingCart className="tw-mr-1 tw-h-4 tw-w-4" />,
      filters: [
        {
          type: "common",
          category: "addedProductToCart",
          displayName: "Added product to cart",
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
                          startDate: "",
                          endDate: "",
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
                    property: "addedProductToCart",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 0,
                          type: "days",
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
                          value: 6,
                          type: "days",
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
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                          value: 6,
                          type: "days",
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
                          value: 6,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                          value: 6,
                          type: "days",
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
                          value: 0,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                          value: 6,
                          type: "days",
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
                          value: 0,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
      icon: <MailIcon className="tw-mr-1 tw-h-4 tw-w-4" />,
      filters: [
        {
          type: "common",
          category: "clickedOnMail",
          displayName: "Clicked on Mail",
          icon: <MousePointerClick className="tw-mr-1 tw-h-4 tw-w-4" />,
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
                          startDate: "",
                          endDate: "",
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
                          value: 6,
                          type: "days",
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
                          value: 6,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                    property: "markedMailAsSpam",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "markedMailAsSpam",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "mailDeliveryFailed",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                    property: "mailSent",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "mailSent",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                    property: "mailOpened",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "mailOpened",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                    property: "optedIn",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "in_the_last",
                          value: 6,
                          type: "days",
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
                    property: "optedIn",
                    valueType: "object",
                    returnType: "have",
                    condition: {
                      junction: "and",
                      value: [
                        {
                          operator: "not_in_the_last",
                          value: 6,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                          value: 6,
                          type: "days",
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
                          value: 6,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
                          startDate: "",
                          endDate: "",
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
                          value: 6,
                          type: "days",
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
                          value: 6,
                          type: "days",
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
                    defaultValue: "",
                    placeholder: "Enter valid date",
                  },
                ];
              case "in_the_last":
              case "not_in_the_last":
                return [
                  {
                    type: "input",
                    defaultValue: "filterValue.condition.value[0].value",
                    inputType: "number",
                    id: "filterValue.condition.value[0].value",
                    placeholder: "Enter valid number",
                  },
                  {
                    type: "dropdown",
                    defaultValue: "filterValue.condition.value[0].type",
                    id: "filterValue.condition.value[0].type",
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
          description:
            "phone number is the personal identifier typically provided when creating their contact profile. It helps personalize interactions and communications.",
          fields: [
            {
              type: "dropdown",
              defaultValue: "filterValue.operator",
              id: "filterValue.operator",
              options: [
                { value: "does_not_exist", label: "Does Not Exist" },
                { value: "exists", label: "Exists" },
                { value: "is", label: "Is" },
                { value: "is_not", label: "Is not" },
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
                          startDate: "",
                          endDate: "",
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
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
                          startDate: "",
                          endDate: "",
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
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
                    },
                    id: {
                      startDate: "filterValue.condition.value[0].startDate",
                      endDate: "filterValue.condition.value[0].endDate",
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