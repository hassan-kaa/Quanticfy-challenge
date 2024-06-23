import { FormEventHandler } from "react";
import { Checkbox } from "./ui/checkbox";

const CheckboxItem = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox checked={checked} onCheckedChange={onChange} id={label} />
      <label
        htmlFor={label}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxItem;
