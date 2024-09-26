import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

function LoadingButton() {
  return (
    <div>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>
    </div>
  );
}

export default LoadingButton;
