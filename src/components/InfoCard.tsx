import { Card } from "@/components/ui/card";

import { CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Calendar,
  Clock,
  Activity,
  MoreVertical,
  HelpCircle,
} from "lucide-react";

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
    <Card className="z-50 w-80 fixed -right-[100%] rounded-md border bg-popover p-0 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-white overflow-hidden border-[#FFF7ED] min-h-[auto]">
      {/* <div className="p-4 space-y-3">
        <div className="flex items-center min-w-[200px] gap-2">
          {icon}
          <div className="text-sm font-medium ">
            <span className="text-gray-400 ">{category}</span>
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
      </div> */}
      <UserEventCard
        description={description}
        hoveredOption={hoveredOption}
        category={category}
        icon={icon}
      />
    </Card>
  );
}

function UserEventCard({ description, hoveredOption, category, icon }: any) {
  return (
    <TooltipProvider>
      <div className="p-6 bg-[#FFF5F3]">
        <Card className="w-full max-w-md border-[#FFE1DA] bg-white text-gray-900 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-[#FF6B4A]" />
                {icon}
                <span className="text-gray-500">{category}</span>
                <span className="text-gray-500">▸</span>
                <span className="text-gray-900 font-medium">
                  {hoveredOption}
                </span>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-[#FF6B4A] hover:bg-[#FFF5F3]"
                  >
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Learn more about First Seen</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-2 bg-[#FFF5F3] p-2 rounded-md">
              <div className="h-2 w-2 rounded-full bg-[#FF6B4A]" />
              <span className="text-xs text-[#FF6B4A] font-medium">
                Recently used by you
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
              <a
                href="#"
                className="text-[#FF6B4A] hover:text-[#E55A3A] text-sm inline-flex items-center gap-1 transition-colors"
              >
                More about First Seen
                <Calendar className="h-3 w-3" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-sm bg-[#FFF5F3] p-2 rounded-md">
              <span className="text-gray-500">Tracked as</span>
              <code className="text-[#FF6B4A] bg-white px-2 py-0.5 rounded border border-[#FFE1DA]">
                smp_first_event_time
              </code>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#FFE1DA]">
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-500 hover:text-[#FF6B4A] hover:bg-[#FFF5F3] transition-colors"
                    >
                      <Clock className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View timeline</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-500 hover:text-[#FF6B4A] hover:bg-[#FFF5F3] transition-colors"
                    >
                      <Activity className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View activity</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-[#FF6B4A] hover:bg-[#FFF5F3] transition-colors"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>More options</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
}
