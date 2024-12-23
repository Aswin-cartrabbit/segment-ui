import { Card, CardFooter } from "@/components/ui/card";

import { CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Clock,
  Activity,
  HelpCircle,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";
import { Badge } from "./ui/badge";

export default function InfoCard({
  description,
  hoveredOption,
  category,
  icon,
}: any) {
  const getRecentlyUsed = () => {
    const stored = sessionStorage.getItem("recentlyUsedFilters");
    return stored ? JSON.parse(stored) : [];
  };
  const recentlyUsed = getRecentlyUsed();
  const isRecentlyUsed = recentlyUsed.includes(hoveredOption);
  return (
    <TooltipProvider>
      <Card className=" max-w-md z-50 w-96 fixed -right-[120%] rounded-md border bg-popover p-0 text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-white overflow-hidden border-[#FFF7ED] min-h-[auto] text-gray-900 shadow-md">
        <CardHeader className="space-y-1 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-[#F27052]">
              {icon}
              </div>
              <span className="text-sm min-w-fit text-nowrap font-medium text-gray-700">
                {category}
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-900">
                {" "}
                {hoveredOption}
              </span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <HelpCircle className="h-4 w-4 text-gray-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Learn more about contact properties</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {isRecentlyUsed && (
              <Badge
                variant="secondary"
                className="bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors"
              >
                <div className="flex items-center space-x-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  <span>Recently used by you</span>
                </div>
              </Badge>
            )}
            <p className="text-sm text-gray-600 leading-relaxed">
              {description}
            </p>
            <Button
              variant="link"
              className="text-orange-500 hover:text-orange-600 p-0 h-auto font-medium text-sm"
            >
              More about {hoveredOption}
            </Button>
          </div>

          <div className="bg-orange-50/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Tracked as</span>
              <Badge variant="outline" className="font-mono text-xs">
                smp_first_event_time
              </Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Clock className="h-4 w-4 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Activity className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4 text-gray-500" />
          </Button>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}
