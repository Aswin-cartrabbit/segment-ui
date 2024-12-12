const data:any = {
    customer_properties: {
      id: 'customer_properties',
      label: 'Contact Properties',
      rules: [
        {
          fact: 'customer_subscription_status',
          displayName: 'Subscription Status',
          value: 'customer_subscription_status',
          fields: [
            {
              keyName: 'operator',
              type: 'select',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              keyName: 'value',
              type: 'select',

              options: [...subscriptionStatus].map(status => ({
                ...status,
                key: status.value,
              })),
            },
          ],
        },
        {
          fact: 'customer_email',
          displayName: 'Email Address',
          value: 'customer_email',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'contains', label: 'Contains' },
                { value: 'does-not-contains', label: 'Does not contains' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'text',
              keyName: 'value',
              placeholder: 'Enter valid email ID',
              validate(prev) {
                const isText = ['contains', 'does-not-contains'].includes(
                  get(prev, 'operator.value', ''),
                );
                return {
                  pattern: {
                    value: !isText
                      ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                      : /^[a-zA-Z0-9_.-@]+$/,
                    message: 'Enter a valid Email',
                  },
                };
              },
            },
          ],
        },
        {
          fact: 'customer_first_name',
          displayName: 'First Name',
          value: 'customer_first_name',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'contains', label: 'Contains' },
                { value: 'does-not-contains', label: 'Does not contains' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'text',
              keyName: 'value',
              placeholder: 'Enter valid First Name',
              validate: () => {
                return {
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: 'Enter a valid name',
                  },
                };
              },
            },
          ],
        },
        {
          displayName: 'Last Name',
          fact: 'customer_last_name',
          value: 'customer_last_name',
          fields: [
            {
              type: 'select',

              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'contains', label: 'Contains' },
                { value: 'does-not-contains', label: 'Does not contains' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'text',
              keyName: 'value',
              placeholder: 'Enter valid Last Name',
              validate: () => {
                return {
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: 'Enter valid name',
                  },
                };
              },
            },
          ],
        },
        {
          displayName: 'Phone Number',
          fact: 'customer_phone_number',
          value: 'customer_phone_number',
          showValueAs(state) {
            const label = get(state, 'operator.label', '');
            const value = get(state, 'value', '');
            return (
              <span className="px-1">
                Phone Number <span className="fw-bold">{`${label} `}</span>
                <span className="fw-bold">{` ${value}`}</span>
              </span>
            );
          },
          fields: [
            {
              type: 'select',

              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'contains', label: 'Contains' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'text',
              keyName: 'value',
              placeholder: 'Enter valid phone number',
              validate: () => {
                return {
                  pattern: {
                    value: isValidPhoneNumberRegex,
                    message: 'Enter valid phone number',
                  },
                };
              },
            },
          ],
        },
        {
          displayName: 'City',
          fact: 'customer_city',
          value: 'customer_city',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'text',
              keyName: 'value',
              placeholder: 'Enter valid city name',
              validate: () => {
                return {
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: 'Enter valid city name',
                  },
                };
              },
            },
          ],
        },
        {
          displayName: 'Country',
          fact: 'customer_country',
          value: 'customer_country',
          fields: [
            {
              type: 'select',

              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'select',

              keyName: 'value',
              options: [...countries],
            },
          ],
        },
        {
          displayName: 'State',
          fact: 'customer_state',
          value: 'customer_state',
          fields: [
            {
              type: 'select',

              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'text',
              keyName: 'value',
              placeholder: 'Enter valid state name',
              validate: () => {
                return {
                  pattern: {
                    value: /^[a-zA-Z ]*$/,
                    message: 'Enter valid string',
                  },
                };
              },
            },
          ],
        },
        {
          displayName: 'Date Added',
          fact: 'customer_date_added',
          value: 'customer_date_added',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is-before', label: 'Is before' },
                { value: 'is-in-the-last', label: 'Is in the last' },
                { value: 'is-not-in-the-last', label: 'Is not in the last' },
                { value: 'is-after', label: 'Is after' },
                { value: 'is-on', label: 'Is on' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: prev => {
                return dateOperators.includes(prev?.operator?.value)
                  ? 'date'
                  : 'number';
              },

              keyName: 'value',
              placeholder: 'Enter valid number in days',
              meta: {
                suffix: {
                  type: 'number',
                  value(value) {
                    return Number(value) > 1 ? 'Days' : 'Day';
                  },
                },
              },
              validate: (prev, type) => {
                let validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {};

                if (type === 'number') {
                  validate = {
                    pattern: {
                      value: isValidNumberRegex,
                      message: 'Enter valid number',
                    },
                    min: {
                      message: 'Enter a valid positive number.',
                      value: 1,
                    },
                  };
                } else {
                  validate = {
                    validate: value => {
                      const dateValue = new Date(value);

                      if (
                        dateValue instanceof Date &&
                        !isNaN(dateValue.getTime())
                      ) {
                        return true;
                      }

                      return isValidNumber(value) || 'Enter a Valid Number';
                    },
                  };
                }
                return { ...validate };
              },
              setValueas(prev, value, props) {
                if (props.type === 'date') {
                  value = setTimeWithDate({
                    date: value,
                    returnType: 'unix',
                  });
                } else if (prev.operator === 'is-not-in-the-last') {
                  value =
                    isNumber(+value) && !isNaN(+value)
                      ? String(+value)
                      : value;
                }

                return {
                  ...prev,
                  value,
                };
              },
              isValidDate() {
                return disableFutureDates;
              },
              getValue(state, type) {
                if (
                  type === 'number' &&
                  isNumber(+state.value) &&
                  !isNaN(+state.value) &&
                  get(state, 'operator', '') === 'is-not-in-the-last'
                ) {
                  return {
                    value: String(+state.value),
                  };
                }
                return 'value';
              },
              // initialDate: new Date(),
            },
          ],
        },
        {
          displayName: 'Language',
          fact: 'customer_language',
          value: 'customer_language',
          fields: [
            {
              type: 'select',

              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'select',
              keyName: 'value',
              options: [...languages],
            },
          ],
        },
        // {
        //   displayName: 'Last Order Date',
        //   fact: 'last_ordered_at',
        //   value: 'last_ordered_at',
        //   fields: [
        //     {
        //       type: 'select',
        //       keyName: 'operator',
        //       options: [
        //         { value: 'is-before', label: 'Is before' },
        //         { value: 'is-in-the-last', label: 'Is in the last' },
        //         { value: 'is-not-in-the-last', label: 'Is not in the last' },
        //         { value: 'is-after', label: 'Is after' },
        //         { value: 'is-on', label: 'Is on' },
        //       ].map(operator => ({
        //         ...operator,
        //         key: operator.value,
        //       })),
        //     },
        //     {
        //       type: prev => {
        //         return dateOperators.includes(prev?.operator?.value)
        //           ? 'date'
        //           : 'number';
        //       },
        //       meta: {
        //         suffix: {
        //           type: 'number',
        //           value(value) {
        //             return Number(value) > 1 ? 'Days' : 'Day';
        //           },
        //         },
        //       },
        //       keyName: 'value',
        //       placeholder: 'Enter valid date',
        //       validate: (prev, type) => {
        //         let validate: Omit<
        //           RegisterOptions<FieldValues, string>,
        //           'disabled' | 'valueAsNumber' | 'valueAsDate'
        //         > = {};

        //         if (type === 'number') {
        //           validate = {
        //             pattern: {
        //               value: isValidNumberRegex,
        //               message: 'Enter a Valid Number',
        //             },
        //             min: {
        //               message: 'Enter a valid positive number.',
        //               value: 1,
        //             },
        //           };
        //         } else {
        //           validate = {
        //             validate: value => {
        //               const dateValue = new Date(value);

        //               if (
        //                 dateValue instanceof Date &&
        //                 !isNaN(dateValue.getTime())
        //               ) {
        //                 return true;
        //               }

        //               return isValidNumber(value) || 'Enter a Valid Number';
        //             },
        //           };
        //         }

        //         return { ...validate };
        //       },
        //       setValueas(prev, value, type) {
        //         if (type.type === 'date') {
        //           value = setTimeWithDate({
        //             date: value,
        //             returnType: 'unix',
        //           });
        //         } else if (prev.operator === 'is-not-in-the-last') {
        //           value =
        //             isNumber(+value) && !isNaN(+value)
        //               ? String(+value - 1)
        //               : value;
        //         }

        //         return {
        //           ...prev,
        //           value,
        //         };
        //       },
        //       // initialDate: new Date(),
        //       isValidDate() {
        //         return disableFutureDates;
        //       },
        //       getValue(state, type) {
        //         if (
        //           type === 'number' &&
        //           isNumber(+state.value) &&
        //           !isNaN(+state.value) &&
        //           get(state, 'operator', '') === 'is-not-in-the-last'
        //         ) {
        //           return {
        //             value: String(+state.value + 1),
        //           };
        //         }
        //         return 'value';
        //       },
        //     },
        //   ],
        // },
        //@ts-ignore

        ...(isReferralBlocked
          ? []
          : [
              {
                displayName: 'Referral Code',
                fact: 'customer_referral_code',
                value: 'customer_referral_code',
                fields: [
                  {
                    type: 'select',
                    keyName: 'operator',

                    options: [
                      { value: 'is', label: 'Is' },
                      { value: 'is-not', label: 'Is not' },
                      { value: 'contains', label: 'Contains' },
                    ].map(operator => ({
                      ...operator,
                      key: operator.value,
                    })),
                  },
                  {
                    type: () => 'text',
                    keyName: 'value',
                    placeholder: 'Enter valid referral code',
                    validate: () => {
                      return {
                        pattern: {
                          value: /^[a-zA-Z0-9_]*$/,
                          message: 'Enter valid string',
                        },
                      };
                    },
                  },
                ],
              },
            ]),
      ],
    },
    placed_order: {
      id: 'placed_order',
      label: 'Placed orders',
      rules: [
        {
          fact: 'ordered_total_spent',
          displayName: 'Amount spent in total',
          value: 'ordered_total_spent',
          fields: [
            {
              type: 'select',
              keyName: 'operator',

              options: [
                { value: 'gt', label: 'Greater than' },
                { value: 'lt', label: 'Less than' },
                { value: 'gte', label: 'Greater than or Equal to' },
                { value: 'lte', label: 'Less than or Equal to' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'text',
              keyName: 'value',
              placeholder: 'Enter valid amount',
              validate: () => {
                return {
                  pattern: {
                    value: isValidAmountRegex,
                    message: 'Enter valid amount',
                  },
                  min: {
                    message: 'Enter a valid positive number.',
                    value: 0,
                  },
                };
              },
            },
          ],
        },
        {
          fact: 'ordered_count',
          displayName: 'Number of orders',
          value: 'ordered_count',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'gt', label: 'Greater than' },
                { value: 'lt', label: 'Less than' },
                { value: 'gte', label: 'Greater than or Equal to' },
                { value: 'lte', label: 'Less than or Equal to' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'number',
              keyName: 'value',
              placeholder: 'Enter valid number',
              validate: () => {
                return {
                  pattern: {
                    value: isValidNumberRegex,
                    message: 'Enter valid number',
                  },
                };
              },
            },
          ],
        },
        {
          fact: 'ordered_status',
          displayName: 'Order status',
          value: 'ordered_status',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'contains', label: 'Contains' },
                { value: 'does-not-contains', label: 'Does not contains' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: prev => {
                return ['is', 'is-not'].includes(
                  prev?.operator?.value || prev?.value,
                )
                  ? 'select'
                  : 'text';
              },
              keyName: 'value',
              options: order_status_values[user!.type].map(operator => ({
                ...operator,
                key: operator.value,
              })),
              placeholder: 'Enter text',
            },
          ],
        },
        {
          fact: 'ordered_total',
          displayName: 'Amount spent per order',
          value: 'ordered_total',
          fields: [
            {
              type: 'select',
              keyName: 'operator',

              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'gte', label: 'Greater than or Equal to' },
                { value: 'lte', label: 'Less than or Equal to' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'text',
              keyName: 'value',
              placeholder: 'Enter valid amount',
              validate: () => {
                return {
                  pattern: {
                    value: isValidAmountRegex,
                    message: 'Enter valid amount',
                  },
                };
              },
            },
          ],
        },
        {
          fact: 'ordered_date',
          displayName: 'Date of the order',
          value: 'ordered_date',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is-before', label: 'Is before' },
                { value: 'is-in-the-last', label: 'Is in the last' },
                { value: 'is-not-in-the-last', label: 'Is not in the last' },
                { value: 'is-after', label: 'Is after' },
                { value: 'is-on', label: 'Is on' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: prev => {
                const value = get(prev, 'operator.value', '');
                return dateOperators.includes(value) ? 'date' : 'number';
              },
              meta: {
                suffix: {
                  type: 'number',
                  value(value) {
                    return Number(value) > 1 ? 'Days' : 'Day';
                  },
                },
              },
              keyName: 'value',
              placeholder: 'Enter valid date',
              validate: (prev, type) => {
                let validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {};

                if (type === 'number') {
                  validate = {
                    pattern: {
                      value: isValidNumberRegex,
                      message: 'Enter valid number',
                    },
                    min: {
                      message: 'Enter a valid positive number.',
                      value: 1,
                    },
                  };
                } else {
                  validate = {
                    validate: value => {
                      const dateValue = new Date(value);

                      if (
                        dateValue instanceof Date &&
                        !isNaN(dateValue.getTime())
                      ) {
                        return true;
                      }

                      return isValidNumber(value) || 'Enter a Valid Number';
                    },
                  };
                }

                return { ...validate };
              },
              setValueas(prev, value, type) {
                if (type.type === 'date') {
                  value = setTimeWithDate({
                    date: value,
                    returnType: 'unix',
                  });
                } else if (prev.operator === 'is-not-in-the-last') {
                  value =
                    isNumber(+value) && !isNaN(+value)
                      ? String(+value)
                      : value;
                }
                return {
                  ...prev,
                  value,
                };
              },
              // initialDate: new Date(),
              isValidDate() {
                return disableFutureDates;
              },
              getValue(state, type) {
                if (
                  type === 'number' &&
                  isNumber(+state.value) &&
                  !isNaN(+state.value) &&
                  get(state, 'operator', '') === 'is-not-in-the-last'
                ) {
                  return {
                    value: String(+state.value),
                  };
                }
                return 'value';
              },
            },
          ],
        },
        {
          displayName: 'Last Order Date',
          fact: 'last_ordered_at',
          value: 'last_ordered_at',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is-before', label: 'Is before' },
                { value: 'is-in-the-last', label: 'Is in the last' },
                { value: 'is-not-in-the-last', label: 'Is not in the last' },
                { value: 'is-after', label: 'Is after' },
                { value: 'is-on', label: 'Is on' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: prev => {
                return dateOperators.includes(prev?.operator?.value)
                  ? 'date'
                  : 'number';
              },
              meta: {
                suffix: {
                  type: 'number',
                  value(value) {
                    return Number(value) > 1 ? 'Days' : 'Day';
                  },
                },
              },
              keyName: 'value',
              placeholder: 'Enter valid date',
              validate: (prev, type) => {
                let validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {};

                if (type === 'number') {
                  validate = {
                    pattern: {
                      value: isValidNumberRegex,
                      message: 'Enter a Valid Number',
                    },
                    min: {
                      message: 'Enter a valid positive number.',
                      value: 1,
                    },
                  };
                } else {
                  validate = {
                    validate: value => {
                      const dateValue = new Date(value);

                      if (
                        dateValue instanceof Date &&
                        !isNaN(dateValue.getTime())
                      ) {
                        return true;
                      }

                      return isValidNumber(value) || 'Enter a Valid Number';
                    },
                  };
                }

                return { ...validate };
              },
              setValueas(prev, value, type) {
                if (type.type === 'date') {
                  value = setTimeWithDate({
                    date: value,
                    returnType: 'unix',
                  });
                } else if (prev.operator === 'is-not-in-the-last') {
                  value =
                    isNumber(+value) && !isNaN(+value)
                      ? String(+value)
                      : value;
                }

                return {
                  ...prev,
                  value,
                };
              },
              // initialDate: new Date(),
              isValidDate() {
                return disableFutureDates;
              },
              getValue(state, type) {
                if (
                  type === 'number' &&
                  isNumber(+state.value) &&
                  !isNaN(+state.value) &&
                  get(state, 'operator', '') === 'is-not-in-the-last'
                ) {
                  return {
                    value: String(+state.value),
                  };
                }
                return 'value';
              },
            },
          ],
        },
        {
          displayName: 'Currency of the order',
          fact: 'ordered_currency',
          value: 'ordered_currency',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'select',
              keyName: 'value',
              options: [...currency],
            },
          ],
        },
        {
          displayName: `Customer's language when placing the order`,
          fact: 'ordered_language',
          value: 'ordered_language',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'select',
              keyName: 'value',
              options: [...languages],
            },
          ],
        },
        // {
        //   displayName: 'Name of the product purchased',
        //   fact: 'ordered_product_name',
        //   value: 'ordered_product_name',
        //   fields: [
        //     {
        //       type: 'select',
        //       keyName: 'operator',
        //       options: [
        //         { value: 'is', label: 'Is' },
        //         { value: 'is-not', label: 'Is not' },
        //         { value: 'contains', label: 'Contains' },
        //         { value: 'does-not-contains', label: 'Does not contains' },
        //       ].map(operator => ({
        //         ...operator,
        //         key: operator.value,
        //       })),
        //     },
        //     {
        //       type: () => 'text',
        //       keyName: 'value',
        //       placeholder: 'Enter valid product name',
        //     },
        //   ],
        // },
        // {
        //   displayName: 'ID of the product purchased',
        //   fact: 'ordered_product_id',
        //   value: 'ordered_product_id',
        //   fields: [
        //     {
        //       type: 'select',
        //       keyName: 'operator',
        //       options: [
        //         { value: 'is', label: 'Is' },
        //         { value: 'is-not', label: 'Is not' },
        //       ].map(operator => ({
        //         ...operator,
        //         key: operator.value,
        //       })),
        //     },
        //     {
        //       type: () => 'text',
        //       keyName: 'value',
        //       placeholder: 'Enter valid product ID',
        //     },
        //   ],
        // },
        // {
        //   displayName: 'No. of times product is ordered',
        //   fact: 'ordered_product_quantity',
        //   value: 'ordered_product_quantity',
        //   showValueAs: state => {
        //     const productName = get(state, 'product_name', '');
        //     const label = get(state, 'operator.label', '');
        //     const value = get(state, 'value', '');
        //     return (
        //       <span className="px-1">
        //         Ordered product{' '}
        //         <span className="fw-bold">{`${productName} `}</span>
        //         and Quantity {` ${label}`}
        //         <span className="fw-bold">{` ${value}`}</span>
        //       </span>
        //     );
        //   },
        //   fields: [
        //     {
        //       type: 'select',
        //       getValue: () => 'params.product_operator.value',
        //       keyName: 'product_operator',
        //       setValueas: (prev, value) => {
        //         return {
        //           ...prev,
        //           params: {
        //             ...prev?.params,
        //             product_operator: value,
        //           },
        //         };
        //       },
        //       options: [
        //         { value: 'is', label: 'Is' },
        //         { value: 'is-not', label: 'Is not' },
        //         { value: 'contains', label: 'Contains' },
        //         { value: 'does-not-contains', label: 'Does not contains' },
        //       ].map(operator => ({
        //         ...operator,
        //         key: operator.value,
        //       })),
        //     },
        //     {
        //       type: 'text',
        //       keyName: 'product_name',
        //       placeholder: 'Enter valid product name',
        //       validate: () => {
        //         return {
        //           pattern: {
        //             value: /^[a-zA-Z0-9 _.-]*$/,
        //             message: 'Enter valid string',
        //           },
        //         };
        //       },
        //       getValue: () => 'params.product_name.value',
        //       setValueas: (prev, value) => {
        //         return {
        //           ...prev,
        //           params: {
        //             ...prev?.params,
        //             product_name: {
        //               value,
        //               label: value,
        //             },
        //           },
        //         };
        //       },
        //     },
        //     {
        //       type: 'select',
        //       keyName: 'operator',
        //       options: [
        //         { value: 'is', label: 'Is' },
        //         { value: 'is-not', label: 'Is not' },
        //         { value: 'gte', label: 'Greater than or Equal to' },
        //         { value: 'lte', label: 'Less than or Equal to' },
        //       ].map(operator => ({
        //         ...operator,
        //         key: operator.value,
        //       })),
        //     },
        //     {
        //       type: 'number',
        //       keyName: 'value',

        //       placeholder: 'Enter Quantity in number',
        //       validate: () => {
        //         const validate: Omit<
        //           RegisterOptions<FieldValues, string>,
        //           'disabled' | 'valueAsNumber' | 'valueAsDate'
        //         > = {
        //           min: {
        //             message: 'Enter a valid positive number.',
        //             value: 1,
        //           },
        //           pattern: {
        //             value: isValidNumberRegex,
        //             message: 'Enter a valid number.',
        //           },
        //         };

        //         return { ...validate };
        //       },
        //     },
        //   ],
        // },
        {
          displayName: 'Number of item purchased in each order',
          fact: 'ordered_line_item_count',
          value: 'ordered_line_item_count',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'gte', label: 'Greater than or Equal to' },
                { value: 'lte', label: 'Less than or Equal to' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'number',
              keyName: 'value',
              placeholder: 'Enter Quantity in number',
              validate: () => {
                const validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {
                  pattern: {
                    value: isValidNumberRegex,
                    message: 'Enter valid number',
                  },
                  min: {
                    message: 'Enter a valid positive number.',
                    value: 1,
                  },
                };

                return { ...validate };
              },
            },
          ],
        },
      ],
    },
    purchased_product_properties: {
      id: 'purchased_product_properties',
      label: 'Purchased product properties',
      rules: [
        {
          displayName: 'Name of the product purchased',
          fact: 'ordered_product_name',
          value: 'ordered_product_name',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'contains', label: 'Contains' },
                { value: 'does-not-contains', label: 'Does not contains' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'text',
              keyName: 'value',
              placeholder: 'Enter valid product name',
            },
          ],
        },
        {
          displayName: 'ID of the product purchased',
          fact: 'ordered_product_id',
          value: 'ordered_product_id',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: () => 'text',
              keyName: 'value',
              placeholder: 'Enter valid product ID',
            },
          ],
        },
        {
          displayName: 'No. of times product is ordered',
          fact: 'ordered_product_quantity',
          value: 'ordered_product_quantity',
          showValueAs: state => {
            const productName = get(state, 'product_name', '');
            let label = get(state, 'operator.label', '');
            const value = get(state, 'value', '');
            console.log({ value });
            if (!['Is', 'Is not'].includes(label)) {
              label = `is ${label}`;
            }
            return (
              <span className="px-1">
                The number of times{' '}
                <span className="fw-bold">{`${productName} `}</span>
                was ordered {` ${label}`}
                <span className="fw-bold">{` ${value}`}</span> times
              </span>
            );
          },
          fields: [
            {
              type: 'select',
              getValue: () => 'params.product_operator.value',
              keyName: 'product_operator',
              setValueas: (prev, value) => {
                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    product_operator: value,
                  },
                };
              },
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'contains', label: 'Contains' },
                { value: 'does-not-contains', label: 'Does not contains' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'text',
              keyName: 'product_name',
              placeholder: 'Enter valid product name',
              validate: () => {
                return {
                  pattern: {
                    value: /^[a-zA-Z0-9 _.-]*$/,
                    message: 'Enter valid string',
                  },
                };
              },
              getValue: () => 'params.product_name.value',
              setValueas: (prev, value) => {
                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    product_name: {
                      value,
                      label: value,
                    },
                  },
                };
              },
            },
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'gte', label: 'Greater than or Equal to' },
                { value: 'lte', label: 'Less than or Equal to' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'number',
              keyName: 'value',

              placeholder: 'Enter Quantity in number',
              validate: () => {
                const validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {
                  min: {
                    message: 'Enter a valid positive number.',
                    value: 1,
                  },
                  pattern: {
                    value: isValidNumberRegex,
                    message: 'Enter a valid number.',
                  },
                };

                return { ...validate };
              },
            },
          ],
        },
      ],
    },
    
    abandoned_cart: {
      id: 'abandoned_cart',
      label: 'Abandoned cart',
      rules: [
        {
          fact: 'abandoned_date',
          displayName: 'Abandoned date',
          value: 'abandoned_date',

          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is-before', label: 'Is before' },
                { value: 'is-in-the-last', label: 'Is in the last' },
                { value: 'is-not-in-the-last', label: 'Is not in the last' },
                { value: 'is-after', label: 'Is after' },
                { value: 'is-on', label: 'Is on' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: prev => {
                return dateOperators.includes(prev?.operator?.value)
                  ? 'date'
                  : 'number';
              },
              keyName: 'value',
              placeholder: 'Enter valid number in days',
              meta: {
                suffix: {
                  type: 'number',
                  value(value) {
                    return Number(value) > 1 ? 'Days' : 'Day';
                  },
                },
              },
              validate: (prev, type) => {
                let validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {};

                if (type === 'number') {
                  validate = {
                    pattern: {
                      value: isValidNumberRegex,
                      message: 'Enter a Valid Number',
                    },
                    min: {
                      message: 'Enter a valid positive number.',
                      value: 1,
                    },
                  };
                } else {
                  validate = {
                    validate: value => {
                      const dateValue = new Date(value);

                      if (
                        dateValue instanceof Date &&
                        !isNaN(dateValue.getTime())
                      ) {
                        return true;
                      }

                      return isValidNumber(value) || 'Enter a Valid Number';
                    },
                  };
                }

                return { ...validate };
              },
              setValueas(prev, value, props) {
                if (props.type === 'date') {
                  value = setTimeWithDate({
                    date: value,
                    returnType: 'unix',
                  });
                } else if (prev.operator === 'is-not-in-the-last') {
                  value =
                    isNumber(+value) && !isNaN(+value)
                      ? String(+value)
                      : value;
                }

                return {
                  ...prev,
                  value,
                };
              },
              isValidDate() {
                return disableFutureDates;
              },
              getValue(state, type) {
                if (
                  type === 'number' &&
                  isNumber(+state.value) &&
                  !isNaN(+state.value) &&
                  get(state, 'operator', '') === 'is-not-in-the-last'
                ) {
                  return {
                    value: String(+state.value),
                  };
                }
                return 'value';
              },
              // initialDate: new Date(),
            },
          ],
        },
        {
          fact: 'abandoned_product_name',
          displayName: 'Abandoned product name',
          value: 'abandoned_product_name',
          fields: [
            {
              type: 'select',
              keyName: 'operator',

              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'contains', label: 'Contains' },
                { value: 'does-not-contains', label: 'Does not contains' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'text',

              keyName: 'value',
              placeholder: 'Enter valid product name',
            },
          ],
        },
        {
          fact: 'abandoned_product_id',
          displayName: 'Abandoned product ID',
          value: 'abandoned_product_id',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'text',
              keyName: 'value',
              placeholder: 'Enter valid product ID',
            },
          ],
        },
        {
          displayName: 'Total no. of abandoned carts',
          fact: 'abandoned_count',
          value: 'abandoned_count',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'gt', label: 'Greater than' },
                { value: 'lt', label: 'Less than' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'number',
              keyName: 'value',
              placeholder: 'Enter count',
              validate: () => {
                const validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {
                  pattern: {
                    value: isValidNumberRegex,
                    message: 'Enter valid number',
                  },
                  min: {
                    message: 'Enter a valid positive number.',
                    value: 1,
                  },
                };

                return { ...validate };
              },
            },
          ],
        },
        {
          displayName: 'Amount in each abandoned cart',
          fact: 'abandoned_total',
          value: 'abandoned_total',
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
                { value: 'gte', label: 'Greater than or Equal to' },
                { value: 'lte', label: 'Less than or Equal to' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: 'number',
              keyName: 'value',
              placeholder: 'Enter Amount',
              validate: () => {
                const validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {
                  pattern: {
                    value: isValidAmountRegex,
                    message: 'Enter valid amount',
                  },
                  min: {
                    message: 'Enter a valid positive number.',
                    value: 1,
                  },
                };

                return { ...validate };
              },
            },
          ],
        },
      ],
    },
    broadcast: {
      id: 'broadcast',
      label: 'Email Campaign Properties',

      rules: [
        {
          fact: 'broadcast_mail_status',
          displayName: 'Campaign Email Status',
          value: 'broadcast_mail_status',
          showValueAs: state => {
            if (
              isObject(state.date) &&
              !isArray(state.date) &&
              !isNaN(state.date)
            ) {
              state.date = state.date.valueOf();
            }
            return (
              <span className="px-1">
                <span className="fw-bold">
                  {CapitalizeFirst(state.broadcast.label)}
                </span>{' '}
                <span>{state.operator.label}</span>{' '}
                <span className="fw-bold">{state.value.label}</span>{' '}
                <span>{state.date_operator.label}</span>{' '}
                <span className="fw-bold">
                  {state.operator.value === 'is-not'
                    ? ''
                    : dateOperators.includes(
                        get(state, 'date_operator.value', ''),
                      )
                    ? formatDateFromUnix({
                        date: state.date,
                        toFormat: 'MMM-dd-yyyy',
                      })
                    : `${state.date} ${state.date > 1 ? 'Days' : 'Day'}`}
                </span>
              </span>
            );
          },
          fields: [
            {
              type: 'select',
              keyName: 'broadcast',
              options: broadCastOptions,
              getValue: () => {
                return 'params.broadcast.value';
              },
              setValueas: (prev, value) => {
                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    broadcast: value,
                  },
                };
              },
              validate() {
                return {
                  required: true,
                };
              },
            },
            {
              type: 'select',
              keyName: 'operator',
              getValue: () => 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
              validate() {
                return {
                  required: true,
                };
              },
            },
            {
              type: 'select',
              keyName: 'value',
              options: [...mailSentStatusForCampaigns].map(operator => ({
                ...operator,
                key: operator.value,
              })),
              validate() {
                return {
                  required: true,
                };
              },
            },
            {
              // type: 'select',
              type(prev) {
                if (prev?.operator?.value === 'is-not') {
                  return 'hidden';
                }
                return 'select';
              },
              keyName: 'date_operator',
              getValue: () => 'params.date_operator.value',
              setValueas: (prev, value) => {
                if (
                  prev?.operator?.value === 'is-not' ||
                  prev?.operator === 'is-not'
                ) {
                  return {
                    ...prev,
                    params: {
                      ...prev?.params,
                      date_operator: {
                        value: 'is-before-in-unix',
                        label: 'Is before',
                        key: 'is-before-in-unix',
                      },
                    },
                  };
                }
                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    date_operator: value,
                  },
                };
              },
              validate(prev, type) {
                if (prev.operator.value === 'is-not') {
                  return {
                    required: false,
                  };
                }
                return {
                  required: true,
                };
              },
              options: [
                { value: 'is-before-in-unix', label: 'Is before' },
                { value: 'is-in-the-last-in-unix', label: 'Is in the last' },
                {
                  value: 'is-not-in-the-last-in-unix',
                  label: 'Is not in the last',
                },
                { value: 'is-after-in-unix', label: 'Is after' },
                { value: 'is-on-in-unix', label: 'Is on' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
            },
            {
              type: prev => {
                if (prev?.operator?.value === 'is-not') return 'hidden';
                const value = get(prev, 'date_operator.value');
                return dateOperators.includes(value) ? 'date' : 'number';
              },
              keyName: 'date',
              placeholder: 'Enter valid number in days',
              meta: {
                suffix: {
                  type: 'number',
                  value(value) {
                    return Number(value) > 1 ? 'Days' : 'Day';
                  },
                },
              },
              setValueas: (prev, value, props) => {
                if (
                  prev?.operator?.value === 'is-not' ||
                  prev?.operator === 'is-not'
                ) {
                  return {
                    ...prev,
                    params: {
                      ...prev?.params,
                      date: {
                        label: new Date().valueOf(),
                        value: new Date().valueOf(),
                      },
                    },
                  };
                }
                if (props.type === 'date') {
                  value = setTimeWithDate({
                    date: value,
                    returnType: 'unix',
                  });
                } else if (
                  prev.params.date_operator.value ===
                  'is-not-in-the-last-in-unix'
                ) {
                  value =
                    isNumber(+value) && !isNaN(+value)
                      ? String(+value)
                      : value;
                }

                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    date: {
                      label: value,
                      value,
                    },
                  },
                };
              },
              validate: (prev, type) => {
                if (prev.operator.value === 'is-not') {
                  return {
                    required: false,
                  };
                }
                let validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {
                  required: true,

                  validate: value => {
                    const dateValue = new Date(value);

                    if (
                      dateValue instanceof Date &&
                      !isNaN(dateValue.getTime())
                    ) {
                      return true;
                    }

                    return isValidNumber(value) || 'Enter a Valid Number';
                  },
                };

                if (type === 'number') {
                  validate = {
                    required: true,
                    pattern: {
                      value: isValidNumberRegex,
                      message: 'Enter valid number',
                    },
                    min: {
                      message: 'Enter a valid positive number.',
                      value: 1,
                    },
                  };
                }

                return { ...validate };
              },
              isValidDate() {
                return disableFutureDates;
              },
              getValue(state, type) {
                if (
                  type === 'number' &&
                  isNumber(+state.params.date.value) &&
                  !isNaN(+state.params.date.value) &&
                  get(state, 'params.date_operator.value', '') ===
                    'is-not-in-the-last-in-unix'
                ) {
                  return {
                    value: String(+state.params.date.value),
                  };
                }
                return 'params.date.value';
              },
              // initialDate: new Date(),
            },
          ],
        },
      ],
    },

    automation: {
      id: 'automation_properties',
      label: 'Automation Properties',
      rules: [
        {
          fact: 'automation_mail_status',
          displayName: 'Automation Email Status',
          value: 'automation_mail_status',
          showValueAs: state => {
            if (
              isObject(state.date) &&
              !isArray(state.date) &&
              !isNaN(state.date)
            ) {
              state.date = state.date.valueOf();
            }
            return (
              <span className="px-1">
                <span className="fw-bold">
                  {CapitalizeFirst(state?.automation?.label)}
                </span>{' '}
                <span>{state.operator.label}</span>{' '}
                <span className="fw-bold">{state.value.label}</span>{' '}
                <span>{state.date_operator.label}</span>{' '}
                <span className="fw-bold">
                  {state.operator.value === 'is-not'
                    ? ''
                    : dateOperators.includes(
                        get(state, 'date_operator.value', ''),
                      )
                    ? formatDateFromUnix({
                        date: state.date,
                        toFormat: 'MMM-dd-yyyy',
                      })
                    : `${state.date} ${state.date > 1 ? 'Days' : 'Day'}`}
                </span>
              </span>
            );
          },
          fields: [
            {
              type: 'select',
              keyName: 'automation',
              options: automationOptions,
              getValue: () => {
                return 'params.automation.value';
              },
              setValueas: (prev, value) => {
                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    automation: value,
                  },
                };
              },
              validate() {
                return {
                  required: true,
                };
              },
            },
            {
              type: 'select',
              keyName: 'operator',
              getValue: () => 'operator',
              options: [
                { value: 'is', label: 'Is' },
                { value: 'is-not', label: 'Is not' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
              validate() {
                return {
                  required: true,
                };
              },
            },
            {
              type: 'select',
              keyName: 'value',
              options: [...mailSentStatus].map(operator => ({
                ...operator,
                key: operator.value,
              })),
              validate() {
                return {
                  required: true,
                };
              },
            },
            {
              type(prev: any) {
                if (prev?.operator?.value === 'is-not') {
                  return 'hidden';
                }
                return 'select';
              },
              keyName: 'date_operator',
              getValue: () => 'params.date_operator.value',
              setValueas: (prev, value) => {
                if (
                  prev?.operator?.value === 'is-not' ||
                  prev?.operator === 'is-not'
                ) {
                  return {
                    ...prev,
                    params: {
                      ...prev?.params,
                      date_operator: {
                        value: 'is-before-in-unix',
                        label: 'Is before',
                        key: 'is-before-in-unix',
                      },
                    },
                  };
                }

                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    date_operator: value,
                  },
                };
              },
              options: [
                { value: 'is-before-in-unix', label: 'Is before' },
                {
                  value: 'is-in-the-last-in-unix',
                  label: 'Is in the last',
                },
                {
                  value: 'is-not-in-the-last-in-unix',
                  label: 'Is not in the last',
                },
                { value: 'is-after-in-unix', label: 'Is after' },
                { value: 'is-on-in-unix', label: 'Is on' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
              validate(prev, type) {
                if (prev.operator.value === 'is-not') {
                  return {
                    required: false,
                  };
                }

                return {
                  required: true,
                };
              },
            },
            {
              type: prev => {
                if (prev?.operator?.value === 'is-not') return 'hidden';
                const value = get(prev, 'date_operator.value');
                return dateOperators.includes(value) ? 'date' : 'number';
              },
              keyName: 'date',
              getValue(state, type) {
                if (
                  type === 'number' &&
                  isNumber(+state.params.date.value) &&
                  !isNaN(+state.params.date.value) &&
                  get(state, 'params.date_operator.value', '') ===
                    'is-not-in-the-last-in-unix'
                ) {
                  return {
                    value: String(+state.params.date.value),
                  };
                }
                return 'params.date.value';
              },
              setValueas: (prev, value, props) => {
                if (
                  prev?.operator?.value === 'is-not' ||
                  prev?.operator === 'is-not'
                ) {
                  return {
                    ...prev,
                    params: {
                      ...prev?.params,
                      date: {
                        label: new Date().valueOf(),
                        value: new Date().valueOf(),
                      },
                    },
                  };
                }

                if (props.type === 'date') {
                  value = setTimeWithDate({
                    date: value,
                    returnType: 'unix',
                  });
                } else if (
                  get(prev, 'params.date_operator.value') ===
                  'is-not-in-the-last-in-unix'
                ) {
                  value =
                    isNumber(+value) && !isNaN(+value)
                      ? String(+value)
                      : value;
                }

                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    date: {
                      label: value,
                      value,
                    },
                  },
                };
              },
              placeholder: 'Enter valid number in days',
              meta: {
                suffix: {
                  type: 'number',
                  value(value) {
                    return Number(value) > 1 ? 'Days' : 'Day';
                  },
                },
              },
              validate: (prev, type) => {
                if (prev.operator.value === 'is-not') {
                  return {
                    required: false,
                  };
                }
                let validate: Omit<
                  RegisterOptions<FieldValues, string>,
                  'disabled' | 'valueAsNumber' | 'valueAsDate'
                > = {
                  validate: value => {
                    const dateValue = new Date(value);

                    if (
                      dateValue instanceof Date &&
                      !isNaN(dateValue.getTime())
                    ) {
                      return true;
                    }

                    return isValidNumber(value) || 'Enter a Valid Number';
                  },
                  required: true,
                };

                if (type === 'number') {
                  validate = {
                    required: true,
                    pattern: {
                      value: isValidNumberRegex,
                      message: 'Enter valid number',
                    },
                    min: {
                      message: 'Enter a valid positive number.',
                      value: 1,
                    },
                  };
                }

                return { ...validate };
              },
            },
          ],
        },
      ],
    },

    list: {
      id: 'list',
      label: 'List Properties',
      rules: [
        {
          fact: 'contact_in_list',
          displayName: 'Contact present',
          value: 'contact_in_list',
          showValueAs: state => {
            const label = get(state, 'operator.label', '');
            const value = get(state, 'value', []);
            const transformedValue = Array.isArray(value)
              ? value.map((i: any) => i.label).join(',')
              : value;
            const subscriptionStatus = get(
              state,
              'subscription_status.label',
              '',
            );

            return (
              <span className="px-1">
                Contact is {label}
                <span className="fw-bold">{` ${transformedValue} `}</span>&
                Subscription status is
                <span className="fw-bold">{` ${subscriptionStatus}`}</span>
              </span>
            );
          },
          fields: [
            {
              type: 'select',
              keyName: 'operator',
              getValue: () => 'operator',
              options: [
                { value: 'in', label: 'In' },
                { value: 'not-in', label: 'Not in' },
              ].map(operator => ({
                ...operator,
                key: operator.value,
              })),
              validate() {
                return {
                  required: true,
                };
              },
            },
            {
              type: 'multiSelectSelect',
              getValue(state, type, keyName) {
                if (!state.value) return [];

                const options = listOptions.filter(x =>
                  state.value.includes(x.value),
                );
                if (isEmpty(options)) return [];

                return options;
              },
              keyName: 'value',
              placeholder: 'List',
              options: listOptions,
            },
            {
              type: 'select',
              keyName: 'subscription_operator',
              options: [
                {
                  value: 'is',
                  label: 'Is',
                  key: 'is',
                },
              ],
              validate() {
                return {
                  required: true,
                };
              },
              setValueas(prev, value) {
                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    subscription_operator: {
                      value: get(value, 'value'),
                      label: get(value, 'label'),
                    },
                  },
                };
              },
              getValue: () => {
                return 'params.subscription_operator.value';
              },
            },
            {
              type: 'select',
              keyName: 'subscription_status',
              options: [
                {
                  value: 'subscribed',
                  label: 'Subscribed',
                  key: 'subscribed',
                },
                {
                  value: 'unsubscribed',
                  label: 'Unsubscribed',
                  key: 'unsubscribed',
                },
              ],
              validate() {
                return {
                  required: true,
                };
              },
              setValueas(prev, value) {
                return {
                  ...prev,
                  params: {
                    ...prev?.params,
                    subscription_status: {
                      value: get(value, 'value'),
                      label: get(value, 'label'),
                    },
                  },
                };
              },
              getValue: () => 'params.subscription_status.value',
            },
          ],
        },
      ],
    },
  }