/**
 * Traverse and update the value of a specific key based on a dot-separated path, including arrays and indexes.
 *
 * @param {Object} obj - The object to traverse.
 * @param {string} path - The dot-separated path to the key to update, including indexes (e.g., "filterValue.condition.value[0].unit").
 * @param {*} newValue - The new value to assign to the key.
 * @returns {Object} - The updated object.
 */
function updateKeyByPath(obj, path, newValue) {
  const keys = path
    .split(".")
    .map((key) => (key.includes("[") ? key.replace("]", "").split("[") : key))
    .flat();

  function traverse(currentObj, currentPath) {
    const [currentKey, ...remainingPath] = currentPath;

    if (Array.isArray(currentObj)) {
      // If the current key is an array index
      const index = parseInt(currentKey, 10);
      if (!isNaN(index)) {
        return currentObj.map((item, idx) =>
          idx === index ? traverse(item, remainingPath) : item
        );
      }
      // Otherwise, map through the array
      return currentObj.map((item) => traverse(item, currentPath));
    }

    if (!currentObj || typeof currentObj !== "object") {
      return currentObj;
    }

    if (remainingPath.length === 0) {
      // We're at the key to update
      return {
        ...currentObj,
        [currentKey]:
          currentObj[currentKey] === undefined
            ? currentObj[currentKey]
            : newValue,
      };
    }

    return {
      ...currentObj,
      [currentKey]: traverse(currentObj[currentKey], remainingPath),
    };
  }

  return traverse(obj, keys);
}

const jsonData = {
  filterType: "filter",
  filterValue: {
    property: "placedOrder",
    valueType: "object",
    return_type: "have-not",
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
};
const updatedData = updateKeyByPath(
  jsonData,
  "filterValue.condition.value[1].unit",
  "months"
);

console.log(JSON.stringify(updatedData, null, 2));

const data = {
  type: "dynamic",
  values: [
    {
      for: "after",
      value: {
        filterType: "filter",
        filterValue: {
          property: "orderCanceled",
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
          property: "orderCanceled",
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
          property: "orderCanceled",
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
};
