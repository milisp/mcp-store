import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AppOption {
  id: string;
  name: string;
  needsPath: boolean;
}

const appOptions: AppOption[] = [
  { id: "claude", name: "Claude", needsPath: false },
  { id: "cursor", name: "Cursor", needsPath: true },
  { id: "custom", name: "Custom", needsPath: true },
];

interface AppSelectorProps {
  selectedApp: string;
  onChange: (app: string) => void;
}

export function AppSelector({ selectedApp, onChange }: AppSelectorProps) {
  return (
    <div className="w-64 z-50">
      <Select value={selectedApp} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an application" />
        </SelectTrigger>
        <SelectContent>
          {appOptions.map((option) => (
            <SelectItem key={option.id} value={option.id}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
