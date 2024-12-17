import { Button } from "@/components/ui/button";
export default function DottedButton({ text, onClick }: any) {
  return (
    <>
      <Button
        variant="outline"
        className="w-fit justify-start text-left font-normal text-muted-foreground border-[1px] border-dashed border-[#F05E3A] hover:bg-white  hover:text-[#F05E3A] active:border-[#F27052] transition-colors"
        onClick={() => onClick()}
      >
        {text}
      </Button>
    </>
  );
}