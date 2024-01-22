import { ReloadIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const LoadingBtn = ({ children }) => {
  return (
    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      {children ? children : "Please wait"}
    </Button>
  );
};

export default LoadingBtn;
