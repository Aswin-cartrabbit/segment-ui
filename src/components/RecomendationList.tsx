import { useMemo, useRef } from "react";
import DottedButton from "./DottedButton";

export default function RecommendationsList({
  configItem,
  addFilter,
  groupIndex,
  resourceType,
}: {
  configItem: {
    recommendations: string[];
    filters: { category: string; displayName: string }[];
  };
  addFilter: (index: number, category: string, hoveredOption: any) => void;
  groupIndex: any;
  resourceType: string;
}) {
  const categoryDisplayMap = useMemo(() => {
    return configItem.filters.reduce((acc, { category, displayName }) => {
      acc[category] = displayName;
      return acc;
    }, {} as Record<string, string>);
  }, [configItem.filters]);

  const randomRecommendationsRef = useRef(
    [...configItem.recommendations].sort(() => Math.random() - 0.5).slice(0, 3)
  );

  const randomRecommendations = randomRecommendationsRef.current;

  return (
    <div className="flex gap-2 ml-20">
      {randomRecommendations.map((item, index) => {
        const displayName = categoryDisplayMap[item];
        return displayName ? (
          <DottedButton
            key={index}
            index={groupIndex}
            category={item}
            addFilter={addFilter}
            text={displayName}
            hoveredOption={displayName}
            resourceType={resourceType}
          />
        ) : null;
      })}
    </div>
  );
}
