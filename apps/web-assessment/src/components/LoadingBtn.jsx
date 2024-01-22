import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const LoadingBtn = ({ children, classname }) => {
  return (
    <Button disabled className={cn(classname)}>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      {children ? children : "Please wait"}
    </Button>
  );
};

export default LoadingBtn;
