import { Button } from "@chakra-ui/react";
import { cn } from "../../util";

export default function Test() {
  const container = {
    displays: "flex",
    styles: "border-4 border-blue-500",
  };
  return (
    <div className={cn(container)}>
      <button className="font-pretendard-bold">안녕ㅋ</button>
      {/* <Button bg="brand.900" _hover={{ bg: "brand.100" }}>
        Button
      </Button> */}
    </div>
  );
}
