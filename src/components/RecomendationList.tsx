import { useMemo } from "react";
import DottedButton from "./DottedButton";

export default function RecommendationsList({
  configItem,
  groupIndex,
  resourceType,
  config,
  filterIndex,
  conditions,
}: {
  configItem: {
    recommendations: string[];
    filters: { category: string; displayName: string }[];
  };
  groupIndex: any;
  resourceType: string;
  filterIndex: number;
  config: any;
  conditions: { filterValue: { property: string } }[];
}) {

  const categoryDisplayMap = useMemo(() => {
    return configItem.filters.reduce((acc, { category, displayName }) => {
      acc[category] = displayName;
      return acc;
    }, {} as Record<string, string>);
  }, [configItem.filters]);

  const filteredRecommendations = useMemo(() => {
    const excludedValues = conditions.map(
      (condition) => condition.filterValue.property
    );

    return configItem.recommendations
      .filter(
        (item) => !excludedValues.includes(item)
      )
      .slice(0, 3);
  }, [configItem.recommendations, conditions]);

  return (
    <div className="tw-flex tw-gap-2 tw-ml-20">
      {filteredRecommendations.map((item, index) => {
        const displayName = categoryDisplayMap[item];
        return displayName ? (
          <DottedButton
            key={index}
            groupIndex={groupIndex}
            condition={item}
            text={displayName}
            filterIndex={filterIndex}
            hoveredOption={displayName}
            resourceType={resourceType}
            config={config}
          />
        ) : null;
      })}
    </div>
  );
}
