export const config = [
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
              placeholder: "Enter valid First Name",
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
      ],
    },
  ];