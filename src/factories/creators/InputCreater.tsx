import { Input } from "@/components/ui/input";

interface FieldProps {
  id: string;
  inputType: string; // Example: "text", "number", etc.
  defaultValue?: string | number;
  onChange: (id: string, value: string | number) => void;
  min?: number;
  [key: string]: any; // Support for additional props
}

export const InputCreator = ({
  id,
  inputType,
  defaultValue,
  onChange,
  min,
  ...rest
}: FieldProps) => {
  // Set default value based on the input type
  const computedDefaultValue = (() => {
    if (defaultValue !== undefined && defaultValue !== "") return defaultValue;

    switch (inputType) {
      case "number":
        return 0;
      case "text":
      default:
        return "";
    }
  })();

  return (
    <div>
      <Input
        className="max-w-[200px]"
        type={inputType}
        defaultValue={computedDefaultValue}
        onChange={(e) => onChange(id, e.target.value)}
        {...(min !== undefined && { min })}
      />
    </div>
  );
};