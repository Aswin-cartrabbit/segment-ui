import useStore from "@/stores/FilterStore";
import { Button } from "./ui/button";

export default function DottedButton({
  text,
  resourceType,
  config,
  groupIndex,
  filterIndex,
  condition,
}: {
  groupIndex: number;
  condition: string;
  hoveredOption: any;
  text: string;
  resourceType: string;
  config: any;
  filterIndex: number;
}) {
  const addRawFilter = useStore((state: any) => state.addRawFilter);

  return (
    <Button
      variant="outline"
      className="tw-w-fit tw-justify-start tw-text-left tw-font-normal tw-text-muted-foreground tw-border-[1px] tw-border-dashed tw-border-[#F05E3A] hover:tw-bg-white hover:tw-text-[#F05E3A] active:tw-border-[#F27052] tw-transition-colors"
      onClick={() =>
        addRawFilter(groupIndex, filterIndex, condition, resourceType, config)
      }
    >
      {text}
    </Button>
  );
}
