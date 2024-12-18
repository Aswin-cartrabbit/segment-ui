import { useMemo } from "react";
import DottedButton from "./DottedButton";

export default function RecommendationsList({
  configItem,
  addFilter,
  groupIndex,
}: {
  configItem: {
    recommendations: string[];
    filters: { category: string; displayName: string }[];
  };
  addFilter: (index: number, category: string, hoveredOption: any) => void;
  groupIndex: any;
}) {
  // Use memoization to map categories to display names
  const categoryDisplayMap = useMemo(() => {
    return configItem.filters.reduce((acc, { category, displayName }) => {
      acc[category] = displayName;
      return acc;
    }, {} as Record<string, string>);
  }, [configItem.filters]);

  return (
    <div className="flex gap-2 ml-20">
      {configItem.recommendations.map((item, index) => {
        const displayName = categoryDisplayMap[item];
        return displayName ? (
          <DottedButton
            key={index}
            index={groupIndex}
            category={item}
            addFilter={addFilter}
            text={displayName}
            hoveredOption={displayName}
          />
        ) : null;
      })}
    </div>
  );
}
