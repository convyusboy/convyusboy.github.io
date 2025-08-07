
import { useMode } from "@/context/ModeContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Briefcase, Music } from "lucide-react";

const ModeToggle = () => {
  const { mode, toggleMode } = useMode();

  return (
    <div className="flex items-center space-x-4">
      <Briefcase 
        size={20} 
        className={`transition-all ${mode === "professional" ? "text-primary" : "text-muted-foreground"}`} 
      />
      <div className="flex items-center space-x-2">
        <Switch 
          id="mode-toggle" 
          checked={mode === "casual"}
          onCheckedChange={toggleMode}
          aria-label="Toggle mode"
        />
        <Label htmlFor="mode-toggle" className="sr-only">Toggle mode</Label>
      </div>
      <Music 
        size={20} 
        className={`transition-all ${mode === "casual" ? "text-primary" : "text-muted-foreground"}`} 
      />
    </div>
  );
};

export default ModeToggle;
