import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { getFilterRow } from "@/lib/utils";

const FilterCard = ({
  index,
  removeFilter,
  groupIndex,
  rule,
  setRule,
  matchedFilter,
}: any) => {
  console.log(index, groupIndex);

  return (
    <div className="min-w-fit flex gap-5 items-center">
      {matchedFilter.fields.map((field: any, fieldIndex: number) => {
        return <>{getFilterRow(field)} </>;
      })}
      <Button
        onClick={() => removeFilter(index, groupIndex, "contact")}
        className="p-2 bg-white hover:bg-[#F27052] group"
      >
        <Trash2 className="h-4 w-4 text-[#F27052] group-hover:text-white" />
      </Button>
    </div>
  );
};

export default FilterCard;