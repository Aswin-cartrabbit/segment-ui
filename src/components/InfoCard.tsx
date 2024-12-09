import { Card } from "@/components/ui/card";
import { getValue } from "@/helper/common";
import {
  Box,
  Contact,
  List,
  Mail,
  Repeat,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

export default function InfoCard({
  description,
  hoveredOption,
  category,
}: any) {
  const getRecentlyUsed = () => {
    const stored = sessionStorage.getItem("recentlyUsedFilters");
    return stored ? JSON.parse(stored) : [];
  };
  const recentlyUsed = getRecentlyUsed();
  const isRecentlyUsed = recentlyUsed.includes(hoveredOption);
  return (
    <Card className="z-50 w-80 fixed -right-[110%] rounded-md border bg-popover p-0 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-white overflow-hidden border-[#FFF7ED] min-h-[auto]">
      <div className="p-4 space-y-3">
        <div className="flex items-center min-w-[200px] gap-2">
          {getIcon(category)}
          <div className="text-sm font-medium ">
            <span className="text-gray-400 ">{getValue(category)}</span>
            <span className="mx-1">▸</span>
            {hoveredOption}
          </div>
        </div>

        {isRecentlyUsed && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
            <span className="text-xs text-[#4ade80]">Recently used by you</span>
          </div>
        )}

        <div className="text-sm text-gray-300 leading-tight">
          <p>{description}</p>
        </div>
      </div>
    </Card>
  );
}

const getIcon = (category: string) => {
  switch (category) {
    case "Contact Property":
      return <Contact className="w-5 h-5  text-[#F27052]" />;
    case "Placed Orders":
      return <ShoppingBag className="w-5 h-5 text-[#F27052]" />;
    case "Purchased Product Property":
      return <Box className="w-5 h-5 text-[#F27052]" />;
    case "Abandoned Cart":
      return <ShoppingCart className="w-5 h-5 text-[#F27052]" />;
    case "Email Campaign Properties":
      return <Mail className="w-5 h-5 text-[#F27052]" />;
    case "Automation Properties":
      return <Repeat className="w-5 h-5 text-[#F27052]" />;
    case "List Properties":
      return <List className="w-5 h-5 text-[#F27052]" />;
    default:
      return null;
  }
};
