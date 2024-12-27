import { useMemo, useRef } from "react";
import DottedButton from "./DottedButton";
import useStore from "@/stores/FilterStore";

export default function RecommendationsList({
  configItem,
  groupIndex,
  resourceType,
  config,
}: {
  configItem: {
    recommendations: string[];
    filters: { category: string; displayName: string }[];
  };
  groupIndex: any;
  resourceType: string;
  config: any;
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
    <div className="tw-flex tw-gap-2 tw-ml-20">
      {randomRecommendations.map((item, index) => {
        const displayName = categoryDisplayMap[item];
        return displayName ? (
          <DottedButton
            key={index}
            index={groupIndex}
            category={item}
            text={displayName}
            hoveredOption={displayName}
            resourceType={resourceType}
            config={config}
          />
        ) : null;
      })}
    </div>
  );
}
