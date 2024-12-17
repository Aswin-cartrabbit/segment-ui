import { Input } from "@/components/ui/input";

export const InputCreater = (field: any) => {
  return <Input className="max-w-[200px]" {...field} />;
};