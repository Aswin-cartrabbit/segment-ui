import { Button } from "./ui/button";

export default function DottedButton({
  index,
  category,
  text,
  addFilter,
  resourceType,
}: {
  index: number;
  category: string;
  hoveredOption: any;
  text: string;
  addFilter: (index: number, category: string, hoveredOption: any) => void;
  resourceType: string;
}) {
  return (
    <Button
      variant="outline"
      className="tw-w-fit tw-justify-start tw-text-left tw-font-normal tw-text-muted-foreground tw-border-[1px] tw-border-dashed tw-border-[#F05E3A] hover:tw-bg-white hover:tw-text-[#F05E3A] active:tw-border-[#F27052] tw-transition-colors"
      onClick={() => addFilter(index, resourceType, category)}
    >
      {text}
    </Button>
  );
}
