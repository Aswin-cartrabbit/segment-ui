import { Button } from "./ui/button";

export default function DottedButton({
  index,
  category,
  hoveredOption,
  text,
  addFilter,
}: {
  index: number;
  category: string;
  hoveredOption: any;
  text: string;
  addFilter: (index: number, category: string, hoveredOption: any) => void;
}) {
  return (
    <Button
      variant="outline"
      className="w-fit justify-start text-left font-normal text-muted-foreground border-[1px] border-dashed border-[#F05E3A] hover:bg-white hover:text-[#F05E3A] active:border-[#F27052] transition-colors"
      onClick={() => addFilter(index, category, hoveredOption)}
    >
      {text}
    </Button>
  );
}