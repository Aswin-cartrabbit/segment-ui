// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import {
//   Clock,
//   Activity,
//   HelpCircle,
//   MoreHorizontal,
//   ChevronRight,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { motion } from "framer-motion";

// interface InfoCardProps {
//   description: string;
//   hoveredOption: string;
//   category: string;
//   icon: React.ReactNode;
// }

// export default function InfoCard({
//   description,
//   hoveredOption,
//   category,
//   icon,
// }: InfoCardProps) {
//   const [isHovered, setIsHovered] = useState(false);

//   const getRecentlyUsed = () => {
//     if (typeof window !== "undefined") {
//       const stored = sessionStorage.getItem("recentlyUsedFilters");
//       return stored ? JSON.parse(stored) : [];
//     }
//     return [];
//   };

//   const recentlyUsed = getRecentlyUsed();
//   const isRecentlyUsed = recentlyUsed.includes(hoveredOption);

//   return (
//     <TooltipProvider>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="tw-max-w-md tw-z-50 tw-w-96 tw-fixed tw--right-[120%] tw-rounded-md tw-border tw-bg-popover tw-p-0 tw-text-popover-foreground tw-outline-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2 tw-bg-white tw-overflow-hidden tw-border-[#FFF7ED] tw-min-h-[auto] tw-text-gray-900 tw-shadow-md"
//       >
//         <Card className="tw-border-none">
//           <CardHeader className="tw-space-y-1 tw-p-4 tw-bg-gradient-to-r tw-from-orange-50 tw-to-white">
//             <div className="tw-flex tw-items-center tw-justify-between">
//               <div className="tw-flex tw-items-center tw-space-x-2">
//                 <div className="tw-text-orange-500">{icon}</div>
//                 <span className="tw-text-sm tw-font-medium tw-text-gray-700">
//                   {category}
//                 </span>
//                 <ChevronRight className="tw-h-4 tw-w-4 tw-text-gray-400" />
//                 <span className="tw-text-sm tw-font-semibold tw-text-gray-900">
//                   {hoveredOption}
//                 </span>
//               </div>
//               <TooltipProvider>
//                 <Tooltip>
//                   <TooltipTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       className="tw-h-8 tw-w-8 tw-text-gray-500 hover:tw-text-orange-500 tw-transition-colors"
//                     >
//                       <HelpCircle className="tw-h-4 tw-w-4" />
//                     </Button>
//                   </TooltipTrigger>
//                   <TooltipContent className="tw-bg-[#FFF7ED] tw-text-[#000000] tw-border-[#FFF7ED] tw-shadow-sm">
//                     <p>Learn more about {hoveredOption}</p>
//                   </TooltipContent>
//                 </Tooltip>
//               </TooltipProvider>
//             </div>
//           </CardHeader>
//           <CardContent className="tw-space-y-4 tw-p-4">
//             <div className="tw-space-y-2">
//               {isRecentlyUsed && (
//                 <Badge
//                   variant="secondary"
//                   className="tw-bg-orange-100 tw-text-orange-700 hover:tw-bg-orange-200 tw-transition-colors"
//                 >
//                   <div className="tw-flex tw-items-center tw-space-x-1">
//                     <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-orange-500" />
//                     <span>Recently used by you</span>
//                   </div>
//                 </Badge>
//               )}
//               <p className="tw-text-sm tw-text-gray-600 tw-leading-relaxed">
//                 {description.length > 250
//                   ? `${description.slice(0, 250)}...`
//                   : description}
//               </p>

//               <Button
//                 variant="link"
//                 className="tw-text-orange-500 hover:tw-text-orange-600 tw-p-0 tw-h-auto tw-font-medium tw-text-sm"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 <motion.span
//                   animate={{ x: isHovered ? 5 : 0 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   className="tw-text-orange-500 tw-mr-6 tw-text-left hover:tw-text-orange-600 tw-p-0 tw-h-auto tw-font-medium tw-text-sm"
//                 >
//                   More about {hoveredOption}
//                 </motion.span>
//               </Button>
//             </div>

//             <div className="tw-bg-orange-50 tw-rounded-lg tw-p-4 tw-space-y-2 tw-border tw-border-orange-100">
//               <div className="tw-flex tw-items-center tw-justify-between tw-text-sm tw-text-gray-700">
//                 <span>Tracked as</span>
//                 <Badge
//                   variant="outline"
//                   className="tw-font-mono tw-text-xs tw-bg-white tw-border-orange-200 tw-text-orange-700"
//                 >
//                   smp_first_event_time
//                 </Badge>
//               </div>
//             </div>
//           </CardContent>
//           <CardFooter className="tw-flex tw-justify-between tw-pt-2 tw-px-4 tw-pb-4 tw-bg-gray-50">
//             <div className="tw-flex tw-space-x-2">
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="tw-h-8 tw-w-8 tw-text-gray-500 hover:tw-text-orange-500 tw-transition-colors"
//                   >
//                     <Clock className="tw-h-4 tw-w-4" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent className="tw-bg-[#FFF7ED] tw-text-[#000000] tw-border-[#FFF7ED] tw-shadow-sm">
//                   View history
//                 </TooltipContent>
//               </Tooltip>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="tw-h-8 tw-w-8 tw-text-gray-500 hover:tw-text-orange-500 tw-transition-colors"
//                   >
//                     <Activity className="tw-h-4 tw-w-4" />
//                   </Button>
//                 </TooltipTrigger>
//                 <TooltipContent className="tw-bg-[#FFF7ED] tw-text-[#000000] tw-border-[#FFF7ED] tw-shadow-sm">
//                   View analytics
//                 </TooltipContent>
//               </Tooltip>
//             </div>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="tw-h-8 tw-w-8 tw-text-gray-500 hover:tw-text-orange-500 tw-transition-colors"
//                 >
//                   <MoreHorizontal className="tw-h-4 tw-w-4" />
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent>More options</TooltipContent>
//             </Tooltip>
//           </CardFooter>
//         </Card>
//       </motion.div>
//     </TooltipProvider>
//   );
// }

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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
import { Badge } from "@/components/ui/badge";
import {
  AnimatePresence,
  motion,
  Transition,
  useAnimation,
} from "framer-motion";

interface InfoCardProps {
  description: string;
  hoveredOption: string;
  category: string;
  icon: React.ReactNode;
}

export default function InfoCard({
  description,
  hoveredOption,
  category,
  icon,
}: InfoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getRecentlyUsed = () => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("recentlyUsedFilters");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  };

  const recentlyUsed = getRecentlyUsed();
  const isRecentlyUsed = recentlyUsed.includes(hoveredOption);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <TooltipProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="tw-max-w-md tw-z-50 tw-w-96 tw-fixed tw--right-[100%] tw-rounded-md tw-border tw-bg-popover tw-p-0 tw-text-popover-foreground tw-outline-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2 tw-bg-white tw-overflow-hidden tw-border-[#FFF7ED] tw-min-h-[auto] tw-text-gray-900 tw-shadow-md"
      >
        <Card>
          <motion.div layout>
            <CardHeader className="tw-space-y-1 tw-p-4 tw-bg-gradient-to-r tw-from-orange-50 tw-to-white">
              <motion.div
                className="tw-flex tw-items-center tw-justify-between"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="tw-flex tw-items-center tw-space-x-2">
                  <motion.div
                    className="tw-text-orange-500"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    {icon}
                  </motion.div>
                  <span className="tw-text-sm tw-font-medium tw-text-gray-700">
                    {category}
                  </span>
                  <ChevronRight className="tw-h-4 tw-w-4 tw-text-gray-400" />
                  <span className="tw-text-sm tw-font-semibold tw-text-gray-900">
                    {hoveredOption}
                  </span>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="tw-text-gray-500 hover:tw-text-orange-500 tw-transition-colors"
                      >
                        <HelpCircle className="tw-h-4 tw-w-4" />
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Learn more about {hoveredOption}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            </CardHeader>
          </motion.div>
          <CardContent className="tw-space-y-4 tw-p-4">
            <motion.div layout className="tw-space-y-2">
              <AnimatePresence>
                {isRecentlyUsed && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge
                      variant="default"
                      className="tw-bg-orange-100 tw-text-orange-700 hover:tw-bg-orange-200 tw-border-none tw-transition-colors"
                    >
                      <div className="tw-flex tw-items-center tw-space-x-1">
                        <motion.span
                          className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-orange-500 tw-text-[#F05E3A]"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <span className="tw-text-orange-700">
                          Recently used by you
                        </span>
                      </div>
                    </Badge>
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.p
                className="tw-text-sm tw-text-gray-600 tw-leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {description.length > 250
                  ? `${description.slice(0, 250)}...`
                  : description}
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="link"
                  className="tw-text-orange-500 hover:tw-text-orange-600 tw-p-0 tw-text-left tw-h-auto tw-font-medium tw-text-sm"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <motion.span
                    animate={{ x: isHovered ? 5 : 0 }}
                    className="tw-text-orange-500"
                  >
                    {isExpanded ? "Less about" : "More about"} {hoveredOption}
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="tw-bg-orange-50 tw-rounded-lg tw-p-4 tw-space-y-2 tw-border tw-border-orange-100"
              // whileHover={{ scale: 1.02 }}
              // transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="tw-flex tw-items-center tw-justify-between tw-text-sm tw-text-gray-700">
                <span>Tracked as</span>
                <Badge
                  variant="outline"
                  className="tw-font-mono tw-text-xs tw-bg-white tw-border-orange-200 tw-text-orange-700"
                >
                  {`rtl_${hoveredOption.toLowerCase().replace(" ", "_")}`}
                </Badge>
              </div>
            </motion.div>
          </CardContent>
          <CardFooter className="tw-flex tw-justify-between tw-pt-2 tw-px-4 tw-pb-4 tw-bg-gray-50">
            <div className="tw-flex tw-space-x-2">
              {["clock", "activity"].map((icon, index) => (
                <Tooltip key={icon}>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="tw-h-8 tw-w-8 tw-text-gray-500 hover:tw-text-orange-500 tw-transition-colors"
                      >
                        {icon === "clock" ? (
                          <Clock className="tw-h-4 tw-w-4" />
                        ) : (
                          <Activity className="tw-h-4 tw-w-4" />
                        )}
                      </Button>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>
                    {icon === "clock" ? "View history" : "View analytics"}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="tw-h-8 tw-w-8 tw-text-gray-500 hover:tw-text-orange-500 tw-transition-colors"
                  >
                    <MoreHorizontal className="tw-h-4 tw-w-4" />
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>More options</TooltipContent>
            </Tooltip>
          </CardFooter>
        </Card>
      </motion.div>
    </TooltipProvider>
  );
}
